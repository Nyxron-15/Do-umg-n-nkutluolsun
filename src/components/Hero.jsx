import React, { useEffect, useRef } from 'react';

const PETALS = ['🌸', '🌹', '✨', '💕', '🌷'];

export default function Hero({ name }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const container = canvasRef.current;
    if (!container) return;
    const petals = [];

    const spawn = () => {
      const el = document.createElement('span');
      el.textContent = PETALS[Math.floor(Math.random() * PETALS.length)];
      el.style.cssText = `
        position: absolute;
        top: -40px;
        left: ${Math.random() * 100}%;
        font-size: ${10 + Math.random() * 18}px;
        opacity: 0;
        animation: floatPetal ${5 + Math.random() * 8}s linear forwards;
        pointer-events: none;
        z-index: 0;
      `;
      container.appendChild(el);
      petals.push(el);
      setTimeout(() => el.remove(), 13000);
    };

    const id = setInterval(spawn, 600);
    return () => { clearInterval(id); petals.forEach(p => p.remove()); };
  }, []);

  return (
    <section
      ref={canvasRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(160deg, #fff1f3 0%, #fefaf9 50%, #fdf2f4 100%)',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      {/* decorative ring */}
      <div style={{
        position: 'absolute',
        width: 420,
        height: 420,
        borderRadius: '50%',
        border: '1px solid rgba(251,113,133,0.15)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        width: 600,
        height: 600,
        borderRadius: '50%',
        border: '1px solid rgba(201,169,110,0.1)',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        pointerEvents: 'none',
      }} />

      {/* heart */}
      <div style={{
        fontSize: 56,
        marginBottom: '1.5rem',
        animation: 'heartbeat 1.8s ease-in-out infinite',
        position: 'relative',
        zIndex: 1,
      }}>
        💖
      </div>

      {/* sub-label */}
      <p style={{
        fontFamily: "'Jost', sans-serif",
        fontWeight: 300,
        fontSize: '0.8rem',
        letterSpacing: '0.35em',
        textTransform: 'uppercase',
        color: 'var(--text-soft)',
        marginBottom: '1rem',
        position: 'relative',
        zIndex: 1,
        animation: 'fadeUp 0.8s ease both',
        animationDelay: '0.1s',
      }}>
        Sevgilim, bu gün senin için
      </p>

      {/* big title */}
      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize: 'clamp(3rem, 10vw, 7rem)',
        lineHeight: 1.05,
        color: 'var(--text-dark)',
        marginBottom: '1.2rem',
        position: 'relative',
        zIndex: 1,
        animation: 'fadeUp 0.8s ease both',
        animationDelay: '0.25s',
      }}>
        İyi ki Doğdun,
        <br />
        <em style={{
          background: 'linear-gradient(90deg, var(--rose-600), var(--gold), var(--rose-400))',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          animation: 'shimmer 3s linear infinite',
          fontStyle: 'italic',
        }}>
          {name}
        </em>
      </h1>

      <p style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontStyle: 'italic',
        fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
        color: 'var(--text-mid)',
        maxWidth: 480,
        lineHeight: 1.7,
        position: 'relative',
        zIndex: 1,
        animation: 'fadeUp 0.8s ease both',
        animationDelay: '0.4s',
      }}>
        "Seninle geçirdiğim her an, hayatımın en güzel sayfaları."
      </p>

      {/* scroll cue */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        animation: 'fadeUp 1s ease both',
        animationDelay: '1.2s',
        zIndex: 1,
      }}>
        <span style={{ fontSize: 12, letterSpacing: '0.2em', color: 'var(--text-soft)', textTransform: 'uppercase' }}>Keşfet</span>
        <div style={{
          width: 1,
          height: 40,
          background: 'linear-gradient(to bottom, var(--rose-400), transparent)',
        }} />
      </div>
    </section>
  );
}
