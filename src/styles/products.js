import styled from 'styled-components';

export const ProductHeader = styled.div`
margin-left: 300px;
`;

export const ProductsContainer = styled.div`
width: 1440px;
margin: 0 auto;
`;

export const Card = styled.div`
display: grid;
grid-template-columns: 300px 1fr auto;
display: flex;
background-color: white;

& h3 {
    position: relative;
    margin-top: 0px;
}

& img {
    position: relative;
    width: 100%;
    max-height: auto;
    max-width: 150px;
}

& .cardImage{
    display: flex;
    justify-content: center;
    align-items: center;
}

& .descriptions {
    position: relative;
    padding-left: 15px;
    padding-right: 15px;
    width: 1000px;
    max-height: auto;
}

& span {font-weight: bold; position: relative; top: 5%; color: black;}

& a {text-decoration: none}

& p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

& .priceDisc {
    text-decoration: line-through;
    color: red;
}

& .cardActions {
margin-right: 20px
}`
