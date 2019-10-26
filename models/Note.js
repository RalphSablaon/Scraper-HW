var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var noteSchema = new Schema({
    body: {
        type: String
    },
    article: {
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});

var Note = mongoose.model("Note", noteSchema);

module.exports = Note;