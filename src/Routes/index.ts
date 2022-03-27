import { Router, Request, Response } from "express";
import Resize from "./api/pictures";
const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send(
    "Hello Please Use resize API like this localhost:3000/resize?fileName=&height&width"
  );
});

routes.get("/resize", Resize);

export default routes;
