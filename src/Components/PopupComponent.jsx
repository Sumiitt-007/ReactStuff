import React from 'react'

const PopupComponent = ({copied}) => {
  return <section>
    {copied && (
      <div style={{position: "absolute", bottom:"5rem"}}>
        Copied to Clipboard!
      </div>
    )}
  </section>
}

export default PopupComponent