## wxconfig
one step config WeChat JS-SDK

## HOW TO USE
### 1. import wxconfig
```shell
yarn add wxconfig
```

then

```js
import wxconfig from 'wxconfig'
```

### 2. import wx-js-sdk
```html
<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
```

### 3. config & reRegist
```js
wxconfig({
  authAPI: WX_GET_JS_API_SIGN,
  share: {
    title: 'share title',
    desc: 'share subtitle',
    link: location.href,
    imgUrl: '/share300x300.jpg',
    success: () => {}
  },
  jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
})

// re-regist, for some reason you'll need it
wxconfig.reRegist({
  title: 'share title',
  desc: 'share subtitle',
  link: location.href,
  imgUrl: '/share300x300.jpg',
  success: () => {}
})
```