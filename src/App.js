import React from 'react';
import PdfViewer from './PdfViewer';

function App () {
  return (
    <div className="app-container">
      <PdfViewer sourceDocument="./example.pdf" />
    </div>
  );
}

export default App;
