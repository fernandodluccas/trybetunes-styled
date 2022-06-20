import React from 'react';
import PropTypes from 'prop-types';
import ClipLoader from 'react-spinners/ClipLoader';

import { createUser } from '../../services/userAPI';
import { Aside, Container, Form } from './styles';

import illustrationImg from '../../assets/UndrawMusic.svg';

export default class Login extends React.Component {
  state = {
    formName: '',
    loading: false,
  };

  handleChangeForm = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  };

  onButtonClick = (e) => {
    e.preventDefault();
    const { formName } = this.state;
    const { history } = this.props;

    this.setState({ loading: true }, () => createUser({ name: formName }).then(() => history.push('search')));
  };

  buttonDisabled = () => {
    const MIN_LENGTH_NAME = 3;
    const { formName } = this.state;

    return formName.length >= MIN_LENGTH_NAME;
  };

  render() {
    const { formName, loading } = this.state;

    return loading ? (
      <ClipLoader color="#e33b6d" />
    ) : (
      <Container>
        <Form>
          <h1>TrybeTunes</h1>
          <div>
            <label htmlFor="login-submit-input">
              Digite seu nome:
              <input
                name="formName"
                id="login-submit-button"
                type="text"
                data-testid="login-name-input"
                value={formName}
                placeholder="Nome"
                onChange={this.handleChangeForm}
              />
            </label>
            <button
              type="submit"
              data-testid="login-submit-button"
              onClick={this.onButtonClick}
              disabled={!this.buttonDisabled()}
            >
              Entrar
            </button>
          </div>
        </Form>
        <Aside>
          <img src={illustrationImg} alt="Illustration" />
        </Aside>
      </Container>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
