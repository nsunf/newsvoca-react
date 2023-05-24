import './App.css';
import { Container, CssBaseline, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import SidePannel from './components/SidePannel';
import Header from './components/Header';
import Home from './routes/Home';
import Article from './routes/Article';
import MyPage from './routes/MyPage';
import LoginContainer from './container/LoginContainer';
import SignupContainer from './components/SignupContainer';
import FindMyContainer from './components/FindMyContainer';


function App() {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{ paddingLeft: { xs: "40px", sm: "80px" } }}
        maxWidth={false}
        disableGutters
      >
        <SidePannel />
        <Container
          maxWidth={false}
          disableGutters
        >
          {/* <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/:majorCat" element={<Header />} />
            <Route path="/:majorCat/:minorCat" element={<Header />} />
          </Routes> */}
          <Header/>
          <Container maxWidth={false}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/:majorCat" element={<Home/>} />
              <Route path="/:majorCat/:minorCat" element={<Home/>} />
              <Route path="/article/:id/:cat/:slug" element={<Article />} />
              <Route path="/mypage/:id/*" element={<MyPage />} />
              <Route path="/login" element={<LoginContainer />} />
              <Route path="/signup" element={<SignupContainer />} />
              <Route path="/findmy/:type" element={<FindMyContainer />} />
            </Routes>
          </Container>
        </Container>
        {/* <Grid container sx={{ bgcolor: "orange", height: "1200px" }}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
          </Routes>
        </Grid> */}
      </Container>
    </>
  );
}

export default App;
