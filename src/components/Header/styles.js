import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5.875rem;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  font-weight: 600;
  padding-inline: 2.875rem;
  color: ${(props) => props.theme.colors.text};

  div {
    display: flex;
    align-items: center;
  }

  a {
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    text-align: center;
    padding: 0 20px;

    & + a {
      border-left: 2px solid #ffffff;
    }
    :hover {
      color: #d61f56;
    }
    :focus {
      color: #e02960;
    }
    &.selected {
      color: #e33b6d;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    margin-left: 20px;
  }
`;

export const User = styled.div`
  font-size: 16px;
  color: #ffffff;
  display: flex;
  align-items: center;
  img {
    margin-right: 5px;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    object-fit: cover;
  }
`;
