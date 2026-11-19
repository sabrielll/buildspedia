# 🛡️ BUILDSPEDIA — Panduan Maintenance & Pengelolaan Data (Admin Guide)

Dokumentasi ini dibuat khusus sebagai **buku panduan pemeliharaan (maintenance)** website **Buildspedia (Mobile Legends: Bang Bang Meta Hub)**.

Website ini menggunakan arsitektur **Centralized Data-Driven UI**, sehingga Anda **tidak perlu mengedit kode tampilan/komponen React (`.jsx`)** saat ada update patch Moonton. Seluruh perubahan Tier, Hero Baru, Harga Item, Statistik Item, Emblem, Kombo, maupun Video cukup dilakukan dari file data terpusat.

---

## 📂 1. Peta Lokasi File Penting

| Kebutuhan Update | File / Folder yang Diedit |
| :--- | :--- |
| **Update Hero, Tier, Win Rate, Build, Skill, Kombo, Counter** | [`data/heroes.js`](./data/heroes.js) |
| **Update Harga Item, Stats Item, Pasif Item (Halaman Equipment)** | [`data/items.js`](./data/items.js) |
| **Update Efek/Stats Katalog Emblem & Talent** | [`app/emblems/page.js`](./app/emblems/page.js) |
| **Menaruh Foto Hero & Ikon Skill** | `public/Assets/Hero Icons/[Nama_Hero]/` |
| **Menaruh Ikon Item Build** | `public/Assets/Build Icons/[Kategori]/` |
| **Menaruh Video Tutorial Kombo (`.mp4`)** | `public/Assets/Videos/[Nama_Hero]/` |

---

## 🚀 2. Cara Menjalankan Website di Komputer Lokal

1. **Mode Development (Live Preview saat mengedit data)**:
   ```powershell
   npm run dev
   ```
   Buka browser di **`http://localhost:3000`**. Setiap kali Anda menyimpan perubahan (`Ctrl + S`) di `data/heroes.js` atau `data/items.js`, tampilan di browser otomatis berubah seketika.

2. **Mengecek Build Produksi (Sebelum Upload/Deploy ke Hosting)**:
   ```powershell
   npm run build
   ```

---

## 🔄 3. Cara Update Nomor Patch Season

Saat Moonton merilis patch baru (misal dari `1.8.92` ke `1.9.10`):
1. Buka **[`data/heroes.js`](./data/heroes.js)** pada **Baris 7**:
   ```javascript
   export const CURRENT_PATCH = "1.9.10"; // Ubah nomor patch di sini
   ```
2. Buka **[`components/Navbar.jsx`](./components/Navbar.jsx)** dan ubah teks badge patch di pojok kanan atas navbar.

---

## 🏆 4. Cara Mengubah Tier Hero, Win Rate, Ban Rate, Role, atau Lane

Ketika meta berubah (misal hero naik ke **Tier S+** atau pindah lane ke **Jungler**):
1. Buka **[`data/heroes.js`](./data/heroes.js)**.
2. Tekan `Ctrl + F` dan cari nama hero di dalam objek `RAW_METADATA` (contoh: `Guinevere:` atau `Akai:`).
3. Ubah nilainya secara langsung:
   ```javascript
   Guinevere: {
     displayName: 'Guinevere',
     title: 'Ms. Violet',
     role: 'Fighter',        // Pilihan: 'Assassin' | 'Fighter' | 'Mage' | 'Marksman' | 'Support' | 'Tank'
     sec: 'Mage',            // Role kedua (isi null jika hanya 1 role)
     lane: 'Exp Lane',       // Pilihan: 'Jungler' | 'Exp Lane' | 'Gold Lane' | 'Mid Lane' | 'Roamer'
     tier: 'S+',             // Pilihan: 'S+' | 'S' | 'A' | 'B'
     diff: 'Medium',         // Pilihan: 'Low' | 'Medium' | 'High' | 'Very High'
     winRate: '54.1%',       // Statistik Win Rate
     pickRate: '5.2%',       // Statistik Pick Rate
     banRate: '21.0%',       // Statistik Ban Rate
     ...
   }
   ```
> **Catatan**: Begitu Anda mengubah `tier` atau `lane` di sini, posisi hero tersebut di **Halaman Utama** dan di **Halaman Tier List (`/tier-list`)** akan **otomatis berpindah sendiri**!

