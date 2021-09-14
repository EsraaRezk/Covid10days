  
var http = require('http');
var dateFormat = require('dateformat');
const date = require('date-and-time');
var url = 'https://api.covidtracking.com/v1/us/daily.json';
var server = http.createServer(function(request, response){
    var request = require('request');
    request(url, function(err, res, body){
        var data = JSON.parse(body);
        for(let i=0;i<10;i++)
        {
          response.write("<html><body><div id='container'>");
          var dt = data[i]["date"];
          dt=dt.toString();
          let k = i+1;
          response.write("<p>" + k+'. '+'COVID Data for: '+ dt.slice(0,4) + '-' + dt.slice(4,6) + '-' + dt.slice(6,8)+ "<br>" + "</p>");
          response.write("<p>" + 'Positive Cases: ' + data[i]["positive"] + '<br>'+"</p>");
          response.write("<p>" + 'Negative Cases: ' + data[i]["negative"]+ '<br>'+"</p>");
           response.write("<p>" + 'Hospitalized: ' + data[i]["hospitalized"]+ '<br>'+"</p>");
          response.write("<p>" + 'Deaths: ' + data[i]["death"]+ '<br>'+"</p>");

          response.write("</div></body></html>");
          
        }
       
response.end();
    });
}).listen(8081);