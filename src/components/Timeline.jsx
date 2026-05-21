import React, { useState, useEffect, useRef } from 'react';

function TimelineItem({ item, index, side }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const isLeft = side === 'left';

  return (
    <div
      ref={ref}
      style={{
        display: 'flex',
        justifyContent: isLeft ? 'flex-end' : 'flex-start',
        paddingLeft: isLeft ? 0 : 'calc(50% + 24px)',
        paddingRight: isLeft ? 'calc(50% + 24px)' : 0,
        marginBottom: '3rem',
        opacity: visible ? 1 : 0,
        transform: visible
          ? 'none'
          : `translateX(${isLeft ? '-40px' : '40px'})`,
        transition: `all 0.7s ease ${index * 0.1}s`,
      }}
    >
      <div style={{
        background: 'white',
        border: '1px solid var(--rose-200)',
        borderRadius: 14,
        padding: '1.5rem',
        maxWidth: 340,
        width: '100%',
        boxShadow: '0 4px 24px rgba(225,29,72,0.06)',
        position: 'relative',
      }}>
        {/* dot connector */}
        <div style={{
          position: 'absolute',
          top: '50%',
          [isLeft ? 'right' : 'left']: -33,
          transform: 'translateY(-50%)',
          width: 14,
          height: 14,
          borderRadius: '50%',
          background: 'var(--rose-400)',
          border: '3px solid white',
          boxShadow: '0 0 0 3px var(--rose-200)',
          zIndex: 2,
        }} />

        <span style={{
          display: 'inline-block',
          background: 'var(--rose-50)',
          color: 'var(--rose-600)',
          fontSize: '0.72rem',
          fontWeight: 500,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          padding: '4px 10px',
          borderRadius: 20,
          marginBottom: '0.75rem',
        }}>
          {item.date}
        </span>

        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.emoji}</div>

        <h3 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 400,
          fontSize: '1.4rem',
          color: 'var(--text-dark)',
          marginBottom: '0.5rem',
          lineHeight: 1.3,
        }}>
          {item.title}
        </h3>
        <p style={{
          fontSize: '0.92rem',
          color: 'var(--text-mid)',
          lineHeight: 1.7,
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
        }}>
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function Timeline({ memories }) {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setHeaderVisible(true); },
      { threshold: 0.3 }
    );
    if (headerRef.current) obs.observe(headerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{
      padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
      background: 'var(--ivory)',
    }}>
      <div
        ref={headerRef}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <p style={{
          fontFamily: "'Jost', sans-serif",
          fontWeight: 300,
          fontSize: '0.75rem',
          letterSpacing: '0.35em',
          textTransform: 'uppercase',
          color: 'var(--text-soft)',
          marginBottom: '0.75rem',
          opacity: headerVisible ? 1 : 0,
          transition: 'all 0.7s ease',
        }}>
          Birlikte Yazdığımız
        </p>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontWeight: 300,
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: 'var(--text-dark)',
          opacity: headerVisible ? 1 : 0,
          transform: headerVisible ? 'none' : 'translateY(20px)',
          transition: 'all 0.7s ease 0.1s',
        }}>
          Anılarımız
        </h2>
      </div>

      {/* timeline container */}
      <div style={{
        maxWidth: 860,
        margin: '0 auto',
        position: 'relative',
        padding: '0 1rem',
      }}>
        {/* center line */}
        <div style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: 2,
          background: 'linear-gradient(to bottom, var(--rose-200), var(--gold-lt), var(--rose-200))',
          transform: 'translateX(-50%)',
          zIndex: 1,
        }} />

        {memories.map((item, i) => (
          <TimelineItem
            key={i}
            item={item}
            index={i}
            side={i % 2 === 0 ? 'left' : 'right'}
          />
        ))}
      </div>
    </section>
  );
}
