//Sat Jan 18 2025 14:48:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
"ui";

(function (_0x57887f) {
  var _0x50c3c9 = {};
  function _0x3a7d52(_0xa29f19) {
    if (_0x50c3c9[_0xa29f19]) {
      return _0x50c3c9[_0xa29f19].exports;
    }
    _0x50c3c9[_0xa29f19] = {
      i: _0xa29f19,
      l: false,
      exports: {}
    };
    var _0x2e7f97 = _0x50c3c9[_0xa29f19];
    _0x57887f[_0xa29f19].call(_0x2e7f97.exports, _0x2e7f97, _0x2e7f97.exports, _0x3a7d52);
    _0x2e7f97.l = true;
    return _0x2e7f97.exports;
  }
  _0x3a7d52.m = _0x57887f;
  _0x3a7d52.c = _0x50c3c9;
  _0x3a7d52.d = function (_0xf84ad, _0x3eb80d, _0x31e06c) {
    !_0x3a7d52.o(_0xf84ad, _0x3eb80d) && Object.defineProperty(_0xf84ad, _0x3eb80d, {
      enumerable: true,
      get: _0x31e06c
    });
  };
  _0x3a7d52.r = function (_0x3d3922) {
    typeof Symbol !== "undefined" && Symbol.toStringTag && Object.defineProperty(_0x3d3922, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(_0x3d3922, "__esModule", {
      value: true
    });
  };
  _0x3a7d52.t = function (_0x4097a3, _0x12a4dc) {
    if (_0x12a4dc & 1) {
      _0x4097a3 = _0x3a7d52(_0x4097a3);
    }
    if (_0x12a4dc & 8) {
      return _0x4097a3;
    }
    if (_0x12a4dc & 4 && typeof _0x4097a3 === "object" && _0x4097a3 && _0x4097a3.__esModule) {
      return _0x4097a3;
    }
    var _0x5aef49 = Object.create(null);
    _0x3a7d52.r(_0x5aef49);
    Object.defineProperty(_0x5aef49, "default", {
      enumerable: true,
      value: _0x4097a3
    });
    if (_0x12a4dc & 2 && typeof _0x4097a3 != "string") {
      for (var _0x38d8d6 in _0x4097a3) _0x3a7d52.d(_0x5aef49, _0x38d8d6, function (_0x3d95a4) {
        return _0x4097a3[_0x3d95a4];
      }.bind(null, _0x38d8d6));
    }
    return _0x5aef49;
  };
  _0x3a7d52.n = function (_0x1600af) {
    var _0x2050db = _0x1600af && _0x1600af.__esModule ? function _0x5e1270() {
      return _0x1600af.default;
    } : function _0x3dd8fa() {
      return _0x1600af;
    };
    _0x3a7d52.d(_0x2050db, "a", _0x2050db);
    return _0x2050db;
  };
  _0x3a7d52.o = function (_0x3134be, _0x9d7cf4) {
    return Object.prototype.hasOwnProperty.call(_0x3134be, _0x9d7cf4);
  };
  _0x3a7d52.p = "";
  return _0x3a7d52(_0x3a7d52.s = "./work/blsy/main.js");
})({
  "./work/blsy/main.js": function (_0x4c8514, _0x33d829) {
    'ui';

    importClass(android.view.View);
    importClass(android.graphics.Color);
    importClass(android.content.res.ColorStateList);
    var _0x2377a1 = "首汽约车",
      _0x493f37 = "baili/",
      _0x2ae511 = "tool.dex",
      _0x5c1022 = "tool",
      _0x40e2b2 = "version.txt",
      _0x511f48 = "/sdcard/com.blsy.lx/",
      _0xbafa73 = _0x511f48 + _0x2ae511,
      _0x1d8f71 = _0x511f48 + _0x40e2b2,
      _0x38ccca = {
        keyPair: $crypto.generateKeyPair("RSA")
      };
    _0x38ccca.keyPair.publicKey.data = [48, 60, 48, 13, 6, 9, 42, -122, 72, -122, -9, 13, 1, 1, 1, 5, 0, 3, 43, 0, 48, 40, 2, 33, 0, -53, 110, 41, -3, -82, -75, 72, -68, -93, 64, 49, 87, -22, -75, -114, -11, -81, 23, 7, -82, -102, -48, 109, -113, 61, -79, 97, 54, 99, -41, 105, 43, 2, 3, 1, 0, 1];
    _0x38ccca.getKey = function (_0x122d54) {
      return $crypto.decrypt(_0x122d54, _0x38ccca.keyPair.publicKey, "RSA/ECB/PKCS1padding", {
        output: "string"
      });
    };
    var _0x232d51 = {
      url: "https://dav.jianguoyun.com/dav/" + _0x493f37,
      user: _0x38ccca.getKey([44, 92, 5, -64, 79, -22, 109, 108, 109, -39, -69, 24, 15, -98, -60, 110, 6, 53, -78, -114, 62, 62, 112, 0, 96, 104, -73, -122, 36, -86, 64, -18]),
      key: _0x38ccca.getKey([-114, 13, -6, 70, -118, 77, -25, 27, 43, -50, -103, 21, 99, -32, -56, 8, 71, -7, -58, -44, 35, 21, -96, -118, 48, -29, 116, 121, -107, 70, -73, 18])
    };
    ui.layout("\n    <vertical bg=\"#ffffff\" padding=\"16\" h=\"*\">\n        <text textStyle=\"bold\" textSize=\"20sp\" textColor=\"black\" gravity=\"center_horizontal\" margin=\"0 20\" text=\"".concat(_0x2377a1, "\"/>\n        <vertical layout_weight=\"10\" gravity=\"center\">\n            <progressbar id=\"loading\"/>\n            <text id=\"loadText\" margin=\"0 10\" gravity=\"center_horizontal\" text=\"拼命加载中...\"/>\n            <button id=\"load\" text=\"强制结束，重新打开\" bg=\"#00c957\" textColor=\"white\" foreground=\"?selectableItemBackground\" w=\"150\" margin=\"0 10\" visibility=\"gone\"/>\n        </vertical>\n    </vertical>\n"));
    ui.loading.setIndeterminateTintList(ColorStateList.valueOf(Color.parseColor("#00c957")));
    ui.load.on("click", function () {
      _0x5bc46a();
    });
    function _0x546aea(_0x266152) {
      return (_0x266152 + "").replace(/(^\s*)|(\s*$)/g, "");
    }
    function _0x4d6502(_0x203e53) {
      return _0x203e53 != null && _0x203e53 != undefined && _0x546aea(_0x203e53).length > 0;
    }
    function _0x1bf059(_0x3f4e5a) {
      return _0x4d6502(_0x3f4e5a) && (_0x3f4e5a.statusCode == 200 || _0x3f4e5a.statusCode == "200");
    }
    var _0x6913b6 = {
      headers: {
        Authorization: "Basic " + java.lang.String(android.util.Base64.encode(java.lang.String(_0x232d51.user + ":" + _0x232d51.key).getBytes(), 2)),
        "Content-Type": "text/plain;charset=UTF-8",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        "User-Agent": "okhttp/3.12.1"
      }
    };
    function _0x59f32d() {
      var _0x2bb3e8 = false;
      try {
        var _0x575c6c = http.get(_0x232d51.url + _0x2ae511, _0x6913b6);
        _0x1bf059(_0x575c6c) ? (files.writeBytes(_0xbafa73, _0x575c6c.body.bytes()), files.exists(_0xbafa73) && (toast("升级成功"), _0x2bb3e8 = true)) : toast("加载失败");
      } catch (_0x4a28f4) {
        toast("加载失败");
      }
      return _0x2bb3e8;
    }
    function _0x46323c() {
      _0x4bb208(true);
      threads.start(function () {
        try {
          !files.exists(_0x1d8f71) && (files.createWithDirs(_0x1d8f71), files.write(_0x1d8f71, "0.0.1"));
          var _0x573d7b = files.read(_0x1d8f71),
            _0x395399 = _0x573d7b;
          try {
            _0x395399 = ckv(_0x395399, 6);
          } catch (_0x59d2ea) {
            _0x395399 = _0x573d7b;
          }
          _0x573d7b != _0x395399 || !files.exists(_0xbafa73) ? _0x59f32d() ? (files.write(_0x1d8f71, _0x395399), _0x40982d()) : _0x4bb208(false) : _0x40982d();
        } catch (_0x73df4a) {
          toast("版本检测异常");
          _0x4bb208(false);
        }
      });
    }
    function _0x4bb208(_0x3f479e) {
      ui.run(function () {
        _0x3f479e ? (ui.loading.attr("visibility", "visible"), ui.loadText.attr("visibility", "visible"), ui.load.attr("visibility", "gone")) : (ui.loading.attr("visibility", "gone"), ui.loadText.attr("visibility", "gone"), ui.load.attr("visibility", "visible"));
      });
    }
    function _0x40982d() {
      try {
        ui.run(function () {
          console.clear();
          runtime.loadDex(_0xbafa73);
          new Packages[_0x5c1022]()();
        });
      } catch (_0x25fe4e) {
        console.log(_0x25fe4e);
        toast("版本加载失败");
        _0x4bb208();
      }
    }
    function _0x5bc46a() {
      threads.start(function () {
        var _0x4b30b5 = currentPackage();
        app.openAppSetting(_0x4b30b5);
        text(app.getAppName(_0x4b30b5)).waitFor();
        var _0x785b19 = textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne();
        _0x785b19.enabled() ? (textMatches(/(.*强.*|.*停.*|.*结.*|.*行.*)/).findOne().click(), textMatches(/(.*确.*|.*定.*)/).findOne().click(), log(app.getAppName(_0x4b30b5) + "应用已被关闭"), sleep(1000), back()) : (log(app.getAppName(_0x4b30b5) + "应用不能被正常关闭或不在后台运行"), back());
      });
    }
    _0x46323c();
  }
});