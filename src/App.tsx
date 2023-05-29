import './App.css';
import { Container, CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import SidePannel from './components/SidePannel';
import Header from './components/Header';

import Home from './routes/Home';
import Article from './routes/Article';
import MyPage from './routes/MyPage';
import Auth from './routes/Auth';


function App() {
  return (
    <>
      <CssBaseline />
      <Container sx={{ paddingLeft: { xs: "40px", sm: "80px" } }} maxWidth={false} disableGutters>
        <SidePannel />
        <Container maxWidth={false} disableGutters>
          <Header/>
          <Container maxWidth={false}>
            <Routes>
              <Route path="/*" element={<Home/>} />
              <Route path="/article/:id/:cat/:slug" element={<Article />} />
              <Route path="/mypage/:id/*" element={<MyPage />} />
              <Route path="/auth/*" element={<Auth />}/>
            </Routes>
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default App;
