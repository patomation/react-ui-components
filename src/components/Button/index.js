import React, {useState, useEffect} from 'react';
import styles from './styles.js'

export default (props) => {

  const [hover, setHover] = useState(false);
  const [touched, setTouched] = useState(false);
  const [active, setActive] = useState(props.active || false);

  //Allow it to be set to active from the ouseside
  useEffect(()=>{
    setActive(props.active)
  },[props.active])

  const {
    className, type, disabled, enabled,
    onClick, onMouseDown, onMouseUp, onTouchStart, onTouchEnd,
    onMouseEnter, onMouseLeave,
    onDown, onUp,
    children, title, //Child or title works for the button label
    background, color, style,
    hoverStyle, disabledStyle, activeStyle, enabledStyle,
    onHover, kind
  } = props;

  const handleDown = () => {
    //Make ui active
    setActive(true);
    //Handle callback
    if(onDown) onDown();
  }

  const handleUp = () => {
    //Make ui de-active
    setActive(false);
    //Handle callback
    if(onUp) onUp();
  }
  return(
    <button
      type={type}
      disabled={disabled}
      className={className}
      onTouchStart={() => {
        handleDown();
        setTouched(true);
        //Expose event to the oustide
        if (onTouchStart) onTouchStart();
      }}
      onTouchEnd={() => {
        handleUp()
        //Expose event to the oustide
        if (onTouchEnd) onTouchEnd();
       }}
      onMouseDown={() => {
        //Ignore this event if touched
        if(!touched) {
          handleDown();
          //Expose event to the oustide
          if (onMouseDown) onMouseDown();
        }
      }}
      onMouseUp={() => {
        //Ignore this event if touched
        if(!touched) {
          handleUp();
          //Expose event to the oustide
          if (onMouseUp) onMouseUp();

        //Since onMouseUp gets called with touch events set touched false here...
        } else {
          setTouched(false);
        }
      }}
      onClick={onClick}
      onMouseEnter={()=>{
        setHover(true);
        if(onMouseEnter) onMouseEnter(); //I find it more usefull to bubble up these events
        if(onHover) onHover(true); //This was here for testing. This may get depreciated.
      }}
      onMouseLeave={()=>{
        setHover(false);
        if(onMouseLeave) onMouseLeave();  //I find it more usefull to bubble up these events
        if(onHover) onHover(false); //This was here for testing. This may get depreciated.
        setActive(false); //Make it not active anymore
      }}
      style={{
        ...styles.default,
        ...( styles.kind[ kind || 'normal' ]),
        ...( background ? { background: background } : null ),
        ...( color ? { color: color } : null),
        ...style,
        ...( hover ? (styles.kind[ kind || 'normal' ].hover) : null),
        ...( hover ? hoverStyle : null),
        ...( enabled ? ( styles.kind[ kind || 'normal' ].enabled || enabledStyle ) : null),
        ...( enabled ? enabledStyle : null),
        ...( disabled ? ( styles.kind[ kind || 'normal' ].disabled || disabledStyle ) : null),
        ...( disabled ? disabledStyle : null),
        ...( active ? (styles.kind[ kind || 'normal' ].active) : null),
        ...( active ? activeStyle : null),
      }}>

        { children || title }

    </button>
  )
}
