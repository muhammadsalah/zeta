// Zeta Team IBM Block-Chain Hackathon
var express = require('express');
var app = express();

// 
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 
app.use(express.static(__dirname + '/web-assets'));

app.get('/',function(request,response){
    response.sendFile(__dirname+"/web-assets/governor.html");    
});


app.post('/api/governor/action/assignshipment',function(request,response)
{
    var name = request.body.name;
    var loc_to = request.body.loc_to;
    var loc_from = request.body.loc_from;
    var contents = request.body.contents;
    response.send("Shipment Confirmed");
    console.log("That's a shipment");
});



app.post('/api/distributor/action/acceptshipment',function(request,response)
{
    var accept = request.body.shipment;
    response.send("You accept the shipment" + accept)
    console.log("You accept the shipment" + accept)
});
var port = process.env.PORT || 3000

app.listen(port);