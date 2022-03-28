import { Router, Request, Response } from "express";
import Resize from "./api/pictures";
const routes = Router();

routes.get("/", (req: Request, res: Response): void => {
  res.send(
    "Hello Please Use resize API like this localhost:3000/resize?fileName=&height&width"
  );
  return;
});

routes.get("/resize", Resize);

export default routes;
