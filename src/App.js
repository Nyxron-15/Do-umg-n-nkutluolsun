import React from 'react';
import './index.css';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

// ══════════════════════════════════════════════
//  🌹  BURAYA KENDİ BİLGİLERİNİ EKLE  🌹
// ══════════════════════════════════════════════

const GIRLFRIEND_NAME = "Sevgilimm";   // ← Kız arkadaşının adı
const YOUR_NAME       = "Yunus";   // ← Kendi adın

const LOVE_LETTER = `Bugün, bu özel günde sana birkaç şey söylemek istedim.

Seninle tanıştığım günden beri hayatım bambaşka bir anlam kazandı. Her gülüşün, her bakışın, her sessiz anın benim için değerli.

Seninle kahve içerken geçen saatler, ellerini tuttuğumda hissettiklerim, birlikte güldüğümüz anlar... Bunların hepsi kalbimde çok özel bir yerde.

Bugün doğduğun için, bu dünyada var olduğun için ve benim hayatıma girdiğin için çok şükrediyorum.

Doğum günün kutlu olsun, Hayatımın Anlamı iyi ki varsın ve iyi ki benimlesin umarım hep birlikte oluruz ve hep mutlu olursun 💕`;

const MEMORIES = [
  {
    date: "25.07.2025",
    emoji: "✨",
    title: "Sevigli Olduğumuz Gün",
    description: "Seninle çıkmaya başladık ve o gün hayatımın en güzel günü oldu. Hayatıma girdiğinden beri beni çok mutlu ettin."
  },
  {
    date: "İlk Buluşma",
    emoji: "☕",
    title: "Seninle Cumhuriyet Parkında buluşmuştuk",
    description: "Saatler nasıl geçti anlamadık. Konuşmak hiç bitmek bilmedi."
  },
  {
    date: "İlk sarıldığımız da",
    emoji: "🌹",
    title: "İlk Sarılma",
    description: "Bana ilk sarıldığında kalbim ne kadar hızlı atıyordu tahmin edemezsin."
  },
  {
    date: "Bugün",
    emoji: "🎂",
    title: "Doğum Günün",
    description: "Ve şimdi buradayız. Seninle her geçen gün, bir öncekinden daha güzel."
  }
];

// Şarkı listesi — kendi şarkılarını ekle!
// src: yerel bir .mp3 dosyası için "/songs/sarki.mp3" gibi bir yol verebilirsin
// Veya bir URL yapıştır (CORS izinli olmalı)
const SONGS = [
  {
    title: "Sevmeden Geçer Zaman",
    artist: "Redd",
    emoji: "🌹",
    src: "/songs/redd.mp3"
  },
  {
    title: "Senden Daha Güzel",
    artist: "Duman",
    emoji: "💕",
    src: "/songs/Duman - Senden Daha Guzel.mp3"
  },
  {
    title: "Plüton",
    artist: "Şehinşah",
    emoji: "🎵",
    src: "/songs/Şehinşah - Plüton (Produced by DJ Artz).mp3"
  }
];

// ══════════════════════════════════════════════
export default function App() {
  React.useEffect(() => {
  const interval = setInterval(() => {
    const heart = document.createElement('div');
    heart.textContent = '❤️';
    heart.className = 'heart-fall';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (3 + Math.random() * 4) + 's';
    heart.style.fontSize = (12 + Math.random() * 20) + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }, 400);
  return () => clearInterval(interval);
}, []);
  const [started, setStarted] = React.useState(false);

  if (!started) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#fff1f3',
      }}>
        <div style={{ fontSize: 64, marginBottom: '1.5rem' }}>💕</div>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', color: '#2d1a22', marginBottom: '2rem' }}>
          Sana özel bir şey var...
        </p>
        <button
          onClick={() => {
            setStarted(true);
            const audio = document.getElementById('bg-music');
            if (audio) {
              audio.muted = false;
              audio.play().catch(() => {});
            }
          }}
          style={{
            background: '#e11d48',
            color: 'white',
            border: 'none',
            borderRadius: 50,
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            cursor: 'pointer',
          }}
        >
          Aç 🌹
        </button>
      </div>
    );
  }

  return (
    <>
      <audio 
        id="bg-music" 
        loop 
        autoPlay
        muted
        src="/songs/redd.mp3" 
      />
      <Hero name={GIRLFRIEND_NAME} />
      <LoveLetter content={LOVE_LETTER} />
      <Timeline memories={MEMORIES} />
      <Footer from={YOUR_NAME} />
    </>
  );
}
