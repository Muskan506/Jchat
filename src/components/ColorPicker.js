import React from 'react';
import InputGroupWithExtras from 'react-bootstrap/esm/InputGroup';
import styled from 'styled-components';
    
   const Container= styled.span`
    dispaly: inline-flex;
    align-items: center ;
    padding:4px 12px;
    border:1px solid #bfc9d9;
    border-radius:4px;
    input[type="color"]{
        border:none;
        height:auto;
        width:auto;
        &::-Webkit-color-swatch-wrapper{
            height:20px;
            width:20px;
            pdding:0;
            
        }
        &::webkit-color-swatch-wrapper{
            height:14 px;
            width:40px;
            padding:2;
        }
    }
    `;   
    const ColorPicker = ({value,onChange,...rest})=>{
    return (
        <Container>
            <input type='color'style={{marginTop:4}} onChange={onChange} value={value} {...rest}/>
            <input style={{width:20}} onChange={onChange} {...rest} />
        </Container>
    )
}

export default ColorPicker
