import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";

const AddMeetup = (props) => {
  const router = useRouter();
  const titleRef = useRef("");
  const descRef = useRef("");
  const addressRef = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    const title = titleRef.current.value;
    const description = descRef.current.value;
    const address = addressRef.current.value;
    // console.log({ titleRef, description });
    props.handleAddMeetup({ address, title, description });
    router.push("/");
  }
  return (
    <div>
      <form>
        <div>
          <input
            type={"text"}
            ref={titleRef}
            placeholder="Enter title"
            name="title"
          />
        </div>
        <div>
          <input
            type={"text"}
            ref={addressRef}
            placeholder="Enter address"
            name="address"
          />
        </div>
        <div>
          <textarea
            ref={descRef}
            placeholder="please enter description"
            name="description"
          />
        </div>
        <button onClick={handleSubmit}>submit</button>
      </form>
    </div>
  );
};

export default AddMeetup;
