import React from 'react';
import { createPortal } from "react-dom";
import './Modal.css';
import Button from './Button';

export default function Modal({modalClose}) {
  const btn_style = {
    height: "3rem",
    width: "7rem",
    borderRadius: "20px"
  };
  return createPortal(
    <React.Fragment>
      <div className="backdrop" onClick={modalClose}>
        <div className="modal">
          <h2>Thanks!</h2>
          <p>Your message has been send successfully.</p>
          <Button style={btn_style} name="Okay" type="button" custom_style={btn_style} onClick={modalClose}/>
        </div>
      </div>
    </React.Fragment>,document.getElementById('Modal')
  );
}
