import express from "express"
import mongoose from "mongoose"
import userRoutes from "./routes/user.routes.js"
import directorRoutes from "./routes/director.routes.js"
import actorRoutes from "./routes/actor.routes.js"
import movieRoutes from "./routes/movie.routes.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    res.send("Backend Snow App")
})

app.use("/user", userRoutes)
app.use("/director", directorRoutes)
app.use("/actor", actorRoutes)
app.use("/movie", movieRoutes)

app.listen(3000, () => console.log("Server is running"))