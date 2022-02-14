import React from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import CalendlyCalendar from "./calendlyCalendar";

export default function MeetingPopUp(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className={props.buttonStyle}
        type="button"
        onClick={() => setShowModal(true)}
      >
        {props.buttonName}
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="meeting-popup-container relative my-6 mx-auto">
              {/*content*/}
              <div className="border-0 meeting-popup-container--inner px-0 md:px-10 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 pb-0 md:mb-0 md:pb-5 rounded-t z-50 calendlyxbar">
                  <button
                    className="p-1 ml-auto border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none relative z-50"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-5xl text-chablack-300 block outline-none focus:outline-none z-50">
                    <b>×</b>
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-0 md:p-6 flex-auto">
                <div className="max-w-7xl m-auto">
                <CalendlyCalendar />                
                </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                </div>
              </div>
            </div>
          </div>
          <div className="meeting-pop-up-opacity opacity-25 fixed inset-0 z-40 bg-black ml-0"></div>
        </>
      ) : null}
    </>
  );
}