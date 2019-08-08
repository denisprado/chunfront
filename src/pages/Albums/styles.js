import styled from 'styled-components'

export const Container = styled.div`
  margin-top: ${props => props.isOpen ? '0' : '80px'};
`