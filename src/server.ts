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
  const { name, type } = req.body;

  const jokeObject = {
    category: "Programming",
    flags: {
      explicit: false,
      nsfw: false,
      political: false,
      racist: false,
      religious: false,
      sexist: false,
    },
    id: 18,
    joke: '"Honey, go to the store and buy some eggs."\n"OK."\n"Oh and while you\'re there, get some milk."\nHe never returned.',
    lang: "en",
    safe: true,
    type: "single",
  };

  const joke = new Joke(jokeObject);

  joke.save().then((data) => res.status(200).json(data));
});

// Delete joke
app.delete("/jokes/:id", (req, res) => {
  const id = req.params.id;

  Joke.findByIdAndDelete(id)
    .then(() => {
      res.status(200).json(`Task with ID ${id} deleted successfully`);
    })
    .catch((error) => {
      console.log(error);
      return res.status(500).json("Error deleting task!");
    });
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
