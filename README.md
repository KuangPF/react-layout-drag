# react-layout-drag

[![NPM](https://img.shields.io/npm/v/react-layout-drag.svg)](https://www.npmjs.com/package/react-layout-drag) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

布局拖拽，用于改变元素在屏幕中的位置。

## Install

```bash
npm install --save react-layout-drag
```

## Use

```tsx
import { ReactLayoutDrag } from 'react-layout-drag'

const App = () => {
  return (
    <ReactLayoutDrag id='test'>
      <div className='drag-layout-children'>content</div>
    </ReactLayoutDrag>
  )
}
```

## Props

#### id
* 说明：拖拽外层元素 id，用于获取该元素 DOM 结构
* 类型：`String`
* 是否必填：否
* 默认值：`react-layout-drag-wrap`

#### dragRange
* 说明：元素拖动范围，以 box 左上角为基准，默认在屏幕范围内拖动，值是长度为 4 的数组，范围依次为：上，右，下，左。
* 类型：`Array`
* 是否必填：否
* 默认值：--

#### className
* 外层元素 className，可以用于自定义外层元素样式
* 类型：`String`
* 是否必填：否
* 默认值：--

## License

MIT © [KuangPF](https://github.com/KuangPF)
