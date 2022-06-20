import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  margin: auto;
  padding: 2rem 0;
  color: ${({ theme }) => theme.colors.artistName};

  div {
    margin-bottom: 2rem;
    label {
      margin-bottom: 0;
    }
  }

  label {
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;

    input {
      height: 50px;
      border: 1px solid #858595;
      border-radius: 10px;
      width: 100%;
      background: transparent;
      padding: 10px;
      color: ${({ theme }) => theme.colors.artistName};
    }
  }
  button {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
    font-weight: 600;
    font-size: 1rem;
    margin-top: 2rem;
    width: 100%;
    height: 50px;

    :disabled{
      opacity: 0.3;
      cursor: not-allowed;
    }
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }
`;
