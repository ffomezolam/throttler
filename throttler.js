/**
 * A collection of utility functions for limiting high-frequency invocations.
 *
 * @module throttler
 */
(function(name, that, definition) {
    if(typeof module !== 'undefined' && module.exports) module.exports = definition(/*require(deps)*/);
    else if(typeof define === 'function' && define.amd) define(/*[deps], */definition);
    else that[name] = definition();
})('throttler', this, function(/*deps*/) {
    /**
     * @class throttler
     * @static
     */
    return {
        /**
         * Executes a function once per interval
         *
         * @method throttle
         * @static
         * @param {Function} func Function to throttle
         * @param {Number} ms Time in milliseconds
         * @param {Object} [context] Optional context for invocation
         * @returns {Function} Throttled function
         */
        throttle: function(func, ms, context) {
            var timeout = null;

            return function() {
                var that = context || this,
                    args = arguments;

                function delayed() {
                    clearTimeout(timeout);
                    timeout = null;
                }

                if(!timeout) {
                    func.apply(that, args);
                    timeout = setTimeout(delayed, ms);
                }
            }
        },
        /**
         * Executes function only after it has not been executed for a certain
         * amount of time. (Pretty sure this code is  borrowed from the 
         * Underscore library's debounce method.)
         *
         * @method debounce
         * @static
         * @param {Function} func Function to debounce
         * @param {Number} ms Time in milliseconds
         * @param {Object} [context] Optional context for invocation
         * @returns {Function} Debounced function
         */
        debounce: function(func, ms, context) {
            var timeout = null;

            return function() {
                var that = context || this,
                    args = arguments;

                function delayed() {
                    timeout = null;
                    func.apply(that, args);
                }

                clearTimeout(timeout);
                timeout = setTimeout(delayed, ms);
            }
        }
    }
});
