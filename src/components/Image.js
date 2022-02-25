import { Box, Card, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import FullImage from './FullImage';

const useStyles = makeStyles({
    card: {
        cursor: 'pointer',
    },
    image: {
        width: '100%',
        height: 300,
        objectFit: 'cover',
    }
})

const Image = ({ largeImageURL, setImageurl, setOpenImage }) => {
    const classes = useStyles()

    const handleOpenImage = () => {
        setImageurl(largeImageURL)
        setOpenImage(true)
    }

    return (
        <>
            <Card className={classes.card} onClick={handleOpenImage}>
                <img src={largeImageURL} alt="Image" className={classes.image} />
            </Card>
        </>
    )
};

export default Image;
