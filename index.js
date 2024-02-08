const express = require("express");
const app = express();

// Lab 1

app.get("/sum/:a/:b",(req,res,next) => {
    const {a,b} = req.params;

    res.json({ a,b });
});

app.post("/products/:id",(req,res,next) => {
    const {id} = req.params;

    res.json({ id });
});

app.get("/users/:id/bookings/:bId",(req,res,next) => {
    const {id,bId} = req.params;

    res.json({ id,bId });
});

app.listen("8000" , () => {
    console.log ("server is running on port 8000")
});


// Lab 2

app.patch("/post/:postId",(req,res,next) => {
    const {postId} = req.params;

    res.json({ postId });
});


app.delete("/post/:postId",(req,res,next) => {
    const { postId } = req.params;

    res.json({ postId });
});

app.get("/post/:postId",(req,res,next) => {
    const { postId } = req.params;

    res.json({ postId });
});

app.get("/auth/:userId",(req,res,next) => {
    const { userId } = req.params;

    res.json({ userId });
});

app.listen("8000" , () => {
    console.log ("server is running on port 8000")
});

// Lab 3
const bodymiddleware = express.json();

app.use(express.json());
app.get("/product", (req,res, next) => {
    console.log(req,body)
    const {username,password} = req.body ;

    res.json({ username,password });
});

app.listen("8000" , () => {
    console.log ("server is running on port 8000")
});

// Express Lab 1

// const express = require("express");
// const app = express();

app.use(express.json());

app.get("/product", (req,res,next) => {
const {page,limit,order} = req.query;
res.json({ page,limit,order});
});


app.post("/product", (req,res,next) => {
const { name,price,description } = req.body;
res.json({ name,price,description });
});

app.put("/product/:id", (req,res,next) => {
const { name,price,description } = req.body;
const { id } = req.params;
});









