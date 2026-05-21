# 💕 Doğum Günü Websitesi

Kız arkadaşın için hazırlanmış romantik, kişiselleştirilebilir bir doğum günü websitesi.

## 🚀 Kurulum (VS Code)

### 1. Node.js Yüklü mü?
Terminal'i aç ve kontrol et:
```
node -v
npm -v
```
Yüklü değilse → https://nodejs.org adresinden indir (LTS versiyonu)

### 2. Projeyi Başlat
```bash
# Proje klasörüne gir
cd birthday-site

# Bağımlılıkları yükle
npm install

# Siteyi başlat
npm start
```

Tarayıcı otomatik açılır → `http://localhost:3000`

---

## ✏️ Kişiselleştirme

Sadece **`src/App.js`** dosyasını aç — en üstteki bölümü düzenle:

```js
const GIRLFRIEND_NAME = "Ayşe";   // ← Kız arkadaşının adı
const YOUR_NAME       = "Emre";   // ← Kendi adın
```

### 💌 Sevgi Mektubu
`LOVE_LETTER` değişkenine kendi mektubunu yaz.

### 🕐 Anılar
`MEMORIES` dizisine kendi anılarını ekle:
```js
{
  date: "Tarih veya açıklama",
  emoji: "🎭",
  title: "Anının başlığı",
  description: "Ne oldu, nasıl hissettirdi..."
}
```

### 🎵 Müzik
Şarkı dosyalarını `public/songs/` klasörüne koy, sonra:
```js
{
  title: "Şarkı Adı",
  artist: "Sanatçı",
  emoji: "🎵",
  src: "/songs/sarki.mp3"  // ← dosya adı
}
```

---

## 🌐 Yayınlama (İsteğe Bağlı)

Siteyi internete yüklemek istersen **Vercel** ile ücretsiz:
1. https://vercel.com adresine gir
2. GitHub'a yükle → Vercel'e bağla → Deploy!

---

## 📁 Dosya Yapısı

```
birthday-site/
├── public/
│   ├── index.html
│   └── songs/          ← mp3 dosyalarını buraya koy
├── src/
│   ├── App.js          ← ✏️ BURASI DEĞİŞTİRİLECEK
│   ├── index.js
│   ├── index.css
│   └── components/
│       ├── Hero.jsx         (giriş ekranı)
│       ├── LoveLetter.jsx   (mektup)
│       ├── Timeline.jsx     (anılar)
│       ├── MusicPlayer.jsx  (müzik)
│       └── Footer.jsx       (alt bölüm)
```
