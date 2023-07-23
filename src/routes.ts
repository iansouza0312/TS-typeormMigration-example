import { Router } from "express";
import { SubjectController } from "./controllers/SubjectController";
import { RoomController } from "./controllers/RoomController";

const routes = Router();

routes.post("/subject", new SubjectController().createSubject);
routes.post("/room", new RoomController().createRoom);
routes.post("/romm/:room_id/create", new RoomController().createVideo);

export default routes;
