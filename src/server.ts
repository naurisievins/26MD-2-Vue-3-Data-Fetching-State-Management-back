import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoConnect from "./connect";
import { Joke } from "./jokeSchema";
import { truncate } from "fs/promises";
import { domainToASCII } from "url";

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

mongoConnect();

// Get all jokes
app.get("/get-jokes", (req: Request, res: Response) => {
  Joke.find().then((data) => res.json(data));
});

// Add new joke
app.post("/post-joke", (req: Request, res: Response) => {
  const jokeObject = req.body.joke;
  const joke = new Joke(jokeObject);

  joke.save().then((data) => {
    res.status(200).json(data);
  });
});

// Delete joke
app.delete("/delete-joke/:id", (req, res) => {
  const id = req.params.id;

  Joke.findOneAndDelete({ id: Number(id) })
    .then(() => {
      res.status(200).json(`Joke with ID ${id} deleted successfully`);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json("Error deleting joke!");
    });
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
