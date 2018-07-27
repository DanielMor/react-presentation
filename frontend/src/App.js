import React, { Component } from 'react';
import styled from 'styled-components';
import Todos from './containers/Todos';
import EditTodo from './containers/EditTodo';
import { Router } from '@reach/router';

const AppContainer = styled.div`
  text-align: center;
`

const AppHeader = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`

const AppTitle = styled.h1`
  font-size: 1.5em;
`

class App extends Component {
  render() {
    return (
      <AppContainer>
        <AppHeader>
          <AppTitle>
            Welcome to React
          </AppTitle>
        </AppHeader>
        <Router>
          <Todos path="/" />
          <EditTodo path="edit/:id" />
        </Router>
      </AppContainer>
    );
  }
}

export default App;
