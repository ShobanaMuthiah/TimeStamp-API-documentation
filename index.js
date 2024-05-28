
//importing part
import express from 'express';


//declaration/initialization
const app=express();
const PORT=4000;

//middleware
app.use(express.json())

//get routes
app.get('/',(req,res)=>{
res.status(200).send("welcome to our first api program")

})

//runing part
app.listen(PORT,()=>{
    console.log(`App is listening on port ${PORT}`);
})