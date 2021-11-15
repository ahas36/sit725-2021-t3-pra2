const express = require("express");

const app = express();
app.use(express.json());

const books = [
    {
        title: "Book 1",
        author: "author 1",
        price: 15
    },
    {
        title: "Book 2",
        author: "author 2",
        price: 25
    }
];

app.get("/book", (req, res) => {
    try {
        if (req.query.p != null) {
            res.json({
                statusCode: 200, data: books.filter(x => x.price < parseInt(req.query.p))
            });
        }
        res.json({ statusCode: 200, data: books });
    } catch (e) {
        res.json({ statusCode: 500, data: "something went wrong" });
    }
});

app.post("/book", (req, res) => {
    try {
        ///validation 
        books.push(req.body);
        res.json({ statusCode: 204 });
    } catch (e) {
        res.json({ statusCode: 500, data: "something went wrong" });
    }
});


const addTwoNumber = (n1, n2) => {
    if (Number.isNaN(n1) || Number.isNaN(n2)) {
        throw "error";
    }
    return n1 + n2;
}

app.get("/addTwoNumber", (req, res) => {
    try {
        const n1 = parseInt(req.query.numb1);
        const n2 = parseInt(req.query.n2);
        const result = addTwoNumber(n1, n2);
        res.json({ statusCode: 200, data: result });
    } catch (e) {
        res.json({ statusCode: 500, data: "something went wrong" });
    }
});


app.post("/addTwoNumber", (req, res) => {
    try {
        const n1 = req.body.n1;
        const n2 = req.body.n2;
        const result = addTwoNumber(n1, n2);
        res.json({ statusCode: 200, data: result });
    } catch (e) {
        res.json({ statusCode: 500, data: "something went wrong" });
    }
});



const port = 3030;

app.listen(port, () => {
    console.log("Hello I'm listenting to port " + port);
})
