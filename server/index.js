import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import birthdayRouter from "./src/routes/birthdayRouter.js"
import joiningDateRouter from "./src/routes/joiningDateRouter.js"


const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//middelwares
app.use(cors());
app.use(express.json());


app.use("/api/hr",  birthdayRouter)
app.use("/api/hr",  joiningDateRouter)

mongoose.connect(`mongodb://0.0.0.0:27017/BirthDay`)
.then(()=>{
    console.log("Database connected successfully")
})
.catch((err)=>{
    console.log(err)
})


//PORT
const PORT = 2020;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${PORT}`
  );
});

