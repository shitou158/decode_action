#          ██   ██            ████████████
#          ██   ██    █       ██ ██  ██ ██
#      ██████   ██  ██        ████████████
#          ██   ██ ██        ██████████████
#        ████   ████               ██
#       ██ ██   ██    ██       ██  ██████
#      ██  ██   ██    ██       ██  ██
#     █    ██   ████████     ██████████████
#
#    .----------------.  .----------------.
#    | .--------------. || .--------------. |
#    | |   ______     | || |    ______    | |
#    | |  |_   _ \    | || |  .' ___  |   | |
#    | |    | |_) |   | || | / .'   \_|   | |
#    | |    |  __'.   | || | | |    ____  | |
#    | |   _| |__) |  | || | \ `.___]  _| | |
#    | |  |_______/   | || |  `._____.'   | |
#    | |              | || |              | |
#    | '--------------' || '--------------' |
#    '----------------'  '----------------'
#
# 免责声明：本程序仅供学习交流，不得用于任何商业以及非法用途,因使用造成的使用者以及任何网站的一切损失,皆由使用者承担！如不接受本条款,请立即删除本软件,如不慎软件被破解,皆由破解者承担一切责任！
# Version: 1.1
# Author: 北罡
# QQ：2503312261
# 官方Q群：718434051
# Create at 2025-01-23 22:15
"""
   ______                       __                     __      ___    ____    ___     ______        ____    ___        ___    _____
  / ____/ _____  ___   ____ _  / /_  ___      ____ _  / /_    |__ \  / __ \  |__ \   / ____/       / __ \  <  /       |__ \  |__  /
 / /     / ___/ / _ \ / __ `/ / __/ / _ \    / __ `/ / __/    __/ / / / / /  __/ /  /___ \   ____ / / / /  / /  ____  __/ /   /_ < 
/ /___  / /    /  __// /_/ / / /_  /  __/   / /_/ / / /_     / __/ / /_/ /  / __/  ____/ /  /___// /_/ /  / /  /___/ / __/  ___/ / 
\____/ /_/     \___/ \__,_/  \__/  \___/    \__,_/  \__/    /____/ \____/  /____/ /_____/        \____/  /_/        /____/ /____/ 

"""

"""
使用说明：
    1.设置环境变量"BG_96156"添加账号token数据，多号格式(#分隔)：token1#token2#token3
    2.设置环境变量"APIPassword"添加讯飞星火AI大模型接口授权码APIPassword。
      获取地址：https://xinghuo.xfyun.cn/sparkapi?scr=price  
      版本选择Spark4.0 Ultra 套餐选择免费包(个人)
      领完在在线调试的控制台中Spark4.0 Ultra找到APIPassword
"""


import zlib, base64, marshal, gzip, bz2, lzma

