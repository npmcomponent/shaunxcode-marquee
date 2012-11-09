// Generated by CoffeeScript 1.3.3
(function() {
  var $, Emitter;

  $ = require("jquery");

  require("./lib/jquery.overlaps.js");

  Emitter = require("emitter");

  module.exports = function(surface, selectable, selectedClass) {
    var drawingBox, emitter, selected, startX, startY;
    emitter = new Emitter;
    drawingBox = false;
    selected = false;
    startX = 0;
    startY = 0;
    $(surface).on({
      mousedown: function(e) {
        if (selected) {
          selected.removeClass(selectedClass);
        }
        startX = e.pageX;
        startY = e.pageY;
        return drawingBox = $("<div />").addClass("groupSelectionBox").css({
          left: e.pageX,
          top: e.pageY
        }).appendTo("body");
      },
      mousemove: function(e) {
        var height, left, top, width;
        if (drawingBox) {
          if (e.pageX < startX) {
            left = e.pageX;
            width = startX - left;
          } else {
            left = startX;
            width = e.pageX - left;
          }
          if (e.pageY < startY) {
            top = e.pageY;
            height = startY - top;
          } else {
            top = startY;
            height = e.pageY - top;
          }
          drawingBox.css({
            left: left,
            top: top,
            width: width,
            height: height
          });
          return selected = $("" + surface + " " + selectable).removeClass(selectedClass).filter(function() {
            return drawingBox.overlaps(this);
          }).addClass(selectedClass);
        }
      },
      mouseup: function(e) {
        if (drawingBox) {
          drawingBox.remove();
          drawingBox = false;
          selected.removeClass(selectedClass);
        }
        if (selected.length) {
          return emitter.emit("itemsSelected", selected);
        }
      }
    });
    return emitter;
  };

}).call(this);
