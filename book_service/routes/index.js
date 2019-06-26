//定义Express实例
var express = require('express');
// var app = express();
//路由引入
var router = express.Router();
//数据库引入
var mongoose = require('mongoose');
//定义路由
/*GET home page*/
router.get('/',function(req,res,next){
    res.render('index',{title:'Express'});
});
//定义路由
 router.get('/mongooseTest',function(req,res,next){
     mongoose.connect('mongodb://localhost/pets');
     mongoose.Promise = global.Promise

     var Cat = mongoose.model('Cat',{name:String});

     var tom = new Cat({name:'Tome'});
     tom.save(function(err){
         if(err){
             console.log(err);
         }else{
             console.log('success insert');
         }
     });
     res.send('数据库连接测试');
 });
 module.exports = router;