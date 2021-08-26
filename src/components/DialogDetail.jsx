import React from "react";
import '../scss/Dialog.scss';

const DialogPokemon = (props) => {
  return (
    <div className="dialog--container" style={{backdropFilter: 'blur(5px)'}}>
      <div className="closed--dialog">
        <button onClick={props.closed}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="dialog--content">
        <div className="card--content" style={{width: props.width, height: props.height}}>
          <span>Test</span>
        </div>
      </div>
    </div>
  )
}

export default DialogPokemon