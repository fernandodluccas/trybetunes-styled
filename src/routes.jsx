import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import GlobalStyle from './globalStyles';
import { light, dark } from './theme';

class Routes extends React.Component {
  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={theme === 'light' ? light : dark}>

        <BrowserRouter>
          <GlobalStyle />
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/search" component={Search} />
            <Route path="/album/:id" component={Album} />
            <Route path="/favorites" component={Favorites} />
            <Route path="/profile/edit" component={ProfileEdit} />
            <Route path="/profile" component={Profile} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

Routes.propTypes = {
  theme: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  theme: state.theme,
});

export default connect(mapStateToProps)(Routes);
