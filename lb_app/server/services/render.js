const axios = require('axios');


exports.homeRoutes = (req, res) => {
    //get request to api books

    axios.get('http://localhost:3000/api/books')
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

exports.update_book = (req, res) => {
    axios.get('http://localhost:3000/api/books',{params:{_id:req.query._id}})
        .then(function (bookdbs) {
           
        
            res.render('update_book', { book: bookdbs.data })
        })

        .catch(err => {
            res.send(err);
        })

}




