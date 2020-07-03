import React from 'react'

import { ReactLayoutDrag } from 'react-layout-drag'
import 'react-layout-drag/dist/index.css'

const App = () => {
  return (
    <React.Fragment>
      <div>
        <p>1. 屏幕范围内拖动</p>
        <ReactLayoutDrag id='test'>
          <div className='drag-gap-test'>drag-gap-test</div>
        </ReactLayoutDrag>
      </div>
      <div className='drap-container'>
        <p>1. 设置拖动范围</p>
        <div className='drag-range'>
          <ReactLayoutDrag dragRange={[50, 50, 50, 50]}>
            <div className='drag-gap-test'>drag-gap-test</div>
          </ReactLayoutDrag>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
