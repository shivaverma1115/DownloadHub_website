const express = require("express");
const { MoviesModel } = require("../model/movie.model")
const movieRouter = express.Router();
const { authentication } = require("../Middleware/Authentication.middleware");

movieRouter.get("/", async (req, res) => {
    const { title, category, languages, sort, quality, page, limit } = req.query;

    let query = {};
    if (title) {
        query.Title = { $regex: title, $options: "i" };
    }
    if (category) {
        query.Category = { $regex: category, $options: "i" };
    }
    if (languages) {
        query.Languages = { $regex: languages, $options: "i" };
    }
    if (quality) {
        query.Movie_Quality = quality;
    }


    let sortObj = {};
    if (sort) {
        sortObj.Year = sort === "asc" ? 1 : -1;
    }
    if (sort) {
        sortObj.Title = sort === "title" ? 1 : -1;
    }

    const skip = (parseInt(page - 1) * (parseInt(limit)));
    const myLimit = parseInt(limit);

    const movies = await MoviesModel.find(query).sort(sortObj).skip(skip).limit(myLimit);
    res.send(movies)
})

// movieRouter.use(authentication)
movieRouter.post("/add", async (req, res) => {
    const { Title, Category, Poster, imdbID, Directed, Year, Type, Languages, Film_Stars, Movie_Quality, File_Size, Story_line, big_img, movie_drive_link } = req.body;
    const userID = req.userID
    const new_task = new MoviesModel({ Title, Category, Poster, imdbID, Directed, Year, Type, Languages, Film_Stars, Movie_Quality, File_Size, Story_line, big_img, movie_drive_link, user_id: userID })
    try {
        await new_task.save()
        return res.send({
            msg: "task successfully added"
        })
    }
    catch (err) {
        console.log(err)
        res.send({
            msg: "something went wrong in adding movie"
        })
    }
})


movieRouter.put("/:moviesID", async (req, res) => {
    const taskEdit = await MoviesModel.findOneAndUpdate({ _id: req.params.moviesID }, req.body, { new: true })
    if (taskEdit) {
        res.send({
            msg: "task edit done",
            task: taskEdit
        })
    }
    else{
        res.send({
            msg:"movie not found" 
        })
    }
});


movieRouter.delete("/:moviesID", async (req, res) => {
    try {
        const movies = await MoviesModel.findOneAndDelete({ _id: req.params.moviesID,
            //  user_id: req.userID 
            })
        if (movies) {
            res.send({
                msg: "Task deleted successfully"
            })
        }
        else {
            res.send({
                msg: "Task not found or you are not authorised to do this operation"
            })
        }
    }
    catch (err) {
        console.log(err)
        res.send({
            msg: "something went wrong, please try again later"
        })
    }
})

module.exports = {
    movieRouter
}