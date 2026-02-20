db.products.insertOne({
    name: "Super-Cool Fan",
    price: 1200,
    category: "Electronics",
    inStock: true
});
db.products.findOne({category: "Electronics"});

db.products.updateOne(
    { name: "Super-Cool Fan" },
    { $set: { price: 1100 } }
);

db.products.deleteOne({ name: "Super-Cool Fan" });