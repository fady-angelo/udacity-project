import { Request, Response } from "express";
import path from "path";
import * as fs from "fs";
import processPicture from "../../modules/picture_processing";

const Resize = async (req: Request, res: Response): Promise<void> => {
  const fileName = req.query.fileName as string;
  const height = Number(req.query.height);
  const width = Number(req.query.width);
  const imgLocation = path.resolve("./") + `/assets/images/${fileName}.jpg`;
  const currentPath = path.normalize(imgLocation);

  const newImgLocation =
    path.resolve("./assets/thumbnails") + `/${fileName}${height}_${width}.jpg`;

  const outputpath = path.normalize(newImgLocation);

  // const imgs = img.includes(fileName);

  try {
    if (width > 0 && height > 0) {
      if (fileName != null || undefined) {
        if (!isNaN(height) && !isNaN(width)) {
          if (fs.existsSync(currentPath)) {
            if (fs.existsSync(outputpath)) {
              res.sendFile(outputpath);
            } else {
              await processPicture(currentPath, width, height, outputpath);
              res.sendFile(outputpath);
            }
          } else {
            res.send("file not found please check the file name");
          }
        } else {
          res.send("Please check that the height or width is number");
        }
      } else {
        res.send("please enter a name as a query in url");
      }
    } else {
      res.send("please enter width and height with numbers greater than 0");
    }
  } catch (error) {
    console.log(error);
  }

  try {
    if (!fs.existsSync(path.resolve("./assets/thumbnails"))) {
      fs.mkdirSync(path.resolve("./assets/thumbnails"));
    }
  } catch (err) {
    console.error(err);
  }
  return;
};

export default Resize;
