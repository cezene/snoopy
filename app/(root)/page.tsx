import React from "react";
import HeaderBox from "@/components/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "Luna" };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          {" "}
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn.firstName || "Uncle Scoorage"}
            subtext="Access to manage your account and trasactions efficiently"
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
