angular.module('directivePractice').directive('lessonHider', function(){
	
	return{
		templateUrl: 'lessonHider.html',
		restrict: 'E' ,
		scope: {
			lesson: '=' ,
			dayAlert: '&'
		} ,

		controller: function($scope, lessonService){
			$scope.getSchedule =lessonService.getSchedule();
		} ,

		link: function(scope, element, attrs){
			scope.getSchedule.then(function(response){
				scope.schedule = response.data;

				scope.schedule.forEach(function( scheduleDay ) {
					if (scheduleDay.lesson === scope.lesson) {
						scope.lessonDay = scheduleDay.weekday;
						return;
						element.css('text-decoration', 'line-through');
						}
				});
			})
		}
	};
});