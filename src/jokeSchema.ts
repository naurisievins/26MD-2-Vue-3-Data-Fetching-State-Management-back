import mongoose from "mongoose";

const JokeSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    flags: {
      type: {
        explicit: { type: String, required: true },
        nsfw: { type: String, required: true },
        political: { type: String, required: true },
        racist: { type: String, required: true },
        religious: { type: String, required: true },
        sexist: { type: String, required: true },
      },
      required: true,
    },
    id: { type: Number, required: true },
    joke: { type: String, required: true },
    lang: { type: String, required: true },
    safe: { type: Boolean, required: true },
    type: { type: String, required: true },
  },
  { versionKey: false }
);

export const Joke = mongoose.model("Joke", JokeSchema);
