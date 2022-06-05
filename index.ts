import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

// https://api.telegram.org/bot5439034378:AAEKuBm8GI31k2kNM5uyW3KDyyGLVTtKlN0/sendMessage?chat_id=@goodpage2022&text=sdfsd
dotenv.config();

const app: Express = express();
const port = process.env.PORT;

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
