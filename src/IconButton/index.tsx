import * as React from 'react'
import { useState, FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'
import config from '../config'

import Icon from '../Icon'
import Button from '../Button'
import Badge from '../Badge'

interface Props {
  children?: [ReactNode] | ReactNode
  onClick?: () => void
  className?: string
  background?: string
  color?: string
  style?: object
  iconStyle?: object
  titleStyle?: object
  activeStyle?: object
  name?: string
  icon?: string
  active?: boolean
  title?: string
  width?: string
  hoverColor?: string
  badge?: boolean | number | string
}
/**
* a clickable icon button with hover and an optional title
**/
const IconButton: FunctionComponent<Props> = ({
  onClick, className,
  background, color,
  style, iconStyle, titleStyle, activeStyle,
  hoverColor,
  name, icon, active, title, width,
  badge
}) => {
  const [hover, setHover] = useState(false)

  return (
    <Button
      kind='none'
      className={concat('iconbutton', className)}
      onClick={onClick}
      style={{
        ...styles.container,
        ...(background ? { background: background } : null),
        ...(color ? { color: color } : null),
        ...(width ? { width: width } : null),
        ...style,
        ...(active ? styles.active : null),
        ...(active ? activeStyle : null)
      }}
      onHover={setHover}>

      <Icon
        className='iconbutton__icon'
        responsive={!!width}
        color={ hover
          ? (hoverColor || color || config.color.primary)
          : (color || config.color.primary) }
        style={{
          ...styles.icon,
          ...iconStyle
        }}
        name={icon || name}/>

      {title ? <div
        className='iconbutton__title'
        style={{
          ...styles.title,
          ...titleStyle
        }}>
        {title}
      </div> : null}

      {badge
        ? <Badge
          icon={typeof badge === 'string' ? badge : ''}>
          {typeof badge === 'number' ? badge : ''}
        </Badge>
        : null}

    </Button>
  )
}

export default IconButton
