module.exports = async function (req, res) {
    res.render('faq', {
        edtID: req.session.edtID,
        darkTheme: req.session.darkTheme
    });
}