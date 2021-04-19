import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 200,
    paddingLeft: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  media: {
    height: 160,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={25}>
      <Grid item xs={2}>
 <Paper className={classes.paper}>
 <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2021/03/Artboard-2-8-1-150x150.png"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>

 </Paper>
</Grid>
<Grid item xs={2}>
 <Paper className={classes.paper}>
 <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2021/03/Artboard-12-8-150x150.png"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
     
 </Paper>
</Grid>
<Grid item xs={2}>
 <Paper className={classes.paper}><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2021/03/Artboard-8-8-1-150x150.png"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Paper>
</Grid>
<Grid item xs={2}>
 <Paper className={classes.paper}><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2021/03/Artboard-5-8-1-150x150.png"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Paper>
</Grid>
<Grid item xs={2}>
 <Paper className={classes.paper}><Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2021/03/Artboard-5-8-1-150x150.png"
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card></Paper>
</Grid>

</Grid>
</div>
  );
}



 