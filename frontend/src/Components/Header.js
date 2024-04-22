import { PiBasketBold } from "react-icons/pi";
import {useState} from "react";
import Order from "./Order";

function Header(props) {
    let [cartOpen, setCartOpen] = useState(false)


    return (
        <div className="Header">
            <div className="logo">The Market</div>

            <ul className="nav">
                <li>Контакты</li>
                <li>О нас</li>
                <li>Кабинет</li>
            </ul>
            <PiBasketBold onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`basket ${cartOpen ? 'active' : ''}`}/>

            {
                cartOpen && (
                    <div className="shop-cart">
                        {props.orders.map(el => (
                            <Order key={el.id} item={el} />
                        )
                        )}
                        <button>Оформить заказ</button>
                    </div>
                )
            }
        </div>
    );

}

export default Header;