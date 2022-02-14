import React from "react";
import Image from "next/image"

export default function AppPopUp(props) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className={`${props.styling} text-md font-semibold text-white flex items-center space-x-4`}
                type="button"
                onClick={() => setShowModal(true)}
            >
                <svg width="15" height="24" viewBox="0 0 314 532" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M236.494 0H77.114C56.665 0.015625 37.063 8.1445 22.602 22.602C8.14501 37.059 0.016 56.664 0 77.114V454.884C0.015625 475.333 8.1445 494.939 22.602 509.396C37.063 523.853 56.664 531.982 77.114 531.998H236.494C256.943 531.982 276.545 523.853 291.006 509.396C305.463 494.939 313.592 475.334 313.608 454.884V77.114C313.592 56.665 305.463 37.059 291.006 22.602C276.545 8.145 256.944 0.016 236.494 0V0ZM285.607 454.89C285.576 467.906 280.392 480.382 271.189 489.585C261.986 498.788 249.509 503.972 236.494 504.003H77.114C64.098 503.972 51.622 498.788 42.419 489.585C33.2159 480.382 28.032 467.905 28.001 454.89V77.12C28.0323 64.104 33.2158 51.628 42.419 42.425C51.6221 33.2219 64.099 28.038 77.114 28.007H81.1452C77.1804 35.7843 77.5554 45.062 82.1296 52.495C86.7038 59.9286 94.8176 64.44 103.544 64.405H209.944C218.67 64.4402 226.788 59.9284 231.362 52.495C235.936 45.0614 236.307 35.784 232.342 28.007H236.373C249.412 28.007 261.912 33.1789 271.143 42.386C280.37 51.593 285.569 64.085 285.6 77.12L285.607 454.89Z" fill={props.textColor} />
                </svg>

                <div style={{ color: props.textColor }}>Download Visitry Mobile App</div>
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
                                    <h2 className="text-lg lg:text-xl font-bold font-merri text-center max-w-md mx-auto mb-10">Download Visitry Mobile App</h2>
                                    <div className="flex flex-col md:flex-row mx-auto gap-x-5 gap-y-6 lg:gap-y-0 justify-center">
                                        <div>
                                            <p className="text-center text-xs uppercase font-medium mb-3">Coming Soon</p>
                                            <Image
                                                src="/images/app-store.svg"
                                                alt="Apple App Store, Titan Storage. Customers can manage their account, open the gate/unit, and pay their bill from their Iphone."
                                                width={140}
                                                height={41}
                                            />
                                        </div>
                                        <a className="mt-7" target="_blank" href="https://play.google.com/store/apps/details?id=com.listertech.visitry&hl=en_US&gl=US">
                                            <Image
                                                src="/images/google-play.svg"
                                                alt="Google Play Store, Titan Storage. Customers can manage their account, open gate/unit, and pay their bill from their Android."
                                                width={140}
                                                height={41}
                                            />
                                        </a>
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