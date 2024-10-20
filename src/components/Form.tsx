"use client";
import Popup from '@/components/popup';
import axios from 'axios'; // Ensure you have axios installed
import React, { useState } from "react";

const Page: React.FC = () => {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", number: "", query: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleShowPopup('Sending Query...', 'success');

        try {
            const { data } = await axios.post(`/api/sendMail`, formData);
            handleShowPopup('Your query has been sent successfully!', 'success');
            setFormData({ name: "", email: "", number: "", query: "" });
        } catch (error) {
            handleShowPopup('Failed to send your query. Please try again.', 'failure');
        }
    };

    const handleShowPopup = (message: string, status: string) => {
        setMessage(message);
        setStatus(status);
        setShowAlert(true);
    };

    const handleClosePopup = () => {
        setShowAlert(false);
    };

    return (
        <div className="z-50 min-h-fit md:h-[21rem]  flex flex-col items-center justify-evenly px-10 py-6 md:py-0 rounded-lg my-4 md:mx-4 relative text-white  " id='contact'>
            <Popup
                message={message}
                status={status}
                show={showAlert}
                onClose={handleClosePopup}
            />
            <div className="text-4xl md:text-5xl tracking-widest text-white font-thin uppercase mb-8 ">Contact us</div>
            <form action="" className="flex flex-col md:flex-row items-center justify-between h-3/5 bg-gray-900 p-6 rounded-lg cursor-pointer xl:w-2/5 md:w-3/5 w-full " onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-between h-full md:px-3 w-full">
                    <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="my-3 bg-transparent text-lightText focus:outline-none border-b-2 border-black text-xl w-full focus:border-purpel"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="my-3 bg-transparent text-lightText focus:outline-none border-b-2 border-black text-xl w-full focus:border-purpel"
                    />
                    <input
                        type="text"
                        placeholder="Contact Number"
                        name="number"
                        required
                        value={formData.number}
                        onChange={handleChange}
                        className="my-3 bg-transparent text-lightText focus:outline-none border-b-2 border-black text-xl w-full focus:border-purpel"
                    />
                </div>
                <div className="flex flex-col items-center justify-between h-full md:px-3 w-full ">
                    <textarea
                        name="query"
                        placeholder="Query"
                        value={formData.query}
                        required
                        onChange={handleChange}
                        rows={4}
                        className="my-3 bg-transparent text-lightText focus:outline-none border-b-2 border-black text-lg w-full focus:border-purpel"
                    />
                    <button type="submit"
                        className="bg-gradient-to-r from-purple-400 to-pink-600 text-white  transition-all duration-300 transform hover:scale-105 text-lg px-2 rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Page;
