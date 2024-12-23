const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const userModel = require('./models/model'); 
const app = express();


app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/user', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Connected to MongoDB database!"))
.catch(err => console.error("Error connecting to MongoDB:", err));


app.get('/getuser', (req, res) => {
    console.log(req.body);
    res.send("Endpoint to get user data"); 
});


app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await userModel.findOne({ email: email, password: password });
        
        if (user) {
            res.json("Login Successful");
        } else {
            res.json("Invalid Credentials");
        }
    } catch (err) {
        console.error("Error logging in:", err);
        res.status(500).send("Server Error");
    }
});


app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

  
    if (!name || !email || !password) {
        return res.status(400).send("All fields are required.");
    }

    try {
        
        const newUser = new userModel({ name, email, password });
        await newUser.save();
        console.log("User saved to database:", newUser);
        res.status(201).send("User registered successfully!");
    } catch (err) {
        console.error("Error saving user to database:", err);
        res.status(500).send("Error saving user to database.");
    }
});


app.listen(3001, () => {
    console.log("Server is running on http://localhost:3001");
});
