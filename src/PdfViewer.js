import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { PdfViewerControl } from '@accusoft/pdf-viewer';

/**
 * React wrapper component for the @accusoft/pdf-viewer PdfViewerControl.
 *
 * @param {object} props
 * @param {string|Uint8Array} props.sourceDocument - PDF to show. Value may be a string which is a URL to a PDF (either a standard URL or a data URL) or a Uint8Array which contains the binary contents of a PDF.
 */
function PdfViewer (props) {
  const {
    sourceDocument
  } = props;

  const viewerContainerRef = useRef(null);

  useEffect(() => {
    // Create the PDF Viewer
    (async () => {
      await PdfViewerControl.create({
        sourceDocument: sourceDocument,
        container: viewerContainerRef.current
      });
    })();
  }, [sourceDocument, viewerContainerRef]);

  return (
    // Define a container where the PDF Viewer will go. Note that the size of this
    // container must be specified. In this example, it is defined in
    // src/styles/index.css.
    <div id="viewer-container" ref={viewerContainerRef}></div>
  );
}

PdfViewer.propTypes = {
  sourceDocument: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Uint8Array)
  ])
};

export default PdfViewer;
