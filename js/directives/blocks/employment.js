(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .directive('employmentBlock', employmentBlock);

    function employmentBlock() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'js/views/partials/cv/block/employment-block.html',
        };
    };
})();