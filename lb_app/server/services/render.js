const axios = require('axios');



exports.homeRoutes = (req, res) => {
    //get request to api books

    axios.get('https://lbappms.herokuapp.com/api/books')
        .then(function (response) {

            res.render('index', { books: response.data });
        })
        .catch(err => {
            res.send(err)
        })

}

exports.add_book = (req, res) => {
    res.render('add_book');
}




exports.update_book = (req, res) =>{
    axios.get('https://lbappms.herokuapp.com/api/books', { params : { id : req.query.id }})
        .then(function(bookdata){
            res.render("update_book", { book : bookdata.data })
        })
        .catch(err =>{
            res.send(err);
        })
}

