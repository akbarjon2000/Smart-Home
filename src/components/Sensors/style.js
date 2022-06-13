import styled from "styled-components";

export const LedTemp = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
width:100%;
height:fit-content;

`
export const Flame = styled.div`

    width:100%;
    display:flex;
    flex-direction:row;
    /* align-items:center; */
    justify-content:center;
`

export const SensorCon = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  margin-top: 50px;
  width: 100%;


.camera{
    display:flex;
    flex-direction:column;
    align-items:center;
}
.cameratext{
    font-size:40px;
    font-weight:600;
}
`