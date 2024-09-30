import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import SplashPage from './components/SplashPage';
import HomePage from './components/HomePage';
import Workouts from './components/Workouts';
import Profile from './components/Profile';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          {/* Route for SplashPage when visiting "/" */}
          <Route path="/" element={<SplashPage />} />
          {/* Other routes */}
          <Route path="/home" element={<HomePage />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;