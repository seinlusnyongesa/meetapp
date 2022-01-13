import React from "react";

import AddMeetup from "../../components/AddMeetup";

const index = () => {
  const handleAddMeetup = async (values) => {
    const res = await fetch("/api/addmeetup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(values),
    });
    const response = await res.json();

    // console.log(values);
  };
  return <AddMeetup handleAddMeetup={handleAddMeetup} />;
};

export default index;
