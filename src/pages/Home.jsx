import React, { useContext, useState } from 'react'
import TicketCard from '../components/TicketCard'
import ticketData from '../constants/constant';
import { TicketContext } from '../context/context';

const Home = () => {

    const {setTickets,filterTickets}=useContext(TicketContext)

    const filtertickets=filterTickets();

    
    return (
        <div className='grid grid-cols-3 gap-4 justify-items-center w-full px-8'>
            {filtertickets.length > 0 ? (
                filtertickets.map(ticket => (
                    <TicketCard
                        key={ticket.nftId}
                        imageUrl={ticket.imageUrl}
                        venue={ticket.venue}
                        price={ticket.price}
                        publisherAddress={ticket.publisherAddress}
                        ticketType={ticket.ticketType}
                    />
                ))
            ) : (
                <p>No tickets found for this search.</p>
            )}
        </div>
    );
}

export default Home