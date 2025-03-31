import React from "react";

const Home = () => {
  return (
    <div className="home-container">
      <img 
        src="https://your-image-url.com/image.jpg" // Replace with an actual image URL from Google
        alt="Anurag Singh"
        className="profile-img"
      />
      <h1>Hi, I'm Anurag Singh 👋</h1>
      <p>Full-Stack Developer | Cybersecurity Enthusiast | Java & React</p>
      <a href="/projects" className="btn">View My Work</a>
    </div>
  );
};

export default Home;
