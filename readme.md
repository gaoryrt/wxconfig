## wxShare
快速设置微信分享内容

## 如何使用
### shell
```shell
yarn add axios
```

### html
```html
<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
```

### js
```js
import wxshare from './wxShare'

wxshare({
  authAPI: WX_GET_JS_API_SIGN,
  share: {
    title: `${referer_name} 邀请你`,
    desc: '必！须！安！利！',
    link: recommend_link,
    imgUrl: '/share300300.jpg',
    success: clickShare
  },
  jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
})
```