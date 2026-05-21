import React from 'react';
import './index.css';
import Hero from './components/Hero';
import LoveLetter from './components/LoveLetter';
import Timeline from './components/Timeline';
import MusicPlayer from './components/MusicPlayer';
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
  return (
    <>
      <Hero name={GIRLFRIEND_NAME} />
      <LoveLetter content={LOVE_LETTER} />
      <Timeline memories={MEMORIES} />
      <MusicPlayer songs={SONGS} />
      <Footer from={YOUR_NAME} />
    </>
  );
}
