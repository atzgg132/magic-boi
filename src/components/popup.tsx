"use client";

import { useEffect } from 'react';

interface PopupMessageProps {
    message: string;
    status: string;
    show: boolean;
    onClose: () => void;
}

const PopupMessage: React.FC<PopupMessageProps> = ({ message, status, show, onClose }) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                onClose();
            }, 30000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    if (!show) {
        return null;
    }

    return (
        <div className={`fixed bottom-10 right-10 z-50  min-w-[250px] px-2 mx:px-6 py-4 rounded shadow-lg flex items-center ${status === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white flex justify-evenly`}>
            <span>{message}</span>
            <button onClick={onClose} className="ml-4 bg-transparent border-0 text-3xl cursor-pointer">&times;</button>
        </div>
    );
};

export default PopupMessage;
