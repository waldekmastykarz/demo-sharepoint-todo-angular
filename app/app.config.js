(function () {
	var todoapp = angular.module('todoapp');
	todoapp.constant('sharepointApi', '/todo/_api/');
	todoapp.constant('todoListName', 'Todo');
	todoapp.constant('hideFinishedTasks', false);
})();