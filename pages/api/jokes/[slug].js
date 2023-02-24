import { jokes } from "../../../lib/data.js";

export default function handler(request, response) {
  const { slug: id } = request.query;
  const joke = jokes.find((joke) => joke.id === id);

  if (!joke) {
    response.status(404).json({ message: "Not Found" });
  }

  response.status(200).json(joke);
}
