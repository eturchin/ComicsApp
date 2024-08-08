import { observer } from "mobx-react-lite";
import { Button } from "@mui/material";
import { comicStore } from "../stores/comicStore.ts";
import * as React from "react";

const RandomComicButton: React.FC = observer(() => (
    <Button
        variant="contained"
        onClick={() => comicStore.fetchRandomComic()}
        sx={styles.button}
    >
        Get random comic
    </Button>
));

const styles = {
    button: {
        background: 'linear-gradient(45deg, #FF6F00 30%, #FF3D00 90%)',
        borderRadius: '50px',
        color: '#FFF',
        p: '10px 20px',
        fontSize: '1rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
        '&:hover': {
            background: 'linear-gradient(45deg, #FF8C00 30%, #FF4500 90%)',
        },
    },
};

export default RandomComicButton;