const express = require('express');
const app = express();

// Enable CORS for all routes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
const bodyParser = require('body-parser');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const api = [
    { class: "tyco", name: "abhishek", rollno: 88, divison: "cse b" },
    { class: "dsy", name: "Raj", rollno: 72, divison: "cse a" },
    { class: "fyco", name: "Ram", rollno: 44, divison: "cse c" },
    { class: "fyco", name: "Ram", rollno: 43, divison: "cse c" },
    { class: "fyco", name: "raju", rollno: 23, divison: "cse c" },
    { class: "fyco", name: "neha", rollno: 54, divison: "cse c" },
    { class: "fyco", name: "vaishnavi", rollno: 12, divison: "cse c" },
    { class: "fyco", name: "mahesh", rollno: 11, divison: "cse c" },
    { class: "kyco", name: "om", rollno: 15, divison: "cse d" }
]

// GET request to fetch data
app.get("/", (req, res) => {
    res.send(api);
});

// POST request to add data
app.post('/', (req, res) => {
    const data = req.body;
    api.push(data); // Add the data to the array

    res.send(api); // Send the updated array as the response
});

// DELETE request to remove data by name
// ...

// DELETE request to remove data by rollno
app.delete('/:rollno', (req, res) => {
    const rollnoToRemove = req.params.rollno;
    const indexToRemove = api.findIndex(item => item.rollno === parseInt(rollnoToRemove, 10));

    if (indexToRemove !== -1) {
        api.splice(indexToRemove, 1); // Remove the item from the array
        res.send(api); // Send the updated array as the response
    } else {
        res.status(404).send("Not Found"); // If the item doesn't exist, send a 404 response
    }
});

// ...
// ...

// PUT request to update data by rollno
app.put('/:rollno', (req, res) => {
    const rollnoToUpdate = req.params.rollno;
    const updatedData = req.body;

    const indexToUpdate = api.findIndex(item => item.rollno === parseInt(rollnoToUpdate, 10));

    if (indexToUpdate !== -1) {
        // Update the item in the array
        api[indexToUpdate] = { ...api[indexToUpdate], ...updatedData };
        res.send(api); // Send the updated array as the response
    } else {
        res.status(404).send("Not Found"); // If the item doesn't exist, send a 404 response
    }
});

// ...



app.listen(5000);


// nodemon ./test_api_for_react.js