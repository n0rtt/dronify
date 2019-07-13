import React from "react"
import { connect } from 'react-redux'
import { css } from "@emotion/core"
import { Link } from "gatsby"

// FONTAWESOME
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-regular-svg-icons"

// COMPONENTS
import Button from "../../navigation-button/Button"

const cart = <FontAwesomeIcon
    icon={faShoppingCart}
    size="1x"
    color="white" />
const user = <FontAwesomeIcon
    icon={faUser}
    size="1x"
    color="white" />

const NavBar = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  top: 0;

  height: 7rem;
  width: 100%;
  padding-top: 1rem;
`

const NavMenuTop = css`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 0 1.5rem;
`

const ButtonWrapper = css`
  flex: 1 1 20%;
`

const LogoName = css`
  flex: 1 1 60%;
  font-size: 1.5rem;
  color: #fff;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif !important;

  @media screen and (max-width: 420px) {
    display: none;
  }
`

const Icons = css`
  flex: 1 1 20%;
  display: flex;
  justify-content: flex-end;

  div:first-of-type {
    margin-right: 1rem;
  }
`

const NavList = css`
  display: flex;
  justify-content: space-between;
  margin: 0;

  width: 70%;

  @media screen and (max-width: 1100px) {
    width: 90%;
  }

  @media screen and (max-width: 550px) {
    display: none;
  }
`

const IconItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: "Montserrat", sans-serif !important;
`

const NavItem = css`
  list-style-type: none !important;
`

const NavLink = css`
  text-decoration: none !important;
  font-family: "Montserrat", sans-serif !important;
  color: #fff;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  font-size: 0.8rem;

  &:hover {
    text-decoration: none !important;
    color: #fff !important;
    cursor: pointer;
  }

  @media screen and (max-width: 1100px) {
    letter-spacing: 0.1rem;
  }

  @media screen and (max-width: 750px) {
    font-size: 0.6rem;
  }
`

const Navigation = ({ items }) => {

    const total = items.reduce((acc, item) => (acc + item.price * item.quantity), 0)

    return (
        <nav css={NavBar}>
            <div css={NavMenuTop}>
                <div css={ButtonWrapper}>
                    <Button />
                </div>
                <Link to="/">
                    <span css={LogoName}> Dronify </span>
                </Link>
                <div css={Icons}>
                    <Link to="/account">
                        <div css={IconItem}>
                            {user}
                            <span>Log In</span>
                        </div>
                    </Link>
                    <Link to="/cart">
                        <div css={IconItem}>
                            {cart}
                            <span>Cart: {total}€</span>
                        </div>
                    </Link>
                </div>
            </div>

            <ul css={NavList}>
                <li css={NavItem}>
                    <Link to="/consumer-drones/" css={NavLink}>
                        Consumer
                    </Link>
                </li>
                <li css={NavItem}>
                    <Link to="/professional-drones/" css={NavLink}>
                        Professional
                    </Link>
                </li>
                <li css={NavItem}>
                    <Link to="/enterprise-drones/" css={NavLink}>
                        Enterprise
                    </Link>
                </li>
                <li css={NavItem}>
                    <Link to="/accessories/" css={NavLink}>
                        Accessories
                    </Link>
                </li>
                <li css={NavItem}>
                    <Link to="/contact-us/" css={NavLink}>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = ({ items }) => {
    return {
        items
    }
}

export default connect(mapStateToProps)(Navigation)