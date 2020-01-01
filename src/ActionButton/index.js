import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import { Clickable, Shape, Center, Icon } from '../'
import posed from 'react-pose'

const PosedDiv = posed.div({
  hover: {
    transform: 'scale(1.1)',
    transition: { type: 'spring', stiffness: 100 }
  },
  nohover: {
    transform: 'scale(1)',
    transition: { type: 'spring', stiffness: 100 }
  }
})

/**
* an action button for the lower right hand corner that you can assign stuff to do things
**/
const ActionButton = ({
  onClick,
  background, color, style,
  icon = 'add', width = '3rem'
}) => {
  const [hover, setHover] = useState(false)

  return (
    <Clickable
      className={'action-button'}
      onClick={onClick}
      style={{
        ...styles.container,
        width,
        position: 'absolute',
        bottom: '1rem',
        right: '1rem',
        ...style
      }}>
      <PosedDiv
        pose={ hover ? 'hover' : 'nohover' }
        onMouseEnter={() => {
          setHover(true)
        }}
        onMouseLeave={() => {
          setHover(false)
        }}>
        <Shape
          className={'action-button__circle'}
          circle
          innerStyle={{
            ...(background ? { background: background } : null),
            boxShadow: '0 1px 0.2rem rgba(0,0,0,0.25)'
          }}>
          <Center
            className={'action-button__center'}
            style={{
              textAlign: 'center'
            }}>
            <Icon
              className={'action-button__icon'}
              name={icon}
              color={color}
              responsive/>
          </Center>
        </Shape>
      </PosedDiv>
    </Clickable>
  )
}

ActionButton.propTypes = {
  onClick: PropTypes.func,
  background: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
  /**
  * set the icon in the center
  **/
  icon: PropTypes.string,
  /**
  * set the width of the action button
  **/
  width: PropTypes.string
}

export default ActionButton