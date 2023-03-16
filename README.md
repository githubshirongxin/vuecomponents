## odometer.js 的使用例子

To import the Odometer library in Vue 3, you can follow these steps:

Install the Odometer library using npm or yarn:

```
npm install odometer
```

or
```
yarn add odometer
```

In your Vue component, import the Odometer library and register it as a global component:
```
import Odometer from 'odometer';
import 'odometer/themes/odometer-theme-default.css';

export default {
  mounted() {
    const odometer = new Odometer({
      el: this.$refs.odometer,
      value: 0,
      format: '(,ddd).dd',
      theme: 'default'
    });
    odometer.update(123456);
  },
  template: '<div ref="odometer"></div>'
}
```

In this example, we're importing the Odometer library and its default CSS theme, creating a new instance of Odometer in the mounted lifecycle hook, and updating its value to 123456.

Note that you'll need to include the Odometer CSS theme for the odometer to be styled properly. You can choose a different theme by importing a different CSS file from the odometer/themes directory.


```sh
npm install odometer

```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### 主题下载css。
user-number-animation 调用number-animation

