(function () {
    todoApp.controller('TodoController', ['$scope', function ($scope) {

        //Show / hide info panel for each task
        $scope.displayInfo = function (event) {
            $(event.target).parentsUntil('.items').find('.panel-body').slideToggle();
        };

        // Add new tasks
        $scope.addTask = function () {
            $scope.tasks.push({
                time: new Date(),
                title: $scope.newTitle,
                desc: $scope.newDesc,
                completed: false

            });

            $scope.tab = 'incompleted';
            $('ul.nav-pills li').removeClass('active');
            $('ul.nav-pills li.incompleted').addClass('active');
            $scope.newTitle = '';
            $scope.newDesc = '';
            return $scope.saveSession();
        };


        // Add new tasksCount the number of tasks that are not completed
        function countIncomplete() {
            var count = 0;
            var i = 0;
            for (i; i < $scope.tasks.length; i++) {
                if ($scope.tasks[i].completed == false) {
                    $('.checkbox').find('b').removeClass('strike-completed');
                    count++;
                } else {
                    $('.checkbox').find('b').addClass('strike-completed');
                }
            };
            return $scope.countIncomplete = count;
        }


        //Change position for class 'active'
        function changeActive(tab) {
            $('ul.nav-pills li').removeClass('active');
            $().addClass('active');
        }

        // Navigation and tabs
        $scope.tab = 'incompleted';
        $scope.tabSet = function (tab) {
            $scope.tab = tab;
        };
        $scope.tabToggle = function (task) {
            if ($scope.tab == 'incompleted') {
                $scope.countIncomplete = countIncomplete();
                $('form').show();
                return (task.completed == false);
            } else {
                $('form').hide();
                $scope.countIncomplete = countIncomplete();
                return (task.completed == true);
            }
        };

    }]);
})();