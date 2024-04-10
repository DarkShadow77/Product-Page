import { useContextHook } from "../AppContext";
import style from "../assets/css/cart_page.module.css"
import CartCard from "./CartCard";

function CartPage() {
    const { cart, setCart } = useContextHook()

    const deleteCart = (index) => {
        let array = cart;

        array.splice(index, 1);

        setCart([...array]);
    };

    return (
        <>
            <div id={style.wrapper}>


                <h2 id={style.label}>Your Shopping Bag</h2>
                <p id={style.subLabel}>{cart.length} items <span>in your bag.</span></p>
                <div id={style.cartCont}>
                    {cart.map((value, index) => {
                        return (
                            <CartCard value={value} click={() => deleteCart(index)} />
                        )
                    })}
                </div>
                <div id={style.totalCont}>
                    <p id={style.sub}>Subtotal:</p>
                    <div id={style.total}>
                        <span id={style.currency}>$</span>
                        {cart.reduce((previousValue, currentValue) => {
                            return previousValue + (currentValue.quantity * currentValue.price)
                        }, 0)}
                    </div>

                </div>
            </div>
        </>
    );
}

export default CartPage;