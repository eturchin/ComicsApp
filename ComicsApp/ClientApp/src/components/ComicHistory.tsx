import { Divider, IconButton, List, ListItem, Paper, Typography } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { comicStore } from '../stores/comicStore.ts';
import CloseIcon from '@mui/icons-material/Close';
import * as React from "react";

const ComicHistory: React.FC = observer(() => (
    <Paper elevation={3} sx={styles.container}>
        <Typography variant="h6" sx={styles.title} gutterBottom>
            History
        </Typography>
        <Divider />
        {comicStore.history.length === 0 ? (
            <Typography variant="body1" sx={styles.emptyMessage}>
                History is empty. Add some comics to view here.
            </Typography>
        ) : (
            <List>
                {comicStore.history.map((comic) => (
                    <ListItem key={comic.num}  sx={{
                        ...styles.listItem,
                        ...(comicStore.comic?.num === comic.num && styles.selectedItem)
                    }}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                comicStore.fetchComicByNum(comic.num);
                            }}
                            style={styles.titleLink}
                        >
                            {comic.title}
                        </a>
                        <IconButton
                            edge="end"
                            color="inherit"
                            onClick={() => comicStore.removeFromHistory(comic.num)}
                        >
                            <CloseIcon />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        )}
    </Paper>
));

const styles = {
    container: {
        padding: '20px',
        maxHeight: '70vh',
        overflowY: 'auto',
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px', 
        marginBottom: '5px',
    },
    selectedItem: {
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontWeight: 'bold',
        color: '#FF6F00',
        margin: '0',
    },
    titleLink: {
        flex: 1,
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        textDecoration: 'none',
        color: '#FF6F00',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    emptyMessage: {
        textAlign: 'center',
        color: '#666',
        fontSize: '1.2rem',
        marginTop: '20px',
    },
};

export default ComicHistory;
