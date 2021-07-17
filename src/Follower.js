import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        height: '240px',
        width: '240px',
        boxShadow: '2px 0px 10px -1px rgba(0,0,0,0.79)',
        marginBottom: '10px',
        borderRadius: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        width: '120px',
        height: '120px',
        marginTop: '1.5rem',
        marginBottom: '0.5rem',
    },
});

function Follower(props) {
    const classes = useStyles();
    const { avatar_url, login, html_url } = props;

    return (
        <Card className={classes.root}>
            <Avatar alt={login} src={avatar_url} className={classes.image} />
            <Typography
                variant='subtitle1'
                color='textSecondary'
                style={{ marginBottom: '0.5rem' }}>
                {login}
            </Typography>
            <Button
                variant='contained'
                color='primary'
                style={{ backgroundColor: '#48cae4' }}>
                Visit Profile
            </Button>
        </Card>
    );
}

export default Follower;
