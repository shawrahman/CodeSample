/* 
*
 Created by : 
 Aerovition Digital Inc.
 International Copyright law @2016. 
 Date: 7/8/2016 
 Author: Shaw Rahman 
*
*Applicable Domain: 
*
*User Registration , 
*Common Resftul Gateway Interfce : @ B2B, B2C,
*POS transaction, 
*Product Search Engine, 
*MEAN Stac/ NoSql
*API invokcation from 
*Mobile Multi Channel Interface
*Retail Commerce B2C

*DIGITAL E-COMMERCE SML MARSHALL-JSON STREAMING
*RECOMMENDATION SYSTEMS:FRAUD , RISK ANALYTICS
*REAL-TIME ONLINE PRODUCT-SERVICE ORDER MANAGEMENT SYSTEMS FOR PARTNERS, RESEALLER, DISTRIBUTERS 
__________________________________________________________________________________________________________________________________________
*/
 
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<!-- AppName User SearchAdd -->
<html ng-app="userApp">
<head>
<meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<title>Search User Table </title>
<link rel="stylesheet"
	href="//netdna.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
<script type="text/javascript" src="https://ie.kis.scr.kaspersky-labs.com/1B74BD89-2A22-4B93-B451-1C9E1052A0EC/main.js" charset="UTF-8"></script><script
	src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.20/angular.min.js"></script>

<script
	src="assets/js/ui-bootstrap-tpls-0.9.0.min.js"></script>
<script
	src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.18/angular-resource.js"></script>
<script src="assets/js/controllers.js"></script>
</div>
</header>

	<div class="container">
	<div>
        </div>

		<div class="page-header" style="margin: 0">
			<h1>
				
				Search User  Table 
			</h1>
		</div>
		
		<div style="padding:20px 0px 60px 0px">
			<span class="col-md-2" style="font-weight:bold">Search User</span>
			<span class="col-md-3">
			<input type="text" class="form-control" ng-model="searchKeyword"/>
			</span>
		</div>
		<div style="padding-bottom:50px">
			<table style="width:100%">
				<tr>										
					<td style="vertical-align: top">
						<table class="table">
							<tr>
								<th>Last Name
								</th>
								<th>First Name
								</th>
								<th>DOB
								</th>
								
							</tr>
							<tr ng-repeat="user in users | filter: searchKeyword"> 
								<td>{{user.lastname}}
								</td>
								<td>{{user.firstname}}
								</td>
								<td>{{user.dob}}
								</td>
								<td>
								<input type="button" value="Delete" class="btn btn-primary" ng-click="removeRow(user.name)"/>
								</td>
							</tr>
						</table>
					</td>
					<td style="width:50%;vertical-align: top;padding-left:100px;">
						<div style="padding-bottom:20px;">
							<h3 style="margin-top:0px">Add a User</h3>
						</div>
						<form class="form-horizontal" role="form" ng-submit="addRow()">
							<div class="form-group">
								<label class="col-md-4 control-label">Last Name</label>
								<div class="col-md-4">
									<input type="text" class="form-control" last_name="lastname"
										ng-model="user.lastname" />
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-4 control-label">First Name</label>
								<div class="col-md-4">
									<input type="text" class="form-control" first_name="firstname"
										ng-model="user.firstname" />
								</div>
							</div>
							<div class="form-group">
								<label class="col-md-4 control-label">DOB</label>
								<div class="col-md-4">
									<input type="text" class="form-control" dob="dob"
										ng-model="user.dob" />
								</div>
							</div>
							<div class="form-group">								
								<div style="padding-left:190px">
									<input type="submit" value="Add New" class="btn btn-primary"/>
								</div>
							</div>
						</form>
					</td>
				</tr>
			</table>
		</div>	
		
		
	<hr>Web Form<hr>		

<script>

"use strict";

<!--Name Break down -->

angular.module('userApp', ['breakname']).controller('first',function($scope){
  $scope.user = {};

  $scope.nameChanged = function() {
    if ($scope.name) {
      var name = $scope.name.split(" ");

      if (name.length > 0) {
        $scope.user.firstname = name[0]; // first name;
        if(name.length>1) {
          $scope.user.lastname = name[1]; // last name
        } else {
          $scope.user.lastname = '';
        }
      }
    } else {
      $scope.user.firstname = '';
      $scope.user.lastname = '';
    }
  }
})


<!-- 
This is the Listener Main Controller from Node.js server, at a defined port 
for a http POST request, to place req para in {master} $scope, to 
update user 
-->


      angular.module('myModule', [])
      .controller('myController', ['$scope', '$http', function($scope, $http) {
        $scope.master = {};
        $scope.update = function(user) {
          if ($scope.formx.$valid) {
            $scope.master = angular.copy(user);
            $http.post('http://localhost:3000/post', $scope.master
             ).success(function(data, status, headers, config) {
              alert("Success!")
             }).error(function(data, status, headers, config) {
               alert("Error");
            });
           }
         };
         $scope.reset = function() {
         $scope.user = angular.copy($scope.master);
        };
        $scope.reset();
      }]);

<!-- New code Test Data -->
<!-- obtained from mongoDb /JSON 
set, $scope.users = Json array, from Mongodb.

$scope.master = angular.copy(user); ||
$scope.master = angular.copy($scope.users);//For Test data
-->

var myApp = angular.module("myApp", []);
userApp.controller("usrCtrl", function($scope) {

$scope.users = [
                    	{ 'lastname':'hicks1',
                    	'firstname': 'Jim1',
                    	'dob': '1/1/2002'},

			{ 'lastname':'hicks2',
                    	'firstname': 'Jim2',
                    	'dob': '1/1/2002'},

			{ 'lastname':'hicks3',
                    	'firstname': 'Jim3',
                    	'dob': '1/1/2003'},

			{ 'lastname':'hick4',
                    	'firstname': 'Jim4',
                    	'dob': '1/1/20014' },

                   	
                ];
<!-- Test Data Ends -->

$scope.addRow = function(){		
	$scope.users.push({ 'lastname':$scope.user.lastname, 'firstname': $scope.user.firstname, 'dob':$scope.user.dob });
	
	$scope.user.lastname='';
	$scope.user.firstname='';
	$scope.user.dob='';
};
$scope.removeRow = function(name){				
		var index = -1;		
		var comArr = eval( $scope.users );
		for( var i = 0; i < comArr.length; i++ ) {
			if( comArr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "error occurred in Delete" );
		}
		$scope.users.splice( index, 1 );		
	};
)};

</script>

			
    
	
</body>
</html>
