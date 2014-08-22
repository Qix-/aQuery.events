/**
 * aQuery.events
 *
 * A simple events binding addon for aQuery
 */

(function() {
  // Cache slice
  // http://jsperf.com/slice-bind-vs-lookup
  var _slice = [].slice;

  // Add event adder
  this.event = this.addEventListener;

  // Add event remover
  this.unevent = this.removeEventListener;

  // Bind default events
  var defaultEvents = [
      ['blur', 'blur'],
      ['change', 'change'],
      ['click', 'click'],
      ['contextMenu', 'contextmenu'],
      ['copy', 'copy'],
      ['cut', 'cut'],
      ['dblClick', 'dblclick'],
      ['domActivate', 'domActivate'],
      ['domAttributeNameChanged', 'DOMAttributeNameChanged'],
      ['domAttrModified', 'DOMAttrModified'],
      ['domCharacterDataModified', 'DOMCharacterDataModified'],
      ['domContentLoaded', 'DOMContentLoaded'],
      ['domElementNameChanged', 'DOMElementNameChanged'],
      ['domFocusIn', 'DOMFocusIn'],
      ['domFocusOut', 'DOMFocusOut'],
      ['domNodeInserted', 'DOMNodeInserted'],
      ['domNodeInsertedIntoDocument', 'DOMNodeInsertedIntoDocument'],
      ['domNodeRemoved', 'DOMNodeRemoved'],
      ['domNodeRemovedFromDocument', 'DOMNodeRemovedFromDocument'],
      ['domSubtreeModified', 'DOMSubtreeModified'],
      ['drag', 'drag'],
      ['dragEnd', 'dragend'],
      ['dragEnter', 'dragenter'],
      ['dragLeave', 'dragleave'],
      ['dragOver', 'dragover'],
      ['dragStart', 'dragstart'],
      ['drop', 'drop'],
      ['error', 'error'],
      ['focus', 'focus'],
      ['keyDown', 'keydown'],
      ['keyPress', 'keypress'],
      ['keyUp', 'keyup'],
      ['load', 'load'],
      ['mouseDown', 'mousedown'],
      ['mouseEnter', 'mouseenter'],
      ['mouseLeave', 'mouseleave'],
      ['mouseMove', 'mousemove'],
      ['mouseOut', 'mouseout'],
      ['mouseOver', 'mouseover'],
      ['mouseUp', 'mouseup'],
      ['paste', 'paste'],
      ['resize', 'resize'],
      ['scroll', 'scroll'],
      ['select', 'select'],
      ['show', 'show'],
      ['submit', 'submit'],
      ['touchCancel', 'touchcancel'],
      ['touchEnd', 'touchend'],
      ['touchEnter', 'touchenter'],
      ['touchLeave', 'touchleave'],
      ['touchMove', 'touchmove'],
      ['touchStart', 'touchstart']
    ];

  for (var i = 0, len = defaultEvents.length; i < len; i++) {
    var pair = defaultEvents[i];
    this[pair[0]] = (function(evname) {
      return function() {
        var args = _slice.call(arguments);
        args = [evname].concat(args);
        this.event.apply(this, args);
        return this;
      };
    })(pair[1]);
  }
}).call(A());
