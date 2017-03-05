var App = angular.module('portal');
App.controller('portalCtrl', ['$rootScope', '$scope', '$http', 'toaster', '$filter', '$timeout', '$q', '$location', '$window', '$state', '$stateParams', '$cookies', function($rootScope, $scope, $http, toaster, $filter, $timeout, $q, $location, $window, $state, $stateParams, $cookies) {


  var showToaster = function(type, title, message) {
    toaster.pop(type, title, message);
  };
  var clearToaster = function() {
    toaster.clear();
  };


/*-------------------Team 1 ---------------------------*/
var high1 = [] , low1 = [] ,medium1 = [], critical1 = [], status_inprogress1 = [],status_unassigned1 = [],status_open1 = []
$scope.getFirstTeam = function() {
  $http.get('/getFirstTeam').success(function(response) {
    if (response && response.success) {
        $scope.data1 = response.data;
        $scope.count1($scope.data1);
    } else {
      showToaster('error', 'Error', response.message);
    }
  })
};

$scope.count1 = function(data) {
  for (var i=0; i<data.length; i++) {
      if (data[i].ci_business_criticality == 'High') {
        high1.push(data[i])
      } else if (data[i].ci_business_criticality == 'Low') {
        low1.push(data[i])
      } else if (data[i].ci_business_criticality == 'Medium') {
        medium1.push(data[i])
      } else if (data[i].ci_business_criticality == 'Critical') {
        critical1.push(data[i])
      } else if (data[i].state == 'In Progress') {
        status_inprogress1.push(data[i])
      } else if (data[i].state == 'unassigned') {
        status_unassigned1.push(data[i])
      } else if (data[i].state == 'open') {
        status_open1.push(data[i])
      }

    $scope.countObj1 = {
      high1 : high1.length,
      low1 : low1.length,
      medium1 : medium1.length,
      critical1 : critical1.length,
      status_inprogress1 : status_inprogress1.length,
      status_open1 : status_open1.length,
      status_unassigned1 : status_unassigned1.length
    };
  }
};

/*--------------------Team 2 -------------------------*/
var high2 = [] , low2 = [] ,medium2 = [], critical2 = [], status_inprogress2 = [],status_unassigned2 = [],status_open2 = []
$scope.getSecondTeam = function() {
  $http.get('/getSecondTeam').success(function(response) {
    if (response && response.success) {
        $scope.data2 = response.data;
        $scope.count2($scope.data2);
    } else {
      showToaster('error', 'Error', response.message);
    }
  })
};

$scope.count2 = function(data) {
  for (var i=0; i<data.length; i++) {
      if (data[i].ci_business_criticality == 'High') {
        high2.push(data[i])
      } else if (data[i].ci_business_criticality == 'Low') {
        low2.push(data[i])
      } else if (data[i].ci_business_criticality == 'Medium') {
        medium2.push(data[i])
      } else if (data[i].ci_business_criticality == 'Critical') {
        critical2.push(data[i])
      } else if (data[i].state == 'In Progress') {
        status_inprogress2.push(data[i])
      } else if (data[i].state == 'unassigned') {
        status_unassigned2.push(data[i])
      } else if (data[i].state == 'open') {
        status_open2.push(data[i])
      }

    $scope.countObj2 = {
      high2 : high2.length,
      low2 : low2.length,
      medium2 : medium2.length,
      critical2 : critical2.length,
      status_inprogress2 : status_inprogress2.length,
      status_open2 : status_open2.length,
      status_unassigned2 : status_unassigned2.length
    };
  }
};

  
}]);

