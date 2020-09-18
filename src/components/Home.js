import React, { useState } from "react";
import "../App.css";

const Home = () => {
  const [profile, setProfile] = useState({
    name: "Ene Simona",
    age: "25",
    height: "172 cm",
    weight: "54 kg",
    target: "55 kg",
  });

  return (
    <div className="section">
      <h1>My profile</h1>
      <h3>Name: {profile.name}</h3>
      <h3>Age: {profile.age}</h3>
      <h3>Height: {profile.height}</h3>
      <h3>Weight: {profile.weight}</h3>
      <h3>Target: {profile.target}</h3>
    </div>
  );
};

export default Home;
