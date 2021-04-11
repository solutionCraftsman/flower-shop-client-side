import TextInput from "./TextInput";
import '../css/Nav.css'

const Nav = () => {

    return (
        <nav>
            <div className="top">
                <div className="wrap">
                    <div className="logo">
                        <a className="text" href="">FLOWERZON</a>
                        <p>FLOWERS, PLANTS</p>
                    </div>

                    <form id="search">
                        <TextInput bgColor = '#86777E' placeholder = '' />
                        <div className="icon-circle"><i></i></div>
                    </form>

                    <div className="right">
                        <div className="my-account">
                            <i></i>
                            <p>MY ACCOUNT</p>
                        </div>
                        <div className="price">
                            <i></i>
                            <p>0.00</p>
                        </div>
                        <div className="cart">
                            <i></i>
                            <p>CART: </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bottom">
                <div className="wrap">
                    <a>ST. VALENTINE'S</a>
                    <a>BIRTHDAY</a>
                    <a>SYMPATHY</a>
                    <a>OCCASIONS</a>
                    <a>FLOWERS</a>
                    <a>PLANTS</a>
                    <a>GIFTS</a>
                    <a>SPECIALS</a>
                </div>
            </div>
        </nav>
    );
}

export default Nav