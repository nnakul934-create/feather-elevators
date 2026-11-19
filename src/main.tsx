import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = lazy(() => import('./App'));
const AdminQuote = lazy(() => import('./pages/AdminQuote'));
const GetQuotation = lazy(() => import('./pages/getquotation'));

function LoadingScreen() {
  return (
    <div className="min-h-screen bg-[#080707] flex flex-col items-center justify-center text-white">
      <div className="relative flex items-center justify-center">
        <div className="h-16 w-16 rounded-full border-2 border-brand-gold/20 border-t-brand-gold animate-spin" />
        <div className="absolute h-8 w-8 rounded-full bg-brand-gold/10 blur-sm" />
      </div>
      <p className="mt-4 text-xs uppercase tracking-[0.28em] text-brand-gold font-serif">
        Feather Elevators
      </p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/admin" element={<AdminQuote />} />
          <Route path="/quotation" element={<GetQuotation />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
