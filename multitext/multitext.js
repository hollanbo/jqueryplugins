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

    this.on('keyup', 'input[type="text"][multitext="enter"]', function (e) {
        var code = (e.keyCode || e.which);
        e.preventDefault();

        if(code !== 13) {
            return;
        }

        clone($(this));
    }).on('keyup', 'input[type="text"][multitext="input"]', function (e) {
        var code = (e.keyCode || e.which);
        e.preventDefault();

        if(this.value.length === 0) {
            return;
        }

        clone($(this), false);
    });

    var clone = function ($elem, focus = true) {
        console.log('whaaa');
        if (
            $elem.next('input[type="text"][multitext]').length > 0 ||
            $elem.val().length === 0
        ) {
            return;
        }

        var $new = $elem.clone().val("");
        $elem.after($new);

        if (focus) {
            $new.focus();
        }
    }
}
