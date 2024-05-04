import { NextFunction, Request, Response } from "express";

export class validator {
  static validate(req: Request, res: Response, next: NextFunction) {
    const {
      title,
      year,
      rated,
      released,
      runtime,
      genre,
      director,
      writers,
      actors,
      plot,
      languages,
      country,
      awards,
      type,
    } = req.body;
    if (
      !title ||
      !year ||
      !genre ||
      !director ||
      !languages ||
      !country ||
      !type ||
      !runtime ||
      !plot ||
      !actors ||
      !writers ||
      !rated ||
      !released ||
      !awards
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    next();
  }
}
