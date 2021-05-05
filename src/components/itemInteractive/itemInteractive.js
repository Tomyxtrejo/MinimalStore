import { useState } from 'react';
import { ItemCounter } from '../itemCounter/itemCounter'
import { DropdownPlantr } from '../dropdownPlantr/dropdownPlantr'
import { ButtonPlantr } from '../buttonPlantr/buttonPlantr'
import { FiShoppingCart } from 'react-icons/fi';


import './itemInteractive.css';

export const ItemInteractive = ({ stock, size, variety }) => {
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
                <ItemCounter tittle="Cantidad" stock={stock}/>
                <DropdownPlantr tittle="Tamaño" options={size} />
                <DropdownPlantr tittle="Variedad" options={variety} />
            </div>
            <ButtonPlantr><FiShoppingCart /> Agregar al carrito</ButtonPlantr>
        </div>

    )

}