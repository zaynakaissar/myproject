const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const articleschema = new Schema({
    title: String,
    body: String,
    numberslikes: Number
})
const Art = mongoose.model("Article",articleschema);
module.exports = Art;