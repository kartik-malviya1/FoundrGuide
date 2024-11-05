import { Router } from "express";

export const adminRouter = Router();

adminRouter.post("//add-book", (req, res) => {
  // Logic to add a book to the database
  res.json({ message: "Book added successfully" });
}) 

