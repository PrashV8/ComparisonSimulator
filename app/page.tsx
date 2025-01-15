
'use client'; // Mark this as a Client Component

import React, { useState } from 'react';
import { Button, Container, TextField, Typography, Paper, Grid } from '@mui/material';
import ComparisonSimulator from '../components/ComparisonSimulator';
import FileUpload from '../components/FileUpload';
export default function Home() {
  const [textItems, setTextItems] = useState<string[]>([]);
  const [imageItems, setImageItems] = useState<File[]>([]);
  const [comparisonStarted, setComparisonStarted] = useState(false);
  const [currentTextInput, setCurrentTextInput] = useState('');

  const handleTextInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentTextInput(event.target.value);
  };

  const addTextItem = () => {
    if (currentTextInput.trim()) {
      setTextItems([...textItems, currentTextInput.trim()]);
      setCurrentTextInput('');
    }
  };

  const handleFilesUploaded = (files: File[]) => {
    setImageItems([...imageItems, ...files]);
  };

  const startComparison = () => {
    setComparisonStarted(true);
  };

  const refreshPage = () => {
    window.location.reload(); // Refresh the page to start over
  };

  const totalItems = textItems.length + imageItems.length;

  return (
    <Container>
    <Typography variant="h2" align="center" gutterBottom className="animated-title">
      Comparison Simulator
    </Typography>
      {!comparisonStarted ? (
        <div>
          <Typography variant="h5" gutterBottom>
            Add Text Items
          </Typography>
          <TextField
            fullWidth
            label="Enter a text item"
            variant="outlined"
            value={currentTextInput}
            onChange={handleTextInput}
            style={{ marginBottom: '10px' }}
          />
          
          <Button variant="contained" color="primary" onClick={addTextItem} style={{ marginBottom: '20px' }}>
            Add Text Item
          </Button>
          <Typography variant="h5" gutterBottom>
            Add Images
          </Typography>
          <FileUpload onFilesUploaded={handleFilesUploaded} />

          <Paper elevation={3} sx={{ p: 3, mt: 3, backgroundColor: '#f5f5f5' }}>
              <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
                Created/Uploaded Items: {totalItems}
              </Typography>
              <Grid container spacing={2}>
                {textItems.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={`text-${index}`}>
                    <Paper elevation={2} sx={{ p: 2, textAlign: 'center', backgroundColor: 'white' }}>
                      <Typography variant="body1">{item}</Typography>
                    </Paper>
                  </Grid>
                ))}
                {imageItems.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4} key={`image-${index}`}>
                    <Paper elevation={2} sx={{ p: 2, textAlign: 'center', backgroundColor: 'white' }}>
                      <img
                        src={URL.createObjectURL(item)}
                        alt={item.name}
                        style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }}
                      />
                      <Typography variant="body2" sx={{ mt: 1 }}>
                        {item.name}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Paper>

          <Button variant="contained" color="primary" onClick={startComparison} disabled={totalItems < 2}>
            Start Comparison
          </Button>
        </div>
      ) : (
        <ComparisonSimulator textItems={textItems} imageItems={imageItems} onRefresh={refreshPage} />
      )}
    </Container>
  );
}
