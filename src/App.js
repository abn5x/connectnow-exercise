import { HashRouter as Router, withRouter } from 'react-router-dom';
import Header from './components/Header';
import Routes from './components/Routes';
import { useEffect } from 'react';
import { connect } from 'react-redux'
import { getData } from "./features/asyncData"

const mapDispatch = { getData }
function App({ getData }) {
  useEffect(() => {
    getData()
  }, [])
  return (
    <Router>
      <Header />
      <Routes />
    </Router>
  );
}

export default connect(undefined, mapDispatch)(App);
