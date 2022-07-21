const express = require('express')


const router = express.Router()


router.get("/",(req,res)=>{
//console.log("Get the data from database")
res.render('addEmp')
})

router.post("/addEmp",(req,res)=>{
    const {Name,Age,Group,Gender} = req.body
    const user = {stdntid:Id,stdntname:Name,stdntage:Age,stdntgroup:Group,stdntgender:Gender}
    let sql = "INSERT INTO `student list`SET ?";
    db.query(sql,user,(err,result)=>{
        if(err) throw err
        res.send(result)
    })
   // console.log("save the data from database")
    })
    router.get('/emplist',(req,res)=>{
        let sql = "SELECT*FORM`employee`"
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.render('showEmp',{list:result})
        })
    })

    router.get('/empupdlist',(req,res)=>{
        let sql = "SELECT*FORM`employee`"
        db.query(sql,(err,result)=>{
            if(err) throw err
            res.render('updEmp',{list:result})
        })
    })

router.get('/empupdate/:id',(req,res)=>{
    let sql = "SELECT * FORM `employee` WHERE empid = " +req.params.id
    db.query(sql,(err,result)=>{
        if(err) throw err 
        res.render('updateEmp',{employee:result[0]})
    })
})

router.post('/updEmp',(req,res)=>{
    const {uid,name,age,group,gender} = req.body
    let sql = `UPDATE employee SET stdntname='${name}',stdntage='${age}',stdntgroup='${group},stdntgrnder='${gender}' WHERE stdntid='${uid}'`
    db.query(sql,(err,result)=>{
        if(err) throw err 
        res.redirect('/emplist')
    })
})

router.get('/deleteupdate/:id',(req,res)=>{
    const id = req.params.id
    let sql = `DELETE FORM employee WHERE stdntid = ${id}`
    db.query(sql,(err,result)=>{
        if(err) throw err
        res.redirect('/emplist')
    })
})



module.exports = router
