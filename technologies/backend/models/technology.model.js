const mogoose = require("mongoose");
const { Schema } = mogoose;

const TechnologySchema = new Schema({
    name : { type : String, maxlength: 50},
    description : { type : String },
    logo : { type : String},
    tags: [{ type : String}]
}, {
    timestamps : {
        createdAt: true,
        updatedAt: true
    }
});

module.exports = mogoose.model("Technology", TechnologySchema);