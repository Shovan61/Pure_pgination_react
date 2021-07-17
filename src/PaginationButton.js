import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import './PaginationButton.css';

const useStyles = makeStyles({
    iconBtn: {
        backgroundColor: '#caf0f8',
        height: '15px',
        width: '12px',
        '&:hover': {
            backgroundColor: '#6c757d',
        },
        '&:hover span': {
            color: 'white',
        },
    },
    active: {
        height: '15px',
        width: '12px',
        backgroundColor: '#48cae4',
        '&:hover': {
            backgroundColor: '#48cae4',
        },
        '&:hover span': {
            color: 'black',
        },
    },
});

function PaginationButton({ pageNum, setpage, page }) {
    const classes = useStyles();

    const handleClick = () => {
        setpage(pageNum);
    };

    return (
        <div onClick={handleClick}>
            <IconButton
                className={page === pageNum ? classes.active : classes.iconBtn}
                color='primary'
                aria-label='current page'>
                <span style={{ fontSize: '15px' }}>{pageNum + 1}</span>
            </IconButton>
        </div>
    );
}

export default PaginationButton;
