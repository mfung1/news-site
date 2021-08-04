import debounce from './debounce';
var UoL = UoL || {};
    UoL.LoD = UoL.LoD || {};

UoL.LoD.matchHeights = function () {
  "use strict";

  var dataAttr = "data-matchHeights";
  var minViewportWidth = 504;

  function _getHeightSetsArray(dataAttr) {
    // Return an array containing the different values of data-heightmatch
    var value;
    var arr = [];
    var sets = document.querySelectorAll("[" + dataAttr + "]");
    var i = sets.length;
    while (i--) {
      value = sets[i].getAttribute(dataAttr);
      if (arr.indexOf(value) === -1) {
        arr.push(value);
      }
    }
    return arr;
  }

  function _resetMinHeights(set) {
    // reset min-heights by removing the inline style.
    var i = set.length;
    while (i--) {
      set[i].removeAttribute("style");
    }
  }

  function _getMaxSetHeight(set) {
    // return the height of the tallest element in set
    var maxHeight = 0;
    var currentHeight;
    var i = set.length;
    while (i--) {
      currentHeight = set[i].clientHeight;
      if (currentHeight > maxHeight) {
        maxHeight = currentHeight;
      }
    }
    return maxHeight;
  }

  function _setMinHeight(set, matchedHeight) {
    var i = set.length;
    while (i--) {
      set[i].style.minHeight = matchedHeight + "px";
    }
  }

  function init() {
    var sets = _getHeightSetsArray(dataAttr);
    var i = sets.length;
    var set;

    while (i--) {
      set = document.querySelectorAll("[" + dataAttr + '="' + sets[i] + '"]');

      _resetMinHeights(set);

      // Only above minimum screen width
      if (document.body.clientWidth >= minViewportWidth) {
        _setMinHeight(set, _getMaxSetHeight(set));
      }
    }
  }

  init();
};

document.addEventListener('DOMContentLoaded',UoL.LoD.matchHeights(), false)

window.addEventListener('resize', debounce(UoL.LoD.matchHeights, 100, false), false);