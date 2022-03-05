import styled from "vue3-styled-components";
import { color } from 'mekar-token/src/token'

const buttonProps = {
  variation: String,
  size: String,
  isDisabled: Boolean
}

const StyledButton = styled('button', buttonProps)`
  cursor: pointer;
  height: ${props => props.size === 'small' ? '36px' : '44px' };
  padding:${props => props.size === 'small' ? '0 12px' : '0 20px' };
  border: 1px solid transparent;
  text-decoration: none;
  outline: none;
  color: ${props => props.variation === 'primary' ? color.white : color.gray80 };
  font-family: sans-serif;
  font-size: 16px;
  line-height: 20px;
  background-color: ${props => props.variation === 'primary' ? color.blue60 : color.gray10 };
  transition: all .2s ease-in-out;

  ${props => props.isDisabled && `
     cursor: not-allowed;
     background-color: #f2f2f2;
     color: #b6b6b6;
  `}
`

export default StyledButton

