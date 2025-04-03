import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material';
import './FirstStep.css';

const ReviewStep = ({ FormData, preStep, handleSubmit }) => {
    const { name, email, phone, dob, address, gender, file } = FormData;

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString();
    };

    return (
        <div className='card-container'>
            <Card className="card">
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Review Your Information
                    </Typography>

                    <Box className="review-item">
                        <Typography variant="subtitle1">Name:</Typography>
                        <Typography variant="body1">{name}</Typography>
                    </Box>

                    <Box className="review-item">
                        <Typography variant="subtitle1">Email:</Typography>
                        <Typography variant="body1">{email}</Typography>
                    </Box>

                    <Box className="review-item">
                        <Typography variant="subtitle1">Phone:</Typography>
                        <Typography variant="body1">{phone}</Typography>
                    </Box>

                    <Box className="review-item">
                        <Typography variant="subtitle1">Date of Birth:</Typography>
                        <Typography variant="body1">{formatDate(dob)}</Typography>
                    </Box>

                    <Box className="review-item">
                        <Typography variant="subtitle1">Address:</Typography>
                        <Typography variant="body1">{address}</Typography>
                    </Box>

                    <Box className="review-item">
                        <Typography variant="subtitle1">Gender:</Typography>
                        <Typography variant="body1">
                            {gender === 'male' ? 'Male' : gender === 'female' ? 'Female' : ''}
                        </Typography>
                    </Box>

                    <Box className="review-item">
                        <Typography variant="subtitle1">File:</Typography>
                        <Typography variant="body1">
                            {file ? file.name : 'No file uploaded'}
                        </Typography>
                    </Box>
                </CardContent>

                <CardActions className="card-actions">
                    <Button
                        variant="outlined"
                        onClick={preStep}
                        size="small"
                        color="primary"
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        onClick={handleSubmit}
                        size="small"
                        color="primary"
                    >
                        Submit
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default ReviewStep;