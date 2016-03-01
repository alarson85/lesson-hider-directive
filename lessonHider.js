angular.module('directivePractice').directive('lessonHider', function(){
	
	return{
		templateUrl: 'lessonHider.html',
		restrict: 'E' ,
		scope: {
			lesson: '='
		} ,
		controller: function($scope, lessonService){
			$scope.getSchedule =lessonService.getSchedule();
		} ,
		link: function(scope, element, attrs){
			scope.getSchedule.then(function(response){
				scope.schedule = response.data;

				scope.schedule.forEach(function( scheduleDay ) {
					if (scheduleDay.lesson === scope.lesson) {
						element.css('text-decoration', 'line-through');
						scope.lessonDay = ['weekday']
						return;
					}
				});
		}),
		scope: {
			dayAlert: '&'
		}


}

}

});