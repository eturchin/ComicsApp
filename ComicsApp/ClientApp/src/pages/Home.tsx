import {Box, CircularProgress, Typography} from "@mui/material";
import { observer } from 'mobx-react-lite';
import RandomComicButton from '../components/RandomComicButton.tsx';
import ComicCard from '../components/ComicCard.tsx';
import ComicHistory from '../components/ComicHistory.tsx';
import { comicStore } from '../stores/comicStore.ts';
import * as React from "react";

const Home: React.FC = observer(() => (
    <Box sx={styles.container}>
        <Box sx={styles.headerContainer}>
            <Typography variant="h2" sx={styles.header}>xkcd Comics</Typography>
        </Box>
        <Box sx={styles.buttonContainer}>
            <RandomComicButton />
        </Box>
        <Box sx={styles.mainContent}>
            <Box sx={styles.comicContainer}>
                {comicStore.loading ? (
                    <CircularProgress sx={styles.loader} />
                ) : comicStore.comic ? (
                    <ComicCard key={comicStore.comic.num} comic={comicStore.comic} />
                ) : (
                    <Typography variant="h6" sx={styles.placeholder}>
                        No comics available. Click the button above to get a random comic.
                    </Typography>
                )}
            </Box>
            <Box sx={styles.historyContainer}>
                <ComicHistory />
            </Box>
        </Box>
    </Box>
));

const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    headerContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    header: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#FF6F00',
    },
    buttonContainer: {
        textAlign: 'center',
        marginBottom: '20px',
    },
    mainContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    comicContainer: {
        flex: 7,
        paddingRight: '20px',
    },
    historyContainer: {
        flex: 3,
        paddingLeft: '20px',
        maxHeight: '80vh',
    },
    loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    placeholder: {
        textAlign: 'center',
        color: '#666',
        fontSize: '1.2rem',
    },
    historyHeader: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
};

export default Home;