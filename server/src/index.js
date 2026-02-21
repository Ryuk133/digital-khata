import express from "express";
import route from "./routes/route.js";
import jsonRoute from "./routes/jsonRoute.js";
import owner from "./routes/owner.js";
const app = express();
app.use("/", route);
app.use("/json",jsonRoute);
app.use("/",owner);

app.get('/customers/:id', (req, res) => {
const customerId = req.params.id;
res.send(`Looking for Customer ID: ${customerId}`);
});
app.use(express.json());//mandatory for post and put request to work
app.post('/customer', (req, res) => {
    const newCustomer = req.body;
    console.log('New Customer:', newCustomer);
    res.status(201).json({ message: "Customer Saved!", data: newCustomer });
});




app.listen(5001,()=>{
    console.log("🚀Counter Running at port 5001");
});