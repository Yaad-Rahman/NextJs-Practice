import Head from "next/head";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";

const HomePage = ({ events }) => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content="Find a lot of great events!" />
      </Head>
      <EventList items={events} />
    </div>
  );
};

export default HomePage;

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
