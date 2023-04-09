import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import AppWrapper from './AppWrapper'
import './index.css'
import { RecoilRoot } from "recoil";
import RecoilNexus from "recoil-nexus";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
    <RecoilNexus />
      <Suspense fallback={<div>Loading...</div>} >
        <AppWrapper />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>
)
