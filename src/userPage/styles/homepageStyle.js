import { Content } from "antd/es/layout/layout";
import Slider from "react-slick";
import styled from "styled-components";

export const ContentLayout = styled(Content)`
    padding:0 50px;
    color: #333333;
    @font-face {
  font-family: 'ginger';
  font-weight: normal;
  font-style: normal;
  src: url('./font/Ginger/SVN-Ginger.otf') format('truetype');
  font-display: swap;
}

h3{
  text-align: center;
  font-size: 42px;
  font-weight: 900;
  margin: 40px 0;
}

`

export const Banner = styled.div`
padding-top:150px;
height: 500px;
    text-align: center;
  p{
    font-size: 20px;
  }
    h1{
        font-family: 'ginger';
        font-size: 52px;
        margin: 0;
    }

`

export const Trending = styled.div`
  
`

export const SliderTrending = styled(Slider)`
div{
    background-color: red;
    margin: 10px;
    margin-left: 20px;
    border-radius: 10px;
  }
`;

export const Collection =styled.div`

`

export const ListProducts = styled.div`

`
export const Sales = styled.div`
  p{
    font-size: 30px;
    text-align: center;
  }
`

export const ContentSales = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://i.etsystatic.com/25907799/r/il/6b1798/2681514955/il_1588xN.2681514955_4ett.jpg);
  /* background-color: rgba(251, 248, 247, 10.4); */
  /* height: 500px; */
  text-align: center;
  padding-top: 15%;
  padding-bottom: 15%;
  h1,h2{
    font-family: 'ginger';
  
    margin: 0;
    font-weight: 900;
  }

  h1{
    color: black;
    font-size: 150px;
  }

  h2{
    font-size: 150px;
    color: white;
    margin-top: -100px;
  }
`

export const GeneralComment = styled.div`

`

