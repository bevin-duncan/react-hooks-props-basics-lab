import React from "react";
import Links from "./Links";

function About({user}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {user.bio ? 
        <p>{user.bio}</p>
        :
        null
      }
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links links={user.links} />
    </div>
  );
}

export default About;
