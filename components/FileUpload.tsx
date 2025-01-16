// components/FileUpload.tsx
'use client';

import React, { useState } from 'react';
import { Typography } from '@mui/material';
import Image from 'next/image';
interface FileUploadProps {
  onFilesUploaded: (files: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFilesUploaded }) => {
  const [dragging, setDragging] = useState(false);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    if (event.dataTransfer.files) {
      const files = Array.from(event.dataTransfer.files);
      onFilesUploaded(files);
    }
  };

  return (
    <div
      id="dropzone"
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      style={{
        border: dragging ? '2px solid #3f51b5' : '2px dashed #ccc',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        marginBottom: '20px',
      }}
    >
      <input
        type="file"
        
        multiple
        onChange={(e) => {
          if (e.target.files) {
            const files = Array.from(e.target.files);
            onFilesUploaded(files);
          }
        }}
        style={{ display: 'none' }}
        id="file-upload"
      />
      <label htmlFor="file-upload" style={{ cursor: 'pointer' }}>
              <Image
          src="https://www.svgrepo.com/show/357902/image-upload.svg"
          alt="Upload"
          width={50} // Adjust as needed
          height={50} // Adjust as needed
          priority // For preloading
        />
        <Typography variant="body1">
          Drag and drop files here, or{' '}
          <span style={{ color: '#3f51b5', textDecoration: 'underline' }}>
            browse
          </span>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          PNG, JPG, GIF ...
        </Typography>
      </label>
    </div>
  );
};

export default FileUpload;