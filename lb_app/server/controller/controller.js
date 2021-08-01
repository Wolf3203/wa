var Bookdb = require('../model/model');

//create and save books

exports.create = (req,res)=>{
    // validate req
    if(!req.body){
        res.status(400).send({message: "Content can not be empty"});
        return;
    }

    //new book

    const book = new Bookdb({
        title:req.body.title,
        author:req.body.author,
        genres:req.body.genres,
        student_number: req.body.student_number,
        due_date: req.body.due_date,
        status:req.body.status
    })

    // save book in the db
    console.log("post data ====", book)
    book
        .save(book)
        .then(data =>{
            //res.send(data)
            // res.redirect('/add-book')
            res.redirect('/')
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "Some error occurred"
            })
        })

}

//retrieve and return all books or single

exports.find = (req,res)=>{

    if(req.query.id){
        const id = req.query.id;
        Bookdb.findById(id)
            .then(data =>{
                if(!data){
                    res.status(404).send({ message: "Book not found."})
                } else {
                    res.send(data)
                }
            })

    } else {
        Bookdb.find()
        .then(book =>{
            res.send(book)
        })
        .catch(err=>{
            res.status(500).send({message: err.message || " Error occured "})
        })
        .catch(err =>{
            res.status(500).send({
                messa: "Erro retriving book Id."
            })
        })
    }
}
//update book by id
exports.update = (req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data can not be empty"})
    }
    const id = req.params.id;
    Bookdb.findByIdAndUpdate(id, req.body,{useFindAndModify:false})
    .then(data =>{
        if(!data){
            res.status(404).send({message:"Can not book with id. Maybe book not found."})
        }else{
            res.send(data)
        }
    })
    .catch(err=>{
        res.status(500).sebd({message:"Update book informations"})
    })

}

//delete a book by id

exports.delete = (req,res)=>{
    const id = req.params.id;
    Bookdb.findByIdAndDelete(id)
    .then(data =>{
        if(!data){
            res.status(404).send({message: 'Cannot delete it'})
        }else{
            res.send({
                message: "Successfully deleted."
            })
        }
    })
    .catch(err=>{
        res.statis(500).send({
            message:"Cannot delete book with this id"
        });
    });

}