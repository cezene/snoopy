import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

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
            user={loggedIn.firstName || "Snoopy"}
            subtext="Access to manage your account and trasactions efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
          RECENTE TRANSACTIONS
      </div>
      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[]}
      />
    </section>
  );
};

export default Home;
