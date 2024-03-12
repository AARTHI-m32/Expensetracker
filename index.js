// add a new expense-->add-expense
//post : expenses details
// display existing expense-->get-expense
//get
// delete a expense-->delete-expense
//post:id on the entry
// update an existing one -->update-expense
//post:id of entry,expense n
const mongoose=require('mongoose')
const express=require('express')
const cors=require('cors')
const {Expense}=require('./schema.js')
const bodyParser = require('body-parser')
const app=express()
app.use(bodyParser.json())
app.use(cors({

}))

async function connectToDb() {
    try {
        await  mongoose.connect('mongodb+srv://aarthi32:Aarthi32@cluster0.grrieqs.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0')
        console.log('DB connection established')
        const port=process.env.PORT  ||  8000
        app.listen(port, function() {
            console.log(`Listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
        console.log('Cloudn\'t establish connection :(')
    }
}
connectToDb()

app.post('/addexpense', async function(request, response) {
    try {
        await Expense.create({
            "amount" : request.body.amount,
            "category" : request.body.category,
            "date" : request.body.date
        })
        response.status(201).json({
            "status" : "success",
            "message" : "entry created"
        })
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "entry not created",
            "error" : error
        })
    }
})

app.get('/getexpense',async function(request,response){
    try{
    const expensedetails=await Expense.find()
   console.log( response.status(200).json(expensedetails))
    }
    catch(error){
        response.status(500).json({
            "status" : "failure",
            "message" : "entry not created",
            "error" : error
                    })
    }
})

app.delete('/deleteexpense/:id', async function(request, response) {
    try {
        const expenseEntry = await Expense.findById(request.params.id)
        if(expenseEntry) {
            await Expense.findByIdAndDelete(request.params.id)
            response.status(200).json({
                "status" : "success",
                "message" : "entry deleted"
            })
        } else {
            response.status(404).json({
                "status" : "failure",
                "message" : "entry not found"
            })
        }
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "could not delete entry",
            "error" : error
        })
    }
})

app.patch('/updateexpense/:id', async function(request, response) {
    try {
        const expenseEntry = await Expense.findById(request.params.id)
        if(expenseEntry) {
            await expenseEntry.updateOne({
                "amount" : request.body.amount,
                "category" : request.body.category,
                "date" : request.body.date
            })
            response.status(200).json({
                "status" : "success",
                "message" : "entry updated"
            })
        } else {
            response.status(404).json({
                "status" : "failure",
                "message" : "entry not found"
            })
        }
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "could not update entry",
            "error" : error
        })
    }
})