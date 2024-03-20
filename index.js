// Node.js express middleware for handling multipart/form-data.
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Express route to handle file uploads
function fileUploadRoute(app) {
  app.post('/upload', upload.single('file'), function (req, res) {
    console.log('File uploaded:', req.file);
    res.status(200).json({ message: 'File uploaded successfully' });
  });
}

// React component for drag and drop file upload
import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

const DragDropUploadInput = ({ onFileUploaded }) => {
  const onDrop = useCallback(acceptedFiles => {
    // Handle file upload
    const file = acceptedFiles[0];
    console.log('File selected for upload:', file.name);
    onFileUploaded(file);
  }, [onFileUploaded]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

export { fileUploadRoute, DragDropUploadInput };
