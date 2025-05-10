import React from 'react';
import { Card, CardActions, Box, TextField, Button, MenuItem, Select, InputLabel } from '@mui/material';
import './FirstStep.css';

const SecondStep = ({ FormData, handleChange, nextStep, preStep }) => {
    const { address, gender, file } = FormData;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (address && gender && file) {
            nextStep();
        } else {
            alert('Please fill in all required fields');
        }
    };

    return (
        <div className="card-container">
            <Card className="card">
                <form onSubmit={handleSubmit}>
                    <Box className="card-box">
                        <TextField
                            id="address"
                            label="Address"
                            variant="outlined"
                            value={address}
                            onChange={handleChange}
                            multiline
                            rows={3}
                            fullWidth
                            required
                        />
                    </Box>

                    <Box className="card-box">
                        <InputLabel id="gender">Gender</InputLabel>
                        <Select
                            id="gender"
                            label="Gender"
                            // variant="outlined"
                            value={gender}
                            onChange={handleChange}
                            fullWidth
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                            <MenuItem value="other">Other</MenuItem>
                        </Select>
                    </Box>

                    <Box className="card-box">
                        <TextField
                            id="file"
                            type="file"
                            name="file"
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Box>

                    <CardActions className="card-actions">
                        <Button
                            variant="outlined"
                            onClick={preStep}
                            size="small"
                            color="primary"
                        >
                            Back Page
                        </Button>
                        <Button
                            variant="contained"
                            type="submit"
                            size="small"
                            color="primary"
                        >
                            Next Page
                        </Button>
                    </CardActions>
                </form>
            </Card>
        </div>
    );
};

export default SecondStep;
