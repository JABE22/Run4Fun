function isTouchEnabled() {
  return (("ontouchstart" in window)
    || (navigator.MaxTouchPoints > 0)
    || (navigator.msMaxTouchPoints > 0));
}
jQuery(document).ready(function(){
  jQuery(".level2base").hide().animate({"opacity":"0"}, 100);
  jQuery(".backtoworld").on("click", function(){
    jQuery(".level2base").hide().animate({"opacity":"0"}, 100);
    jQuery("#wddrlevel1").show().animate({"opacity":"1"}, 100);
  });
});
jQuery(function () {
  jQuery("path[id^=wddrjs]").each(function (i, e) {
    wddraddEvent(jQuery(e).attr("id"));
  });
});
function wddraddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#wddrjsvn" + arr.slice(6).join(""));
  jQuery("#" + ["visnames"]).attr({"fill":wddrjsconfig.general.visibleNames});
  _obj.attr({"fill":wddrjsconfig[id].upColor, "stroke":wddrjsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (wddrjsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#wddrjstip").show().html(wddrjsconfig[id].hover);
      _obj.css({"fill":wddrjsconfig[id].overColor});
    }, function () {
      jQuery("#wddrjstip").hide();
      jQuery("#" + id).css({"fill":wddrjsconfig[id].upColor});
    });
    if (wddrjsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":wddrjsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":wddrjsconfig[id].overColor});
      jQuery("#wddrjstip").hide();
      if (wddrjsconfig[id].target === "new_window") {
        window.open(wddrjsconfig[id].url);
      } else if (wddrjsconfig[id].target === "same_window") {
        window.parent.location.href = wddrjsconfig[id].url;
      } else if (wddrjsconfig[id].target === "modal") {
        jQuery(wddrjsconfig[id].url).modal("show");
      } else if (wddrjsconfig[id].target === "zoom") {
        jQuery("#wddrlevel1, .level2base").hide().animate({"opacity":"0"}, 100);
        jQuery("#" + wddrjsconfig[id].zoomto).show().animate({"opacity":"1"}, 100);
      } else if (wddrjsconfig[id].target === "none") {
        jQuery("#wddrjstip").show().html(wddrjsconfig[id].hover);
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#wddrjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":wddrjsconfig[id].downColor});
        jQuery("#wddrjstip").show().html(wddrjsconfig[id].hover);
        jQuery("#wddrjstip").css({left: x, top: y});
      });
      _Textobj.mouseup(function(){
        jQuery("#" + id).css({"fill":wddrjsconfig[id].upColor});
        jQuery("#wddrjstip").hide();
        if (wddrjsconfig[id].target === "new_window") {
          window.open(wddrjsconfig[id].url);
        } else if (wddrjsconfig[id].target === "same_window") {
          window.parent.location.href = wddrjsconfig[id].url;
          jQuery("#wddrjstip").hide();
        } else if (wddrjsconfig[id].target === "modal") {
          jQuery(wddrjsconfig[id].url).modal("show");
          jQuery("#wddrjstip").hide();
        } else if (wddrjsconfig[id].target === "none") {
          jQuery("#wddrjstip").show().html(wddrjsconfig[id].hover);
        }
      });
    }
	}
}
jQuery(function () {
  jQuery("path[id^=wdafjs]").each(function (i, e) {
    wdafaddEvent( jQuery(e).attr("id"));
  });
});
function wdafaddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#wdafjsvn" + arr.slice(6).join(""));
  jQuery("#" + ["afvisnames"]).attr({"fill":wdafjsconfig.general.visibleNames});
  _obj.attr({"fill":wdafjsconfig[id].upColor, "stroke":wdafjsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (wdafjsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#wddrjstip").show().html(wdafjsconfig[id].hover);
      _obj.css({"fill":wdafjsconfig[id].overColor});
    }, function () {
      jQuery("#wddrjstip").hide();
      jQuery("#" + id).css({"fill":wdafjsconfig[id].upColor});
    });
    if (wdafjsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":wdafjsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":wdafjsconfig[id].overColor});
      if (wdafjsconfig[id].target === "new_window") {
        window.open(wdafjsconfig[id].url);  
      } else if (wdafjsconfig[id].target === "same_window") {
        window.parent.location.href = wdafjsconfig[id].url;
      } else if (wdafjsconfig[id].target === "modal") {
        jQuery(wdafjsconfig[id].url).modal("show");
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#wddrjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":wdafjsconfig[id].downColor});
        jQuery("#wddrjstip").show().html(wdafjsconfig[id].hover);
        jQuery("#wddrjstip").css({left: x, top: y});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":wdafjsconfig[id].upColor});
        if (wdafjsconfig[id].target === "new_window") {
          window.open(wdafjsconfig[id].url);
        } else if (wdafjsconfig[id].target === "same_window") {
          window.parent.location.href = wdafjsconfig[id].url;
        } else if (wdafjsconfig[id].target === "modal") {
          jQuery(wdafjsconfig[id].url).modal("show");
        }
      });
    }
  }
}
jQuery(function () {
  jQuery("path[id^=wdasjs]").each(function (i, e) {
    wdasaddEvent( jQuery(e).attr("id"));
  });
});
function wdasaddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#wdasjsvn" + arr.slice(6).join(""));
  jQuery("#" + ["asvisnames"]).attr({"fill":wdasjsconfig.general.visibleNames});
  _obj.attr({"fill":wdasjsconfig[id].upColor, "stroke":wdasjsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (wdasjsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#wddrjstip").show().html(wdasjsconfig[id].hover);
      _obj.css({"fill":wdasjsconfig[id].overColor});
    }, function () {
      jQuery("#wddrjstip").hide();
      jQuery("#" + id).css({"fill":wdasjsconfig[id].upColor});
    });
    if (wdasjsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":wdasjsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":wdasjsconfig[id].overColor});
      if (wdasjsconfig[id].target === "new_window") {
        window.open(wdasjsconfig[id].url);  
      } else if (wdasjsconfig[id].target === "same_window") {
        window.parent.location.href = wdasjsconfig[id].url;
      } else if (wdasjsconfig[id].target === "modal") {
        jQuery(wdasjsconfig[id].url).modal("show");
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#wddrjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":wdasjsconfig[id].downColor});
        jQuery("#wddrjstip").show().html(wdasjsconfig[id].hover);
        jQuery("#wddrjstip").css({left: x, top: y});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":wdasjsconfig[id].upColor});
        if (wdasjsconfig[id].target === "new_window") {
          window.open(wdasjsconfig[id].url);
        } else if (wdasjsconfig[id].target === "same_window") {
          window.parent.location.href = wdasjsconfig[id].url;
        } else if (wdasjsconfig[id].target === "modal") {
          jQuery(wdasjsconfig[id].url).modal("show");
        }
      });
    }
  }
}
jQuery(function () {
  jQuery("path[id^=wdeujs]").each(function (i, e) {
    wdeuaddEvent( jQuery(e).attr("id"));
  });
});
function wdeuaddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#wdeujsvn" + arr.slice(6).join(""));
  jQuery("#" + ["euvisnames"]).attr({"fill":wdeujsconfig.general.visibleNames});
  _obj.attr({"fill":wdeujsconfig[id].upColor, "stroke":wdeujsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (wdeujsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#wddrjstip").show().html(wdeujsconfig[id].hover);
      _obj.css({"fill":wdeujsconfig[id].overColor});
    }, function () {
      jQuery("#wddrjstip").hide();
      jQuery("#" + id).css({"fill":wdeujsconfig[id].upColor});
    });
    if (wdeujsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":wdeujsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":wdeujsconfig[id].overColor});
      if (wdeujsconfig[id].target === "new_window") {
        window.open(wdeujsconfig[id].url);  
      } else if (wdeujsconfig[id].target === "same_window") {
        window.parent.location.href = wdeujsconfig[id].url;
      } else if (wdeujsconfig[id].target === "modal") {
        jQuery(wdeujsconfig[id].url).modal("show");
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#wddrjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":wdeujsconfig[id].downColor});
        jQuery("#wddrjstip").show().html(wdeujsconfig[id].hover);
        jQuery("#wddrjstip").css({left: x, top: y});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":wdeujsconfig[id].upColor});
        if (wdeujsconfig[id].target === "new_window") {
          window.open(wdeujsconfig[id].url);
        } else if (wdeujsconfig[id].target === "same_window") {
          window.parent.location.href = wdeujsconfig[id].url;
        } else if (wdeujsconfig[id].target === "modal") {
          jQuery(wdeujsconfig[id].url).modal("show");
        }
      });
    }
  }
}
jQuery(function () {
  jQuery("path[id^=wdnajs]").each(function (i, e) {
    wdnaaddEvent( jQuery(e).attr("id"));
  });
});
function wdnaaddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#wdnajsvn" + arr.slice(6).join(""));
  jQuery("#" + ["navisnames"]).attr({"fill":wdnajsconfig.general.visibleNames});
  _obj.attr({"fill":wdnajsconfig[id].upColor, "stroke":wdnajsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (wdnajsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#wddrjstip").show().html(wdnajsconfig[id].hover);
      _obj.css({"fill":wdnajsconfig[id].overColor});
    }, function () {
      jQuery("#wddrjstip").hide();
      jQuery("#" + id).css({"fill":wdnajsconfig[id].upColor});
    });
    if (wdnajsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":wdnajsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":wdnajsconfig[id].overColor});
      if (wdnajsconfig[id].target === "new_window") {
        window.open(wdnajsconfig[id].url);  
      } else if (wdnajsconfig[id].target === "same_window") {
        window.parent.location.href = wdnajsconfig[id].url;
      } else if (wdnajsconfig[id].target === "modal") {
        jQuery(wdnajsconfig[id].url).modal("show");
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#wddrjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":wdnajsconfig[id].downColor});
        jQuery("#wddrjstip").show().html(wdnajsconfig[id].hover);
        jQuery("#wddrjstip").css({left: x, top: y});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":wdnajsconfig[id].upColor});
        if (wdnajsconfig[id].target === "new_window") {
          window.open(wdnajsconfig[id].url);
        } else if (wdnajsconfig[id].target === "same_window") {
          window.parent.location.href = wdnajsconfig[id].url;
        } else if (wdnajsconfig[id].target === "modal") {
          jQuery(wdnajsconfig[id].url).modal("show");
        }
      });
    }
  }
}
jQuery(function () {
  jQuery("path[id^=wdocjs]").each(function (i, e) {
    wdocaddEvent( jQuery(e).attr("id"));
  });
});
function wdocaddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#wdocjsvn" + arr.slice(6).join(""));
  jQuery("#" + ["ocvisnames"]).attr({"fill":wdocjsconfig.general.visibleNames});
  _obj.attr({"fill":wdocjsconfig[id].upColor, "stroke":wdocjsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (wdocjsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#wddrjstip").show().html(wdocjsconfig[id].hover);
      _obj.css({"fill":wdocjsconfig[id].overColor});
    }, function () {
      jQuery("#wddrjstip").hide();
      jQuery("#" + id).css({"fill":wdocjsconfig[id].upColor});
    });
    if (wdocjsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":wdocjsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":wdocjsconfig[id].overColor});
      if (wdocjsconfig[id].target === "new_window") {
        window.open(wdocjsconfig[id].url);  
      } else if (wdocjsconfig[id].target === "same_window") {
        window.parent.location.href = wdocjsconfig[id].url;
      } else if (wdocjsconfig[id].target === "modal") {
        jQuery(wdocjsconfig[id].url).modal("show");
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#wddrjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":wdocjsconfig[id].downColor});
        jQuery("#wddrjstip").show().html(wdocjsconfig[id].hover);
        jQuery("#wddrjstip").css({left: x, top: y});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":wdocjsconfig[id].upColor});
        if (wdocjsconfig[id].target === "new_window") {
          window.open(wdocjsconfig[id].url);
        } else if (wdocjsconfig[id].target === "same_window") {
          window.parent.location.href = wdocjsconfig[id].url;
        } else if (wdocjsconfig[id].target === "modal") {
          jQuery(wdocjsconfig[id].url).modal("show");
        }
      });
    }
  }
}
jQuery(function () {
  jQuery("path[id^=wdsajs]").each(function (i, e) {
    wdsaaddEvent( jQuery(e).attr("id"));
  });
});
function wdsaaddEvent(id,relationId) {
  var _obj = jQuery("#" + id);
  var arr = id.split("");
  var _Textobj = jQuery("#" + id + "," + "#wdsajsvn" + arr.slice(6).join(""));
  jQuery("#" + ["savisnames"]).attr({"fill":wdsajsconfig.general.visibleNames});
  _obj.attr({"fill":wdsajsconfig[id].upColor, "stroke":wdsajsconfig.general.borderColor});
  _Textobj.attr({"cursor": "default"});
  if (wdsajsconfig[id].active === true) {
    _Textobj.attr({"cursor": "pointer"});
    _Textobj.hover(function () {
      jQuery("#wddrjstip").show().html(wdsajsconfig[id].hover);
      _obj.css({"fill":wdsajsconfig[id].overColor});
    }, function () {
      jQuery("#wddrjstip").hide();
      jQuery("#" + id).css({"fill":wdsajsconfig[id].upColor});
    });
    if (wdsajsconfig[id].target !== "none") {
      _Textobj.mousedown(function () {
        jQuery("#" + id).css({"fill":wdsajsconfig[id].downColor});
      });
    }
    _Textobj.mouseup(function () {
      jQuery("#" + id).css({"fill":wdsajsconfig[id].overColor});
      if (wdsajsconfig[id].target === "new_window") {
        window.open(wdsajsconfig[id].url);  
      } else if (wdsajsconfig[id].target === "same_window") {
        window.parent.location.href = wdsajsconfig[id].url;
      } else if (wdsajsconfig[id].target === "modal") {
        jQuery(wdsajsconfig[id].url).modal("show");
      }
    });
    _Textobj.mousemove(function (e) {
      var x = e.pageX + 10, y = e.pageY + 15;
      var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
      x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw - (20 * 2) : x ;
      y = (y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() - tiph - 10 : y ;
      jQuery("#wddrjstip").css({left: x, top: y});
    });
    if (isTouchEnabled()) {
      _Textobj.on("touchstart", function (e) {
        var touch = e.originalEvent.touches[0];
        var x = touch.pageX + 10, y = touch.pageY + 15;
        var tipw =jQuery("#wddrjstip").outerWidth(), tiph =jQuery("#wddrjstip").outerHeight(),
        x = (x + tipw >jQuery(document).scrollLeft() +jQuery(window).width())? x - tipw -(20 * 2) : x ;
        y =(y + tiph >jQuery(document).scrollTop() +jQuery(window).height())? jQuery(document).scrollTop() +jQuery(window).height() -tiph - 10 : y ;
        jQuery("#" + id).css({"fill":wdsajsconfig[id].downColor});
        jQuery("#wddrjstip").show().html(wdsajsconfig[id].hover);
        jQuery("#wddrjstip").css({left: x, top: y});
      });
      _Textobj.on("touchend", function () {
        jQuery("#" + id).css({"fill":wdsajsconfig[id].upColor});
        if (wdsajsconfig[id].target === "new_window") {
          window.open(wdsajsconfig[id].url);
        } else if (wdsajsconfig[id].target === "same_window") {
          window.parent.location.href = wdsajsconfig[id].url;
        } else if (wdsajsconfig[id].target === "modal") {
          jQuery(wdsajsconfig[id].url).modal("show");
        }
      });
    }
  }
}