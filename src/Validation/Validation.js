import React from "react";

const validation = props => {
  let validationMsg = "Text long enough";

  if (props.textLength <= 5) {
    validationMsg = "Text too short";
  }

  return (
    <div>
      <p>{validationMsg}</p>
    </div>
  );
};

export default validation;
