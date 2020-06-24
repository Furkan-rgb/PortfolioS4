import React from 'react';
import { Grid } from '@material-ui/core';
import './App.css';
import Main from './components/main';
import Menu from './components/menu';


function App() {
  return (
    <div>
      <Grid display="flex" flexDirection="row" container sm={12}>
        <Grid item sm={4}>
          <Menu />
        </Grid>

        <Grid item sm={8}>
          <Main />
        </Grid>
      </Grid>

    </div >

  );
}

export default App;
