import React from 'react'
import { createPortal } from 'react-dom'
// Create Portal is a React API for rendering some JSX outside your main component.
const PopupComponent = ({copied}) => {
  return createPortal (<section>
    {copied && (
      <div style={{position: "absolute", bottom:"5rem"}}>
        Copied to Clipboard!
      </div>
    )}
  </section>,
  document.querySelector("#poppup-component")
  );
}

export default PopupComponent