const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require('body-parser');
const bcrypt = require("bcrypt")
const app = express();
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());//for coonnecting with index.js

// const chat_bot = require("./new")();
// app.use("/webhook",chat_bot);

// const test_bot = require("./chat")();
// app.use("/chat_in",test_bot);

const userReg = require("./Userindex")();//for conecting with index.js
app.use("/handleSubmits", userReg); 
const getProd = require("./cust_getproduct")();
app.use("/getproducts",getProd);

const vendorfns = require("./vendor_fns")();
app.use("/vendor",vendorfns);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "price_neg"
})

app.post('/handleSubmit', async(req, res) =>{//here handle submit given to indicate index.js
    
    console.log(req.body);
    const adm_name=req.body.adm_name;
    const shop_name=req.body.shop_name;
    const shop_addr=req.body.shop_addr;
    const email=req.body.email;
    const phno=req.body.phno;
    const username=req.body.username;
    const recoveryque=req.body.recoveryque;
    const salt=await bcrypt.genSalt(10);
    const password=await bcrypt.hash(req.body.password,salt);
    // bcrypt.hash(password,saltRounds,fuction(err,hash){
    // // var hashedPassword = hash
    
    db.query("INSERT INTO shop(adm_name,shop_name,shop_addr,email,phno,username,password,recoveryque) VALUE (?,?,?,?,?,?,?,?)",
    [adm_name,shop_name,shop_addr,email,phno,username,password,recoveryque],
    (err,result)=>{
        console.log(result);
        if(err){
            return console.log(err);
        }
        res.send({result});
    }
    ); 
});  
// });

app.post('/login', async(req, res) =>{
    const username = req.body.username;
    const password=req.body.password;
  
    
    db.query("SELECT * FROM shop WHERE username = ? ",[username],
    async(err,result)=>{

        
        
        

        if(err){
            res.send({err: err});
        }
       
        if (result.length > 0)
         { const validp=  await bcrypt.compare(password,result[0].password);   
            
            if(validp==true)
              {
                console.log("---------> Login Successful");
                // res.send({ message: "Successful login" });
                shopid= result[0].shop_id;
                res.status(200).send({shopid}); 
                
              } 
       else {
         
            res.send({ message: "Password does not match" });
          }
        }
        else
        {
            res.send({ message: "User doesn't exist" });
        }
}
);
        
      
      
    });
app.post('/loginnewshop',async(req,res)=>{
    const salt=await bcrypt.genSalt(10);
      console.log(req.body);
      
      const emails=req.body.email;
      const password=await bcrypt.hash(req.body.password,salt);
      console.log(password);
      var sql="UPDATE shop SET  password = ?  WHERE email= ?"
      db.query(sql,[password,emails],
      async(err,result)=>{
        // console.log(result[0]);
    db.query("SELECT * FROM shop WHERE email = ? ",[emails],
    async(err,result)=>{
      console.log(result[0]);
      if (result.length > 0)
         {
            if(password==result[0].password)
             {res.send({ message: "password updated" });}
         
            }
         

      });
      
      console.log("successfully updated");
       
      
        if(err){
          return console.log(err);
        }
      
      }

      );
    });

    app.post('/forgotpasswordshop',async(req, res) =>{
      
        const email = req.body.email;
        const recoveryque=req.body.recoveryque;
    
        db.query("SELECT * FROM shop WHERE email = ? && recoveryque = ?",[email,recoveryque],
        async(err,result)=>{
         
          console.log(result);
            if(err){
              return console.log(err);
            }
           
            if (result.length > 0)
            { shop_name= result[0].shop_name;
                adm_name=result[0].adm_name;
              
              shop_id=result[0].shop_id;
               emails=result[0].email;
              phno=result[0].phno;
              shop_addr=result[0].shop_addr;
              recoveryques=result[0].recoveryque;
              
              res.send({shop_name,adm_name,shop_id,emails,phno,shop_addr,recoveryques,message: "authorised access" });
              console.log("valid mail");
              // res.send({result});
            }
           else{
             res.send({ message: "unauthorised access" });
           }
       } );
          
        
        
          });

app.post('/displayProd',(req,res)=>{
    console.log("helloooooooooooooooooooooooooo")
    const item = req.body.item;
    console.log(item);
    
    if(item=="products" || item=="product"){
        db.query("SELECT * FROM products p, category c, subcategory s WHERE ( p.catg_id = c.catg_id AND p.subcatg_id = s.subcatg_id )",
    (err,result)=>{
        // if(err){
        //     res.send({err: err});
        // }
        // else{
            console.log(result[1])
            res.send(result)
        
    })
    }
    else{
        db.query("SELECT * FROM products p, category c, subcategory s WHERE ( p.catg_id = c.catg_id AND p.subcatg_id = s.subcatg_id ) AND( p.p_name LIKE '%"+item+"%' OR c.catg_name LIKE '%"+item+"%' OR s.subcatg_name LIKE '%"+item+"%' )",
    (err,result)=>{
        if(err){
            res.send({err: err});
        }
        else{
            console.log(result.length)
            res.send(result)
        }
    })
    }
    

})
const port = process.env.PORT || 3002;
app.listen(port,()=>{console.log("Server Ready at "+port)});