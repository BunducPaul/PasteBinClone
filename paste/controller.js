const pool = require("./../db");
const queries = require('./queries');

const getPastebinPage = (req, res) => {
    res.render("index.ejs")
}

const addPaste = (req, res) => {
    let title = req.body.title;
    console.log(title);
    let author = req.body.author;
    let text = req.body.text;
    pool.query(queries.addPaste, [author, title, text], (error, results) => {
        res.render('new', { data: results.rows[0] });
    });
};

const getRecentPage = (req, res) => {
    pool.query(queries.getPastes, (err, result) => {
        res.render('recent', { data: result.rows });
    });
};

const getAboutPage = (req, res) => {
    res.render('about');
};

const getPasteById = (req, res) => {
    let id = parseInt(req.params.id);
    pool.query(queries.getPasteId, [id], (error, results) => {
        res.render('new', { data: results.rows[0] });
    });
};

const deletePaste = (req, res) => {
    let deletedPasteId = req.body.delete;
    pool.query(queries.removePaste, [deletedPasteId]);
    res.redirect('back');
};

module.exports = {
    addPaste,
    getPastebinPage,
    getRecentPage,
    getAboutPage,
    getPasteById,
    deletePaste,
}