//Tue Dec 31 2024 02:39:27 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x3f5e2c = new _0x4fb3b9("🍅番茄小说");
const _0x394304 = "V1.1.0";
const _0x351967 = "fqxsapp";
let _0x4c6aec = _0x3f5e2c.getjson("fqxsapp", []);
const _0x2697e4 = _0x3f5e2c.isNode() ? require("./sendNotify") : "";
const _0x26ebfe = _0x3f5e2c.isNode() ? require("./david_cookies") : "";
let _0x2e19b7 = _0x3f5e2c.getdata("tguserid") || 1;
let _0x87dac0 = _0x3f5e2c.getdata("fqxsactivecode") || 0;
let _0x6cce26 = _0x3f5e2c.getval("fqxsuserck") || 1;
let _0x417c05 = _0x3f5e2c.getval("apiHost") || "http://106.15.104.124:8080";
let _0x4cb0fc = _0x3f5e2c.getval("tz") || "1";
var _0xe6e45e = "";
var _0x2f31c8 = "";
let _0x17f1fd = "";
let _0x13425d = "";
let _0x3c148f = "i.snssdk.com";
let _0x21e216 = "https://" + _0x3c148f;
let _0xc201f9 = "";
let _0x21e8f = "";
let _0x421b53 = "";
let _0x3ae480 = "";
let _0x1d0a63 = "";
let _0x24f30f = "";
let _0xc15cb = "";
let _0x2bafd5 = 1;
let _0x2f17f8 = 1;
let _0x22accd = 1;
let _0x40cf73 = 1;
let _0x448001 = "";
if (_0x3f5e2c.isNode()) {
  if (process.env.FQXSAPP) {
    _0x4c6aec = JSON.parse(process.env.FQXSAPP);
  } else {
    _0x4c6aec = _0x26ebfe.FQXS;
  }
  _0x2e19b7 = process.env.TGUSERID;
  _0x87dac0 = process.env.FQXSACTIVECODE;
  if (process.env.APIHOST) {
    _0x417c05 = process.env.APIHOST;
  }
  _0xe6e45e = new Date(new Date().getTime() + 28800000).getHours();
  _0x2f31c8 = new Date(new Date().getTime() + 28800000).getMinutes();
} else {
  _0xe6e45e = new Date().getHours();
  _0x2f31c8 = new Date().getMinutes();
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x3bf461();
  } else {
    if (!_0x87dac0 || !_0x2e19b7 || _0x2e19b7 == 1 || _0x87dac0 == 0 || _0x87dac0.length != 32) {
      _0x3f5e2c.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报群: https://t.me/china20211029");
      return;
    }
    await _0x4c45bb(_0x351967, _0x2e19b7, _0x87dac0);
    _0x3f5e2c.log("📢 " + _0x1d0a63);
    _0x3f5e2c.log("🔔 当前脚本版本号: " + _0x394304 + "，最新版本号: " + _0x421b53);
    if (_0x394304 < _0x421b53) {
      _0x3f5e2c.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      _0x17c19e("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (_0x21e8f != true) {
      _0x3f5e2c.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (_0xc201f9 != true) {
      _0x3f5e2c.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报群: https://t.me/china20211029");
      return;
    }
    if (_0xc15cb == true) {
      _0x3f5e2c.log("⚠️ 此脚本采用付费模式。🔒");
    } else {
      _0x3f5e2c.log("⚠️ 此脚本采用免费模式。🔓");
    }
    if (_0x24f30f != true) {
      _0x3f5e2c.log("⚠️ 抱歉，你没有权限运行此脚本, 你不是付费用户，请关注电报群: https://t.me/china20211029");
      return;
    } else {
      if (_0xc15cb == true) {
        _0x3f5e2c.log("尊敬的会员：您好，你是付费用户！🔐");
      }
    }
    if (_0x3ae480 != true) {
      _0x3f5e2c.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (_0x2bafd5 > 1) {
      _0x3f5e2c.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，你可以一次运行" + 3 * _0x2bafd5 + "个账号");
    }
    if (_0x2f17f8 > 1) {
      _0x3f5e2c.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，你一共可以运行" + _0x22accd + "次, 已经运行了" + _0x40cf73 + "次");
    }
    if (_0x4c6aec.length > 3 * _0x2bafd5) {
      _0x3f5e2c.log("⚠️ 你是不是搞错了，你有这么多账号？一次最多运行" + 3 * _0x2bafd5 + "个账号哦");
      return;
    }
    _0x3f5e2c.log("一共有" + _0x4c6aec.length + "个账号");
    for (let _0x7ec336 = 0; _0x7ec336 < _0x4c6aec.length; _0x7ec336++) {
      _0x3f5e2c.log("开始执行第" + (_0x7ec336 + 1) + "个账号");
      _0x17f1fd = _0x4c6aec[_0x7ec336];
      await _0x467191();
      await _0x5e2450();
      await _0x198923();
      await _0x3f5e2c.wait(_0x2973f3(1000, 3000));
      await _0x2e58b7();
      await _0x22f288();
      await _0x3f5e2c.wait(_0x2973f3(35000, 55000));
      await _0x373d89();
      await _0xa4d01f();
      await _0x1d06cb();
      await _0x163d4a();
      await _0x5e5b0e();
      await _0x2f0a80();
      await _0x599148();
      await _0x17f6c3();
      await _0x12cf25();
      await _0x45c2d9();
      await _0x170070();
      await _0x2e9f91();
      await _0xeee14();
      await _0x28b64a();
      await _0xb73ce7();
      await _0x24120d();
      await _0x49ac95();
      await _0x2127c5();
      await _0x101f74();
      await _0x31ed75();
      await _0x4bcbf8();
      await _0x435205();
      if (!_0x4c6aec[_0x7ec336].notify) {
        _0x4c6aec[_0x7ec336].notify = 1;
        _0x3f5e2c.setdata(JSON.stringify(_0x4c6aec, null, 2), "fqxsapp");
      }
      if (_0x4c6aec.length > 1 && _0x7ec336 < _0x4c6aec.length - 1) {
        _0x3f5e2c.log("\n===========分割线============\n");
        _0x13425d += "===========分割线============\n";
      }
      if (_0x7ec336 == _0x4c6aec.length - 1 && _0x4c6aec[_0x7ec336].notify == 1) {
        _0x17c19e(_0x13425d);
      }
      await _0x4176b7(_0x351967, _0x2e19b7);
    }
  }
})().catch(_0x278a7b => _0x3f5e2c.logErr(_0x278a7b)).finally(() => _0x3f5e2c.done());
async function _0x3bf461() {
  if ($request.url.match(/sign_in/)) {
    const _0x49592d = $request.url.split("?")[1];
    const _0x5998d3 = $request.headers.Host;
    const _0x825f65 = JSON.stringify($request.headers);
    let _0x3db8a5 = _0x6cce26 - 1;
    if (_0x4c6aec[_0x3db8a5]) {
      _0x4c6aec[_0x3db8a5].fqxs_url = _0x49592d;
      _0x4c6aec[_0x3db8a5].fqxs_host = _0x5998d3;
      _0x4c6aec[_0x3db8a5].fqxs_headers = _0x825f65;
    } else {
      const _0x5ee87a = {
        fqxs_url: _0x49592d,
        fqxs_host: _0x5998d3,
        fqxs_headers: _0x825f65
      };
      _0x4c6aec[_0x3db8a5] = _0x5ee87a;
    }
    _0x3f5e2c.setdata(JSON.stringify(_0x4c6aec, null, 2), "fqxsapp");
    _0x3f5e2c.msg(_0x3f5e2c.name, "番茄小说账号" + (_0x3db8a5 + 1) + "签到数据获取成功！🎉");
  }
  if ($request.url.match(/game_king\/home_info/)) {
    const _0x363c67 = $request.url.split("?")[1];
    let _0x41a510 = _0x6cce26 - 1;
    if (_0x4c6aec[_0x41a510]) {
      _0x4c6aec[_0x41a510].king_url = _0x363c67;
    } else {
      const _0x22ac2d = {
        king_url: _0x363c67
      };
      _0x4c6aec[_0x41a510] = _0x22ac2d;
    }
    _0x3f5e2c.setdata(JSON.stringify(_0x4c6aec, null, 2), "fqxsapp");
    _0x3f5e2c.msg(_0x3f5e2c.name, "番茄小说账号" + (_0x41a510 + 1) + "当皇上数据获取成功！🎉");
  }
  if ($request.url.match(/farm\/gift\/list/)) {
    const _0x43feb6 = $request.url.split("?")[1];
    let _0x2045ff = _0x6cce26 - 1;
    if (_0x4c6aec[_0x2045ff]) {
      _0x4c6aec[_0x2045ff].farm_url = _0x43feb6;
    } else {
      const _0x313626 = {
        farm_url: _0x43feb6
      };
      _0x4c6aec[_0x2045ff] = _0x313626;
    }
    _0x3f5e2c.setdata(JSON.stringify(_0x4c6aec, null, 2), "fqxsapp");
    _0x3f5e2c.msg(_0x3f5e2c.name, "番茄小说账号" + (_0x2045ff + 1) + "农场数据获取成功！🎉");
  }
  if ($request.url.match(/excitation_ad_treasure_box/)) {
    const _0x405323 = $request.url.split("?")[1];
    const _0x34bf3e = JSON.stringify($request.headers);
    let _0x457fef = _0x6cce26 - 1;
    if (_0x4c6aec[_0x457fef]) {
      _0x4c6aec[_0x457fef].ad_url = _0x405323;
      _0x4c6aec[_0x457fef].ad_headers = _0x34bf3e;
    } else {
      const _0x1ea845 = {
        ad_url: _0x405323,
        ad_headers: _0x34bf3e
      };
      _0x4c6aec[_0x457fef] = _0x1ea845;
    }
    _0x3f5e2c.setdata(JSON.stringify(_0x4c6aec, null, 2), "fqxsapp");
    _0x3f5e2c.msg(_0x3f5e2c.name, "番茄小说账号" + (_0x457fef + 1) + "广告数据获取成功！🎉");
  }
}
async function _0x2e58b7() {
  return new Promise(_0x4402bd => {
    const _0xbfc879 = {
      url: "https://" + _0x17f1fd.fqxs_host + "/luckycat/novel/v1/task/list?" + _0x17f1fd.fqxs_url + "polaris_page=client_task_page",
      headers: JSON.parse(_0x17f1fd.fqxs_headers)
    };
    _0x3f5e2c.get(_0xbfc879, async (_0x58a707, _0x5167dc, _0x7e6509) => {
      try {
        if (_0x58a707) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0x58a707));
          _0x3f5e2c.logErr(_0x58a707);
        } else {
          const _0x1b4de5 = JSON.parse(_0x7e6509);
          let _0x62cbe4 = _0x1b4de5.data.task_list.daily.find(_0x19cb77 => _0x19cb77.task_id === 1012);
          if (!_0x62cbe4.completed) {
            no = 180;
          }
          label = _0x62cbe4.name;
          let _0x33ee6c = _0x1b4de5.data.task_list.daily.find(_0xd6e704 => _0xd6e704.task_id === 1011);
          if (!_0x33ee6c.completed) {
            no = 120;
          }
          label = _0x33ee6c.name;
          let _0x27a04a = _0x1b4de5.data.task_list.daily.find(_0x3bb80a => _0x3bb80a.task_id === 1010);
          if (!_0x27a04a.completed) {
            no = 60;
          }
          label = _0x27a04a.name;
          let _0x24fb40 = _0x1b4de5.data.task_list.daily.find(_0x3ee5a4 => _0x3ee5a4.task_id === 1009);
          if (!_0x24fb40.completed) {
            no = 30;
          }
          label = _0x24fb40.name;
          let _0x3ddceb = _0x1b4de5.data.task_list.daily.find(_0x385a77 => _0x385a77.task_id === 1003);
          if (!_0x3ddceb.completed) {
            no = 10;
          }
          label = _0x3ddceb.name;
          let _0x2f2d5b = _0x1b4de5.data.task_list.daily.find(_0x44d4ed => _0x44d4ed.task_id === 1006);
          if (!_0x2f2d5b.completed) {
            no = 5;
            label = _0x2f2d5b.name;
            await _0x2a7e16();
            await _0x3f5e2c.wait(_0x2973f3(35000, 55000));
            await _0xc0a0cb();
            await _0x3f5e2c.wait(_0x2973f3(35000, 55000));
            await _0xc0a0cb();
            await _0x3f5e2c.wait(_0x2973f3(35000, 55000));
            await _0xc0a0cb();
            await _0x3f5e2c.wait(_0x2973f3(35000, 55000));
            await _0xc0a0cb();
            await _0x3f5e2c.wait(_0x2973f3(35000, 55000));
            await _0xc0a0cb();
          }
          if (_0x62cbe4.completed && _0x33ee6c.completed && _0x33ee6c.completed && _0x27a04a.completed && _0x24fb40.completed && _0x3ddceb.completed && _0x2f2d5b.completed) {
            console.log("阅读任务已经完成\n");
            _0x47e191 += "阅读任务已经完成\n";
          } else {
            _0x3f5e2c.log("开始阅读任务\n");
            await _0xc45aa9();
          }
          let _0x56f3e7 = _0x1b4de5.data.task_list.daily.find(_0x41648c => _0x41648c.task_id === 111);
          let _0x490980 = _0x56f3e7.completed;
          console.log("开始视频任务\n视频任务进度：" + _0x56f3e7.desc);
          if (!_0x490980) {
            await _0x50d733();
          }
          await _0x3f5e2c.wait(15000);
        }
      } catch (_0xbdbebb) {
        _0x3f5e2c.logErr(_0xbdbebb, _0x5167dc);
      } finally {
        _0x4402bd();
      }
    });
  });
}
async function _0x5905c3() {
  return new Promise(_0x8c7580 => {
    const _0x59a64e = {
      url: "https://" + _0x17f1fd.fqxs_host + "/novel/userapi/user_info/v1/?" + _0x17f1fd.fqxs_url,
      headers: JSON.parse(_0x17f1fd.fqxs_headers)
    };
    _0x3f5e2c.get(_0x59a64e, async (_0xd294da, _0x2ea284, _0x53d481) => {
      try {
        if (_0xd294da) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0xd294da));
          _0x3f5e2c.logErr(_0xd294da);
        } else {
          const _0x23bda4 = JSON.parse(_0x53d481);
          if (_0x23bda4.code == 0) {
            _0x3f5e2c.log("【用户名】: " + _0x23bda4.data.user_profile.username);
            _0x13425d += "\n【用户名】：" + _0x23bda4.data.user_profile.username + "\n";
          }
        }
      } catch (_0x4cf15a) {
        _0x3f5e2c.logErr(_0x4cf15a, _0x2ea284);
      } finally {
        _0x8c7580();
      }
    });
  });
}
async function _0x5e2450() {
  return new Promise(_0x31fdab => {
    const _0x579de5 = {
      url: "https://" + _0x17f1fd.fqxs_host + "/luckycat/novel/v1/user/info?" + _0x17f1fd.fqxs_url,
      headers: JSON.parse(_0x17f1fd.fqxs_headers)
    };
    _0x3f5e2c.get(_0x579de5, async (_0xc0b41b, _0x4a11c2, _0x360c11) => {
      try {
        if (_0xc0b41b) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0xc0b41b));
          _0x3f5e2c.logErr(_0xc0b41b);
        } else {
          const _0x28a1ca = JSON.parse(_0x360c11);
          if (_0x28a1ca.err_no == 0) {
            const _0x5b6cdf = _0x28a1ca.data.income_info_list.find(_0x321083 => _0x321083.key == "cash");
            const _0x28bf9a = _0x28a1ca.data.income_info_list.find(_0x34d366 => _0x34d366.key == "score");
            _0x3f5e2c.log("【今日番茄】: " + _0x28bf9a.amount);
            _0x13425d += "【今日番茄】：" + _0x28bf9a.amount + "\n";
            _0x3f5e2c.log("【当前金额】: " + _0x5b6cdf.amount / 100 + "元");
            _0x13425d += "【当前金额】：" + _0x5b6cdf.amount / 100 + "元\n";
          }
        }
      } catch (_0x341160) {
        _0x3f5e2c.logErr(_0x341160, _0x4a11c2);
      } finally {
        _0x31fdab();
      }
    });
  });
}
async function _0x2a7e16() {
  return new Promise(_0x57eaab => {
    const _0x2fdda3 = {
      url: "https://" + _0x17f1fd.fqxs_host + "/luckycat/novel/v1/task/done/sign_in?" + _0x17f1fd.fqxs_url,
      headers: JSON.parse(_0x17f1fd.fqxs_headers),
      body: "{}"
    };
    _0x3f5e2c.post(_0x2fdda3, async (_0x373862, _0x33d4ca, _0x6d6806) => {
      try {
        if (_0x373862) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0x373862));
          _0x3f5e2c.logErr(_0x373862);
        } else {
          const _0x1c852a = JSON.parse(_0x6d6806);
          if (_0x1c852a.err_no == 0) {
            console.log("签到成功" + _0x1c852a.err_tips + "获得" + _0x1c852a.data.amount + "🍅");
            _0x13425d += _0x1c852a.err_tips + "签到成功获得" + _0x1c852a.data.amount + "🍅\n";
          } else {
            console.log("签到任务：" + _0x1c852a.err_tips);
            _0x13425d += "签到任务：" + _0x1c852a.err_tips + "\n";
            console.log("\n请稍后再试，等几个小时之后试试就好了\n");
          }
        }
      } catch (_0x259c75) {
        _0x3f5e2c.logErr(_0x259c75, _0x33d4ca);
      } finally {
        _0x57eaab();
      }
    });
  });
}
async function _0xc0a0cb() {
  return new Promise(_0x535309 => {
    const _0x3ddb85 = {
      "X-SS-Cookie": "" + JSON.parse(_0x17f1fd.ad_headers)["X-SS-Cookie"],
      "x-Tt-Token": "" + JSON.parse(_0x17f1fd.fqxs_headers)["x-Tt-Token"],
      Cookie: "" + JSON.parse(_0x17f1fd.fqxs_headers).Cookie,
      "User-Agent": "" + JSON.parse(_0x17f1fd.fqxs_headers)["User-Agent"],
      Host: "" + JSON.parse(_0x17f1fd.fqxs_headers).Host,
      Connection: "keep-alive",
      "Accept-Encoding": "gzip, deflate",
      "sdk-version": "2",
      "Content-Type": "application/json; encoding=utf-8",
      "passport-sdk-version": "5.12.1",
      Accept: "application/json"
    };
    const _0x58aaf1 = {
      url: "https://" + _0x17f1fd.fqxs_host + "/luckycat/novel/v1/task/done/excitation_ad_signin?" + _0x17f1fd.fqxs_url,
      headers: _0x3ddb85,
      body: "{\n            \"from\": \"excitation_ad_signin\"\n          }"
    };
    _0x3f5e2c.post(_0x58aaf1, async (_0xb727a9, _0x4000d6, _0x15b9f4) => {
      try {
        if (_0xb727a9) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0xb727a9));
          _0x3f5e2c.logErr(_0xb727a9);
        } else {
          const _0x4fb8d3 = JSON.parse(_0x15b9f4);
          if (_0x4fb8d3.err_no == 0) {
            console.log("\n签到广告任务：" + _0x4fb8d3.err_tips + "获得" + _0x4fb8d3.data.amount + "🍅");
            _0x13425d += "\n签到广告任务：" + _0x4fb8d3.err_tips + "获得" + _0x4fb8d3.data.amount + "🍅";
          } else {
            console.log("\n签到广告任务：" + _0x4fb8d3.err_tips);
            _0x13425d += "\n签到广告任务：" + _0x4fb8d3.err_tips + "\n";
            console.log("\n请稍后再试，等几个小时之后试试就好了.");
            note = "\n请稍后再试，等几个小时之后试试就好了.";
          }
        }
      } catch (_0x4168d6) {
        _0x3f5e2c.logErr(_0x4168d6, _0x4000d6);
      } finally {
        _0x535309();
      }
    });
  });
}
async function _0xc45aa9() {
  return new Promise(_0x47ada3 => {
    const _0x1d80fd = {
      url: "https://" + _0x17f1fd.fqxs_host + "/luckycat/novel/v1/task/done/daily_read_" + no + "m?" + _0x17f1fd.fqxs_url,
      headers: JSON.parse(_0x17f1fd.fqxs_headers),
      body: "{\n            \"new_bookshelf\" : true,\n            \"task_key\" : \"daily_read_" + no + "m\"\n          }"
    };
    _0x3f5e2c.post(_0x1d80fd, async (_0x4302ca, _0x598837, _0x56ae2b) => {
      try {
        if (_0x4302ca) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0x4302ca));
          _0x3f5e2c.logErr(_0x4302ca);
        } else {
          const _0x4a826f = JSON.parse(_0x56ae2b);
          if (_0x4a826f.err_no == 0) {
            console.log("" + label + _0x4a826f.err_tips + "获得" + _0x4a826f.data.amount + "🍅\n");
            _0x13425d += "" + label + _0x4a826f.err_tips + "获得" + _0x4a826f.data.amount + "🍅\n";
          } else {
            console.log("阅读任务：" + _0x4a826f.err_tips);
            _0x13425d += "阅读任务：" + _0x4a826f.err_tips + "\n";
            console.log("\n请稍后再试，等几个小时之后试试就好了\n");
          }
        }
      } catch (_0x25b588) {
        _0x3f5e2c.logErr(_0x25b588, _0x598837);
      } finally {
        _0x47ada3();
      }
    });
  });
}
async function _0x50d733() {
  return new Promise(_0x27e555 => {
    const _0x3e3a5c = {
      "X-SS-Cookie": "" + JSON.parse(_0x17f1fd.ad_headers)["X-SS-Cookie"],
      "x-Tt-Token": "" + JSON.parse(_0x17f1fd.fqxs_headers)["x-Tt-Token"],
      Cookie: "" + JSON.parse(_0x17f1fd.fqxs_headers).Cookie,
      "User-Agent": "" + JSON.parse(_0x17f1fd.fqxs_headers)["User-Agent"],
      Host: "" + JSON.parse(_0x17f1fd.fqxs_headers).Host,
      Connection: "keep-alive",
      "Accept-Encoding": "gzip, deflate",
      "sdk-version": "2",
      "Content-Type": "application/json; encoding=utf-8",
      "passport-sdk-version": "5.12.1",
      Accept: "application/json"
    };
    const _0x18c08b = {
      url: "https://" + _0x17f1fd.fqxs_host + "/luckycat/novel/v1/task/done/excitation_ad?" + _0x17f1fd.fqxs_url,
      headers: _0x3e3a5c,
      body: "{\n    \"new_bookshelf\" : true,\n    \"task_key\" : \"excitation_ad_read\"\n  }"
    };
    _0x3f5e2c.post(_0x18c08b, async (_0x5e2446, _0x436ac8, _0x5066b8) => {
      try {
        if (_0x5e2446) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0x5e2446));
          _0x3f5e2c.logErr(_0x5e2446);
        } else {
          const _0x43aa33 = JSON.parse(_0x5066b8);
          if (_0x43aa33.err_no == 0) {
            console.log("视频任务：" + _0x43aa33.err_tips + "获得" + _0x43aa33.data.amount + "🍅");
            _0x13425d += "视频任务：" + _0x43aa33.err_tips + "获得" + _0x43aa33.data.amount + "🍅";
          } else {
            console.log("视频任务：" + _0x43aa33.err_tips);
            _0x13425d += "视频任务：" + _0x43aa33.err_tips + "\n";
            console.log("\n请稍后再试，等几个小时之后试试就好了.");
            note = "\n请稍后再试，等几个小时之后试试就好了.";
          }
        }
      } catch (_0x17fa85) {
        _0x3f5e2c.logErr(_0x17fa85, _0x436ac8);
      } finally {
        _0x27e555();
      }
    });
  });
}
async function _0x22f288() {
  return new Promise(_0x1ad929 => {
    const _0x5c72c6 = {
      url: "https://" + _0x17f1fd.fqxs_host + "/luckycat/novel/v1/task/done/treasure_task?&_request_from=web&" + _0x17f1fd.fqxs_url,
      headers: JSON.parse(_0x17f1fd.fqxs_headers),
      body: "{}"
    };
    _0x3f5e2c.post(_0x5c72c6, async (_0x55110c, _0x1e0ea4, _0x4eec2b) => {
      try {
        if (_0x55110c) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0x55110c));
          _0x3f5e2c.logErr(_0x55110c);
        } else {
          const _0x3dfceb = JSON.parse(_0x4eec2b);
          if (_0x3dfceb.err_no == 0) {
            console.log("宝箱任务：" + _0x3dfceb.err_tips + "获得" + _0x3dfceb.data.amount + "🍅");
            _0x13425d += "宝箱任务：" + _0x3dfceb.err_tips + "获得" + _0x3dfceb.data.amount + "🍅";
          } else {
            console.log("宝箱任务：" + _0x3dfceb.err_tips);
            _0x13425d += "宝箱任务：" + _0x3dfceb.err_tips + "\n";
            console.log("\n请稍后再试，等几个小时之后试试就好了.");
            note = "\n请稍后再试，等几个小时之后试试就好了.";
          }
        }
      } catch (_0x511a95) {
        _0x3f5e2c.logErr(_0x511a95, _0x1e0ea4);
      } finally {
        _0x1ad929();
      }
    });
  });
}
async function _0x373d89() {
  return new Promise(_0x1396cd => {
    const _0x25dc3a = {
      "X-SS-Cookie": "" + JSON.parse(_0x17f1fd.ad_headers)["X-SS-Cookie"],
      "x-Tt-Token": "" + JSON.parse(_0x17f1fd.fqxs_headers)["x-Tt-Token"],
      Cookie: "" + JSON.parse(_0x17f1fd.fqxs_headers).Cookie,
      "User-Agent": "" + JSON.parse(_0x17f1fd.fqxs_headers)["User-Agent"],
      Host: "" + JSON.parse(_0x17f1fd.fqxs_headers).Host,
      Connection: "keep-alive",
      "Accept-Encoding": "gzip, deflate",
      "sdk-version": "2",
      "Content-Type": "application/json; encoding=utf-8",
      "passport-sdk-version": "5.12.1",
      Accept: "application/json"
    };
    const _0x3f05d0 = {
      url: "https://" + _0x17f1fd.fqxs_host + "/luckycat/novel/v1/task/done/excitation_ad_treasure_box?" + _0x17f1fd.fqxs_url,
      headers: _0x25dc3a,
      body: "{\n            \"new_bookshelf\": true,\n            \"task_key\": \"excitation_ad_treasure_box\"\n          }"
    };
    _0x3f5e2c.post(_0x3f05d0, async (_0x45802f, _0x2aef8f, _0x4114a9) => {
      try {
        if (_0x45802f) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0x45802f));
          _0x3f5e2c.logErr(_0x45802f);
        } else {
          const _0xd9a2bd = JSON.parse(_0x4114a9);
          if (_0xd9a2bd.err_no == 0) {
            console.log("广告任务：" + _0xd9a2bd.err_tips + "获得" + _0xd9a2bd.data.amount + "🍅");
            _0x13425d += "广告任务：" + _0xd9a2bd.err_tips + "获得" + _0xd9a2bd.data.amount + "🍅";
          } else {
            console.log("广告任务：" + _0xd9a2bd.err_tips);
            _0x13425d += "广告任务：" + _0xd9a2bd.err_tips + "\n";
            console.log("\n请稍后再试，等几个小时之后试试就好了.");
            note = "\n请稍后再试，等几个小时之后试试就好了.";
          }
        }
      } catch (_0x3a6f53) {
        _0x3f5e2c.logErr(_0x3a6f53, _0x2aef8f);
      } finally {
        _0x1396cd();
      }
    });
  });
}
async function _0x467191() {
  return new Promise(_0x36fe7a => {
    const _0x52e8ba = {
      url: "https://" + _0x17f1fd.fqxs_host + "/reading/user/info/v:version/?" + _0x17f1fd.fqxs_url,
      headers: JSON.parse(_0x17f1fd.fqxs_headers)
    };
    _0x3f5e2c.get(_0x52e8ba, async (_0x30a6a5, _0x1a091a, _0x4c1021) => {
      try {
        if (_0x30a6a5) {
          console.log("⛔️API查询请求失败❌ ‼️‼️");
          console.log(JSON.stringify(_0x30a6a5));
          _0x3f5e2c.logErr(_0x30a6a5);
        } else {
          const _0x54f443 = JSON.parse(_0x4c1021);
          _0x13425d += "\n用户名: " + _0x54f443.data.user_name + "\n";
        }
      } catch (_0x323320) {
        _0x3f5e2c.logErr(_0x323320, _0x1a091a);
      } finally {
        _0x36fe7a();
      }
    });
  });
}
function _0x198923() {
  return new Promise((_0x417027, _0x40ba38) => {
    const _0x72f187 = {
      invite_code: "V64538538"
    };
    const _0x477aac = {
      url: "https://" + _0x17f1fd.fqxs_host + "/luckycat/novel/v1/task/done/post_invite_code?" + _0x17f1fd.fqxs_url,
      headers: JSON.parse(_0x17f1fd.fqxs_headers),
      body: JSON.stringify(_0x72f187)
    };
    _0x3f5e2c.post(_0x477aac, (_0x4f0935, _0x3acff9, _0x256c22) => {
      const _0x28335a = JSON.parse(_0x256c22);
      if (_0x28335a.err_no == 0) {
        _0x3f5e2c.log("感谢你的支持！");
      }
      _0x417027();
    });
  });
}
function _0x4c45bb(_0x3a8370, _0x3e2a0d, _0x5ae6d4) {
  return new Promise((_0x1dffb7, _0x53f93b) => {
    const _0x49a2f9 = _0x417c05 + "/script/permissions/lastest";
    const _0x421c58 = {
      appName: _0x3a8370,
      userId: _0x3e2a0d,
      activityCode: _0x5ae6d4,
      version: _0x394304
    };
    const _0x4a89b0 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x333867 = {
      url: _0x49a2f9,
      headers: _0x4a89b0,
      body: JSON.stringify(_0x421c58)
    };
    _0x3f5e2c.post(_0x333867, async (_0x25d164, _0x2fa6c9, _0x41e4b0) => {
      const _0x364506 = _0x41e4b0.replace(/\"/g, "").slice(34);
      const _0x36751a = new _0x699433();
      result = JSON.parse(_0x36751a.decode(_0x364506));
      try {
        _0x421b53 = result.version;
        _0xc201f9 = result.userAuth;
        _0x21e8f = result.scriptAuth;
        _0x3ae480 = result.runAuth;
        _0x1d0a63 = result.notify;
        _0x24f30f = result.vipAuth;
        _0xc15cb = result.isCharge;
        _0x2bafd5 = result.runAcounts;
        _0x2f17f8 = result.buyCount;
        _0x40cf73 = result.runedCounts;
        _0x22accd = result.runTotalCounts;
        _0x448001 = result.userRank;
      } catch (_0x182dee) {
        _0x3f5e2c.log(_0x182dee);
      }
      _0x1dffb7();
    });
  });
}
function _0x4176b7(_0xa15200, _0xbadf67) {
  return new Promise((_0x4561ff, _0x461a6d) => {
    const _0x5b31f1 = _0x417c05 + "/script/run/add";
    const _0x4fe525 = {
      appName: _0xa15200,
      userId: _0xbadf67,
      activityCode: _0x87dac0,
      version: _0x394304
    };
    const _0x19303a = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x295fd7 = {
      url: _0x5b31f1,
      headers: _0x19303a,
      body: JSON.stringify(_0x4fe525)
    };
    _0x3f5e2c.post(_0x295fd7, async (_0x4399e4, _0x57ce97, _0x24a59f) => {
      _0x4561ff();
    });
  });
}
async function _0x1d06cb() {
  let _0x1ea072 = _0x1f4225();
  let _0x2f04ba = _0x21e216 + "/ttgame/game_farm/polling_info?" + _0x17f1fd.fqxs_url;
  let _0x427b3e = _0x3fab74(_0x2f04ba);
  await _0x567fb7(_0x427b3e, _0x1ea072);
  let _0x455d43 = httpResult;
  if (!_0x455d43) {
    return;
  }
  if (_0x455d43.status_code == 0) {
    if (_0x455d43.data.info.offline_production) {
      await _0x209646();
    }
    if (_0x455d43.data.info.water >= 10) {
      await _0x1aea08();
    }
    if (_0x455d43.data.info.box_num > 0) {
      await _0x338110();
    }
  } else {
    console.log("用户查询农场状态失败：" + _0x455d43.message);
  }
}
async function _0x209646() {
  let _0x220e9f = _0x1f4225();
  let _0x5a0974 = _0x21e216 + "/ttgame/game_farm/double_reward?watch_ad=1&" + _0x17f1fd.fqxs_url;
  let _0x4542e5 = _0x3fab74(_0x5a0974);
  await _0x567fb7(_0x4542e5, _0x220e9f);
  let _0x4d4699 = httpResult;
  if (!_0x4d4699) {
    return;
  }
  if (_0x4d4699.status_code == 0) {
    console.log("用户农场离线产量翻倍成功");
  } else {
    console.log("用户农场离线产量翻倍失败：" + _0x4d4699.message);
  }
}
async function _0x1bec30(_0x7b4058) {
  let _0xaef295 = _0x1f4225();
  let _0x578647 = _0x21e216 + "/ttgame/game_farm/reward/gift?gift_id=" + _0x7b4058 + "&watch_ad=0&double=0&" + _0x17f1fd.fqxs_url;
  let _0x4237f2 = _0x3fab74(_0x578647);
  await _0x567fb7(_0x4237f2, _0xaef295);
  let _0x150e5a = httpResult;
  if (!_0x150e5a) {
    return;
  }
  if (_0x150e5a.status_code == 0) {
    console.log("用户领取农场三餐礼包获得" + _0x150e5a.data.reward_num + "水滴");
  } else {
    console.log("用户领取农场三餐礼包失败：" + _0x150e5a.message);
  }
}
async function _0xa4d01f() {
  let _0x76b1d4 = _0x1f4225();
  let _0x2fd5f6 = _0x21e216 + "/ttgame/game_farm/gift/list?" + _0x17f1fd.fqxs_url + " ";
  let _0x1b071a = _0x3fab74(_0x2fd5f6);
  await _0x567fb7(_0x1b071a, _0x76b1d4);
  let _0x2d908e = httpResult;
  if (!_0x2d908e) {
    return;
  }
  if (_0x2d908e.status_code == 0) {
    for (let _0x4d33b9 of _0x2d908e.data) {
      if (_0x4d33b9.status == 1) {
        await _0x1bec30(_0x4d33b9.gift_id);
      }
    }
  } else {
    console.log("用户查询农场三餐礼包状态失败：" + _0x2d908e.message);
  }
}
async function _0x2f0a80() {
  let _0x3bb037 = _0x1f4225();
  let _0x40e802 = _0x21e216 + "/ttgame/game_farm/daily_task/list?" + _0x17f1fd.fqxs_url;
  let _0x1ce3ae = _0x3fab74(_0x40e802);
  await _0x567fb7(_0x1ce3ae, _0x3bb037);
  let _0x4b6137 = httpResult;
  if (!_0x4b6137) {
    return;
  }
  if (_0x4b6137.status_code == 0) {
    for (let _0xe5e551 of _0x4b6137.data) {
      if (_0xe5e551.status == 1) {
        await _0x59478b(_0xe5e551.task_id);
      }
    }
  } else {
    console.log("用户查询农场任务列表失败：" + _0x4b6137.message);
  }
}
async function _0x59478b(_0x38174c) {
  let _0x21cc80 = _0x1f4225();
  let _0x16c502 = _0x21e216 + "/ttgame/game_farm/reward/task?task_id=" + _0x38174c + "&" + _0x17f1fd.fqxs_url;
  let _0x121584 = _0x3fab74(_0x16c502);
  await _0x567fb7(_0x121584, _0x21cc80);
  let _0x1573fc = httpResult;
  if (!_0x1573fc) {
    return;
  }
  if (_0x1573fc.status_code == 0) {
    let _0x3befa6 = _0x1573fc.data.reward_type == 1 ? "水滴" : "化肥";
    console.log("用户领取农场任务奖励[task_id=" + _0x1573fc.data.task_id + "]获得" + _0x1573fc.data.reward_num + _0x3befa6 + "，剩余" + _0x3befa6 + "数量" + _0x1573fc.data.current_num);
  } else {
    console.log("用户领取农场任务奖励失败：" + _0x1573fc.message);
  }
}
async function _0x1aea08() {
  let _0x354789 = _0x1f4225();
  let _0x11179a = _0x21e216 + "/ttgame/game_farm/land_water?tentimes=0&fivetimes=0&" + _0x17f1fd.fqxs_url;
  let _0x1fecd2 = _0x3fab74(_0x11179a);
  await _0x567fb7(_0x1fecd2, _0x354789);
  let _0x2a1f3b = httpResult;
  if (!_0x2a1f3b) {
    return;
  }
  if (_0x2a1f3b.status_code == 0) {
    console.log("用户农场浇水成功，剩余水滴：" + _0x2a1f3b.data.water);
    if (_0x2a1f3b.data.water >= 10) {
      await _0x3f5e2c.wait(1500);
      await _0x1aea08();
    }
  } else {
    console.log("用户农场浇水失败：" + _0x2a1f3b.message);
  }
}
async function _0x338110() {
  let _0xb60bde = _0x1f4225();
  let _0x20fdd2 = _0x21e216 + "/ttgame/game_farm/box/open?" + _0x17f1fd.fqxs_url;
  let _0x4d0dda = _0x3fab74(_0x20fdd2);
  await _0x567fb7(_0x4d0dda, _0xb60bde);
  let _0x5c2c5d = httpResult;
  if (!_0x5c2c5d) {
    return;
  }
  if (_0x5c2c5d.status_code == 0) {
    console.log("用户开农场宝箱获得" + _0x5c2c5d.data.incr_coin + "金币");
    if (_0x5c2c5d.data.excitation_ad_score_amount > 0) {
      await _0x48e095();
    }
  } else {
    console.log("用户开农场宝箱失败：" + _0x5c2c5d.message);
  }
}
async function _0x48e095() {
  let _0x5b3e7b = _0x1f4225();
  let _0x4e6c1f = _0x21e216 + "/ttgame/game_farm/excitation_ad/add?excitation_ad_score_amount=134&" + _0x17f1fd.fqxs_url;
  let _0x59fb53 = _0x3fab74(_0x4e6c1f);
  await _0x567fb7(_0x59fb53, _0x5b3e7b);
  let _0x83fcd2 = httpResult;
  if (!_0x83fcd2) {
    return;
  }
  if (_0x83fcd2.status_code == 0) {
    console.log("用户看农场宝箱视频获得" + _0x83fcd2.data.incr_coin + "金币");
  } else {
    console.log("用户看农场宝箱视频失败：" + _0x83fcd2.message);
  }
}
async function _0x5e5b0e() {
  let _0x5703f1 = _0x1f4225();
  let _0x210f31 = _0x21e216 + "/ttgame/game_farm/sign_in/list?" + _0x17f1fd.fqxs_url;
  let _0x14b0ae = _0x3fab74(_0x210f31);
  await _0x567fb7(_0x14b0ae, _0x5703f1);
  let _0xc1c90d = httpResult;
  if (!_0xc1c90d) {
    return;
  }
  if (_0xc1c90d.status_code == 0) {
    for (let _0x321ac5 of _0xc1c90d.data.sign) {
      if (_0x321ac5.status == 1) {
        await _0x427cc2();
        break;
      }
    }
  } else {
    console.log("用户查询签到状态失败：" + _0xc1c90d.message);
  }
}
async function _0x427cc2() {
  let _0x3afffa = _0x1f4225();
  let _0xdd1ce3 = _0x21e216 + "/ttgame/game_farm/reward/sign_in?watch_ad=1&extra_ads_num=0&" + _0x17f1fd.fqxs_url;
  let _0x50476c = _0x3fab74(_0xdd1ce3);
  await _0x567fb7(_0x50476c, _0x3afffa);
  let _0x219eb2 = httpResult;
  if (!_0x219eb2) {
    return;
  }
  if (_0x219eb2.status_code == 0) {
    let _0x5458b0 = _0x219eb2.data.reward_type == 1 ? "水滴" : "化肥";
    console.log("用户签到获得" + _0x219eb2.data.reward_num + _0x5458b0 + "，剩余" + _0x5458b0 + "数量" + _0x219eb2.data.cur_reward_num);
  } else {
    console.log("用户签到失败：" + _0x219eb2.message);
  }
}
async function _0x4fac2c() {
  let _0x497b65 = _0x1f4225();
  let _0x4ec720 = _0x21e216 + "/ttgame/game_farm/reward/double_sign_in?watch_ad=1&extra_ads_num=0&" + _0x17f1fd.fqxs_url;
  let _0x47d896 = _0x3fab74(_0x4ec720);
  await _0x567fb7(_0x47d896, _0x497b65);
  let _0x246d31 = httpResult;
  if (!_0x246d31) {
    return;
  }
  if (_0x246d31.status_code == 0) {
    let _0x5900af = _0x246d31.data.reward_type == 1 ? "水滴" : "化肥";
    console.log("用户签到翻倍获得" + _0x246d31.data.reward_num + "{str}，剩余" + _0x5900af + "数量" + _0x246d31.data.cur_reward_num);
  } else {
    console.log("用户签到翻倍失败：" + _0x246d31.message);
  }
}
async function _0x163d4a() {
  let _0x33fddd = _0x1f4225();
  let _0x1c07cb = _0x21e216 + "/ttgame/game_farm/home_info?aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2";
  let _0x3bd7b6 = _0x3fab74(_0x1c07cb);
  await _0x567fb7(_0x3bd7b6, _0x33fddd);
  let _0x4511a3 = httpResult;
  if (!_0x4511a3) {
    return;
  }
  if (_0x4511a3.status_code == 0) {
    for (let _0x55c1b8 of _0x4511a3.data.info.lands) {
      if (_0x55c1b8.status == false && _0x55c1b8.unlock_able == true) {
        await _0x2b3736(_0x55c1b8.land_id);
        break;
      }
    }
  } else {
    console.log("用户查询土地状态失败：" + _0x4511a3.message);
  }
}
async function _0x2b3736(_0x283005) {
  let _0x5067aa = _0x1f4225();
  let _0x9514e9 = _0x21e216 + "/ttgame/game_farm/land/unlock?land_id=" + _0x283005 + "&aid=35&update_version_code=85221&device_platform=iphone&&device_type=iPhone13,2";
  let _0x1e686b = _0x3fab74(_0x9514e9);
  await _0x567fb7(_0x1e686b, _0x5067aa);
  let _0x344e96 = httpResult;
  if (!_0x344e96) {
    return;
  }
  if (_0x344e96.status_code == 0) {
    console.log("用户解锁" + _0x283005 + "号土地成功");
  } else {
    console.log("用户解锁" + _0x283005 + "号土地失败：" + _0x344e96.message);
  }
}
async function _0x599148() {
  let _0x24c223 = _0x1f4225();
  let _0x2839e1 = _0x21e216 + "/ttgame/game_orchard/home_info?" + _0x17f1fd.fqxs_url;
  let _0x233c1c = _0x3fab74(_0x2839e1);
  await _0x567fb7(_0x233c1c, _0x24c223);
  let _0x2bf8c8 = httpResult;
  if (!_0x2bf8c8) {
    return;
  }
  if (_0x2bf8c8.status_code == 0) {
    if (_0x2bf8c8.data.tree_status == 0) {
      await _0x48af2a();
    }
    if (_0x2bf8c8.data.tree_status == 6) {
      await _0xa94523();
      await _0x48af2a();
    }
    if (_0x2bf8c8.data.info.nutrient < 12) {
      await _0x34a99();
    }
  } else {
    console.log("[账号" + (i + 1) + "]: 查询种树签到状态失败：" + _0x2bf8c8.message);
  }
}
async function _0x34a99() {
  let _0x31d749 = _0x1f4225();
  let _0x850538 = _0x21e216 + "/ttgame/game_orchard/use/fertilizer?fertilizer_type=4" + _0x17f1fd.fqxs_url;
  let _0x4138c0 = _0x3fab74(_0x850538);
  await _0x567fb7(_0x4138c0, _0x31d749);
  let _0x15b9de = httpResult;
  if (!_0x15b9de) {
    return;
  }
  if (_0x15b9de.status_code == 0) {
    console.log("成功施肥");
  } else {
    console.log("施肥失败：" + _0x15b9de.message);
  }
}
async function _0xa94523() {
  let _0x26f96b = _0x1f4225();
  let _0x2beea1 = _0x21e216 + "/ttgame/game_orchard/harvest/fortune_tree?" + _0x17f1fd.fqxs_url;
  let _0x2b839a = _0x3fab74(_0x2beea1);
  await _0x567fb7(_0x2b839a, _0x26f96b);
  let _0x58f96a = httpResult;
  if (!_0x58f96a) {
    return;
  }
  if (_0x58f96a.status_code == 0) {
    console.log("收获成功");
  } else {
    console.log("收树失败：" + _0x58f96a.message);
  }
}
async function _0x48af2a() {
  let _0x32cf40 = _0x1f4225();
  let _0x15dd06 = _0x21e216 + "/ttgame/game_orchard/choose/fruit?fruit_id=666&" + _0x17f1fd.fqxs_url;
  let _0x3fb245 = _0x3fab74(_0x15dd06);
  await _0x567fb7(_0x3fb245, _0x32cf40);
  let _0x531982 = httpResult;
  if (!_0x531982) {
    return;
  }
  if (_0x531982.status_code == 0) {
    console.log("种树成功");
  } else {
    console.log("种树失败：" + _0x531982.message);
  }
}
async function _0x12cf25() {
  let _0x3d0de2 = _0x1f4225();
  let _0x2b99ef = _0x21e216 + "/ttgame/game_orchard/sign_in/list?" + _0x17f1fd.fqxs_url;
  let _0x1a4cd5 = _0x3fab74(_0x2b99ef);
  await _0x567fb7(_0x1a4cd5, _0x3d0de2);
  let _0x5b197b = httpResult;
  if (!_0x5b197b) {
    return;
  }
  if (_0x5b197b.status_code == 0) {
    if (_0x5b197b.data.today == false) {
      await _0x58c2b2();
    }
  } else {
    console.log("用户查询种树签到状态失败：" + _0x5b197b.message);
  }
}
async function _0x58c2b2() {
  let _0x45a7ec = _0x1f4225();
  let _0x357f3f = _0x21e216 + "/ttgame/game_orchard/sign_in/reward?watch_ad=1&extra_ad_num=0&" + _0x17f1fd.fqxs_url;
  let _0x3b3c92 = _0x3fab74(_0x357f3f);
  await _0x567fb7(_0x3b3c92, _0x45a7ec);
  let _0x4d611f = httpResult;
  if (!_0x4d611f) {
    return;
  }
  if (_0x4d611f.status_code == 0) {
    console.log("用户种树签到获得" + _0x4d611f.data.reward_item.num + _0x4d611f.data.reward_item.name);
  } else {
    console.log("用户种树签到失败：" + _0x4d611f.message);
  }
}
async function _0x17f6c3() {
  let _0x4b539a = _0x1f4225();
  let _0x1e624c = _0x21e216 + "/ttgame/game_orchard/challenge/list?" + _0x17f1fd.fqxs_url;
  let _0x5eaddf = _0x3fab74(_0x1e624c);
  await _0x567fb7(_0x5eaddf, _0x4b539a);
  let _0x43d161 = httpResult;
  if (!_0x43d161) {
    return;
  }
  if (_0x43d161.status_code == 0) {
    let _0x20f11e = 0;
    let _0xe90aaa = 0;
    for (let _0x3d84ae of _0x43d161.data.tasks) {
      if (_0x3d84ae.state == 0 && _0x3d84ae.water_times > _0xe90aaa) {
        _0xe90aaa = _0x3d84ae.water_times;
        _0x20f11e = _0x3d84ae.id;
      }
    }
    if (_0x20f11e > 0) {
      await _0x8c8650(_0x20f11e);
    }
  } else {
    console.log("用户查询挑战任务失败：" + _0x43d161.message);
  }
}
async function _0x8c8650(_0x2fd65e) {
  let _0xe8a934 = _0x1f4225();
  let _0x1e8ac3 = _0x21e216 + "/ttgame/game_orchard/challenge/choose?task_id=" + _0x2fd65e + "&" + _0x17f1fd.fqxs_url;
  let _0x110189 = _0x3fab74(_0x1e8ac3);
  await _0x567fb7(_0x110189, _0xe8a934);
  let _0x43c391 = httpResult;
  if (!_0x43c391) {
    return;
  }
  if (_0x43c391.status_code == 0) {
    console.log("用户选择浇水" + _0x43c391.data.red_point.times + "次挑战");
  } else {
    console.log("用户选择浇水挑战失败：" + _0x43c391.message);
  }
}
async function _0x408725() {
  let _0x4f58cd = _0x1f4225();
  let _0x523acb = _0x21e216 + "/ttgame/game_orchard/challenge/reward?" + _0x17f1fd.fqxs_url;
  let _0x233a3a = _0x3fab74(_0x523acb);
  await _0x567fb7(_0x233a3a, _0x4f58cd);
  let _0x35ed93 = httpResult;
  if (!_0x35ed93) {
    return;
  }
  if (_0x35ed93.status_code == 0) {
    console.log("用户领取浇水挑战奖励获得" + _0x35ed93.data.reward_item.num + "水滴");
  } else {
    console.log("用户领取浇水挑战奖励失败：" + _0x35ed93.message);
  }
}
async function _0x45c2d9() {
  let _0x46fe0e = _0x1f4225();
  let _0x30c056 = _0x21e216 + "/ttgame/game_orchard/nutrient/list?version=13&address_book_authorized=0&" + _0x17f1fd.fqxs_url;
  let _0x2cc75a = _0x3fab74(_0x30c056);
  await _0x567fb7(_0x2cc75a, _0x46fe0e);
  let _0x16e403 = httpResult;
  if (!_0x16e403) {
    return;
  }
  if (_0x16e403.status_code == 0) {
    if (_0x16e403.data.sign.reward_item.state == 3) {
      await _0x593c82();
    }
  } else {
    console.log("用户查询种树化肥签到状态失败：" + _0x16e403.message);
  }
}
async function _0x593c82() {
  let _0x554f04 = _0x1f4225();
  let _0x12af9d = _0x21e216 + "/ttgame/game_orchard/nutrient/sign_in?" + _0x17f1fd.fqxs_url;
  let _0x483a86 = _0x3fab74(_0x12af9d);
  await _0x567fb7(_0x483a86, _0x554f04);
  let _0x2e8a36 = httpResult;
  if (!_0x2e8a36) {
    return;
  }
  if (_0x2e8a36.status_code == 0) {
    if (_0x2e8a36.data.is_rewarded == true) {
      console.log("用户种树化肥签到获得" + _0x2e8a36.data.reward_item.num + "{result.data.reward_item.name}");
    } else {
      console.log("用户种树化肥签到成功");
    }
  } else {
    console.log("用户种树化肥签到失败：" + _0x2e8a36.message);
  }
}
async function _0xd9700f(_0x317d66) {
  let _0x2f215b = _0x1f4225();
  let _0x5a3221 = _0x21e216 + "/ttgame/game_orchard/three_gift/reward?task_id=" + _0x317d66 + "&watch_ad=0&extra_ad_num=0&" + _0x17f1fd.fqxs_url;
  let _0x2677f1 = _0x3fab74(_0x5a3221);
  await _0x567fb7(_0x2677f1, _0x2f215b);
  let _0x39e2bc = httpResult;
  if (!_0x39e2bc) {
    return;
  }
  if (_0x39e2bc.status_code == 0) {
    console.log("用户领取种树三餐礼包获得" + _0x39e2bc.data.reward_item.num + _0x39e2bc.data.reward_item.name);
  } else {
    console.log("用户领取种树三餐礼包失败：" + _0x39e2bc.message);
  }
}
async function _0x170070() {
  let _0x1ec7a8 = _0x1f4225();
  let _0x57e629 = new Date();
  let _0x3fa78c = _0x57e629.getHours();
  let _0x608fb8 = _0x21e216 + "/ttgame/game_orchard/three_gift/list?" + _0x17f1fd.fqxs_url;
  let _0x452820 = _0x3fab74(_0x608fb8);
  await _0x567fb7(_0x452820, _0x1ec7a8);
  let _0x584380 = httpResult;
  if (!_0x584380) {
    return;
  }
  if (_0x584380.status_code == 0) {
    for (let _0x56c80 of _0x584380.data.gift_list) {
      if (_0x56c80.rounds == 1 && _0x3fa78c >= _0x56c80.available_time.begin && _0x3fa78c < _0x56c80.available_time.end) {
        await _0xd9700f(_0x56c80.id);
      }
    }
  } else {
    console.log("用户查询种树三餐礼包状态失败：" + _0x584380.message);
  }
}
async function _0x2e9f91() {
  let _0x359bc0 = _0x1f4225();
  let _0x31220a = _0x21e216 + "/ttgame/game_orchard/tasks/list?version=12&address_book_authorized=0&" + _0x17f1fd.fqxs_url;
  let _0x37a1c6 = _0x3fab74(_0x31220a);
  await _0x567fb7(_0x37a1c6, _0x359bc0);
  let _0x2122d3 = httpResult;
  if (!_0x2122d3) {
    return;
  }
  if (_0x2122d3.status_code == 0) {
    for (let _0x7e5acf of _0x2122d3.data.tasks_v2) {
      if (_0x7e5acf.reward_item.state <= 4 && _0x7e5acf.name !== "下单得水滴") {
        await _0x4f85b1(_0x7e5acf.id);
        await _0x3f5e2c.wait(1500);
      }
    }
  } else {
    console.log("用户查询种树水滴任务列表失败：" + _0x2122d3.message);
  }
}
async function _0x4f85b1(_0x3c597b) {
  let _0x37afcf = _0x1f4225();
  let _0xc94f43 = _0x21e216 + "/ttgame/game_orchard/tasks/reward?task_id=" + _0x3c597b + "&do_action=1&extra_ad_num=0&version=12&" + _0x17f1fd.fqxs_url;
  let _0x5d972b = _0x3fab74(_0xc94f43);
  await _0x567fb7(_0x5d972b, _0x37afcf);
  let _0x2462c7 = httpResult;
  if (!_0x2462c7) {
    return;
  }
  if (_0x2462c7.status_code == 0) {
    console.log("用户领取水滴任务[id=" + _0x3c597b + "]获得" + _0x2462c7.data.reward_item.num + _0x2462c7.data.reward_item.name);
  } else {
    console.log("用户领取水滴任务[id=" + _0x3c597b + "]失败：" + _0x2462c7.message);
  }
}
async function _0x345822() {
  let _0x263546 = _0x1f4225();
  let _0x593732 = _0x21e216 + "/ttgame/game_orchard/tree/water?version=12&" + _0x17f1fd.fqxs_url;
  let _0x47802c = _0x3fab74(_0x593732);
  await _0x567fb7(_0x47802c, _0x263546);
  let _0x25a635 = httpResult;
  if (!_0x25a635) {
    return;
  }
  if (_0x25a635.status_code == 0) {
    console.log("用户种树浇水成功，剩余水滴：" + _0x25a635.data.kettle.water_num);
    await _0x3f5e2c.wait(1500);
    await _0x345822();
  } else {
    console.log("用户种树浇水失败：" + _0x25a635.message);
  }
}
async function _0xeee14() {
  let _0x406916 = _0x1f4225();
  let _0x43408c = _0x21e216 + "/ttgame/game_orchard/polling_info?version=12&" + _0x17f1fd.fqxs_url;
  let _0x2d590e = _0x3fab74(_0x43408c);
  await _0x567fb7(_0x2d590e, _0x406916);
  let _0x278d7a = httpResult;
  if (!_0x278d7a) {
    return;
  }
  if (_0x278d7a.status_code == 0) {
    if (_0x278d7a.data.red_points.challenge && _0x278d7a.data.red_points.challenge.state == 4) {
      await _0x408725();
    }
    if (_0x278d7a.data.bottle.state == 1) {
      await _0x4eca09();
    }
    if (_0x278d7a.data.red_points.box && _0x278d7a.data.red_points.box.rounds > 0 && _0x278d7a.data.red_points.box.state == 4) {
      await _0x1d1962();
    }
    await _0x345822();
  } else {
    console.log("用户查询种树信息失败：" + _0x278d7a.message);
  }
}
async function _0x4eca09() {
  let _0x167bb = _0x1f4225();
  let _0xd61aaf = _0x21e216 + "/ttgame/game_orchard/water_bottle/reward?" + _0x17f1fd.fqxs_url;
  let _0x118c30 = _0x3fab74(_0xd61aaf);
  await _0x567fb7(_0x118c30, _0x167bb);
  let _0x82a9cc = httpResult;
  if (!_0x82a9cc) {
    return;
  }
  if (_0x82a9cc.status_code == 0) {
    console.log("用户领取种树水瓶奖励获得" + _0x82a9cc.data.reward_item.num + "水滴");
  } else {
    console.log("用户领取种树水瓶奖励失败：" + _0x82a9cc.message);
  }
}
async function _0x1d1962() {
  let _0x5564a2 = _0x1f4225();
  let _0x2998d5 = _0x21e216 + "/ttgame/game_orchard/box2/open?watch_ad=0&" + _0x17f1fd.fqxs_url;
  let _0x41d013 = _0x3fab74(_0x2998d5);
  await _0x567fb7(_0x41d013, _0x5564a2);
  let _0x544f87 = httpResult;
  if (!_0x544f87) {
    return;
  }
  if (_0x544f87.status_code == 0) {
    console.log("用户种树开宝箱获得" + _0x544f87.data.incr_coin + "金币");
  } else {
    console.log("用户种树开宝箱失败：" + _0x544f87.message);
  }
}
async function _0x2127c5() {
  let _0x1e0b65 = _0x1f4225();
  let _0x3c77f9 = _0x21e216 + "/ttgame/game_king/home_info?" + _0x17f1fd.fqxs_url;
  let _0x510dd9 = _0x3fab74(_0x3c77f9);
  await _0x567fb7(_0x510dd9, _0x1e0b65);
  let _0x61d725 = httpResult;
  if (!_0x61d725) {
    return;
  }
  if (_0x61d725.status_code == 0) {
    const _0x2bd8d9 = _0x61d725.data.info.avatar_recommend;
    const _0x5db2e3 = _0x61d725.data.info.avatar_list;
    let _0x4fd3c0 = 0;
    let _0x4f9579 = 0;
    for (let _0x19bb51 = 0; _0x19bb51 < _0x5db2e3.length; _0x19bb51++) {
      if (_0x5db2e3[_0x19bb51].empty == true) {
        await _0x2b5e2c(_0x19bb51);
        break;
      }
    }
    for (let _0x40d092 = 0; _0x40d092 < _0x5db2e3.length; _0x40d092++) {
      if (_0x40d092 == 0) {
        _0x4fd3c0 = _0x5db2e3[_0x40d092].lv;
      }
      if (_0x5db2e3[_0x40d092].empty == false) {
        _0x4f9579++;
      }
    }
    _0x3f5e2c.log("当前一共有" + _0x4f9579 + "个角色");
    _0x3f5e2c.log("当前最高级别: " + _0x4fd3c0);
    await _0x3c0d44(_0x2bd8d9.lv, 1);
  }
}
async function _0x3c0d44(_0x21831b, _0x4fdf85) {
  let _0x2951a8 = _0x1f4225();
  let _0x3dfdd0 = _0x21e216 + "/ttgame/game_king/avatar_buy?lv=" + _0x21831b + "&ad=1&is_fast_buy=" + _0x4fdf85 + _0x17f1fd.fqxs_url;
  if (_0x4fdf85 == 1) {
    _0x3dfdd0 = _0x21e216 + "/ttgame/game_king/avatar_buy?lv=" + _0x21831b + "&is_fast_buy=" + _0x4fdf85 + _0x17f1fd.fqxs_url;
  }
  let _0x23d2c1 = _0x3fab74(_0x3dfdd0);
  await _0x567fb7(_0x23d2c1, _0x2951a8);
  let _0x249f93 = httpResult;
  if (!_0x249f93) {
    return;
  }
  if (_0x249f93.status_code == 0) {
    _0x3f5e2c.log("购买成功");
    const _0x5d9cfe = _0x249f93.data.avatar_list;
    const _0x1b80ab = _0x249f93.data.avatar_recommend;
    let _0x320b30 = 0;
    for (let _0x2b4422 = 0; _0x2b4422 < _0x5d9cfe.length; _0x2b4422++) {
      const _0x106369 = _0x5d9cfe[_0x2b4422];
      if (_0x106369.empty == true) {
        _0x320b30 = _0x320b30 + 1;
      }
    }
    if (_0x320b30 > 0) {
      for (let _0x237567 = 0; _0x237567 < _0x320b30; _0x237567++) {
        if (_0x249f93.data.current_money.a * Math.pow(10, _0x249f93.data.current_money.b) >= _0x1b80ab.cost.a * Math.pow(10, _0x1b80ab.cost.b)) {
          await _0x3c0d44(_0x1b80ab.lv, 1);
        }
      }
    }
  }
}
async function _0x492be8(_0x253071, _0x15294d) {
  let _0x11c342 = _0x1f4225();
  let _0x579830 = _0x21e216 + "/ttgame/game_king/avatar_merge?position=" + _0x253071 + "&target=" + _0x15294d + "&" + _0x17f1fd.fqxs_url;
  let _0x35d799 = _0x3fab74(_0x579830);
  await _0x567fb7(_0x35d799, _0x11c342);
  let _0x36a2c1 = httpResult;
  if (!_0x36a2c1) {
    return;
  }
  _0x36a2c1.status_code == 0;
}
async function _0x101f74() {
  let _0x14733c = _0x1f4225();
  let _0xcf2145 = _0x21e216 + "/ttgame/game_king/avatar_sort?" + _0x17f1fd.fqxs_url;
  let _0x3b0635 = _0x3fab74(_0xcf2145);
  await _0x567fb7(_0x3b0635, _0x14733c);
  let _0x5b87d4 = httpResult;
  if (!_0x5b87d4) {
    return;
  }
  if (_0x5b87d4.status_code == 0) {
    _0x3f5e2c.log("开始合成...");
    const _0x2a2963 = _0x5b87d4.data.avatar_list;
    let _0x3d0937 = 0;
    for (let _0x3e4522 = 0; _0x3e4522 < _0x2a2963.length - 1; _0x3e4522++) {
      const _0x3678b4 = _0x2a2963[_0x3e4522];
      const _0x579ea9 = _0x2a2963[_0x3e4522 + 1];
      if (_0x3678b4.lv == 80 && _0x579ea9.lv == 80) {
        break;
      }
      if (_0x3678b4.empty == false && _0x579ea9.empty == false && _0x3678b4.lv == _0x579ea9.lv) {
        await _0x492be8(_0x3e4522, _0x3e4522 + 1);
        _0x3f5e2c.log("恭喜你合成一个" + (_0x3678b4.lv + 1) + "级角色");
        _0x3d0937 = _0x3d0937 + 1;
        await _0x3f5e2c.wait(800);
      }
      if (_0x3678b4.empty == true || _0x579ea9.empty == true) {
        break;
      }
      if (_0x3e4522 == _0x2a2963.length - 2 && _0x3d0937 > 0) {
        await _0x101f74();
      }
      if (_0x3d0937 == 0 && _0x3e4522 == 10 && _0x2a2963[11].empty == false) {
        await _0x3bab1f(11);
      }
    }
  }
}
async function _0x28b64a() {
  if (_0x448001 == false) {
    return;
  }
  let _0x20ccc5 = _0x1f4225();
  let _0x56730e = _0x21e216 + "/ttgame/game_king/polling_info?" + _0x17f1fd.fqxs_url;
  let _0x12260f = _0x3fab74(_0x56730e);
  await _0x567fb7(_0x12260f, _0x20ccc5);
  let _0x2e19fe = httpResult;
  if (!_0x2e19fe) {
    return;
  }
  if (_0x2e19fe.status_code == 0) {
    if (_0x2e19fe.data.info.wheel.ad_left_times > 0) {
      await _0x5cbade();
    }
    if (_0x2e19fe.data.info.bag["1001"] > 0) {
      await _0x132c2b();
    }
    if (_0x2e19fe.data.info.box_num > 0) {
      await _0x332c65();
    }
    if (_0x2e19fe.data.info.rand_event && _0x2e19fe.data.info.rand_event.event_id == 1) {
      await _0x419e8d();
    }
    if (_0x2e19fe.data.info.accelerate && _0x2e19fe.data.info.accelerate.left_times > 0) {
      await _0xdd00fd();
    }
    if (_0x2e19fe.data.info.ad_money && _0x2e19fe.data.info.ad_money.left_times > 0) {
      await _0x5dbcb4();
    }
    if (_0x2e19fe.data.info.offline_money) {
      await _0x557947();
    }
    if (_0x2e19fe.data.info.rand_question) {
      const _0x4f7ecf = _0x2e19fe.data.info.rand_question;
      for (let _0x1e61ce = 0; _0x1e61ce < _0x4f7ecf.length; _0x1e61ce++) {
        const _0x57ca42 = _0x4f7ecf[_0x1e61ce];
        const _0x42b1af = _0x57ca42.position;
        const _0x354e8b = _0x57ca42.right;
        await _0x261659(_0x354e8b, _0x42b1af);
        await _0x3f5e2c.wait(_0x2973f3(1000, 3000));
      }
    }
    if (_0x2e19fe.data.info.avatar_up) {
      const _0x50658e = _0x2e19fe.data.info.avatar_up;
      for (let _0x197f5a = 0; _0x197f5a < _0x50658e.length; _0x197f5a++) {
        const _0x157870 = _0x50658e[_0x197f5a];
        const _0x503a77 = _0x157870.position;
        await _0x14da8f(_0x503a77);
        await _0x3f5e2c.wait(_0x2973f3(1000, 3000));
      }
    }
  } else {
    console.log("查询当皇上状态失败：" + _0x2e19fe.message);
  }
}
async function _0x3bab1f(_0x343c98) {
  let _0x32a7f2 = _0x1f4225();
  let _0x475342 = _0x21e216 + "/ttgame/game_king/avatar_sell?position=" + _0x343c98 + "&" + _0x17f1fd.fqxs_url;
  let _0xffcd06 = _0x3fab74(_0x475342);
  await _0x567fb7(_0xffcd06, _0x32a7f2);
  let _0x2656ae = httpResult;
  if (!_0x2656ae) {
    return;
  }
  if (_0x2656ae.status_code == 0) {
    console.log("成功卖掉一个低级角色");
  } else {
    console.log("当皇上卖掉低级角色失败：" + _0x2656ae.message);
  }
}
async function _0x557947() {
  let _0x520aed = _0x1f4225();
  let _0x5b93e3 = _0x21e216 + "/ttgame/game_king/double_reward?extra_ad_num=0&view_type=1&" + _0x17f1fd.fqxs_url;
  let _0x21ef93 = _0x3fab74(_0x5b93e3);
  await _0x567fb7(_0x21ef93, _0x520aed);
  let _0x5a0681 = httpResult;
  if (!_0x5a0681) {
    return;
  }
  if (_0x5a0681.status_code == 0) {
    console.log("当皇上离线奖励翻倍成功");
  } else {
    console.log("当皇上离线奖励翻倍失败：" + _0x5a0681.message);
  }
}
async function _0x261659(_0x351c8f, _0x409b78) {
  let _0x236f3a = _0x1f4225();
  let _0x1584f8 = _0x21e216 + "/ttgame/game_king/answer?answer=" + _0x351c8f + "&position=" + _0x409b78 + "&" + _0x17f1fd.fqxs_url;
  let _0x2900e7 = _0x3fab74(_0x1584f8);
  await _0x567fb7(_0x2900e7, _0x236f3a);
  let _0x11b567 = httpResult;
  if (!_0x11b567) {
    return;
  }
  if (_0x11b567.status_code == 0) {
    _0x3f5e2c.log("恭喜你，答对了，获得大量银币");
  }
}
async function _0x14da8f(_0x205067) {
  let _0x50600a = _0x1f4225();
  let _0x247f26 = _0x21e216 + "/ttgame/game_king/ad_up_avatar?&ad=1&position=" + _0x205067 + "&cancel=0&extra_ad_num=0&view_type=1&" + _0x17f1fd.fqxs_url;
  let _0x1141d1 = _0x3fab74(_0x247f26);
  await _0x567fb7(_0x1141d1, _0x50600a);
  let _0x52c39f = httpResult;
  if (!_0x52c39f) {
    return;
  }
  if (_0x52c39f.status_code == 0) {
    _0x3f5e2c.log("恭喜你，升级了一个" + _0x52c39f.data.new_avatar.lv + "的" + _0x52c39f.data.new_avatar.name);
  }
}
async function _0xdd00fd() {
  let _0x45ab54 = _0x1f4225();
  let _0x9171ff = _0x21e216 + "/ttgame/game_king/accelerate?view_type=0&" + _0x17f1fd.fqxs_url;
  let _0x505aa4 = _0x3fab74(_0x9171ff);
  await _0x567fb7(_0x505aa4, _0x45ab54);
  let _0x437589 = httpResult;
  if (!_0x437589) {
    return;
  }
  if (_0x437589.status_code == 0) {
    _0x3f5e2c.log("加速赚钱模式已开启");
  }
}
async function _0x5dbcb4() {
  let _0x4a15dc = _0x1f4225();
  let _0x5c3263 = _0x21e216 + "/ttgame/game_king/ad_money?view_type=0&extra_ad_num=0&" + _0x17f1fd.fqxs_url;
  let _0x16bcb1 = _0x3fab74(_0x5c3263);
  await _0x567fb7(_0x16bcb1, _0x4a15dc);
  let _0x3e4852 = httpResult;
  if (!_0x3e4852) {
    return;
  }
  if (_0x3e4852.status_code == 0) {
    _0x3f5e2c.log("看广告增加银币成功");
  }
}
async function _0x332c65() {
  let _0x457bb8 = _0x1f4225();
  let _0x13449f = _0x21e216 + "/ttgame/game_king/box/open?" + _0x17f1fd.fqxs_url;
  let _0x9b1278 = _0x3fab74(_0x13449f);
  await _0x567fb7(_0x9b1278, _0x457bb8);
  let _0x3cb516 = httpResult;
  if (!_0x3cb516) {
    return;
  }
  if (_0x3cb516.status_code == 0) {
    _0x3f5e2c.log("打开当皇上宝箱获得" + _0x3cb516.data.incr_coin + "金币");
  } else {
    console.log("打开当皇上宝箱失败：" + _0x3cb516.message);
  }
}
async function _0x2b5e2c(_0x14148c) {
  let _0xc36a5c = _0x1f4225();
  let _0x1fb8bc = _0x21e216 + "/ttgame/game_king/auto_avatar_reward?auto_avatar_pos=" + _0x14148c + "&" + _0x17f1fd.fqxs_url;
  let _0x1aa270 = _0x3fab74(_0x1fb8bc);
  await _0x567fb7(_0x1aa270, _0xc36a5c);
  let _0x39584a = httpResult;
  if (!_0x39584a) {
    return;
  }
  if (_0x39584a.status_code == 0) {
    _0x3f5e2c.log("随机获得一个角色");
  } else {
    console.log("随机获得失败：" + _0x39584a.message);
  }
}
async function _0x419e8d() {
  let _0x1b6472 = _0x1f4225();
  let _0x50bb6a = _0x21e216 + "/ttgame/game_king/box/open_fly?ad=1&view_type=1&" + _0x17f1fd.fqxs_url;
  let _0x3553fc = _0x3fab74(_0x50bb6a);
  await _0x567fb7(_0x3553fc, _0x1b6472);
  let _0x63980f = httpResult;
  if (!_0x63980f) {
    return;
  }
  if (_0x63980f.status_code == 0) {
    _0x3f5e2c.log("打开当皇上飞天宝箱获得一些银币");
  } else {
    console.log("打开当皇上飞天宝箱失败：" + _0x63980f.message);
  }
}
async function _0x5cbade() {
  let _0x4c823d = _0x1f4225();
  let _0x49cc08 = _0x21e216 + "/ttgame/game_king/wheel_ticket?" + _0x17f1fd.fqxs_url;
  let _0x2b10e7 = _0x3fab74(_0x49cc08);
  await _0x567fb7(_0x2b10e7, _0x4c823d);
  let _0x13c9ed = httpResult;
  if (!_0x13c9ed) {
    return;
  }
  if (_0x13c9ed.status_code == 0) {
    if (_0x13c9ed.data.incr_money != null) {
      console.log("当皇上增加转盘次数增加了");
    }
  } else {
    console.log("当皇上增加转盘次数失败：" + _0x13c9ed.message);
  }
}
async function _0x132c2b() {
  let _0x4c9f1 = _0x1f4225();
  let _0x24a22d = _0x21e216 + "/ttgame/game_king/play_wheel?" + _0x17f1fd.fqxs_url;
  let _0x34b58a = _0x3fab74(_0x24a22d);
  await _0x567fb7(_0x34b58a, _0x4c9f1);
  let _0x5eb08c = httpResult;
  if (!_0x5eb08c) {
    return;
  }
  if (_0x5eb08c.status_code == 0) {
    if (_0x5eb08c.data.incr_money != null) {
      _0x3f5e2c.log("当皇上转动转盘获得" + _0x5eb08c.data.incr_money.a * Math.pow(10, _0x5eb08c.data.incr_money.b) + " 银币");
    } else {
      if (_0x5eb08c.data.lottery_avatar != null) {
        _0x3f5e2c.log("当皇上转动转盘获得一个" + _0x5eb08c.data.lottery_avatar.lv + "级" + _0x5eb08c.data.lottery_avatar.name);
      } else {
        _0x3f5e2c.log("当皇上转动转盘获得了其他宝贝");
      }
    }
  } else {
    console.log("当皇上转动转盘失败：" + _0x5eb08c.message);
  }
}
async function _0xb73ce7() {
  let _0x5073d3 = _0x1f4225();
  let _0x55b3e2 = _0x21e216 + "/ttgame/game_king/daily_task/list?" + _0x17f1fd.fqxs_url;
  let _0x437935 = _0x3fab74(_0x55b3e2);
  await _0x567fb7(_0x437935, _0x5073d3);
  let _0x2e4aee = httpResult;
  if (!_0x2e4aee) {
    return;
  }
  if (_0x2e4aee.status_code == 0) {
    for (let _0x57f14b of _0x2e4aee.data) {
      if (_0x57f14b.status == 1) {
        await _0x42770c(_0x57f14b.task_id);
      }
    }
  } else {
    console.log("查询当皇上任务列表失败：" + _0x2e4aee.message);
  }
}
async function _0x42770c(_0xc1c55f) {
  let _0xc56ebc = _0x1f4225();
  let _0x19a550 = _0x21e216 + "/ttgame/game_king/daily_task/reward?" + _0x17f1fd.fqxs_url + "&&task_id=1&is_auto_reward=0&is_surprise_box_reward=0";
  let _0x2badd6 = _0x3fab74(_0x19a550);
  await _0x567fb7(_0x2badd6, _0xc56ebc);
  let _0x737308 = httpResult;
  if (!_0x737308) {
    return;
  }
  _0x737308.status_code == 0;
}
async function _0x24120d() {
  let _0x344b9d = _0x1f4225();
  let _0x126984 = _0x21e216 + "/ttgame/game_king/gift/list?" + _0x17f1fd.fqxs_url;
  let _0x27fe63 = _0x3fab74(_0x126984);
  await _0x567fb7(_0x27fe63, _0x344b9d);
  let _0x4a92b4 = httpResult;
  if (!_0x4a92b4) {
    return;
  }
  if (_0x4a92b4.status_code == 0) {
    for (let _0x4e5508 of _0x4a92b4.data) {
      if (_0x4e5508.status == 1) {
        await _0x1c8f03(_0x4e5508.gift_id);
      }
    }
  } else {
    console.log("查询当皇上三餐礼包状态失败：" + _0x4a92b4.message);
  }
}
async function _0x1c8f03(_0x1ba51c) {
  let _0x31524a = _0x1f4225();
  let _0x17d2cb = _0x21e216 + "/ttgame/game_king/reward/gift?gift_id=" + _0x1ba51c + "&watch_ad=0&double=0&" + _0x17f1fd.fqxs_url;
  let _0x44e6c5 = _0x3fab74(_0x17d2cb);
  await _0x567fb7(_0x44e6c5, _0x31524a);
  let _0x649375 = httpResult;
  if (!_0x649375) {
    return;
  }
  if (_0x649375.status_code == 0) {
    console.log("领取当皇上三餐礼包成功");
  } else {
    console.log("领取当皇上三餐礼包失败：" + _0x649375.message);
  }
}
async function _0x49ac95() {
  let _0x479693 = _0x1f4225();
  let _0x5199e7 = _0x21e216 + "/ttgame/game_king/sign_in/list?" + _0x17f1fd.fqxs_url;
  let _0x1ba8aa = _0x3fab74(_0x5199e7);
  await _0x567fb7(_0x1ba8aa, _0x479693);
  let _0x30fa14 = httpResult;
  if (!_0x30fa14) {
    return;
  }
  if (_0x30fa14.status_code == 0) {
    if (_0x30fa14.data.today == false) {
      await _0x171600();
    }
    if (_0x30fa14.data.has_watch_ad == false) {
      await _0x48bafb();
    }
  } else {
    console.log("查询签到状态失败：" + _0x30fa14.message);
  }
}
async function _0x171600() {
  let _0x256662 = _0x1f4225();
  if (_0x448001 == false) {
    return;
  }
  let _0x31e888 = _0x21e216 + "/ttgame/game_king/reward/sign_in?watch_ad=1&extra_ads_num=0&" + _0x17f1fd.fqxs_url;
  let _0xed7d2f = _0x3fab74(_0x31e888);
  await _0x567fb7(_0xed7d2f, _0x256662);
  let _0x13c011 = httpResult;
  if (!_0x13c011) {
    return;
  }
  if (_0x13c011.status_code == 0) {
    _0x3f5e2c.log("签到成功");
  }
}
async function _0x48bafb() {
  if (_0x448001 == false) {
    return;
  }
  let _0x3e5438 = _0x1f4225();
  let _0x32cf63 = _0x21e216 + "/ttgame/game_king/reward/repeat_sign_in?ad=1&extra_ad_num=0&view_type=1&" + _0x17f1fd.fqxs_url;
  let _0x1b199a = _0x3fab74(_0x32cf63);
  await _0x567fb7(_0x1b199a, _0x3e5438);
  let _0x599f93 = httpResult;
  if (!_0x599f93) {
    return;
  }
  if (_0x599f93.status_code == 0) {
    _0x3f5e2c.log("签到翻倍奖励已领取");
  }
}
async function _0x4bcbf8() {
  if (_0x448001 == false) {
    return;
  }
  let _0x2a9fcd = _0x1f4225();
  let _0x5adf4f = _0x21e216 + "/tfe/route/microgame_goldcoin/lottery?" + _0x17f1fd.fqxs_url;
  let _0x81b641 = _0x1557eb(_0x5adf4f);
  await _0x15de59(_0x81b641, _0x2a9fcd);
  let _0x42e6cc = httpResult;
  if (!_0x42e6cc) {
    return;
  }
  if (_0x42e6cc.status_code == 0) {
    _0x3f5e2c.log("转盘奖励已领取");
  }
}
async function _0x31ed75() {
  if (_0x448001 == false) {
    return;
  }
  let _0x1fc663 = _0x1f4225();
  let _0xe9a147 = _0x21e216 + "/tfe/route/micro_api/list/v1?source=init_gold_list&activity_version=true&entrance_type=1&" + _0x17f1fd.fqxs_url;
  let _0x5514ef = _0x3fab74(_0xe9a147);
  await _0x567fb7(_0x5514ef, _0x1fc663);
  let _0x198527 = httpResult;
  if (!_0x198527) {
    return;
  }
  if (_0x198527.status == 0) {
    _0x3f5e2c.log("游戏列表获取成功");
    const _0x486c52 = _0x198527.data.list.find(_0x2f058f => _0x2f058f.panel_id == 133);
    if (!_0x486c52) {
      return;
    }
    const _0x411138 = _0x486c52.game_list.list;
    for (let _0x39fc19 = 0; _0x39fc19 < _0x411138.length; _0x39fc19++) {
      const _0x2092ae = _0x411138[_0x39fc19];
      const _0x56992f = _0x2092ae.game_id;
      if (_0x2092ae.extra.has_played_1min == false) {
        await _0x5b71f7(_0x56992f);
      }
    }
  }
}
async function _0x5b71f7(_0x389da7) {
  if (_0x448001 == false) {
    return;
  }
  let _0x1037a9 = _0x1f4225();
  let _0x595ed9 = _0x21e216 + "/tfe/route/microgame_goldcoin/weekly_chosen/game_played?game_id=" + _0x389da7 + "&" + _0x17f1fd.fqxs_url;
  let _0x3c08fd = _0x1557eb(_0x595ed9);
  await _0x15de59(_0x3c08fd, _0x1037a9);
  let _0x465226 = httpResult;
  if (!_0x465226) {
    return;
  }
  if (_0x465226.status_code == 0) {
    _0x3f5e2c.log("试玩游戏奖励已领取");
  }
}
async function _0x435205() {
  if (_0x448001 == false) {
    return;
  }
  let _0x10822a = _0x1f4225();
  let _0x247e02 = _0x21e216 + "/luckycat/novel/v1/task/done/excitation_ad_chapter_end?" + _0x17f1fd.fqxs_url;
  const _0x1deda8 = "{\"polaris_version\":\"9.9.9\",\"luckycat_version_name\":\"9.9.9\",\"task_key\":\"excitation_ad_chapter_end\",\"luckycat_version_code\":\"999999\",\"new_bookshelf\":true}";
  let _0x448831 = _0x1557eb(_0x247e02, _0x1deda8);
  await _0x15de59(_0x448831, _0x10822a);
  let _0x2bc576 = httpResult;
  if (!_0x2bc576) {
    return;
  }
  if (_0x2bc576.status_code == 0) {
    _0x3f5e2c.log("看小说广告，成功领取300个番茄 🍅");
  }
}
function _0x1557eb(_0x1b3640, _0x415218 = "") {
  const _0x254a4a = {
    Connection: "keep-alive",
    "X-SS-DP": "1967",
    "Accept-Encoding": "gzip, deflate",
    "sdk-version": "2",
    "Content-Type": "application/json;encoding=utf-8",
    "User-Agent": JSON.parse(_0x17f1fd.fqxs_headers)["User-Agent"],
    "x-vc-bdturing-sdk-version": "2.2.7",
    "passport-sdk-version": "5.17.11",
    Host: _0x3c148f,
    Cookie: JSON.parse(_0x17f1fd.fqxs_headers).Cookie,
    Accept: "application/json"
  };
  const _0x3f2d82 = {
    url: _0x1b3640,
    headers: _0x254a4a,
    body: _0x415218
  };
  return _0x3f2d82;
}
function _0x3fab74(_0x3e57f4) {
  const _0x51331d = {
    Connection: "keep-alive",
    "X-SS-DP": "1967",
    "Accept-Encoding": "gzip, deflate",
    "sdk-version": "2",
    "Content-Type": "application/json;encoding=utf-8",
    "User-Agent": JSON.parse(_0x17f1fd.fqxs_headers)["User-Agent"],
    "x-vc-bdturing-sdk-version": "2.2.7",
    "passport-sdk-version": "5.17.11",
    Host: _0x3c148f,
    Cookie: JSON.parse(_0x17f1fd.fqxs_headers).Cookie,
    Accept: "application/json"
  };
  const _0x5cd0c4 = {
    url: _0x3e57f4,
    headers: _0x51331d
  };
  return _0x5cd0c4;
}
async function _0x15de59(_0x4114aa, _0x5d42da) {
  httpResult = null;
  return new Promise(_0x3b50fa => {
    _0x3f5e2c.post(_0x4114aa, async (_0x1880d4, _0x4de179, _0x40ff56) => {
      try {
        if (_0x1880d4) {
          console.log(_0x5d42da + ": post请求失败");
          console.log(JSON.stringify(_0x1880d4));
          _0x3f5e2c.logErr(_0x1880d4);
        } else {
          if (_0x1573e3(_0x40ff56)) {
            httpResult = JSON.parse(_0x40ff56);
          }
        }
      } catch (_0x277d72) {
        _0x3f5e2c.logErr(_0x277d72, _0x4de179);
      } finally {
        _0x3b50fa();
      }
    });
  });
}
async function _0x567fb7(_0x5c5d63, _0x177942) {
  httpResult = null;
  return new Promise(_0x56bf40 => {
    _0x3f5e2c.get(_0x5c5d63, async (_0x1e87b5, _0x4f83df, _0x4680e4) => {
      try {
        if (_0x1e87b5) {
          console.log(_0x177942 + ": get请求失败");
          console.log(JSON.stringify(_0x1e87b5));
          _0x3f5e2c.logErr(_0x1e87b5);
        } else {
          if (_0x1573e3(_0x4680e4, _0x177942)) {
            httpResult = JSON.parse(_0x4680e4);
          }
        }
      } catch (_0x1bf35f) {
        _0x3f5e2c.logErr(_0x1bf35f, _0x4f83df);
      } finally {
        _0x56bf40();
      }
    });
  });
}
function _0x1f4225() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function _0x1573e3(_0x1d9b1c) {
  try {
    if (typeof JSON.parse(_0x1d9b1c) == "object") {
      return true;
    }
  } catch (_0x59da2e) {
    console.log(_0x59da2e);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x148e41(_0x3c31f4) {
  var _0x186b38 = String.fromCharCode(_0x3c31f4.charCodeAt(0) + _0x3c31f4.length);
  for (var _0x201ab9 = 1; _0x201ab9 < _0x3c31f4.length; _0x201ab9++) {
    _0x186b38 += String.fromCharCode(_0x3c31f4.charCodeAt(_0x201ab9) + _0x3c31f4.charCodeAt(_0x201ab9 - 1));
  }
  return escape(_0x186b38);
}
function _0x4b537a(_0x35a53f) {
  _0x35a53f = unescape(_0x35a53f);
  var _0x4e0111 = String.fromCharCode(_0x35a53f.charCodeAt(0) - _0x35a53f.length);
  for (var _0x5e6c31 = 1; _0x5e6c31 < _0x35a53f.length; _0x5e6c31++) {
    _0x4e0111 += String.fromCharCode(_0x35a53f.charCodeAt(_0x5e6c31) - _0x4e0111.charCodeAt(_0x5e6c31 - 1));
  }
  return _0x4e0111;
}
function _0x2973f3(_0x1d494d, _0x474e6f) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x1d494d + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x474e6f - _0x1d494d + 1) + _0x1d494d);
      break;
    default:
      return 0;
      break;
  }
}
function _0x47e191() {
  if (_0x4cb0fc == 1) {
    _0x3f5e2c.msg(_0x3f5e2c.name, "", _0x3f5e2c.message);
  }
}
function _0x17c19e(_0x2c7f4c) {
  if (_0x4cb0fc == 1) {
    if (_0x3f5e2c.isNode()) {
      _0x2697e4.sendNotify(_0x3f5e2c.name, _0x2c7f4c);
    } else {
      _0x3f5e2c.msg(_0x3f5e2c.name, "", _0x2c7f4c);
    }
  } else {
    _0x3f5e2c.log(_0x2c7f4c);
  }
}
function _0x2ea9c4(_0x40fb58) {
  function _0x3cc577(_0xd59e1, _0x51efae) {
    return _0xd59e1 << _0x51efae | _0xd59e1 >>> 32 - _0x51efae;
  }
  function _0x321034(_0x416ea4, _0x29ce6d) {
    var _0x42e940, _0x1cb81d, _0x11e5e2, _0x51fc0c, _0x164a89;
    _0x11e5e2 = 2147483648 & _0x416ea4;
    _0x51fc0c = 2147483648 & _0x29ce6d;
    _0x42e940 = 1073741824 & _0x416ea4;
    _0x1cb81d = 1073741824 & _0x29ce6d;
    _0x164a89 = (1073741823 & _0x416ea4) + (1073741823 & _0x29ce6d);
    return _0x42e940 & _0x1cb81d ? 2147483648 ^ _0x164a89 ^ _0x11e5e2 ^ _0x51fc0c : _0x42e940 | _0x1cb81d ? 1073741824 & _0x164a89 ? 3221225472 ^ _0x164a89 ^ _0x11e5e2 ^ _0x51fc0c : 1073741824 ^ _0x164a89 ^ _0x11e5e2 ^ _0x51fc0c : _0x164a89 ^ _0x11e5e2 ^ _0x51fc0c;
  }
  function _0x45e40f(_0x22432a, _0x4bc4e7, _0x5d772d) {
    return _0x22432a & _0x4bc4e7 | ~_0x22432a & _0x5d772d;
  }
  function _0x5968e7(_0x48408e, _0x1c99b7, _0xfb7c41) {
    return _0x48408e & _0xfb7c41 | _0x1c99b7 & ~_0xfb7c41;
  }
  function _0x106a26(_0x23a7a6, _0x312d9f, _0x22a2e3) {
    return _0x23a7a6 ^ _0x312d9f ^ _0x22a2e3;
  }
  function _0x38993d(_0x4b0d15, _0x3402d5, _0x30b531) {
    return _0x3402d5 ^ (_0x4b0d15 | ~_0x30b531);
  }
  function _0x16ef48(_0x716851, _0x181781, _0x3c4513, _0x306de8, _0x7628d7, _0x1dd5a1, _0x16bee2) {
    _0x716851 = _0x321034(_0x716851, _0x321034(_0x321034(_0x45e40f(_0x181781, _0x3c4513, _0x306de8), _0x7628d7), _0x16bee2));
    return _0x321034(_0x3cc577(_0x716851, _0x1dd5a1), _0x181781);
  }
  function _0x3a8bd9(_0x1cc8fe, _0x2f057d, _0xdf0037, _0x3bece3, _0x44216a, _0x488ab3, _0xed35d1) {
    _0x1cc8fe = _0x321034(_0x1cc8fe, _0x321034(_0x321034(_0x5968e7(_0x2f057d, _0xdf0037, _0x3bece3), _0x44216a), _0xed35d1));
    return _0x321034(_0x3cc577(_0x1cc8fe, _0x488ab3), _0x2f057d);
  }
  function _0x1bd0f4(_0x2b48ab, _0x469b5e, _0x10c5df, _0xc58c1a, _0x38b339, _0x595cf3, _0x46fbe4) {
    _0x2b48ab = _0x321034(_0x2b48ab, _0x321034(_0x321034(_0x106a26(_0x469b5e, _0x10c5df, _0xc58c1a), _0x38b339), _0x46fbe4));
    return _0x321034(_0x3cc577(_0x2b48ab, _0x595cf3), _0x469b5e);
  }
  function _0x2e8ba3(_0x2f94dd, _0x36e9a8, _0x23360c, _0x1f84db, _0x3b1a46, _0x42072c, _0x26417a) {
    _0x2f94dd = _0x321034(_0x2f94dd, _0x321034(_0x321034(_0x38993d(_0x36e9a8, _0x23360c, _0x1f84db), _0x3b1a46), _0x26417a));
    return _0x321034(_0x3cc577(_0x2f94dd, _0x42072c), _0x36e9a8);
  }
  function _0x5cbf1b(_0x3be1fd) {
    for (var _0x3fd855, _0x1e979a = _0x3be1fd.length, _0x27c9bd = _0x1e979a + 8, _0x179dfc = (_0x27c9bd - _0x27c9bd % 64) / 64, _0x95abc4 = 16 * (_0x179dfc + 1), _0x379a16 = new Array(_0x95abc4 - 1), _0x586e65 = 0, _0x4c7a59 = 0; _0x1e979a > _0x4c7a59;) {
      _0x3fd855 = (_0x4c7a59 - _0x4c7a59 % 4) / 4;
      _0x586e65 = _0x4c7a59 % 4 * 8;
      _0x379a16[_0x3fd855] = _0x379a16[_0x3fd855] | _0x3be1fd.charCodeAt(_0x4c7a59) << _0x586e65;
      _0x4c7a59++;
    }
    _0x3fd855 = (_0x4c7a59 - _0x4c7a59 % 4) / 4;
    _0x586e65 = _0x4c7a59 % 4 * 8;
    _0x379a16[_0x3fd855] = _0x379a16[_0x3fd855] | 128 << _0x586e65;
    _0x379a16[_0x95abc4 - 2] = _0x1e979a << 3;
    _0x379a16[_0x95abc4 - 1] = _0x1e979a >>> 29;
    return _0x379a16;
  }
  function _0x4ffd02(_0x486ed9) {
    var _0x1cedba,
      _0x408b18,
      _0x3df549 = "",
      _0xed289d = "";
    for (_0x408b18 = 0; 3 >= _0x408b18; _0x408b18++) {
      _0x1cedba = _0x486ed9 >>> 8 * _0x408b18 & 255;
      _0xed289d = "0" + _0x1cedba.toString(16);
      _0x3df549 += _0xed289d.substr(_0xed289d.length - 2, 2);
    }
    return _0x3df549;
  }
  function _0x37c2a1(_0xf55431) {
    _0xf55431 = _0xf55431.replace(/\r\n/g, "\n");
    for (var _0x15349a = "", _0xd752c0 = 0; _0xd752c0 < _0xf55431.length; _0xd752c0++) {
      var _0x13c065 = _0xf55431.charCodeAt(_0xd752c0);
      128 > _0x13c065 ? _0x15349a += String.fromCharCode(_0x13c065) : _0x13c065 > 127 && 2048 > _0x13c065 ? (_0x15349a += String.fromCharCode(_0x13c065 >> 6 | 192), _0x15349a += String.fromCharCode(63 & _0x13c065 | 128)) : (_0x15349a += String.fromCharCode(_0x13c065 >> 12 | 224), _0x15349a += String.fromCharCode(_0x13c065 >> 6 & 63 | 128), _0x15349a += String.fromCharCode(63 & _0x13c065 | 128));
    }
    return _0x15349a;
  }
  var _0x3ef0d7,
    _0x2b7b48,
    _0x243cbf,
    _0x134276,
    _0x1aca87,
    _0x162f9f,
    _0x201ac2,
    _0x5f5029,
    _0x5ceacc,
    _0x5d53a6 = [],
    _0x4292d8 = 7,
    _0x516eab = 12,
    _0x151ed8 = 17,
    _0x4a2da9 = 22,
    _0x27e8d9 = 5,
    _0x319c3d = 9,
    _0x4acacd = 14,
    _0x28893a = 20,
    _0x1b8e72 = 4,
    _0x43070a = 11,
    _0x2abbde = 16,
    _0x43cc07 = 23,
    _0x3ddd22 = 6,
    _0x48322b = 10,
    _0x4463b6 = 15,
    _0x5cfebe = 21;
  for (_0x40fb58 = _0x37c2a1(_0x40fb58), _0x5d53a6 = _0x5cbf1b(_0x40fb58), _0x162f9f = 1732584193, _0x201ac2 = 4023233417, _0x5f5029 = 2562383102, _0x5ceacc = 271733878, _0x3ef0d7 = 0; _0x3ef0d7 < _0x5d53a6.length; _0x3ef0d7 += 16) {
    _0x2b7b48 = _0x162f9f;
    _0x243cbf = _0x201ac2;
    _0x134276 = _0x5f5029;
    _0x1aca87 = _0x5ceacc;
    _0x162f9f = _0x16ef48(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 0], _0x4292d8, 3614090360);
    _0x5ceacc = _0x16ef48(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 1], _0x516eab, 3905402710);
    _0x5f5029 = _0x16ef48(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 2], _0x151ed8, 606105819);
    _0x201ac2 = _0x16ef48(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 3], _0x4a2da9, 3250441966);
    _0x162f9f = _0x16ef48(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 4], _0x4292d8, 4118548399);
    _0x5ceacc = _0x16ef48(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 5], _0x516eab, 1200080426);
    _0x5f5029 = _0x16ef48(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 6], _0x151ed8, 2821735955);
    _0x201ac2 = _0x16ef48(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 7], _0x4a2da9, 4249261313);
    _0x162f9f = _0x16ef48(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 8], _0x4292d8, 1770035416);
    _0x5ceacc = _0x16ef48(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 9], _0x516eab, 2336552879);
    _0x5f5029 = _0x16ef48(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 10], _0x151ed8, 4294925233);
    _0x201ac2 = _0x16ef48(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 11], _0x4a2da9, 2304563134);
    _0x162f9f = _0x16ef48(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 12], _0x4292d8, 1804603682);
    _0x5ceacc = _0x16ef48(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 13], _0x516eab, 4254626195);
    _0x5f5029 = _0x16ef48(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 14], _0x151ed8, 2792965006);
    _0x201ac2 = _0x16ef48(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 15], _0x4a2da9, 1236535329);
    _0x162f9f = _0x3a8bd9(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 1], _0x27e8d9, 4129170786);
    _0x5ceacc = _0x3a8bd9(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 6], _0x319c3d, 3225465664);
    _0x5f5029 = _0x3a8bd9(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 11], _0x4acacd, 643717713);
    _0x201ac2 = _0x3a8bd9(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 0], _0x28893a, 3921069994);
    _0x162f9f = _0x3a8bd9(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 5], _0x27e8d9, 3593408605);
    _0x5ceacc = _0x3a8bd9(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 10], _0x319c3d, 38016083);
    _0x5f5029 = _0x3a8bd9(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 15], _0x4acacd, 3634488961);
    _0x201ac2 = _0x3a8bd9(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 4], _0x28893a, 3889429448);
    _0x162f9f = _0x3a8bd9(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 9], _0x27e8d9, 568446438);
    _0x5ceacc = _0x3a8bd9(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 14], _0x319c3d, 3275163606);
    _0x5f5029 = _0x3a8bd9(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 3], _0x4acacd, 4107603335);
    _0x201ac2 = _0x3a8bd9(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 8], _0x28893a, 1163531501);
    _0x162f9f = _0x3a8bd9(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 13], _0x27e8d9, 2850285829);
    _0x5ceacc = _0x3a8bd9(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 2], _0x319c3d, 4243563512);
    _0x5f5029 = _0x3a8bd9(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 7], _0x4acacd, 1735328473);
    _0x201ac2 = _0x3a8bd9(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 12], _0x28893a, 2368359562);
    _0x162f9f = _0x1bd0f4(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 5], _0x1b8e72, 4294588738);
    _0x5ceacc = _0x1bd0f4(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 8], _0x43070a, 2272392833);
    _0x5f5029 = _0x1bd0f4(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 11], _0x2abbde, 1839030562);
    _0x201ac2 = _0x1bd0f4(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 14], _0x43cc07, 4259657740);
    _0x162f9f = _0x1bd0f4(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 1], _0x1b8e72, 2763975236);
    _0x5ceacc = _0x1bd0f4(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 4], _0x43070a, 1272893353);
    _0x5f5029 = _0x1bd0f4(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 7], _0x2abbde, 4139469664);
    _0x201ac2 = _0x1bd0f4(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 10], _0x43cc07, 3200236656);
    _0x162f9f = _0x1bd0f4(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 13], _0x1b8e72, 681279174);
    _0x5ceacc = _0x1bd0f4(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 0], _0x43070a, 3936430074);
    _0x5f5029 = _0x1bd0f4(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 3], _0x2abbde, 3572445317);
    _0x201ac2 = _0x1bd0f4(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 6], _0x43cc07, 76029189);
    _0x162f9f = _0x1bd0f4(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 9], _0x1b8e72, 3654602809);
    _0x5ceacc = _0x1bd0f4(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 12], _0x43070a, 3873151461);
    _0x5f5029 = _0x1bd0f4(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 15], _0x2abbde, 530742520);
    _0x201ac2 = _0x1bd0f4(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 2], _0x43cc07, 3299628645);
    _0x162f9f = _0x2e8ba3(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 0], _0x3ddd22, 4096336452);
    _0x5ceacc = _0x2e8ba3(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 7], _0x48322b, 1126891415);
    _0x5f5029 = _0x2e8ba3(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 14], _0x4463b6, 2878612391);
    _0x201ac2 = _0x2e8ba3(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 5], _0x5cfebe, 4237533241);
    _0x162f9f = _0x2e8ba3(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 12], _0x3ddd22, 1700485571);
    _0x5ceacc = _0x2e8ba3(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 3], _0x48322b, 2399980690);
    _0x5f5029 = _0x2e8ba3(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 10], _0x4463b6, 4293915773);
    _0x201ac2 = _0x2e8ba3(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 1], _0x5cfebe, 2240044497);
    _0x162f9f = _0x2e8ba3(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 8], _0x3ddd22, 1873313359);
    _0x5ceacc = _0x2e8ba3(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 15], _0x48322b, 4264355552);
    _0x5f5029 = _0x2e8ba3(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 6], _0x4463b6, 2734768916);
    _0x201ac2 = _0x2e8ba3(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 13], _0x5cfebe, 1309151649);
    _0x162f9f = _0x2e8ba3(_0x162f9f, _0x201ac2, _0x5f5029, _0x5ceacc, _0x5d53a6[_0x3ef0d7 + 4], _0x3ddd22, 4149444226);
    _0x5ceacc = _0x2e8ba3(_0x5ceacc, _0x162f9f, _0x201ac2, _0x5f5029, _0x5d53a6[_0x3ef0d7 + 11], _0x48322b, 3174756917);
    _0x5f5029 = _0x2e8ba3(_0x5f5029, _0x5ceacc, _0x162f9f, _0x201ac2, _0x5d53a6[_0x3ef0d7 + 2], _0x4463b6, 718787259);
    _0x201ac2 = _0x2e8ba3(_0x201ac2, _0x5f5029, _0x5ceacc, _0x162f9f, _0x5d53a6[_0x3ef0d7 + 9], _0x5cfebe, 3951481745);
    _0x162f9f = _0x321034(_0x162f9f, _0x2b7b48);
    _0x201ac2 = _0x321034(_0x201ac2, _0x243cbf);
    _0x5f5029 = _0x321034(_0x5f5029, _0x134276);
    _0x5ceacc = _0x321034(_0x5ceacc, _0x1aca87);
  }
  var _0x246cdd = _0x4ffd02(_0x162f9f) + _0x4ffd02(_0x201ac2) + _0x4ffd02(_0x5f5029) + _0x4ffd02(_0x5ceacc);
  return _0x246cdd.toLowerCase();
}
function _0x699433() {
  var _0x207fcb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x5e9f9c) {
    var _0x3d92b8 = "";
    var _0x8ec967, _0x46e1b4, _0x3d0298, _0x45bdaa, _0x324bc2, _0x206014, _0x260aac;
    var _0x1556a5 = 0;
    _0x5e9f9c = utf8Encode(_0x5e9f9c);
    while (_0x1556a5 < _0x5e9f9c.length) {
      _0x8ec967 = _0x5e9f9c.charCodeAt(_0x1556a5++);
      _0x46e1b4 = _0x5e9f9c.charCodeAt(_0x1556a5++);
      _0x3d0298 = _0x5e9f9c.charCodeAt(_0x1556a5++);
      _0x45bdaa = _0x8ec967 >> 2;
      _0x324bc2 = (_0x8ec967 & 3) << 4 | _0x46e1b4 >> 4;
      _0x206014 = (_0x46e1b4 & 15) << 2 | _0x3d0298 >> 6;
      _0x260aac = _0x3d0298 & 63;
      if (isNaN(_0x46e1b4)) {
        _0x206014 = _0x260aac = 64;
      } else {
        if (isNaN(_0x3d0298)) {
          _0x260aac = 64;
        }
      }
      _0x3d92b8 = _0x3d92b8 + _0x207fcb.charAt(_0x45bdaa) + _0x207fcb.charAt(_0x324bc2) + _0x207fcb.charAt(_0x206014) + _0x207fcb.charAt(_0x260aac);
    }
    return _0x3d92b8;
  };
  this.decode = function (_0x393b7c) {
    var _0x14cdb6 = "";
    var _0x51b209, _0xb4909c, _0x537382;
    var _0x4ab57e, _0x1731f7, _0x42fa4c, _0x496414;
    var _0x4e8569 = 0;
    _0x393b7c = _0x393b7c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x4e8569 < _0x393b7c.length) {
      _0x4ab57e = _0x207fcb.indexOf(_0x393b7c.charAt(_0x4e8569++));
      _0x1731f7 = _0x207fcb.indexOf(_0x393b7c.charAt(_0x4e8569++));
      _0x42fa4c = _0x207fcb.indexOf(_0x393b7c.charAt(_0x4e8569++));
      _0x496414 = _0x207fcb.indexOf(_0x393b7c.charAt(_0x4e8569++));
      _0x51b209 = _0x4ab57e << 2 | _0x1731f7 >> 4;
      _0xb4909c = (_0x1731f7 & 15) << 4 | _0x42fa4c >> 2;
      _0x537382 = (_0x42fa4c & 3) << 6 | _0x496414;
      _0x14cdb6 = _0x14cdb6 + String.fromCharCode(_0x51b209);
      if (_0x42fa4c !== 64) {
        _0x14cdb6 = _0x14cdb6 + String.fromCharCode(_0xb4909c);
      }
      if (_0x496414 !== 64) {
        _0x14cdb6 = _0x14cdb6 + String.fromCharCode(_0x537382);
      }
    }
    _0x14cdb6 = utf8Decode(_0x14cdb6);
    return _0x14cdb6;
  };
  utf8Encode = function (_0x5f6901) {
    _0x5f6901 = _0x5f6901.replace(/\r\n/g, "\n");
    var _0x3cfd70 = "";
    for (var _0x3600dc = 0; _0x3600dc < _0x5f6901.length; _0x3600dc++) {
      var _0x1782e3 = _0x5f6901.charCodeAt(_0x3600dc);
      if (_0x1782e3 < 128) {
        _0x3cfd70 += String.fromCharCode(_0x1782e3);
      } else {
        if (_0x1782e3 > 127 && _0x1782e3 < 2048) {
          _0x3cfd70 += String.fromCharCode(_0x1782e3 >> 6 | 192);
          _0x3cfd70 += String.fromCharCode(_0x1782e3 & 63 | 128);
        } else {
          _0x3cfd70 += String.fromCharCode(_0x1782e3 >> 12 | 224);
          _0x3cfd70 += String.fromCharCode(_0x1782e3 >> 6 & 63 | 128);
          _0x3cfd70 += String.fromCharCode(_0x1782e3 & 63 | 128);
        }
      }
    }
    return _0x3cfd70;
  };
  utf8Decode = function (_0x3c16c8) {
    var _0x2d3f4f = "";
    var _0xbf75b2 = 0;
    var _0x19e62b = 0;
    var _0xff7fc7 = 0;
    var _0x3494aa = 0;
    while (_0xbf75b2 < _0x3c16c8.length) {
      _0x19e62b = _0x3c16c8.charCodeAt(_0xbf75b2);
      if (_0x19e62b < 128) {
        _0x2d3f4f += String.fromCharCode(_0x19e62b);
        _0xbf75b2++;
      } else {
        if (_0x19e62b > 191 && _0x19e62b < 224) {
          _0xff7fc7 = _0x3c16c8.charCodeAt(_0xbf75b2 + 1);
          _0x2d3f4f += String.fromCharCode((_0x19e62b & 31) << 6 | _0xff7fc7 & 63);
          _0xbf75b2 += 2;
        } else {
          _0xff7fc7 = _0x3c16c8.charCodeAt(_0xbf75b2 + 1);
          _0x3494aa = _0x3c16c8.charCodeAt(_0xbf75b2 + 2);
          _0x2d3f4f += String.fromCharCode((_0x19e62b & 15) << 12 | (_0xff7fc7 & 63) << 6 | _0x3494aa & 63);
          _0xbf75b2 += 3;
        }
      }
    }
    return _0x2d3f4f;
  };
}
function _0x4fb3b9(_0x14c299, _0x5a88f6) {
  class _0x552b55 {
    constructor(_0x42368e) {
      this.env = _0x42368e;
    }
    send(_0x429cfc, _0x2a7588 = "GET") {
      _0x429cfc = typeof _0x429cfc === "string" ? {
        url: _0x429cfc
      } : _0x429cfc;
      let _0x5a3ca1 = this.get;
      if (_0x2a7588 === "POST") {
        _0x5a3ca1 = this.post;
      }
      return new Promise((_0x4a497e, _0x46a421) => {
        _0x5a3ca1.call(this, _0x429cfc, (_0x11d9ba, _0x21a955, _0x4cca7a) => {
          if (_0x11d9ba) {
            _0x46a421(_0x11d9ba);
          } else {
            _0x4a497e(_0x21a955);
          }
        });
      });
    }
    get(_0x39ddcd) {
      return this.send.call(this.env, _0x39ddcd);
    }
    post(_0x722c) {
      return this.send.call(this.env, _0x722c, "POST");
    }
  }
  return new class {
    constructor(_0x4a19af, _0x200b82) {
      this.name = _0x4a19af;
      this.http = new _0x552b55(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x200b82);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" !== typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" !== typeof $task;
    }
    isSurge() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }
    isLoon() {
      return "undefined" !== typeof $loon;
    }
    isShadowrocket() {
      return "undefined" !== typeof $rocket;
    }
    toObj(_0x128850, _0x132b93 = null) {
      try {
        return JSON.parse(_0x128850);
      } catch {
        return _0x132b93;
      }
    }
    toStr(_0x155b82, _0x4cf980 = null) {
      try {
        return JSON.stringify(_0x155b82);
      } catch {
        return _0x4cf980;
      }
    }
    getjson(_0x14d7ea, _0xa9761b) {
      let _0x5b18f8 = _0xa9761b;
      const _0x427863 = this.getdata(_0x14d7ea);
      if (_0x427863) {
        try {
          _0x5b18f8 = JSON.parse(this.getdata(_0x14d7ea));
        } catch {}
      }
      return _0x5b18f8;
    }
    setjson(_0x2d2182, _0x3edb42) {
      try {
        return this.setdata(JSON.stringify(_0x2d2182), _0x3edb42);
      } catch {
        return false;
      }
    }
    getScript(_0x4fd603) {
      return new Promise(_0x7396d9 => {
        const _0x1e527b = {
          url: _0x4fd603
        };
        this.get(_0x1e527b, (_0x4c9b54, _0x50f0a0, _0x1f71de) => _0x7396d9(_0x1f71de));
      });
    }
    runScript(_0x450436, _0x197036) {
      return new Promise(_0x4faf65 => {
        let _0x24c055 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x24c055 = _0x24c055 ? _0x24c055.replace(/\n/g, "").trim() : _0x24c055;
        let _0x2a1065 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x2a1065 = _0x2a1065 ? _0x2a1065 * 1 : 20;
        _0x2a1065 = _0x197036 && _0x197036.timeout ? _0x197036.timeout : _0x2a1065;
        const [_0x5edcf0, _0x5f2352] = _0x24c055.split("@");
        const _0x12cc9f = {
          script_text: _0x450436,
          mock_type: "cron",
          timeout: _0x2a1065
        };
        const _0x34c53e = {
          "X-Key": _0x5edcf0,
          Accept: "*/*"
        };
        const _0x3897ee = {
          url: "http: //" + _0x5f2352 + "/v1/scripting/evaluate",
          body: _0x12cc9f,
          headers: _0x34c53e
        };
        this.post(_0x3897ee, (_0x292623, _0x2573bc, _0x52ebc8) => _0x4faf65(_0x52ebc8));
      }).catch(_0x2ecaeb => this.logErr(_0x2ecaeb));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x515600 = this.path.resolve(this.dataFile);
        const _0x144039 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x423566 = this.fs.existsSync(_0x515600);
        const _0x5141cf = !_0x423566 && this.fs.existsSync(_0x144039);
        if (_0x423566 || _0x5141cf) {
          const _0x43e1c7 = _0x423566 ? _0x515600 : _0x144039;
          try {
            return JSON.parse(this.fs.readFileSync(_0x43e1c7));
          } catch (_0x34259c) {
            return {};
          }
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x1253e8 = this.path.resolve(this.dataFile);
        const _0x42e796 = this.path.resolve(process.cwd(), this.dataFile);
        const _0xd69d9c = this.fs.existsSync(_0x1253e8);
        const _0x5ca569 = !_0xd69d9c && this.fs.existsSync(_0x42e796);
        const _0x4ec59c = JSON.stringify(this.data);
        if (_0xd69d9c) {
          this.fs.writeFileSync(_0x1253e8, _0x4ec59c);
        } else {
          if (_0x5ca569) {
            this.fs.writeFileSync(_0x42e796, _0x4ec59c);
          } else {
            this.fs.writeFileSync(_0x1253e8, _0x4ec59c);
          }
        }
      }
    }
    lodash_get(_0x81b376, _0x44eaf5, _0xa1d37d = undefined) {
      const _0x53bb30 = _0x44eaf5.replace(/[(d+)]/g, ".$1").split(".");
      let _0x4dbe57 = _0x81b376;
      for (const _0x1f17dc of _0x53bb30) {
        _0x4dbe57 = Object(_0x4dbe57)[_0x1f17dc];
        if (_0x4dbe57 === undefined) {
          return _0xa1d37d;
        }
      }
      return _0x4dbe57;
    }
    lodash_set(_0xf698ba, _0x24217c, _0x51b83e) {
      if (Object(_0xf698ba) !== _0xf698ba) {
        return _0xf698ba;
      }
      if (!Array.isArray(_0x24217c)) {
        _0x24217c = _0x24217c.toString().match(/[^.[]]+/g) || [];
      }
      _0x24217c.slice(0, -1).reduce((_0x477b0a, _0x297c55, _0x59e4c6) => Object(_0x477b0a[_0x297c55]) === _0x477b0a[_0x297c55] ? _0x477b0a[_0x297c55] : _0x477b0a[_0x297c55] = Math.abs(_0x24217c[_0x59e4c6 + 1]) >> 0 === +_0x24217c[_0x59e4c6 + 1] ? [] : {}, _0xf698ba)[_0x24217c[_0x24217c.length - 1]] = _0x51b83e;
      return _0xf698ba;
    }
    getdata(_0x45b348) {
      let _0x51005c = this.getval(_0x45b348);
      if (/^@/.test(_0x45b348)) {
        const [, _0xa81d98, _0x557b89] = /^@(.*?).(.*?)$/.exec(_0x45b348);
        const _0x405271 = _0xa81d98 ? this.getval(_0xa81d98) : "";
        if (_0x405271) {
          try {
            const _0x2a303c = JSON.parse(_0x405271);
            _0x51005c = _0x2a303c ? this.lodash_get(_0x2a303c, _0x557b89, "") : _0x51005c;
          } catch (_0x90053d) {
            _0x51005c = "";
          }
        }
      }
      return _0x51005c;
    }
    setdata(_0x1291a6, _0x3ca687) {
      let _0x402643 = false;
      if (/^@/.test(_0x3ca687)) {
        const [, _0x2fe9cf, _0xcb0f47] = /^@(.*?).(.*?)$/.exec(_0x3ca687);
        const _0x3dd6ed = this.getval(_0x2fe9cf);
        const _0x245323 = _0x2fe9cf ? _0x3dd6ed === "null" ? null : _0x3dd6ed || "{}" : "{}";
        try {
          const _0x568af9 = JSON.parse(_0x245323);
          this.lodash_set(_0x568af9, _0xcb0f47, _0x1291a6);
          _0x402643 = this.setval(JSON.stringify(_0x568af9), _0x2fe9cf);
        } catch (_0x5f0ee8) {
          const _0x58d6ae = {};
          this.lodash_set(_0x58d6ae, _0xcb0f47, _0x1291a6);
          _0x402643 = this.setval(JSON.stringify(_0x58d6ae), _0x2fe9cf);
        }
      } else {
        _0x402643 = this.setval(_0x1291a6, _0x3ca687);
      }
      return _0x402643;
    }
    getval(_0x89ba12) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x89ba12);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x89ba12);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x89ba12];
          } else {
            return this.data && this.data[_0x89ba12] || null;
          }
        }
      }
    }
    setval(_0x2198f0, _0x520128) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x2198f0, _0x520128);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x2198f0, _0x520128);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x520128] = _0x2198f0;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x520128] || null;
          }
        }
      }
    }
    initGotEnv(_0x5863b6) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x5863b6) {
        _0x5863b6.headers = _0x5863b6.headers ? _0x5863b6.headers : {};
        if (undefined === _0x5863b6.headers.Cookie && undefined === _0x5863b6.cookieJar) {
          _0x5863b6.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x32be3e, _0x36aae2 = () => {}) {
      if (_0x32be3e.headers) {
        delete _0x32be3e.headers["Content-Type"];
        delete _0x32be3e.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x32be3e.headers = _0x32be3e.headers || {};
          const _0x23c40d = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x32be3e.headers, _0x23c40d);
        }
        $httpClient.get(_0x32be3e, (_0x38ffcc, _0xbb6cc4, _0x37d0e8) => {
          if (!_0x38ffcc && _0xbb6cc4) {
            _0xbb6cc4.body = _0x37d0e8;
            _0xbb6cc4.statusCode = _0xbb6cc4.status;
          }
          _0x36aae2(_0x38ffcc, _0xbb6cc4, _0x37d0e8);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x32be3e.opts = _0x32be3e.opts || {};
            const _0x2c967b = {
              hints: false
            };
            Object.assign(_0x32be3e.opts, _0x2c967b);
          }
          $task.fetch(_0x32be3e).then(_0x46e0f8 => {
            const {
              statusCode: _0x681488,
              statusCode,
              headers,
              body
            } = _0x46e0f8;
            const _0x27190c = {
              status: _0x681488,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x36aae2(null, _0x27190c, body);
          }, _0x44f499 => _0x36aae2(_0x44f499));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x32be3e);
            this.got(_0x32be3e).on("redirect", (_0x288655, _0x15f749) => {
              try {
                if (_0x288655.headers["set-cookie"]) {
                  const _0x295fc6 = _0x288655.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x295fc6) {
                    this.ckjar.setCookieSync(_0x295fc6, null);
                  }
                  _0x15f749.cookieJar = this.ckjar;
                }
              } catch (_0xbf5934) {
                this.logErr(_0xbf5934);
              }
            }).then(_0x247e75 => {
              const {
                statusCode: _0x31009b,
                statusCode,
                headers,
                body
              } = _0x247e75;
              const _0x46b480 = {
                status: _0x31009b,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x36aae2(null, _0x46b480, body);
            }, _0x551f82 => {
              const {
                message: _0x2b138b,
                response: _0x29d09d
              } = _0x551f82;
              _0x36aae2(_0x2b138b, _0x29d09d, _0x29d09d && _0x29d09d.body);
            });
          }
        }
      }
    }
    post(_0x4d6b6c, _0x302d48 = () => {}) {
      const _0x59ac64 = _0x4d6b6c.method ? _0x4d6b6c.method.toLocaleLowerCase() : "post";
      if (_0x4d6b6c.body && _0x4d6b6c.headers && !_0x4d6b6c.headers["Content-Type"]) {
        _0x4d6b6c.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x4d6b6c.headers) {
        delete _0x4d6b6c.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x4d6b6c.headers = _0x4d6b6c.headers || {};
          const _0x56b3bd = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x4d6b6c.headers, _0x56b3bd);
        }
        $httpClient[_0x59ac64](_0x4d6b6c, (_0x51d441, _0x79ff2, _0x1cad38) => {
          if (!_0x51d441 && _0x79ff2) {
            _0x79ff2.body = _0x1cad38;
            _0x79ff2.statusCode = _0x79ff2.status;
          }
          _0x302d48(_0x51d441, _0x79ff2, _0x1cad38);
        });
      } else {
        if (this.isQuanX()) {
          _0x4d6b6c.method = _0x59ac64;
          if (this.isNeedRewrite) {
            _0x4d6b6c.opts = _0x4d6b6c.opts || {};
            const _0x414a93 = {
              hints: false
            };
            Object.assign(_0x4d6b6c.opts, _0x414a93);
          }
          $task.fetch(_0x4d6b6c).then(_0x492e72 => {
            const {
              statusCode: _0x380491,
              statusCode,
              headers,
              body
            } = _0x492e72;
            const _0x266fcf = {
              status: _0x380491,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x302d48(null, _0x266fcf, body);
          }, _0x20ca95 => _0x302d48(_0x20ca95));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x4d6b6c);
            const {
              url,
              ..._0x55adb8
            } = _0x4d6b6c;
            this.got[_0x59ac64](url, _0x55adb8).then(_0x1139e1 => {
              const {
                statusCode: _0x206c03,
                statusCode,
                headers,
                body
              } = _0x1139e1;
              const _0x1e1901 = {
                status: _0x206c03,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x302d48(null, _0x1e1901, body);
            }, _0x59bd34 => {
              const {
                message: _0x4943c4,
                response: _0x4bae92
              } = _0x59bd34;
              _0x302d48(_0x4943c4, _0x4bae92, _0x4bae92 && _0x4bae92.body);
            });
          }
        }
      }
    }
    put(_0xb22409, _0x470d67 = () => {}) {
      const _0x3b5159 = _0xb22409.method ? _0xb22409.method.toLocaleLowerCase() : "put";
      if (_0xb22409.body && _0xb22409.headers && !_0xb22409.headers["Content-Type"]) {
        _0xb22409.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0xb22409.headers) {
        delete _0xb22409.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0xb22409.headers = _0xb22409.headers || {};
          const _0x40fb60 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0xb22409.headers, _0x40fb60);
        }
        $httpClient[_0x3b5159](_0xb22409, (_0x43b1ff, _0x351a7d, _0x3dae05) => {
          if (!_0x43b1ff && _0x351a7d) {
            _0x351a7d.body = _0x3dae05;
            _0x351a7d.statusCode = _0x351a7d.status;
          }
          _0x470d67(_0x43b1ff, _0x351a7d, _0x3dae05);
        });
      } else {
        if (this.isQuanX()) {
          _0xb22409.method = _0x3b5159;
          if (this.isNeedRewrite) {
            _0xb22409.opts = _0xb22409.opts || {};
            const _0x2ff182 = {
              hints: false
            };
            Object.assign(_0xb22409.opts, _0x2ff182);
          }
          $task.fetch(_0xb22409).then(_0x13ffc0 => {
            const {
              statusCode: _0x55a4d4,
              statusCode,
              headers,
              body
            } = _0x13ffc0;
            const _0x5e985b = {
              status: _0x55a4d4,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x470d67(null, _0x5e985b, body);
          }, _0x404145 => _0x470d67(_0x404145));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xb22409);
            const {
              url,
              ..._0xbb328f
            } = _0xb22409;
            this.got[_0x3b5159](url, _0xbb328f).then(_0x347664 => {
              const {
                statusCode: _0xb7ea9e,
                statusCode,
                headers,
                body
              } = _0x347664;
              const _0x394896 = {
                status: _0xb7ea9e,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x470d67(null, _0x394896, body);
            }, _0x10bb21 => {
              const {
                message: _0x26aa95,
                response: _0x10212c
              } = _0x10bb21;
              _0x470d67(_0x26aa95, _0x10212c, _0x10212c && _0x10212c.body);
            });
          }
        }
      }
    }
    time(_0x2cfb4c, _0x5666fc = null) {
      const _0x3aafe3 = _0x5666fc ? new Date(_0x5666fc) : new Date();
      const _0x2dbf97 = {
        "M+": _0x3aafe3.getMonth() + 1,
        "d+": _0x3aafe3.getDate(),
        "H+": _0x3aafe3.getHours(),
        "m+": _0x3aafe3.getMinutes(),
        "s+": _0x3aafe3.getSeconds(),
        "q+": Math.floor((_0x3aafe3.getMonth() + 3) / 3),
        S: _0x3aafe3.getMilliseconds()
      };
      if (/(y+)/.test(_0x2cfb4c)) {
        _0x2cfb4c = _0x2cfb4c.replace(RegExp.$1, (_0x3aafe3.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x51d774 in _0x2dbf97) if (new RegExp("(" + _0x51d774 + ")").test(_0x2cfb4c)) {
        _0x2cfb4c = _0x2cfb4c.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x2dbf97[_0x51d774] : ("00" + _0x2dbf97[_0x51d774]).substr(("" + _0x2dbf97[_0x51d774]).length));
      }
      return _0x2cfb4c;
    }
    msg(_0x556ee1 = _0x14c299, _0x1e9a7b = "", _0x2660b3 = "", _0x4584fb) {
      const _0x3b1bd1 = _0x4188c9 => {
        if (!_0x4188c9) {
          return _0x4188c9;
        }
        if (typeof _0x4188c9 === "string") {
          if (this.isLoon()) {
            return _0x4188c9;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x4188c9
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x4188c9
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x4188c9 === "object") {
            if (this.isLoon()) {
              let _0x11ae0d = _0x4188c9.openUrl || _0x4188c9.url || _0x4188c9["open-url"];
              let _0x369888 = _0x4188c9.mediaUrl || _0x4188c9["media-url"];
              const _0x2fe11c = {
                openUrl: _0x11ae0d,
                mediaUrl: _0x369888
              };
              return _0x2fe11c;
            } else {
              if (this.isQuanX()) {
                let _0x5bc857 = _0x4188c9["open-url"] || _0x4188c9.url || _0x4188c9.openUrl;
                let _0x2832dc = _0x4188c9["media-url"] || _0x4188c9.mediaUrl;
                const _0x33c900 = {
                  "open-url": _0x5bc857,
                  "media-url": _0x2832dc
                };
                return _0x33c900;
              } else {
                if (this.isSurge()) {
                  let _0x1a5b13 = _0x4188c9.url || _0x4188c9.openUrl || _0x4188c9["open-url"];
                  const _0x10e795 = {
                    url: _0x1a5b13
                  };
                  return _0x10e795;
                }
              }
            }
          } else {
            return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(_0x556ee1, _0x1e9a7b, _0x2660b3, _0x3b1bd1(_0x4584fb));
        } else {
          if (this.isQuanX()) {
            $notify(_0x556ee1, _0x1e9a7b, _0x2660b3, _0x3b1bd1(_0x4584fb));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x31cefd = ["", "==============📣系统通知📣=============="];
        _0x31cefd.push(_0x556ee1);
        _0x1e9a7b ? _0x31cefd.push(_0x1e9a7b) : "";
        _0x2660b3 ? _0x31cefd.push(_0x2660b3) : "";
        console.log(_0x31cefd.join("\n"));
        this.logs = this.logs.concat(_0x31cefd);
      }
    }
    log(..._0x5083b4) {
      if (_0x5083b4.length > 0) {
        this.logs = [...this.logs, ..._0x5083b4];
      }
      console.log(_0x5083b4.join(this.logSeparator));
    }
    logErr(_0xca2650, _0xa7efa6) {
      const _0x282b10 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x282b10) {
        this.log("", "❗️" + this.name + ", 错误!", _0xca2650);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0xca2650.stack);
      }
    }
    wait(_0x14574b) {
      return new Promise(_0xc16606 => setTimeout(_0xc16606, _0x14574b));
    }
    done(_0x2f0d1a = {}) {
      const _0x4ceed0 = new Date().getTime();
      const _0x431676 = (_0x4ceed0 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x431676 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x2f0d1a);
      }
    }
  }(_0x14c299, _0x5a88f6);
}