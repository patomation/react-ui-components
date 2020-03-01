import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import extract from '../_utility/extract'
import config from '../config'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  style?: object
  disabled?: boolean
  vertical?: boolean
  half?: boolean
}
/**
* A spacer component that adds a standard amount of padding between things
*/
const Gutter: FunctionComponent<Props> = ({
  className, style, disabled, vertical, half
}) => {
  const Tag = vertical ? 'span' : 'div'

  const { number, unit } = extract(config.size.gutters)
  const padding = `${number * (half ? 0.5 : 1)}${unit}`

  return !disabled
    ? <Tag
      className={concat('gutter', className)}
      style={{
        ...(vertical
          ? {
            ...styles.vertical,
            paddingLeft: padding
          }
          : {
            ...styles.horizontal,
            paddingBottom: padding
          }),
        ...style
      }}>
    </Tag>
    : null
}

if (process.env.NODE_ENV !== 'production') {
  Gutter.propTypes = {
    /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    /**
    * A way to disable the padding style without having to remove the element
    **/
    disabled: PropTypes.bool,
    /**
    * Vertical gutter spacing option
    **/
    vertical: PropTypes.bool,
    /**
    * devides the gutter amount in half
    **/
    half: PropTypes.bool
  }
}

export default Gutter