import React from 'react'

import ReactLayoutDrag from 'react-layout-drag'

const App = () => {
  return (
    <React.Fragment>
      <div className='drap-container'>
        <p>1. 屏幕范围内拖动</p>
        <ReactLayoutDrag id='layout-drag-test'>
          <div className='drag-layout-content'>drag me</div>
        </ReactLayoutDrag>
      </div>
      <div className='drap-container'>
        <p>2. 设置拖动范围</p>
        <div className='drag-range'>
          <ReactLayoutDrag dragRange={[50, 50, 50, 50]}>
            <div className='drag-layout-content'>范围内拖动</div>
          </ReactLayoutDrag>
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
