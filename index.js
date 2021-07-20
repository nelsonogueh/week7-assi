
// Rendering multiple routes
const path = require("path")

const express = require("express")
const app = express()


const PORT = 5000

const products = [
    {
        productName: "First Product",
        productPrice: "3500",
        productImage: "https://someimageurl/image1.jpg"
    },
    {
        productName: "Second Product",
        productPrice: "1200",
        productImage: "https://someimageurl/image2.jpg"
    },
    {
        productName: "Third Product",
        productPrice: "800",
        productImage: "https://someimageurl/image3.jpg"
    },
]



// Default path
app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "views", "index.html")) 
})

 
// Use a file
app.get("/about", (req, res) => {
    // We will join all the paths together. First parameter for the join 
    // below is the path to where this particular file is, second is the 
    //directory the needed file is, the third is the particular file we want.
    // The full path for the file is /.../views/index.html
        res.sendFile(path.join(__dirname, "views", "about.html")) 
})



// Sending a JSON back
app.get("/jsonvaluepath", (req, res) => {  // If you enter the following, you should see the result. http://127.0.0.1:5000/jsonvaluepath
        res.json(products) 
})



// Handle any unhandled route. The * is called wildcard 
app.get("*", (req, res) => {
    // The * route handles all routes that are not defined above
        res.sendFile(path.join(__dirname, "views", "error.html")) 
})




app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`)
})



