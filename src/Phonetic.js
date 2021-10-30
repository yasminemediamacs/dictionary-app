import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <div className="phonetics-text">/{props.phonetic.text}/</div>
      <br />

      <ReactAudioPlayer src={props.phonetic.audio} controls />
    </div>
  );
}
