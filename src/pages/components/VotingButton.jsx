import React from "react";

export default function VotingButton(props) {
  return (
    <button type="button" className={props.className} onClick={props.onClick}>
      {props.content}
    </button>
  );
}
