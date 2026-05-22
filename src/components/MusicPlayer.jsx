import React, { useState, useRef, useEffect } from 'react';

export default function MusicPlayer({ songs }) {
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const audioRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (audioRef.current && playing) {
      audioRef.current.play().catch(() => {});
    }
  }, [current, playing]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    } else {
      audioRef.current.play().catch(() => {});
      intervalRef.current = setInterval(() => {
        if (audioRef.current) {
          const p = audioRef.current.duration
            ? (audioRef.current.currentTime / audioRef.current.duration) * 100
            : 0;
          setProgress(p);
        }
      }, 500);
    }
    setPlaying(!playing);
  };

  const changeSong = (idx) => {
    setCurrent(idx);
    setPlaying(false);
    setProgress(0);
    clearInterval(intervalRef.current);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const seek = (e) => {
    if (!audioRef.current || !audioRef.current.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    audioRef.current.currentTime = ratio * audioRef.current.duration;
    setProgress(ratio * 100);
  };

  const song = songs[current];

  return (
    <section
      ref={sectionRef}
      style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
        background: 'linear-gradient(135deg, #2d1a22 0%, #4a1428 50%, #2d1a22 100%)',
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
        color: 'rgba(255,255,255,0.4)',
        marginBottom: '0.75rem',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.7s ease',
      }}>
        Senin İçin Hazırladım
      </p>

      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontWeight: 300,
        fontSize: 'clamp(2rem, 5vw, 3.5rem)',
        color: 'white',
        marginBottom: '3rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(20px)',
        transition: 'all 0.7s ease 0.1s',
      }}>
        Müzik Listem
      </h2>

      {/* player card */}
      <div style={{
        width: '100%',
        maxWidth: 480,
        background: 'rgba(255,255,255,0.06)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 24,
        padding: '2.5rem 2rem',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(30px)',
        transition: 'all 0.8s ease 0.2s',
      }}>
        {/* album art placeholder */}
        <div style={{
          width: 160,
          height: 160,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--rose-400), var(--gold))',
          margin: '0 auto 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 56,
          animation: playing ? 'spin 8s linear infinite' : 'none',
          boxShadow: '0 8px 40px rgba(251,113,133,0.3)',
        }}>
          {song.emoji}
        </div>

        {/* song info */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontSize: '1.6rem',
            color: 'white',
            marginBottom: '0.25rem',
          }}>
            {song.title}
          </h3>
          <p style={{
            fontSize: '0.9rem',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 300,
          }}>
            {song.artist}
          </p>
        </div>

        {/* progress bar */}
        <div
          onClick={seek}
          style={{
            height: 4,
            background: 'rgba(255,255,255,0.15)',
            borderRadius: 2,
            marginBottom: '2rem',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, var(--rose-400), var(--gold))',
            borderRadius: 2,
            transition: 'width 0.5s linear',
            position: 'relative',
          }}>
            <div style={{
              position: 'absolute',
              right: -6,
              top: -4,
              width: 12,
              height: 12,
              borderRadius: '50%',
              background: 'white',
            }} />
          </div>
        </div>

        {/* controls */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          <button
            onClick={() => changeSong((current - 1 + songs.length) % songs.length)}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            ⏮
          </button>

          <button
            onClick={togglePlay}
            style={{
              width: 64,
              height: 64,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--rose-600), var(--rose-400))',
              border: 'none',
              color: 'white',
              fontSize: '1.6rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              animation: playing ? 'pulse-ring 2s ease infinite' : 'none',
              transition: 'transform 0.1s',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            {playing ? '⏸' : '▶'}
          </button>

          <button
            onClick={() => changeSong((current + 1) % songs.length)}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.5rem',
              cursor: 'pointer',
              padding: '0.5rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'white'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}
          >
            ⏭
          </button>
        </div>

        {/* volume */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>🔈</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={e => setVolume(parseFloat(e.target.value))}
            style={{
              flex: 1,
              accentColor: 'var(--rose-400)',
              cursor: 'pointer',
            }}
          />
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>🔊</span>
        </div>
      </div>

      {/* song list */}
      <div style={{
        width: '100%',
        maxWidth: 480,
        marginTop: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        opacity: visible ? 1 : 0,
        transition: 'opacity 0.8s ease 0.4s',
      }}>
        {songs.map((s, i) => (
          <button
            key={i}
            onClick={() => changeSong(i)}
            style={{
              background: i === current
                ? 'rgba(251,113,133,0.15)'
                : 'rgba(255,255,255,0.04)',
              border: `1px solid ${i === current ? 'rgba(251,113,133,0.3)' : 'rgba(255,255,255,0.07)'}`,
              borderRadius: 12,
              padding: '0.75rem 1rem',
              color: i === current ? 'white' : 'rgba(255,255,255,0.55)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textAlign: 'left',
              transition: 'all 0.2s',
              fontFamily: "'Jost', sans-serif",
            }}
          >
            <span style={{ fontSize: '1.2rem' }}>{s.emoji}</span>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 400, marginBottom: 2 }}>{s.title}</div>
              <div style={{ fontSize: '0.78rem', opacity: 0.6, fontWeight: 300 }}>{s.artist}</div>
            </div>
            {i === current && playing && (
              <span style={{ marginLeft: 'auto', color: 'var(--rose-400)', fontSize: '0.8rem' }}>♪♪</span>
            )}
          </button>
        ))}
      </div>

      <audio ref={audioRef} src={song.src} onEnded={() => {
        changeSong((current + 1) % songs.length);
      }} />
    </section>
  );
}
