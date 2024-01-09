import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';

import VersionControl from 'react-version-control';
import Cookies from 'universal-cookie';
import renderUpdateContent from './components/renderUpdateContent';
import Home from './components/Home';
import Layout from './components/Layout';
import Category from './components/Category';
import Country from './components/Country';
import Language from './components/Language';
import Channel from './components/Channel';
import PlayerScreen from './components/PlayerScreen';


import categoryData from './data/category.json';
import countryData from './data/country.json';
import languageData from './data/language.json';

function App() {

  
  const cookies = new Cookies();
  function checkVersion() {
    if (!cookies.get('appVersion')) {
      cookies.set('appVersion', process.env.REACT_APP_VERSION, { path: '/' });
    }
    if (cookies.get('appVersion') != process.env.REACT_APP_VERSION) {
      window.setLoadUpdate();
      cookies.set('appVersion', process.env.REACT_APP_VERSION, { path: '/' });
    }
  }
  return (
    <VersionControl
      getLatestVersion={() => '1.0.0'}
      version={process.env.REACT_APP_VERSION}
      enabled
      debug
      checkVersion={checkVersion}
      renderHotUpdate={renderUpdateContent}
    >
    <Router>
        <Layout category={categoryData} country={countryData} language={languageData}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category category={categoryData} />} />
            <Route path="/country" element={<Country country={countryData} />} />
            <Route path="/language" element={<Language language={languageData} />} />
            <Route path="/channel/:type/:value" element={<Channel />} />
            <Route path="/player" element={<PlayerScreen />} />
        </Routes>
      </Layout>
    </Router>
        
    </VersionControl>
  );
}

export default App;
