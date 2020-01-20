import * as React from 'react'
import * as PropTypes from 'prop-types'
import { FunctionComponent, ReactNode } from 'react'
import styles from './styles'
import concat from '../_utility/concat'

import Grid from '../Grid'
import Clickable from '../Clickable'

interface Props {
  children?: [ReactNode] | ReactNode
  className?: string
  onClick?: (any, number) => {}
  background?: string
  color?: string
  style?: object
  data?: any[]
  step?: boolean
  active?: string
}

/**
* a fancy file folder tab ui menu
*/
const Tabs: FunctionComponent<Props> = ({
  className,
  onClick,
  background, color, style,
  data = [], active, step
}) =>

  <Grid
    className={concat('tabs', className)}
    col={data.length}
    gap='1rem'
    style={{
      ...styles.container,
      ...(background ? { background: background } : null),
      ...(color ? { color: color } : null),
      ...style
    }}>

    {data.map((item, index) =>
      <Clickable
        className='tabs__tab'
        disabled={step ? active === item || index > data.indexOf(active) : false}
        onClick={() => {
          if (onClick) onClick(item, index)
        }}
        key={`tab_${index}`}
        style={{
          ...styles.tab,
          ...(active === item ? styles.active : null)
        }}>
        {item}
      </Clickable>
    )}

  </Grid>

if (process.env.NODE_ENV !== 'production') {
  Tabs.propTypes = {
  /**
  * Exposes ability to set a custom class name
  **/
    className: PropTypes.string,
    /**
  * click event passes up item name and index
  **/
    onClick: PropTypes.func,
    /**
  * The background color of component
  **/
    background: PropTypes.string,
    /**
  * The text color of component
  **/
    color: PropTypes.string,
    /**
  * Set any styles of the top level element of the component
  **/
    style: PropTypes.object,
    /**
  * string names for tabs
  **/
    data: PropTypes.array,
    /**
  * if defined, disable all those after active index
  **/
    step: PropTypes.bool,
    /**
  * If matches one of the sting from data it will become active
  **/
    active: PropTypes.string
  }
}

export default Tabs
