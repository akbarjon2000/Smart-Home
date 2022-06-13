import styled from "styled-components";

export const WeatherCon = styled.div`
width:600px;
height:400px;
background-color:#a8dadc;
border-radius:10px;
border:3px solid #ffb703;
display:flex;
flex-direction:row;
/* justify-content:center; */
align-items:center;
padding:30px;
box-sizing:border-box !important;


.temp{
    width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100%;
    border-right:2px solid #ffb703;
}
.humid{
  width:50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    height:100%;
    border-left:2px solid #ffb703;
}

.icon{
    width:100px;
    height:100px;
}
.tempIcon{
    color:red;
}
.humidIcon{
    color:blue;
}
.text{
    font-size:40px;
    font-weight:700;
    margin-top:50px;
}
.sensorText{
    font-size:35px;
    margin-top:40px;
    font-weight:600;
}
.cel{
    width:45px;
    height:45px;
}
`