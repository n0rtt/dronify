import React from 'react'
import SEO from "../components/gatsby-default-files/seo"
import { navigate } from "gatsby"

// REDUX
import { connect } from "react-redux"
import { addedToCart } from "../actions"

// STYLES
import { Global, css } from "@emotion/core"
import Icon from '../components/styles/Icon'
import GlobalStyles from "../components/styles/GlobalStyles"
import { carouselWrapper, specWrapper, descriptionStyle, specText, column, btnBuy } from '../components/styles/ProductDetailStyles'

// COMPONENTS
import Img from "gatsby-image"
import Navigation from "../components/main-page/landing/navigation/Navigation"
import Button from '../components/main-page/navigation-button/Button'
import Modali, { useModali } from 'modali'

// CAROUSEL
import CarouselUI from '../components/product-page/CarouselUI'
import makeCarousel from "react-reveal/makeCarousel"
import Slide from "react-reveal/Slide"
const Carousel = makeCarousel(CarouselUI)

const itemWrapper = css`
    margin: 10rem auto 0;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.22);
    border-radius: 1rem;
    width: 70%;
    font-family: "Montserrat", sans-serif !important;
    color: #fff;
`

const ItemPage = ({ item, addedToCart }) => {

    const { id, name, description, price, category, icon1, icon2, icon3, icon4, icon5, icon6, spec1, spec2, spec3, spec4, spec5, spec6, localImage1, localImage2, localImage3, localImage4 } = item

    const [completeModal, toggleCompleteModal] = useModali({
        animated: true,
        title: 'Added!',
        message: 'Your item has been added to the cart.',
        buttons: [
          <Modali.Button
            label="Continue Shopping"
            isStyleCancel
            onClick={() => toggleCompleteModal()}
          />,
          <Modali.Button
            label="View Cart"
            isStyleDestructive
            onClick={() => {
                toggleCompleteModal()
                navigate('/cart')
            }}
          />,
        ],
    })

    return (
        <>
            <Global styles={GlobalStyles} />
            <SEO title={name} />
            <Button />
            <Navigation />
            <div css={itemWrapper}>
                <h2 style={{ letterSpacing: `.25rem`, color: `#badb57`, marginBottom: `1.5rem` }}>
                    {name}
                </h2>
                <h4>€ {price}</h4>
                <br/>
                <h5>
                    <strong>Category:</strong> {category}
                </h5>
                <hr />
                <h6 css={descriptionStyle}>{description}</h6>
                <div css={specWrapper}>
                    <section css={column}>
                        <p>
                            <span className="specIcon"><Icon name={icon1} /></span>
                            <span css={specText}>
                                {spec1}
                            </span>
                        </p>
                        <p>
                            <span className="specIcon"><Icon name={icon2} /></span>
                            <span css={specText}>
                                {spec2}
                            </span>
                        </p>
                        <p>
                            <span className="specIcon"><Icon name={icon3} /></span>
                            <span css={specText}>
                                {spec3}
                            </span>
                        </p>
                    </section>
                    <section css={column}>
                        <p>
                        <span className="specIcon"><Icon name={icon4} /></span>
                            <span css={specText}>
                                {spec4}
                            </span>
                        </p>
                        <p>
                            <span className="specIcon"><Icon name={icon5} /></span>
                            <span css={specText}>
                                {spec5}
                            </span>
                        </p>
                        <p>
                            <span className="specIcon"><Icon name={icon6} /></span>
                            <span css={specText}>
                                {spec6}
                            </span>
                        </p>
                    </section>
                </div>
                <button
                    onClick={() => {
                        addedToCart(id)
                        toggleCompleteModal()
                    }}
                    css={btnBuy}
                >
                    Buy
                </button>
                <Modali.Modal 
                    {...completeModal}>
                </Modali.Modal>
                <Carousel defaultWait={3000} css={carouselWrapper}>
                    <Slide right>
                        <div>
                            <Img
                                fluid={
                                    localImage1
                                }
                                imgStyle={{
                                    position: `absolute`,
                                    objectFit: `contain`,
                                    top: `3rem`,
                                    left: `7rem`,
                                    maxHeight: `350px`,
                                    maxWidth: `700px`
                                }}
                                style={{
                                    position: `relative`,
                                }}
                            />
                        </div>
                    </Slide>
                    <Slide right>
                        <div>
                            <Img
                                fluid={
                                    localImage2
                                }
                                imgStyle={{
                                    position: `absolute`,
                                    objectFit: `contain`,
                                    top: `3rem`,
                                    left: `7rem`,
                                    maxHeight: `350px`,
                                    maxWidth: `700px`
                                }}
                                style={{
                                    position: `relative`,
                                }}
                            />
                        </div>
                    </Slide>
                    <Slide right>
                        <div>
                            <Img
                                fluid={
                                    localImage3
                                }
                                imgStyle={{
                                    position: `absolute`,
                                    objectFit: `contain`,
                                    top: `3rem`,
                                    left: `7rem`,
                                    maxHeight: `350px`,
                                    maxWidth: `700px`
                                }}
                                style={{
                                    position: `relative`,
                                }}
                            />
                        </div>
                    </Slide>
                    <Slide right>
                        <div>
                            <Img
                                fluid={
                                    localImage4
                                }
                                imgStyle={{
                                    position: `absolute`,
                                    objectFit: `contain`,
                                    top: `3rem`,
                                    left: `7rem`,
                                    maxHeight: `350px`,
                                    maxWidth: `700px`
                                }}
                                style={{
                                    position: `relative`,
                                }}
                            />
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </>
    )
}

const mapStateToProps = ({ item }) => {
    return {
        item
    }
}

const mapDispatchToState = {
    addedToCart
}

export default connect(mapStateToProps, mapDispatchToState)(ItemPage)