import styled from "styled-components";

export const LedContainer = styled.div`
width:300px;
height:400px;
background-color:#a8dadc;
border-radius:10px;
border:3px solid #ffb703;
display:flex;
flex-direction:column;
/* justify-content:center; */
align-items:center;
padding:30px;
box-sizing:border-box !important;
margin-right:80px;
.icon{
    width:150px;
    height:150px;
    margin-bottom:40px;
    color:${({ light }) => (light === 1) ? "yellow" : "black"};
}
.toggle{
    width:70px;
    height:35px;
}
.lightText{
    margin-top:40px;
    font-size:25px;
    font-weight:600;
    border:2px solid #ffbe0b;
    border-radius:10px;
    padding: 5px;
}
`