#2024-08-08 12:45:17

import requests
import time
import random
import string
import hmac
import hashlib
import os
import threading


class ydd():
    def __init__(self,token) -> None:
        self.token = token.split('#')[1]
        self.device = token.split('#')[0]
        self.phone = token.split('#')[2]
        self.key = 'io0njH4yNYQfz6OQ3wiqFyJI0Zbtf5kpRuKW31Zw'
        self.dbfg03h153d = {
            "Authorization": self.token,
            "X-Version-Code": "115",
            "X-Platform": "android",
            "X-System": "11",
            "X-Brand": "Redmi",
            "X-Device-ID": self.device,
            "X-Client-Id": "com.yangduoduomuchang.app",
            "distributor-key": "yangduoduo",
            "Content-Type": "application/json; charset=utf-8",
            "Content-Length": "153",
            "Host": "ydd.xingdouduanju.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/4.8.1"
        }
        self.dbfg03h153d2 = {
            "Authorization": self.token,
            "X-Version-Code": "115",
            "X-Platform": "android",
            "X-System": "11",
            "X-Brand": "Redmi",
            "X-Device-ID": self.device,
            "X-Client-Id": "com.yangduoduomuchang.app",
            "distributor-key": "yangduoduo",
            "Host": "ydd.xingdouduanju.com",
            "Connection": "Keep-Alive",
            "Accept-Encoding": "gzip",
            "User-Agent": "okhttp/4.8.1"
        }
        self.ldb0313gr6r5g = ['每日签到广告','激励广告任务','逛视频赚金币']
    
    def get_nonce(self):
        characters = string.ascii_lowercase + string.digits
        self.nonce = ''
        for _ in range(32):
            self.nonce += random.choice(characters)
    
    def hmac_sha256(self,message):
        byte_key = self.key.encode('utf-8')
        byte_message = message.encode('utf-8')
        hmac_obj = hmac.new(byte_key, byte_message, hashlib.sha256)
        digest = hmac_obj.digest()
        self.sign = digest.hex()

    def vsd0e65f6s1fef(self):
        t = str(int(time.time()*1000))
        self.get_nonce()
        message = f"{self.device}&com.yangduoduomuchang.app&id1&nonce{self.nonce}&timestamp{t}"
        self.hmac_sha256(message)
        url = "http://ydd.xingdouduanju.com/api/livestocks/purchase"
        data = {
            "timestamp": t,
            "nonce": self.nonce,
            "id": 1,
            "sign": self.sign
        }
        response = requests.post(url, headers=self.dbfg03h153d, json=data)
        if response.json().get('code') == 200001:
            print('购买咩咩成功')
            # print(response.json())
        else:
            print(f"购买失败：{response.json().get('message')}")

    def ytj1h6310e0g(self):
        url = "http://ydd.xingdouduanju.com/api/tasks?geoHash="
        try:
            response = requests.get(url, headers=self.dbfg03h153d2)
            print(response.json())
            if response.json().get('code') == 200001:
                # print('获取任务列表成功')
                self.ytj1h6310e0g = {}
                for tasks in response.json().get('data').get('tasks'):
                    name = tasks.get('name')
                    id = tasks.get('id')
                    times = tasks.get('times')
                    completedCount = tasks.get('completedCount')
                    if name in self.ldb0313gr6r5g:
                        self.ytj1h6310e0g[name] = [id,completedCount,times]
            else:
                print(f"获取任务列表失败：{response.json().get('message')}")
        except Exception as e:
            print(f'任务列表异常{e}')


    def jth10h5d10bd15(self,key):
        t = str(int(time.time()*1000))
        self.get_nonce()
        message = f"{self.device}&com.yangduoduomuchang.app&donetrue&id{self.ytj1h6310e0g[key][0]}&nonce{self.nonce}&timestamp{t}"
        self.hmac_sha256(message)
        url = 'http://ydd.xingdouduanju.com/api/tasks/complete'
        data = {
            "timestamp": t,
            "nonce": self.nonce,
            "id": self.ytj1h6310e0g[key][0],
            "done": True,
            "sign": self.sign
        }
        try:
            response = requests.post(url, headers=self.dbfg03h153d, json=data)
            self.work_state = response.json().get('message')
            if response.json().get('code') == 200001:
                print(f"[{key}]任务完成，获得金币：{response.json().get('data').get('reward')}")
            else:
                print(f"[{key}]任务失败：{response.json().get('message')}")
        except Exception as e:
            print(f'任务异常{e}')

    def urt30de63r1(self):
        t = str(int(time.time()*1000))
        self.get_nonce()
        message = f"{self.device}&com.yangduoduomuchang.app&hasWatchAdtrue&nonce{self.nonce}&timestamp{t}"
        self.hmac_sha256(message)
        url = "http://ydd.xingdouduanju.com/api/ranch_livestocks/collect_all"
        data = {
            "timestamp":t,
            "nonce":self.nonce,
            "hasWatchAd":True,
            "sign":self.sign
        }
        try:
            response = requests.post(url, headers=self.dbfg03h153d, json=data)
            if response.json().get('code') == 200001:
                print(f"咩毛成功收取：{response.json().get('data')}")
            else:
                print(f"咩毛收取失败：{response.json().get('message')}")
        except Exception as e:
            print(f'咩毛收取异常{e}')

    def jyf36th0f00e(self):
        t = str(int(time.time()*1000))
        self.get_nonce()
        message = f"{self.device}&com.yangduoduomuchang.app&id1813772307315818500&nonce{self.nonce}&timestamp{t}"
        self.hmac_sha256(message)
        url = "http://ydd.xingdouduanju.com/api/market_goods/exchange"
        data = {
            "timestamp":t,
            "nonce":self.nonce,
            "id":"1813772307315818500",
            "sign":self.sign
        }
        try:
            response = requests.post(url, headers=self.dbfg03h153d, json=data)
            if response.json().get('code') == 200001:
                print(f"咩毛换现金：0.3")
            else:
                print(f"咩毛换现金失败：{response.json().get('message')}")
        except Exception as e:
            print(f'咩毛换现金异常{e}')

    def k10uy650re4g(self):
        url = "http://ydd.xingdouduanju.com/api/user/profile"
        try:
            response = requests.get(url, headers=self.dbfg03h153d2)
            if response.json().get('code') == 200001:
                self.money = response.json().get('data').get('wallet').get('balance')
            else:
                print(f"查询账户失败：{response.json().get('message')}")
        except Exception as e:
            print(f'查询账户异常{e}')
    
    def v0b5r1y56d0(self):
        t = str(int(time.time()*1000))
        self.get_nonce()
        message = f"{self.device}&com.yangduoduomuchang.app&nonce{self.nonce}&payeeId{self.phone}&timestamp{t}&withdrawAmountId1813772307475202048"
        self.hmac_sha256(message)
        url = "http://ydd.xingdouduanju.com/api/withdraws"
        data = {
            "timestamp":t,
            "nonce":self.nonce,
            "withdrawAmountId":"1813772307475202048",
            "payeeId":self.phone,
            "sign":self.sign
        }
        try:
            response = requests.post(url, headers=self.dbfg03h153d, json=data)
            if response.json().get('code') == 200001:
                print(f"成功提现：0.3")
            else:
                print(f"提现失败：{response.json().get('message')}")
        except Exception as e:
            print(f'提现异常{e}')

    def hf1t5d6fb51gf6e0f(self):
        url = "http://ydd.xingdouduanju.com/api/ranch_livestocks/info"
        try:
            response = requests.get(url, headers=self.dbfg03h153d2)
            if response.json().get('code') == 200001:
                print(response.json())
                self.balance = response.json().get('data').get('walletGold').get('balance')  #剩余金币
                self.pendingLivestocks = response.json().get('data').get('pendingLivestocks')
                self.miemao = response.json().get('data').get('walletLuckyMoney').get('balance')
            else:
                print(f"获取信息失败：{response.json()}")
        except Exception as e:
            print(f'获取信息异常{e}')
    
    def main(self):
        print('==============开始任务：日常任务==============')
        self.ytj1h6310e0g()
        for key in self.ytj1h6310e0g:
            print(f"{key}：{self.ytj1h6310e0g[key][1]}/{self.ytj1h6310e0g[key][2]}")
            if '逛视频赚金币' == key:
                nums = 20
            else:
                nums = self.ytj1h6310e0g[key][2] -self.ytj1h6310e0g[key][1]
            if nums >= 1:
                for _ in range(nums):
                    self.jth10h5d10bd15(key)
                    time.sleep(random.randint(40,60))
                    if "今日任务已完成" in self.work_state:
                        break
        self.hf1t5d6fb51gf6e0f()
        if float(self.balance) >= 1000:
            print('==============开始任务：购买咩咩==============')
            for i in range(int(float(self.balance)/1000)):
                self.vsd0e65f6s1fef()
                time.sleep(random.randint(8,13))
        if len(self.pendingLivestocks) > 0:
            print('==============开始任务：收取咩毛==============')
            self.urt30de63r1()
        time.sleep(2)
        self.hf1t5d6fb51gf6e0f()
        if float(self.miemao) > 0.36:
            print('==============开始任务：咩毛换现金==============')
            for _ in range(int(float(self.miemao)/0.36)):
                self.jyf36th0f00e()
                time.sleep(random.randint(6,10))
        print('==============开始任务：提现==============')
        self.k10uy650re4g()
        if float(self.money) > 0.3:
            self.v0b5r1y56d0()
        else:
            print('余额不够')


if __name__ in "__main__":
    token = os.getenv("ydd_token")
    if not token:
        print('请添加环境变量')
        exit()
    tokens = token.split('@')
    print(f'共有{len(tokens)}个账号')
    if thrind_TF is False:
        print('多线程已关闭')
        for i,token in enumerate(tokens):
            print(f'----------开始第{i+1}个账号----------')
            if len(token.split('#')) != 3:
                print(f'仔细检查环境变量格式')
                exit()
            main = ydd(token)
            main.main()
            print(f'----------结束第{i+1}个账号----------')
            time.sleep(10)
    elif thrind_TF is True:
        print('多线程已开启')
        thrinds = []
        for i,token in enumerate(tokens):
            print(f'----------开始第{i+1}个账号----------')
            if len(token.split('#')) != 3:
                print(f'仔细检查环境变量格式')
                exit()
            main = ydd(token)
            thrind = threading.Thread(target=main.main)
            thrinds.append(thrind)
            thrind.start()
            
        for thrind in thrinds:
            thrind.join()
    else:
        print('检查线程参数设置')
        exit()
