import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    root: {
        width: 'fit-content',
        border: `1px solid ${theme.palette.divider}`}
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-start',
    fontSize: '14px',
    fontWeight: 'bold'
  },
  '& hr': {
    margin: theme.spacing(0, 0.5),
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{boxShadow: "0px 0px 0px 0px", backgroundColor: "white", color:"black", height:"65px"}}>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title} variant="h6" noWrap>
            Gadgets & Accessories
          </Typography>
          <Divider orientation="vertical" style={{height: 35, color: "black"}} flexItem />
          <Typography className={classes.title} variant="h6" noWrap>
            Audio Devices
          </Typography>
          <Divider orientation="vertical" style={{height: 35, color: "black"}} flexItem />
          <Typography className={classes.title} variant="h6" noWrap>
            TV & Video Accessories
          </Typography>
          <Divider orientation="vertical" style={{height: 35, color: "black"}} flexItem />
          <Typography className={classes.title} variant="h6" noWrap>
            Networking Devices
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
