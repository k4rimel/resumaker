(function() {
    'use strict';

    angular
        .module('cvBuilder')
        .directive('sectionBlock', sectionBlock);

    function sectionBlock() {
        return {
            replace: true,
            restrict: 'EA',
            templateUrl: 'js/views/partials/cv/section-block.html',
        };
    };
})();