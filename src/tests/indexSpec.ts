import supertest from "supertest";
import app from "../index";
import processPicture from "../modules/picture_processing";
import path from "path";
const request = supertest(app);

// Test the endpoint
describe("test resize end-point", () => {
  it("resize the desired image", async () => {
    const Response = await request.get(
      "/resize?fileName=fjord&height=200&width=500"
    );
    expect(Response.status).toBe(200);
  });
});

// Test function to resize images
describe("test resize Functionality", () => {
  it("resize the desired image", async () => {
    const width = 500;
    const height = 500;
    const fileName = "fjord";
    const imgLocation = path.resolve("./") + `/assets/images/${fileName}.jpg`;
    const currentPath = path.normalize(imgLocation);
    const newImgLocation =
      path.resolve("./assets/thumbnails") +
      `/${fileName}${height}_${width}.jpg`;

    const outputpath = path.normalize(newImgLocation);
    const r = await processPicture(currentPath, width, height, outputpath);
    expect(r).toEqual(1);
  });
});
