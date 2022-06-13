import styled from "styled-components";

export const FlameCon = styled.div`
width:600px;
height:400px;
background-color:#1d3557;
border-radius:15px;
margin-top:50px;
display:flex;
flex-direction:column;
align-items:center;

.icon{
    width:150px;
    height:150px;
    color:${({ flame }) => flame === 1 ? "#ffb703" : "white"};
    margin-top:50px;
}

.text{
    color:white;
    font-size:30px;
    font-weight:600;
    margin-top:40px;
}
`

export const BuzzCon = styled.div`
width:300px;
height:400px;
background-color:#1d3557;
border-radius:15px;
margin-top:50px;
display:flex;
flex-direction:column;
align-items:center;
margin-left:80px;

.icon{
    width:100px;
    height:100px;
    color:white;
    margin-top:50px;
}
.text{
    color:white;
    font-size:30px;
    font-weight:600;
    margin-top:40px;
}
.btn{
    width:100px;
    height:100px;
    border-radius:50%;
    background-color:#d8f3dc;
    border:10px solid #ffb703;

}
`