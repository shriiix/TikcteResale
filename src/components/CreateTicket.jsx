import React, { useState } from 'react';

const TicketForm = ({ onCreateTicket }) => {
    const [imageUrl, setImageUrl] = useState('');
    const [venue, setVenue] = useState('');
    const [price, setPrice] = useState('');
    const [publisherAddress, setPublisherAddress] = useState('');
    const [ticketType, setTicketType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTicket = {
            imageUrl,
            venue,
            price,
            publisherAddress,
            ticketType,
        };
        onCreateTicket(newTicket);
    };

    return (
        <form onSubmit={handleSubmit} className="p-4 border shadow-md rounded">
            <h2 className="text-xl mb-4 font-bold">Create a Ticket</h2>
            
            <div className="mb-4">
                <label htmlFor="imageUrl" className="block text-gray-700">Image URL:</label>
                <input
                    type="text"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Enter image URL"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="venue" className="block text-gray-700">Venue:</label>
                <input
                    type="text"
                    id="venue"
                    value={venue}
                    onChange={(e) => setVenue(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Enter venue name"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700">Price (ETH):</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Enter ticket price in ETH"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="publisherAddress" className="block text-gray-700">Publisher Address:</label>
                <input
                    type="text"
                    id="publisherAddress"
                    value={publisherAddress}
                    onChange={(e) => setPublisherAddress(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Enter your wallet address"
                    required
                />
            </div>

            <div className="mb-4">
                <label htmlFor="ticketType" className="block text-gray-700">Ticket Type:</label>
                <input
                    type="text"
                    id="ticketType"
                    value={ticketType}
                    onChange={(e) => setTicketType(e.target.value)}
                    className="border rounded p-2 w-full"
                    placeholder="Enter ticket type (e.g., movie, concert)"
                    required
                />
            </div>

            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Create Ticket</button>
        </form>
    );
};

export default TicketForm;
