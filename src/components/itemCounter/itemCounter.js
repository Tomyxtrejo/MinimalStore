import { useState } from 'react';
import { ButtonPlantr } from '../buttonPlantr/buttonPlantr'
import './itemCounter.css';

export const ItemCounter = ({ tittle, stock }) => {
    const [quantity, setQuantity] = useState(1);
    const handleClick = (data) => {

        if (quantity !== stock) {
            if (quantity !== 1) {
                setQuantity(quantity + data)
            } else {
                if (data === 1) {
                    setQuantity(quantity + data)
                }
            }
        } else {
            if (data === -1) {
                setQuantity(quantity + data)
            }
        }
        console.log(quantity);
    };
    return (
        <div className="counterContainer">
            <p className="counterTittle">{tittle}</p>
            <div className="counter">
                <div className="buttonCounter" onClick={() => handleClick(-1)}>-</div>
                <p>{quantity}</p>
                <div className="buttonCounter" onClick={() => handleClick(1)}>+</div>
            </div>
        </div>

    )

}