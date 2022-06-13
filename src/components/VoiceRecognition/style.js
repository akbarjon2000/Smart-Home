import styled from "styled-components";

export const Container = styled.div`
position:absolute;
right:50%;
left:60%;
input{
    width:300px;
    border-radius:15px;
    padding-left:10px;
    height:40px;
    border-top-right-radius:0px;
    border-bottom-right-radius:0px;
}
button{
    display:flex;
    align-items:center;
    justify-content:center;
    height:40px;
    width:40px;
    border-top-right-radius:15px;
    border-bottom-right-radius:15px;
    background-color:white;
    outline:none;
    border:none;
}
.icon{
    width:30px;
    height:30px;
}
`