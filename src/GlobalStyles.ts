import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  padding-top: 1%;
  max-width: 1200px;
`
export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h1`
  font-size: 2.5rem;
  font-family: 'Poppins', sans-serif;
  color: #fff;
`

export const ContainerImage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  max-width: 1200px;
  min-height: 120px;
  margin-bottom: 20px;
  margin-left: 20px;
`

export const BoxImage = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 2px solid;
  border-color: ${props => (props.className ? '#33197e' : '#292d31')};
`

export const Image = styled.img`
  width: 70px;
`

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 5% auto;
`
export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: auto;
  margin: 8% auto;
`
