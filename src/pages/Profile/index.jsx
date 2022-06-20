import React from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { getUser } from '../../services/userAPI';
import Header from '../../components/Header';
import { Container, ProfileInfo } from './styles';

import userProfileIcon from '../../assets/userProfileIcon.svg';

export default class Profile extends React.Component {
  state = {
    loading: true,
    user: {},
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  render() {
    const { loading, user } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {loading ? (
          <ClipLoader color="#e33b6d" />
        ) : (
          <Container>
            <span>
              <img
                data-testid="profile-image"
                src={user.image ? user.image : userProfileIcon}
                alt=""
              />
              <Link to="profile/edit">Editar perfil</Link>
            </span>

            <ProfileInfo>
              <p>
                Nome:
                {' '}
                <span>{user.name}</span>
              </p>
              <p>
                Email:
                {' '}
                <span>{user.email}</span>
              </p>
              <p>
                Descrição:
                {' '}
                <span>{user.description}</span>
              </p>
            </ProfileInfo>
          </Container>
        )}
      </div>
    );
  }
}
