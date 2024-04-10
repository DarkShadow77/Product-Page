import { useContextHook } from "../AppContext"
import style from "../assets/css/navbar.module.css"
import menuIcon from "../assets/svg/menu.svg"
import searchIcon from "../assets/svg/search.svg"
import userIcon from "../assets/svg/user.svg"
import cartIcon from "../assets/svg/cart.svg"
import { Link } from "react-router-dom"

const NavBar = () => {

    const { cart } = useContextHook()
    return (
        <>
            <nav>
                <ul id={style.navbar}>
                    <div className={style.navCont}>
                        <li className={style.navLink}>
                            <img src={menuIcon} />
                        </li>
                        <Link to={"/"} >
                            <li className={style.navLink}>
                                <img src={searchIcon} />
                            </li>
                        </Link>
                    </div>

                    <div className={style.navCont}>
                        <li className={style.navLink}>
                            <img src={userIcon} />
                        </li>
                        <Link to={"/cart"} >
                            <li className={style.navLink}>
                                <div id={style.circle}>{cart.length}</div>
                                <img src={cartIcon} />
                            </li>
                        </Link>
                    </div>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;