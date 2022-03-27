import sharp from "sharp";

const processPicture = async function (
  filename: string,
  width: number,
  height: number,
  target: string
): Promise<number> {
  try {
    await sharp(filename).resize(width, height).toFile(target);
    return 1;
  } catch (err) {
    console.log(err);
    return 0;
  }
};

export default processPicture;
