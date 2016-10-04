/* 
 Created by : 
 Aerovition Digital Inc.,
 International Copyright law @2016. 
 Date: 7/8/2016 
 Author: Shaw Rahman 

NodeJs server to obtain request  
Common Gateway Restful Interface
To accept any request 

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
		var sname = ''; //search keyword

                request.on('data', function(chunk) {
                jsonUserObject = JSON.parse(chunk.toString());
	       

		name = jsonUserObject.name;

		name = $scope.name.split(" ");

		if (name.length > 0) {
        			     $scope.user.firstname = name[0]; // first name;
        		             if(name.length>1) {
          				  		$scope.user.lastname = name[1]; // last name
        				  		} 
				     else 
					  {
          				   $scope.user.lastname = '';
        				  }
      				     }
    		else 
			{
      			$scope.user.firstname = '';
      			$scope.user.lastname = '';
    			}

	       	dob = jsonUserObject.dob;
		sname = jsonUserObject.searchKeyword;

               	db.testData.insert({	user.name:name,
					user.lastname:name[1], 
					user.firstname:name[0], 
					user.dob:dob,
					user.searchkeyword: sname}, function(err, testData) {
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