---

## 🆕 5. Cara Menambah Hero Baru

Jika Moonton merilis hero baru (contoh: **`Suyou`**):

### Langkah A — Siapkan File Gambar di Folder `public/Assets/Hero Icons/`
Buat folder baru bernama `Suyou` di dalam `public/Assets/Hero Icons/Suyou/`, lalu masukkan 6 file gambar `.png` berikut:
- `Suyou_rec.png` ➔ **Foto Potret Vertikal** *(Digunakan pada kartu Halaman Utama, Tier List, & Foto Header Detail)*
- `Suyou.png` ➔ **Foto Ikon Bulat/Kotak** *(Digunakan pada bulatan Counter/Synergy & Fallback)*
- `Suyou_0.png` ➔ **Ikon Skill Pasif**
- `Suyou_1.png` ➔ **Ikon Skill 1**
- `Suyou_2.png` ➔ **Ikon Skill 2**
- `Suyou_3.png` ➔ **Ikon Skill 3 (Ultimate)**

### Langkah B — Daftarkan di `data/heroes.js`
Buka **[`data/heroes.js`](./data/heroes.js)**, cari `const RAW_METADATA = {`, lalu tambahkan blok hero baru:

```javascript
  Suyou: {
    displayName: 'Suyou',
    title: 'Mask of the Immortal',
    role: 'Assassin',
    sec: 'Fighter',
    lane: 'Jungler',
    tier: 'S+',
    diff: 'High',
    winRate: '53.8%',
    pickRate: '4.1%',
    banRate: '32.0%',
    poke: ['1', 'AA', '2'],
    full: ['1', '2', '3', 'AA'],
    skillNames: ['Transient Immortal', 'Blade Surge', 'Soul Sever', 'Evil Queller'],
    summary: 'Assassin-Fighter fleksibel dengan mode Tap (Manusia) dan Hold (Immortal).',
    pros: ['Burst dan mobilitas tinggi', 'Reduksi damage tebal dalam mode Immortal'],
    cons: ['Rentan terhadap Crowd Control jika salah timing Hold skill']
  },
```
Simpan file, dan halaman **`http://localhost:3000/suyou`** langsung aktif otomatis!

---

## ⚔️ 6. Cara Mengubah Build Item, Emblem, & Spell Hero

Ada **2 cara** mengubah build item hero di **[`data/heroes.js`](./data/heroes.js)**:

### Cara A: Mengubah Build Standar untuk Satu Role Sekaligus (`ARCHETYPES`)
Di bagian atas `data/heroes.js` (sekitar baris 40–215), terdapat objek `ARCHETYPES`:
- `PhysicalAssassin` (Default untuk Assassin Physical)
- `MagicMage` (Default untuk Mage & Hybrid Magic)
- `TankRoam` (Default untuk Tank)
- `FighterExp` (Default untuk Fighter)
- `MarksmanGold` (Default untuk Marksman)
- `SupportRoam` (Default untuk Support)

