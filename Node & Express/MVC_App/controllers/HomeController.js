
//controlllers

const ejs = require('ejs');

exports.home=(req,res)=>{
    ejs.renderFile('./views/home.ejs',{},{},(err,template)=>{
        if(err){
            throw err;
        }
        else{
            res.end(template);
        }
    });
};
exports.about=(req,res)=>{
    ejs.renderFile('./views/about.ejs',{},{},(err,template)=>{
        if(err){
            throw err;
        }
        else{
            res.end(template);
        }
    });
};
