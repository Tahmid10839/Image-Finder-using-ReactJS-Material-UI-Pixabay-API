import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import './app.css'
import BreadCrumb from './components/BreadCrumb';
import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import { getImages } from './services/api';
import Image from './components/Image';
import SnackBar from './components/Snackbar';
import FullImage from './components/FullImage';

const useStyle = makeStyles(theme => ({
    text: {
        marginTop: '100px',
        textAlign: 'center',
        color: 'lightgray'
    }
}))

const App = () => {

    const classes = useStyle()
    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [count, setCount] = useState(10)
    const [open, setOpen] = useState(false)
    const [openImage, setOpenImage] = useState(false)
    const [imageUrl, setImageurl] = useState('')

    useEffect(() => {
        if (count < 3 || count > 200) {
            setOpen(true)
            return
        }
        setOpen(false)
        if (searchTerm && count) {
            getImages(searchTerm, count).then(data => {
                setData(data.data.hits)
                // console.log(data);
            })
        }
    }, [searchTerm, count])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setOpen(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [open])

    return (
        <Box>
            <Navbar />
            <BreadCrumb searchTerm={searchTerm} setSearchTerm={setSearchTerm} count={count} setCount={setCount} />

            {openImage && <FullImage largeImageURL={imageUrl} setOpenImage={setOpenImage} />}

            {!searchTerm ? (
                <Typography variant='h5' className={classes.text}>
                    Search to see the images...
                </Typography>
            ) : (
                <Box margin={1}>

                    <Grid container spacing={1}>

                        {data.map((image, index) => (
                            <Grid xs={12} md={3} sm={6} key={index} item>
                                <Image {...image} setImageurl={setImageurl} setOpenImage={setOpenImage} />
                            </Grid>
                        ))}

                    </Grid>
                </Box>
            )}
            <SnackBar open={open} setOpen={setOpen} />
        </Box>
    )
};

export default App;
