(function () {
    todoApp.controller('SessionController', ['$cookies', '$scope', function ($cookies, $scope) {


        (function () {
            // Checking for the cookie if it already exist then identifying user is old or new
            if (document.cookie.indexOf("sessionTodo") >= 0) {
                //enters only if cookie is already is browser
                $scope.user = 'old';
                console.log($cookies.getObject('sessionTodo'));
                $scope.tasks = ($cookies.getObject('sessionTodo'));
            } else {
                // if cookie is not already there means new user
                $scope.user = 'new';
                $scope.tasks = [
                    {
                        time: new Date(),
                        title: 'Welcome to Cookietodo!',
                        desc: 'It´s easy to add new tasks och clean out the list. Press on the checkbox on the left side to mark this tasks as completed',
                        completed: false
                            }
                ];
                $cookies.putObject('sessionTodo', $scope.tasks);
                alert("new user,sending the cookie to browser");
                console.log($cookies.getObject('sessionTodo'));
            };
        })();

        // save a task as cookie in browser
        $scope.saveSession = function () {
            console.log($scope.tasks);
            $cookies.putObject('sessionTodo', $scope.tasks);
        }

        //remove a task as cookie from browser
        $scope.destroySession = function () {
            $cookies.remove('sessionTodo');
            location.reload();
        }


        // remove a completed task as a cookie from browser
        $scope.removeCompleted = function () {
            console.log($scope.tasks.length);
            var i = ($scope.tasks.length - 1);
            for (i; i >= 0; i--) {
                if ($scope.tasks.length === 1) {
                    $scope.tasks = [{}];
                    $scope.saveSession();
                } else if ($scope.tasks[i].completed == true) {
                    removeThis(i);
                    $scope.saveSession();
                };
            };

        }

        function removeThis(index) {
            return [$scope.tasks.splice(index, 1)];
        };

}]);
})();