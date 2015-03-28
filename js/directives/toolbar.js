(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .directive('toolbarBlock', toolbarBlock);

    function toolbarBlock() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'js/views/partials/cv/toolbar-block.html',
        };
    };
})();