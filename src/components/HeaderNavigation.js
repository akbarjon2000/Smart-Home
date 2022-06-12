import React, { useRef } from "react";
import { Navbar } from "react-bootstrap";
import "./HeaderNavigation.css";



const HeaderNavigation = () => {


  // The speech recognition interface lives on the browser’s window object
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined
  // console.log(SpeechRecognition)




  const searchForm = document.querySelector("#search-form");
  const searchFormInput = document.querySelector("#Input");
  // console.log(searchFormInput)
  // console.log(searchForm)

  // if (SpeechRecognition) {
  //   console.log("Your Browser supports speech Recognition");

  //   const recognition = new SpeechRecognition();
  //   recognition.continuous = true;
  //   // recognition.lang = "en-US";
  //   recognition.lang = "en";

  //   // searchForm.current.insertAdjacentHTML("beforeend", '<button type="button"><i class="fas fa-microphone"></i></button>');
  //   searchFormInput.current.style.paddingRight = "50px";

  //   const micBtn = searchForm.current.querySelector("button");
  //   const micIcon = micBtn.firstElementChild;

  //   micBtn.addEventListener("click", micBtnClick);
  //   function micBtnClick() {
  //     if (micIcon.classList.contains("fa-microphone")) { // Start Voice Recognition
  //       recognition.start(); // First time you have to allow access to mic!
  //     }
  //     else {
  //       recognition.stop();
  //     }
  //   }

  //   recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  //   function startSpeechRecognition() {
  //     micIcon.classList.remove("fa-microphone");
  //     micIcon.classList.add("fa-microphone-slash");
  //     searchFormInput.current.focus();
  //     console.log("Voice activated, SPEAK");
  //   }

  //   recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  //   function endSpeechRecognition() {
  //     micIcon.classList.remove("fa-microphone-slash");
  //     micIcon.classList.add("fa-microphone");
  //     searchFormInput.current.focus();
  //     console.log("Speech recognition service disconnected");
  //   }

  //   recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  //   function resultOfSpeechRecognition(event) {
  //     const current = event.resultIndex;
  //     const transcript = event.results[current][0].transcript;

  //     if (transcript.toLowerCase().trim() === "stop recording.") {
  //       recognition.stop();
  //     }
  //     else if (!searchFormInput.current.value) {
  //       searchFormInput.current.value = transcript;
  //     }
  //     else {
  //       if (transcript.toLowerCase().trim() === "go") {
  //         searchForm.current.submit();
  //       }
  //       else if (transcript.toLowerCase().trim() === "reset input.") {
  //         searchFormInput.current.value = "";
  //       }
  //       else {
  //         searchFormInput.current.value = transcript;
  //       }
  //     }
  //     // searchFormInput.current.current.value = transcript;
  //     // searchFormInput.current.current.focus();
  //     // setTimeout(() => {
  //     //   searchForm.submit();
  //     // }, 500);
  //   }

  //   // info.textContent = 'Voice Commands: "stop recording", "reset input", "go"';

  // }
  // else {
  //   console.log("Your Browser does not support speech Recognition");
  //   // info.textContent = "Your Browser does not support Speech Recognition";
  // }


  return (
    // <Navbar className="sticky-top w-100">
    <div className="navbar-top-sticky">
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#news">Sensors</a>
        </li>
        <li>
          <a href="#contact">Descreption</a>
        </li>
        <li>
          <a href="#about">Explainations</a>
        </li>
        <li className="about-developer">
          <a className="active" href="#about">
            Log In
          </a>
        </li>
        <li className="about-developer">
          <a className="active" href="#about">
            About developers
          </a>
        </li>
        <form ref={searchForm} action="https://www.google.com/search" method="get" target="_blank" id="search-form" className="about-developer form">
          <input ref={searchFormInput} name="q" type="text" placeholder="검색어를 입력하세요..." autoComplete="off" autoFocus id="Input" />
        </form>
      </ul>
    </div>
    // </Navbar>
  );
};

export default HeaderNavigation;
