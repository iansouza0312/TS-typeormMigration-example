import { Request, Response } from "express";
import { RoomRepository } from "../repositories/RoomRepository";
import { VideoRepository } from "../repositories/VideoRepository";

export class RoomController {
  async createRoom(req: Request, res: Response) {
    const { name, description } = req.body;

    try {
      const newRoom = RoomRepository.create({ name, description });
      await RoomRepository.save(newRoom);

      return res.status(201).json(newRoom);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Server Error." });
    }
  }

  async createVideo(req: Request, res: Response) {
    const { title, url } = req.body;
    const { room_id } = req.params;

    try {
      const room = await RoomRepository.findOneBy({ id: Number(room_id) });

      if (!room) {
        return res.status(404).json({ msg: "Room not exists" });
      }

      const newVideo = VideoRepository.create({ title, url, room });

      await VideoRepository.save(newVideo);

      return res.status(201).json(newVideo);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Server Error." });
    }
  }
}
