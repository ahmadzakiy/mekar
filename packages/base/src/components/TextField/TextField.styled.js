import styled from "vue3-styled-components";

const inputProps = {
  size: String,
  isDisabled: Boolean,
  isError: Boolean,
  isFocus: Boolean
}

const StyledInput = styled('input', inputProps)`
  position: relative;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
  box-shadow: none;
  letter-spacing: normal;
  color: #3d3d3d;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  height: ${props => props.size === 'small' ? '36px' : '44px' };
  padding:${props => props.size === 'small' ? '0 12px' : '0 20px' };
  background: #ffffff;
  /*border-radius: 8px;*/
  border: 2px solid #d6d6d6;
  transition: all .2s ease-in-out;

  &:hover {
    border-color: #2572b7;
  }

  &::placeholder {
    color: #8d8d8d;
  }

  ${props => props.isFocus && `
    border-color: #2572b7;
  `}

  ${props => props.isError && `
    border-color: #ec0c0c;

    &:hover {
      border-color: #ec0c0c;
    }
  `}

  ${props => props.isDisabled && `
    cursor: not-allowed;
    background-color: #f2f2f2;
    border-color: #f2f2f2;
    color: #b6b6b6;

    &:hover {
      border-color: #f2f2f2;
    }
  `}
`

const StyledLabel = styled.label`
  display: block;
  color: #3d3d3d;
  font-family: sans-serif;
  font-size: 14px;
  line-height: 20px;
  margin-bottom: 8px;
`

export {
  StyledInput,
  StyledLabel
}
