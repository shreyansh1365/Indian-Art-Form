# INDIAN PAINTINGS — AN INTERACTIVE ART MAP

**Academic Project · CLA-I (10 Marks) · Course Outcome 1 (CO1)**  
*Digital Museum & Interactive Geographic Archive of Indian Painting Traditions*

---

## 📌 Project Overview & Objective

This project is an interactive digital map and pedagogical web archive highlighting key locations significant to Indian painting history. It explores the geographic spread, regional schools, master artists, and cultural evolution of Indian painting traditions across the Indian subcontinent.

> **Pedagogical Scope:** This project strictly focuses on **Indian Paintings** (including rock cave murals, court miniatures, cloth scrolls, temple panels, folk wall paintings, and modern masterworks). Sculpture, architecture, performing arts, textiles, and general handicrafts are deliberately excluded to ensure focused alignment with Course Outcome 1 (CO1).

---

## 🚀 How to Run the Project

1. **Extract the ZIP file** (`Indian-Paintings-Interactive-Map.zip`) to any folder on your computer.
2. **Open `index.html`** in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera).
3. **No server, Node.js, npm, or database required!** The website is 100% static and self-contained with CDN-based Leaflet and Google Fonts.

---

## 🏛️ Key Features

### 1. Interactive Map of India ("Where Paintings Live")
- Built with **Leaflet** with warm-toned CartoDB voyager cartography.
- **13 Geographic Hubs** marked with custom glowing gold and terracotta animated pins:
  - **Ajanta, Maharashtra** (Buddhist Cave Murals)
  - **Mithila, Bihar** (Madhubani / Mithila Painting)
  - **Kishangarh, Rajasthan** (Rajasthani Miniature)
  - **Kangra, Himachal Pradesh** (Kangra Miniature / Pahari School)
  - **Kolkata, West Bengal** (Kalighat Painting)
  - **Santiniketan, West Bengal** (Bengal School of Art)
  - **Travancore / Kilimanoor, Kerala** (Academic / Modern Realism)
  - **Shimla / North India** (Modern Indian Art - Amrita Sher-Gil)
  - **Mumbai, Maharashtra** (Modernist Avant-Garde - Tyeb Mehta)
  - **Thanjavur, Tamil Nadu** (Tanjore Gilded Painting)
  - **Mysore, Karnataka** (Mysore Traditional Gesso Painting)
  - **Raghurajpur / Puri, Odisha** (Pattachitra Cloth Scrolls)
  - **Palghar / Warli Region, Maharashtra** (Warli Indigenous Art)
  - **Srikalahasti, Andhra Pradesh** (Kalamkari Natural Dye Painting)
- Interactive region sidebar with detailed descriptions, list of associated paintings, and quick-jump triggers.

### 2. Curated Painting Gallery (15 Masterworks)
- Dynamic 3-column editorial grid displaying all 15 assigned paintings.
- **Real-Time Live Search:** Search instantly across painting titles, artist names, traditions, regions, or keywords.
- **Dynamic Category Filters:** `ALL`, `CLASSICAL`, `MINIATURE`, `FOLK & TRADITIONAL`, `REGIONAL`, `BENGAL SCHOOL`, `MODERN`.
- **Graceful Asset Loader:** Pre-configured to display your downloaded images from `assets/` automatically, with an elegant museum SVG fallback if an asset is pending.

### 3. Comprehensive Painting Details Modal & Bidirectional Sync
- High-resolution artwork viewer with structured art historical analysis:
  - *About the Painting*
  - *Historical Context*
  - *Artistic Characteristics & Medium*
  - *Cultural Significance & Themes*
  - *Influence & Enduring Legacy*
- **Bidirectional Map Sync:** Click *"VIEW THIS LOCATION ON MAP"* to automatically close the modal, smooth-scroll to the map of India, center the coordinates, and highlight the regional marker.

