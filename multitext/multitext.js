/**
 * Find input text elements inside selected container with multitext attribute and maipulate them accordingly
 *
 * @return  self
 *
 * @author Borut Hollan <borut.hollan@gmail.com>
 *
 * @version 1.0
 */
$.fn.multitext = function () {
    var $multitext = this.find('input[type="text"][multitext]');
    var types;

    this.on('keyup', 'input[type="text"][multitext]', function (e) {
        e.preventDefault();

        switch (this.getAttribute('multitext')) {
            case 'input':
                input(this);
                break;

            case 'both':
                both(this, e);
                break;

            default:
                enter(this, e);
        }
    });

    var enter = function (elem, e) {
        var code = (e.keyCode || e.which);

        if(code === 13) {
            clone($(elem));
        }
    }

    var input = function (elem) {
        if(elem.value.length > 0) {
            clone($(elem), false);
        }
    }

    var both = function (elem, e) {
        var code = (e.keyCode || e.which);

        if(code === 13) {
            return clone($(elem));
        }

        if(elem.value.length > 0) {
            clone($(elem), false);
        }
    }

    var clone = function ($elem, focus = true) {
        var $next = $elem.next('input[type="text"][multitext]');
        if ($next.length === 0 && $elem.val().length > 0) {
            $next = $elem.clone().val("");
            $elem.after($next);
        }

        if (focus) {
            $next.focus();
        }
    }
}
