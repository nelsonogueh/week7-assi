
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



/// Middleware
app.use((req, res, next) => {

    console.log("Date: "  +Date())
    console.log("Date: " +req.ip)

})
// Middleware end

 


// Handle any unhandled route. The * is called wildcard 
app.get("*", (req, res) => {
    // The * route handles all routes that are not defined above
        res.send("<h1>404 Error, Not Found</h1>") 
})

app.listen(PORT, () => {
    console.log(`Server running on http://127.0.0.1:${PORT}`)
})



