import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  containerWrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  root: {
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontWeight: 700
  },
  pos: {
    marginBottom: 12,
  },
  headerColor: {
    color: 'red',
  },
  adjustButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '1rem',
  }
});

const Product = () => {
  const navigate = useNavigate();
  const classes = useStyles();

  const productListNavigation = () => {
    navigate('/products-list')
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm" className={classes.containerWrapper}>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              Welcome!
            </Typography>
            <Typography variant="h5" component="h2" className={classes.headerColor}>
              MEGA SALE
            </Typography>
            <Typography variant="body2" component="p">
              What are you waiting for?
              <br />
              {'Hurry NOW!!!'}
            </Typography>
          </CardContent>
          <CardActions className={classes.adjustButton}>
            <Button variant="contained" color="primary" onClick={productListNavigation}>
              See Products
            </Button>
          </CardActions>
        </Card>
      </Container>
    </React.Fragment>
  );
}

export default Product;
