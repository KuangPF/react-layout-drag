import React, { useState, useEffect, useCallback, useRef } from 'react'
import classnames from 'classnames'
import { calculateDrapRange } from './utils'
import { cssPrefix } from './constant'
import './index.css'

interface IProps {
  /* id */
  id: string
  /* 自定义外层类名 */
  className: string
  /* 拖动范围，依次为上下左右 */
  dragRange: Array<number>
  /* children */
  children: React.ReactNode
}

export interface IDragPos {
  translateX: number
  translateY: number
}
const initDragPos = {
  translateX: 0,
  translateY: 0
}

const defaultProps: Partial<IProps> = {
  id: 'react-layout-drag-wrap'
}

const ReactLayoutDrag = (props: Partial<IProps>): JSX.Element => {
  const [dragPos, setDragPos] = useState(initDragPos)
  const mousedownRef = useRef({} as MouseEvent)
  const dragInitialDOMRectRef = useRef({} as ClientRect)
  const { dragRange = [] } = props
  // handle mousemove action
  const handleMouseMove = useCallback(
    (e) => {
      // calculate moving distance
      const nextDragPos = calculateDrapRange(
        dragInitialDOMRectRef.current,
        dragPos,
        mousedownRef,
        e,
        dragRange
      )
      setDragPos(nextDragPos)
    },
    [JSON.stringify(dragPos)]
  )

  // hanlde mousedown action
  const handleMouseDown = useCallback(
    (e) => {
      mousedownRef.current = e
      document.onmousemove = handleMouseMove
    },
    [handleMouseMove]
  )

  // handle mouseup action
  const handleMouseUp = useCallback(() => {
    document.onmousemove = null
  }, [])

  // event listener
  useEffect(() => {
    const { id } = props as IProps
    const dragTarget = document.getElementById(id)
    if (dragTarget) {
      dragTarget.addEventListener('mousedown', (e) => {
        handleMouseDown(e)
      })

      document.addEventListener('mouseup', () => {
        handleMouseUp()
      })
    }
  }, [handleMouseDown, handleMouseUp])

  useEffect(() => {
    const { id } = props as IProps
    const dragTarget = document.getElementById(id)
    if (dragTarget) {
      dragInitialDOMRectRef.current = dragTarget.getBoundingClientRect()
    }
  }, [])

  const wrapStyle = {
    transform: `translate(${dragPos.translateX}px, ${dragPos.translateY}px)`
  }

  // props className
  const { className, children, id } = props
  return (
    <div
      id={id}
      className={classnames([`${cssPrefix}-wrap`, className])}
      style={wrapStyle}
    >
      {children}
    </div>
  )
}

ReactLayoutDrag.defaultProps = defaultProps

export { ReactLayoutDrag }
