import React from 'react'
import CardSelection from './CardSelection';
import ClientCard from './ClientCard';
import Contact from './Contact';
import OwnCard from './OwnCard';
import TypePayment from './TypePayment';
import UtilityBills from './UtilityBills';

export default function FormPayment({ payments }) {
    console.log('Render FormPayment');
    return (
        <form className="form">
          <CardSelection payments ={payments} />
          <TypePayment />
          <Contact />
          <UtilityBills />
          <ClientCard />
          <OwnCard />
        </form>
    )
}