exec(
    marshal.loads(
        gzip.decompress(
            bz2.decompress(
                lzma.decompress(
                    zlib.decompress(
                        base64.b64decode(
                            "eJwB9BsL5P03elhaAAAE5ta0RgIAIQEWAAAAdC/lowEbtEJaaDkxQVkmU1m4g+x3AAGMf////////////////////////////////////////////+AQnj73e63ZbXXd9et872efbH133vvvfc8++z7r63yee999zet7699q93evre2957216+9vn3fa+fdnO+xvHVP00AR5T1GpvSZNPRT2KT9KZiT9U21TT09ENNIxgyj0maTT1EbT1MCnkzUT9U8FNiT0m8moNHpkGiGU09J5lGjTanpBqeptNE8SPaaam1PSbQaR6aNNHoIyjZUQp4ammnop6MmajTGhM1NNT0yPUzQTRpiZPRDJpiegBGk8ExMJPNAJgU8TKeAJtTATDQGjQYmqfkMjJPTTVPNAIwmJpPah6am0BNTwohTZTwjaJtI1PCnqemp7SZqPU9TDVPNU9qm2pmozRTxMp6ZMFP0mp5pMptkj0AGqeMmJoMqfpiniZNMjTRTxTynqfomp6ZR6NqYFPTKeAEeqbCZPUTyjTwU2UeTUUbZGqeCn6p+mig8ExTxE8aKeMqeaajapp5TJsk/Sn6PSaZNBiDJplG01T8mmSNNGJ6I9E9U8KflTbSZMp4p+k0nmkynkyango9TxMptTwaU8p5GKeU/VM1NjQUeCh1T9Jsmg1TwozUe0Aap7SaeQJsjRiJ6GTIxNU2Ewp+piNT0MTTAjap+jTQp6emQKeKe0U8TT1NNGp4aJPITYmBT9FNp6ExGoHgNCYRP0UzIMNUOqeynpjSPVN6ENMTTTT1IaZNGgniaZlMU3qn6mmp4k9MTanqMgyCeCGTTEZoT1TJk9qmG01NMQ2p5J6ap6anoHqZTPUPRJ4jaKeJ6jU2TZE2gptNTwTNKeSepiuqoNA+qaEM9FK8dv+aNjB7gJRw9m0byxVSFwoPQfZK7qXP8zzwOzms1NyHc+he9lUzmowxXefcxfS64aWzbyuvVoKFWNYbPOcFUpQzsgCt+3a7CfrEirtNm5tYfow8XUvc5TKtDR/8M9kam5ju23Lu038O7OrU2FxWBEPT+rR5bZWvoyxCicDuF202gDOxsRawb6umgK/O8KcUvHXPqBC1BYw8EOdWsTffbMWtQmzWHbRnZ21JLtAKbqIDvKTuCeNaNdLBebsnS2x3WHXlSioi4ZrcDR05kfdGivoqGZsNnpizq9STvBSbWMYoOHP+gdp+l5BJ433c19jHzD4VhfqPSMCzpSwm2c59vToNu0QqXbRdCiR7KQJ3p+zqulWs921PaeL2/K4oaEMi+o3JdiHWeK2wkqRKc7Jh9g5UoZNOp9owHIyFRmzUHDphebz5mf2yObRGawweGDHwt/Fij6tBMKAYZpurTV+QPzlF3nD5jXzJG+1iPk6C9jQ/TR4TpEM5ad1vHj0or2tVXG45j3kSTRSIDAvRCjuRR66w4g6vDPXs2PRYVlWsl8p+wVwvkaRTf8+4yqQFCZ+mZ/74CZld/UNLUVrk1KcaugceZWtLyIhmjniCcMqfG/fsNgD9xFrXLzfM43S5WplZnxLmA7MlH2ee+MXZNrPRTHTo+KoypGlbxdPXXI1VHfsN12rfDFFlWaCT0Iwjj1e25PzuDdfl20CAowprA4s1l2PRf95lI9BTVRbtO+dwFboisr2p8GQ8xmkNccrSmVU+ldQ+X4+HfM2tRVKiHVLFX/J0OPEQTpSlJrHDm75/Mg92k2hSmT1MEG+yqcAjNO/qY3wvq+eEkL3xjD+YzvK8FqRXbF5q87X1MiOU/LtpX/fdHuC9UXzbFzDJpoQ/HNcUeaeLHL8BaJfOrcnRrxxaaaTTRUCTbBtDeYvXlLjs9Ruye7aCLPCyMF+0dVBTZjMypysonMhLj8ykn3iSkFSS2uSr4dk4ZTvq4aiCXL2oCp84bhlOFonAOAsE8K23Xlji4HWPIOjaDVwxWRp8azjyQpwwpOat7BNuJE7qmF1srpCScH/kzZdxVTC7x0KAo8scYI2taRVBR2NK+1SEByBY+LeS7qXUxFdTwVpRtqIXfFcvEpjOwDlnph4tVUID8oQ4vASztDCZ/807Pt0i0LneLy73sa+3n7GY6KQdtgV273bM3kLKDpo9N1Vi4XT2oVNudJbxDCBqheHBeaJtj9kEogK5PBc6OAv5rSP9BBZB7ZC1/GVUZkcJ4wszlZeMnLxE/7v3Uufi6+4c6bXDeycxyDEB+OgY+/5G7S0CcrCLQv1i0BSD8LBEB1lOv9Ql14sVeUFBvaLbrXnJK3HKhZUZLqiNj064kIwJpXAKGLht4w4GXB87M/Q+/6yyciXrVpSqnAM7a+pJ7v9Ehm6Qw1NYdpArmizf5G1FY9hG4Drs4sOyBa7GWwD4EEzzocVUdpFcx/7zsO3ZV+lPj7DLTseecaaab7s5tH2clbgYAApceG+wSjM6wsVt0MPmvPEqaxljwgpyB2XG9QWHGQxSQRd9zTFJySmfuV1fVQEtkr0Z9VhapsTQq5dvfrsrEiaalKsUiMtb6d4sQ1G+ZSRV/Inj6FDhN2thvYnpa/c413/rRSLdpzCj/1qrKgRxJf5iOb04TwAnav2qKydIwEh4n04p3Y+fzlEopZt7xcDYAECscpdfWdMxolOI6KoRY6BlbqvPSElGi52VdK1igqpBw/NWgaLkxUZ2ioCgx7CMhtCOvm9GbtvtcMI/jEcsFytVdgtDXGQHJvxU05GOwmi1U8kG/Yq3mV8DOZ5Tx/o/Etp8Q2Sk6eN5vFVnbfjNJdYdeKFIkVBqt4W7K12JJuAKtfnochc7kDGfNazsLuZ4yEfR2rOcNVLmtcVv7kfIckLLUVEI9vv+NDHH9GYEcT5nFiKtdSSK6AAWLqt/nHIjDbp8un/WuZpyQauNWZLBPIcV9EKJ6JXXs3taEYCLe+qLYHMHxT7CGxzZg9z+4DoafoTF3I/lQso89s6GfQiDCAsmzoLokOFInBEpOw4xrKJ7a36CiieAs/j+jepQeE8u1dgw/4vAfGK6Mu80fM2n4pqBuO5vVzq8cu9fQlQ28zpnZrvjFKxEsPuqiTSju9rOZQN5VvrAvhwa6vrvgqJjjkhJNL5deddj6BBiAOOqgPsCKLrji8jerY8cLmie9HGZQfM+3n9QvWN1Q0LChG/h8iDRaUW9cACWieI2IVTMY0Cu6XmRXpDoGNmb74FEcSEEdcJrXcmzxNLZy/3+5ghZJ5ZB1QSEEO0D0qCYtsDNrx8vHDtLBqGDQmHHpONnb6WQrZxC3w1JJWwGgO/eBYGxonMGhuyY/+wWO2ULTwKWFVb7veV3l7vH8pNQ50KjsDWybxwCmW+yjvMTbIm93GbxMdnYd3wonVp5kt62WAnRF10aWudpQRl+PjLwZvS+xOKtzj/PHp/0WVs0F0W3DeI+qslLM9S32rZTn30I3OVCgRiKiSHNj/XY7AxucTL1bEnEhH8CM07pH5CQFVcKX2kYBAWTwV2jaxCX0ooN9pP70EQrGuX/wmeFnV0NrlIrTUajl1P1ZHlerb7GTeGh0MuAEVZLqkY0benpB+BzB3wTXw8J7G1KOD3anzRNPPArTBQoLeoNwe902i0aKZIxrc/EkcDIFlPVy81zCLxz0jjgmePrwUV8KJv2CUjsR2LFxFfLz+34s2+yjHYLb4313MmTwXi4v9fS+8rpVODehRdQNgPShCh8illrvCpp/9Pvo61u3Wtaz4CeXUyJkicvvBEHwjnRVvx/zfBfTesdVsDIPi41Btt4xC3E2TPFbxDxVpCLsTO7Zd5TWvmQqAkTFrdyTeejtUFYJKrNBb6TUc4wUQM6VJvkBKZbuabr8WgzOqS6V7Q5LMpNllPkoe+ne3fdUgJkdVG/dGevc2A2O0wYa1Y7N5FhgnUmGKcFgxsdofqMIz176agiAu2T6brgKmWAhHqgl1PNesM2Q0u9Xb7alp5GcTSRobnpM3d9buLyOCheJKapY3FOTyzUvjcGKRZFIv2g5ZsGfA0g/ffyArPtIBanjuet+ygCAZIM4C5Lq95nGxWlfGXpsPEV7PYQWXEQrlS/zrgm70r1A/2xNNb+2+BUoHHFbzZ9/cPNCHz50wjkYCKk7JGb8CULD5XHDNqsZ9MwJW32W5Krbd2dFKI+DDnmpGkrpGSFazmPqvCLn14QcdMkk2nyIRa+62JzSyRpwTS2ZxvLPjyidCi5zjErFJYP0WcNnaaGMFWg4LQfVY+BX2nm9/dnS3CFMRtK/4em3bWdX0Yflq1u6Z53yrSfXK9EoKnkHHNzJ9nN+9bzHkpuA4HRYIlI1OOY+q0I6/mY06rQWdivgLkSvTNTQMaIeDxE1ylgewe3U8C2MxqLj2Cbu+zPljv7+vSYpnlQ8t72CVjsebDaVFxinduyJPJdpW3dhZVDZQ8LKXb9dQkXB+JJPzlM625mMSdhUKURdzYh4HcYamhXEXBiuGDw8Bu5pBG9kuHEBcKQeuJGDR1lTriePJHjQQSWuogzjOjUhmntry0e6nilfzSP9NIUG25PJa+7PJjHIsFe08nynmmboCZWlDdgXYzN/LigIy2oWgBOQTxtkqj46wmrvIjj+pbFdfnvhxCjM6KS972vznW/WkJz5+CY+jvs2VSv88UH8h+e+4NcAU4MULZk/L8v3EMPNMvOSoCju30NKPA2+xeX+I0dp4nRaitDKYOim+0P3T2Xxwr/aymPCaGEabi4Wo2YlXVFyiuW46UHpasDUOXUZdbot2anyd05jyMM5cEXQ+qUuFNXsbYaFunXwJUBkpOrYBWY5SOKQ3JGp4fVChhQ5Nq+Cbwk2phKJiwRFuN4FryGZmJk9HFNx0EblUYHcFP9HZP79ectKqzYwD604frguALM8j9csZSO6ngOzrfQFUxy2gY2Xb8uYJ1+dgq+kTsENswBwIv0N639Y5Ludu2aWpad5JuyEEhCSd3dfYwKC4ncN1GCtv7xl4c9sYVzqWKejFBW+uIqY+goYXMKfbwUXmwt1nWJDERtOIHm2LTn9HLi5iwQSk30q1xuHo1LUPxYdZ87RMi8LaUjXiw7vRRpymhkAhEGrEcw3yo+jBXe85G1uIkrdPCM6V1cC3Yk1Qzh27tvrHO+W7LvFjddPLfCemPyMpjF5l1QLOuOJqJ59+f0LygwiHsKSs5tKF9Fz5eLIDrUMb0neaxavOZ+dku01hBkfBgadBPdI7+weANZmBNI3h6x0aR29mbD5GPrts84RlE/E5QZZdtwivIUXffoOl0qLq5z6VWVrEzBReKo7cxDSfPlzGlSAZZzqyahSOUI4UYfeBoBF44zIQXjOj5hqDHhni4DB/DIi98p+38KQVNWFhwPvbKtw+qkk6gh7Ljvb7XZTpbGzz/WIxsl1mcm54gsf8EHc43GnmSeJLD4QT9dxnRci5Xq459BPZtT50D27q6Y96le1TPM9Jnxd/8L5uBbQkVcJ3WWDsSnCsA2WZwGUO5vyx9+DRRCMsx7XIBt66QpgRTTp4o2F/A38e44FI738iQKjfRmmuaY7Tv6rB1SopVimqD+EPw/b0CY7Ei7b6Gm6bwHWJ0xftuKzP43TBY2cfe47Ss8PRyWcBgklhke4n4DqGpjUgV/3ok4PJnj00oay6AzSvVm7q1MRlcBGy0nSo2PoeeyuDTkPeU3SJnyOSaE6a+Zi5HV0bqB7e3YRpYpzAU4OPv2dBZ53HgpGpKvVFtIswCXt1UVxFUlXn69gXdlyntdHi4DE0zOCHCkdZy9D56KYjhn4iflgQpbRKjueecUVTspmrwzfbSWHnH7aSSlxYFeEF0dKeBgfEES8uGcTH/OVdrlHRe/FBO2ZRrmfHlc/WfyXUhRwvKYjWbhAMJFQmfbyySVkd4fkL/fLR+HQxS4J84Szo8AThzQrLzr2h5MvXAw0lvJsSRJ+fn9kUQvJHcp1xpzWbj2zy0GiwcIBUg8jZrFCgjrnctmUXUXv3Cvc5fxrTF8q6BIFAV467nwLMw9JpV1fIq6Y/QHz+s6Cpu0xC7QCWgQIAVrS61tG7TXu7Tz3pWhXiNIgoRysjOtT9ecAi5FyCPNQC52AWMQ1LaaUHJ0Z5CtLUD0Ibwt8Kf6jFd8e2o6T/T2ue25tT2+qGOevB4Id6SiSdnFd7k1PacYFsytkm0z6iUSVL00/PvXsNuAwzK8JcU4sHKoODFNatD8KFgOwljcQhaLGFA20tUdrQk6cc6uQsIOYHVBK9WC+URTRyoPj9m1o3p990lgZ3TdVDDK8N13UHbxFRkCdZlM1K89F8hunuMuK0u6ctSXJxlEkqtIEeS8NH6h92UaxT+WxR0uBMntjsbmjdFXS/cEx2ZxbQsDXHgLLhD0Hg1fn3v91ifXU0xCk2t54TMCsWGkfsZMRGoqvIFpjQl+1pDnOPrgv9e6PclRIBBY6p0SPKSAHdd1hM9eu1TQZUJVtIUv1X+lB80zfiX185mkAYD3mr+/v6kqpPmfD7SHo8TzeiROuFA4qM6C1Gf9mS/fHGDortr2v8P9KVHJ8uhtMM8e5dXZQrDPjhUialbJgSZMDPJLaDohmegulY+kLWr8i6yIDAY3CvScUmACbn9RBIfvycpkGWo1YPbH6RYnLHb6BHZu8BIT63qeu6zfIqpHKTDgf5bbUSXvs3wngSjXgi4fdOASBNwcpgO2Tn8RfKA97ODX7pyDfQcRuYDMl3mcWpLbrJq8mliQ1iFehvtqBwKi9whuqQb05JgMAg0zdzDInMzA044tkKjrm8ySsrr2IQomvm8zEvuRB7+T0GqDIiKIx6DfhhRb25X2jPORP5SRets9pfLX8QMRfig8gciHwYCLG5oPn7Gi71EGWhq3rTuPJwKLSpnX+ivgs0rZXWfjRALHCUf7bm6sPsOow7CMevWlnEZAHtg9eKS5piYY+dXqiavKF0jSfF1aDHqW0PCtbVJTlHkUBuA1MkpNLYjW8oc+MwBAa8GJ510V+vuLsNoHWoyqULrcBJtSlLf/5VrvwNOBzjQoFiXayjuj0b23AM9rxms+j3ES9VdSOu0ZBYIjB+W2HoRLZYC+tRO4PTbL8JyBKf+YSU1kGKNDhYYlWGE7QrcsvKrbNDRWN7jcmrgKxjXmWANtP8fBKHiL/Kxo8IfLVzVramzh3HVRG7m3e6zzwlW9Ff09n5XD9wulq3RsZmAO0GoUAiMnDB+kWZbnSi2c90ubHGmDrkVAGtMf9eOek5NL+WpkFXfEdYpVY5SSbdizjyOLgsjZHUvL/70h78SvVu9baGk0rkRY8yWUFqChS/GmZmEkFPiHaZ6mTCeFiK03Cv05msbbD9MMUX0zdjwYXHTRzkNEIWzuBuk4Tt9p1nIrjSZe8ve32QjR3udju5wjAI5ILysll3LcifS/zfssF10qw7DJ1EEeCK2dhmewBKMlw7iZO4UvDI3Jh8Cnf3mLhQT03wmkb9QBsQnZm2rmMqgbfme0+EbTz7ttysPuHq/u2DP2MH8Wcpa474oPYxNXIXCG7RZlZTNXNyFcnZnFjeqnjImd4ZYViVWyF/VpcfwCULIMdH58OMtzVZvIJGKz7EMYzcC11J6kYx9k7oRzx5FUF2h3WAe/YwIiM39rUcaZrbNlga614lecWRtYUYdtoTbk+In5LlRUX9fU+PHfHQlQueK3GNDZZN9BG+Y8Wl2rpunPTQJz22igf5ta+Lhd056+kJIUWdxUslc8WBR5UfEg6ftsZZ1baxeKVrUzKqnMeLE5nzkD3Xz0KxS2IQIZtltRvRjjnfE6JbGRlC0fY+aiaPTwL4NCK378SflB7vEZCK3j9mAhxyW19IroSHw8mjVP1Gx7k1SUCv3YQUFdxACmzGzCMkQlh2QoH68aZETrV4JQ6PkzekGU9mKp9Kfz1uXvpMAISs3rDJQIRA3EDvtRPMY3qKwcvGIg1BlBqT4EDJb65bnGw81k/YvdzHu+V7y+wR9jAZ4MjIbENiKxHDDpWnoOtRYBcBnnBr7DYakHy2VQ7BFAcU8KTnBSGPUpgcv+/kLnTsVDkcgq3G2CRZclKBDWjfU6azk/TimGS6exPQn0+Ovlz8PAfY/xP5PW8TmDFU5RlHF972d6NtMT3aUv9zwm4M4XhpIQaQNA4kiykCSwLKjDp+tWx7jisWvIc46pEzyGvCVAZounqdo2TuJjuqPrrR/9ov7kKF0A8WaGZnw8/rPAIJupTWpSvmHqTDiZ1CwZeswTNGp+aAfumTG+lAxx1amZUpPL8HvjO4w3sQhVE6Na5YtGyLFB3iNFPEEnJxCbUvQmIl7S0NaiXRXlN80xmnl7PTBRYQNiImxU3Ev7j8xw/12ffnZcFNuXldzL1g9692+KMWXYcyPOOiygJOCIVFqLg42i6T7LOjWj0jO1IKZlIyzcqZVUkBjh1UDJtumTYJ9ZvTtian26y+28gW62I+vd89dk6EkgAPLW8XW72lYMQXWF1xRsdsv8cJ7OlJrlf8shjniQIhnFXOM1+nQcMTExWHPG9XJQ8DlaoflJ1ZltRvcT3vNKpldFTr9yJq+ziMF/CCdxHEMWfBhHCPLve27sBdREOWQQrNYWt5TuhK4VooPK42YzTEypt4Lbo8sNU9eZ9a7BoIlo6e1QBP1yKjSWrvQQnY98OdGUZGHEScvEUieC3xs/44u9ll5Por8N1kDdyapq143ViiQSlwf9b6eW2Vpg9nZlyYiEQvK1UF2/zBZELlxDWWXSAdarMHVjMa0EGVkw0SytrgW8XCK5TDefBog0FWcjcLZcV0JQdqH2CBJfK0TvxoEZqGdh+ywouGz80Tfy1xfArGakS3uWl3Gf+k5Rq5i2MaZT4RP+i+Fl/ecxBqB5rP52e/33J8ym2ulNJnFJqXs2EGmnspCo/Ie66thbScJkRvKO/sjt5AdhBkTIxw4+sCaLJmnEV1y3q4EPjiynlQ6F+SJn7mxSLQwVhY4fQyRojg0U5obvjl9mJ6fCazpWVQivbPkrVWoolDGKsq/voo01szENqLEzZwGa4lrQtlYY8qc8az4h3oj3Pnx9lxJGkkRGYTlix1E6mTgGD/SOgNyRI5aq+5XFUXRhxHEOdcWRQQQoamkswQNfO+/POKCnqmP2mRpj54/VLooaRbcrYbzstIUVry0pXrZ9WE5AfNLDwGLMcrnaGxWU6OpOprNVvTwK/ByfIecggv1/lfDWxhMO2uas6vcFlSVAF428XANRzK2caXTAK4Im5YlJT77mOfU6olwNjMmm3O2sgWmsEk9WPGznHza2RybDnVY72m3V+mGSnavuNmeaFXDEaJ8qhm7Eb8+Wj9nmiWdmavSRau27OUrOVj1kSqQcvP4/Rext3f9X1eWzQz64/SUzGahuhRHI5Q5+Arc2bjjTuTlt7tP6Fx8qWuAq7h0pREGUf2TrFDlVWJIJQuxMODE8Jg5sFjEv3mVEyYaFycvfzFbqVh8SysPl3yyM4cWjgXUXzN2vccDzc4IDYk2gq20uGzMDrt4P5KiBfSTeY2weK+Ziv4nfm0tetXD/1O1OpOBZ+D/xdyRThQkLiD7HcAAAAAT0VDVEFkLTIAAc03tTcAAJzwqnaxxGf7AgAAAAAEWVr/uPrQ"
                        )
                    )
                )
            )
        )
    )
)
