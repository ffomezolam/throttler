/**
 * @module Throttler
 */
(function(name, context, definition) {
    if(typeof module !== 'undefined' && module.exports) module.exports = definition(/*require(deps)*/);
    else if(typeof define === 'function' && define.amd) define(/*[deps], */definition);
    else context[name] = definition();
})('throttler', this, function(/*deps*/) {
    return {
        throttle: function(func, ms) {
            var timeout = null;

            return function() {
                var context = this,
                    args = arguments;

                function delayed() {
                    clearTimeout(timeout);
                    timeout = null;
                }

                if(!timeout) {
                    func.apply(context, args);
                    timeout = setTimeout(delayed, ms);
                }
            }
        },
        /**
         * Pretty sure this code is  borrowed from the Underscore library's 
         * debounce method
         */
        debounce: function(func, ms) {
            var timeout = null;

            return function() {
                var context = this,
                    args    = arguments;

                function delayed() {
                    timeout = null;
                    func.apply(context, args);
                }

                clearTimeout(timeout);
                timeout = setTimeout(delayed, ms);
            }
        }
    }
});
