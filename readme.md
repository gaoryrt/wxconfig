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
const wxcInstance = wxconfig({
  authAPI: WX_GET_JS_API_SIGN,
  share: {
    dest: ['Timeline', 'AppMessage', 'QQ', 'Weibo', 'QZone'],
    title: 'share title',
    desc: 'share subtitle',
    link: location.href,
    imgUrl: '/share300x300.jpg',
    // success fn & cancle fn are optional
    success: () => {},
    cancle: () => {}
  },
  jsApiList: ['onMenuShareTimeline', 'orSomeOtherAPI']
})

// re-regist, for some reason you'll need it
wxcInstance.reRegist({
  title: 'another title',
  desc: 'another subtitle',
  link: location.href,
  imgUrl: '/anotherShare300x300.jpg'
})
```