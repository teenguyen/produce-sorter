import React from "react";
import { Link } from "react-router-dom";

import MiniIcon from "./components/MiniIcon";
import { shuffle } from "./../util/Functions";
import { ROUNDS } from "./../util/Constants";

export default function GroupPicker(props) {
  let onChange = event => {
    props.setGroup(event.target.value);
  };

  let girlList = props.girls.filter(girl => {
    switch (props.currentGroup) {
      case "5":
        return (
          !girl.left && !girl.elim1 && !girl.elim2 && !girl.elim3 && !girl.final
        );
      case "4":
        return !girl.left && !girl.elim1 && !girl.elim2 && !girl.elim3;
      case "3":
        return !girl.left && !girl.elim1 && !girl.elim2;
      case "2":
        return !girl.left && !girl.elim1;
      case "1":
        return !girl.left;
      case "0":
      default:
        return true;
    }
  });
  girlList = shuffle(girlList);

  const availableGroups = ROUNDS.map(group => (
    <option key={group.key} value={group.key}>
      {group.name}
    </option>
  ));

  const girlObj = girlList.map(girl => (
    <MiniIcon key={girl.name} girl={girl} />
  ));

  return (
    <div className="group-picker">
      <h2>Welcome to the PRODUCE 48 Sorter</h2>
      <p className="sub-text">For best results, avoid picking tied.</p>
      <p className="sub-text">
        Girls that fall into no opinion will be removed from the sort and added
        to the bottom of your results.
      </p>
      <p className="sub-text">
        Please{" "}
        <a
          href="https://github.com/RYUUSEiiSTAR/produce48-sorter/issues"
          alt="Github issues page for PRODUCE48-SORTER"
        >
          report any issues here
        </a>
      </p>
      <br />
      <select value={props.currentGroup} onChange={onChange}>
        {availableGroups}
      </select>
      <br />
      <br />
      <Link to="/sort">
        <button
          type="button"
          className="start-btn"
          onClick={() => props.updateGirls(girlList)}
        >
          START!
        </button>
      </Link>
      <br />
      <br />
      <div className="flex flex-wrap">{girlObj}</div>
    </div>
  );
}
