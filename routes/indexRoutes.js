const express   = require('express'),
      Blog      = require('../models/blogModel'),
      router    = express.Router();
      

// let data=[{
//     postTitle:"En Hızlı Hizmet",
//     postSubTitle:"Canlı ortamda güncelleme hizmeti",
//     image:"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
// },
// {
//     postTitle:"Siz ne isterseniz O!",
//     postSubTitle:"Sizin isteklerinize cevap verebilicek bir tasarım",
//     image:"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
// },
// {
//     postTitle:"İletişim",
//     postSubTitle:"Her zaman ulaşabiliceğiniz ekimiz ve destek hattımız",
//     image:"https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
// }
// ]

router.get("/",(req,res)=>{
    Blog.find({},(err,foundBlogs)=>{
        if(err){
            console.log("=====ERROR=======");
            console.log(err)
        }else{
            console.log("=======All BLOGS======")
            console.log(foundBlogs);
            res.render("home",{foundBlogs:foundBlogs});
        }

    });
});

router.get("/about",(req,res)=>{
    res.render('about')
});

router.get("/contact",(req,res)=>{
    res.render('contact')
});
router.get("/resume",(req,res)=>{
    res.render('partials/resume')
});


module.exports  = router;      