    var todoApp = angular.module('todoApp', ['ngCookies', 'ngAnimate']);
    todoApp.directive("checkboxCtrl", function ($timeout) {
        return {
            restrict: "A",
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    $('.btn-check.btn-default').removeClass('active');
                    var checkbox = $('input[type="checkbox"]').is(':checked');
                    if (!checkbox) {
                        $('.btn-check.btn-default').removeClass('active');
                    } else {
                        $('.btn-check.btn-default').addClass('active');
                    };
                });

            }
        };
    });

    todoApp.directive("transition", function ($timeout) {
        return {
            restrict: "A",
            link: function (scope, elem, attrs) {
                $timeout(function () {
                    $(this).parentsUntil('.items').fadeOut(500, function () {
                        $(this).css({
                            "visibility": "hidden",
                            display: 'block',
                            padding: '0'
                        }).slideUp();
                        $(this).closest('.items').css({
                            padding: '0'
                        });
                    });
                });
            }
        };

    });