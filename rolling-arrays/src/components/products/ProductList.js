import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productListAction } from '../../actions';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { CardActionArea, CardMedia, CardContent, CardActions, Container } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Alert from '../alert/Alert';
import ControlProductItem from '../dropdown/ControlProductItems';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin: '5rem auto',
  },
  loaderWrapper: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: '1rem',
    padding: '3rem',
    backgroundPosition: 'inherit'
  },
  priceTag: {
    fontWeight: 600
  },
  titleInfo: {
    fontWeight: 600,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  }, 
  dropDown: {
    paddingBottom: '2rem',
  }
}));

const ProductList = (props) => {
  const classes = useStyles();
  const productListData = useSelector(state => state.productList.productListData);
  const productListErrMsg = useSelector(state => state.productList.productListErrMsg);
  const isProductListFetching = useSelector(state => state.productList.isProductListFetching);
  const dispatch = useDispatch();
  const [allProductList, setAllProductList] = useState([]);
  const [disabled, setDisabled] = useState([]);
  const [itemQuants, setItemQuants] = useState(0);

  const addToCart = (e, id) => {
    console.log(id);
    setDisabled([...disabled, id])
  }

  useEffect(() => {
    dispatch(productListAction.sendProductListRequest());
  }, [])

  useEffect(() => {
    if (productListData && productListData?.length > 0) {
      console.log(productListData);
      setAllProductList(productListData);
    }
  }, [productListData])

  if (productListErrMsg) {
    setTimeout(() => {
      dispatch(productListAction.clearAllNotifications());
    }, 3000)
  }

  const changeQuantity = (val) => {
    setItemQuants(val);
    dispatch(productListAction.sendProductListRequest(val));
  }

  return (
    <React.Fragment>
      {isProductListFetching ?
        <div className={classes.loaderWrapper}>
          <CircularProgress />
        </div>
        :
        (productListErrMsg ?
          <Alert error={productListErrMsg} />
          :
          (allProductList ?
            <div className={classes.root}>
              <div className={classes.dropDown}>
              <ControlProductItem 
              changeQuantity={changeQuantity}
              itemQuants={itemQuants}/>
              </div>
              <Grid container spacing={3}>
                {allProductList.map((proList) => (
                  <Grid item xs={6} sm={3} key={proList.id}>
                    <Card>
                      <CardActionArea>
                        <Container>
                          <CardMedia
                            className={classes.media}
                            image={proList.image}
                            title={proList.title}
                          />
                        </Container>
                        <CardContent>
                          <Typography gutterBottom variant="p" component="p" className={classes.titleInfo}>
                            {proList.title}
                          </Typography>
                          <Typography variant="body2" color="textSecondary" component="p" className={classes.priceTag}>
                            {'Price'}{proList.price}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                      <CardActions>
                        <Button
                          size="small"
                          color="primary"
                          variant="contained"
                          disabled={disabled.indexOf(proList.id) !== -1}
                          onClick={(e) => { addToCart(e, proList.id) }}
                        >
                          Buy
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </div>
            :
            <div className={classes.root}>
              'NO DATA FOUND'
            </div>
          )
        )
      }
    </React.Fragment>
  )
}

export default ProductList;
