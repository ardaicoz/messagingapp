import React from "react";

const Popup = (props) => {
    return (
        <div className="popup-box">
            <div className="box">
                <button className="btn-close" onClick={props.handleClose}>x</button>
                Hello, welcome to the popup screen.
            </div>
        </div>
    )
}

export default Popup;