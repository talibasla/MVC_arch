const express = require("express");

const app = express();

const userRoute = require("./routes/user");
app.use("/user", userRoute);

app.listen(3030, ()=>{
    console.log("Server running on port 3030");
});