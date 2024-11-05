import { Alert, IconButton, Snackbar } from '@mui/material'
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

type SnackbarProps = {
    open: boolean,
    message: string,
    state: string | undefined,
    onClose: Function
}
const StyledSnackbar = ({ open, message, state, onClose }: SnackbarProps) => {
    const handleClose = () => {
        if (onClose) {
            onClose();
        }
    }
    return (
        <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            open={open}
            onClose={handleClose}
            message={message}
            autoHideDuration={6000}

        >
            <Alert
                onClose={handleClose}
                severity={state === 'error' ? 'error' : (state === 'success' ? 'success' : 'info')}
                variant="standard"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default StyledSnackbar