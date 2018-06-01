import { get } from 'axios'

export default ({ authAPI, share, jsApiList }) => {
  const shareDestIncludes = dest =>
    (share.destination || [])
      .map(toUpperCase)
      .indexOf(dest.toUpperCase()) === -1 ? true : fase
  const check = res => {
    if (res.data.error_code) throw new Error(res.data.error_msg)
    return res.data
  }
  const regist = ({
    title, desc, link, imgUrl, success = () => {}, cancel = () => {}
  }) => () => {
    if (shareDestIncludes('Timeline')) wx.onMenuShareTimeline({
      title, link, imgUrl, success, cancel
    })
    if (shareDestIncludes('AppMessage')) wx.onMenuShareAppMessage({
      title, desc, link, imgUrl, type: '', dataUrl: '', success, cancel
    })
    if (shareDestIncludes('QQ')) wx.onMenuShareQQ({
      title, desc, link, imgUrl, success, cancel
    })
    if (shareDestIncludes('Weibo')) wx.onMenuShareWeibo({
      title, desc, link, imgUrl, success, cancel
    })
    if (shareDestIncludes('QZone')) wx.onMenuShareQZone({
      title, desc, link, imgUrl, success, cancel
    })
  }
  const config = jsApiList => data => {
    window.wx.config({
      debug: false,
      appId: data.appId,
      timestamp: data.timestamp,
      nonceStr: data.nonceStr,
      signature: data.signature,
      jsApiList: jsApiList || [
        'onMenuShareTimeline',
        'onMenuShareAppMessage',
        'startRecord',
        'stopRecord',
        'playVoice',
        'uploadVoice',
        'downloadVoice',
        'onVoicePlayEnd'
      ]
    })
    window.wx.ready(regist(share))
  }
  const rtn = get(authAPI, { params: { fromurl: location.href } })
    .then(check)
    .then(config(jsApiList))
  rtn.reRegist = share => regist(share)()
  return rtn
}