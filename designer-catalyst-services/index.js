const accounts = require('./services/accountingService/accountsService');

const express = require('express');
const app = express();

app.post("/register", (req, res) => {    
    /*console.log(req.body);
    const { firstName, secondName, email, password, password_confirm } = req.body;
    if(password == password_confirm) {
        db = accounts.connectToDB();
        accounts.signUpUser(db, firstName, secondName, email, password);
    }*/
    return res.json({message: "test1"});
});

app.get("/api", (req, res) => {    
    res.json({"users": ["test1", "test2"]})
});

app.listen(5000, ()=> {
    console.log("server started on port 5000");
})