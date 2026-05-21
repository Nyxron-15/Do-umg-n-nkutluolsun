import React from 'react';

export default function Footer({ from }) {
  return (
    <footer style={{
      padding: 'clamp(3rem, 6vw, 5rem) 1.5rem',
      background: 'var(--blush)',
      textAlign: 'center',
      borderTop: '1px solid var(--rose-100)',
    }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '1rem', animation: 'heartbeat 1.8s ease-in-out infinite' }}>
        💕
      </div>
      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
        color: 'var(--text-mid)',
        marginBottom: '0.75rem',
      }}>
        Seninle olmak, en büyük şansım.
      </p>
      <p style={{
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        fontSize: '0.85rem',
        letterSpacing: '0.2em',
        color: 'var(--text-soft)',
      }}>
        Sonsuz sevgiyle, {from} ❤️
      </p>
    </footer>
  );
}
