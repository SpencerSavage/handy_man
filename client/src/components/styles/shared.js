import styled from 'styled-components';
import {Col} from 'react-bootstrap'

export const MainHeader = styled.h1`
  background-color: #F2F2F2;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
  text-align: center;
  font-weight: 300;
`

export const AboutHeader = styled.div`
  background-color: white;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const AboutH1 = styled.h1`
  color: black;
  font-weight: 600;
  font-size: ${ props => fontSize(props.size)};
  text-align: ${ props => textAligning(props.textAlign)};
`

export const AboutP = styled.p`
  color: black;
  font-weight: 300;
  width: 50%;
  margin-top: 40px;
  font-size: ${ props => fontSize(props.size)};
  text-align: ${ props => textAligning(props.textAlign)};
`

const fontSize = (size) => {
  switch(size) {
    case 'lrg':
      return '4rem';
    case 'sm':
      return '1rem';
    default:
      return '2rem';
  }
}

const textAligning = (dir) => {
  switch(dir) {
    case 'right':
      return 'right';
    case 'left':
      return 'left';
    default:
      return 'center';
  }
}



export const FeaturePaddingImg = styled(Col)`
  margin: 50px 30px;
`

export const FeaturePaddingText = styled(Col)`
  margin: 150px 30px;
`

export const Footer1 = styled.h5`
  margin: 2em;
  font-size: ${ props => fontSize(props.size)};
  text-align: ${ props => textAligning(props.textAlign)};
`

export const ServiceLists = styled(Col)`
  
  
`