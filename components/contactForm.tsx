import React, { useState } from 'react';
import axios from 'axios';

const defaultStatus = {
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
};

export default function ContactForm() {
    const [status, setStatus] = useState(defaultStatus);
    const [inputs, setInputs] = useState({
        name: '',
        phone: '',
        email: '',
        location: '',
        message: '',
        companyname: '',
        usagetype: ''
    });
    const handleServerResponse = (ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                name: '',
                phone: '',
                email: '',
                location: '',
                message: '',
                companyname: '',
                usagetype: ''
            });
        } else {
            setStatus({
                ...defaultStatus,
                info: { error: true, msg: msg },
            });
        }
    };
    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/mpzbpzav',
            data: inputs,
        })
            .then((response) => {
                handleServerResponse(
                    true,
                    'Thank you, your message has been submitted.',
                );
            })
            .catch((error) => {
                handleServerResponse(false, error.response.data.error);
            });
    };
    return (
        <div className="overflow-hidden">
            <div className="bg-white max-w-7xl mx-auto -mt-10 z-0 relative pt-14 shadow-standard w-11/12">
                <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center w-full lg:w-9/12">
                    <div className="w-full">
                        <div className="mt-10 sm:mt-0">
                            <div className="">
                                <div className="mt-5 md:mt-0 md:col-span-2">
                                    <form className="" action="#" onSubmit={handleOnSubmit}>
                                        <div className="">
                                            <div className="">
                                                <div className="grid grid-cols-6 gap-6">
                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                            Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            id="name"
                                                            onChange={handleOnChange}
                                                            required
                                                            placeholder="Name"
                                                            value={inputs.name}
                                                            className="rounded-lg block w-full p-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-green-p focus:border-green-p sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="companyname" className="block text-sm font-medium text-gray-700">
                                                            Company Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="companyname"
                                                            id="companyname"
                                                            onChange={handleOnChange}
                                                            required
                                                            placeholder="Company Name"
                                                            value={inputs.companyname}
                                                            className="rounded-lg block w-full p-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-green-p focus:border-green-p sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                                            Phone
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="phone"
                                                            id="phone"
                                                            onChange={handleOnChange}
                                                            required
                                                            placeholder="xxx-xxx-xxxx"
                                                            value={inputs.phone}
                                                            className="rounded-lg block w-full p-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-green-p focus:border-green-p sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                                            Email address
                                                        </label>
                                                        <input
                                                            type="text"
                                                            name="email"
                                                            id="email"
                                                            onChange={handleOnChange}
                                                            required
                                                            placeholder="Email address"
                                                            value={inputs.email}
                                                            autoComplete="email"
                                                            className="rounded-lg block w-full p-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-green-p focus:border-green-p sm:text-sm"
                                                        />
                                                    </div>

                                                    <div className="col-span-6 sm:col-span-3">
                                                        <label htmlFor="usagetype" className="block text-sm font-medium text-gray-700">
                                                            Agency or Clinician?
                                                        </label>
                                                        <select
                                                            id="usagetype"
                                                            name="usagetype"
                                                            onChange={handleOnChange}
                                                            required
                                                            value={inputs.usagetype}
                                                            className="rounded-lg mt-1 block w-full p-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-green-p focus:border-green-p sm:text-sm"
                                                        >
                                                            <option>Agency</option>
                                                            <option>Clinician</option>
                                                        </select>
                                                    </div>

                                                    <div className="col-span-6">
                                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                                            Message
                                                        </label>
                                                        <div className="mt-1">
                                                            <textarea
                                                                id="message"
                                                                name="message"
                                                                onChange={handleOnChange}
                                                                required
                                                                value={inputs.message}
                                                                rows={5}
                                                                className="rounded-lg block w-full p-2 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-green-p focus:border-green-p sm:text-sm"
                                                                placeholder="Enter your message here"
                                                                defaultValue={''}
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6">
                                                <button
                                                    type="submit"
                                                    className="text-sm font-open border-2 font-black rounded-lg duration-300 py-3 px-10 border-green-p hover:border-green-s text-white bg-green-p hover:bg-green-s"
                                                    disabled={status.submitting}
                                                >
                                                    {!status.submitting
                                                        ? !status.submitted
                                                            ? 'Submit'
                                                            : 'Submitted'
                                                        : 'Submitting...'}
                                                </button>
                                            </div>
                                        </div>
                                        {status.info.error && (
                                            <div className="error mt-3 text-green-p">Error: {status.info.msg}</div>
                                        )}
                                        {!status.info.error && status.info.msg && <p className="mt-3 text-green-p">{status.info.msg}</p>}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
