## wxShare
one step config WeChat JS-SDK

## HOW TO USE
### 1. import wxShare
```shell
yarn add wxShare
```

then

```js
import wxshare from './wxShare'
```

### 2. import wx-js-sdk
```html
<script src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></script>
```

### 3. config & reRegist
```js
wxshare({
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
wxshare.reRegist({
  title: 'share title',
  desc: 'share subtitle',
  link: location.href,
  imgUrl: '/share300x300.jpg',
  success: () => {}
})
```