Jika ada perubahan meta umum (misal semua Marksman sekarang wajib membeli *Malefic Gun* atau *Haas's Claws*), cukup ubah di `ARCHETYPES.MarksmanGold.coreBuild`.

### Cara B: Mengubah Build Khusus untuk 1 Hero Spesifik
Jika Anda ingin hero tertentu (misalnya `Guinevere` atau `Chou`) punya build item, spell, atau emblem tersendiri yang berbeda dari template role-nya, tambahkan properti `coreBuild`, `situationalBuild`, `emblem`, atau `spells` langsung di dalam blok hero tersebut pada `RAW_METADATA`:

```javascript
  Guinevere: {
    displayName: 'Guinevere',
    title: 'Ms. Violet',
    role: 'Fighter',
    sec: 'Mage',
    lane: 'Exp Lane',
    tier: 'S',
    diff: 'Medium',
    winRate: '52.6%',
    pickRate: '4.5%',
    banRate: '13.9%',
    // 1. Kustomisasi 6 Slot Core Build:
    coreBuild: [
      { slot: 1, name: "Arcane Boots", category: "Boots", filename: "Arcane_boots.png", cost: "690 Gold", stats: "+40 MS, +10 Magic PEN", passive: "Flat penetrasi magic awal.", whyBuy: "Memperkuat burst lompatan awal." },
      { slot: 2, name: "Concentrated Energy", category: "Magical", filename: "Concentrated_energy.png", cost: "2020 Gold", stats: "+70 Magic Power, +700 HP, +20% Spell Vamp", passive: "Recharge: Stack Magic Power & Spell Vamp.", whyBuy: "Item wajib sustain darah Guinevere." },
      { slot: 3, name: "Genius Wand", category: "Magical", filename: "Genius_wand.png", cost: "2000 Gold", stats: "+75 Magic Power, +5% MS", passive: "Mengurangi Magic Defense lawan.", whyBuy: "Sinergi multi-hit dengan Ultimate." },
      { slot: 4, name: "Holy Crystal", category: "Magical", filename: "Holy_crystal.png", cost: "2180 Gold", stats: "+100 Magic Power", passive: "+21-35% Magic Power.", whyBuy: "Lonjakan burst one-shot." },
      { slot: 5, name: "Divine Glaive", category: "Magical", filename: "Divine_glaive.png", cost: "1970 Gold", stats: "+65 Magic Power, +40% Magic PEN", passive: "Penetrasi anti-tank.", whyBuy: "Menembus Athena's Shield lawan." },
      { slot: 6, name: "Winter Truncheon", category: "Magical", filename: "Winter_truncheon.png", cost: "1910 Gold", stats: "+60 Magic Power, +25 Physical Def, +400 HP", passive: "Frozen: Kebal 2 detik.", whyBuy: "Aman saat menyelam ke tengah musuh." }
    ],
    // 2. Kustomisasi 3 Opsi Item Situasional:
    situationalBuild: [
      {
        name: "Immortality",
        category: "Defense",
        filename: "Immortality.png",
        cost: "2120 Gold",
        stats: "+800 HP, +20 Physical Defense",
        badge: "Late Game Revive",
        replaceItem: { name: "Winter Truncheon", category: "Magical", filename: "Winter_truncheon.png" },
        whyBuy: "Ganti saat Winter Truncheon sedang cooldown."
      },
      {
        name: "Athena's Shield",
        category: "Defense",
        filename: "Athena_shield.png",
        cost: "2150 Gold",
        stats: "+900 HP, +62 Magic Defense",
        badge: "vs Burst Mage",
        replaceItem: { name: "Winter Truncheon", category: "Magical", filename: "Winter_truncheon.png" },
        whyBuy: "Meredam burst mage lawan."
      },
      {
        name: "Blood Wings",
        category: "Magical",
        filename: "Blood_wings.png",
        cost: "3000 Gold",
        stats: "+175 Magic Power, +500 HP",
        badge: "Full Damage Shield",
        replaceItem: { name: "Winter Truncheon", category: "Magical", filename: "Winter_truncheon.png" },
        whyBuy: "Maksimalkan damage dan shield tebal."
      }
    ],
  }
```
> **Penting**: Pastikan `category` diisi salah satu dari: `'Boots'`, `'Physical'`, `'Magical'`, atau `'Defense'`, dan `filename` sesuai dengan nama file `.png` di dalam folder `public/Assets/Build Icons/[category]/`.

---

## 💰 7. Cara Mengubah Harga Item, Statistik Item, & Efek Pasif

Jika Moonton melakukan *buff/nerf* pada harga atau atribut item (misal harga *Blade of Despair* atau stat *War Axe* berubah):

1. **Untuk Halaman Katalog Equipment (`/items`)**:
   Buka **[`data/items.js`](./data/items.js)**, cari nama item (`Ctrl + F`), lalu ubah properti `cost`, `stats`, `passive`, atau `recommendedRoles`:
   ```javascript
   {
     id: 'blade_of_despair',
     name: 'Blade of Despair',
     category: 'Physical',
     filename: 'Blade_of_despair.png',
     cost: '3010 Gold',                          // <-- Ubah harga di sini
     tier: 'Tier 3 Core',
     stats: '+160 Physical Attack, +5% MS',      // <-- Ubah stats di sini
     passive: 'Despair: Menyerang musuh...',     // <-- Ubah deskripsi pasif di sini
     recommendedRoles: ['Assassin', 'Marksman', 'Fighter']
   }
   ```
2. **Untuk Tooltip Item pada Halaman Hero**:
   Perbarui juga teks `cost`, `stats`, atau `passive` item tersebut pada bagian `ARCHETYPES` di **[`data/heroes.js`](./data/heroes.js)** (baris 40–215) agar tooltip saat ikon item di-*hover* di halaman hero ikut terbarui.

---

## ⚡ 8. Cara Mengubah Nama Skill, Prioritas Leveling (Lv 1–15), Kombo, & Counter

Di dalam blok hero mana pun pada `RAW_METADATA` di **[`data/heroes.js`](./data/heroes.js)**, Anda dapat menambahkan/mengedit properti berikut:

```javascript
  Guinevere: {
    ...
    // 1. Nama 4 Skill: [Pasif, Skill 1, Skill 2, Ultimate]
    skillNames: ['Super Magic', 'Energy Wave', 'Spatial Migration', 'Violet Requiem'],

    // 2. Matriks Prioritas Level Skill (Lv 1 - 15): [Level S1, Level S2, Level ULT]
    skillLevels: [
      [1, 3, 5, 7, 9, 11],       // Level pengambilan Skill 1
      [2, 6, 10, 13, 14, 15],    // Level pengambilan Skill 2
      [4, 8, 12]                 // Level pengambilan Ultimate
    ],

    // 3. Urutan Ikon Kombo: Gunakan kode '1' (Skill 1), '2' (Skill 2), '3' (ULT), atau 'AA' (Basic Attack)
    poke: ['2', 'AA', '1', '2'],          // Urutan ikon untuk tab "Early Poke (Minim Skill)"
    full: ['2', '3', '1', 'AA', '2'],     // Urutan ikon untuk tab "Full Skill Combo"

    // 4. Peta Matchup Counter & Partner Sinergi (Masing-masing 3 Hero):
    counters: {
      weakAgainst: [
        { name: "Diggie", slug: "diggie", role: "Support", reason: "Time Journey membatalkan knockup Guinevere." },
        { name: "Wanwan", slug: "wanwan", role: "Marksman", reason: "Skill 2 Wanwan bisa lepas dari efek airborne." },
        { name: "Franco", slug: "franco", role: "Tank", reason: "Suppression menghentikan tarian Ultimate." }
      ],
      strongAgainst: [
        { name: "Layla", slug: "layla", role: "Marksman", reason: "Tanpa skill kabur dari lompatan Spatial Migration." },
        { name: "Hanabi", slug: "hanabi", role: "Marksman", reason: "Mudah di-burst sebelum sempat membalas." },
        { name: "Gord", slug: "gord", role: "Mage", reason: "Mage statis sasaran empuk kombo semak." }
      ],
      synergies: [
        { name: "Tigreal", slug: "tigreal", role: "Tank", reason: "Mengumpulkan 5 lawan untuk dilompati bersamaan." },
        { name: "Atlas", slug: "atlas", role: "Tank", reason: "Fatal Links memastikan kombo airborne mengenai banyak target." },
        { name: "Angela", slug: "angela", role: "Support", reason: "Memberi shield tebal saat Guinevere masuk ke tengah war." }
      ]
    }
  }
```

---

## 🎬 9. Cara Menambah / Mengganti Video Tutorial Kombo (`.mp4`)

Pemutar video kombo dirancang agar **100% otomatis mendeteksi file video** berdasarkan nama folder hero:

1. Buka folder **`public/Assets/Videos/`**.
2. Buat subfolder sesuai nama folder hero di `Hero Icons` (contoh: `public/Assets/Videos/Guinevere/` atau `public/Assets/Videos/Aamon/`).
3. Simpan 2 rekaman video pendek Anda (`.mp4`) dengan format nama berikut:
   - **`[Nama_Hero]_poke.mp4`** ➔ Otomatis terputar pada tab **`Early Poke (Minim Skill)`**
   - **`[Nama_Hero]_full.mp4`** ➔ Otomatis terputar pada tab **`Full Skill Combo`**

### Tips Teknis Rekaman Video:
- **Format**: `.mp4` (H.264), resolusi **720p (1280×720)**, rasio **16:9**.
- **Durasi Ideal**: **4 – 10 detik** (ukuran file 1–3 MB) agar langsung *auto-play* dan *looping* tanpa jeda *buffering*.
- Selama file `.mp4` belum dimasukkan ke folder hero tersebut, website akan otomatis menampilkan *Preview Placeholder Card* yang rapi tanpa merusak tampilan halaman.
