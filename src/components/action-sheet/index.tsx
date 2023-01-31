import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { CvActionSheetProps, CvActionSheetState } from 'types/action-sheet'

export default class CvActionSheet extends React.Component<
  CvActionSheetProps,
  CvActionSheetState
> {
  public static defaultProps: CvActionSheetProps
  public static propTypes: InferProps<CvActionSheetProps>

  public constructor(props: CvActionSheetProps) {
    super(props)
    const { isOpened } = props

    this.state = {
      _isOpened: isOpened
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: CvActionSheetProps): void {
    const { isOpened } = nextProps
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })

      !isOpened && this.handleClose()
    }
  }

  private handleClose = (): void => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
  }

  //   private handleCancel = (): void => {
  //     if (typeof this.props.onCancel === 'function') {
  //       return this.props.onCancel()
  //     }
  //     this.close()
  //   }

  private close = (): void => {
    this.setState(
      {
        _isOpened: false
      },
      this.handleClose
    )
  }

  private handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
    e.preventDefault()
  }

  public render(): JSX.Element {
    // const { title, cancelText, className } = this.props
    const { className } = this.props
    const { _isOpened } = this.state

    const rootClass = classNames(
      'cv-action-sheet',
      {
        'cv-action-sheet--active': _isOpened
      },
      className
    )

    return (
      <View className={rootClass} onTouchMove={this.handleTouchMove}>
        <View onClick={this.close} className='cv-action-sheet__overlay' />
        <View className='cv-action-sheet__container'>
          {/* {title && <CvActionSheetHeader>{title}</CvActionSheetHeader>}
          <CvActionSheetBody>{this.props.children}</CvActionSheetBody>
          {cancelText && (
            <CvActionSheetFooter onClick={this.handleCancel}>
              {cancelText}
            </CvActionSheetFooter>
          )} */}
        </View>
      </View>
    )
  }
}

CvActionSheet.defaultProps = {
  title: '',
  cancelText: '',
  isOpened: false
}

CvActionSheet.propTypes = {
  title: PropTypes.string,
  onClose: PropTypes.func,
  onCancel: PropTypes.func,
  isOpened: PropTypes.bool.isRequired,
  cancelText: PropTypes.string
}
