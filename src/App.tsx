import './App.css';
import { Container, CssBaseline, Grid } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import SidePannel from './components/SidePannel';
import Header from './components/Header';
import Home from './routes/Home';


function App() {
  return (
    <>
      <CssBaseline />
      <Container
        sx={{ paddingLeft: { xs: "40px", sm: "80px" }, height: "2000px", border: "1px solid black" }}
        maxWidth={false}
        disableGutters
      >
        <SidePannel />
        <Container
          sx={{ height: "1200px" }}
          maxWidth={false}
          disableGutters
        >
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/:majorCat" element={<Header />} />
            <Route path="/:majorCat/:minorCat" element={<Header />} />
          </Routes>

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
