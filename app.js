import express from 'express';
import dotenv from "dotenv";
import conn from "./db.js";
import pageRoute from "./routes/pageRoute.js";
import userRoute from './routes/userRoute.js';

dotenv.config();

//veritabanı bağlantısı
conn();

const app = express();
const port = process.env.PORT;

//ejs template engine
app.set("view engine", "ejs");

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/', pageRoute);
app.use('/users', userRoute);
app.use(express.urlencoded({extended: true}));

app.listen(port, ()=>{
    console.log('Application running on port: ' + port);
});
