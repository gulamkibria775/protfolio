import React from 'react'


import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import pdfFile from './sample.pdf'

export default function Pdf() {
  return (
    <>
<section className='Resume' id='resume1'>
<Document file={pdfFile}>
        <Page pageNumber={1} />
      </Document>
      </section>
    </>
  )
}





  

