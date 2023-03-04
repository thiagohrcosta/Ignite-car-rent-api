import express, { request, response } from 'express';
import { createCourse } from './routes';

const app = express();

app.get("/", createCourse);

app.post("/courses", (req, res) => {
  const { name } = request.body;
  return response.json({ name })
})

app.listen(3333)