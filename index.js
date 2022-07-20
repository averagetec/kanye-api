import axios from "axios";
import express from "express";
import cors from "cors";

const URL = "https://api.kanye.rest/"
const app = express();
const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.use(cors())
// app.use()

app.get('/kanye_quotes',
    async (req, res) => {
        try {
            const response = await axios.get(URL)
            res.send(response.data);
        } catch (e) {
            console.log(e);
        }
    });

app.get('/', (req, res) => {
    res.send("Hello Jay");
})
