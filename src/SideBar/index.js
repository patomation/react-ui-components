import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles.js'
import concat from '../../utility/concat.js'
import config from '../config.js'

const SideBar = ({
  className, children, menu,
  style, menuStyle, contentStyle,
  width,
  right // Menu position. Defaults to left
}) => {
  return (
    <div
      className={concat('sidebar', className)}
      style={{
        ...styles.container,
        ...style
      }}>

      <menu
        className='sidebar__menu'
        style={{
          ...styles.menu,
          ...(width ? { width: width } : null),
          ...(right ? { right: 0 } : null),
          ...menuStyle
        }}>

        {menu}

      </menu>

      <main
        className='sidebar__content'
        style={{
          ...styles.content,
          ...(right ? {
            marginRight: width || config.size.sideBar
          } : {
            marginLeft: width || config.size.sideBar
          }),
          ...contentStyle
        }}>

        {children}

      </main>

    </div>
  )
}

SideBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  menu: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  style: PropTypes.object,
  menuStyle: PropTypes.object,
  contentStyle: PropTypes.object,
  width: PropTypes.string,
  right: PropTypes.bool
}

export default SideBar
