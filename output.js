//Fri Dec 13 2024 08:45:13 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("巴奴火锅"),
  axios = require("axios"),
  axiosRetry = require("axios-retry").default,
  {
    sendNotify
  } = require("./sendNotify"),
  SyncRequest = require("sync-request"),
  CryptoJS = require("crypto-js");
let notifyStr = "";
(async () => {
  axiosRetry(axios, {
    retries: 3
  });
  checkVersion("bnhg.js", "6d73a35037760443a29fe26e765345cb");
  const _0x1b6fa8 = process.env.bnhg_ck;
  if (!_0x1b6fa8) {
    logAndNotify("bnhg_ck未设置");
    return;
  }
  let _0xaf3fcc = _0x1b6fa8.split("\n");
  for (let _0x4ab676 = 0; _0x4ab676 < _0xaf3fcc.length; _0x4ab676++) {
    const _0x4c3994 = _0xaf3fcc[_0x4ab676].split("#")[0],
      _0x2e1fc4 = _0xaf3fcc[_0x4ab676].split("#")[1],
      _0x51d5e3 = _0xaf3fcc[_0x4ab676].split("#")[2];
    if (!_0x4c3994 || !_0x2e1fc4 || !_0x51d5e3) {
      logAndNotify("账号【" + (_0x4ab676 + 1) + "】 bnhg_ck格式错误");
      continue;
    }
    const _0x4fa7c2 = await sendGetRequest("https://cloud.banu.cn/api/member/statistic?member_id=" + _0x2e1fc4, _0x4c3994, _0x2e1fc4, _0x51d5e3);
    if (_0x4fa7c2.data.code !== 200) {
      logAndNotify("账号【" + (_0x4ab676 + 1) + "】 登录失败☹");
      continue;
    }
    logAndNotify("🧐" + _0x4fa7c2.data.data.mobile + "🧐");
    logAndNotify("账号【" + (_0x4ab676 + 1) + "】【" + _0x4fa7c2.data.data.mobile + "】 登录成功");
    const _0x32f497 = await sendGetRequest("https://cloud.banu.cn/api/sign-in/days?member_id=" + _0x2e1fc4, _0x4c3994, _0x51d5e3);
    logAndNotify("账号【" + (_0x4ab676 + 1) + "】【" + _0x4fa7c2.data.data.mobile + "】 连续签到" + _0x32f497.data.data.days + "天");
    if (_0x32f497.data.data.is_sign_in) {
      logAndNotify("账号【" + (_0x4ab676 + 1) + "】【" + _0x4fa7c2.data.data.mobile + "】 今日已签到");
    } else {
      logAndNotify("账号【" + (_0x4ab676 + 1) + "】【" + _0x4fa7c2.data.data.mobile + "】 今日未签到，去签到...");
      const _0x463ad6 = await sendPostRequest("https://cloud.banu.cn/api/sign-in", _0x4c3994, true, _0x2e1fc4, _0x51d5e3);
      _0x463ad6.data.code !== 200 ? logAndNotify("账号【" + (_0x4ab676 + 1) + "】【" + _0x4fa7c2.data.data.mobile + "】 签到失败【" + _0x463ad6.data.message + "】") : logAndNotify("账号【" + (_0x4ab676 + 1) + "】【" + _0x4fa7c2.data.data.mobile + "】 签到成功 获得【" + _0x463ad6.data.data.points + "】积分");
    }
    const _0x3eb15d = await sendGetRequest("https://cloud.banu.cn/api/member/statistic?member_id=" + _0x2e1fc4, _0x4c3994, _0x2e1fc4, _0x51d5e3);
    logAndNotify("账号【" + (_0x4ab676 + 1) + "】【" + _0x4fa7c2.data.data.mobile + "】 累计积分【" + _0x3eb15d.data.data.points + "】");
  }
})().catch(_0x54875a => {
  logAndNotify(_0x54875a);
}).finally(() => {
  pushLog("bnhg.js", notifyStr);
  sendNotify("巴奴火锅", notifyStr);
  $.done();
});
function logAndNotify(_0x2a6acf) {
  $.log(_0x2a6acf);
  notifyStr += _0x2a6acf;
  notifyStr += "\n";
}
function delay(_0x232d0b) {
  return new Promise(_0x588683 => setTimeout(_0x588683, _0x232d0b));
}
function header(_0x4868ef, _0x49d4a2) {
  const _0x4c9bdf = f();
  let _0x3ef9ff = {
    "Accept-Encoding": "gzip,compress,br,deflate",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_1_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.54(0x18003631) NetType/WIFI Language/zh_CN",
    Authorization: "" + _0x4868ef,
    uuid: _0x49d4a2,
    platform_version_code: "iOS 17.1.1",
    Referer: "https://servicewechat.com/wx71373698c47f9a9f/498/page-frame.html",
    version: "6.6.6",
    tenancy_id: "banu",
    app_key: "KlZ4LqOF",
    source: "KlZ4LqOF",
    platform_version_name: "iPhone 13<iPhone14,5>",
    t: _0x4c9bdf.t,
    n: _0x4c9bdf.n,
    platform_version_sdk: "3.7.0",
    sign: _0x4c9bdf.sign
  };
  return _0x3ef9ff;
}
async function sendPostRequest(_0x3311f2, _0x3d4f40, _0x22730d, _0x3559ad, _0x52ca4b) {
  await delay(2000);
  try {
    let _0x4f2d11 = header(_0x3d4f40, _0x52ca4b);
    const _0x12d23c = enc_data(_0x3559ad);
    if (_0x22730d) {
      const _0x224f17 = {
        app_key: "KlZ4LqOF",
        app_secret: "HoBJTYXdwn",
        enc_data: _0x12d23c.enc_data
      };
      _0x4f2d11 = {
        ..._0x4f2d11,
        code: md5(md5(getCode(_0x224f17))).split("").reverse().join("")
      };
    }
    const _0x46af36 = axios.create({
      headers: _0x4f2d11,
      timeout: 60000
    });
    return _0x46af36.post(_0x3311f2, _0x12d23c);
  } catch (_0x22cacb) {
    axios.isAxiosError(_0x22cacb) ? _0x22cacb.code === "ECONNABORTED" && _0x22cacb.message.includes("timeout") ? console.error("请求超时：", _0x22cacb.message) : console.error("其他错误：", _0x22cacb.message) : console.error("未知错误：", _0x22cacb);
    throw _0x22cacb;
  }
}
async function sendGetRequest(_0x59abe0, _0x19ff61, _0x40175a) {
  await delay(2000);
  try {
    const _0x93f249 = axios.create({
      headers: header(_0x19ff61, _0x40175a),
      timeout: 60000
    });
    return _0x93f249.get(_0x59abe0);
  } catch (_0x471d62) {
    axios.isAxiosError(_0x471d62) ? _0x471d62.code === "ECONNABORTED" && _0x471d62.message.includes("timeout") ? console.error("请求超时：", _0x471d62.message) : console.error("其他错误：", _0x471d62.message) : console.error("未知错误：", _0x471d62);
    throw _0x471d62;
  }
}
function getCode(_0x192ac4) {
  if (typeof _0x192ac4 !== "object" || _0x192ac4 === null) {
    throw new Error("Input must be an object");
  }
  return Object.keys(_0x192ac4).sort().map(_0x459fe3 => {
    if (_0x192ac4[_0x459fe3] !== undefined && _0x192ac4[_0x459fe3] !== null) {
      return encodeURIComponent(_0x459fe3) + "=" + encodeURIComponent(_0x192ac4[_0x459fe3]);
    }
    return "";
  }).filter(Boolean).join("&");
}
function n() {
  var _0x47ddca = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16,
    _0x54526d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36,
    _0x5b493d = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
    _0xf2f45 = [],
    _0x6a909d = 0;
  if (_0x54526d = _0x54526d || _0x5b493d.length, _0x47ddca) {
    for (_0x6a909d = 0; _0x6a909d < _0x47ddca; _0x6a909d++) {
      _0xf2f45[_0x6a909d] = _0x5b493d[0 | Math.random() * _0x54526d];
    }
  } else {
    var _0x1073c2 = void 0;
    for (_0xf2f45[8] = _0xf2f45[13] = _0xf2f45[18] = _0xf2f45[23] = "-", _0xf2f45[14] = "4", _0x6a909d = 0; _0x6a909d < 36; _0x6a909d++) {
      _0xf2f45[_0x6a909d] || (_0x1073c2 = 0 | 16 * Math.random(), _0xf2f45[_0x6a909d] = _0x5b493d[19 === _0x6a909d ? 3 & _0x1073c2 | 8 : _0x1073c2]);
    }
  }
  return _0xf2f45.join("");
}
function f() {
  const _0x3d4e27 = {
      app_key: "KlZ4LqOF",
      app_secret: "HoBJTYXdwn"
    },
    _0x177a56 = Object.assign || function (_0x13175e) {
      for (let _0x2c693f = 1; _0x2c693f < arguments.length; _0x2c693f++) {
        const _0x50632c = arguments[_0x2c693f];
        for (let _0x2fc6a1 in _0x50632c) {
          _0x50632c.hasOwnProperty(_0x2fc6a1) && (_0x13175e[_0x2fc6a1] = _0x50632c[_0x2fc6a1]);
        }
      }
      return _0x13175e;
    },
    _0x357c09 = _0x177a56({
      t: Math.floor(Date.now() / 1000),
      n: n()
    }, _0x3d4e27),
    _0x15ae72 = Object.keys(_0x357c09).reduce((_0x389bf3, _0x48de6b) => {
      if (_0x48de6b !== "app_secret") {
        _0x389bf3[_0x48de6b] = _0x357c09[_0x48de6b];
      }
      return _0x389bf3;
    }, {}),
    _0x141220 = md5(md5(Object.values(_0x357c09).join(""))).split("").reverse().join("");
  return _0x177a56(_0x15ae72, {
    sign: _0x141220
  });
}
function md5(_0x33d158) {
  return CryptoJS.MD5(_0x33d158).toString(CryptoJS.enc.Hex);
}
function enc_data(_0x5881b6) {
  re = function (_0xae578f) {
    try {
      var _0x4ac491 = neg(),
        _0x1efb6b = reg(_0xae578f, CryptoJS.enc.Utf8.parse("bfc5e947cd84c7ced1ee48d28fb3e90f"), CryptoJS.enc.Utf8.parse(_0x4ac491));
      return {
        enc_data: CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify({
          iv: _0x4ac491,
          encrypted_data: _0x1efb6b
        })))
      };
    } catch (_0x2b8710) {
      throw new Error("Invalid JSON");
    }
  }(JSON.stringify({
    member_id: _0x5881b6
  }));
  return be({}, re);
}
function reg(_0x322c60, _0x27b837, _0x455ee0) {
  return CryptoJS.AES.encrypt(_0x322c60, _0x27b837, {
    iv: _0x455ee0,
    mode: CryptoJS.mode.CBC
  }).toString();
}
function neg() {
  return CryptoJS.lib.WordArray.random(16).toString();
}
function be(_0x53aff6) {
  for (var _0x1e88b1 = 1; _0x1e88b1 < arguments.length; _0x1e88b1++) {
    var _0x29046d = arguments[_0x1e88b1];
    for (var _0x225ef9 in _0x29046d) Object.prototype.hasOwnProperty.call(_0x29046d, _0x225ef9) && (_0x53aff6[_0x225ef9] = _0x29046d[_0x225ef9]);
  }
  return _0x53aff6;
}
function Env(_0x4bfea1, _0x5e9d02) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x2058e9 {
    constructor(_0x42bdb6) {
      this.env = _0x42bdb6;
    }
    send(_0x3256b1, _0x57dcef = "GET") {
      _0x3256b1 = "string" == typeof _0x3256b1 ? {
        url: _0x3256b1
      } : _0x3256b1;
      let _0x10d3bd = this.get;
      "POST" === _0x57dcef && (_0x10d3bd = this.post);
      return new Promise((_0x370d5f, _0x327629) => {
        _0x10d3bd.call(this, _0x3256b1, (_0x321179, _0x162016, _0x42be6c) => {
          _0x321179 ? _0x327629(_0x321179) : _0x370d5f(_0x162016);
        });
      });
    }
    get(_0x50e47b) {
      return this.send.call(this.env, _0x50e47b);
    }
    post(_0x3d93af) {
      return this.send.call(this.env, _0x3d93af, "POST");
    }
  }
  return new class {
    constructor(_0x553835, _0x524297) {
      this.name = _0x553835;
      this.http = new _0x2058e9(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x524297);
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
    toObj(_0x3b1b3e, _0x42ef2b = null) {
      try {
        return JSON.parse(_0x3b1b3e);
      } catch {
        return _0x42ef2b;
      }
    }
    toStr(_0x12b7d4, _0x1a5d78 = null) {
      try {
        return JSON.stringify(_0x12b7d4);
      } catch {
        return _0x1a5d78;
      }
    }
    getjson(_0x35b971, _0x134df5) {
      let _0x4f0498 = _0x134df5;
      const _0x26055e = this.getdata(_0x35b971);
      if (_0x26055e) {
        try {
          _0x4f0498 = JSON.parse(this.getdata(_0x35b971));
        } catch {}
      }
      return _0x4f0498;
    }
    setjson(_0x315a0a, _0x1dc1c7) {
      try {
        return this.setdata(JSON.stringify(_0x315a0a), _0x1dc1c7);
      } catch {
        return !1;
      }
    }
    getScript(_0x41f847) {
      return new Promise(_0x26cebf => {
        this.get({
          url: _0x41f847
        }, (_0x326271, _0x4dec16, _0x1dbdd9) => _0x26cebf(_0x1dbdd9));
      });
    }
    runScript(_0x46c84d, _0x49ed18) {
      return new Promise(_0x2b80c8 => {
        let _0x2c89f7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x2c89f7 = _0x2c89f7 ? _0x2c89f7.replace(/\n/g, "").trim() : _0x2c89f7;
        let _0x76ce98 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x76ce98 = _0x76ce98 ? 1 * _0x76ce98 : 20;
        _0x76ce98 = _0x49ed18 && _0x49ed18.timeout ? _0x49ed18.timeout : _0x76ce98;
        const [_0x85e978, _0x1711ac] = _0x2c89f7.split("@"),
          _0x319764 = {
            url: "http://" + _0x1711ac + "/v1/scripting/evaluate",
            body: {
              script_text: _0x46c84d,
              mock_type: "cron",
              timeout: _0x76ce98
            },
            headers: {
              "X-Key": _0x85e978,
              Accept: "*/*"
            }
          };
        this.post(_0x319764, (_0x1e6b54, _0x531d0d, _0x573ba2) => _0x2b80c8(_0x573ba2));
      }).catch(_0x3b8a32 => this.logErr(_0x3b8a32));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4352c9 = this.path.resolve(this.dataFile),
          _0x1e85e0 = this.path.resolve(process.cwd(), this.dataFile),
          _0x1b15a6 = this.fs.existsSync(_0x4352c9),
          _0x33a1e0 = !_0x1b15a6 && this.fs.existsSync(_0x1e85e0);
        if (!_0x1b15a6 && !_0x33a1e0) {
          return {};
        }
        {
          const _0x269d09 = _0x1b15a6 ? _0x4352c9 : _0x1e85e0;
          try {
            return JSON.parse(this.fs.readFileSync(_0x269d09));
          } catch (_0xe187aa) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x406362 = this.path.resolve(this.dataFile),
          _0x54d17a = this.path.resolve(process.cwd(), this.dataFile),
          _0x2e34b3 = this.fs.existsSync(_0x406362),
          _0x2ad5b6 = !_0x2e34b3 && this.fs.existsSync(_0x54d17a),
          _0x41f91 = JSON.stringify(this.data);
        _0x2e34b3 ? this.fs.writeFileSync(_0x406362, _0x41f91) : _0x2ad5b6 ? this.fs.writeFileSync(_0x54d17a, _0x41f91) : this.fs.writeFileSync(_0x406362, _0x41f91);
      }
    }
    lodash_get(_0x28e174, _0x5a40ea, _0x515f5e) {
      const _0x10c92a = _0x5a40ea.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x4267d4 = _0x28e174;
      for (const _0x540177 of _0x10c92a) if (_0x4267d4 = Object(_0x4267d4)[_0x540177], void 0 === _0x4267d4) {
        return _0x515f5e;
      }
      return _0x4267d4;
    }
    lodash_set(_0x4cec05, _0x176994, _0x58085c) {
      return Object(_0x4cec05) !== _0x4cec05 ? _0x4cec05 : (Array.isArray(_0x176994) || (_0x176994 = _0x176994.toString().match(/[^.[\]]+/g) || []), _0x176994.slice(0, -1).reduce((_0x2e276b, _0x364d0, _0x2bd6de) => Object(_0x2e276b[_0x364d0]) === _0x2e276b[_0x364d0] ? _0x2e276b[_0x364d0] : _0x2e276b[_0x364d0] = Math.abs(_0x176994[_0x2bd6de + 1]) >> 0 == +_0x176994[_0x2bd6de + 1] ? [] : {}, _0x4cec05)[_0x176994[_0x176994.length - 1]] = _0x58085c, _0x4cec05);
    }
    getdata(_0xf97477) {
      let _0x519efc = this.getval(_0xf97477);
      if (/^@/.test(_0xf97477)) {
        const [, _0x41f818, _0x158b5d] = /^@(.*?)\.(.*?)$/.exec(_0xf97477),
          _0x247bb2 = _0x41f818 ? this.getval(_0x41f818) : "";
        if (_0x247bb2) {
          try {
            const _0x19a990 = JSON.parse(_0x247bb2);
            _0x519efc = _0x19a990 ? this.lodash_get(_0x19a990, _0x158b5d, "") : _0x519efc;
          } catch (_0x3a8488) {
            _0x519efc = "";
          }
        }
      }
      return _0x519efc;
    }
    setdata(_0x5b18b0, _0x260c6f) {
      let _0x2efb83 = !1;
      if (/^@/.test(_0x260c6f)) {
        const [, _0x106178, _0x488833] = /^@(.*?)\.(.*?)$/.exec(_0x260c6f),
          _0x587eca = this.getval(_0x106178),
          _0x58840e = _0x106178 ? "null" === _0x587eca ? null : _0x587eca || "{}" : "{}";
        try {
          const _0x49531d = JSON.parse(_0x58840e);
          this.lodash_set(_0x49531d, _0x488833, _0x5b18b0);
          _0x2efb83 = this.setval(JSON.stringify(_0x49531d), _0x106178);
        } catch (_0x5538dd) {
          const _0x3374bc = {};
          this.lodash_set(_0x3374bc, _0x488833, _0x5b18b0);
          _0x2efb83 = this.setval(JSON.stringify(_0x3374bc), _0x106178);
        }
      } else {
        _0x2efb83 = this.setval(_0x5b18b0, _0x260c6f);
      }
      return _0x2efb83;
    }
    getval(_0x5dd5ce) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x5dd5ce) : this.isQuanX() ? $prefs.valueForKey(_0x5dd5ce) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5dd5ce]) : this.data && this.data[_0x5dd5ce] || null;
    }
    setval(_0x486eb8, _0x1696f2) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x486eb8, _0x1696f2) : this.isQuanX() ? $prefs.setValueForKey(_0x486eb8, _0x1696f2) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x1696f2] = _0x486eb8, this.writedata(), !0) : this.data && this.data[_0x1696f2] || null;
    }
    initGotEnv(_0xe78f50) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0xe78f50 && (_0xe78f50.headers = _0xe78f50.headers ? _0xe78f50.headers : {}, void 0 === _0xe78f50.headers.Cookie && void 0 === _0xe78f50.cookieJar && (_0xe78f50.cookieJar = this.ckjar));
    }
    get(_0x3a3fcd, _0xafdf0c = () => {}) {
      _0x3a3fcd.headers && (delete _0x3a3fcd.headers["Content-Type"], delete _0x3a3fcd.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x3a3fcd.headers = _0x3a3fcd.headers || {}, Object.assign(_0x3a3fcd.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x3a3fcd, (_0x58e8a7, _0xdc0582, _0x23a8c8) => {
        !_0x58e8a7 && _0xdc0582 && (_0xdc0582.body = _0x23a8c8, _0xdc0582.statusCode = _0xdc0582.status);
        _0xafdf0c(_0x58e8a7, _0xdc0582, _0x23a8c8);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x3a3fcd.opts = _0x3a3fcd.opts || {}, Object.assign(_0x3a3fcd.opts, {
        hints: !1
      })), $task.fetch(_0x3a3fcd).then(_0x52b6be => {
        const {
          statusCode: _0xa0eba4,
          statusCode: _0x19dd49,
          headers: _0xb108f9,
          body: _0x141313
        } = _0x52b6be;
        _0xafdf0c(null, {
          status: _0xa0eba4,
          statusCode: _0x19dd49,
          headers: _0xb108f9,
          body: _0x141313
        }, _0x141313);
      }, _0x228892 => _0xafdf0c(_0x228892))) : this.isNode() && (this.initGotEnv(_0x3a3fcd), this.got(_0x3a3fcd).on("redirect", (_0x1aed10, _0x54cbca) => {
        try {
          if (_0x1aed10.headers["set-cookie"]) {
            const _0x26c894 = _0x1aed10.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x26c894 && this.ckjar.setCookieSync(_0x26c894, null);
            _0x54cbca.cookieJar = this.ckjar;
          }
        } catch (_0x5cb83e) {
          this.logErr(_0x5cb83e);
        }
      }).then(_0x28e263 => {
        const {
          statusCode: _0x43c3e6,
          statusCode: _0x933c,
          headers: _0x140055,
          body: _0x551b0b
        } = _0x28e263;
        _0xafdf0c(null, {
          status: _0x43c3e6,
          statusCode: _0x933c,
          headers: _0x140055,
          body: _0x551b0b
        }, _0x551b0b);
      }, _0x1f703c => {
        const {
          message: _0x1614b2,
          response: _0x235723
        } = _0x1f703c;
        _0xafdf0c(_0x1614b2, _0x235723, _0x235723 && _0x235723.body);
      }));
    }
    post(_0x213f65, _0x334236 = () => {}) {
      if (_0x213f65.body && _0x213f65.headers && !_0x213f65.headers["Content-Type"] && (_0x213f65.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x213f65.headers && delete _0x213f65.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x213f65.headers = _0x213f65.headers || {}, Object.assign(_0x213f65.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x213f65, (_0x21a721, _0x14221d, _0x551080) => {
          !_0x21a721 && _0x14221d && (_0x14221d.body = _0x551080, _0x14221d.statusCode = _0x14221d.status);
          _0x334236(_0x21a721, _0x14221d, _0x551080);
        });
      } else {
        if (this.isQuanX()) {
          _0x213f65.method = "POST";
          this.isNeedRewrite && (_0x213f65.opts = _0x213f65.opts || {}, Object.assign(_0x213f65.opts, {
            hints: !1
          }));
          $task.fetch(_0x213f65).then(_0x1e0a90 => {
            const {
              statusCode: _0x37f148,
              statusCode: _0x3f3057,
              headers: _0x48f215,
              body: _0x11343b
            } = _0x1e0a90;
            _0x334236(null, {
              status: _0x37f148,
              statusCode: _0x3f3057,
              headers: _0x48f215,
              body: _0x11343b
            }, _0x11343b);
          }, _0x5109b8 => _0x334236(_0x5109b8));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x213f65);
            const {
              url: _0x299c9c,
              ..._0x3f837b
            } = _0x213f65;
            this.got.post(_0x299c9c, _0x3f837b).then(_0x45d402 => {
              const {
                statusCode: _0x58b7ed,
                statusCode: _0x353923,
                headers: _0x1dbf34,
                body: _0x52ca49
              } = _0x45d402;
              _0x334236(null, {
                status: _0x58b7ed,
                statusCode: _0x353923,
                headers: _0x1dbf34,
                body: _0x52ca49
              }, _0x52ca49);
            }, _0x49cef8 => {
              const {
                message: _0x5d391d,
                response: _0x2085ea
              } = _0x49cef8;
              _0x334236(_0x5d391d, _0x2085ea, _0x2085ea && _0x2085ea.body);
            });
          }
        }
      }
    }
    time(_0x4799a6, _0x2b201e = null) {
      const _0x4ff101 = _0x2b201e ? new Date(_0x2b201e) : new Date();
      let _0x16745a = {
        "M+": _0x4ff101.getMonth() + 1,
        "d+": _0x4ff101.getDate(),
        "H+": _0x4ff101.getHours(),
        "m+": _0x4ff101.getMinutes(),
        "s+": _0x4ff101.getSeconds(),
        "q+": Math.floor((_0x4ff101.getMonth() + 3) / 3),
        S: _0x4ff101.getMilliseconds()
      };
      /(y+)/.test(_0x4799a6) && (_0x4799a6 = _0x4799a6.replace(RegExp.$1, (_0x4ff101.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x604bfb in _0x16745a) new RegExp("(" + _0x604bfb + ")").test(_0x4799a6) && (_0x4799a6 = _0x4799a6.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x16745a[_0x604bfb] : ("00" + _0x16745a[_0x604bfb]).substr(("" + _0x16745a[_0x604bfb]).length)));
      return _0x4799a6;
    }
    msg(_0x1d2ccb = _0x4bfea1, _0x7a017f = "", _0xd272b3 = "", _0x439937) {
      const _0x2460e6 = _0x2b2553 => {
        if (!_0x2b2553) {
          return _0x2b2553;
        }
        if ("string" == typeof _0x2b2553) {
          return this.isLoon() ? _0x2b2553 : this.isQuanX() ? {
            "open-url": _0x2b2553
          } : this.isSurge() ? {
            url: _0x2b2553
          } : void 0;
        }
        if ("object" == typeof _0x2b2553) {
          if (this.isLoon()) {
            let _0x297710 = _0x2b2553.openUrl || _0x2b2553.url || _0x2b2553["open-url"],
              _0x292a40 = _0x2b2553.mediaUrl || _0x2b2553["media-url"];
            return {
              openUrl: _0x297710,
              mediaUrl: _0x292a40
            };
          }
          if (this.isQuanX()) {
            let _0x217bc2 = _0x2b2553["open-url"] || _0x2b2553.url || _0x2b2553.openUrl,
              _0x2b7403 = _0x2b2553["media-url"] || _0x2b2553.mediaUrl;
            return {
              "open-url": _0x217bc2,
              "media-url": _0x2b7403
            };
          }
          if (this.isSurge()) {
            let _0x1da92a = _0x2b2553.url || _0x2b2553.openUrl || _0x2b2553["open-url"];
            return {
              url: _0x1da92a
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x1d2ccb, _0x7a017f, _0xd272b3, _0x2460e6(_0x439937)) : this.isQuanX() && $notify(_0x1d2ccb, _0x7a017f, _0xd272b3, _0x2460e6(_0x439937))), !this.isMuteLog) {
        let _0x3ad610 = ["", "==============📣系统通知📣=============="];
        _0x3ad610.push(_0x1d2ccb);
        _0x7a017f && _0x3ad610.push(_0x7a017f);
        _0xd272b3 && _0x3ad610.push(_0xd272b3);
        console.log(_0x3ad610.join("\n"));
        this.logs = this.logs.concat(_0x3ad610);
      }
    }
    log(..._0x48a1fe) {
      _0x48a1fe.length > 0 && (this.logs = [...this.logs, ..._0x48a1fe]);
      console.log(_0x48a1fe.join(this.logSeparator));
    }
    logErr(_0x55d8e6, _0x30b25c) {
      const _0x1857c7 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x1857c7 ? this.log("", "❗️" + this.name + ", 错误!", _0x55d8e6.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x55d8e6);
    }
    wait(_0x2e7e1e) {
      return new Promise(_0x51f2d5 => setTimeout(_0x51f2d5, _0x2e7e1e));
    }
    done(_0x1503bc = {}) {
      const _0x4a79d0 = new Date().getTime(),
        _0x37e17b = (_0x4a79d0 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x37e17b + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x1503bc);
    }
  }(_0x4bfea1, _0x5e9d02);
}
function checkVersion(_0x2cae06, _0x2bb790) {
  try {
    logAndNotify("文件md5：" + _0x2bb790);
    const _0x268392 = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x2cae06 + "&fileMd5=" + _0x2bb790),
      _0x2c1f92 = JSON.parse(_0x268392.getBody("utf8"));
    if (_0x2c1f92.code === 301) {
      process.exit(0);
    } else {
      logAndNotify(_0x2c1f92.data);
    }
  } catch (_0x39b542) {
    logAndNotify("版本检查失败:", _0x39b542);
  }
}
function pushLog(_0x4b6f5b, _0x3cdf27) {
  try {
    const _0x4b04a4 = "fileName=" + encodeURIComponent(_0x4b6f5b) + "&log=" + encodeURIComponent(_0x3cdf27);
    SyncRequest("POST", "https://checktoke.filegear-sg.me/api/update/pushLog", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: _0x4b04a4
    });
  } catch (_0x12612c) {}
}