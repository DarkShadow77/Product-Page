import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import Search from "./Search";
import style from "../assets/css/product_page.module.css"
import { useEffect, useState } from "react";

function ProductPage(props) {
    const { result } = props
    const [searchText, setSearchText] = useState("");
    const [productArray, setProductArray] = useState([]);

    useEffect(() => {
        setProductArray([...result])
    }, [result]);

    let shimmer = []
    console.log(`Products: ${productArray}`)


    for (let x = 0; x <= 20; x++) {
        shimmer.push(
            <div className={style.shimmer}></div>
        );
    }

    function search(e) {
        setSearchText(e.target.value)
        if (searchText == "") {
            setProductArray([...result])
        } else {
            let newArray = result.filter((obj) => {
                return (JSON.stringify(obj).toLowerCase().includes(searchText.toLowerCase()))
            })
            setProductArray([...newArray])
            console.log(newArray)
        }
    }
    return (
        <>
            <div id={style.wrapper}>

                <div id={style.topContent}>
                    <p id={style.label}>Find Wonderful Apparel and Products With Us</p>
                    <Search value={searchText} change={(e) => search(e)} />
                </div>

                <div id={style.bottomContent}>
                    {
                        searchText.length > 0 && <p id={style.search}>Search result for "<span>{searchText}</span>" </p>
                    }
                    <div id={style.card_wrapper}>
                        {
                            productArray.length == 0 && shimmer
                        }
                        {
                            productArray.map((value) => {
                                return (
                                    <Link to={`/productDetails`} state={JSON.stringify(value)}>
                                        <ProductCard value={value}/>
                                    </Link>
                                )

                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;