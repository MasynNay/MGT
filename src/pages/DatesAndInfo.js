import React from "react";
import "./DatesAndInfo.css"; // Import the updated CSS file

const DatesAndInfo = () => {
  return (
    <div className="dates-info-page">
      <h1>2023 Competition Season Information</h1>

      <section className="content-box">
        <h2>Competition Meet</h2>
        <p>February 3-4, 2023</p>
        <p>Legacy Events Center, 151 S 1100 W, Farmington, UT</p>
      </section>

      <section className="content-box">
        <h2>Competition Meet</h2>
        <p>February 24-25, 2023</p>
        <p>Legacy Events Center, 151 S 1100 W, Farmington, UT</p>
      </section>

      <section className="content-box">
        <h2>Competition Meet</h2>
        <p>March 24-25, 2023</p>
        <p>Legacy Events Center, 151 S 1100 W, Farmington, UT</p>
      </section>

      <section className="content-box">
        <h2>Utah State Championships - All Athletes</h2>
        <p>April 14-15, 2023</p>
        <p>Legacy Events Center, 151 S 1100 W, Farmington, UT</p>
        <p>Athlete Entry Fee: $85</p>
      </section>

      <section className="content-box">
        <h2>Important Rules and Competition Qualification Notes</h2>
        <h3>Qualification for State</h3>
        <ul>
          <li>Athlete must have competed in two PTAU Invitational competitions prior to State.</li>
        </ul>
        <h3>Qualification for Regionals</h3>
        <ul>
          <li>Athletes must compete in two PTAU Invitational Competitions</li>
          <li>Athletes must compete at the State Championships</li>
        </ul>
        <h3>Qualification for Nationals (USA GymChamps/Stars and Stripes)</h3>
        <ul>
          <li>Athletes must compete in two PTAU Invitational Competitions</li>
          <li>Athletes must compete at the State Championships</li>
          <li>Athletes must compete at the Regional Championships</li>
          <li>Athletes must achieve the qualifying score on each event at either State Champs or Regional Champs</li>
        </ul>
      </section>

      <section className="content-box">
        <h2>Competition Dress Code</h2>
        <ul>
          <li>Girls: Team Leotard (undergarments of any type must not be visible: 0.2 pts. deduction from the total score.)</li>
          <li>Boys: Team competition shirt & shorts (no longer than a 5" inseam)</li>
          <li>Double Mini requires white foot covering - Double mini shoes are best</li>
          <li>NO colored socks or logos on white socks</li>
          <li>NO jewelry (earrings of any sort)</li>
          <li>Body piercings that are visible must be removed.</li>
          <li>Bandages and support devices must not create a big contrast with the skin color. Any violation will result in a 0.2 pts. deduction from the total score.</li>
          <li>Hair: must be secured tightly to your head in a bun style - (NO bobby pins. flat clips only)</li>
        </ul>
      </section>
    </div>
  );
};

export default DatesAndInfo;
