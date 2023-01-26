import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #292d31;
  width: 30%;
  height: auto;
  padding: 10px;
  margin: 0 auto;
  margin-top: 10%;
`

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: auto;
  margin: 3% auto;
`
export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  border: 0;
`

export const CardInput = styled.input`
  width: 100%;
  font-size: 18px;
  font-weight: 100;
  margin-right: 10px;
  height: 30px;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #fff;
  padding: 2px 10px;
  margin-bottom: 20px;

  ::placeholder {
    color: #fff;
  }
`
