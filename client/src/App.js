import React from 'react';
import memories from './images/memories.png';
import {Container, AppBar, Typography,Grow,Grid } from '@material-ui/core';
import Form from './components/Form/Form.js';
import Posts from './components/Posts/Posts.js';
import useStyles from './styles';


const App =() => {
    const classes = useStyles();
    return(
        <>
        <Container maxWidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center"> MEMORIES</Typography>
                <img className={classes.image} src={memories} alt="pic is not available" height ="60"></img>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                    </Grid> 
                    <Grid item xs={12} sm={4}>
                        <Form />
                    </Grid>
                </Container>
            </Grow>
        </Container>
        </>
    );
}

export default App;