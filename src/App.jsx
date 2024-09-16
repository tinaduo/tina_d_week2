import React from "react";

function Discography({ songTitles, albumName }) {
  const listItems = songTitles.map((songTitle) => (
    <li key={songTitle.toString()}>{songTitle}</li>
  ));

  return (
    <>
      <details name="SZA" open="false">
        <summary>{albumName}</summary>
        <ol>{listItems}</ol>
      </details>
    </>
  );
}

function App() {
  const albumOne = [
    "Supermodel",
    "Love Galore (feat. Travis Scott)",
    "Doves in the Wind (feat. Kendrick Lamar)",
    "Drew Barrymore",
    "Prom",
    "The Weekend",
    "Go Gina",
    "Garden (Say It Like Dat)",
    "Broken Clocks",
    "Anything",
    "Wavy (Interlude) [feat. James Fauntleroy]",
    "Normal Girl",
    "Pretty Little Birds (feat. Isaiah Rashad)",
    "20 Something"
  ];

  const albumTwo = [
    "SOS",
    "Kill Bill",
    "Seek & Destroy",
    "Low",
    "Love Language",
    "Blind",
    "Used (feat. Don Toliver)",
    "Snooze",
    "Notice Me",
    "Gone Girl",
    "Smoking on my Ex Pack",
    "Ghost in the Machine (feat. Phoebe Bridgers)",
    "F2F",
    "Nobody Gets Me",
    "Conceited",
    "Special",
    "Too Late",
    "Far",
    "Shirt",
    "Open Arms (feat. Travis Scott)",
    "I Hate U",
    "Good Days",
    "Forgiveless (feat. Ol' Dirty Bastard)"
  ];

  return (
    <div className="main-container">
      <h1>MyTunes</h1>
      <div className="artist-image">
        <img
          src="https://bahsredandwhite.com/wp-content/uploads/2023/01/channels4_profile.jpg"
          alt="SZA's Ctrl"
        />
        <div className="drop-down">
          <h1 className="artist-name">SZA Discography</h1>
          <Discography songTitles={albumOne} albumName="Ctrl" />
          <Discography songTitles={albumTwo} albumName="SOS" />
        </div>
      </div>
    </div>
  );
}

export default App;