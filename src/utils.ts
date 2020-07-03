// common utils
import { IDragPos } from './index'

const windowInnerWidth = window.innerWidth
const windowInnerHeight = window.innerHeight

/**
 * 计算拖拽范围
 * @param dragInitialDOMRect: 元素初始位置
 * @param dargCurrentPos: 当前元素位置（未更新，即上次拖动到的位置）
 * @param mouseDownEventRef: 鼠标点击时 MouseEvent Ref
 * @param mouseMoveEvent： 鼠标移动过程中 MouseEvent
 * @param dragRange: 拖动范围，默认在屏幕内
 */
const calculateDrapRange = (
  dragInitialDOMRect: ClientRect,
  dargCurrentPos: IDragPos,
  mouseDownEventRef: React.RefObject<MouseEvent>,
  mouseMoveEvent: MouseEvent,
  dragRange: Array<number>
): IDragPos => {
  // 默认拖动范围，依次为：上 右 下 左（以左上角为基准）
  const defaultDragRange = [
    dragInitialDOMRect.top,
    windowInnerWidth - dragInitialDOMRect.right,
    windowInnerHeight - dragInitialDOMRect.bottom,
    dragInitialDOMRect.left
  ]
  const finalDragRange = Object.assign(defaultDragRange, dragRange)
  // 计算 transform 数值
  if (mouseDownEventRef.current) {
    const moseMoveClientX = mouseMoveEvent.clientX // clientX
    const moseMoveClientY = mouseMoveEvent.clientY // clientY

    let distanceX = moseMoveClientX - mouseDownEventRef.current.clientX + dargCurrentPos.translateX
    let distanceY = moseMoveClientY - mouseDownEventRef.current.clientY + dargCurrentPos.translateY
    // 处理移动范围
    if (distanceX <= 0) {
      // 左边移动
      distanceX = -Math.min(Math.abs(distanceX), finalDragRange[3])
    } else {
      // 右边移动
      distanceX = Math.min(distanceX, finalDragRange[1])
    }

    if (distanceY <= 0) {
      // 向上移动
      distanceY = -Math.min(Math.abs(distanceY), finalDragRange[0])
    } else {
      // 向下移动
      distanceY = Math.min(distanceY, finalDragRange[2])
    }
    return { translateX: distanceX, translateY: distanceY }
  }
  return { translateX: 0, translateY: 0 }
}

export { calculateDrapRange }
