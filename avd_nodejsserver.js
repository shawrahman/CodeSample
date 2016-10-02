/* 
2 Created by : 
3 Aerovition Digital Inc.,An Aerovition Company 
4 International Copyright law @2016. 
5 Date: 7/8/2016 
6 Author: Shaw Rahman 
7 
 
8 Research Domain:  
9 1. Applied Artificial Intelligence,  
10 2. Machime Learning. 
11 3. Two tree SVM 
12 4. supervised learning 
13 5. Model Driven system Of systems MDA_LSSI_SOS 
14 6. Recommendations systems in BigData 


NodeJs server to obtain request  
last,
first, 
dob 
to store in mondodb default schema.
*/

var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var qs = require('querystring');

var mimeTypes = {
           "html": "text/html",
           "jpeg": "image/jpeg",
           "jpg": "image/jpeg",
           "png": "image/png",
           "js": "text/javascript",
           "css": "text/css"};

var databaseUrl = "test";         //Mongo Default databse.
var collections = ["testData"]    //Mongodb test collections in test schema:  substitute by newdb.
var db = require("mongojs").connect(databaseUrl, collections);

var server = http.createServer(function onRequest(request, response) {
       var urlParts = url.parse(request.url);
       var fullPath = urlParts.pathname;
       var page = 'pages' + urlParts.pathname;
       var jsonUserOject = '';
       if (fullPath == "/post") {
		
		var name = '';
            	var name[0] = '';
            	var name[1] = '';
	    	var dob = '';

                request.on('data', function(chunk) {
                jsonUserObject = JSON.parse(chunk.toString());
	       

		name = jsonUserObject.name;
               	name[0] =  jsonUserObject.lastname;
	       	name[1] = jsonUserObject.firstname;
	       	dob = jsonUserObject.dob;

               	db.testData.insert({	user:name,
					user.lastname:name[0], 
					user.firstname:name[1], 
					user.dob:dob 				}, function(err, testData) {
                   if( err || !testData) console.log("Unable to add New user");
                   });
               });
       }

    var mimeType = mimeTypes[path.extname(page).split(".")[1]];

    fs.exists(page, function fileExists(exists) {
              if (exists) {
                   response.writeHead(200, mimeType);
                   fs.createReadStream(page).pipe(response);
              } else {
                   response.write('Unsucccessful,  Not Found');
                   response.end();
              }
    });
}).listen(3000);
