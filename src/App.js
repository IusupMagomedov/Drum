import * as React from 'react';
import { Button, Grid, Typography } from '@mui/material';

function App() {
  return (
    <Grid container spacing={2} id="drum-machine" >
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Typography variant="h4" component="h1" gutterBottom >
          Create React App example
        </Typography>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <Grid container spacing={2} id="drum-machine" >
          <Grid item xs={4}><Button variant="outlined">Hello World</Button></Grid>
          <Grid item xs={4}><Button variant="outlined">Hello World</Button></Grid>
          <Grid item xs={4}><Button variant="outlined">Hello World</Button></Grid>
          <Grid item xs={4}><Button variant="outlined">Hello World</Button></Grid>
          <Grid item xs={4}><Button variant="outlined">Hello World</Button></Grid>
          <Grid item xs={4}><Button variant="outlined">Hello World</Button></Grid>
          <Grid item xs={4}><Button variant="outlined">Hello World</Button></Grid>
          <Grid item xs={4}><Button variant="outlined">Hello World</Button></Grid>
          <Grid item xs={4}><Button variant="outlined">Hello World</Button></Grid>
        </Grid>
      </Grid>
      <Grid item xs={3}></Grid>
    </Grid>
    
  );
}

export default App;
