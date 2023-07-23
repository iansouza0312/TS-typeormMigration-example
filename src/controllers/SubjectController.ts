import { Request, Response } from "express";
import { SubjectRepository } from "../repositories/SubjectRepository";

export class SubjectController {
  async createSubject(req: Request, res: Response) {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({ msg: "Name is a rrequired field." });
    }

    try {
      const newSubject = SubjectRepository.create({ name });
      await SubjectRepository.save(newSubject);

      return res.status(200).json(newSubject);
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: "Server Error." });
    }
  }
}
