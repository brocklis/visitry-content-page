import React from "react";
import Image from "next/image"
import Link from "next/link"
import Button from "./button";

export default function LoginPopUp(props) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className={`${props.styling} text-lg text-white font-bold`}
                type="button"
                onClick={() => setShowModal(true)}
            >
                <div style={{ color: props.textColor }}>Login</div>
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-3 md:mx-0"
                    >
                        <div className="bg-white relative w-auto my-6 mx-auto max-w-xl rounded-lg shadow-lg bg-white outline-none focus:outline-none" style={{ width: "90%" }}>
                            {/*content*/}
                            <div className="border-0 pt-3 pb-8 md:pb-14 relative flex flex-col w-full outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between pb-2 pr-2 pt-0 rounded-t z-30">
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 hover:bg-bengray-300 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-gray rounded-full h-3 w-3 text-white">
                                            <svg width="36" height="36" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="50" height="50" rx="25" fill="white" />
                                                <path d="M25 22.4543L19.0729 16.5272C18.37 15.8243 17.2301 15.8243 16.5272 16.5272C15.8243 17.2301 15.8243 18.37 16.5272 19.0729L22.4543 25L16.5272 30.9271C15.8243 31.63 15.8243 32.7699 16.5272 33.4728C17.2301 34.1757 18.37 34.1757 19.0729 33.4728L25 27.5457L30.9271 33.4728C31.63 34.1757 32.7699 34.1757 33.4728 33.4728C34.1757 32.7699 34.1757 31.63 33.4728 30.9271L27.5457 25L33.4728 19.0729C34.1757 18.37 34.1757 17.2301 33.4728 16.5272C32.7699 15.8243 31.63 15.8243 30.9271 16.5272L25 22.4543Z" fill="#00A38B" />
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <div className="p-4">
                                    <h2 className="text-lg lg:text-xl font-bold font-merri text-center max-w-md mx-auto mb-10 text-black">Visitry Login</h2>
                                    <div className="flex flex-col md:flex-row mx-auto gap-x-5 gap-y-6 lg:gap-y-0 justify-center text-black">
                                            <Button
                                                color="primary"
                                                slug="https://agency.visitry.com/login"
                                                text="Agency"
                                                styling="px-10"
                                            />
                                            <Button
                                                color="primary"
                                                slug="https://user.visitry.com/login"
                                                text="Clinician"
                                                styling="px-10"
                                            />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button-overlay opacity-75 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}