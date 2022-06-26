const express = require("express");
const cookieParse = require('cookie-parser');
const app = express()
app.get("/",(req,res)=>{
  res.send("hello world")
})


app.use(express.static(__dirname + '/public'));

// app.get("/getData", (req, res) => {
//   let result
//   if (isNaN(req.query.number)){
//   result = "Wrong Parameters"
//   }else{
//   result = ((1 + Number(req.query.number)) *Number(req.query.number))/2;
//   }
//   res.send(`${result}`)
// })

app.get("/getData",(req,res) =>{
  
  let result = 0
  let num = Number(req.query.number) 
  console.log(req.query)
  // console.log(req.query.number === isNaN)
  // console.log(num)
  if (isNaN(req.query.number)){
    console.log(num)
    result = "Wrong Parameter"
  }else if(req.query.number === undefined || req.query.number === ""){
    result = "Lack of Parameter"
  }else{
    for(i=0; i<=num; i++){
      result += i
    }
  }
  res.send(`${result}`)
  console.log(result)
})


// app.get('/button',(req,res) =>{
//   console.log('hello')

 
//   const number = req.cookies.number
//   console.log(req.cookies)
//   console.log(number)
//   if(number){
//       res.redirect("/")
//   }else{
//       res.render("button")
//   }
// })


// app.post("/button",(req,res) => {
//   res.cookie('number', req.body.number)
//   res.redirect('/')
// })

app.listen(3000,function(){
  console.log('伺服器已啟動在 http://localhost:3000')
})

