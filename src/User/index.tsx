import * as React from 'react'
import { ReactNode, FunctionComponent } from 'react'
import * as PropTypes from 'prop-types'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'

import Icon from '../Icon'
import Image from '../Image'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  style?: object
  image?: string
}

/**
* user icon or user photo component
*/
const User: FunctionComponent<Props> = ({
  className, style, image
}) => {
  return (
    <div
      className={concat('user', className)}
      style={{
        ...styles.container,
        ...(!image ? { background: '#ffffff' } : null),
        ...style
      }}>
      { image
        ? <Image
          square
          className='user__image'
          alt='user'
          style={styles.image}
          src={image} />
        : <Icon name='face' color={config.color.primary} responsive />
      }
    </div>
  )
}

if (process.env.NODE_ENV !== 'production') {
  User.propTypes = {
  /**
    * Exposes ability to set a custom class name
    **/
    className: PropTypes.string,
    /**
    * Set any styles of the top level element of the component
    **/
    style: PropTypes.object,
    image: PropTypes.string
  }
}

export default User