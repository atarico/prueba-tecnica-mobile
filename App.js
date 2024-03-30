import React from 'react';
import { CartProvider } from './app/context/CartContext';
import Navigation from './app/routes/Navigation';

export default function App() {
  return (
    <CartProvider>
      <Navigation />
    </CartProvider>
  );
}

// primario = #4cc671
// secundario = #0594a4
// terciario = #173b48
// texto = #f5f5f5