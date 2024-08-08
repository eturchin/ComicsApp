import { Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import * as React from "react";

const NotFound: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                textAlign: 'center',
                backgroundColor: '#f5f5f5',
                padding: '20px',
            }}
        >
            <Typography variant="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: '#FF6F00' }}>
                404
            </Typography>
            <Typography variant="h4" sx={{ mb: 2, color: '#333' }}>
                Not Found
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#666' }}>
                Sorry, the page you are looking for does not exist.
            </Typography>
            <Button
                variant="contained"
                onClick={handleClick}
                sx={{
                    background: 'linear-gradient(45deg, #FF6F00 30%, #FF3D00 90%)',
                    borderRadius: '50px',
                    color: '#FFF',
                    p: '10px 20px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                }}
            >
                Go to Home
            </Button>
        </Box>
    );
};

export default NotFound;