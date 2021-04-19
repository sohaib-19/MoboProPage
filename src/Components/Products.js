import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import poster from "../Images/weekly.jpg"
import MediaCard from "./Card";
import Divider from '@material-ui/core/Divider';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderStyle: 'none',
    borderColor: 'white',
    borderBottomColor: 'white'
  },
}));

        export default function AutoGrid(props) {
            const classes = useStyles();
          
            return (
              <div className={classes.root}>
    <Grid container style={{
      borderStyle: 'none',
      boxShadow: 0,
      paddingTop: 20

    }} spacing={3}>
        <Grid item md={1}></Grid>
        <Grid item md={3}>
          <Paper className={classes.paper}>
          <img src={props.src} className="d-block w-100" style={{height: "370px", widht: "90px"}} alt="..." />
          </Paper>
        </Grid>
        <Grid item md={8}>
          <Paper className={classes.paper}>
              <h5 className="weekly_heading">{props.title}</h5>
              <hr/>
              <Divider orientation="horizontal" style={{color: "black"}} flexItem />
              <MediaCard />
              </Paper>
        </Grid>
      </Grid>
    </div>
);
}