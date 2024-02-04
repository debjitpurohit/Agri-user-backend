import app from "./app.js"
// import connectDB  from "./database/database.js";
import connectuserDB from "./database/userdatabase.js";
import {config} from "dotenv"

config({
    path : "./config.env",
})
//have to use connectdb for database
connectuserDB();

app.listen(process.env.PORT,()=>{
    console.log(`server is working on port: ${process.env.PORT} in ${process.env.NODE_ENV} mode`);
})