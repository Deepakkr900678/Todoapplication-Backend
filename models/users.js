const mongoose = require("mongoose")
const schema = mongoose.Schema
const userpost = new schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
})
const users = mongoose.model("users", userpost)
module.exports = users