'use client'
import StyledSnackbar from '@/components/StyledSnackbar'
import { Box, Button, TextareaAutosize, TextField } from '@mui/material'
import React, { useState } from 'react'

const page = () => {
    const [formData, setFormData] = useState({
        author: '',
        content: '',
        summary: '',
        title: ''
    })

    const [formError, setFormError] = useState({
        author: false,
        content: false,
        summary: false,
        title: false
    })
    const [snackbarInfo, setSnackbarInfo] = useState<{ open: boolean, state: string | undefined, message: string }>({
        open: false,
        state: undefined,
        message: ''
    });

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        // Create a new error object based on formData
        const newFormError = { ...formError };

        // Check each field in formData
        Object.entries(formData).forEach(([key, value]) => {
            if (!value) { // If value is empty
                newFormError[key as keyof typeof formError] = true; // Update error state
            } else {
                newFormError[key as keyof typeof formError] = false; // Clear error if there's a value
            }
        });

        setFormError(newFormError); // Update the state with the new error object

        // Additional logic for form submission can go here
        // For example: If there are no errors, proceed to submit the form
        debugger
        if (!Object.values(newFormError).includes(true)) {
            try {
                const resp = await fetch('http://localhost:5000/api/publish', {
                    body: JSON.stringify(formData),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'POST',

                })
            } catch (err) {

            } finally {
                setSnackbarInfo({
                    open: true,
                    message: 'dummy message content',
                    state: 'success'
                })
            }
        } else {
            console.log("Form has errors:", newFormError);
        }
    };

    return (
        <Box sx={{
            width: "100%",
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box
                component={'form'}
                sx={{
                    display: 'flex',
                    rowGap: '16px',
                    width: { sm: '100%', md: '480px' },
                    // boxShadow: '#fff 0px 7px 29px 0px',
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    height: '100%',
                    overflowY: 'auto',
                    flexDirection: 'column',
                    p: '16px'
                }}>
                <TextField
                    label="Author"
                    type="text"
                    variant="outlined"
                    fullWidth
                    error={formError.author}
                    value={formData.author}
                    onChange={(e) => setFormData(prev => {
                        return {
                            ...prev,
                            author: e.target.value
                        }
                    })}
                    required
                />
                <TextField
                    label="Title"
                    type="text"
                    variant="outlined"
                    fullWidth
                    error={formError.title}
                    value={formData.title}
                    onChange={(e) => setFormData(prev => {
                        return {
                            ...prev,
                            title: e.target.value
                        }
                    })}
                    required
                />

                <TextField
                    label="Summary"
                    type="text"
                    variant="outlined"
                    fullWidth
                    error={formError.summary}
                    value={formData.summary}
                    onChange={(e) => setFormData(prev => {
                        return {
                            ...prev,
                            summary: e.target.value
                        }
                    })}
                    required
                />
                <TextareaAutosize
                    minRows={2}
                    maxRows={20}
                    required
                    value={formData.content}
                    onChange={(e) => setFormData(prev => {
                        return {
                            ...prev,
                            content: e.target.value
                        }
                    })}
                    placeholder='Content'
                    style={{
                        backgroundColor: 'transparent',
                        color: 'black',
                        padding: '4px',
                        minHeight: '60px'
                    }}
                />
                <Button type="submit" onClick={handleSubmit} variant="contained" color="primary" fullWidth>
                    Submit</Button>

            </Box>
            <StyledSnackbar open={snackbarInfo.open} message={snackbarInfo.message} state={snackbarInfo.state} onClose={() => {
                setSnackbarInfo({
                    open: false,
                    message: '',
                    state: undefined
                })
            }} />
        </Box>
    )
}

export default page