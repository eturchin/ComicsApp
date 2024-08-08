import { Card, CardContent, CardMedia, CircularProgress, Typography } from '@mui/material';
import { observer } from "mobx-react-lite";
import { comicStore } from "../stores/comicStore.ts";
import * as React from "react";
import {Comic} from "../models/Comic.ts";

const ComicCard: React.FC<{ comic: Comic }> = observer(({ comic }) => {
    if (comicStore.loading) {
        return <CircularProgress sx={styles.loader} />;
    }

    return (
        <Card sx={styles.card}>
            <CardContent sx={styles.content}>
                <Typography variant="h5" sx={styles.title}>
                    {comic.title}
                </Typography>
            </CardContent>
            <div style={styles.imageContainer}>
                <CardMedia
                    component="img"
                    image={comic.img}
                    alt={comic.alt}
                    onError={(e) => {
                        e.currentTarget.src = 'path/to/default/image.png';
                    }}
                    sx={styles.fullImage}
                />
            </div>
        </Card>
    );
});

const styles = {
    card: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        cursor: 'pointer',
        maxHeight: '70vh',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0px 4px 8px rgba(0.2, 0.2, 0.2, 0.2)',
    },
    imageContainer: {
        height: '100%',
        overflowY: 'auto' as 'auto',
    },
    fullImage: {
        objectFit: 'contain',
        width: '100%',
        height: 'auto',
        borderTopLeftRadius: '8px',
        borderTopRightRadius: '8px',
    },
    content: {
        padding: '16px',
        position: 'relative',
        backgroundColor: '#fff',
        zIndex: 1,
        textAlign: 'center',
        borderBottom: '1px solid #ddd',
        borderRadius: '8px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontWeight: 'bold',
        color: '#FF6F00',
        margin: '0',
    },
    loader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '400px',
    },
};

export default ComicCard;
