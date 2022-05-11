import styled from 'styled-components';

export const HeaderContainer = styled.header`
    padding-block: 24px;
    background-color: var(--color-white);
    & .menu{display: flex; column-gap: 3rem; padding-inline-end: 3rem;align-items: center;}
    & ul {display: flex; column-gap: 3rem;}
    & .headerMenu {display: flex;};
    & input {width: 90%; padding: 0.5rem}
    & form {width: 100%;display: flex; align-items: center;}
    & li {list-style: none}
    & button {padding: 10px 15px; border: none; background-color: var(--color-primary); color: var(--color-white);}
    & .icon-shopping-cart {position: relative;}
    & a {text-decoration: none}
        & .cartCircle {
        position: absolute;
        right: -8px;
        top: -10px;
        color: white;
        background-color: var(--color-primary);
        border: 1px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 60px;
        padding: 3px;
        width: 1rem;
        height: 1rem;
        justify-content: center;
        display: flex;
        align-items: center;
        font-size: 12px;
        }
    & .cartCircleHidden {
        position: absolute;
        right: -8px;
        top: -10px;
        box-sizing: border-box;
        border-radius: 60px;
        padding: 3px;
        width: 1rem;
        height: 1rem;
        justify-content: center;
        display: flex;
        align-items: center;
        font-size: 0px;
        }
        & .sign-in {margin-left: 15px;height: 35px;font-size: 11px;}
`;