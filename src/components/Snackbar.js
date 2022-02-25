import React from 'react';
import { makeStyles, Snackbar } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    snack: {
        '& > *': {
            color: '#fff',
            backgroundColor: '#000000'
        }
    }
})

const SnackBar = ({ open, setOpen }) => {
    const classes = useStyles()
    return (
        <Snackbar open={open} className={classes.snack}>
            <MuiAlert severity='info' onClose={() => setOpen(false)}>
                Number of images should be between 3 and 200
            </MuiAlert>
        </Snackbar>
    )
};

export default SnackBar;
