import React, { useRef, createRef, useState } from 'react'
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs'

const Voice = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined
    // console.log(SpeechRecognition)
    const [search, setSearch] = useState(true)



    const searchForm = useRef()
    const searchFormInput = useRef()
    // console.log(searchForm)
    // console.log(searchFormInput)
    // console.log(searchForm)

    if (SpeechRecognition) {
        // console.log("Your Browser supports speech Recognition");

        var recognition = new SpeechRecognition();
        recognition.continuous = true;
        // recognition.lang = "en-US";
        recognition.lang = "en";

        // searchForm.current.insertAdjacentHTML("beforeend", '<button type="button"><i class="fas fa-microphone"></i></button>');
        // searchFormInput.current.style.paddingRight = "50px";

        // const micBtn = searchForm.current.querySelector("button");
        // const micIcon = micBtn.firstElementChild;



        recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
        function startSpeechRecognition() {
            // micIcon.classList.remove("fa-microphone");
            // micIcon.classList.add("fa-microphone-slash");
            searchFormInput.current.focus();
            // console.log("Voice activated, SPEAK");
        }

        recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
        function endSpeechRecognition() {
            // micIcon.classList.remove("fa-microphone-slash");
            // micIcon.classList.add("fa-microphone");
            searchFormInput.current.focus();
            // console.log("Speech recognition service disconnected");
        }

        recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
        function resultOfSpeechRecognition(event) {
            const current = event.resultIndex;
            const transcript = event.results[current][0].transcript;

            if (transcript.toLowerCase().trim() === "stop recording.") {
                setSearch(true)
                recognition.stop();
                searchFormInput.current.value = "";
            }
            else if (!searchFormInput.current.value) {
                searchFormInput.current.value = transcript;
            }
            else {
                if (transcript.toLowerCase().trim() === "go") {
                    searchForm.current.submit();
                }
                else if (transcript.toLowerCase().trim() === "reset input.") {
                    searchFormInput.current.value = "";
                }
                else {
                    searchFormInput.current.value = transcript;
                }
            }
            // searchFormInput.current.current.value = transcript;
            // searchFormInput.current.current.focus();
            // setTimeout(() => {
            //   searchForm.submit();
            // }, 500);
        }

        // info.textContent = 'Voice Commands: "stop recording", "reset input", "go"';

    }
    else {
        // console.log("Your Browser does not support speech Recognition");
        // info.textContent = "Your Browser does not support Speech Recognition";
    }

    function micBtnClick(e) {
        e.preventDefault()
        if (search) { // Start Voice Recognition
            recognition.start(); // First time you have to allow access to mic!
            setSearch(false)
        }
        else {
            setSearch(true)
            recognition.stop();
        }
    }

    return (
        <form ref={searchForm} method="get" target="_blank" id="search-form" className="about-developer form">
            <input ref={searchFormInput} name="q" type="text" placeholder="Control your home" autoComplete="off" autoFocus id="Input" >
            </input>
            <button onClick={micBtnClick} >{search ? <BsFillMicFill /> : <BsFillMicMuteFill />}</button>
        </form>
    )
}

export default Voice