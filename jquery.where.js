/*!
 * jQuery Where Plugin 0.1
 * https://github.com/pstrinic/jquery.where
 *
 * Copyright 2015 Petar Strinic
 * Released under the MIT license
 */
(function ( $ ) {
  $.fn.where = function(k, v) {
      return this.filter(function() {
          return $(this).attr(k) == v;
      });
  };
}( jQuery ));
