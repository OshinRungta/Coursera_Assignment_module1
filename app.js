(function functionName() {
  'use strict';

angular.module('LunchCheck',[])

.controller('MyFirstController',function($scope)
{
  $scope.name="";
  $scope.totalvalue=0;
$scope.displayNumeric=function()
{
  var totalNamevalue=calculateNumericString($scope.name);
  $scope.totalvalue=totalNamevalue;
};
function calculateNumericString(string)
{
  var totalStringvalue=0;
  for(var i=0;i<string.length;i++)
  {
  totalStringvalue+=string.charCodeAt(i);
}
return totalStringvalue;

};


});

})();
