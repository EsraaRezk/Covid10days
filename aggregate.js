  
var http = require('http');
var dateFormat = require('dateformat');
const date = require('date-and-time');
var url = 'https://api.covidtracking.com/v1/us/daily.json';
var server = http.createServer(function(request, response){
    var request = require('request');
    request(url, function(err, res, body){
        var data = JSON.parse(body);
        var tot_pv, tot_nv, tot_deaths, tot_hosp=0
        for(let i=0;i<10;i++)
        {
          tot_pv+=data[i]["positive"];
          tot_nv+=data[i]["negative"];
          tot_deaths+=data[i]["death"];
          tot_hosp+=data[i]["hospitalized"];



        }

        response.write("<html><body><div id='container'>");
          
          response.write("<h2>" +'Aggregated COVID Data from 26/2/2021 to 07/03/2021 : '+ "<br>" + "</h2>");
          response.write("<p>" + 'Total Positive Cases: ' + tot_pv + '<br>'+"</p>");
          response.write("<p>" + 'Total Negative Cases: ' + tot_nv + '<br>'+"</p>");
           response.write("<p>" + 'Total Hospitalized: ' + tot_hosp + '<br>'+"</p>");
          response.write("<p>" + 'Total Deaths: ' + tot_deaths+ '<br>'+"</p>");

          response.write("</div></body></html>");
          
       
response.end();
    });
}).listen(8081);