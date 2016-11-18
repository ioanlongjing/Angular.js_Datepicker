angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('DatepickerDemoCtrl', function ($scope) {
  $scope.today = function() 
  {
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() 
  {
    $scope.dt = null;
  };

  $scope.options = 
  {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  // Disable weekend selection
  function disabled(data) 
  {
    var date = data.date,
      mode = data.mode;
    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
  }

  $scope.toggleMin = function() 
  {
    $scope.options.minDate = $scope.options.minDate ? null : new Date();
  };

  $scope.toggleMin();

  $scope.setDate = function(year, month, day) 
  {
    $scope.dt = new Date(year, month, day);
  };

  var someday = new Date('2016-11-30');

  $scope.events = 
  [
    {
      date: someday,
      status: 'partially'
    }
  ]

  function getDayClass(data) 
  {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') 
    {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) 
      {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) 
        {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
});