import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const resumeLink = "https://drive.google.com/file/d/1ZX2mSSHOVsfOolu4xAqdSez5xDpv1_9V/view?usp=drive_link";

const Hero = () => {
  return (
    <div className="hero-card d-flex flex-column justify-content-center align-items-center">
      <h1 className="text-white fw-bold">Prashant Choudhary</h1>
      <div className="d-flex gap-1 fs-5 typewriter-text"><span>I'm a</span><Typewriter /></div>
      <div className="d-flex justify-content-center align-items-center gap-3 fs-4">
        <a href="https://github.com/pkcprashant" target="_blank"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/pkcprashant" target="_blank"><FaLinkedinIn /></a>
        <a href="mailto:pc22230@gmail.com" target="_blank"><MdEmail /></a>
      </div>

      <a href={resumeLink} target="_blank" className="d-flex align-items-center justify-content-center gap-2 rounded py-2 px-3 mt-3 resume">
        <IoCloudDownloadOutline />
        <span>View Resume</span>
      </a>
    </div>
  )
}

const Typewriter = () => {
  const roles = ["Fullstack Developer.", "React Developer.", "Java Developer.", "Frontend Developer.", "Angular Developer."];
  const typingSpeed = 150;
  const pauseTime = 1500;

  const [currentKeyword, setCurrentKeyword] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = roles[currentIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), typingSpeed / 2);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => setCharIndex(charIndex + 1), typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    }

    setCurrentKeyword(currentText.substring(0, charIndex));
  }, [charIndex, currentIndex, isDeleting, roles]);

  return (
    <div>
      <span className="fw-bold">{currentKeyword}</span>
      <span className="typewriter-cursor">|</span>
    </div>
  );
};

export default Hero