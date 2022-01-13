import Link from "next/link";

import React from "react";
import style from "./Meetup.module.css";

const Meetup = (props) => {
  return (
    <div className={style.container}>
      <div>title: {props.title}</div>
      <div>address: {props.address}</div>
      <div>description: {props.description.slice(0, 14) + "..."}</div>

      <Link href={`/${props.id}`}>
        <button>see full description</button>
      </Link>
    </div>
  );
};

export default Meetup;
