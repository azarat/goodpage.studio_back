import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
// import cors from 'cors';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

// app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  let books = [
    {
      id: 1,
      name: 'asd'
    },
    {
      id: 2,
      name: 'asd2'
    }
  ];
  res.status(200).json(books);
  // res.send('Express + TypeScript Server');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

// app.listen(port, () => {
//   console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
// });
