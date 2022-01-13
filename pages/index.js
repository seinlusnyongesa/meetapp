import MeetupLIst from "../components/MeetupLIst";

export default function Home(props) {
  const meetups = props.response;
  return <MeetupLIst meetup={meetups} />;
}

export async function getStaticProps(context) {
  // const res = await fetch(".//api/getmeetups");
  const res = await fetch("http://localhost:3000/api/getmeetups");
  const response = await res.json();
  if (!response) {
    return {
      notFound: true,
    };
  }
  return {
    props: { response },
  };
}
