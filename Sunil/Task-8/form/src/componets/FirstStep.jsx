import React from 'react';
import { Card, CardActions, Box, TextField, Button } from '@mui/material';
import './FirstStep.css';
import SecondStep from './SecondStep';

const FirstStep = ({ FormData, handleChange, nextStep }) => {
      const { name, email, phone, dob } = FormData;

      const handleSubmit = (e) => {
            e.preventDefault();
            if (name && email && phone && dob) {
                  nextStep();
            } else {
                  alert('Please fill in all required fields');
            }

      };

      return (
            <>
                  <div className='card-container'>
                        <Card className="card">
                              <form onSubmit={handleSubmit}>
                                    <Box className="card-box">
                                          <TextField id="name"
                                                type="text"
                                                label="Name"
                                                variant="outlined"
                                                value={name}
                                                onChange={handleChange}
                                                fullWidth
                                                required
                                          />
                                    </Box>
                                    <Box className="card-box">
                                          <TextField id="email"
                                                type="email"
                                                label="Email"
                                                variant="outlined"
                                                value={email}
                                                onChange={handleChange}
                                                fullWidth
                                                required
                                          />
                                    </Box>
                                    <Box className="card-box">
                                          <TextField id="phone"
                                                type="number"
                                                label="Phone"
                                                variant="outlined"
                                                value={phone}
                                                onChange={handleChange}
                                                fullWidth
                                                required
                                          />
                                    </Box>
                                    <Box className="card-box">
                                          <TextField
                                                id="dob"
                                                type="date"
                                                variant="outlined"
                                                value={dob}
                                                onChange={handleChange}
                                                fullWidth
                                                InputLabelProps={{
                                                      shrink: true,
                                                }}
                                          />
                                    </Box>

                                    <CardActions className="card-actions">
                                          <Button variant="outlined"
                                                size="small"
                                                color="primary"
                                                disabled={true}
                                          >
                                                Back Page
                                          </Button>
                                          <Button variant="contained"
                                                type='submit'
                                                size="small"
                                                color="primary">
                                                Next Page
                                          </Button>

                                    </CardActions>
                              </form>
                        </Card>
                  </div>
            </>
      )
}

export default FirstStep;
