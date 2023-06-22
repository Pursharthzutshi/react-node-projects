const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv")
const port = 3002
const Payment = require("../server/Routes/PaymentPage")

dotenv.config();
app.use(cors())
app.use(express.json());


app.use("/payment",Payment)

app.listen(port,()=>{
    console.log(`${port} is running`)
})