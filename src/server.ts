import express, { request, response } from 'express';
import "./database";

const app = express();

app.get('/', (request, response) => {
    return response.json({message: "Hello NLW #05"})
});

app.post('/', (request, response) => {
    return response.json({message: "User was saved."});
});

app.listen(3000, () => console.log("Server running on port 3000"));