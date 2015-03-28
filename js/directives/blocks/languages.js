(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .directive('languagesBlock', languagesBlock);

    function languagesBlock() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'js/views/partials/cv/block/languages-block.html',
        };
    };
})();