import { Box } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// component
import DataProvider from './context/data-provider';
import Header from './mainComponents/header/Header';
import Home from './mainComponents/home/Home';
import Contact from './mainComponents/contact/Contact'
import About from './mainComponents/about/About';
import Blog from './mainComponents/blog/Blog';
import LogIn from './mainComponents/login/LogIn';
import SignUp from './mainComponents/login/SignUp';
import Tutorial from './mainComponents/home/Tutorial';
import Secret from './mainComponents/secret/Secret';
import Footer from './mainComponents/footer/Footer';
import AccountScreen from './mainComponents/secret/accountScreen';


function App() {

  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/About' element={<About />} />
            <Route path='/Blog' element={<Blog />} />
            <Route path='/SignUp' element={<SignUp />} />
            <Route path='/LogIn' element={<LogIn />} />
            <Route path='/:subjectName' element={<Tutorial />} />
            <Route path='/myProfile' element={<Secret />} />
            <Route path='/myAccount' element={<AccountScreen />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
