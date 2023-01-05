const express = require('express');
const pasteRoutes = require("./paste/routes")
const app = express();
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(express.urlencoded({ extended: false }));
app.listen(4000);

app.use("/pastebin", pasteRoutes);
