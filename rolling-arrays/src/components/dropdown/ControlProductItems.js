import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

const ControlProductItem = (props) => {
  const classes = useStyles();
  const pageValues = [5, 10, 15, 20];
  const [open, setOpen] = useState(false);
  const { changeQuantity, itemQuants } = props;

  const handleChange = (event) => {
    changeQuantity(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Items per page</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={itemQuants}
          onChange={handleChange}
          placeholder={itemQuants}
        >
          {pageValues.map((pageValue, key) => (
            <MenuItem key={key} value={pageValue}>{pageValue}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default ControlProductItem;