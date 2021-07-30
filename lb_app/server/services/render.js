const axios = require('axios');


exports.homeRoutes = (req, res) => {
    // Make a get request to /api/users
    axios.get('https://wacar.herokuapp.com/api/books')
        .then(function(response){
            res.render('index', { books : response.data });
        })
        .catch(err =>{
            res.send(err);
        })

    
}

exports.add_book = (req, res) =>{
    res.render('add_book');
}

exports.update_book = (req, res) =>{
    axios.get('https://wacar.herokuapp.com/api/books', { params : { id : req.query.id }})
        .then(function(userdata){
            res.render("update_book", { book : userdata.data})
        })
        .catch(err =>{
            res.send(err);
        })
}
