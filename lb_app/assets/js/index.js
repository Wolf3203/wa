$("#add_book").submit(function(event){
    alert("Successfully saved")
})

$("#update_book").submit(function(event){
    event.preventDefault()
    var unindex_array = $(this).serializeArray();
    var data = {}

    $.map(unindex_array, function(n, i){
        data[n['name']] = n['value']
    })


    var request = {
        "url" : `http://localhost:5000/api/books/${ data.id }`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully!");
    })
})

if (window.location.pathname == "/") {
    $(".table tbody td a.delete").click(function () {
        var id = $(this).attr("data-id")

        var request = {
            "url": `http://localhost:5000/api/books/${ id }`,
            "method": "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }
    })
}
