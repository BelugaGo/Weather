import { styled, Container, Box, TextField, Typography, Button } from "@mui/material";

export const WeatherContainer = styled(Container)`
height: 100%;
padding: 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: #222222;
overflow: hidden;
position: relative;


.alert {
    position: absolute;
    z-index: 2;
}

.city {
    position: absolute;
    top: -1rem;
    left: 0;
    text-align: center;
    width: 100%;
    font-size: 6.3rem;
    font-weight: 700;
    color: #fff;
    animation: fadeIn 1.5s ease-in-out;
    

    @media screen and (max-width: 480px) {
        font-size: 3.5rem;
        top: 0.2rem;
    } 

    @media screen and (max-width: 320px) {
        top: -0.7rem;
    }

    @media screen and (min-width: 1600px) {
    font-size: 5.5rem;
  }

   @media screen and (min-width: 2000px) {
    font-size: 8.7rem;
    animation: fadeInLg 1.5s ease-in-out;
    }

    @keyframes fadeInLg {

    0% {
        opacity: 0;
        transform: translateY(500px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

   @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(300px);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
 }

 .MuiButton-root{

&:hover {
    background-color: transparent;
}

&:active {
   background: transparent; 
}
    }

.loading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: #333;
  border-radius: 50%;
  animation: bounce 0.6s infinite alternate;
}

.dot:nth-of-type(2) {
  animation-delay: 0.2s;
}

.dot:nth-of-type(3) {
  animation-delay: 0.4s;
}

/* Keyframes for the bounce loading animation */
@keyframes bounce {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-15px);
  }
}
`;

export const WeatherBox = styled(Box)`
display: flex; 
flex-direction: column;
padding: 5px;
gap: 10px;
background-color:transparent;
backdrop-filter: blur(10px);
border: ${props => props.fillup ? '5px solid #006BA6' : '5px solid #fff'};
width: 90%;
height: auto;
border-radius: 15px;
//position: relative;
z-index: 1;
transition: all 0.5s ease-in-out;

@media screen and (max-width: 760px) {
    width: auto;
}

@media screen and (max-width: 480px) {
    width: 90%;
}


&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    background-color: #fff;
    transform-origin: right;
    transition: transform 0.5s ease-in-out;
    transform: ${props => props.fillup ? 'scaleX(1)' : 'scaleX(0)'};
    z-index: -1;
    color: #000;

}

`;

export const SearchWrapper = styled(Box)`
display: flex;
justify-content: center;
width: 100%;
height: min-content;
`;

export const SearchBar = styled(TextField)`
padding-top: 5px;
width: 100px;
transition: all 0.5s ease-in-out;

&:hover {
width: 300px;
    }


@media screen and (min-width: 1600px) {
width: 300px;

&:hover {
width: 500px;
 }
}

@media screen and (max-width: 980px) {
width: 170px;

&:hover {
width: 270px;
 }
}



.MuiInputBase-root.Mui-error {
  border: 2px solid red !important; // Change color as needed
}

.MuiOutlinedInput-root	{
    border-radius: 25px;
    height: 55px;
    background-color: #222222;
    color: #ffff;
    transition: all 0.5s ease-in-out;

    @media screen and (min-width: 1600px) {
    font-size: 1.7rem;
    height: 70px;
}

@media screen and (min-width: 1400px) {
    font-size: 1.5rem;
    }

    fieldset {
      border-color: transparent;
    }

    &:hover {
    color: #fff;
    animation: shadowPulse 1s infinite;
    transform: translateY(-2px);
    background-color:#429EA6;

    }


    &:hover fieldset {
      border-color: transparent;
    }

    &.Mui-focused fieldset {
      border-color: transparent;

    }

@keyframes shadowPulse {
    0% {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  }
  100% {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  }
}
}
`;

