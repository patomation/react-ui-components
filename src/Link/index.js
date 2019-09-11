import React, {useState} from 'react';
import styles from './styles.js'

export default (props) => {

  const [hover, setHover] = useState(false);

  const { className, children, onClick, background, color, style, href, hoverStyle, onHover } = props;

  return(
    <a
      onMouseEnter={()=>{
        setHover(true);
        if(onHover) onHover(true);
      }}
      onMouseLeave={()=>{
        setHover(false);
        if(onHover) onHover(false);
      }}
      href={href}
      onClick={onClick}
      className={className}
      style={{
        ...styles.container,
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null ),
        ...style,
        ...( hover ? { ...styles.hover, ...hoverStyle } : null)
      }}>

      {children}

    </a>
  )
}