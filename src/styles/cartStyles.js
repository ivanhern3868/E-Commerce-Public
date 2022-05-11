import styled from 'styled-components';

export const MasterCartContainer = styled.div`
width: 1440px;
margin: 0 auto;
color:var(--color-text);
grid-template-columns: 300px 1fr auto;

& .cartHeaders {background-color: white;display: flex;font-weight: bold;}
& .imgHeader {width: 150px;}
& .btnCol {margin-right: 15px;width:108px}
& .titleHeader {margin-right: 15px;width: 490px;text-align: left;}
& .priceHeader {margin-right: 15px;width:126px;}
& .qtyHeader {margin-right: 15px;width:100px;}
& .totalHeader {padding-right: 100px;}
& .container {background-color: white;}
& .cart {background-color: white;}
`

export const CartItemsContainer = styled.div`
background-color: white;
grid-template-columns: 300px 1fr auto;
& .cartData {display: flex; margin-bottom: 20px}
& .prodImage {width: 150px;}
& .prodButtons {padding-top: 10px; padding-left: 5px;}
& .removeButton {background: rgb(84,101,255);background: linear-gradient(126deg, rgba(84,101,255,1) 0%, rgba(182,84,239,1) 100%);border-radius:28px; border:1px solid #18ab29;display:inline-block;	cursor:pointer;	color:#ffffff;font-family:Arial;font-size:13px;	font-weight:bold; padding:3px 7px;	text-decoration:none;}
    & .removeButton:hover {background: rgb(84,101,255);background: linear-gradient(257deg, rgba(84,101,255,1) 0%, rgba(182,84,239,1) 100%);}
    & .removeButton:active {position:relative;top:1px;}
& .prodTitle {position: relative;margin-left: 15px; padding-left: 5px;margin-right: 15px; width: 490px;}
    & .title {font-weight: bold;margin-top: 5px;}
    & .desc {margin-top: -10px;}
& .prodPrice {width:120px;text-align: center;margin-right: 15px;}
& .prodQty{width:100px;text-align: center;margin-right: 15px;}
    & .qty {margin-top: 0px;}
& .prodTotal {width:100px;text-align: center;}
& img {max-width: 150px;}
`

