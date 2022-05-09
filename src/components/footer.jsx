import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Voting App Made By Anirban
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default class Footer extends Component {
  render() {
    return (
      <Copyright sx={{ mt: 8, mb: 4 }} />
    )
  }
}
