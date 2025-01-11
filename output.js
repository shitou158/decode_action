//Sat Jan 11 2025 14:30:54 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
var encode_version = "jsjiami.com.v5";
let currentEngine = engines.myEngine();
let runningEngines = engines.all();
let currentSource = currentEngine.getSource() + "";
if (runningEngines.length > 1) {
  runningEngines.forEach(_0x1dd77d => {
    let _0xea742f = _0x1dd77d.getSource() + "";
    if (currentEngine.id !== _0x1dd77d.id && _0xea742f === currentSource) {
      _0x1dd77d.forceStop();
    }
  });
}
const miYue = device.getAndroidId();
let capturing = true;
let upjiage = 0;
let upjiage2 = 0;
let w = device.width;
let h = device.height;
let over = false;
let ptime = 0;
let ddai = false;
let timeaid = null;
let timebid = null;
let sxid = null;
let game = false;
let stopsx = false;
let jhigh = 0;
let pchigh = 0;
let pctop = 0;
let jleft = 0;
let djleft = 0;
let csh1 = false;
let csh2 = false;
let yz = 0;
let yzright = 0;
let seesx = false;
var storage = storages.create("waynejoeok@");
let {
  zdjiage,
  jjtime,
  zgjiage,
  ddyone,
  ddytwo,
  djone,
  djtwo,
  slone,
  sltwo,
  zjq,
  pc1,
  pc2,
  pc,
  hll,
  zhijie,
  silun,
  jjkm
} = {
  zdjiage: storage.get("zdjiage", 0),
  jjtime: storage.get("jjtime", 0),
  zgjiage: storage.get("zgdjiage", 0),
  ddyone: storage.get("ddyone", h * 0.16),
  ddytwo: storage.get("ddytwo", h * 0.5),
  djone: storage.get("djone", h * 0.4),
  djtwo: storage.get("djtwo", h * 0.745),
  slone: storage.get("slone", h * 0.098),
  sltwo: storage.get("sltwo", h * 0.43),
  zjq: storage.get("zjq", 0),
  pc1: storage.get("pc1", 680),
  pc2: storage.get("pc2", 1477),
  pc: storage.get("pc", ""),
  hll: storage.get("hll", false),
  zhijie: storage.get("zhijie", ""),
  silun: storage.get("silun", false),
  jjkm: storage.get("jjkm", 2)
};
pc != "";
zhijie != "";
log("当前接(  " + zdjiage + "  )公里至(  " + zgjiage + "  )公里的订单");
let jhm = storage.get("jhm", "");
let jcjhm = jC(jhm);
if (jhm === "" || jcjhm.guoqi) {
  let nowjhm = rawInput("本机密码：" + miYue + "(截图或点确定发给服务人员)", "");
  setClip(miYue);
  let pdgq = jC(nowjhm);
  if (!pdgq.guoqi) {
    toastLog("注册成功！");
    storage.put("jhm", nowjhm);
  } else {
    toastLog("激活码错误！");
    exit();
  }
}
console.show(true);
console.setTitle("接单记录", "#ff11ee00", 36);
console.setPosition(w - 700, h - 600);
sleep(500);
console.setSize(700, 350);
function mRiQi(_0x33f272) {
  const _0x3753c9 = Buffer.from(miYue, "utf-8");
  const _0x1eaaf7 = Buffer.from(_0x33f272, "base64");
  const _0x2d0c0a = Buffer.alloc(_0x1eaaf7.length);
  for (let _0x26a878 = 0; _0x26a878 < _0x1eaaf7.length; _0x26a878++) {
    _0x2d0c0a[_0x26a878] = _0x1eaaf7[_0x26a878] ^ _0x3753c9[_0x26a878 % _0x3753c9.length];
  }
  return _0x2d0c0a.toString("utf-8");
}
function Ocrs() {
  let _0x2b28d4 = images.load("http://127.0.0.1:18080/api/screenShot");
  if (!_0x2b28d4) {
    stopWorking();
    return;
  }
  let _0x1e1d4d = images.clip(_0x2b28d4, 0, 220 + ddyone, w, jhigh);
  let _0x2cbea4 = gmlkit.ocr(_0x1e1d4d, "zh");
  let _0x4b0785 = _0x2cbea4.text;
  if (!_0x4b0785) {
    upjiage = 0;
    return;
  }
  if (_0x4b0785.includes("接乘客")) {
    log("恭喜您！成功接单！");
    stopWorking();
    clearInterval(seeid);
    return;
  }
  if (!_0x4b0785.includes("分")) {
    upjiage = 0;
    return;
  }
  let _0x53504e = tiqu(_0x4b0785);
  if (silun) {
    let _0x59c2e4 = _0x4b0785.includes("小件");
    if (!_0x59c2e4) {
      return;
    }
  }
  if (pc != "" || zhijie != "") {
    let _0x57c843 = images.clip(_0x2b28d4, w * 0.083, pc1 + 220, w * 0.38, pchigh);
    let _0x456bf8 = gmlkit.ocr(_0x57c843, "zh");
    _0x4b0785 += _0x456bf8.text;
    if (zhijie != "") {
      const _0x59afa9 = !zhijieArray.some(_0x11c0a4 => _0x4b0785.includes(_0x11c0a4));
      if (_0x59afa9) {
        return;
      }
    }
    if (pc != "") {
      const _0x23c25e = namesArray.some(_0x2b607f => _0x4b0785.includes(_0x2b607f));
      if (_0x23c25e) {
        return;
      }
    }
  }
  _0x2b28d4.recycle();
  _0x4b0785 = tihuan(_0x4b0785);
  if (panduan(_0x53504e.firstKm, _0x53504e.time, _0x53504e.secondKm, upjiage)) {
    upjiage = _0x53504e.secondKm;
    stopsx = true;
    if (hll) {
      if (yanzheng(_0x53504e.secondKm, ddyone + 220)) {
        httpclick(djleft, djone + 220);
      }
    } else {
      httpclick(djleft, djone + 220);
    }
    console.log("订单距离：" + _0x53504e.secondKm + "公里，接单：" + _0x53504e.firstKm + "公里");
  }
  _0x2b28d4.recycle();
  capturing = false;
  stopsx = false;
}
function Ocrs2() {
  let _0x5e1fe0 = images.load("http://127.0.0.1:18080/api/screenShot");
  if (!_0x5e1fe0) {
    stopWorking();
    return;
  }
  let _0x46c823 = images.clip(_0x5e1fe0, 0, 1020 + ddytwo, w, jhigh);
  let _0x9b9d93 = gmlkit.ocr(_0x46c823, "zh");
  let _0x28a4f0 = _0x9b9d93.text;
  if (!_0x28a4f0) {
    upjiage2 = 0;
    return;
  }
  if (!_0x28a4f0.includes("分")) {
    upjiage2 = 0;
    return;
  }
  if (silun) {
    let _0x2efdf7 = _0x28a4f0.includes("小件");
    if (!_0x2efdf7) {
      return;
    }
  }
  let _0x18f586 = tiqu(_0x28a4f0);
  if (pc != "" || zhijie != "") {
    let _0x4c23c4 = images.clip(_0x5e1fe0, w * 0.083, pc2 + 1020, w * 0.38, pchigh);
    let _0x42f7db = gmlkit.ocr(_0x4c23c4, "zh");
    _0x28a4f0 += _0x42f7db.text;
    if (zhijie != "") {
      const _0x3ae8f7 = !zhijieArray.some(_0xb4a513 => _0x28a4f0.includes(_0xb4a513));
      if (_0x3ae8f7) {
        return;
      }
    }
    if (pc != "") {
      const _0x33b074 = namesArray.some(_0x2ca369 => _0x28a4f0.includes(_0x2ca369));
      if (_0x33b074) {
        return;
      }
    }
  }
  _0x5e1fe0.recycle();
  _0x28a4f0 = tihuan(_0x28a4f0);
  if (panduan(_0x18f586.firstKm, _0x18f586.time, _0x18f586.secondKm, upjiage2)) {
    upjiage2 = _0x18f586.secondKm;
    stopsx = true;
    if (hll) {
      if (yanzheng(_0x18f586.secondKm, ddytwo + 1020)) {
        httpclick(djleft, djtwo + 1020);
      }
    } else {
      httpclick(djleft, djtwo + 1020);
    }
    console.log("订单距离：" + _0x18f586.secondKm + "公里，接单：" + _0x18f586.firstKm + "公里");
  }
  _0x5e1fe0.recycle();
  capturing = false;
  stopsx = false;
}
function tihuan(_0x2ec950) {
  if (_0x2ec950.includes("出价")) {
    _0x2ec950 = "";
    return _0x2ec950;
  } else {
    _0x2ec950 = _0x2ec950.replace(/\s+/g, "");
    return _0x2ec950;
  }
}
function httpclick(_0x334f4d, _0x11982f) {
  ptime = 600;
  py = getRandomFloat(-100, 30);
  var _0xa32cd8 = "http://127.0.0.1:18080/api/click";
  var _0x228377 = {
    x: _0x334f4d + py,
    y: _0x11982f
  };
  var _0x3c7a13 = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8"
    }
  };
  http.postJson(_0xa32cd8, _0x228377, _0x3c7a13, function (_0x1a7a2b) {
    ptime = 0;
    console.log("执行了抢单！");
    if (_0x1a7a2b.statusMessage = "OK") {}
    stopsx = false;
  });
}
function jC(_0x381105) {
  const _0x4d7cdd = mRiQi(_0x381105);
  const _0x3980f5 = new Date(_0x4d7cdd + "T00:00:00Z");
  const _0x214e58 = new Date();
  _0x214e58.setHours(0, 0, 0, 0);
  const _0x1e586f = _0x3980f5 - _0x214e58;
  const _0xd71185 = Math.ceil(_0x1e586f / 86400000);
  return _0xd71185 > 0 ? {
    guoqi: false,
    day: _0xd71185
  } : {
    guoqi: true,
    day: 0
  };
}
function panduan(_0x46ccea, _0x54223e, _0x19dfc6, _0x1e81b7) {
  if (+_0x19dfc6 >= +zjq && +zjq > 0 && +_0x1e81b7 != +_0x19dfc6) {
    return true;
  } else {
    return +_0x19dfc6 >= +zdjiage && +_0x46ccea <= +jjkm && +_0x19dfc6 <= +zgjiage && +_0x1e81b7 != +_0x19dfc6;
  }
}
function getRandomFloat(_0x480a0d, _0x3eacff) {
  return Math.random() * (_0x3eacff - _0x480a0d) + _0x480a0d;
}
function shuax() {
  sxid = setInterval(() => {
    if (seesx) {
      return;
    }
    ptime = 300;
    var _0x4abd27 = "http://127.0.0.1:18080/api/swipe";
    var _0x237d61 = getRandomFloat(0.2, 0.8);
    var _0x54b88d = getRandomFloat(0.2, 0.5);
    var _0x1ceee8 = {
      x1: _0x237d61,
      y1: 0.1 + _0x54b88d,
      x2: _0x237d61,
      y2: 0.2 + _0x54b88d,
      duration: 50
    };
    var _0x34845f = {
      headers: {
        "Content-Type": "application/json;charset=UTF-8"
      }
    };
    if (!stopsx) {
      http.postJson(_0x4abd27, _0x1ceee8, _0x34845f, function (_0x9fd2ea) {
        ptime = 0;
        upjiage = 0;
        upjiage2 = 0;
      });
    }
  }, 1500 + getRandomFloat(200, 500));
}
function timea() {
  timeaid = setInterval(function () {
    if (game) {
      clearInterval(timeaid);
      clearInterval(timebid);
    }
    if (csh1 === true) {
      Ocrs();
    } else {
      stopsx = true;
      gebounds(220);
      stopsx = false;
    }
  }, 1);
}
function timeb() {
  timebid = setInterval(function () {
    if (csh2 === true) {
      Ocrs2();
    } else {
      gebounds(1020);
    }
  }, 1);
}
const stopWorking = () => {
  console.log("本次任务已经结束");
  window.action.setText("开始");
  threads.shutDownAll();
  clearInterval(timeaid);
  clearInterval(timebid);
  clearInterval(sxid);
  game = true;
  over = true;
  ddai = true;
};
function yanzheng(_0x2f34c7, _0x2a2b76) {
  let _0x236326 = images.load("http://127.0.0.1:18080/api/screenShot");
  if (_0x236326) {
    let _0x2b4ef8 = images.clip(_0x236326, yz - 20, _0x2a2b76, yzright, jhigh);
    let _0x5354a2 = gmlkit.ocr(_0x2b4ef8, "zh");
    _0x236326.recycle();
    if (_0x5354a2.text.includes(_0x2f34c7)) {
      return true;
    } else {
      return false;
    }
  }
}
function upnull() {
  upnullid = setInterval(function () {}, 2000);
}
function gebounds(_0x26832f) {
  let _0x58a9ef = images.load("http://127.0.0.1:18080/api/screenShot");
  if (!_0x58a9ef) {
    return;
  }
  let _0x2f0200 = images.clip(_0x58a9ef, 0, _0x26832f, device.width, 810);
  let _0x483f48 = gmlkit.ocr(_0x2f0200, "zh");
  if (!_0x483f48.text.includes("地图") && !_0x483f48.text.includes("时间")) {
    return;
    stopsx = false;
  }
  let _0x3334d1 = _0x483f48.find(_0x1dc88d => _0x1dc88d.text.includes("元"));
  if (_0x3334d1 && _0x3334d1.bounds) {
    if (_0x26832f === 220) {
      ddyone = _0x3334d1.bounds.bottom;
    }
    if (_0x26832f === 1020) {
      ddytwo = _0x3334d1.bounds.bottom;
    }
  }
  let _0x17713f = _0x483f48.find(_0x438670 => _0x438670.text.includes("时间") || _0x438670.text.includes("接驾"));
  if (_0x17713f && _0x17713f.bounds) {
    if (_0x26832f === 220) {
      jhigh = _0x17713f.bounds.bottom - ddyone;
      jleft = _0x17713f.bounds.left - 50;
    }
  }
  let _0x12c15c = _0x483f48.find(_0x3fe005 => _0x3fe005.text.includes("总里程"));
  if (_0x12c15c && _0x12c15c.bounds) {
    if (_0x26832f === 220) {
      yz = _0x12c15c.bounds.left - 50;
    }
  }
  let _0x2273ad = _0x483f48.find(_0x3cec3c => _0x3cec3c.text.includes("地图"));
  if (_0x2273ad && _0x2273ad.bounds) {
    if (_0x26832f === 220) {
      pc1 = _0x2273ad.bounds.top - 10;
      djleft = _0x2273ad.bounds.left;
      yzright = _0x2273ad.bounds.right + 100 - yz;
    }
    if (_0x26832f === 1020) {
      pc2 = _0x2273ad.bounds.top - 10;
    }
  }
  let _0x1e20d9 = _0x483f48.find(_0x1474de => _0x1474de.text.includes("抢单") || _0x1474de.text.includes("抢四"));
  if (_0x1e20d9 && _0x1e20d9.bounds) {
    if (_0x26832f === 220) {
      pchigh = _0x1e20d9.bounds.top - pctop;
      djone = _0x1e20d9.bounds.bottom + 20;
    }
    if (_0x26832f === 1020) {
      djtwo = _0x1e20d9.bounds.bottom + 20;
    }
  }
  if (_0x26832f === 220 && yz > 0 && 810 > djone > 0 && pc1 > 0 && 810 > ddyone > 0 && jhigh > 0) {
    log("抢单1初始化成功");
    csh1 = true;
  }
  if (_0x26832f === 1020 && 810 > djtwo > 0 && pc2 > 0 && 810 > ddytwo > 0 && jhigh > 0) {
    log("抢单2初始化成功");
    csh2 = true;
  }
  _0x58a9ef.recycle();
}
function tiqu(_0x3d6253) {
  const _0x3d394f = /(\d+(\.\d+)?)/g;
  let _0x3bbc50 = _0x3d6253.match(_0x3d394f) || [];
  let _0x20d06d = null;
  let _0x3bc1de = null;
  let _0x5bb55f = null;
  let _0x39c10b = 0;
  for (let _0x55c800 = 0; _0x55c800 < _0x3bbc50.length; _0x55c800++) {
    let _0x58e218 = _0x3bbc50[_0x55c800];
    if (_0x3d6253.indexOf("元", _0x58e218.index) < 0) {
      switch (_0x39c10b) {
        case 0:
          _0x20d06d = parseFloat(_0x58e218);
          break;
        case 1:
          _0x3bc1de = parseInt(_0x58e218, 10);
          break;
        case 2:
          _0x5bb55f = parseFloat(_0x58e218);
          break;
      }
      _0x39c10b++;
    }
  }
  return {
    time: _0x3bc1de,
    firstKm: _0x20d06d,
    secondKm: _0x5bb55f
  };
}
function see() {
  seeid = setInterval(function () {
    let _0x32f6ee = http.get("http://127.0.0.1:18080/api/getTopActivity");
    let _0x43e817 = _0x32f6ee.body.string();
    if (!_0x43e817.includes("com.xiaolachuxing.driver")) {
      seesx = true;
      return true;
    } else {
      seesx = false;
      return false;
    }
  }, 200);
}
(function (_0x2e5ae6, _0x595c08, _0x592f87) {
  _0x592f87 = "al";
  try {
    _0x592f87 += "ert";
    _0x595c08 = encode_version;
    if (!(typeof _0x595c08 !== "undefined" && _0x595c08 === "jsjiami.com.v5")) {
      _0x2e5ae6[_0x592f87]("删除版本号，js会定期弹窗，还请支持我们的工作");
    }
  } catch (_0x4f5f8c) {
    _0x2e5ae6[_0x592f87]("删除版本号，js会定期弹窗");
  }
})(window);
encode_version = "jsjiami.com.v5";