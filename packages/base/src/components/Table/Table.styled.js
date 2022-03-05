import styled from "vue3-styled-components";

const tableProps = {
  size: String,
  isStriped: Boolean,
  isActive: Boolean,
  isArrowAsc: Boolean,
}

const StyledTable = styled('table', tableProps)`
  width: 100%;
  color: #3d3d3d;
  font-family: sans-serif;
  font-size: 16px;
  line-height: 20px;
  border-spacing: 0;
  border-collapse: collapse;
  background-color: #fff;

  ${props => props.isStriped && `
     tr:nth-child(even) {
     background-color: #d6d6d6;
    }
  `}

`

const StyledTh = styled('th', tableProps)`
  min-width: 200px;
  color: #d6d6d6;
  background-color: #2572b7;
  border-bottom: 2px solid #2572b7;
  cursor: pointer;
  user-select: none;
  height: ${props => props.size === 'small' ? '36px' : '44px' };
  padding:${props => props.size === 'small' ? '0 12px' : '0 20px' };

  ${props => props.isActive && `
    color: #ffffff;

    .arrow {
      opacity: 1;
    }
  `}
`

const StyledTd = styled('td', tableProps)`
  min-width: 200px;
  border-bottom: 2px solid #d6d6d6;
  height: ${props => props.size === 'small' ? '36px' : '44px' };
  padding:${props => props.size === 'small' ? '0 12px' : '0 20px' };
`

const StyledArrow = styled('span', tableProps)`
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  margin-left: 5px;
  opacity: 0.66;

  ${props => props.isArrowAsc && `
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-bottom: 4px solid #fff;
  `}

  ${props => !props.isArrowAsc && `
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 4px solid #fff;
  `}
`

export {
  StyledTable,
  StyledTh,
  StyledTd,
  StyledArrow
}
