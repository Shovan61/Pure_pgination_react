import React, { useState } from 'react';
import { useFetch } from './useFetch';
import { makeStyles } from '@material-ui/core/styles';
import Follower from './Follower';
import PaginationButton from './PaginationButton';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
    root: {
        marginTop: '2rem',
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    header: {
        textAlign: 'center',
        marginBottom: '4rem',
        fontWeight: '300',
        letterSpacing: '2px',
    },
    followrsList: {
        width: '90%',
        alignSelf: 'center',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 24%)',
        gap: '5px',
        justifySelf: 'center',
        justifyItems: 'center',
        marginBottom: '3rem',
    },
    pagination: {
        alignSelf: 'center',
        marginBottom: '6rem',
        width: '30%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    arrowbtn: {
        color: '#48cae4',
    },
});

function App() {
    const classes = useStyles();
    const { isLoading, data } = useFetch();
    const [page, setpage] = useState(0);

    const handleForward = () => {
        if (page < data.length - 1) {
            setpage((curPage) => {
                return curPage + 1;
            });
        } else {
            setpage(0);
        }
    };

    const handleBack = () => {
        if (page === 0) {
            setpage(data.length - 1);
        }
        if (page < data.length && page !== 0) {
            setpage((curPage) => {
                return curPage - 1;
            });
        }
    };

    return (
        <div className={classes.root}>
            <h1 className={classes.header}>GitHub Followers</h1>
            {isLoading && <h1>Loading</h1>}
            {!isLoading && (
                <React.Fragment>
                    <div className={classes.followrsList}>
                        {data[page].map((cur, index) => (
                            <Follower key={index} {...cur} />
                        ))}
                    </div>
                    <div className={classes.pagination}>
                        <IconButton color='primary' onClick={handleBack}>
                            <ArrowBackIosIcon className={classes.arrowbtn} />
                        </IconButton>

                        {data.map((cur, i) => (
                            <PaginationButton
                                key={i}
                                setpage={setpage}
                                page={page}
                                pageNum={i}
                            />
                        ))}
                        <IconButton color='primary' onClick={handleForward}>
                            <ArrowForwardIosIcon className={classes.arrowbtn} />
                        </IconButton>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
}

export default App;
