import { useState } from 'react';
import { ItemCounter } from '../itemCounter/itemCounter'
import { DropdownPlantr } from '../dropdownPlantr/dropdownPlantr'
import { ButtonPlantr } from '../buttonPlantr/buttonPlantr'

import './itemInteractive.css';

export const ItemInteractive = ({ stock }) => {
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
        <div>
            <div className="plantOptions">
                <ItemCounter tittle="Cantidad" stock={5}/>
                <DropdownPlantr tittle="Tamaño" options={['30 cm', '50 cm', '70 cm']} />
                <DropdownPlantr tittle="Variedad" options={['China', 'Alemana', 'Argentina']} />
            </div>
            <ButtonPlantr>Agregar al carrito</ButtonPlantr>
        </div>

    )

}