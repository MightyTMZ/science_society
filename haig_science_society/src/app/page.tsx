import React from "react";
import LandingPageBanner from "@/components/LandingPageComponents/Banner/Banner";
import UpcomingEvents from "@/components/LandingPageComponents/UpcomingEvents/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <LandingPageBanner />
      <UpcomingEvents />
    </div>
  );
};

export default Home;
