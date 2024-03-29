import { css } from "@emotion/core"

export const landing = css`
    height: 100vh;
    overflow: hidden;
`

export const darkOverlay = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
`

export const landingContent = css`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding-bottom: 2rem;
`

export const heading = css`
    font-size: calc(30px + 3vw);
    color: #fff;
    letter-spacing: 1px;
    font-weight: 300;
    font-family: "Montserrat", sans-serif !important;
    margin: calc(20px + 5vw);
    margin-bottom: calc(100px + 3vh);
`

export const button = css`
    color: #badb57;
    font-family: "Montserrat", sans-serif !important;
    border: 3px solid #badb57;
    padding: 1rem 3rem;
    border-radius: 5rem;
    font-size: calc(13px + 0.6vw);
    margin: calc(15px + 1vw);
    text-transform: uppercase;
    &:hover {
        text-decoration: none !important;
        color: #fff !important;
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
    }
`