### 4. Documented Artists & Community Guilds
- Interactive profile modal for documented master artists:
  - **Abanindranath Tagore** (Bengal School pioneer)
  - **Raja Ravi Varma** (Father of modern Indian academic painting)
  - **Amrita Sher-Gil** (Pioneer of modern figurative art)
  - **Tyeb Mehta** (Modernist master / Progressive Artists' Group)
  - **Nihal Chand** (Kishangarh court master)
  - **Sita Devi, Ganga Devi, Baua Devi** (Padma Shri Madhubani masters)
- Dedicated tribute to hereditary guilds (Ajanta cave guilds, Kalighat Patuas, Tanjore/Mysore sthapatis, Raghurajpur chitrakars, Warli collectives).

### 5. "Beyond the Painting" — 5 Thematic Pillars
- Deep Navy study section examining:
  - **01 REGION:** Geography, ecology, and royal court patronage.
  - **02 MATERIAL:** Wasli paper, palm leaf, 24K gold foil, natural mineral/vegetable pigments.
  - **03 TECHNIQUE:** Fresco-secco, agate stone burnishing, squirrel hair brushwork, gesso embossing.
  - **04 THEME:** Ramayana, Mahabharata, Gita Govinda, Ragamala, Nayika-bheda, and national identity.
  - **05 INFLUENCE:** Synthesis of folk forms, Persian delicacy, European realism, and modernism.

### 6. Regional Painting Traditions Grid
- 12 interactive tradition cards with one-click collection filtering.

### 7. Historical Chronological Journey
- Compact overview spanning *Ancient*, *Classical & Medieval*, *Colonial*, *Nationalist & Modern*, and *Living Folk Traditions*.

### 8. Institutional Research & References
- Scholarly citations and links to the National Museum (New Delhi), ASI, NGMA, IGNCA, UNESCO, and Google Arts & Culture.

---

## 🎨 Asset Mapping Guide (15 Paintings)

When you download your images, simply place them in the `assets/` folder with these filenames:

| # | Painting Title | Tradition | Expected File in `assets/` |
|---|---|---|---|
| 01 | **Bodhisattva Padmapani** | Ajanta Buddhist Painting | `bodhisattva-padmapani.png` |
| 02 | **Bodhisattva Vajrapani** | Ajanta Buddhist Painting | `bodhisattva-vajrapani.png` |
| 03 | **Madhubani Ramayana Painting** | Madhubani / Mithila | `madhubani-ramayana.png` |
| 04 | **Bani Thani** | Rajasthani Miniature | `bani-thani.png` |
| 05 | **Radha and Krishna** | Kangra Miniature | `radha-and-krishna.png` |
| 06 | **Kalighat Painting** | Kalighat Painting | `kalighat-painting.png` |
| 07 | **Bharat Mata** | Bengal School | `bharat-mata.png` |
| 08 | **Shakuntala** | Academic / Modern Realism | `shakuntala.png` |
| 09 | **Three Girls** | Modern Indian Art | `three-girls.png` |
| 10 | **Mahishasura** | Modern Indian Art | `mahishasura.png` |
| 11 | **Navaneeta Krishna** | Tanjore Painting | `navaneeta-krishna-tanjore.png` |
| 12 | **Devi Saraswati** | Mysore Painting | `devi-saraswati-mysore.png` |
| 13 | **Jagannath Pattachitra** | Pattachitra | `jagannath-pattachitra.png` |
| 14 | **Warli Painting** | Warli Painting | `warli-painting.png` |
| 15 | **Krishna Kalamkari** | Kalamkari | `kalamkari-krishna.png` |

*(Note: `script.js` also supports case-insensitive and alternative fallback formats)*

---

## 💻 Tech Stack
- **HTML5:** Semantic, accessible markup with ARIA roles and labels.
- **CSS3:** Custom museum design system, CSS Grid/Flexbox, responsive breakpoints, smooth transitions.
- **JavaScript (Vanilla ES6+):** Dataset state management, dynamic filtering, debounced search, modal controllers, and map synchronization.
- **Leaflet.js (v1.9.4):** Interactive mapping library with CartoDB Voyager tiles.
- **Google Fonts:** Playfair Display, Cormorant Garamond, and Inter.

---

## 📂 Project Directory Structure

```
Indian-Paintings-Interactive-Map/
│
├── index.html          # Main HTML5 semantic structure
├── style.css           # Museum theme styles & responsive design
├── script.js           # Interactive map, dataset, search, filters & modals
├── README.md           # Documentation, run guide & asset mapping
└── assets/             # Painting image assets directory
    ├── bharat-mata.png
    ├── bani-thani.png
    ├── shakuntala.png
    ├── three-girls.png
    ├── mahishasura.png
    ├── radha-and-krishna.png
    ├── navaneeta-krishna-tanjore.png
    ├── devi-saraswati-mysore.png
    ├── bodhisattva-padmapani.png
    ├── bodhisattva-vajrapani.png
    ├── madhubani-ramayana.png
    ├── jagannath-pattachitra.png
    ├── kalighat-painting.png
    ├── warli-painting.png
    └── kalamkari-krishna.png
```

---

## 📜 Academic Compliance
- **Course Outcome:** CO1 (Explore the geographic spread and influence of Indian painting traditions)
- **Component:** CLA-I Interactive Art Map (10 Marks)
- **Focus:** Exclusively Indian Paintings
