//Mon Mar 31 2025 08:08:10 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x286715 = new _0x534e9e("有赞店铺签到");
let _0x5a2980 = "youzan_cookie",
  _0x4812bf = ["\n", "&"],
  _0x5b0b3e = (_0x286715.isNode() ? process.env[_0x5a2980] : _0x286715.getdata(_0x5a2980)) || "",
  _0x1acb55 = process.env.youzan_shops || "https://shop18260359.youzan.com/wscump/checkin/result?kdt_id=116248222",
  _0x5b27af = [],
  _0xf8958c = 0,
  _0x7913ce = [],
  _0x5bb447 = 0,
  _0x17a874 = "application/json",
  _0xcdca6f = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41";
class _0x13d19a {
  constructor() {
    this.valid = false;
    this.points = 0;
    this.shopId = "";
    this.signInId = "";
    this.activeId = "";
    this.actionId = "";
  }
  async ["taskApi"](_0x32311a, _0x44b089, _0x1008e8, _0x153fc8) {
    let _0xc10740 = null;
    try {
      let _0x41504c = _0x7913ce[_0x5bb447],
        _0x1ae705 = _0x1008e8.replace("//", "/").split("/")[1],
        _0x3f01f3 = {
          "url": _0x1008e8,
          "headers": {
            "Host": _0x1ae705,
            "Connection": "keep-alive",
            "User-Agent": _0xcdca6f,
            "Referer": encodeURIComponent(_0x41504c),
            "Content-Type": _0x17a874,
            "accept": "*/*",
            "accept-language": "zh-CN,zh;q=0.9",
            "origin": "https://" + _0x1ae705,
            "x-yz-action-id": this.actionId,
            "cookie": _0x5b27af[_0xf8958c]
          },
          "timeout": 60000
        };
      if (_0x153fc8) {
        _0x3f01f3.body = _0x153fc8;
      }
      await _0x59b2d9(_0x44b089, _0x3f01f3).then(async _0x55903e => {
        if (_0x55903e.resp?.["statusCode"] == 200) {
          if (_0x55903e.resp?.["body"]) try {
            _0xc10740 = JSON.parse(_0x55903e.resp.body);
          } catch (_0x37e599) {
            _0xc10740 = _0x55903e.resp.body;
          } else console.log("账号[" + _0xf8958c + "]调用" + _0x44b089 + "[" + _0x32311a + "]出错，返回为空");
        } else console.log("账号[" + _0xf8958c + "]调用" + _0x44b089 + "[" + _0x32311a + "]出错，返回状态码[" + (_0x55903e.resp?.["statusCode"] || "") + "]"), _0x286715.logAndNotify("账号[" + _0xf8958c + "]调用" + _0x44b089 + "[" + _0x32311a + "]出错：" + JSON.stringify(_0x55903e.resp.body));
      });
    } catch (_0x2639e9) {
      console.log(_0x2639e9);
    } finally {
      return Promise.resolve(_0xc10740);
    }
  }
  async ["GetPage"]() {
    try {
      let _0x8ecd00 = "GetPage",
        _0x48ad6c = "get",
        _0x2d294e = _0x7913ce[_0x5bb447],
        _0x79fbe6 = "";
      return await this.taskApi(_0x8ecd00, _0x48ad6c, _0x2d294e, _0x79fbe6).then(async _0x312180 => {
        if (_0x312180?.["includes"](":{\"actionId")) {
          const _0x86338e = this.getSignIdAndActionId(_0x312180);
          return _0x286715.logAndNotify("账号[" + _0xf8958c + "]获取店铺参数成功！"), _0x86338e;
        } else {
          return _0x286715.logAndNotify("账号[" + _0xf8958c + "]获取参数失败，请联系作者哦"), false;
        }
      });
    } catch (_0x49e379) {
      console.log(_0x49e379);
    }
    return false;
  }
  async ["GetPoints"](_0x444175) {
    try {
      let _0x1c40da = "GetPoints",
        _0x27ebb6 = "get",
        _0x405a2d = "https://shop" + _0x444175 + ".youzan.com/wscump/pointstore/getCustomerPoints.json",
        _0x48dbe8 = "";
      return await this.taskApi(_0x1c40da, _0x27ebb6, _0x405a2d, _0x48dbe8).then(async _0x2ddbed => {
        return _0x2ddbed.msg === "ok" ? (this.valid = true, this.points = _0x2ddbed.data.currentAmount, _0x286715.logAndNotify("账号[" + _0xf8958c + "]查询 店铺[" + _0x444175 + "]积分 成功，当前积分：[" + this.points + "]"), true) : (_0x286715.logAndNotify("账号[" + _0xf8958c + "]获取当前 店铺[" + _0x444175 + "]积分 失败，可能帐号无效 或者 店铺链接错误，请检查"), false);
      });
    } catch (_0x4f0d5e) {
      return console.log(_0x4f0d5e), false;
    }
  }
  ["getShopIdAndActiveId"](_0x4cba7a) {
    const _0x50ade2 = /shop(\d+).*kdt_id=(\d+)/,
      _0x289e68 = _0x4cba7a.match(_0x50ade2);
    if (_0x289e68) {
      const _0x5d9bb5 = _0x289e68[1],
        _0xca5ef2 = _0x289e68[2];
      return {
        "shopId": _0x5d9bb5,
        "activeId": _0xca5ef2
      };
    }
  }
  ["getSignIdAndActionId"](_0x1a5c44) {
    const _0x1efa36 = /"actionId"\s*:\s*"([^"]+).*"checkin_id"\s*:\s*(\d+)/,
      _0x6f7e07 = _0x1a5c44.match(_0x1efa36);
    if (_0x6f7e07) {
      const _0xb074e0 = _0x6f7e07[1],
        _0x5a1d42 = _0x6f7e07[2];
      return {
        "actionId": _0xb074e0,
        "signInId": _0x5a1d42
      };
    }
  }
  async ["SignIn"](_0x4ab442, _0x4fe6cc, _0x2a5a69) {
    try {
      let _0x459120 = "SignIn",
        _0x2ede16 = "get",
        _0x1b552f = "https://shop" + _0x4ab442 + ".youzan.com/wscump/checkin/checkinV2.json?checkinId=" + _0x4fe6cc + "&kdt_id=" + _0x2a5a69,
        _0x38f4b1 = "";
      return await this.taskApi(_0x459120, _0x2ede16, _0x1b552f, _0x38f4b1).then(async _0x36b39f => {
        if (_0x36b39f.msg === "ok") {
          return _0x286715.logAndNotify("账号[" + _0xf8958c + "]签到成功，获得 [" + (JSON.stringify(_0x36b39f?.["data"]?.["dailyRewards"]) || "未知") + "] 奖励"), true;
        } else {
          return this.needAuthMobile = _0x36b39f?.["msg"]?.["includes"]("手机号未授"), _0x286715.logAndNotify("账号[" + _0xf8958c + "]签到失败，错误消息：" + (_0x36b39f?.["msg"] || JSON.stringify(_0x36b39f))), false;
        }
      });
    } catch (_0x2e0891) {
      return console.log(_0x2e0891), false;
    }
  }
  async ["AuthMobile"](_0x30ed31, _0x5b8f3c) {
    try {
      let _0x19964b = "AuthMobile",
        _0x3cdcfc = "post",
        _0x1d2f27 = "https://passport.youzan.com/api/authorize-dialog/user-auth.json",
        _0x3a6bfa = "{\"typeList\":[\"mobile\"],\"denyList\":[],\"url\":\"https://shop" + _0x30ed31 + ".youzan.com/wscump/checkin/result?kdt_id=" + _0x5b8f3c + "\",\"bizDataMap\":{}}";
      return await this.taskApi(_0x19964b, _0x3cdcfc, _0x1d2f27, _0x3a6bfa).then(async _0x3b7781 => {
        if (_0x3b7781.msg === "ok") return _0x286715.logAndNotify("账号[" + _0xf8958c + "]授权手机号成功：", JSON.stringify(_0x3b7781)), true;else {
          return _0x286715.logAndNotify("账号[" + _0xf8958c + "]授权手机号失败，错误消息：" + (_0x3b7781?.["msg"] || JSON.stringify(_0x3b7781))), false;
        }
      });
    } catch (_0x33b0f4) {
      console.log(_0x33b0f4);
    }
  }
  async ["doTask"]() {
    _0x5bb447 = 0;
    _0x286715.logAndNotify("\n账号[" + _0xf8958c + "] 开始执行任务 >>> ");
    for (let _0x1e124a = 0; _0x1e124a < _0x7913ce?.["length"]; _0x1e124a++) {
      _0x5bb447 = _0x1e124a;
      this.actionId = undefined;
      this.signInId = undefined;
      this.shopId = undefined;
      this.activeId = undefined;
      try {
        let _0x49aca6 = await this.GetPage();
        if (!_0x49aca6) {
          _0x286715.logAndNotify("账号[" + _0xf8958c + "]" + "获取店铺信息失败：" + JSON.stringify(_0x49aca6));
          continue;
        }
        this.actionId = _0x49aca6?.["actionId"];
        this.signInId = _0x49aca6?.["signInId"];
        let _0x5408b7 = await this.getShopIdAndActiveId(_0x7913ce[_0x5bb447]);
        this.shopId = _0x5408b7?.["shopId"];
        this.activeId = _0x5408b7?.["activeId"];
        let _0x32a34c = _0x5b27af[_0xf8958c].match(/_kdt_id_=(\d+)/)[1];
        _0x5b27af[_0xf8958c] = _0x5b27af[_0xf8958c]?.["replace"](_0x32a34c, this.activeId);
        let _0x29cf77 = await this.GetPoints(this.shopId);
        if (!_0x29cf77) continue;
      } catch (_0x3b7121) {
        console.log(_0x3b7121);
      }
      await _0x479243(Math.floor(Math.random() * 5000) + 3000);
      _0x286715.logAndNotify("账号[" + _0xf8958c + "] 开始签到 第 [" + _0x5bb447 + "] 个店铺 >>> ");
      await this.SignIn(this.shopId, this.signInId, this.activeId);
      this.needAuthMobile && (_0x286715.logAndNotify("账号[" + _0xf8958c + "] 检测到未授权手机号，开始授权手机号给 第 [" + _0x5bb447 + "] 个店铺 >>> "), await this.AuthMobile(this.shopId, this.activeId), await this.SignIn(this.shopId, this.signInId, this.activeId));
      await this.GetPoints(this.shopId);
    }
  }
}
!(async () => {
  if (typeof $request !== "undefined") await _0x182bfc();else {
    _0x5b27af = (await _0x4510df(_0x5b0b3e, "Cookie")) || [];
    if (!_0x5b27af?.["length"]) return;
    _0x7913ce = (await _0x4510df(_0x1acb55, "ShopUrl")) || [];
    _0x286715.logAndNotify("获取到了 " + (_0x7913ce?.["length"] || 0) + " 个店铺");
    if (!_0x7913ce?.["length"]) return;
    console.log("\n================ 任务队列构建完毕 ================");
    _0xf8958c = 0;
    for (let _0x49cdda of _0x5b27af) {
      await new _0x13d19a().doTask();
      _0xf8958c++;
    }
    await _0x286715.showmsg();
  }
})().catch(_0x54d3d5 => console.log(_0x54d3d5)).finally(() => _0x286715.done());
async function _0x479243(_0x1ccdd7 = 3000) {
  return _0x286715.logAndNotify("延迟 " + _0x1ccdd7 / 1000 + " s，请稍等……"), await new Promise(_0x392024 => setTimeout(_0x392024, _0x1ccdd7));
}
async function _0x182bfc() {}
async function _0x4510df(_0x17a483, _0x4e26e2) {
  let _0x687075 = [];
  if (_0x17a483) {
    let _0x3e668a = _0x4812bf[0];
    for (let _0x118291 of _0x4812bf) {
      if (_0x17a483.indexOf(_0x118291) > -1) {
        _0x3e668a = _0x118291;
        break;
      }
    }
    for (let _0x3613eb of _0x17a483.split(_0x3e668a)) {
      _0x3613eb && _0x687075.push(_0x3613eb);
    }
    userCount = _0x687075.length;
    if (userCount) return _0x687075;else {
      return;
    }
  } else {
    console.log("未找到 配置信息，请检查是否配置 变量：", _0x17a483);
    return;
  }
}
async function _0x59b2d9(_0x29db97, _0x151a60) {
  return httpErr = null, httpReq = null, httpResp = null, new Promise(_0x25b6dc => {
    _0x286715.send(_0x29db97, _0x151a60, async (_0x14bbf4, _0x8e3059, _0x5097ed) => {
      httpErr = _0x14bbf4;
      httpReq = _0x8e3059;
      httpResp = _0x5097ed;
      _0x25b6dc({
        "err": _0x14bbf4,
        "req": _0x8e3059,
        "resp": _0x5097ed
      });
    });
  });
}
function _0x534e9e(_0x2848ea, _0x496bd9) {
  return "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0), new class {
    constructor(_0x15ec89, _0x18cbfe) {
      this.name = _0x15ec89;
      this.notifyStr = "";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x18cbfe);
      console.log(this.name + " 开始运行：\n");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["getdata"](_0x403e49) {
      let _0x5b0460 = this.getval(_0x403e49);
      if (/^@/.test(_0x403e49)) {
        const [, _0x20963c, _0x1b3237] = /^@(.*?)\.(.*?)$/.exec(_0x403e49),
          _0x19dde6 = _0x20963c ? this.getval(_0x20963c) : "";
        if (_0x19dde6) try {
          const _0x577691 = JSON.parse(_0x19dde6);
          _0x5b0460 = _0x577691 ? this.lodash_get(_0x577691, _0x1b3237, "") : _0x5b0460;
        } catch (_0x51df24) {
          _0x5b0460 = "";
        }
      }
      return _0x5b0460;
    }
    ["setdata"](_0x295675, _0x3fac34) {
      let _0x2ed3e8 = false;
      if (/^@/.test(_0x3fac34)) {
        const [, _0x5c94c2, _0x4b30c9] = /^@(.*?)\.(.*?)$/.exec(_0x3fac34),
          _0x2ea56c = this.getval(_0x5c94c2),
          _0x174296 = _0x5c94c2 ? "null" === _0x2ea56c ? null : _0x2ea56c || "{}" : "{}";
        try {
          const _0x1245f7 = JSON.parse(_0x174296);
          this.lodash_set(_0x1245f7, _0x4b30c9, _0x295675);
          _0x2ed3e8 = this.setval(JSON.stringify(_0x1245f7), _0x5c94c2);
        } catch (_0x18b683) {
          const _0x13fbc6 = {};
          this.lodash_set(_0x13fbc6, _0x4b30c9, _0x295675);
          _0x2ed3e8 = this.setval(JSON.stringify(_0x13fbc6), _0x5c94c2);
        }
      } else {
        _0x2ed3e8 = this.setval(_0x295675, _0x3fac34);
      }
      return _0x2ed3e8;
    }
    ["getval"](_0x180496) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x180496) : this.isQuanX() ? $prefs.valueForKey(_0x180496) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x180496]) : this.data && this.data[_0x180496] || null;
    }
    ["setval"](_0x2eaaab, _0x59c782) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x2eaaab, _0x59c782) : this.isQuanX() ? $prefs.setValueForKey(_0x2eaaab, _0x59c782) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x59c782] = _0x2eaaab, this.writedata(), !0) : this.data && this.data[_0x59c782] || null;
    }
    ["send"](_0x13cf44, _0x5b6760, _0x1d7efe = () => {}) {
      if (_0x13cf44 != "get" && _0x13cf44 != "post" && _0x13cf44 != "put" && _0x13cf44 != "delete") {
        console.log("无效的http方法：" + _0x13cf44);
        return;
      }
      if (_0x13cf44 == "get" && _0x5b6760.headers) delete _0x5b6760.headers["Content-Type"], delete _0x5b6760.headers["Content-Length"];else {
        if (_0x5b6760.body && _0x5b6760.headers) {
          if (!_0x5b6760.headers["Content-Type"]) _0x5b6760.headers["Content-Type"] = "application/x-www-form-urlencoded";
        }
      }
      if (this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x5b6760.headers = _0x5b6760.headers || {}, Object.assign(_0x5b6760.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        let _0x227966 = {
          "method": _0x13cf44,
          "url": _0x5b6760.url,
          "headers": _0x5b6760.headers,
          "timeout": _0x5b6760.timeout,
          "data": _0x5b6760.body
        };
        if (_0x13cf44 == "get") delete _0x227966.data;
        $axios(_0x227966).then(_0x1e92a2 => {
          const {
            status: _0x254f1b,
            request: _0x2d4acc,
            headers: _0xf45b3d,
            data: _0x5b5018
          } = _0x1e92a2;
          _0x1d7efe(null, _0x2d4acc, {
            "statusCode": _0x254f1b,
            "headers": _0xf45b3d,
            "body": _0x5b5018
          });
        }).catch(_0xde1f12 => console.log(_0xde1f12));
      } else {
        if (this.isQuanX()) {
          _0x5b6760.method = _0x13cf44.toUpperCase();
          this.isNeedRewrite && (_0x5b6760.opts = _0x5b6760.opts || {}, Object.assign(_0x5b6760.opts, {
            "hints": !1
          }));
          $task.fetch(_0x5b6760).then(_0x11017e => {
            const {
              statusCode: _0x4a3367,
              request: _0x13067b,
              headers: _0x41d7bf,
              body: _0x4dfb0b
            } = _0x11017e;
            _0x1d7efe(null, _0x13067b, {
              "statusCode": _0x4a3367,
              "headers": _0x41d7bf,
              "body": _0x4dfb0b
            });
          }, _0x35b51e => _0x1d7efe(_0x35b51e));
        } else {
          if (this.isNode()) {
            this.got = this.got ? this.got : require("got");
            const {
              url: _0x44ee72,
              ..._0x51f582
            } = _0x5b6760;
            this.instance = this.got.extend({
              "followRedirect": false
            });
            this.instance[_0x13cf44](_0x44ee72, _0x51f582).then(_0x121613 => {
              const {
                statusCode: _0x1ef30d,
                request: _0x58c663,
                headers: _0x2b3240,
                body: _0x70ca55
              } = _0x121613;
              _0x1d7efe(null, _0x58c663, {
                "statusCode": _0x1ef30d,
                "headers": _0x2b3240,
                "body": _0x70ca55
              });
            }, _0x4f6c66 => {
              const {
                message: _0x4d4d77,
                request: _0x45412a,
                response: _0x2e25e7
              } = _0x4f6c66;
              _0x1d7efe(_0x4d4d77, _0x45412a, _0x2e25e7);
            });
          }
        }
      }
    }
    ["time"](_0x5dcac2, _0x44151e = null) {
      let _0x3a504c = _0x44151e ? new Date(_0x44151e) : new Date(),
        _0x596eee = {
          "M+": _0x3a504c.getMonth() + 1,
          "d+": _0x3a504c.getDate(),
          "h+": _0x3a504c.getHours(),
          "m+": _0x3a504c.getMinutes(),
          "s+": _0x3a504c.getSeconds(),
          "q+": Math.floor((_0x3a504c.getMonth() + 3) / 3),
          "S": _0x3a504c.getMilliseconds()
        };
      /(y+)/.test(_0x5dcac2) && (_0x5dcac2 = _0x5dcac2.replace(RegExp.$1, (_0x3a504c.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x43aa50 in _0x596eee) new RegExp("(" + _0x43aa50 + ")").test(_0x5dcac2) && (_0x5dcac2 = _0x5dcac2.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x596eee[_0x43aa50] : ("00" + _0x596eee[_0x43aa50]).substr(("" + _0x596eee[_0x43aa50]).length)));
      return _0x5dcac2;
    }
    async ["showmsg"]() {
      if (!this.notifyStr) return;
      let _0x3ab8ab = this.name + " 运行通知\n\n" + this.notifyStr;
      if (_0x286715.isNode()) {
        var _0x31f977 = require("./sendNotify");
        console.log("\n============== 推送 ==============");
        await _0x31f977.sendNotify(this.name, _0x3ab8ab);
      } else this.msg(_0x3ab8ab);
    }
    ["logAndNotify"](_0x4eb8bc) {
      console.log(_0x4eb8bc);
      this.notifyStr += _0x4eb8bc;
      this.notifyStr += "\n";
    }
    ["logAndNotifyWithTime"](_0x530c75) {
      let _0x28df0d = "[" + this.time("hh:mm:ss.S") + "]" + _0x530c75;
      console.log(_0x28df0d);
      this.notifyStr += _0x28df0d;
      this.notifyStr += "\n";
    }
    ["logWithTime"](_0x5cd112) {
      console.log("[" + this.time("hh:mm:ss.S") + "]" + _0x5cd112);
    }
    ["msg"](_0x4e2bb8 = t, _0x408cff = "", _0x25c385 = "", _0x3fc7fb) {
      const _0x10e6a3 = _0x51140f => {
        if (!_0x51140f) return _0x51140f;
        if ("string" == typeof _0x51140f) return this.isLoon() ? _0x51140f : this.isQuanX() ? {
          "open-url": _0x51140f
        } : this.isSurge() ? {
          "url": _0x51140f
        } : void 0;
        if ("object" == typeof _0x51140f) {
          if (this.isLoon()) {
            let _0x595c1d = _0x51140f.openUrl || _0x51140f.url || _0x51140f["open-url"],
              _0x5df553 = _0x51140f.mediaUrl || _0x51140f["media-url"];
            return {
              "openUrl": _0x595c1d,
              "mediaUrl": _0x5df553
            };
          }
          if (this.isQuanX()) {
            let _0x4a7e5a = _0x51140f["open-url"] || _0x51140f.url || _0x51140f.openUrl,
              _0x4ca2eb = _0x51140f["media-url"] || _0x51140f.mediaUrl;
            return {
              "open-url": _0x4a7e5a,
              "media-url": _0x4ca2eb
            };
          }
          if (this.isSurge()) {
            let _0x4d440e = _0x51140f.url || _0x51140f.openUrl || _0x51140f["open-url"];
            return {
              "url": _0x4d440e
            };
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4e2bb8, _0x408cff, _0x25c385, _0x10e6a3(_0x3fc7fb)) : this.isQuanX() && $notify(_0x4e2bb8, _0x408cff, _0x25c385, _0x10e6a3(_0x3fc7fb)));
      let _0x5dca65 = ["", "============== 系统通知 =============="];
      _0x5dca65.push(_0x4e2bb8);
      _0x408cff && _0x5dca65.push(_0x408cff);
      _0x25c385 && _0x5dca65.push(_0x25c385);
      console.log(_0x5dca65.join("\n"));
    }
    ["getMin"](_0x3bba58, _0x2141d5) {
      return _0x3bba58 < _0x2141d5 ? _0x3bba58 : _0x2141d5;
    }
    ["getMax"](_0x5c25d9, _0x1d95ca) {
      return _0x5c25d9 < _0x1d95ca ? _0x1d95ca : _0x5c25d9;
    }
    ["padStr"](_0x2513d9, _0xfa37f1, _0x13fcef = "0") {
      let _0x4ed66 = String(_0x2513d9),
        _0x5624fb = _0xfa37f1 > _0x4ed66.length ? _0xfa37f1 - _0x4ed66.length : 0,
        _0x366d9c = "";
      for (let _0x2c4a67 = 0; _0x2c4a67 < _0x5624fb; _0x2c4a67++) {
        _0x366d9c += _0x13fcef;
      }
      return _0x366d9c += _0x4ed66, _0x366d9c;
    }
    ["json2str"](_0x47b315, _0x297235, _0x468d41 = false) {
      let _0x18d58e = [];
      for (let _0xca40fd of Object.keys(_0x47b315).sort()) {
        let _0x50d47b = _0x47b315[_0xca40fd];
        if (_0x50d47b && _0x468d41) _0x50d47b = encodeURIComponent(_0x50d47b);
        _0x18d58e.push(_0xca40fd + "=" + _0x50d47b);
      }
      return _0x18d58e.join(_0x297235);
    }
    ["str2json"](_0x5afc8d, _0x2f5c72 = false) {
      let _0x7244ab = {};
      for (let _0x158fbb of _0x5afc8d.split("&")) {
        if (!_0x158fbb) continue;
        let _0x24cc8d = _0x158fbb.indexOf("=");
        if (_0x24cc8d == -1) continue;
        let _0x122cd0 = _0x158fbb.substr(0, _0x24cc8d),
          _0x403bc2 = _0x158fbb.substr(_0x24cc8d + 1);
        if (_0x2f5c72) _0x403bc2 = decodeURIComponent(_0x403bc2);
        _0x7244ab[_0x122cd0] = _0x403bc2;
      }
      return _0x7244ab;
    }
    ["randomString"](_0x5d7543, _0x4d46a2 = "abcdef0123456789") {
      let _0x1f70f1 = "";
      for (let _0x4aab63 = 0; _0x4aab63 < _0x5d7543; _0x4aab63++) {
        _0x1f70f1 += _0x4d46a2.charAt(Math.floor(Math.random() * _0x4d46a2.length));
      }
      return _0x1f70f1;
    }
    ["randomList"](_0x53d2c6) {
      let _0x37916b = Math.floor(Math.random() * _0x53d2c6.length);
      return _0x53d2c6[_0x37916b];
    }
    ["wait"](_0x572a6a) {
      return new Promise(_0xd9d610 => setTimeout(_0xd9d610, _0x572a6a));
    }
    ["done"](_0x2b2dbb = {}) {
      const _0x38c856 = new Date().getTime(),
        _0xc9d842 = (_0x38c856 - this.startTime) / 1000;
      console.log("\n" + this.name + " 运行结束，共运行了 " + _0xc9d842 + " 秒！");
      if (this.isSurge() || this.isQuanX() || this.isLoon()) $done(_0x2b2dbb);
    }
  }(_0x2848ea, _0x496bd9);
}