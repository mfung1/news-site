// https://john-dugan.com/javascript-debounce/
// https://codepen.io/johndugan/pen/BNwBWL?editors=001
var debounce=function(e,t,n){var a;return function(){var r=this,i=arguments,o=function(){a=null,n||e.apply(r,i)},s=n&&!a;clearTimeout(a),a=setTimeout(o,t||200),s&&e.apply(r,i)}};

export default debounce;