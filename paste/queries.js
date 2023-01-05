const addPaste = 'INSERT INTO commbin (author, title, text) VALUES ($1, $2, $3) RETURNING *';
const getPastes = 'SELECT * FROM commbin';
const getPasteId = 'SELECT * FROM commbin WHERE commbin_id = $1';
const removePaste = 'DELETE FROM commbin WHERE commbin_id = $1';

module.exports = {
    getPasteId,
    getPastes,
    addPaste,
    removePaste,
}