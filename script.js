/**
 * INDIAN PAINTINGS — AN INTERACTIVE ART MAP
 * Core Application Script
 * Academic Project · CLA-I (10 Marks) · Course Outcome 1 (CO1)
 */

(function () {
    'use strict';

    /* ==========================================================================
       DATA STRUCTURES: PAINTINGS, LOCATIONS, ARTISTS, TRADITIONS
       ========================================================================== */

    const locations = [
        {
            id: "ajanta",
            name: "Ajanta, Maharashtra",
            shortName: "Ajanta",
            coordinates: [20.5519, 75.7033],
            tradition: "Ajanta Buddhist Painting",
            region: "Western India / Maharashtra",
            description: "A UNESCO World Heritage site consisting of 30 rock-cut Buddhist cave monuments. The ancient murals represent the golden age of classical Indian painting with rhythmic grace and spiritual depth.",
            period: "2nd century BCE – 6th century CE (Classical 5th–6th C.)",
            artists: ["Ancient Buddhist Monastic Guilds", "Anonymous Ajanta Masters"],
            paintingIds: ["padmapani", "vajrapani"]
        },
        {
            id: "mithila",
            name: "Mithila, Bihar",
            shortName: "Mithila (Madhubani)",
            coordinates: [26.3557, 86.0744],
            tradition: "Madhubani / Mithila Painting",
            region: "Mithila Region, Northern Bihar",
            description: "Practiced traditionally by women on mud-washed domestic walls and floors, characterized by striking geometric patterns, double-line outlines, and vibrant natural pigments drawn from plants and minerals.",
            period: "Traditional ancient origins · 20th C. paper transition",
            artists: ["Sita Devi", "Ganga Devi", "Baua Devi", "Traditional Mithila Collectives"],
            paintingIds: ["madhubani"]
        },
        {
            id: "kishangarh",
            name: "Kishangarh, Rajasthan",
            shortName: "Kishangarh",
            coordinates: [26.5744, 74.8633],
            tradition: "Rajasthani Miniature / Kishangarh School",
            region: "Rajasthan",
            description: "Renowned for its distinctive, lyrical elegance, arched eyebrows, lotus-shaped elongated eyes, and spiritual-romantic court miniature compositions patronized by Sawant Singh.",
            period: "18th century (c. 1750–1760)",
            artists: ["Nihal Chand", "Kishangarh Court Workshop"],
            paintingIds: ["bani-thani"]
        },
        {
            id: "kangra",
            name: "Kangra, Himachal Pradesh",
            shortName: "Kangra Valley",
            coordinates: [32.0998, 76.2691],
            tradition: "Kangra Miniature Painting (Pahari School)",
            region: "Himachal Pradesh",
            description: "The zenith of the Pahari miniature style, celebrated for its poetic naturalism, delicate landscapes, soft feminine grace, and emotive illustrations of the Gita Govinda.",
            period: "Late 18th century (c. 1775–1820)",
            artists: ["Pandit Seu Family", "Kangra Court Workshops"],
            paintingIds: ["radha-krishna"]
        },
        {
            id: "kolkata",
            name: "Kolkata, West Bengal",
            shortName: "Kalighat (Kolkata)",
            coordinates: [22.5180, 88.3444],
            tradition: "Kalighat Painting",
            region: "West Bengal",
            description: "Emerged around the Kalighat Kali temple as a dynamic urban folk art form, known for sweeping, calligraphic brushstrokes, swift single-wash modeling, and satirical social commentary.",
            period: "19th century to early 20th century",
            artists: ["Traditional Kalighat Patuas (Scroll Painters)"],
            paintingIds: ["kalighat"]
        },
        {
            id: "santiniketan",
            name: "Santiniketan, West Bengal",
            shortName: "Santiniketan",
            coordinates: [23.6789, 87.6789],
            tradition: "Bengal School of Art",
            region: "West Bengal",
            description: "The intellectual cradle of the Swadeshi artistic renaissance in India. Founded by Abanindranath Tagore and Rabindranath Tagore to counter colonial academic realism with Asian pan-aesthetic spirituality.",
            period: "Early 20th century (1900–1930s)",
            artists: ["Abanindranath Tagore", "Nandalal Bose"],
            paintingIds: ["bharat-mata"]
        },
        {
            id: "kerala",
            name: "Travancore / Kilimanoor, Kerala",
            shortName: "Kilimanoor (Kerala)",
            coordinates: [8.7667, 76.8667],
            tradition: "Academic / Indian Modern Painting",
            region: "Kerala (South India)",
            description: "Birthplace of Raja Ravi Varma, who revolutionized Indian visual culture by fusing European academic oil painting techniques with classical Sanskrit epics, puranic imagery, and Indian royal portraiture.",
            period: "19th century (1870–1906)",
            artists: ["Raja Ravi Varma", "C. Raja Raja Varma"],
            paintingIds: ["shakuntala"]
        },
        {
            id: "north-india",
            name: "Shimla / North India",
            shortName: "Shimla (Modern Art)",
            coordinates: [31.1048, 77.1734],
            tradition: "Modern Indian Art (Indo-European Synthesis)",
            region: "North India",
            description: "Key creative base for Amrita Sher-Gil upon returning from Paris. Here she developed her mature aesthetic capturing the quiet dignity and melancholic beauty of rural Indian women with modernist post-impressionist empathy.",
            period: "Mid 20th century (1930s)",
            artists: ["Amrita Sher-Gil"],
            paintingIds: ["three-girls"]
        },
        {
            id: "mumbai-modern",
            name: "Mumbai, Maharashtra",
            shortName: "Mumbai (Modernist Hub)",
            coordinates: [18.9220, 72.8347],
            tradition: "Modern Indian Art (Post-Colonial Avant-Garde)",
            region: "Maharashtra",
            description: "The vibrant epicenter of the Progressive Artists' Group (PAG) founded in 1947, which redefined modern Indian painting through bold expressionism, existential angst, and abstract compositional structures.",
            period: "Late 20th century (1947–2000)",
            artists: ["Tyeb Mehta", "M. F. Husain", "F. N. Souza"],
            paintingIds: ["mahishasura"]
        },
        {
            id: "thanjavur",
            name: "Thanjavur, Tamil Nadu",
            shortName: "Thanjavur (Tanjore)",
            coordinates: [10.7870, 79.1378],
            tradition: "Tanjore Painting (Thanjavur Oviyam)",
            region: "Tamil Nadu",
            description: "Distinguished by lavish gold leaf embossing, vibrant natural colors, semi-precious Jaipur stone inlay, and gesso relief work on sacred wooden panels, patronized by Maratha and Nayaka rulers.",
            period: "16th–19th century",
            artists: ["Hereditary Raju and Naidu Guilds"],
            paintingIds: ["navaneeta-krishna"]
        },
        {
            id: "mysore",
            name: "Mysore, Karnataka",
            shortName: "Mysore",
            coordinates: [12.2958, 76.6394],
            tradition: "Mysore Traditional Painting",
            region: "Karnataka",
            description: "Known for delicate lyrical brushwork, subtle muted tones, and intricate gesso paste embossing made of white lead and gamboge, covered with pure unrefined gold foil.",
            period: "17th–19th century (Wodeyar patronage)",
            artists: ["Hereditary Mysore Chitrakars"],
            paintingIds: ["devi-saraswati"]
        },
        {
            id: "raghurajpur",
            name: "Raghurajpur / Puri, Odisha",
            shortName: "Raghurajpur (Odisha)",
            coordinates: [19.8450, 85.8300],
            tradition: "Pattachitra",
            region: "Odisha",
            description: "An ancient heritage crafts village where chitrakars paint sacred scrolls on tamarind-treated cotton canvas using fine natural stone pigments and conch-shell whites, centered around Lord Jagannath worship.",
            period: "12th century to contemporary living heritage",
            artists: ["Mahapatra Heritage Chitrakars", "Odisha Pattachitra Collectives"],
            paintingIds: ["pattachitra"]
        },
        {
            id: "warli-region",
            name: "Palghar / Dahanu, Maharashtra",
            shortName: "Warli Region",
            coordinates: [19.6967, 72.7699],
            tradition: "Warli Painting",
            region: "Maharashtra (Western Ghats)",
            description: "An indigenous ritualistic tribal painting tradition using basic geometric forms—circles, triangles, and squares—to portray the harmonious relationship between nature, community, the sacred Mother Earth (Palaghata), and daily farming cycles.",
            period: "Ancient tribal roots · 20th C. global recognition",
            artists: ["Jivya Soma Mashe", "Warli Tribal Collective"],
            paintingIds: ["warli"]
        },
        {
            id: "kalamkari-region",
            name: "Srikalahasti, Andhra Pradesh",
            shortName: "Srikalahasti (Kalamkari)",
            coordinates: [13.7498, 79.6984],
            tradition: "Kalamkari (Srikalahasti Style)",
            region: "Andhra Pradesh",
            description: "The organic art of drawing narratives with a sharpened bamboo reed pen ('kalam') and 100% natural vegetable and mineral dyes on milk-treated cotton cloth, focusing on epic Ramayana and Mahabharata episodes.",
            period: "10th century to contemporary living heritage",
            artists: ["Traditional Kalamkari Craft Masters"],
            paintingIds: ["kalamkari"]
        }
    ];

    const paintings = [
        {
            id: "padmapani",
            num: "01",
            title: "Bodhisattva Padmapani",
            artist: "Unknown / Ajanta workshop",
            isDocumentedArtist: false,
            artistId: null,
            region: "Ajanta, Maharashtra",
            locationId: "ajanta",
            tradition: "Ajanta Buddhist Painting",
            period: "5th–6th century CE",
            category: "Classical",
            medium: "Fresco-secco (Mineral pigments on rock plaster)",
            image: "assets/bodhisattva-padmapani.png",
            altFilenames: ["assets/bodhisattva-padmapani.png", "assets/bodhisattva-padmapani.jpeg", "assets/bodhisattva-padmapani.jpg", "assets/padmapani.png", "assets/padmapani.jpg"],
            description: "One of the most celebrated paintings from the Ajanta caves, depicting the Bodhisattva Padmapani with refined expression, ornamentation and graceful composition.",
            context: "Painted during the Vakataka dynasty inside Cave 1 at Ajanta, a thriving monastic complex situated on a horseshoe-shaped volcanic cliff overlooking the Waghora River.",
            characteristics: "Renowned for the gentle tribhanga (three-bend) pose, the lotus flower held in the right hand, exquisite pearl necklaces, and downcast eyes radiating infinite compassion and calm detachment.",
            significance: "Stands as the pinnacle of classical Asian figurative art, defining canonical benchmarks for anatomical grace, spiritual serenity, and subtle tonal modeling in Indian art history.",
            influence: "Directly inspired Buddhist art across Sri Lanka (Sigiriya), Central Asia (Dunhuang), Southeast Asia, and the 20th-century Bengal Renaissance revivalists."
        },
        {
            id: "vajrapani",
            num: "02",
            title: "Bodhisattva Vajrapani",
            artist: "Unknown / Ajanta workshop",
            isDocumentedArtist: false,
            artistId: null,
            region: "Ajanta, Maharashtra",
            locationId: "ajanta",
            tradition: "Ajanta Buddhist Painting",
            period: "5th–6th century CE",
            category: "Classical",
            medium: "Fresco-secco on rock plaster",
            image: "assets/bodhisattva-vajrapani.png",
            altFilenames: ["assets/bodhisattva-vajrapani.png", "assets/bodhisattva-vajrapani.jpeg", "assets/bodhisattva-vajrapani.jpg", "assets/vajrapani.png", "assets/vajrapani.jpg"],
            description: "A celebrated Ajanta mural representing Bodhisattva Vajrapani, notable for its expressive face, detailed ornaments and sophisticated painting technique.",
            context: "Flanking the shrine entrance of Cave 1 alongside Padmapani, Vajrapani symbolizes the indomitable power and energy of enlightened wisdom.",
            characteristics: "Features a majestic crown adorned with jewels, an imposing muscular posture, rich bodily contours, and the holding of the vajra (thunderbolt scepter).",
            significance: "Demonstrates the Ajanta masters' unparalleled command over dynamic volumetric shading, foreshortening, and expressive emotional duality.",
            influence: "Established the standard iconographic prototype for Vajrayana Buddhist deity representations throughout the Himalayas, Tibet, and East Asia."
        },
        {
            id: "madhubani",
            num: "03",
            title: "Madhubani Ramayana Painting",
            artist: "Traditional Mithila artists",
            isDocumentedArtist: true,
            artistId: "sita-devi",
            notableArtists: ["Sita Devi", "Ganga Devi", "Baua Devi"],
            region: "Mithila, Bihar",
            locationId: "mithila",
            tradition: "Madhubani / Mithila Painting",
            period: "Traditional / contemporary",
            category: "Folk & Traditional",
            medium: "Natural dyes and pigments on handmade paper / cloth",
            image: "assets/madhubani-ramayana.png",
            altFilenames: ["assets/madhubani-ramayana.png", "assets/madhubani-ramayana.jpeg", "assets/madhubani-ramayana.jpg", "assets/madhubani.png", "assets/madhubani.jpg"],
            description: "Madhubani painting is a regional painting tradition from the Mithila region, characterized by strong outlines, vivid colours, symbolic motifs and themes drawn from mythology, nature and everyday life.",
            context: "Rooted in ritual wall paintings (Kohbar and Aripan) created during weddings and festivals in the ancient Mithila kingdom, traditionally believed to have begun during King Janaka's era for Sita's wedding.",
            characteristics: "Double-line borders filled with cross-hatching, absence of empty space (filled with fish, birds, peacocks, lotus, and floral motifs), and vivid flat colors created from soot, turmeric, and indigo.",
            significance: "A powerful matrix of women's cultural expression and folklore that transformed from ephemeral domestic ritual walls into a globally revered fine art tradition.",
            influence: "Earned international recognition with major exhibitions across Japan (Mithila Museum, Tokamachi), Europe, and the United States, empowering generations of rural women artisans."
        },
        {
            id: "bani-thani",
            num: "04",
            title: "Bani Thani",
            artist: "Nihal Chand",
            isDocumentedArtist: true,
            artistId: "nihal-chand",
            region: "Kishangarh, Rajasthan",
            locationId: "kishangarh",
            tradition: "Rajasthani Miniature / Kishangarh School",
            period: "18th century (c. 1750–1760)",
            category: "Miniature",
            medium: "Opaque watercolor and gold on wasli paper",
            image: "assets/bani-thani.png",
            altFilenames: ["assets/bani-thani.png", "assets/bani-thani.jpeg", "assets/bani-thani.jpg", "assets/Bani Thani.png", "assets/Bani-Thani.png"],
            description: "Bani Thani is one of the best-known images associated with the Kishangarh school of Rajasthani miniature painting, recognized for its elongated facial features, elegant posture and refined decorative style.",
            context: "Painted by court master Nihal Chand under King Sawant Singh (Nagari Das), portraying the king's beloved singer-poetess Bani Thani as the embodiment of Radha.",
            characteristics: "Exaggerated curved profile, elongated arched eyebrows, lotus-petal eyes extending to the temples, slender fingers holding delicate lotus buds, and a diaphanous gold-embroidered veil (odhani).",
            significance: "Often hailed by art historians as the 'Mona Lisa of India', it represents the poetic zenith of devotional romanticism in Indian miniature tradition.",
            influence: "Commemorated on an Indian postage stamp in 1973 and recognized worldwide as the supreme hallmark of Kishangarh court aesthetics."
        },
        {
            id: "radha-krishna",
            num: "05",
            title: "Radha and Krishna",
            artist: "Kangra School / traditional workshop",
            isDocumentedArtist: false,
            artistId: null,
            region: "Kangra, Himachal Pradesh",
            locationId: "kangra",
            tradition: "Kangra Miniature Painting",
            period: "18th century (c. 1780)",
            category: "Miniature",
            medium: "Gouache and mineral pigments on handmade wasli paper",
            image: "assets/radha-and-krishna.png",
            altFilenames: ["assets/radha-and-krishna.png", "assets/radha-and-krishna.jpeg", "assets/radha-and-krishna.jpg", "assets/radha-krishna.png", "assets/Radha Krishna.png"],
            description: "Kangra miniature paintings are renowned for lyrical depictions of Radha and Krishna, delicate landscapes, romantic themes and refined use of colour.",
            context: "Flourished under the enlightened patronage of Raja Sansar Chand of Kangra in the verdant foothills of the Himalayas after the decline of the Mughal imperial ateliers.",
            characteristics: "Porcelain-like delicate facial treatment, soft rolling emerald green hills, blooming flowering trees, subtle treatment of flowing drapery, and tender emotional resonance.",
            significance: "Translated the devotional ecstasy of Jayadeva's Gita Govinda into an exquisite visual symphony of divine love and pristine nature.",
            influence: "Set the ultimate standard for Pahari miniature painting, deeply influencing Northern Indian visual sensibility and romantic lyricism."
        },
        {
            id: "kalighat",
            num: "06",
            title: "Kalighat Painting",
            artist: "Traditional Kalighat Patua artists",
            isDocumentedArtist: false,
            artistId: null,
            region: "Kolkata, West Bengal",
            locationId: "kolkata",
            tradition: "Kalighat Painting",
            period: "19th century",
            category: "Regional",
            medium: "Watercolor and ink on mill-made paper",
            image: "assets/kalighat-painting.png",
            altFilenames: ["assets/kalighat-painting.png", "assets/kalighat-painting.jpeg", "assets/kalighat-painting.jpg", "assets/kalighat.png", "assets/Kalighat.png"],
            description: "Kalighat painting developed around the Kalighat temple area of Kolkata and became known for bold outlines, simplified forms and depictions of religious subjects as well as contemporary social life.",
            context: "Created by rural scroll painters (patuas) who migrated to the bustling colonial metropolis of Calcutta, catering to temple pilgrims and urban buyers with inexpensive, rapid paintings.",
            characteristics: "Broad fluid brushstrokes, volumetric contour shading in single swift strokes, minimal backgrounds, and satirical depictions of decadent 'babu' culture alongside Hindu deities.",
            significance: "Marked India's first genuine transition from courtly miniature art to modern urban popular art, blending folk vibrancy with swift urban observation.",
            influence: "Profoundly influenced 20th-century modern Indian master Jamini Roy and provided a foundation for modern satirical caricature and graphic art in Bengal."
        },
        {
            id: "bharat-mata",
            num: "07",
            title: "Bharat Mata",
            artist: "Abanindranath Tagore",
            isDocumentedArtist: true,
            artistId: "abanindranath-tagore",
            region: "Santiniketan / Bengal",
            locationId: "santiniketan",
            tradition: "Bengal School",
            period: "1905",
            category: "Bengal School",
            medium: "Watercolor wash technique on paper",
            image: "assets/bharat-mata.png",
            altFilenames: ["assets/bharat-mata.png", "assets/bharat-mata.jpeg", "assets/bharat-mata.jpg", "assets/Bharat Mata.png", "assets/Bharat-Mata.png"],
            description: "Bharat Mata is one of Abanindranath Tagore's most significant works and became closely associated with the cultural and artistic nationalism of the early twentieth century.",
            context: "Painted during the intense anti-colonial Swadeshi movement following the 1905 Partition of Bengal, transforming the concept of the nation into a spiritual mother figure.",
            characteristics: "Depicted as a four-armed saffron-clad ascetic woman holding Vedic scriptures (shiksha), sheaves of paddy (anna), a white cloth (vastra), and prayer beads (diksha), radiating serenity and purity.",
            significance: "Became the iconic visual rallying symbol of the Indian independence struggle, championed by Sister Nivedita and celebrated as the birth of modern nationalist art.",
            influence: "Founded the Bengal School aesthetic, inspiring generations of artists across India to reject Western academic realism in favor of indigenous spiritual symbolism."
        },
        {
            id: "shakuntala",
            num: "08",
            title: "Shakuntala",
            artist: "Raja Ravi Varma",
            isDocumentedArtist: true,
            artistId: "raja-ravi-varma",
            region: "Travancore / Kerala",
            locationId: "kerala",
            tradition: "Academic / Indian Modern Painting",
            period: "19th century (1870)",
            category: "Modern",
            medium: "Oil on canvas",
            image: "assets/shakuntala.png",
            altFilenames: ["assets/shakuntala.png", "assets/shakuntala.jpeg", "assets/shakuntala.jpg", "assets/Shakuntala.png"],
            description: "Raja Ravi Varma combined Indian subjects and mythological themes with academic European painting techniques, creating works that became highly influential in Indian visual culture.",
            context: "Based on Kalidasa's classical Sanskrit play Abhijnanasakuntalam, capturing the poignant moment when Shakuntala pretends to remove a thorn from her foot to steal a backward glance at King Dushyanta.",
            characteristics: "Masterful illusionistic oil textures, realistic anatomy, dramatic chiaroscuro lighting, and intricate rendering of South Indian jewelry and fine silk folds.",
            significance: "Established a unified visual vocabulary for Indian mythology that democratized art across millions of households via the Ravi Varma Lithographic Press.",
            influence: "Shaped modern Indian visual culture, early Indian cinema (Dadasaheb Phalke), calendar art, and the iconic imagery of Hindu divinities."
        },
        {
            id: "three-girls",
            num: "09",
            title: "Three Girls",
            artist: "Amrita Sher-Gil",
            isDocumentedArtist: true,
            artistId: "amrita-sher-gil",
            region: "North India / Modern Indian Art",
            locationId: "north-india",
            tradition: "Modern Indian Art",
            period: "1935",
            category: "Modern",
            medium: "Oil on canvas",
            image: "assets/three-girls.png",
            altFilenames: ["assets/three-girls.png", "assets/three-girls.jpeg", "assets/three-girls.jpg", "assets/Three Girls.png", "assets/Three-Girls.png"],
            description: "Three Girls demonstrates Sher-Gil's distinctive approach to portraying Indian subjects through simplified forms, muted colours and modernist visual language.",
            context: "Painted shortly after Sher-Gil returned to India from Paris, seeking to capture the silent dignity, melancholic gaze, and lived reality of Indian women.",
            characteristics: "Simplified sculptural planes, rich earth-toned palette (burnt sienna, ochre, deep crimson), expressive almond-shaped eyes, and solemn, introspective postures.",
            significance: "Won the Gold Medal at the Bombay Art Society in 1937 and marked a crucial turning point in Indian modernism by bridging European post-impressionism with indigenous emotive realism.",
            influence: "Cemented Amrita Sher-Gil's legacy as the pioneer of modern Indian art, directly influencing the Progressive Artists' Group and post-independence figurative painting."
        },
        {
            id: "mahishasura",
            num: "10",
            title: "Mahishasura",
            artist: "Tyeb Mehta",
            isDocumentedArtist: true,
            artistId: "tyeb-mehta",
            region: "Modern Indian Art / Mumbai",
            locationId: "mumbai-modern",
            tradition: "Modern Indian Art",
            period: "1990",
            category: "Modern",
            medium: "Acrylic on canvas",
            image: "assets/mahishasura.png",
            altFilenames: ["assets/mahishasura.png", "assets/mahishasura.jpeg", "assets/mahishasura.jpg", "assets/Mahishasura.png"],
            description: "Mahishasura is one of Tyeb Mehta's best-known works and demonstrates his powerful modernist interpretation of mythological imagery through simplified forms and expressive composition.",
            context: "Created after Mehta's transformative artistic retreat in Santiniketan, re-envisioning the primordial conflict between Goddess Durga and the buffalo-demon Mahishasura as a universal metaphor for human struggle and modern existential turmoil.",
            characteristics: "Features Mehta's signature dynamic diagonal slice fracturing the canvas, stark flat color fields, interlocking angular human-beast silhouettes, and raw expressive tension.",
            significance: "One of the most monumental and critically acclaimed modern Indian paintings, setting historic auction benchmarks and demonstrating the enduring power of ancient myth in contemporary avant-garde language.",
            influence: "Redefined Indian modernist figurative abstraction and remains a milestone in 20th-century global modern art collections."
        },
        {
            id: "navaneeta-krishna",
            num: "11",
            title: "Navaneeta Krishna with Tanjore King Shivaji II",
            artist: "Tanjore School",
            isDocumentedArtist: false,
            artistId: null,
            region: "Thanjavur, Tamil Nadu",
            locationId: "thanjavur",
            tradition: "Tanjore Painting",
            period: "19th century",
            category: "Regional",
            medium: "Gold foil (24K), semi-precious stones, limestone gesso relief on wood",
            image: "assets/navaneeta-krishna-tanjore.png",
            altFilenames: ["assets/navaneeta-krishna-tanjore.png", "assets/navaneeta-krishna-tanjore.jpeg", "assets/navaneeta-krishna-tanjore.jpg", "assets/navaneeta-krishna.png", "assets/Navaneeta Krishna.png"],
            description: "A representative work of the Tanjore painting tradition, known for rich colours, decorative ornamentation, gold foil and jewel-like embellishment.",
            context: "Flourished under the royal patronage of the Maratha rulers of Thanjavur (notably Serfoji II and Shivaji II), serving as sacred iconic centerpieces in temple shrines and royal chambers.",
            characteristics: "High-relief gesso embossing (sukka churna), application of pure 24-karat gold leaf that catches candlelight, inlay of sparkling stones and cut glass, and a plump, radiant baby Krishna seated under an ornate gilded pavilion.",
            significance: "Exemplifies the opulence and devotion of South Indian sacred painting, synthesizing Maratha, Telugu Nayaka, and Deccan artistic traditions.",
            influence: "Maintains a vibrant living legacy across South India with Geographic Indication (GI) tag protection and continuous patronage."
        },
        {
            id: "devi-saraswati",
            num: "12",
            title: "Devi Saraswati",
            artist: "Mysore School",
            isDocumentedArtist: false,
            artistId: null,
            region: "Mysore, Karnataka",
            locationId: "mysore",
            tradition: "Mysore Painting",
            period: "Traditional / 19th century",
            category: "Regional",
            medium: "Gesso embossing with unrefined gold leaf on paper/wood",
            image: "assets/devi-saraswati-mysore.png",
            altFilenames: ["assets/devi-saraswati-mysore.png", "assets/devi-saraswati-mysore.jpeg", "assets/devi-saraswati-mysore.jpg", "assets/devi-saraswati.png", "assets/Devi Saraswati.png"],
            description: "Mysore paintings are known for delicate line work, restrained colours, intricate ornamentation and the use of gold leaf.",
            context: "Nurtured under the patronage of the Vijayanagara Empire and later revived by the Wodeyar kings of Mysore (especially Maharaja Krishnaraja Wadiyar III).",
            characteristics: "Subtle low-relief gesso embossing, muted and harmonious natural color palette, graceful facial expressions, and detailed rendering of the veena and sacred swans.",
            significance: "Celebrated for its serenity, refined linear restraint, and poetic devotional mood compared to the heavier relief of Tanjore works.",
            influence: "Continues as a revered classical tradition in Karnataka, preserved through generations of traditional chitrakar families."
        },
        {
            id: "pattachitra",
            num: "13",
            title: "Jagannath Pattachitra",
            artist: "Traditional Pattachitra artists",
            isDocumentedArtist: false,
            artistId: null,
            region: "Raghurajpur, Odisha",
            locationId: "raghurajpur",
            tradition: "Pattachitra",
            period: "Traditional",
            category: "Folk & Traditional",
            medium: "Tamarind seed paste prepared cotton cloth (pata), natural stone colors",
            image: "assets/jagannath-pattachitra.png",
            altFilenames: ["assets/jagannath-pattachitra.png", "assets/jagannath-pattachitra.jpeg", "assets/jagannath-pattachitra.jpg", "assets/pattachitra.png", "assets/Pattachitra.png"],
            description: "Pattachitra is a traditional painting style of Odisha strongly associated with religious themes, especially Jagannath traditions. It is characterized by detailed line work, decorative borders and strong colours.",
            context: "Closely linked to the worship of Lord Jagannath, Balabhadra, and Subhadra in Puri. When the temple deities are secluded during the Anavasara ritual, these sacred cloth paintings are worshipped in their place.",
            characteristics: "Prepared cotton cloth (pata) treated with chalk and tamarind gum, fine continuous black outlines drawn with lampblack, floral decorative borders, and vibrant natural pigments derived from conch shells, hingula, and haritala.",
            significance: "One of India's oldest and most strictly codified living scroll painting traditions, maintaining uninterrupted continuity from the 12th century.",
            influence: "Preserved by the entire heritage artisan village of Raghurajpur and celebrated globally for its supreme linear intricacy and storytelling mastery."
        },
        {
            id: "warli",
            num: "14",
            title: "Warli Painting",
            artist: "Traditional Warli artists",
            isDocumentedArtist: false,
            artistId: null,
            region: "Maharashtra (Palghar)",
            locationId: "warli-region",
            tradition: "Warli Painting",
            period: "Traditional / contemporary",
            category: "Folk & Traditional",
            medium: "Rice flour paste and gum binder on mud wash canvas",
            image: "assets/warli-painting.png",
            altFilenames: ["assets/warli-painting.png", "assets/warli-painting.jpeg", "assets/warli-painting.jpg", "assets/warli.png", "assets/Warli.png"],
            description: "Warli painting is a community-based painting tradition known for its geometric human and animal figures, scenes of everyday life, farming, celebrations and nature.",
            context: "Practiced by the indigenous Warli tribe in the Sahyadri coastal hills of Maharashtra. Traditionally painted by suvasinis (married women) on the mud-plastered walls of wedding huts (Lagnacho Chauk).",
            characteristics: "Constructed solely with rudimentary geometric symbols: circle (sun and moon), triangle (mountains and trees), and square (sacred enclosure). Human figures are formed by two inverted triangles joined at the tip, depicting the iconic spiral Tarpa dance.",
            significance: "An extraordinary testament to ecological harmony, communitarian celebration, and timeless geometric minimalism completely devoid of mythological hierarchy.",
            influence: "Elevated to global contemporary art by master Jivya Soma Mashe and recognized worldwide for its organic graphic purity."
        },
        {
            id: "kalamkari",
            num: "15",
            title: "Krishna Kalamkari",
            artist: "Traditional Kalamkari artists",
            isDocumentedArtist: false,
            artistId: null,
            region: "Andhra Pradesh / Telangana",
            locationId: "kalamkari-region",
            tradition: "Kalamkari",
            period: "Traditional / contemporary",
            category: "Folk & Traditional",
            medium: "Natural vegetable dyes and bamboo reed pen on treated cotton",
            image: "assets/kalamkari-krishna.png",
            altFilenames: ["assets/kalamkari-krishna.png", "assets/kalamkari-krishna.jpeg", "assets/kalamkari-krishna.jpg", "assets/kalamkari.png", "assets/Kalamkari.png"],
            description: "Kalamkari is a traditional Indian painting tradition known for narrative imagery, natural dyes, detailed line work and themes drawn from Hindu mythology and epics.",
            context: "Developed in the temple town of Srikalahasti along the Swarnamukhi River, where narrative scroll hangings (toranams) were created to illustrate epic stories recited by wandering bards.",
            characteristics: "A 17-step organic process using milk-soaked cotton, buffalo milk, myrobalan mordant, sharpened bamboo pens (kalam), and natural vegetable dyes (madder red, indigo blue, yellow from pomegranate rinds).",
            significance: "A masterpiece of organic textile painting that combines deep epic narrative lore with sustainable natural chemistry and intricate draughtsmanship.",
            influence: "Exported worldwide since the Coromandel trade era, sustaining generations of master artisans with enduring GI status."
        }
    ];

    const documentedArtists = [
        {
            id: "abanindranath-tagore",
            name: "Abanindranath Tagore",
            period: "1871–1951",
            region: "Kolkata & Santiniketan, West Bengal",
            role: "Pioneer of the Bengal School of Art",
            bio: "Nephew of Rabindranath Tagore, Abanindranath was the foundational architect of modern Indian art. He founded the Bengal School of Art and the Indian Society of Oriental Art to synthesize indigenous Indian, Mughal, and Japanese wash painting aesthetics.",
            style: "Subtle watercolor wash technique, delicate contours, poetic atmospheric lighting, and spiritual symbolism.",
            keyWorks: ["Bharat Mata (1905)", "The Passing of Shah Jahan (1900)", "My Mother (1912)", "Arabian Nights Series (1930)"],
            contribution: "Revitalized Indian art during the colonial era by establishing an indigenous visual language that rejected European academicism and inspired the national Swadeshi awakening."
        },
        {
            id: "raja-ravi-varma",
            name: "Raja Ravi Varma",
            period: "1848–1906",
            region: "Kilimanoor, Travancore (Kerala)",
            role: "Pioneer of Indian Modern Academic Painting",
            bio: "Born into the royal family of Kilimanoor in Kerala, Raja Ravi Varma is recognized as the father of modern Indian painting. He achieved unprecedented acclaim by mastering European oil realism while depicting subjects exclusively drawn from Indian epics and puranas.",
            style: "Academic oil realism, dramatic chiaroscuro, naturalistic anatomy, and opulent textile rendering.",
            keyWorks: ["Shakuntala (1870)", "Damayanti Talking to a Swan (1899)", "Hamsa Damayanti", "Galaxy of Musicians (1889)"],
            contribution: "Democratized Indian art across millions of households by establishing the Ravi Varma Lithographic Press in 1894, fundamentally shaping modern Indian visual consciousness."
        },
        {
            id: "amrita-sher-gil",
            name: "Amrita Sher-Gil",
            period: "1913–1941",
            region: "Budapest, Shimla & Gorakhpur",
            role: "Pioneer of Modernist Figurative Art",
            bio: "Born to a Sikh aristocrat and a Hungarian opera singer, Sher-Gil trained at the École des Beaux-Arts in Paris before returning to India. She revolutionized Indian modern art with her poignant portrayals of Indian life and women.",
            style: "Post-impressionist color planes, simplified sculptural forms, melancholic introspective gaze, and rich earth pigments.",
            keyWorks: ["Three Girls (1935)", "Bride's Toilet (1937)", "South Indian Villagers Going to Market (1937)", "Hill Women (1935)"],
            contribution: "Hailed as India's Frida Kahlo, she built the vital bridge between European modernism and indigenous Indian sensibilities, inspiring the post-independence modern art movement."
        },
        {
            id: "tyeb-mehta",
            name: "Tyeb Mehta",
            period: "1925–2009",
            region: "Mumbai, Maharashtra",
            role: "Master of Modern Indian Abstraction",
            bio: "A prominent member of the seminal Bombay Progressive Artists' Group, Tyeb Mehta channelled existential themes of pain, conflict, and redemption through rigorous modernist compositional techniques.",
            style: "Stark flat color planes, signature diagonal division, angular fractured silhouettes, and raw expressive tension.",
            keyWorks: ["Mahishasura (1990)", "Diagonal Series (1970s)", "Falling Figure", "Celebration (1997)"],
            contribution: "Redefined modernist mythological interpretation in post-colonial India, creating monumental masterworks that broke global auction records for Indian contemporary art."
        },
        {
            id: "nihal-chand",
            name: "Nihal Chand",
            period: "c. 1710–1782",
            region: "Kishangarh, Rajasthan",
            role: "Master Painter of the Kishangarh Court",
            bio: "Chief court painter to King Sawant Singh (Nagari Das) of Kishangarh, Nihal Chand created a legendary, highly stylized aesthetic that immortalized the Radha-Krishna divine romance.",
            style: "Elongated lotus-shaped eyes, arched high eyebrows, slender aristocratic contours, and expansive panoramic twilight landscapes.",
            keyWorks: ["Bani Thani (c. 1750–1760)", "Radha and Krishna in the Boat of Love", "Court Scenes of Kishangarh"],
            contribution: "Elevated Rajasthani miniature painting to its most lyrical and romantic expression, creating India's most universally recognized miniature icon."
        },
        {
            id: "sita-devi",
            name: "Sita Devi",
            period: "1914–2005",
            region: "Jitwarpur, Mithila (Bihar)",
            role: "Padma Shri & National Awardee Madhubani Master",
            bio: "Pioneering Mithila artist who brought the traditional Bharni style of Madhubani painting out of village courtyards and onto paper and global museum canvases.",
            style: "Bharni style with vibrant solid color fills, bold rhythmic black outlines, and mythological epics.",
            keyWorks: ["Ramayana Narrative Panels", "Kadamba Tree with Krishna", "Flora & Fauna of Mithila"],
            contribution: "First Madhubani artist to receive the National Award (1975) and Padma Shri (1981), elevating rural women's folk art to the status of fine art."
        },
        {
            id: "ganga-devi",
            name: "Ganga Devi",
            period: "1928–1991",
            region: "Chatra, Mithila (Bihar)",
            role: "Padma Shri Kachni Style Master",
            bio: "A legendary Mithila artist renowned for her extraordinary mastery of the delicate, monochromatic line-drawing Kachni style and her deeply personal narrative series.",
            style: "Kachni style characterized by exquisite fine-line cross-hatching, stippling, and autobiographical narratives.",
            keyWorks: ["Manav Jivan (Cycle of Life)", "America Series", "Kohbar Ghar Panels"],
            contribution: "Awarded Padma Shri in 1984; represented India at the Festival of India in the USA and created works preserved in international museums."
        },
        {
            id: "baua-devi",
            name: "Baua Devi",
            period: "1940–Present",
            region: "Jitwarpur, Mithila (Bihar)",
            role: "Padma Shri Madhubani Icon",
            bio: "The only woman artist from Mithila to exhibit at the landmark 'Magiciens de la Terre' exhibition at the Centre Pompidou in Paris in 1989.",
            style: "Symbolic cosmic imagery, Lord Krishna narratives, giant serpents (Nag Kanya), and bold geometric compositions.",
            keyWorks: ["Nag Kanya (Serpent Maiden)", "Krishna Raslila", "Mithila Cosmos"],
            contribution: "Conferred the Padma Shri in 2017 for over six decades of pioneering artistic leadership in Madhubani painting."
        }
    ];

    const traditions = [
        {
            id: "ajanta",
            name: "Ajanta Buddhist Painting",
            region: "Maharashtra",
            filterCategory: "Classical",
            description: "Ancient rock-cut cave murals painted in fresco-secco, celebrated for serene expressions, supple contours, and spiritual nobility.",
            painting: "Bodhisattva Padmapani"
        },
        {
            id: "madhubani",
            name: "Madhubani Painting",
            region: "Mithila, Bihar",
            filterCategory: "Folk & Traditional",
            description: "Vibrant folk tradition featuring double-line outlines, cross-hatching, natural dyes, and sacred fertility motifs.",
            painting: "Madhubani Ramayana"
        },
        {
            id: "rajasthani-miniature",
            name: "Rajasthani Miniature",
            region: "Kishangarh, Rajasthan",
            filterCategory: "Miniature",
            description: "Refined court miniature art renowned for elongated stylized features, royal grandeur, and devotional Radha-Krishna poetry.",
            painting: "Bani Thani"
        },
        {
            id: "kangra-miniature",
            name: "Kangra Miniature",
            region: "Himachal Pradesh",
            filterCategory: "Miniature",
            description: "Lyrical Pahari school painting characterized by delicate naturalism, lush green foothills, and poignant romanticism.",
            painting: "Radha and Krishna"
        },
        {
            id: "kalighat",
            name: "Kalighat Painting",
            region: "Kolkata, West Bengal",
            filterCategory: "Regional",
            description: "Dynamic urban folk watercolors known for swift sweeping brushstrokes, minimal shading, and satirical social commentary.",
            painting: "Kalighat Painting"
        },
        {
            id: "bengal-school",
            name: "Bengal School",
            region: "Santiniketan / Bengal",
            filterCategory: "Bengal School",
            description: "Nationalist Swadeshi art movement blending Indian spiritual themes with Japanese watercolor wash techniques.",
            painting: "Bharat Mata"
        },
        {
            id: "tanjore",
            name: "Tanjore Painting",
            region: "Tamil Nadu",
            filterCategory: "Regional",
            description: "Gilded devotional panel art featuring 24-karat gold foil embossing, semi-precious gem inlays, and vibrant iconic forms.",
            painting: "Navaneeta Krishna"
        },
        {
            id: "mysore",
            name: "Mysore Painting",
            region: "Karnataka",
            filterCategory: "Regional",
            description: "Classical South Indian court painting known for subtle low-relief gesso work, muted harmonies, and delicate line work.",
            painting: "Devi Saraswati"
        },
        {
            id: "pattachitra",
            name: "Pattachitra",
            region: "Odisha",
            filterCategory: "Folk & Traditional",
            description: "Ancient cloth scroll tradition centered on Jagannath worship with intricate natural mineral colors and decorative borders.",
            painting: "Jagannath Pattachitra"
        },
        {
            id: "warli",
            name: "Warli Painting",
            region: "Maharashtra",
            filterCategory: "Folk & Traditional",
            description: "Indigenous ritual wall art constructed with basic geometric forms celebrating nature, harvest, and community dance.",
            painting: "Warli Painting"
        },
        {
            id: "kalamkari",
            name: "Kalamkari",
            region: "Andhra Pradesh",
            filterCategory: "Folk & Traditional",
            description: "Narrative organic textile painting drawn with a sharpened bamboo pen using 100% natural vegetable and mineral dyes.",
            painting: "Krishna Kalamkari"
        },
        {
            id: "modern-indian-art",
            name: "Modern Indian Art",
            region: "Pan-India",
            filterCategory: "Modern",
            description: "Pioneering 20th-century syntheses of European academic/modernist techniques with deep Indian cultural identity.",
            painting: "Shakuntala, Three Girls, Mahishasura"
        }
    ];

    /* ==========================================================================
       MAP INITIALIZATION & CONTROLS (LEAFLET)
       ========================================================================== */
    let map = null;
    let markersMap = {};
    let activeLocationId = null;

    function initMap() {
        const mapContainer = document.getElementById('india-map');
        if (!mapContainer) return;

        // Center on India
        const defaultCenter = [22.8, 80.0];
        const defaultZoom = 5;

        // Initialize Leaflet Map
        map = L.map('india-map', {
            center: defaultCenter,
            zoom: defaultZoom,
            minZoom: 4,
            maxZoom: 10,
            zoomControl: true,
            scrollWheelZoom: false
        });

        // Add smooth tile layer (CartoDB Positron with warm museum styling)
        L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        // Add Custom Circle Markers for Each Historic Region
        locations.forEach(loc => {
            const customIcon = L.divIcon({
                className: 'custom-map-pin',
                html: `<div class="marker-halo"></div><div class="marker-core" id="marker-${loc.id}"></div>`,
                iconSize: [28, 28],
                iconAnchor: [14, 14],
                popupAnchor: [0, -14]
            });

            const marker = L.marker(loc.coordinates, { icon: customIcon }).addTo(map);

            // Create Popup Content
            const popupContent = `
                <div class="map-popup-card">
                    <div class="popup-tag">${loc.region}</div>
                    <h4 class="popup-title">${loc.shortName}</h4>
                    <div class="popup-tradition">${loc.tradition}</div>
                    <p class="popup-desc">${loc.description}</p>
                    <button class="popup-btn" onclick="window.exploreRegionPaintings('${loc.id}')">
                        Explore Paintings ↓
                    </button>
                </div>
            `;

            marker.bindPopup(popupContent, {
                maxWidth: 280,
                className: 'custom-leaflet-popup'
            });

            marker.on('click', () => {
                selectLocation(loc.id, false);
            });

            markersMap[loc.id] = marker;
        });

        // Reset Button Action
        const btnResetMap = document.getElementById('btn-reset-map');
        if (btnResetMap) {
            btnResetMap.addEventListener('click', () => {
                resetMapView();
            });
        }
    }

    function resetMapView() {
        if (!map) return;
        map.setView([22.8, 80.0], 5);
        map.closePopup();
        activeLocationId = null;

        // Reset quick pills
        document.querySelectorAll('.region-pill-btn').forEach(btn => btn.classList.remove('active'));

        // Reset marker pins active state
        document.querySelectorAll('.custom-map-pin').forEach(pin => pin.classList.remove('active'));

        // Show sidebar placeholder
        const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
        const sidebarActive = document.getElementById('sidebar-active-content');
        if (sidebarPlaceholder && sidebarActive) {
            sidebarPlaceholder.classList.remove('hidden');
            sidebarActive.classList.add('hidden');
        }
    }

    function selectLocation(locationId, panTo = true) {
        const loc = locations.find(l => l.id === locationId);
        if (!loc) return;

        activeLocationId = locationId;

        // Pan map if requested
        if (panTo && map) {
            map.flyTo(loc.coordinates, 7, { duration: 1.2 });
            const marker = markersMap[locationId];
            if (marker) {
                setTimeout(() => {
                    marker.openPopup();
                }, 700);
            }
        }

        // Highlight marker
        document.querySelectorAll('.custom-map-pin').forEach(pin => pin.classList.remove('active'));
        const markerElem = document.getElementById(`marker-${locationId}`);
        if (markerElem && markerElem.parentElement) {
            markerElem.parentElement.classList.add('active');
        }

        // Update Quick Pill active state
        document.querySelectorAll('.region-pill-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.region === locationId);
        });

        // Update Sidebar
        renderSidebarContent(loc);
    }

    function renderSidebarContent(loc) {
        const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
        const sidebarActive = document.getElementById('sidebar-active-content');
        if (!sidebarPlaceholder || !sidebarActive) return;

        sidebarPlaceholder.classList.add('hidden');
        sidebarActive.classList.remove('hidden');

        // Find associated paintings
        const associatedPaintings = paintings.filter(p => p.locationId === loc.id);

        let paintingsHtml = associatedPaintings.map(p => `
            <div class="sidebar-painting-item" onclick="window.openPaintingModal('${p.id}')">
                <img src="${p.image}" alt="${p.title}" class="sidebar-painting-thumb" onerror="window.handleThumbError(this, '${p.title}')">
                <div class="sidebar-painting-info">
                    <div class="sidebar-painting-name">${p.title}</div>
                    <div class="sidebar-painting-artist">${p.artist}</div>
                </div>
            </div>
        `).join('');

        let artistsHtml = loc.artists.map(art => `
            <span class="sidebar-artist-tag">${art}</span>
        `).join('');

        sidebarActive.innerHTML = `
            <div class="region-header-tag">${loc.region}</div>
            <h3 class="sidebar-region-title">${loc.name}</h3>
            <div>
                <span class="sidebar-tradition-badge">${loc.tradition}</span>
            </div>
            <p class="sidebar-region-desc">${loc.description}</p>
            
            <div class="sidebar-section-title">Associated Masterpieces</div>
            <div class="sidebar-paintings-list">
                ${paintingsHtml}
            </div>

            <div class="sidebar-section-title">Prominent Artists & Guilds</div>
            <div class="sidebar-artists-list">
                ${artistsHtml}
            </div>

            <button class="btn btn-primary btn-sidebar-explore" onclick="window.exploreRegionPaintings('${loc.id}')">
                Explore Paintings in Gallery ↓
            </button>
        `;
    }

    // Populate Region Quick Pills
    function renderRegionPills() {
        const container = document.getElementById('region-pills');
        if (!container) return;

        container.innerHTML = locations.map(loc => `
            <button class="region-pill-btn" data-region="${loc.id}" onclick="window.focusMapRegion('${loc.id}')">
                📍 ${loc.shortName}
            </button>
        `).join('');
    }

    /* ==========================================================================
       GALLERY RENDERING, FILTERING & SEARCH
       ========================================================================== */
    let currentFilter = 'all';
    let currentSearchTerm = '';

    function renderPaintings() {
        const grid = document.getElementById('paintings-grid');
        const noResults = document.getElementById('no-results-card');
        const countText = document.getElementById('results-count-text');
        if (!grid) return;

        // Filter paintings based on category & search term
        const filtered = paintings.filter(painting => {
            const matchesCategory = (currentFilter === 'all') || (painting.category.toLowerCase() === currentFilter.toLowerCase());
            
            const term = currentSearchTerm.trim().toLowerCase();
            const matchesSearch = !term || 
                painting.title.toLowerCase().includes(term) ||
                painting.artist.toLowerCase().includes(term) ||
                painting.region.toLowerCase().includes(term) ||
                painting.tradition.toLowerCase().includes(term) ||
                painting.description.toLowerCase().includes(term);

            return matchesCategory && matchesSearch;
        });

        // Update counts
        if (countText) {
            countText.innerHTML = `Showing <strong>${filtered.length}</strong> of <strong>${paintings.length}</strong> paintings`;
        }

        if (filtered.length === 0) {
            grid.innerHTML = '';
            if (noResults) noResults.classList.remove('hidden');
            return;
        }

        if (noResults) noResults.classList.add('hidden');

        grid.innerHTML = filtered.map(painting => `
            <article class="painting-card" data-id="${painting.id}">
                <div class="card-num-badge">${painting.num}</div>
                <div class="card-img-wrapper" onclick="window.openPaintingModal('${painting.id}')">
                    <img src="${painting.image}" 
                         alt="${painting.title} - ${painting.tradition}" 
                         class="card-img" 
                         loading="lazy"
                         onerror="window.handleImageError(this, '${painting.title.replace(/'/g, "\\'")}', '${painting.tradition.replace(/'/g, "\\'")}')">
                </div>
                <div class="card-body">
                    <div class="card-region-tag">${painting.region}</div>
                    <div class="card-tradition">${painting.tradition}</div>
                    <h3 class="card-title" onclick="window.openPaintingModal('${painting.id}')">${painting.title}</h3>
                    <div class="card-artist-period">
                        <span class="card-artist">${painting.artist}</span>
                        <span class="card-period">${painting.period}</span>
                    </div>
                    <p class="card-description">${painting.description}</p>
                    <div class="card-footer">
                        <button class="btn-card-explore" onclick="window.openPaintingModal('${painting.id}')">
                            <span>EXPLORE PAINTING</span>
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </div>
                </div>
            </article>
        `).join('');
    }

    function initGalleryControls() {
        // Category Filter Tabs
        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                tab.classList.add('active');
                tab.setAttribute('aria-selected', 'true');
                currentFilter = tab.dataset.filter;
                renderPaintings();
            });
        });

        // Search Input
        const searchInput = document.getElementById('painting-search-input');
        const searchClear = document.getElementById('search-clear-btn');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                currentSearchTerm = e.target.value;
                if (searchClear) {
                    searchClear.classList.toggle('hidden', !currentSearchTerm);
                }
                renderPaintings();
            });
        }

        if (searchClear) {
            searchClear.addEventListener('click', () => {
                if (searchInput) searchInput.value = '';
                currentSearchTerm = '';
                searchClear.classList.add('hidden');
                renderPaintings();
            });
        }

        // Reset Filter Button
        const resetBtn = document.getElementById('btn-reset-filters');
        if (resetBtn) {
            resetBtn.addEventListener('click', () => {
                currentFilter = 'all';
                currentSearchTerm = '';
                if (searchInput) searchInput.value = '';
                if (searchClear) searchClear.classList.add('hidden');
                filterTabs.forEach(t => {
                    t.classList.toggle('active', t.dataset.filter === 'all');
                    t.setAttribute('aria-selected', t.dataset.filter === 'all' ? 'true' : 'false');
                });
                renderPaintings();
            });
        }
    }

    /* ==========================================================================
       ARTISTS SECTION RENDERING
       ========================================================================== */
    function renderArtists() {
        const grid = document.getElementById('artists-grid');
        if (!grid) return;

        grid.innerHTML = documentedArtists.map(artist => `
            <div class="artist-card" onclick="window.openArtistModal('${artist.id}')">
                <div class="artist-role-tag">${artist.role}</div>
                <h4 class="artist-name">${artist.name}</h4>
                <div class="artist-meta">${artist.period} · ${artist.region}</div>
                <p class="artist-bio-snippet">${artist.bio}</p>
                <div class="artist-card-action">
                    <span>View Full Biography &amp; Style →</span>
                </div>
            </div>
        `).join('');
    }

    /* ==========================================================================
       TRADITIONS GRID RENDERING
       ========================================================================== */
    function renderTraditions() {
        const grid = document.getElementById('traditions-grid');
        if (!grid) return;

        grid.innerHTML = traditions.map(trad => `
            <div class="tradition-card" onclick="window.filterByTraditionCategory('${trad.filterCategory}')">
                <div class="tradition-region">${trad.region}</div>
                <h4 class="tradition-name">${trad.name}</h4>
                <p class="tradition-desc">${trad.description}</p>
                <div class="tradition-masterpiece">
                    <strong>Masterpiece:</strong> ${trad.painting}
                </div>
                <div class="tradition-action">
                    <span>Filter Collection →</span>
                </div>
            </div>
        `).join('');
    }

    /* ==========================================================================
       MODAL HANDLING (PAINTING & ARTIST DETAILS)
       ========================================================================== */
    const paintingModal = document.getElementById('painting-modal');
    const artistModal = document.getElementById('artist-modal');

    function openPaintingModal(paintingId) {
        const painting = paintings.find(p => p.id === paintingId);
        if (!painting || !paintingModal) return;

        const body = document.getElementById('modal-painting-body');
        if (!body) return;

        const loc = locations.find(l => l.id === painting.locationId);

        let artistActionHtml = painting.isDocumentedArtist && painting.artistId ? 
            `<button class="btn-text-action" onclick="window.openArtistModal('${painting.artistId}')">Explore Artist Profile ↗</button>` : '';

        body.innerHTML = `
            <div class="modal-painting-grid">
                <div class="modal-img-column">
                    <div class="modal-img-frame">
                        <img src="${painting.image}" 
                             alt="${painting.title}" 
                             class="modal-img"
                             onerror="window.handleImageError(this, '${painting.title.replace(/'/g, "\\'")}', '${painting.tradition.replace(/'/g, "\\'")}')">
                    </div>
                    <div class="modal-location-card">
                        <div class="modal-loc-header">
                            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            <span>Geographic Origin</span>
                        </div>
                        <div class="modal-loc-name">${loc ? loc.name : painting.region}</div>
                        <button class="btn btn-primary btn-sm" onclick="window.jumpToMapLocation('${painting.locationId}')">
                            VIEW THIS LOCATION ON MAP ↗
                        </button>
                    </div>
                </div>

                <div class="modal-content-column">
                    <div class="modal-header-meta">
                        <div class="modal-badge-row">
                            <span class="badge-tag badge-tag-tradition">${painting.tradition}</span>
                            <span class="badge-tag badge-tag-period">${painting.period}</span>
                            <span class="badge-tag">${painting.category}</span>
                        </div>
                        <h2 class="modal-painting-title" id="modal-painting-title">${painting.title}</h2>
                        <div class="modal-artist-link">
                            <span>Artist: <strong>${painting.artist}</strong></span>
                            ${artistActionHtml}
                        </div>
                    </div>

                    <div class="modal-spec-grid">
                        <div class="spec-item">
                            <strong>Region / Location</strong>
                            <span>${painting.region}</span>
                        </div>
                        <div class="spec-item">
                            <strong>Medium / Materials</strong>
                            <span>${painting.medium}</span>
                        </div>
                        <div class="spec-item">
                            <strong>Period / Date</strong>
                            <span>${painting.period}</span>
                        </div>
                        <div class="spec-item">
                            <strong>Artistic Tradition</strong>
                            <span>${painting.tradition}</span>
                        </div>
                    </div>

                    <div class="modal-section-group">
                        <div class="modal-block">
                            <h4 class="modal-block-title">About the Painting</h4>
                            <p class="modal-block-text">${painting.description}</p>
                        </div>
                        <div class="modal-block">
                            <h4 class="modal-block-title">Historical Context</h4>
                            <p class="modal-block-text">${painting.context}</p>
                        </div>
                        <div class="modal-block">
                            <h4 class="modal-block-title">Artistic Characteristics &amp; Medium</h4>
                            <p class="modal-block-text">${painting.characteristics}</p>
                        </div>
                        <div class="modal-block">
                            <h4 class="modal-block-title">Cultural Significance &amp; Themes</h4>
                            <p class="modal-block-text">${painting.significance}</p>
                        </div>
                        <div class="modal-block">
                            <h4 class="modal-block-title">Influence &amp; Enduring Legacy</h4>
                            <p class="modal-block-text">${painting.influence}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;

        paintingModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function openArtistModal(artistId) {
        const artist = documentedArtists.find(a => a.id === artistId);
        if (!artist || !artistModal) return;

        const body = document.getElementById('modal-artist-body');
        if (!body) return;

        let worksListHtml = artist.keyWorks.map(work => `
            <li style="margin-bottom: 6px;"><strong>${work}</strong></li>
        `).join('');

        body.innerHTML = `
            <div class="modal-artist-body">
                <div class="artist-modal-header">
                    <div class="artist-modal-role">${artist.role}</div>
                    <h2 class="artist-modal-name" id="modal-artist-name">${artist.name}</h2>
                    <div class="artist-modal-meta">Active Period: ${artist.period} · ${artist.region}</div>
                </div>

                <div class="modal-block">
                    <h4 class="modal-block-title">Biography &amp; Artistic Philosophy</h4>
                    <p class="modal-block-text">${artist.bio}</p>
                </div>

                <div class="modal-block">
                    <h4 class="modal-block-title">Artistic Style &amp; Techniques</h4>
                    <p class="modal-block-text">${artist.style}</p>
                </div>

                <div class="modal-block">
                    <h4 class="modal-block-title">Significant Works</h4>
                    <ul style="padding-left: 20px; font-size: 0.9rem; color: var(--color-charcoal-light);">
                        ${worksListHtml}
                    </ul>
                </div>

                <div class="modal-block">
                    <h4 class="modal-block-title">Contribution to Indian Art History</h4>
                    <p class="modal-block-text">${artist.contribution}</p>
                </div>
            </div>
        `;

        // If painting modal was open, close it first
        if (paintingModal) paintingModal.classList.add('hidden');

        artistModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }

    function closeAllModals() {
        if (paintingModal) paintingModal.classList.add('hidden');
        if (artistModal) artistModal.classList.add('hidden');
        document.body.style.overflow = '';
    }

    function initModals() {
        const closePaintingBtn = document.getElementById('modal-painting-close');
        const closeArtistBtn = document.getElementById('modal-artist-close');

        if (closePaintingBtn) closePaintingBtn.addEventListener('click', closeAllModals);
        if (closeArtistBtn) closeArtistBtn.addEventListener('click', closeAllModals);

        // Click outside modal card to close
        window.addEventListener('click', (e) => {
            if (e.target === paintingModal || e.target === artistModal) {
                closeAllModals();
            }
        });

        // ESC key to close
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeAllModals();
            }
        });
    }

    /* ==========================================================================
       MAP <-> GALLERY BIDIRECTIONAL INTERACTIONS
       ========================================================================== */
    function jumpToMapLocation(locationId) {
        closeAllModals();
        const mapSection = document.getElementById('map-section');
        if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth' });
        }
        setTimeout(() => {
            selectLocation(locationId, true);
        }, 600);
    }

    function exploreRegionPaintings(locationId) {
        const loc = locations.find(l => l.id === locationId);
        if (!loc) return;

        const gallerySection = document.getElementById('gallery-section');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }

        // Set search term or highlight associated cards
        const searchInput = document.getElementById('painting-search-input');
        if (searchInput) {
            searchInput.value = loc.shortName;
            currentSearchTerm = loc.shortName;
            const searchClear = document.getElementById('search-clear-btn');
            if (searchClear) searchClear.classList.remove('hidden');
            renderPaintings();
        }
    }

    function filterByTraditionCategory(category) {
        const gallerySection = document.getElementById('gallery-section');
        if (gallerySection) {
            gallerySection.scrollIntoView({ behavior: 'smooth' });
        }

        const filterTabs = document.querySelectorAll('.filter-tab');
        filterTabs.forEach(t => {
            const matches = t.dataset.filter.toLowerCase() === category.toLowerCase();
            t.classList.toggle('active', matches);
            t.setAttribute('aria-selected', matches ? 'true' : 'false');
        });

        currentFilter = category;
        currentSearchTerm = '';
        const searchInput = document.getElementById('painting-search-input');
        if (searchInput) searchInput.value = '';
        renderPaintings();
    }

    /* ==========================================================================
       SMART IMAGE FALLBACK / PLACEHOLDER GENERATOR
       ========================================================================== */
    // Generates an elegant SVG/Canvas placeholder if physical image file is not yet placed
    function handleImageError(imgElem, title, tradition) {
        imgElem.onerror = null; // Prevent infinite loop
        
        // Replace with styled placeholder container
        const parent = imgElem.parentElement;
        if (parent) {
            parent.innerHTML = `
                <div class="artwork-placeholder">
                    <div class="placeholder-badge">${tradition || 'Indian Painting'}</div>
                    <div class="placeholder-art-title">${title}</div>
                    <div class="placeholder-tradition">Place "${imgElem.src.split('/').pop()}" in /assets/</div>
                </div>
            `;
        }
    }

    function handleThumbError(imgElem, title) {
        imgElem.onerror = null;
        imgElem.style.background = '#172B46';
        imgElem.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><rect width="60" height="60" fill="%23172B46"/><text x="50%" y="50%" fill="%23C69A45" font-size="20" font-family="serif" text-anchor="middle" dominant-baseline="middle">🎨</text></svg>';
    }

    /* ==========================================================================
       STICKY NAV & MOBILE MENU
       ========================================================================== */
    function initNavigation() {
        const header = document.getElementById('site-header');
        const navToggle = document.getElementById('nav-toggle');
        const primaryNav = document.getElementById('primary-navigation');
        const navLinks = document.querySelectorAll('.nav-link');

        // Scroll listener for header shadow
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile toggle
        if (navToggle && primaryNav) {
            navToggle.addEventListener('click', () => {
                const isOpen = primaryNav.classList.toggle('open');
                navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });

            // Close on link click
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    primaryNav.classList.remove('open');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }

    /* ==========================================================================
       GLOBAL WINDOW ATTACHMENTS (FOR INLINE ACTIONS)
       ========================================================================== */
    window.openPaintingModal = openPaintingModal;
    window.openArtistModal = openArtistModal;
    window.focusMapRegion = (id) => selectLocation(id, true);
    window.jumpToMapLocation = jumpToMapLocation;
    window.exploreRegionPaintings = exploreRegionPaintings;
    window.filterByTraditionCategory = filterByTraditionCategory;
    window.handleImageError = handleImageError;
    window.handleThumbError = handleThumbError;

    /* ==========================================================================
       APPLICATION INITIALIZATION
       ========================================================================== */
    document.addEventListener('DOMContentLoaded', () => {
        initNavigation();
        initMap();
        renderRegionPills();
        renderPaintings();
        initGalleryControls();
        renderArtists();
        renderTraditions();
        initModals();
    });

})();
