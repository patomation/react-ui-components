import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../_utility/concat'
import extract from '../_utility/extract'
import ratio from '../_utility/ratio'

const Typography = ({
  className, children,
  background, color, style,
  size = '1rem', bold = false
}) => {

  const {number, unit} = extract(size)

  return (
    <p
      className={className}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        display: 'inline-block',
        fontSize: `${number}${unit}`,
        // lineHeight: `${ ratio(number, 1) }${unit}`,
        ...( bold ? {
          fontWeight: 'bold'
        } : null ),
        ...style
      }}>

      {children}

    </p>
)}
Typography.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.string,
  bold: PropTypes.bool
}

export default Typography
