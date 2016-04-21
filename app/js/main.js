'use strict';
(function($) {
    var baymax = document.querySelector('.baymax');
    var menu = baymax.querySelector('.body .menu-list');
    var head = baymax.querySelector('.head');
    var eyes = baymax.querySelectorAll('.eye');
    $.baymax = new Baymax();
    $.baymax.init(baymax, menu, head, eyes);
})(window);