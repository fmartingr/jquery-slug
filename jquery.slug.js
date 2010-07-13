(function($) {
  $.extend($.fn, {
    slug: function() {
      var self = this;
      var slug = '';
      var text = null;
      
      text = this.val();
      text = jQuery.trim(text.toString());
      
      for (var i = 0; i < text.length; i ++) {
        slug += getChar(text.charCodeAt(i), '-');
      }
      
      slug = slug.toLowerCase();
      slug = slug.replace(new RegExp ('\-{2,}', 'gmi'), '-');
      
      return slug;
      
      function getChar(charCode, returnDefault) {
        
        var chars = {};
        
        var returnChar = returnDefault;
        
        
        chars['a'] = [65, 97, 170, 192, 193, 194, 195, 196, 197, 224, 225, 226, 227, 228, 229, 256, 257, 258, 259, 260];
        chars['b'] = [66, 98, 223, 384, 385, 386, 387, 388, 389, 421];
        chars['c'] = [67, 99, 169, 199, 231, 261, 262, 263, 264, 265, 266, 267, 268, 269];
        chars['d'] = [68, 100, 208, 240, 270, 271, 272, 273, 393, 394, 395, 396];
        chars['e'] = [69, 101, 8364, 200, 201, 202, 203, 232, 233, 234, 235, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 398, 399, 400, 440, 441, 442, 477, 494, 495];
        chars['f'] = [70, 102, 401, 402];
        chars['g'] = [71, 103, 284, 285, 286, 287, 288, 289, 290, 291, 403, 484, 485, 486, 487];
        chars['h'] = [72, 104];
        chars['i'] = [73, 105, 204, 205, 206, 207, 236, 237, 238, 239, 296, 297, 298, 299, 300, 301, 302, 303, 304, 463, 464];
        chars['j'] = [74, 106];
        chars['k'] = [75, 107];
        chars['l'] = [76, 108];
        chars['m'] = [77, 109];
        chars['n'] = [78, 110];
        chars['o'] = [79, 111];
        chars['p'] = [80, 112];
        chars['q'] = [81, 113];
        chars['r'] = [82, 114];
        chars['s'] = [83, 115];
        chars['t'] = [84, 116];
        chars['u'] = [85, 117];
        chars['v'] = [86, 118];
        chars['w'] = [87, 119];
        chars['x'] = [88, 120];
        chars['y'] = [89, 121];
        chars['0'] = [8];
        chars['1'] = [9];
        chars['2'] = [10];
        chars['3'] = [11];
        chars['4'] = [12];
        chars['5'] = [13];
        chars['6'] = [14];
        chars['7'] = [15];
        chars['8'] = [16];
        chars['9'] = [17];
        
        $.each(chars, function(digit, charCodes) {
          if($.inArray(charCode, charCodes) > -1) {
            returnChar = digit;
            return;
          }
        })
        
        return returnChar;
      }
      
    }
  });
})(jQuery);