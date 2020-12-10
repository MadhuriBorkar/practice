var express=require("express");
var app=express();
var bodypaeser=require("body-parser");

app.use(bodypaeser.urlencoded({extended:false}));

var logger=function(req,resp,next)
{
	console.log(req.url);
	console.log(req.method);
	next();
}
var sayhello=function(req,resp)
{
	resp.sendFile("login.html",{root:__dirname});
}

var sayabout=function(req,resp)
{
	resp.end("about");
}

var authenticate=function(req,resp)
{
	resp.send("<h1>"+req.body.nm+"---------"+req.body.pass+"</h1>");
}

app.use(logger);
app.post("/login",authenticate);
app.use("/about",sayabout);
app.use("/",sayhello);
app.listen(8181,function(){
	console.log("Server started");
});