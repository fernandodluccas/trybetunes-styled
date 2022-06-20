import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
  color: #fff;

  h1 {
    font-size: 3.125rem;
  }
`;

export const Form = styled.div`
  width: 660px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};

  div {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 40px;
  }
  label {
    display: contents;
  }

  input {
    margin-top: 0.625rem;
    width: 100%;
    height: 3.125rem;
    padding: 1.125rem;
    border-radius: 0.625rem;
    background-color: transparent;
    font-size: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.4);
    color: #fff;
    ::placeholder {
      color: #fff;
    }
  }
  button {
    width: 100%;
    height: 3.125rem;
    border-radius: 0.625rem;
    font-size: 1rem;
    font-weight: 600;
    margin-top: 2rem;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Aside = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: calc(100% - 250px)
  }

   @media (max-width: 768px) {
     display: none;
}`;
