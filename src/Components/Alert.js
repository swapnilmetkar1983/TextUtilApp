import React from "react";

export default function Alert(props) {
  const makeFirstLetterCapital = (myword) => {
    const Lower = myword.toLowerCase();
    return Lower.slice(0, 1).toUpperCase() + Lower.slice(1).toLowerCase();
  };
  return (
    props.AlertMsg && (
      <div
        className={`alert alert-${props.AlertMsg.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{makeFirstLetterCapital(props.AlertMsg.type)}</strong> :
        {props.AlertMsg.msg}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}
