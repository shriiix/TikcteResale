import React from 'react';
import { useNavigate } from 'react-router-dom';

const TicketCard = ({
    imageUrl = 'https://images.unsplash.com/photo-1515139372923-c923c9e9a18c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGlja2V0fGVufDB8fDB8fHww', // Default image URL (Placeholder image)
    venue = 'Default Venue',
    price = '0.0', // Default price
    publisherAddress = '0x0000000000000000000000000000000000000000', // Default address
    ticketType = 'Standard', // Default ticket type
    nftId = 'defaultNFT' // Default NFT ID
}) => {
    const navigate = useNavigate();

    const handleMoreDetails = () => {
        // Navigate to the More Details page with the ticket details
        navigate(`/details/${nftId}`);
    };

    return (
        <div className="max-w-[300px] rounded overflow-hidden  bg-white shadow-[0px_4px_20px_rgba(0,0,0,0.15)] my-6">
            {/* Image */}
            <img className="w-full h-40 object-cover" src={imageUrl} alt="NFT Ticket" />

            <div className="px-6 py-4">
                {/* Venue */}
                <div className="font-bold text-xl mb-2">{venue}</div>

                {/* Price */}
                <p className="text-gray-700 text-base">Price: {price} ETH</p>

                {/* Publisher Address */}
                <p className="text-gray-600 text-sm mt-2">Publisher: {publisherAddress}</p>

                {/* Ticket Type */}
                <p className="text-gray-600 text-sm mt-1">Ticket Type: {ticketType}</p>
            </div>

            <div className="px-6 py-4">
                {/* More Details Button */}
                <button
                    onClick={handleMoreDetails}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    More Details
                </button>
            </div>
        </div>
    );
};

export default TicketCard;
