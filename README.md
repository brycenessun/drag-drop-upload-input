# drag-drop-upload-input

A library for creating drag and drop file upload inputs in React applications and handling file uploads on a Node.js
server.

## Installation

Install `drag-drop-upload-input` and its peer dependencies:

```bash
npm install drag-drop-upload-input react react-dropzone multer
```

## Usage

### Server-side (Node.js)

Use the `fileUploadRoute` function to add an express route for handling file uploads:

```javascript
const express = require('express');
const { fileUploadRoute } = require('drag-drop-upload-input');

const app = express();
fileUploadRoute(app);

app.listen(3000, () => console.log('Server running on port 3000'));
```

### Client-side (React)

Use the `DragDropUploadInput` component to add a drag-and-drop file input:

```javascript
import React from 'react';
import { DragDropUploadInput } from 'drag-drop-upload-input';

function App () {
  const handleFileUpload = file => {
// Implement file upload logic here
    console.log(file);
  };

  return (
    <div className="App">
      <DragDropUploadInput onFileUploaded={handleFileUpload}/>
    </div>
  );
}

export default App;
```
