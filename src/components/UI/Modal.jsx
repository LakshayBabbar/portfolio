import React from 'react';
import { createPortal } from "react-dom";
import './Modal.css';

export default function Modal({modalClose}) {
  const btn_style = {
    height: "3rem",
    width: "7rem",
    borderRadius: "20px",
    border: "4px solid white",
    background: "transparent",
    color: "white",
    fontSize: "1.2rem",
    padding: "0.2rem",
  };
  return createPortal(
    <React.Fragment>
      <div className="backdrop">
        <div className="modal">
          <h2>Thanks!</h2>
          <p>Your message has been send successfully.</p>
          <button style={btn_style} onClick={modalClose}>Okay!</button>
        </div>
      </div>
    </React.Fragment>,document.getElementById('Modal')
  );
}