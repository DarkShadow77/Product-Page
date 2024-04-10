import style from "../assets/css/product_card.module.css"
import tag from "../assets/svg/tag.svg"

const ProductCard = (props) => {

    const{image,title, category, price} = props.value

    return ( 
        <>
            <div className={style.card_wrap}>
                <img className={style.card_image} src={image}></img>
                <div className={style.content_wrap}>
                    <h1 className={style.card_title}>{title}</h1>
                    <button className={style.categoryCont}>
                        <img src={tag}/>
                        {category}
                    </button>
                    
                    <p className={style.card_price}><span id={style.currency}>$</span>{price}</p>
                </div>
            </div>
        </>
     );
}
 
export default ProductCard;