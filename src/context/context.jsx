import React, { createContext, useState } from 'react';
import ticketData from '../constants/constant';

// Default tickets (you can use the constants I gave earlier)


export const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
    const [tickets, setTickets] = useState(ticketData);
    const [search, setSearch] = useState('');
    const [filterType, setFilterType] = useState([]); // Filter type is an array


    // Function to filter tickets based on the venue
    const filterTickets = () => {
        return tickets.filter(ticket => {
            const matchesSearch = ticket.venue.toLowerCase().includes(search.toLowerCase());
            
            // If filterType is empty, we show all tickets; otherwise, match any ticket type
            const matchesType = filterType.length === 0 || filterType.some(type => ticket.ticketType.includes(type));

            return matchesSearch && matchesType;
        });
    };

    return (
        <TicketContext.Provider value={{ tickets, setTickets, search, setSearch, filterTickets,filterType,setFilterType }}>
            {children}
        </TicketContext.Provider>
    );
};
