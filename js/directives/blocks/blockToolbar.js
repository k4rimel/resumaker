(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .directive('blockToolbar', blockToolbar);

    function blockToolbar() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'js/views/partials/cv/block/block-toolbar.html',
        };
    };
})();