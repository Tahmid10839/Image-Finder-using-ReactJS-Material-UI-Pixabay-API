import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  box: {
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundRepeat: 'no-repeat',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',

  },
  image: {
    width: '900px',
    height: '700px',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: '500px',
      height: '500px',
    },
  },
  button: {
    position: 'absolute',
    top: '30px',
    right: '30px',
    fontSize: '1.5rem',
    cursor: 'pointer',
    width: '50px',
    border: 'none',
    backgroundColor: 'darkblue',
    color: 'white',
    '&:hover': {
      backgroundColor: 'blue',
    }
  }
}))

const FullImage = ({ largeImageURL, setOpenImage }) => {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <img src={largeImageURL} alt="" className={classes.image} />
      <button className={classes.button} onClick={() => setOpenImage(false)}>&times;</button>
    </Box>
  )
};

export default FullImage;
