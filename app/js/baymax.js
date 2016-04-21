'use strict';

(function($) {
    function Baymax() {
        this.baymax = null;
        this.menu = null;
        this.eyes = null;
        this.head = null;
        this.emotion = null;
        this.hasMenu = false;
        this.normal = {
            eye: 'eye',
            head: 'head'
        }
        this.state = {
            blink: 'blink',
            smile: 'smile',
            wonder: 'wonder',
            greed: 'greed',
            angry: 'angry'
        }
    }

    Baymax.prototype.init = function(baymax, menu, head, eyes) {
        this.baymax = baymax;
        this.menu = menu;
        this.head = head;
        this.eyes = eyes;
    }

    Baymax.prototype.showMenu = function() {
        var menu = this.menu;
        if (this.hasMenu) {
            menu.style.display = 'none';
        } else {
            menu.style.display = 'block';
        };

        this.hasMenu = !this.hasMenu;
    }

    Baymax.prototype.changeEye = function(className) {
        var eyes = this.eyes;
        var eyeClass = this.normal.eye;
        [].forEach.call(eyes, function(item) {
            item.className = eyeClass + ' ' + className;
        })
    }

    Baymax.prototype.changeEyeContent = function(content) {
        var eyes = this.eyes;
        [].forEach.call(eyes, function(item) {
            item.innerHTML = content;
        })
    }

    Baymax.prototype.changeHead = function(className) {
        var head = this.head;
        var handClass = this.normal.head;
        head.className = handClass + ' ' + className;
    }

    Baymax.prototype.clean = function() {
        var eyes = this.eyes;
        var head = this.head;
        var normal = this.normal;
        [].forEach.call(eyes, function(item) {
            item.className = normal.eye;
            item.innerHTML = '';
        })
        head.className = normal.head;
    }

    Baymax.prototype.setState = function(emotion) {
        this.emotion = emotion;
        this.clean();
        var state = this.state[emotion];
        switch (emotion) {
            //眨眼
            case 'blink':
                this.changeEye(state);
                break;
                //笑
            case 'smile':
                this.changeEye(state);
                break;
                //疑惑
            case 'wonder':
                this.changeEyeContent('?');
                this.changeHead(state);
                break;
                //贪婪
            case 'greed':
                this.changeEyeContent('$');
                this.changeEye(state);
                break;
                //生气
            case 'angry':
                this.changeEye(state);
                break;
            default:
                break;
        }
    }

    $.Baymax = Baymax;
})(window);