export const WeatherBoxes = styled(Box)`
display: flex;
gap: 10px;
text-align: center;
align-items: stretch;

@media screen and (max-width: 480px) {
gap: 5px;
}

& > :nth-of-type(-n+2) {
    //position: relative;
    }

& > div {
    position: relative;
    padding: 5px;
    border: ${props => props.fillup ? '5px solid #000' : '5px solid #fff'};
    transition: all 0.5s ease-in-out;
    border-radius: 15px;
    background-color: #006BA6;
    box-shadow: 0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12);
}


.windsText {
    position: relative;
    top: 30px;
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
    width: 100%;

    @media screen and (min-width: 1600px) {
    font-size: 2.7rem;
    top: 60px;
}


@media screen and (min-width: 3200px) {
    font-size: 3.1rem;
    top: 90px;
    }

    @media screen and (max-width: 768px) {
        top: 40px;
        font-size: 1.1rem;
    }

    @media screen and (max-width: 480px) {
        top: 15px;
        font-size: 0.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
        top: 11px;
    }

}

.condition {
    position: absolute;
    top: -5px;
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
    width: 100%;

    @media screen and (max-width: 480px) {
        font-size: 0.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.6rem;
        top: -1.1rem;
    }

    @media screen and (min-width: 1600px) {
    font-size: 2.7rem;
    top: 1rem;
    }
}

.temp {
    font-size: 3rem;
    font-weight: 700;
    color: #333;
    text-align: center;
    line-height: 1;
    position: relative;
    width: 100%;


@media screen and (min-width: 1600px) {
    font-size: 6.1rem;
}

@media screen and (min-width: 3200px) {
    font-size: 7.7rem;
    }
 @media screen and (max-width: 768px) {
        font-size: 3rem;
    }

@media screen and (max-width: 480px) {
        font-size: 2rem;
    }

@media screen and (max-width: 320px) {
        font-size: 1rem;
    }
}

.winds {
    font-size: 2.7rem;
    font-weight: 700;
    color: #333;
    text-align: center;

    @media screen and (min-width: 1600px) {
    font-size: 5.3rem;
}

@media screen and (min-width: 3200px) {
    font-size: 7.7rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 1rem;
    }
}

.sunTime {
    font-size: 2.7rem;
    font-weight: 700;
    color: #333;
    text-align: center;
    line-height: 1;

    @media screen and (min-width: 1600px) {
    font-size: 5.3rem;
}

@media screen and (min-width: 3200px) {
    font-size: 6.7rem;
    }

    @media screen and (max-width: 768px) {
        font-size: 2.3rem;
    }

    @media screen and (max-width: 480px) {
        font-size: 1.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 1.1rem;
    }
}


.sun {
    position: relative;
    top: 7px;
    font-size: 1.3rem;
    font-weight: 500;
    color: #fff;
    width: 100%;


@media screen and (min-width: 1600px) {
    font-size: 2.7rem;
}


@media screen and (min-width: 3200px) {
    font-size: 3.1rem;
    }
    
    @media screen and (max-width: 768px) {
        top: 3px;
        font-size: 1.1rem;
    }

    @media screen and (max-width: 480px) {
        top: 2px;
        font-size: 0.8rem;
    }

    @media screen and (max-width: 320px) {
        font-size: 0.7rem;
    }
}

.outsideText {
position: absolute;
bottom: -5rem;
font-size: 2.7rem;
font-weight: 700;
color: #333;
width: 100%;
text-align: center;
//color: #fff;
color: ${props => props.fillup ? '#0088d1' : '#fff'};
transition: all 0.5s ease-in-out;

animation: fadeIn 1.5s ease-in-out;

@media screen and (min-width: 2000px) {
    font-size: 3.7rem;
    bottom: -7rem;
}

@media screen and (max-width: 1600px) {
    font-size: 2.7rem;
    bottom: -100px;
}

@media screen and (max-width: 980px) {
    font-size: 1.5rem;
    bottom: -60px;
}
@media screen and (max-width: 480px) {
    font-size: 1.2rem;
    bottom: -55px;
}
@media screen and (max-width: 360px) {
    font-size: 1rem;
}
 }

`;

export const Box1 = styled(Box)`
width: 35%;
`;

export const Box2 = styled(Box)`
width: 50%;
`;

export const Box3 = styled(Box)`
width: 35%;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

`;

export const WeatherText = styled(Typography)`
font-family: 'Urbanist', sans-serif;
`;

export const WeatherType = styled('img')`
width: 80px;
height: auto;

@media screen and (min-width: 1600px) {
    width: 150px;
}

@media screen and (max-width: 768px) {
width: 75px;
}

@media screen and (max-width: 480px) {
width: 60px;
}

@media screen and (max-width: 320px) {
width: 50px;
    }
`;

export const Current = styled(Typography)`
`;
export const Tomorrow = styled(Typography)`
`;
export const SunriseSunset = styled(Typography)`
`;