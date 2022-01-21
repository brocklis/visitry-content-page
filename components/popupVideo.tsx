import Image from 'next/image'
export default function PopUpVideo(props) {
    return (
        <>
            {props.showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mx-3 md:mx-0"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl" style={{width:"90%"}}>
                            {/*content*/}
                            <div className="border-0 pt-3 relative flex flex-col w-full outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between pb-2 pr-2 pt-0 rounded-t z-30">
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 hover:bg-bengray-300 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => props.setShowModal(false)}
                                    >
                                        <span className="bg-gray rounded-full h-3 w-3 text-white">
                                            <Image height="50" width="50" alt="Close Video Modal" src="/images/close.svg"/>
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <iframe className="h-96 mb-10 rounded-xl" src="https://player.vimeo.com/video/112866269?h=76b0dd1ac8&autoplay=1&title=0&byline=0&portrait=0" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                    <div className="button-overlay opacity-75 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
