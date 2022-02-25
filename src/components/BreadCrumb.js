import { Box, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    component: {
        background: '#f6f6f6',
        '& > *': {
            margin: theme.spacing(1)
        }
    }
}))

const BreadCrumb = ({ searchTerm, setSearchTerm, count, setCount }) => {
    const classes = useStyles()
    return (
        <Box className={classes.component}>
            <TextField
                label='Search Images...'
                onChange={(e) => setSearchTerm(e.target.value)}
                value={searchTerm}
            />
            <TextField
                label='Number of Images'
                type="number"
                value={count}
                onChange={(e) => setCount(e.target.value)}
            />
        </Box>
    )
};

export default BreadCrumb;
