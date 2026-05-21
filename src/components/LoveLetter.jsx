import React, { useState, useEffect, useRef } from 'react';

export default function LoveLetter({ content }) {
  const [opened, setOpened] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
        background: 'var(--blush)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <p style={{
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        fontSize: '0.75rem',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: 'var(--text-soft)',
        marginBottom: '0.75rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'all 0.7s ease',
      }}>
        Sana Bir Mektup
      </p>

      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        color: 'var(--text-dark)',
        marginBottom: '3rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'all 0.7s ease 0.1s',
      }}>
        Kalbimden Sana
      </h2>

      {/* envelope */}
      <div
        onClick={() => setOpened(true)}
        style={{
          cursor: opened ? 'default' : 'pointer',
          width: '100%',
          maxWidth: 640,
          position: 'relative',
          opacity: visible ? 1 : 0,
          transform: visible ? 'none' : 'translateY(30px)',
          transition: 'all 0.8s ease 0.2s',
        }}
      >
        {/* envelope card */}
        <div style={{
          background: 'white',
          border: '1px solid var(--rose-200)',
          borderRadius: 16,
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          boxShadow: '0 8px 48px rgba(225,29,72,0.07)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* top decorative line */}
          <div style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: 3,
            background: 'linear-gradient(90deg, var(--rose-200), var(--gold), var(--rose-200))',
            borderRadius: '16px 16px 0 0',
          }} />

          {!opened && (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ fontSize: 64, marginBottom: '1rem' }}>💌</div>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '1.3rem',
                color: 'var(--text-mid)',
              }}>
                Mektubu açmak için tıkla...
              </p>
            </div>
          )}

          {opened && (
            <div style={{ animation: 'fadeUp 0.6s ease both' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--text-soft)',
                marginBottom: '1.5rem',
              }}>
                Canım sevgilim,
              </p>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                lineHeight: 2,
                color: 'var(--text-dark)',
                whiteSpace: 'pre-line',
              }}>
                {content}
              </div>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--text-soft)',
                marginTop: '2rem',
                textAlign: 'right',
              }}>
                — Seninle her zaman ❤️
              </p>
            </div>
          )}
        </div>

        {!opened && (
          <p style={{
            textAlign: 'center',
            fontSize: 12,
            letterSpacing: '0.15em',
            color: 'var(--text-soft)',
            marginTop: '1rem',
            textTransform: 'uppercase',
          }}>
            Tıkla & Aç
          </p>
        )}
      </div>
    </section>
  );
}
