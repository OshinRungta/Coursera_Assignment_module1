(function functionName() {
  'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',['$scope',LunchCheckController]);

function LunchCheckController($scope)
{
  $scope.lunchmenu="";
  $scope.Message="";
  $scope.splitMenu=function()
{
  var totalitems=0;
  var arrayOfItemsInMenu=$scope.lunchmenu.split(",");
  if(arrayOfItemsInMenu!="")
  {
  for(var i=0;i<arrayOfItemsInMenu.length;i++)
  totalitems++;
}
  return totalitems
};

$scope.DisplayMessage=function()
{
  var getheitems=$scope.splitMenu();
  if (getheitems==0)
  $scope.Message="Please enter data first";
  if(getheitems>0 && getheitems<=3)
  $scope.Message="Enjoy!";
  if(getheitems>3)
  $scope.Message="Too much!";

};

}

})();
