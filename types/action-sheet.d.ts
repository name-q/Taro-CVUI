import { MouseEvent, ComponentClass } from 'react'
import { CommonEvent } from '@tarojs/components/types/common'

import CvComponent from './base'

export interface CvActionSheetProps extends CvComponent {
  /**
   * 是否展示元素
   * @default false
   */
  isOpened: boolean
  /**
   * 元素的标题
   */
  title?: string
  /**
   * 取消按钮的内容
   */
  cancelText?: string
  /**
   * 元素被关闭触发的事件
   */
  onClose?: (event?: CommonEvent) => void
  /**
   * 点击了底部取消按钮触发的事件
   */
  onCancel?: (event?: CommonEvent) => void
}

export interface CvActionSheetState {
  _isOpened: boolean
}

export interface CvActionSheetHeaderProps extends CvComponent {}

export interface CvActionSheetFooterProps extends CvComponent {
  onClick?: Function
}

export interface CvActionSheetBodyProps extends CvComponent {}

export interface CvActionSheetItemProps extends CvComponent {
  /**
   * 点击 Item 触发的事件
   */
  onClick?: (event?: CommonEvent) => void
}

declare const CvActionSheetItem: ComponentClass<CvActionSheetItemProps>

declare const CvActionSheet: ComponentClass<CvActionSheetProps>

export default CvActionSheet

export { CvActionSheetItem }
