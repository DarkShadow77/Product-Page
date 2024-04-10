import { Link, useLocation } from "react-router-dom"
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import style from "../assets/css/product_details_page.module.css"
import arrowBack from "../assets/svg/arrow-left.svg"
import add from "../assets/svg/add.svg"
import minus from "../assets/svg/minus.svg"
import { useContextHook } from "../AppContext";


function ProductDetailsPage() {
    const { state } = useLocation();

    const convState = JSON.parse(state);
    const { title, price, description, category, image, rating } = convState

    const { cart, setCart } = useContextHook()

    const [colorIndex, setColor] = useState(0);
    const [styleIndex, setStyle] = useState(0);
    const [quantity, setQuantity] = useState(1);

    const colorArray = ["#29D4C3", "#0D1133", "#F7F7F7", "#E0B0A8"]

    const styleArray = ["Basic", "Premium"]

    function selectColor(index) {
        setColor(index)
    }
    function selectStyle(index) {
        setStyle(index)
    }

    function AddToCart() {
        setCart([...cart, {
            title: title,
            price: price,
            description: description,
            category: category,
            image: image,
            rating: rating,
            color: colorArray[colorIndex],
            quantity: quantity,
        }])
        console.log(cart)
    }

    return (
        <>
            <div id={style.wrapper}>
                <div id={style.imageCont}>
                    <img src={image} />
                </div>
                <div id={style.detailCont}>
                    <Link to={"/"} id={style.backLink}>
                        <img src={arrowBack} />
                        Back to Products
                    </Link>
                    <p id={style.category}>{category}</p>
                    <p id={style.title}>{title}</p>
                    <div id={style.rating}>
                        <div id={style.rate}>
                            {[...Array(5)].map((value, index) => {
                                const givenRating = index + 1;
                                return (
                                    <FaStar
                                        color={
                                            rating.rate >= givenRating
                                                ? "#F29300"
                                                : "#F0F0F0"
                                        }
                                    />
                                )
                            })}
                        </div>

                        {rating.rate}({rating.count} reviews)
                    </div>
                    <p id={style.price}><span id={style.currency}>$</span>{price}</p>
                    <p className={style.subtitle}>Style</p>
                    <div id={style.styles}>
                        {styleArray.map((value, index) => {
                            return (
                                <StyleCard value={value} click={() => selectStyle(index)} index={index} styleIndex={styleIndex} />
                            )
                        })}
                    </div>
                    <p className={style.subtitle}>Color</p>
                    <div id={style.colors}>
                        {colorArray.map((value, index) => {
                            return (
                                <ColorCard value={value} click={() => selectColor(index)} index={index} colorIndex={colorIndex} />
                            )
                        })}
                    </div>
                    <p className={style.subtitle}>Description</p>
                    <p id={style.description}>
                        {description}
                    </p>
                </div>
                <div id={style.cartCont}>
                    <div id={style.details}>
                        <div id={style.imgCont}>
                            <img src={image} />
                        </div>
                        <p id={style.title}>{title}</p>
                    </div>
                    <div id={style.quantityCont}>
                        <div style={quantity > 1 ? { visibility: "visible" } : { visibility: "hidden" }}>
                            <QuantityButton click={() => setQuantity(quantity - 1)} value={minus} />
                        </div>
                        {quantity}
                        <QuantityButton click={() => setQuantity(quantity + 1)} value={add} />
                    </div>
                    <div id={style.addCont}>
                        <p id={style.sum}><span id={style.currency}>$</span>{Math.round(((quantity * price) + Number.EPSILON) * 100) / 100}</p>
                        <button id={style.addToCart} onClick={()=>AddToCart()}>Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    );
}

const ColorCard = (props) => {
    const { value, click, index, colorIndex } = props;
    return (
        <>
            <button onClick={click} style={{ borderColor: colorIndex == index ? "#BCBCBC" : "transparent" }}>
                <div style={{ backgroundColor: `${value}` }} id={style.circle}></div>
            </button>
        </>
    );
}

const StyleCard = (props) => {
    const { value, click, index, styleIndex } = props;
    return (
        <>
            <button onClick={click} style={styleIndex == index ? { backgroundColor: "#BCBCBC", color: "white" } : { backgroundColor: "transparent" }}>
                {value}
            </button>
        </>
    );
}

const QuantityButton = (props) => {
    const { value, click } = props;
    return (
        <>
            <button onClick={click} className={style.quantityBtn}>
                <img src={value} />
            </button>
        </>
    );
}

export default ProductDetailsPage;