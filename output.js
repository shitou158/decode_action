//Sat Nov 16 2024 02:56:48 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var page = 1,
  datalist,
  loading;
$(document).ready(function () {
  var _0x54393f = getParam("text");
  if ($("#imgList")[0] && getParam("oid")) {
    getImage(getParam("oid"));
  } else if (_0x54393f) {
    $("#text").val(decodeURIComponent(_0x54393f));
    $("#Form").submit();
  }
});
function getImage(_0x483a67) {
  $.ajax({
    "url": "https://oss.xaheguang.com/api.php?act=GetImage&oid=" + _0x483a67,
    "dataType": "json",
    "type": "GET",
    "beforeSend": function (_0x2189b8) {
      loading = layer.load(2, {
        "shade": [0.1, "#fff"]
      });
    },
    "success": function (_0x642ed2) {
      layer.close(loading);
      if (_0x642ed2.code == -1) {
        $(".d-grid").remove();
        return layer.msg(_0x642ed2.msg, {
          "icon": 5
        });
      } else {
        $("#imgList").html("<div class=\"alert text-center alert-light text-danger mt-2\" role=\"alert\">当前口令已成功助力" + _0x642ed2.list.length + "次,图片可左右滑动查看</div>");
        if (_0x642ed2.list.length > 12) $(".d-grid").show();
        datalist = _0x642ed2.list;
        loadList(datalist, page);
      }
    }
  });
}
$(".d-grid").on("click", function () {
  page++;
  loadList(datalist, page);
});
function loadList(_0x30c17d, _0x476f6e) {
  $.each(pagination(_0x476f6e, 12, _0x30c17d), function (_0x43e39a, _0x904700) {
    var _0x5ddf6a = "<div class=\"col-6 col-lg-2 col-md-3 col-sm-4 bg-white\" style=\"padding:1px\">";
    _0x5ddf6a += "<div class=\"swiper\" id=\"swiper" + _0x476f6e + _0x43e39a + "\">";
    _0x5ddf6a += "<div class=\"swiper-wrapper\">";
    _0x5ddf6a += "<div class=\"swiper-slide\"><img class=\"img-fluid\" src=\"" + _0x904700.img + "\"></div>";
    _0x5ddf6a += "<div class=\"swiper-slide\"><img class=\"img-fluid\" src=\"" + _0x904700.img2 + "\"></div>";
    _0x5ddf6a += "</div><div class=\"swiper-pagination\"></div></div>";
    _0x5ddf6a += "<div class=\"flexbox align-items-center card-bodys\">";
    _0x5ddf6a += "<img class=\"avatar avatar-lg avatar-bordered\" src=\"" + _0x904700.avatar + "\">";
    _0x5ddf6a += "<div class=\"text-right\">";
    _0x5ddf6a += "<h6 class=\"mb-0\"><font style=\"vertical-align: inherit;\">" + _0x904700.nick + "</font></h6>";
    _0x5ddf6a += "<small><font style=\"vertical-align: inherit;\">" + _0x904700.time + "</font></small>";
    _0x5ddf6a += "</div></div></div>";
    $("#imgList").append(_0x5ddf6a);
    new Swiper("#swiper" + _0x476f6e + _0x43e39a, {
      "autoplay": {
        "delay": 2500
      },
      "pagination": {
        "el": ".swiper-pagination"
      }
    });
  });
  var _0x379f44 = _0x476f6e * 12;
  if (_0x379f44 >= _0x30c17d.length) $(".d-grid").remove();
}
function pagination(_0x288998, _0x1e70b3, _0x351ef1) {
  var _0x4c1485 = (_0x288998 - 1) * _0x1e70b3;
  return _0x4c1485 + _0x1e70b3 >= _0x351ef1.length ? _0x351ef1.slice(_0x4c1485, _0x351ef1.length) : _0x351ef1.slice(_0x4c1485, _0x4c1485 + _0x1e70b3);
}
function getParam(_0x451a6a) {
  var _0x1a58ce = window.location.search.substring(1);
  var _0x5c70dd = _0x1a58ce.split("&");
  for (var _0x397391 = 0; _0x397391 < _0x5c70dd.length; _0x397391++) {
    var _0x37e073 = _0x5c70dd[_0x397391].split("=");
    if (_0x37e073[0] == _0x451a6a) {
      return _0x37e073[1];
    }
  }
  return false;
}
$("#Form").submit(function () {
  $.ajax({
    "url": "https://oss.xaheguang.com/api.php",
    "dataType": "json",
    "type": "POST",
    "data": $("#Form").serializeArray(),
    "beforeSend": function (_0x38919e) {
      loading = layer.load(2, {
        "shade": [0.1, "#fff"]
      });
    },
    "success": function (_0x1182b6) {
      layer.close(loading);
      if (_0x1182b6.code == -1) {
        $(".roll").hide();
        return layer.msg(_0x1182b6.msg, {
          "icon": 5
        });
      } else {
        $(".roll").show();
        $(".alert").hide();
        $("#orderList").html("");
        $.each(_0x1182b6.list, function (_0x38b648, _0x9844c8) {
          var _0x145d86 = "";
          _0x145d86 += "<tr>";
          _0x145d86 += "<td class=\"text-center\"><input class=\"form-control\" value=\"" + _0x9844c8.word + "\"></td>";
          _0x145d86 += "<td class=\"text-center\">" + _0x9844c8.state + "</td>";
          _0x145d86 += "<td class=\"text-center\">" + _0x9844c8.nums + "</td>";
          _0x145d86 += "<td class=\"text-center\">" + _0x9844c8.count + "</td>";
          _0x145d86 += "<td class=\"text-center\">" + _0x9844c8.time + "</td>";
          _0x145d86 += "<td class=\"text-center\"><a href=\"image.php?type=chadan&oid=" + _0x9844c8.oid + "\" class=\"btn btn-outline-primary\" target=\"_blank\">查看截图</a></td>";
          $("#orderList").append(_0x145d86);
        });
      }
    }
  });
});
$("#qrcode").click(function () {
  $("#pddewm").click();
});
function upSkimg() {
  var _0xfae3c6 = $("#pddewm").prop("files");
  qrcode.decode(getObjectURL(_0xfae3c6[0]));
  qrcode.callback = function (_0x4146fb) {
    if (_0x4146fb == "error decoding QR Code") {
      var _0x4dea79 = new FormData();
      _0x4dea79.append("Filedata", _0xfae3c6[0]);
      ajaxImage(_0x4dea79);
    } else {
      $("#pddewm").val("");
      $("#text").val(_0x4146fb);
      $("#Form").submit();
    }
  };
}
function ajaxImage(_0x3650a4) {
  $.ajax({
    "url": "https://upload.api.cli.im/upload.php?kid=cliim",
    "type": "post",
    "Accept": "*/*",
    "contentType": false,
    "dataType": "json",
    "data": _0x3650a4,
    "processData": false,
    "beforeSend": function (_0x1fb092) {
      loading = layer.load(2, {
        "shade": [0.1, "#fff"]
      });
    },
    "success": function (_0x26c76b) {
      layer.close(loading);
      $("#pddewm").val("");
      if (_0x26c76b.status == "1") {
        qrdecode(_0x26c76b.data.path);
      } else {
        layer.msg(_0x26c76b.info, {
          "icon": 5
        });
      }
    },
    "error": function () {
      layer.close(loading);
      layer.msg("二维码识别失败,请使用微信扫一扫识别后复制链接", {
        "icon": 5
      });
    }
  });
}
function qrdecode(_0x3bfb70) {
  $.ajax({
    "type": "post",
    "url": "https://oss.xaheguang.com/api.php",
    "data": {
      "act": "QRcode",
      "url": _0x3bfb70,
      "key": hex_sha1("QRcode:" + _0x3bfb70)
    },
    "async": true,
    "dataType": "json",
    "beforeSend": function (_0x419acc) {
      loading = layer.load(2, {
        "shade": [0.1, "#fff"]
      });
    },
    "success": function (_0x10c68d) {
      layer.close(loading);
      if (_0x10c68d.status == 1) {
        var _0x11cd90 = _0x10c68d.info.data[0];
        $("#text").val(_0x11cd90);
        $("#Form").submit();
      } else {
        layer.msg(_0x10c68d.info, {
          "icon": 5
        });
      }
    },
    "error": function () {
      layer.close(loading);
      layer.msg("二维码识别失败,请使用微信扫一扫识别后复制链接", {
        "icon": 5
      });
    }
  });
}
var getObjectURL = function (_0x33abb0) {
  var _0x39df88 = null;
  if (window.createObjectURL != undefined) {
    _0x39df88 = window.createObjectURL(_0x33abb0);
  } else if (window.URL != undefined) {
    _0x39df88 = window.URL.createObjectURL(_0x33abb0);
  } else if (window.webkitURL != undefined) {
    _0x39df88 = window.webkitURL.createObjectURL(_0x33abb0);
  }
  return _0x39df88;
};
_0xoda = "jsjiami.com.v6";