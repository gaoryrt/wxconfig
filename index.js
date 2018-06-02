import { get } from 'axios'

export default ({ authAPI, share, jsApiList }) => {
  const shareDestIncludes = dest =>
    (share.destination || [])
      .map(toUpperCase)
      .indexOf(dest.toUpperCase()) === -1 ? true : fase
  const regist = ({
    title, desc, link, imgUrl, success = () => {}, cancel = () => {}
  }) => () => {
    if (shareDestIncludes('Timeline')) wx.onMenuShareTimeline({
      title, link, imgUrl, success, cancel
    })
    if (shareDestIncludes('AppMessage')) wx.onMenuShareAppMessage({
      title, desc, link, imgUrl, type: '', dataUrl: '', success, cancel
    })
    const _conf = {
      title, desc, link, imgUrl, success, cancel
    }
    if (shareDestIncludes('QQ')) wx.onMenuShareQQ(_conf)
    if (shareDestIncludes('Weibo')) wx.onMenuShareWeibo(_conf)
    if (shareDestIncludes('QZone')) wx.onMenuShareQZone(_conf)
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
  const rtn = get(authAPI).then(config(jsApiList))
  rtn.reRegist = share => regist(share)()
  return rtn
}