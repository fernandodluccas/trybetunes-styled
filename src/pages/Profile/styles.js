import styled from 'styled-components';

export const Container = styled.div`
 display: grid;
    grid-template-columns: 1fr 1fr;
  max-width: 800px;
  margin: 3rem auto;
  justify-content: center;

  > span{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;


    img{
      width: 200px;
      height: 200px;
      border-radius: 50%;
      object-fit: cover;
    }


    a{
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      border: 1px solid ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 10px;
      font-weight: 600;
      font-size: 1rem;
      margin-top: 2rem;
      width: 100%;
      max-width: 300px;
      height: 50px;
    }
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;

  p{
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0 0 1rem 0.5rem ;
    color: ${({ theme }) => theme.colors.artistName};

    span{
      font-size: 1rem;
      font-weight: 400;
      margin-top: 0.25rem;
    }
  }
`;
