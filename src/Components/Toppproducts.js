import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    maxWidth: 270,

  },
  media: {
    height: 180,
  },
});

export default function TopProduct() {
  const classes = useStyles();

  return (
    <Grid container spacing={1} style={{
        paddingLeft: 20
    }}>
        <Grid item md={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2020/12/4k-300x300.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <CardActions>
      <Button >
            Amazon TV Stick
          </Button>
      </CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
              Rs. 7399/- Only
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>


    <Grid item md={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2021/02/2bcb81d96d7226a5cf815b18b4e3b09c-300x300.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <CardActions>
      <Button >
            Honor Brand 6
          </Button>
      </CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
              Rs. 4399/- Only
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>



    <Grid item md={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2021/01/5561adce395ad1a98ae35573a8135355-300x300.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <CardActions>
      <Button >
            Honor Watch
          </Button>
      </CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
              Rs. 2399/- Only
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>


    <Grid item md={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://secureservercdn.net/160.153.138.177/snj.4aa.myftpupload.com/wp-content/uploads/2020/12/op22-300x300.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
        <CardActions>
      <Button >
            Honor Brand 8
          </Button>
      </CardActions>
          <Typography variant="body2" color="textSecondary" component="p">
              Rs. 4899/- Only
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
  );
}

