import React from "react";
import { query } from "../../lib/db";

const index = (props) => {
  const data = props.response;
  return (
    <div>
      <div>title: {data.title}</div>
      <div>address: {data.address}</div>
      <div> description: {data.description}</div>
    </div>
  );
};

export async function getStaticProps(context) {
  const id = context.params.meetupId;
  const res = await query("select * from meetapp where id = (?)", [id]);
  // const res = await fetch("http://localhost:3000/api/getmeetup");
  // const response = await res.json();
  let response = await res[0];
  response = {
    id: response.id,
    title: response.title,
    address: response.address,
    description: response.description,
  };

  return {
    props: { response },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/getmeetups");
  const response = await res.json();
  const paths = response.map((r) => ({
    params: { meetupId: r.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export default index;
