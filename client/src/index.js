import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
