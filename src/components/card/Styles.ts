import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 230px;
  height: 250px;
  border: 1px solid #292d31;
  border-radius: 15px 15px 30px 30px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
`

export const CardHeader = styled.div`
  height: auto;
  min-height: 125px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const CardTitle = styled.h1`
  font-size: 1rem;
  color: #fff;
  font-weight: bold;
  margin-left: 10px;
`

export const CardImage = styled.div`
  width: 150px;
  max-width: 150px;
  min-height: 120px;
  justify-content: center;
  display: flex;
  align-items: center;
`

export const Line = styled.hr`
  width: 225px;
  border: 2px solid #292d31;
  display: flex;
  margin: 0;
`
export const CardBody = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
`
export const CardNote = styled.h1`
  font-size: 3rem;
  color: #fff;
  font-weight: bold;
`
export const CardButtom = styled.button`
  padding: 5px 8px;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 5px;
  width: 100px;
  height: 30px;
  color: #000;
  background-color: #cbf400;
`
