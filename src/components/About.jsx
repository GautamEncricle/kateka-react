import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const About = () => {
  const [about, setAbout] = useState({});
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("/about")
      .then((res) => res.json())
      .then((data) => setAbout(data))
      .catch((err) => console.error("Error fetching about:", err));

    fetch("/team")
      .then((res) => res.json())
      .then((data) => setTeam(data))
      .catch((err) => console.error("Error fetching team:", err));
  }, []);

  return (
    <div>
      <Navigation />

      <section className="banner">
        <h2>{about.title}</h2>
        {about.image && <img src={about.image} alt={about.title} />}
      </section>

      <section className="common-content">
        <h2>{about.contentTitle}</h2>
        <p>{about.content}</p>
      </section>

      <section className="meet-team-wrapper">
        <h2>Meet The Team</h2>
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.jobTitle}</p>
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </div>
  );
};

export default About;
