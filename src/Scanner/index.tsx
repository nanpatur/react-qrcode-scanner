import React, { useState } from 'react'
import QrReader from "react-qr-reader";
import './style.css';

const Scanner: React.FC<any> = (props) => {
  const [scanning, setScanning] = useState<boolean>(false)
  const [result, setResult] = useState<any>('')

  const _scan = () => {
    setScanning(!scanning);
  }

  const handleScan = (result: any) => {
    setResult(result)
  }

  const handleError = (err: any) => {
    console.error(err);
  };

  const renderScannerArea = (
    <div className='qr-code-wrapper'>
      <QrReader
        delay={300}
        onScan={handleScan}
        onError={handleError}
        facingMode='environment'
        className='qr-code-image'
      />
    </div>
  )

  return (
    <div>
      <div>
        <br />
        <button onClick={_scan}>
          {scanning ? 'Stop' : 'Start'}
        </button>
      </div>
      {scanning ? renderScannerArea : null}
      <div className="results">
        {result && <p>{result}</p>}
      </div>
    </div>
  )
}

export default Scanner
