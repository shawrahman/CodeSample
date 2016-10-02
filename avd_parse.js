 <!-- PASER --> 
  
  var str = "First Second";
            var res = str.split(" ");
    var first=res[0];
if(res[1]!=undefined)
    var second=res[1];
else
var second="";

==
<body ng-app="app">
  <div ng-controller="first">
    <form name="myform" novalidate>
      <div>
        <input type="text" placeholder="FirstName lastname" ng-model="user.firstname" name="username" 

required style="width: 300px;padding: 20px">

        <!--<span ng-show="myform.username.$dirty && myform.username.

$error.required">Required</span>-->

      </div>

      <div>
        <input type="email" placeholder="Email" ng-model="user.email" name="email" required 

style="width: 300px;padding: 20px;margin-top: 50px">
      </div>
      <p>{{user}}</p>
    </form>
  </div>
</body>
