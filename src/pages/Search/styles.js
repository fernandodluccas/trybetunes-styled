import styled from 'styled-components';

export const Container = styled.div`

  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  max-width: 890px;
  flex-direction: row;
  justify-content: space-between;
  margin: 2rem auto;

  label{
    width: 100%;
  }

  @media (max-width: 768px) {
    label{
      margin-right: 30px;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  max-width: 590px;
  height: 50px;
  margin-right: 30px;
  font-size: 1rem;
  border: 2px solid rgba(63, 61, 86, 0.6);
  border-radius: 10px;
  padding: 1rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.heading};
`;

export const Button = styled.button`
  width: 100%;
  max-width: 270px;
  height: 3.125rem;
  border-radius: 0.625rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const AlbumList = styled.div`
  width: 100%;
  max-width: 890px;
  margin: auto;
  color: ${({ theme }) => theme.colors.heading};

  h2 {
    margin-bottom: 1rem;
  }
`;

export const AlbumsWrapper = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 30px;
  }
`;

// export const AlbumCard = styled.div`
//   /* width: 11.625rem;
//   height: 11.625rem; */
//   display: flex;
//   flex-direction: column;
//   justify-content: end;
//   font-size: 13px;
//   background-size: cover;

//   div {
//     display: flex;
//     align-items: center;
//     height: 50px;
//     background-color: #3f3d56;

//     a {
//       color: #ffffff;
//       text-decoration: none;
//       font-size: 14px;
//     }
//   }
// `;
