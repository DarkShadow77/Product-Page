import add from "../assets/svg/add.svg"
import style from "../assets/css/cart_card.module.css"

const CartCard = (props) => {

    const {value, click} = props
    return (
        <>
            <div id={style.cardCont}>
                <div id={style.cardDetails}>
                    <div id={style.imgCont}>
                        <img src={value.image} />
                    </div>
                    <p id={style.title}>{value.title}</p>
                    <div id={style.circle} style={{ backgroundColor: value.color }}></div>
                    <p id={style.quantity}>{value.quantity}</p>
                    <p id={style.total}><span id={style.currency}>$</span>{Math.round(((value.quantity * value.price) + Number.EPSILON) * 100) / 100} <span id={style.sub}>(${value.price})</span></p>
                </div>
                <button onClick={click} id={style.deleteBtn}>
                    <img src={add} />
                </button>
            </div>
        </>
    );
}

export default CartCard;