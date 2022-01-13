import React from "react";
import Meetup from "./Meetup";

const MeetupLIst = (props) => {
  const meetups = props.meetup.map((meetup) => (
    <Meetup key={meetup.id} {...meetup} />
  ));
  return meetups;
};

export default MeetupLIst;
