const mongoose = require("mongoose");

const MoviesSchema = mongoose.Schema({
    Title: { type: String ,require:true},
    Category: { type: String ,require:true},
    Poster: { type: String, require: true },
    imdbID: { type: Number, require: true },
    Directed: { type: String, require: true },
    Year: { type: Number, require: true },
    Type: { type: String, require: true },
    Languages: { type: String, require: true },
    Movie_Quality: { type: Number, require: true },
    Film_Stars: { type: String, require: true },
    File_Size: { type: String, require: true },
    Story_line: { type: String, require: true },
    big_img: { type: String, require: true },
    movie_drive_link: { type: String, require: true },
    user_id: {type:String,require:true},
})
const MoviesModel = mongoose.model("Movie", MoviesSchema);

module.exports = {
    MoviesModel
}