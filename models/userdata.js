const mongoose = require("mongoose")
const schema = mongoose.Schema
const Blogpost = new schema({
    id: { type: String },
    activity: { type: String },
    status: { type: String },
    timetaken: { type: String }
})
const userdata = mongoose.model("userdata", Blogpost)
module.exports = userdata