import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import { compose } from 'redux';
import { connect } from 'react-redux';
import { Container, User } from './styles';

import { getUser } from '../../services/userAPI';

import userIcon from '../../assets/userIcon.svg';

class Header extends React.Component {
  state = {
    user: undefined,
  };

  async componentDidMount() {
    const user = await getUser();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;
    const {
      history: {
        location: { pathname },
      },
      toggleTheme,
      theme,
    } = this.props;
    return (
      <Container data-testid="header-component">
        <div>
          <Link
            className={pathname === '/search' ? 'selected' : null}
            to="/search"
            data-testid="link-to-search"
          >
            Pesquisar
          </Link>
          <Link
            className={pathname === '/favorites' ? 'selected' : null}
            to="/favorites"
            data-testid="link-to-favorites"
          >
            Favoritas
          </Link>
          <Link
            className={pathname === '/profile' ? 'selected' : null}
            to="/profile"
            data-testid="link-to-profile"
          >
            Meu Perfil
          </Link>
        </div>
        <div>
          {user ? (
            <User>
              <img src={user.image ? user.image : userIcon} alt="" />
              <p data-testid="header-user-name">{user.name}</p>
            </User>
          ) : (
            <ClipLoader color="#e33b6d" />
          )}
          <button type="button" onClick={() => toggleTheme()}>
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#e0245c"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#e0245c"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}
          </button>
        </div>
      </Container>
    );
  }
}

Header.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      pathname: PropTypes.string,
    }),
  }).isRequired,
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => ({
  toggleTheme: () => dispatch({ type: 'SWITCH_THEME' }),
});

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(Header);
