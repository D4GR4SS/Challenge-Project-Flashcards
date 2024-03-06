import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCardById } from './cardsSlice';

export default function Card({ id }) {
  const card = useSelector((state) => selectCardById(state, id)); // Pass state to the selector
  const [flipped, setFlipped] = useState(false);

  // Check if card is undefined before accessing its properties
  if (!card) {
    return null; // or render a loading indicator/error message
  }

  return (
    <li>
      <button className='card' onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
