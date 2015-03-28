(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .directive('blockBlock', blockBlock);

    function blockBlock() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'js/views/partials/cv/block-block.html',
        };
    };
})();