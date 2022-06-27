import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../components/Loading';

import { getUser, updateUser } from '../../services/userAPI';
import Header from '../../components/Header';
import { Container, ImageContainer } from './styles';

import userProfileIcon from '../../assets/userProfileIcon.svg';

export default class ProfileEdit extends React.Component {
  state = {
    loading: true,
    user: {
      name: '',
      description: '',
      email: '',
      image: '',
    },
  };

  async componentDidMount() {
    const user = await getUser();
    this.setState({ loading: false, user });
  }

  handleChangeForm = ({ target: { name, value } }) => {
    const { user } = this.state;
    this.setState({ user: { ...user, [name]: value } });
  };

  isButtonDisabled = () => {
    const VALIDADE_EMAIL = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const { user } = this.state;

    const hasEmail = VALIDADE_EMAIL.test(String(user.email).toLowerCase());
    const notEmpty = user.name !== '' && user.description !== '' && user.image !== '';

    return hasEmail && notEmpty;
  };

  isSubmitted = (e) => {
    e.preventDefault();

    const { user } = this.state;
    const { history } = this.props;

    this.setState({ loading: true }, async () => {
      await updateUser(user);
      this.setState({ loading: false }, () => history.push('/profile'));
    });
  };

  render() {
    const { loading, user } = this.state;
    const { theme, toggleTheme } = this.props;

    return (
      <div data-testid="page-profile-edit">
        <Header toggleTheme={toggleTheme} theme={theme} />
        <Container>
          {loading ? (
            <Loading />
          ) : (
            <form>
              <ImageContainer>
                <img
                  data-testid="profile-image"
                  src={user.image ? user.image : userProfileIcon}
                  alt=""
                />
                <label htmlFor="edit-input-image">
                  Insira um link
                  <input
                    id="edit-input-image"
                    type="text"
                    name="image"
                    data-testid="edit-input-image"
                    placeholder="Url de sua imagem"
                    value={user.image}
                    onChange={this.handleChangeForm}
                  />
                </label>
              </ImageContainer>
              <label htmlFor="edit-input-name">
                Nome
                <input
                  id="edit-input-name"
                  type="text"
                  name="name"
                  placeholder="Digite seu nome aqui"
                  data-testid="edit-input-name"
                  value={user.name}
                  onChange={this.handleChangeForm}
                />
              </label>

              <label htmlFor="edit-input-email">
                Email
                <input
                  id="edit-input-email"
                  type="text"
                  name="email"
                  placeholder="usuario@usuario.com"
                  data-testid="edit-input-email"
                  value={user.email}
                  onChange={this.handleChangeForm}
                />
              </label>

              <label htmlFor="edit-input-description">
                Descrição
                <input
                  id="edit-input-description"
                  type="text"
                  name="description"
                  placeholder="Sobre você"
                  data-testid="edit-input-description"
                  value={user.description}
                  onChange={this.handleChangeForm}
                />
              </label>

              <button
                type="submit"
                data-testid="edit-button-save"
                disabled={!this.isButtonDisabled()}
                onClick={this.isSubmitted}
              >
                Salvar
              </button>
            </form>
          )}
        </Container>
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};
