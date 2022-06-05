"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
// Configuring body parser middleware
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
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
