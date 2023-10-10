const express = require("express")
const { connection } = require("./config/db")
const bodyParser = require("body-parser");

require("dotenv").config()
const app = express()


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const cors = require("cors")
app.use(express.json())
app.use(cors({
    origin: "*"
}))

app.get("/", (req, res) => {
    const path = require('path');
    app.use(express.static(path.join(__dirname + "/public")))
    res.send({ msg: "base API endpoint" })
})


const { signupRouter } = require("./routes/signup");
app.use("/signup", signupRouter);

const { loginRouter } = require("./routes/login");
app.use("/login", loginRouter);

const { movieRouter } = require("./routes/movies")
app.use("/movies", movieRouter);

const { googleDriveRoute } = require('./routes/googleDrive')
app.use("/googleDrive", googleDriveRoute);

// const { cloudinaryRouter } = require("./routes/cloudinary");
// app.use("/upload-images", cloudinaryRouter);


const port = process.env.PORT;
app.listen(port, async () => {
    try {
        await connection
        console.log("connected to db successfully")
    }
    catch (err) {
        console.log("error while connecting to DB")
        console.log(err)
    }
    console.log(`listening on port ${port}`)
})