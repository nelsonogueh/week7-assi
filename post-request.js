
// Rendering multiple routes
const path = require("path")

const express = require("express")
const app = express()

// This is just a JSON file Containing 
const ProductsArray = require('./models/products')

const PORT = 5000




// Default path
app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "views", "index.html")) 
})

 
// Use a file
app.get("/users/:user_id", (req, res) => {
        //GET USER ID
        const userId = req.params.user_id


        const foundProduct = ProductsArray.find((product) =>{
            console.log(product)
        });

        if(!foundProduct){
            res.json("Product not found")
        }
        else{
            res.json(foundProduct).statusCode(200)
        }
})






 
// THIS COULD HELP IN PAGINATION
app.get("/users/num/:pagenumber", (req, res) => {
    // Doing pagination
    const numberOfItemToGet = req.params.pagenumber


    const foundProduct2 = ProductsArray.slice(0, numberOfItemToGet);

    if(!foundProduct2){
        res.json("Product not found")
    }
    else{
        res.json(foundProduct2).statusCode(200)
    }
})




// Handle any unhandled route. The * is called wildcard 
app.get("*", (req, res) => {
    // The * route handles all routes that are not defined above
        res.send("<h1>404 Error, Not Found</h1>") 
})

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`)
})



