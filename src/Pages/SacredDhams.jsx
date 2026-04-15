// src/Pages/SacredDhams.jsx
import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// ---- Tabs shown on top ----
const CATEGORIES = [
    "All",
    "Char Dham",
    "Chota Char Dham",
    "Jyotirlinga",
    "Shakti Peeth",
    "Chitrakoot Dham",
    "Mathura/Vrindavan",
    "7 Moksha Givers",
    "68 Tirths",
    "Other Famous Dhams",
];

// ---- Local, safe dataset (you can expand later) ----
const dhamsData = [
    {
        id: 1,
        name: "Badrinath Temple",
        location: "Uttarakhand, India",
        deity: "Lord Vishnu",
        altitude: "3,133 m",
        river: "Alaknanda River",
        season: "May – November",
        festivals: ["Mata Murti Ka Mela", "Badri-Kedar Utsav"],
        facts: "One of the Char Dham and also in the Sapta Puri.",
        highlights: ["Char Dham", "Chota Char Dham", "68 Tirths"],
        image: "https://www.chardham-pilgrimage-tour.com/assets/images/badrinath-banner3.webp",
        slug: "badrinath", // change to match your route if different
        description:
            "A major Vaishnavite shrine established by Adi Shankaracharya.",
    },
    {
        id: 2,
        name: "Dwarkadhish Temple",
        location: "Dwarka, Gujarat, India",
        deity: "Lord Krishna",
        altitude: "Sea level",
        river: "Gomti river coast",
        season: "October – March",
        festivals: ["Janmashtami", "Holi"],
        facts: "Ancient kingdom of Lord Krishna; a Sapta Puri.",
        highlights: ["Char Dham", "Sapta Puri", "68 Tirths", "7 Moksha Givers"],
        image: "https://dharohar.hargharpuja.com/wp-content/uploads/2024/08/Dwarkadeesh-Temple-1335x800.jpg",
        slug: "dwarka",
        description:
            "Among the Char Dham; renowned for its five-storied shikhara.",
    },
    {
        id: 3,
        name: "Jagannath Temple",
        location: "Puri, Odisha, India",
        deity: "Lord Jagannath",
        altitude: "Sea level",
        river: "Bay of Bengal coast",
        season: "October – February",
        festivals: ["Rath Yatra", "Snana Yatra"],
        facts: "Part of Char Dham; famous for the annual chariot festival.",
        highlights: ["Char Dham", "Sapta Puri", "68 Tirths"],
        image:
            "https://www.tripsavvy.com/thmb/CqvMyrnnVy5fNLFYTr5zW13s-XE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/_DSC0713_Snapseed_Darkroom-819d0b229974460e8141622c4494e2ed.jpg",
        slug: "puri",
        description:
            "One of India’s most revered temples, dedicated to the Jagannath triad.",
    },
    {
        id: 4,
        name: "Ramanathaswamy Temple",
        location: "Rameswaram, Tamil Nadu, India",
        deity: "Lord Shiva",
        altitude: "Sea level",
        river: "Gulf of Mannar coast",
        season: "October – March",
        festivals: ["Maha Shivratri", "Arudra Darshan"],
        facts:
            "One of the 12 Jyotirlingas; also a Char Dham on Pamban Island.",
        highlights: ["Char Dham", "Jyotirlinga", "Shakti Peeth", "68 Tirths"],
        image:
            "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2024/06/Sri-Arulmigu-Ramanathaswamy-Temple.webp?fit=1024%2C576&ssl=1",
        slug: "rameshwaram",
        description:
            "Famed for its long corridors and sacred theerthams (wells).",
    },
    {
        id: 5,
        name: "Kedarnath Temple",
        location: "Uttarakhand, India",
        deity: "Lord Shiva",
        altitude: "3,583 m",
        river: "Mandakini",
        season: "May – October",
        festivals: ["Maha Shivratri", "Badri-Kedar Utsav"],
        facts:
            "A Jyotirlinga and part of Chota Char Dham in the Garhwal Himalayas.",
        highlights: ["Chota Char Dham", "Jyotirlinga", "68 Tirths"],
        image:
            "https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2023/06/16111548/Kedarnath.jpg",
        slug: "kedarnath", // ✅ you already have /kedarnath route
        description:
            "Legend says the Pandavas built the original shrine to atone for their sins.",
    },
    {
        id: 6,
        name: "Gangotri Temple",
        location: "Uttarakhand, India",
        deity: "Goddess Ganga",
        altitude: "3,100 m",
        river: "Bhagirathi",
        season: "May – October",
        festivals: ["Ganga Dussehra", "Diwali"],
        facts: "Source region of the River Ganga; part of Chota Char Dham.",
        highlights: ["Chota Char Dham", "68 Tirths"],
        image:
            "https://www.manchalamushafir.com/gangotri-temple/images/gangotri-temple-beautiful-view.webp",
        slug: "gangotri",
        description:
            "A serene high-altitude shrine on the banks of the Bhagirathi.",
    },
    {
        id: 7,
        name: "Yamunotri Temple",
        location: "Uttarakhand, India",
        deity: "Goddess Yamuna",
        altitude: "3,293 m",
        river: "Yamuna",
        season: "May – October",
        festivals: ["Akshaya Tritiya", "Diwali"],
        facts: "Origin region of the River Yamuna; start of the Chota Char Dham.",
        highlights: ["Chota Char Dham", "68 Tirths"],
        image:
            "https://www.chardham-pilgrimage-tour.com/assets/images/yamunotri-banner3.webp",
        slug: "yamunotri",
        description:
            "Nestled near the Yamunotri glacier, known for hot springs at Janki Chatti.",
    },
    // Jyotirlingas
    {
        id: 8,
        name: "Kashi Vishwanath Temple",
        location: "Varanasi, Uttar Pradesh, India",
        deity: "Lord Shiva",
        altitude: "81 m",
        river: "Ganges River",
        season: "October – March",
        festivals: ["Maha Shivratri", "Dev Deepawali"],
        facts: "One of the most sacred Hindu temples, located on the western bank of the Ganges.",
        highlights: ["Jyotirlinga", "Sapta Puri", "68 Tirths"],
        image: "https://kashiyatra.in/wp-content/uploads/2023/02/kashi-vishwanath.jpg",
        slug: "kashi-vishwanath",
        description: "A key pilgrimage site and one of the twelve Jyotirlingas of Lord Shiva."
    },
    {
        id: 9,
        name: "Somnath Temple",
        location: "Veraval, Gujarat, India",
        deity: "Lord Shiva",
        altitude: "Sea level",
        river: "Arabian Sea coast",
        season: "October - March",
        festivals: ["Maha Shivratri", "Kartik Purnima"],
        facts: "The first among the twelve Jyotirlinga shrines of Shiva; has been rebuilt several times.",
        highlights: ["Jyotirlinga", "68 Tirths"],
        image: "https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/19/b120bdeb7731ab2c08014ad9ab197749_1000x1000.jpg",
        slug: "somnath",
        description: "An ancient and revered temple, an eternal shrine whose glory remains untouched by time."
    },
    {
        id: 10,
        name: "Mahakaleshwar Jyotirlinga",
        location: "Ujjain, Madhya Pradesh, India",
        deity: "Lord Shiva",
        altitude: "491 m",
        river: "Shipra River",
        season: "October – March",
        festivals: ["Maha Shivratri", "Sawari of Mahakal"],
        facts: "The only 'swayambhu' (self-manifested) Jyotirlinga, where the idol is Dakshinamurti (south-facing).",
        highlights: ["Jyotirlinga", "68 Tirths"],
        image: "https://behindeverytemple.org/wp-content/uploads/2020/08/2016_4257efa07eb00e5mahakaleshwar-darshan-bhasm-aarti-guide-and-packages.jpg",
        slug: "mahakaleshwar",
        description: "One of the 7 Moksha-giving cities (Ujjain) and a powerful Jyotirlinga shrine."
    },
    {
        id: 11,
        name: "Mallikarjuna Jyotirlinga",
        location: "Srisailam, Andhra Pradesh, India",
        deity: "Lord Shiva & Goddess Parvati (Bhramaramba)",
        altitude: "457 m",
        river: "Krishna River",
        season: "September – March",
        festivals: ["Maha Shivratri", "Ugadi"],
        facts: "One of the few sites that is both a Jyotirlinga and a Shakti Peeth.",
        highlights: ["Jyotirlinga", "Shakti Peeth", "68 Tirths"],
        image: "https://media.easemytrip.com/media/Deal/DL638608969484118722/SightSeeing/SightSeeingLs15Gk.jpg",
        slug: "mallikarjuna",
        description: "A sacred hill shrine dedicated to Mallikarjuna Swamy and Bhramaramba Devi."
    },
    {
        id: 12,
        name: "Omkareshwar Temple",
        location: "Khandwa, Madhya Pradesh, India",
        deity: "Lord Shiva",
        altitude: "246 m",
        river: "Narmada River",
        season: "October – March",
        festivals: ["Maha Shivratri", "Narmada Jayanti"],
        facts: "Located on an island shaped like the sacred 'Om' symbol in the Narmada River.",
        highlights: ["Jyotirlinga", "68 Tirths"],
        image: "https://i0.wp.com/oneday.travel/wp-content/uploads/one-day-indore-to-omkareshwar-jyotirlinga-sightseeing-tour-package-private-car-header.jpg.jpg?fit=1920%2C1280&ssl=1",
        slug: "omkareshwar",
        description: "The shrine consists of two main temples, one to Omkareshwar and one to Amareshwar."
    },
    {
        id: 13,
        name: "Baidyanath Temple",
        location: "Deoghar, Jharkhand, India",
        deity: "Lord Shiva",
        altitude: "247 m",
        river: "N/A",
        season: "September - March",
        festivals: ["Shravani Mela", "Maha Shivratri"],
        facts: "Also a Shakti Peeth where Sati's heart is said to have fallen. Visited by millions during Shravan.",
        highlights: ["Jyotirlinga", "Shakti Peeth", "68 Tirths"],
        image: "https://baidyanathnagri.com/wp-content/uploads/2022/01/bababaidyabathdham-1.jpg",
        slug: "vaidyanath",
        description: "A temple complex that holds significant importance for devotees of Lord Shiva."
    },
    {
        id: 14,
        name: "Bhimashankar Temple",
        location: "Pune, Maharashtra, India",
        deity: "Lord Shiva",
        altitude: "975 m",
        river: "Source of Bhima River",
        season: "October - March",
        festivals: ["Maha Shivratri"],
        facts: "Located in a lush wildlife sanctuary, famous for its Nagara style of architecture.",
        highlights: ["Jyotirlinga", "68 Tirths"],
        image: "https://tourdefarm.in/wp-content/uploads/2021/01/Bhimashankar-.jpg",
        slug: "bhimashankar",
        description: "A serene and ancient shrine nestled deep within the Western Ghats."
    },
    {
        id: 15,
        name: "Trimbakeshwar Shiva Temple",
        location: "Nashik, Maharashtra, India",
        deity: "Lord Shiva, Vishnu, Brahma",
        altitude: "720 m",
        river: "Source of Godavari River",
        season: "October – March",
        festivals: ["Maha Shivratri", "Kumbh Mela (Nashik)"],
        facts: "Features a unique three-faced lingam representing Brahma, Vishnu, and Shiva.",
        highlights: ["Jyotirlinga", "68 Tirths"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Trimbakeshwar_Temple-Nashik-Maharashtra-1.jpg/1200px-Trimbakeshwar_Temple-Nashik-Maharashtra-1.jpg",
        slug: "trimbakeshwar",
        description: "An ancient Hindu temple in the town of Trimbak, at the source of the holy Godavari river."
    },
    {
        id: 16,
        name: "Grishneshwar Temple",
        location: "Aurangabad, Maharashtra, India",
        deity: "Lord Shiva",
        altitude: "577 m",
        river: "N/A",
        season: "October – March",
        festivals: ["Maha Shivratri"],
        facts: "Located less than a kilometer from the UNESCO World Heritage Ellora Caves.",
        highlights: ["Jyotirlinga"],
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/grishneshwar-temple-chhatrapati-sambhaji-nagar-maharashtra-grishneshwar-temple1-attr-hero?qlt=82&ts=1727010624846",
        slug: "grishneshwar",
        description: "The 12th and final Jyotirlinga, built in the traditional South-Indian temple architecture style."
    },
    {
        id: 17,
        name: "Nageshvara Jyotirlinga",
        location: "Dwarka, Gujarat, India",
        deity: "Lord Shiva",
        altitude: "Sea level",
        river: "Arabian Sea coast",
        season: "October – March",
        festivals: ["Maha Shivratri"],
        facts: "The temple complex features a prominent, large, seated statue of Lord Shiva.",
        highlights: ["Jyotirlinga", "68 Tirths"],
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/nageshwar-Jyotirlinga-temple-02-attr-hero?qlt=82&ts=1726734769619",
        slug: "nageshvara",
        description: "One of the 12 Jyotirlinga shrines mentioned in the Shiva Purana."
    },
    // Shakti Peeths
    {
        id: 18,
        name: "Kamakhya Shakti Peeth",
        location: "Guwahati, Assam, India",
        deity: "Goddess Kamakhya (form of Shakti)",
        altitude: "562 m",
        river: "Nilachal Hill, near Brahmaputra",
        season: "June",
        festivals: ["Ambubachi Mela"],
        facts: "Represents the yoni of Goddess Sati.",
        highlights: ["Shakti Peeth", "68 Tirths"],
        slug: "kamakhya-shakti-peeth",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Kamakhya_Temple_-_DEV_8829.jpg",
        description: "A major pilgrimage site symbolizing the union of Shiva and Shakti."
    },
    {
        id: 19,
        name: "Vimala Shakti Peeth",
        location: "Puri, Odisha, India",
        deity: "Goddess Vimala",
        altitude: "Sea level",
        river: "Near Bay of Bengal",
        season: "October",
        festivals: ["Durga Puja", "Navaratri"],
        facts: "The left breast of Goddess Sati is believed to have fallen.",
        highlights: ["Shakti Peeth"],
        slug: "vimala-shakti-peeth",
        image: "https://temple.yatradham.org/public/Product/temple/temple_Oibqzpb6_202408221428030.jpg",
        description: "Considered one of the oldest Shakti Peethas."
    },
    {
        id: 20,
        name: "Dakshina Kalika Shakti Peeth",
        location: "Kalighat, Kolkata, West Bengal, India",
        deity: "Goddess Kali",
        altitude: "9 m",
        river: "Adiganga (Hooghly tributary)",
        season: "October",
        festivals: ["Kali Puja"],
        facts: "Associated with Sati’s right toe.",
        highlights: ["Shakti Peeth", "68 Tirths"],
        slug: "kalighat-shakti-peeth",
        image: "https://www.trawell.in/admin/images/upload/555418767Kolkata_Kalighat_Temple_Main.jpg",
        description: "A revered shrine of Goddess Kali in Kolkata."
    },
    {
        id: 21,
        name: "Tarapith Shakti Peeth",
        location: "Birbhum, West Bengal, India",
        deity: "Goddess Tara",
        altitude: "71 m",
        river: "Dwarka River",
        season: "All year",
        festivals: ["Kali Puja"],
        facts: "The third eye of Goddess Sati fell after Lord Vishnu dismembered her body.",
        highlights: ["Shakti Peeth", "68 Tirths"],
        slug: "tarapith-shakti-peeth",
        image: "https://img.traveltriangle.com/blog/wp-content/uploads/2024/05/Experience-Spiritual-Gateway-At-Tarapith-Mandir-For-Pure-Delight-And-Divine-Encounter-og.jpg",
        description: "Known for its tantric association with Goddess Tara."
    },
    {
        id: 22,
        name: "Jwalamukhi Shakti Peeth",
        location: "Kangra, Himachal Pradesh, India",
        deity: "Goddess Jwalamukhi",
        altitude: "610 m",
        river: "Beas River nearby",
        season: "March–April",
        festivals: ["Navratri"],
        facts: "The Goddess Sati's tongue is said to have .",
        highlights: ["Shakti Peeth", "68 Tirths"],
        slug: "jwalamukhi-shakti-peeth",
        image: "https://myoksha.com/wp-content/uploads/2016/04/Jwalamukhi-Temple.jpg",
        description: "The goddess is worshiped as eternal flames."
    },
    {
        id: 23,
        name: "Shankari Devi Shakti Peeth",
        location: "Trincomalee, Sri Lanka",
        deity: "Goddess Shankari",
        altitude: "Sea level",
        river: "Indian Ocean",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Sati's Devi groin believed to have fallen.",
        highlights: ["Shakti Peeth"],
        slug: "shankari-shakti-peeth",
        image: "https://hectindiai.s3.ap-south-1.amazonaws.com/0000/119/2024/12/16/alop-shankari-devi-shakti-peeth-mandir-hectindia-1.webp",
        description: "Believed to be the site where part of Sati’s body fell."
    },
    {
        id: 24,
        name: "Sugandha Shakti Peeth",
        location: "Shikarpur, Bangladesh",
        deity: "Goddess Sunanda",
        altitude: "12 m",
        river: "Karatoya River",
        season: "March–April",
        festivals: ["Navratri"],
        facts: "The nose of Goddess Sati fell.",
        highlights: ["Shakti Peeth"],
        slug: "sugandha-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/05/sugandha-devi-shaktipeeth-12.jpg",
        description: "Located near the banks of the Karatoya river."
    },
    {
        id: 25,
        name: "Kanyashram Shakti Peeth",
        location: "Kanyakumari, Tamil Nadu, India",
        deity: "Goddess Kanya Kumari",
        altitude: "Sea level",
        river: "Indian Ocean",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Different traditions associate the Kanyashram Shakti Peeth with different body parts of Sati, including her back, head, or even the back of the heart or tortoise.",
        highlights: ["Shakti Peeth", "68 Tirths"],
        slug: "kanyakumari-shakti-peeth",
        image: "https://www.indiaeasytrip.com/states-of-india/places-to-visit-in-chennai/kanyakumari-shaktipeeth.jpg",
        description: "Represents the virgin form of Goddess Shakti."
    },
    {
        id: 26,
        name: "Nainadevi Shakti Peeth",
        location: "Bilaspur, Himachal Pradesh, India",
        deity: "Goddess Naina Devi",
        altitude: "1177 m",
        river: "Govind Sagar Lake nearby",
        season: "July–August",
        festivals: ["Shravan Ashtami Mela"],
        facts: "Associated with the eyes of Goddess Sati.",
        highlights: ["Shakti Peeth"],
        slug: "naina-devi-shakti-peeth",
        image: "https://srinainadevi.com/wp-content/uploads/2023/07/New-Project-9.png",
        description: "Dedicated to the eyes of Sati."
    },
    {
        id: 27,
        name: "Vishalakshi Shakti Peeth",
        location: "Varanasi, Uttar Pradesh, India",
        deity: "Goddess Vishalakshi",
        altitude: "81 m",
        river: "Ganga",
        season: "August",
        festivals: ["Navratri"],
        facts: "The eyes and earrings of Goddess Sati fell.",
        highlights: ["Shakti Peeth"],
        slug: "vishalakshi-shakti-peeth",
        image: "https://content.jdmagicbox.com/v2/comp/bangalore/i4/080pxx80.xx80.180223204225.d5i4/catalogue/vishalakshi-mantap-yediyur-bangalore-meditation-centres-7je7n8c870.jpg",
        description: "Represents the earrings of Sati."
    },
    {
        id: 28,
        name: "Guhyeshwari Shakti Peeth",
        location: "Kathmandu, Nepal",
        deity: "Goddess Guhyeshwari",
        altitude: "1400 m",
        river: "Bagmati River",
        season: "October",
        festivals: ["Dashain", "Navratri"],
        facts: "The Guhyeshwari Shaktipeeth is a significant Hindu temple in Kathmandu, Nepal, located on the southern bank of the Bagmati River, near the Pashupatinath Temple.",
        highlights: ["Shakti Peeth"],
        slug: "guhyeshwari-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/05/guhyeshwari-shaktipeeth-7.jpg",
        description: "Believed to be the site where Sati’s knees fell."
    },
    {
        id: 29,
        name: "Bhadrakali Shakti Peeth",
        location: "Kurukshetra, Haryana, India",
        deity: "Goddess Bhadrakali",
        altitude: "260 m",
        river: "Saraswati River (ancient)",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with the anklet of Sati.",
        highlights: ["Shakti Peeth"],
        slug: "bhadrakali-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/05/bhadrakali-shaktipeeth-kurukshetra-13.jpg",
        description: "One of the key Shakti Peeths in Haryana."
    },
    {
        id: 30,
        name: "Chhinmastika Shakti Peeth",
        location: "Chintpurni, Himachal Pradesh, India",
        deity: "Goddess Chhinnamastika",
        altitude: "940 m",
        river: "Shivalik Hills region",
        season: "July",
        festivals: ["Navratri"],
        facts: "Represents the feet of Goddess Sati.",
        highlights: ["Shakti Peeth"],
        slug: "chintpurni-shakti-peeth",
        image: "https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/chhinnamasta-temple-2.jpg",
        description: "The shrine is dedicated to the self-decapitated form of the Goddess."
    },
    {
        id: 31,
        name: "Kalmadhav Shakti Peeth",
        location: "Amarakantak, Madhya Pradesh, India",
        deity: "Goddess Kali",
        altitude: "1048 m",
        river: "Narmada River origin",
        season: "October–February",
        festivals: ["Navratri"],
        facts: "The part of Goddess Sati's body believed to have fallen is her right arm.",
        highlights: ["Shakti Peeth"],
        slug: "kalmadhav-shakti-peeth",
        image: "https://devotionalindia.com/wp-content/uploads/2025/08/amarkantak-shkatipeeth.webp",
        description: "One of the Shakti Peeths in Madhya Pradesh."
    },
    {
        id: 32,
        name: "Shravasti Shakti Peeth",
        location: "Shravasti, Uttar Pradesh, India",
        deity: "Goddess Sharvani",
        altitude: "120 m",
        river: "Rapti River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s right hand.",
        highlights: ["Shakti Peeth"],
        slug: "shravasthi-shakti-peeth",
        image: "https://content.jdmagicbox.com/comp/sravasti/m3/9999p5263.5263.191121001630.x5m3/catalogue/vibhuti-nath-temple-sravasti-temples-7nW9eR3nQb.jpg",
        description: "An ancient site linked with both Hinduism and Buddhism."
    },
    {
        id: 33,
        name: "Jalandhar Shakti Peeth",
        location: "Jalandhar, Punjab, India",
        deity: "Goddess Tripurmalini",
        altitude: "228 m",
        river: "Sutlej River nearby",
        season: "October",
        festivals: ["Navratri"],
        facts: "Associated with the breast of Sati.",
        highlights: ["Shakti Peeth"],
        slug: "jalandhar-shakti-peeth",
        image: "https://images.bhaskarassets.com/web2images/521/2024/04/14/jalandhar-shaktipeeth_1713093870.gif",
        description: "The Devi Talab Mandir is regarded as the Shakti Peeth here."
    },
    {
        id: 34,
        name: "Vibhasha Shakti Peeth",
        location: "Tamluk, West Bengal, India",
        deity: "Goddess Kapalini",
        altitude: "12 m",
        river: "Rupnarayan River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s left ankle.",
        highlights: ["Shakti Peeth"],
        slug: "vibhasha-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/05/kapalini-shaktipeeth-6.jpg",
        description: "An important Shakti Peeth in West Bengal."
    },
    {
        id: 35,
        name: "Ratnavali Shakti Peeth",
        location: "Khanakul, Hooghly, West Bengal, India",
        deity: "Goddess Kumari",
        altitude: "15 m",
        river: "Hooghly River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with the right shoulder of Sati.",
        highlights: ["Shakti Peeth"],
        slug: "ratnavali-shakti-peeth",
        image: "https://lightuptemples.com/wp-content/uploads/temple/profile_image/ratnavali-shakti-peeth-temple-anandamayee-temple.jpg",
        description: "A revered Shakti Peeth in Hooghly district."
    },
    {
        id: 36,
        name: "Prayag Shakti Peeth",
        location: "Allahabad (Prayagraj), Uttar Pradesh, India",
        deity: "Goddess Lalita",
        altitude: "98 m",
        river: "Confluence of Ganga, Yamuna, Saraswati",
        season: "January",
        festivals: ["Magh Mela", "Kumbh Mela"],
        facts: "The Prayag Shakti Peeth is where the fingers of Goddess Sati's hands fell. The Prayagraj Shakti Peeth is actually made up of three important temples: Akshayavat, Mirapur, and Alopi.",
        highlights: ["Shakti Peeth"],
        slug: "prayag-shakti-peeth",
        image: "https://media.mahakumbh.in/media/2023/11/01085115/Alopidevi-Temple-Prayagraj-mahakumbh.in5_.webp",
        description: "Associated with the fingers of Goddess Sati."
    },
    {
        id: 37,
        name: "Kanchi Shakti Peeth",
        location: "Kanchipuram, Tamil Nadu, India",
        deity: "Goddess Kamakshi",
        altitude: "83 m",
        river: "Palar River",
        season: "February–March",
        festivals: ["Panguni Uthiram", "Navratri"],
        facts: "It is believed that the navel (Nabhi) of the Goddess Sati had fallen here at this spot when Lord Shiva was doing Tandava (destructive dance form) carrying the body of the goddess.",
        highlights: ["Shakti Peeth", "68 Tirths"],
        slug: "kanchi-shakti-peeth",
        image: "https://behindeverytemple.org/wp-content/uploads/2020/09/kamakshi-amman-temple-kanchipuram.jpg",
        description: "The shrine is associated with the navel of Sati."
    },
    {
        id: 38,
        name: "Kurukshetra Shakti Peeth",
        location: "Kurukshetra, Haryana, India",
        deity: "Goddess Savitri",
        altitude: "260 m",
        river: "Saraswati River (ancient)",
        season: "October",
        festivals: ["Navratri"],
        facts: "Linked with Ankle.",
        highlights: ["Shakti Peeth", "68 Tirths"],
        slug: "kurukshetra-shakti-peeth",
        image: "https://www.pilgrimaide.com/image/cache/catalog/Blogs/Bhadrakali%20Temple,%20Maa%20Bhadrakali%20Shaktipeeth-600x315h.jpg",
        description: "A sacred Shakti Peeth of Haryana."
    },
    {
        id: 39,
        name: "Mithila Shakti Peeth",
        location: "Janakpur, Nepal",
        deity: "Goddess Uma",
        altitude: "74 m",
        river: "Kamala River",
        season: "All year",
        festivals: ["Vivaha Panchami", "Navratri"],
        facts: "Associated with Sati’s left shoulder.",
        highlights: ["Shakti Peeth"],
        slug: "mithila-shakti-peeth",
        image: "https://www.templepurohit.com/wp-content/uploads/2015/02/Mithila-Shaktipeeth.jpg",
        description: "A prominent Shakti Peeth in Mithila region."
    },
    {
        id: 40,
        name: "Bhabanipur Shakti Peeth",
        location: "Bogura, Bangladesh",
        deity: "Goddess Aparna",
        altitude: "18 m",
        river: "Karatoya River",
        season: "March",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s left anklet.",
        highlights: ["Shakti Peeth"],
        slug: "bhabanipur-shakti-peeth",
        image: "https://www.alightindia.com/cdn/uploads/postimages/ORIGINAL/1200px-Main_Temple_of_Bhawanipur%20%20%20Wikidata--df9ac6.jpg",
        description: "One of the most important Shakti Peeths in Bangladesh."
    },
    {
        id: 41,
        name: "Ratnapura Shakti Peeth",
        location: "Shivaharkaray, Sindh, Pakistan",
        deity: "Goddess Mahishasuramardini",
        altitude: "15 m",
        river: "Karoonjhar Hills nearby",
        season: "All year",
        festivals: ["Navratri"],
        facts: "One of the rare Shakti Peeths in Pakistan.",
        highlights: ["Shakti Peeth"],
        slug: "shivaharkaray-shakti-peeth",
        image: "https://thehindutales.com/wp-content/uploads/2025/03/shivaharkaray-shakti-peeth-temple-rare-footage-300x222.jpeg",
        description: "Associated with the head of Sati."
    },
    {
        id: 42,
        name: "Hinglaj Mata Shakti Peeth",
        location: "Balochistan, Pakistan",
        deity: "Goddess Hinglaj Mata",
        altitude: "60 m",
        river: "Hingol River",
        season: "April",
        festivals: ["Hinglaj Yatra"],
        facts: "One of the most visited pilgrimage sites in Pakistan.A small part of the upper head of Sati is believed to have fallen at Hingula or Hinglaj and is thus considered the most important of the 51 Shakti Peeths.",
        highlights: ["Shakti Peeth", "68 Tirths"],
        slug: "hinglaj-shakti-peeth",
        image: "https://thenewsmill.com/wp-content/uploads/2019/10/Hinglaj-Mata-temple-in-Pakistans-Balochistan-province.jpeg",
        description: "Associated with the head of Goddess Sati."
    },
    {
        id: 43,
        name: "Mansa Shakti Peeth",
        location: "Monghyr, Bihar, India",
        deity: "Goddess Shakti",
        altitude: "52 m",
        river: "Ganga",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s right thigh.",
        highlights: ["Shakti Peeth"],
        slug: "mansa-shakti-peeth",
        image: "https://static.punjabkesari.in/multimedia/2017_4image_11_58_198805997mansa_pic3.jpg",
        description: "A significant Shakti Peeth of Bihar."
    },
    {
        id: 44,
        name: "Jessoreswari Shakti Peeth",
        location: "Jessore, Bangladesh",
        deity: "Goddess Jeshori",
        altitude: "20 m",
        river: "Kapotaksha River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Represents the palms of Sati.",
        highlights: ["Shakti Peeth"],
        slug: "jessoreswari-shakti-peeth",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/22/%E0%A6%AF%E0%A6%B6%E0%A7%8B%E0%A6%B0%E0%A7%87%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A7%80_%E0%A6%95%E0%A6%BE%E0%A6%B2%E0%A7%80_%E0%A6%AE%E0%A6%A8%E0%A7%8D%E0%A6%A6%E0%A6%BF%E0%A6%B0%2C_%E0%A6%88%E0%A6%B6%E0%A7%8D%E0%A6%AC%E0%A6%B0%E0%A7%80%E0%A6%AA%E0%A7%81%E0%A6%B0%2C_%E0%A6%B6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%AE%E0%A6%A8%E0%A6%97%E0%A6%B0%2C_%E0%A6%B8%E0%A6%BE%E0%A6%A4%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A7%80%E0%A6%B0%E0%A6%BE%2C_%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A5%A4.jpg",
        description: "A highly revered Shakti Peeth in Bangladesh."
    },
    {
        id: 45,
        name: "Attahas Shakti Peeth",
        location: "Birbhum, West Bengal, India",
        deity: "Goddess Phullara",
        altitude: "75 m",
        river: "Bakreshwar River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with the lips of Sati.",
        highlights: ["Shakti Peeth"],
        slug: "attahas-shakti-peeth",
        image: "https://i0.wp.com/traveldreams.live/wp-content/uploads/2020/11/17.jpg?resize=795%2C720&ssl=1",
        description: "One of the four major Shakti Peeths in Bengal."
    },
    {
        id: 46,
        name: "Bakreshwar Shakti Peeth",
        location: "Birbhum, West Bengal, India",
        deity: "Goddess Mahishmardini",
        altitude: "85 m",
        river: "Bakreshwar River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Linked with Sati’s portion of brain.",
        highlights: ["Shakti Peeth"],
        slug: "bakreshwar-shakti-peeth",
        image: "https://www.pilgrimaide.com/image/cache/catalog/Blogs/Bakreshwar%20Devi%20Temple-600x315h.jpg",
        description: "A holy site in Birbhum, Bengal."
    },
    {
        id: 47,
        name: "Magadh Shakti Peeth",
        location: "Patna, Bihar, India",
        deity: "Goddess Sarvanandkari",
        altitude: "53 m",
        river: "Ganga",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s right thigh.",
        highlights: ["Shakti Peeth"],
        slug: "magadh-shakti-peeth",
        image: "https://devotionalindia.com/wp-content/uploads/2025/07/images-7.jpeg",
        description: "One of the Shakti Peeths located in Bihar."
    },
    {
        id: 48,
        name: "Ujjaini Shakti Peeth",
        location: "Ujjain, Madhya Pradesh, India",
        deity: "Goddess Avanti",
        altitude: "492 m",
        river: "Shipra River",
        season: "April",
        festivals: ["Mahashivaratri", "Navratri"],
        facts: "Located within Mahakaleshwar Jyotirlinga premises.",
        highlights: ["Shakti Peeth"],
        slug: "ujjaini-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/04/kal-bhirav-temple-avanti-shaktipeeth-3.jpg",
        description: "The shrine is associated with the elbow of Sati."
    },
    {
        id: 49,
        name: "Kirit Shakti Peeth",
        location: "Kiritkona, West Bengal, India",
        deity: "Goddess Vimala",
        altitude: "25 m",
        river: "Ajay River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s crown.",
        highlights: ["Shakti Peeth"],
        slug: "kirit-shakti-peeth",
        image: "https://faujitoursandtravels.com/wp-content/uploads/2024/10/katyayani-temple.jpg",
        description: "One of the important Shakti Peeths in West Bengal."
    },
    {
        id: 50,
        name: "Maa Mangala Shakti Peeth",
        location: "Jajpur, Odisha, India",
        deity: "Goddess Mangala",
        altitude: "20 m",
        river: "Baitarani River",
        season: "March–April",
        festivals: ["Durga Puja", "Navratri"],
        facts: "Associated with Sati’s throat.",
        highlights: ["Shakti Peeth"],
        slug: "mangala-shakti-peeth",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/2e/2b/79/mangla-gauri-temple.jpg?w=1200&h=-1&s=1",
        description: "A major Shakti shrine in Odisha."
    },
    {
        id: 51,
        name: "Lanka Shakti Peeth",
        location: "Sri Lanka (exact place debated)",
        deity: "Goddess Indrakshi",
        altitude: "Sea level",
        river: "Indian Ocean",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s feet.",
        highlights: ["Shakti Peeth"],
        slug: "lanka-shakti-peeth",
        image: "https://www.templefolks.com/templefolks_admin/public/uploads/products/Shankari-Devi-temple-1912288.jpg",
        description: "Believed to be one of the Peethas outside India."
    },
    {
        id: 52,
        name: "Jalpa Shakti Peeth",
        location: "Jalpaiguri, West Bengal, India",
        deity: "Goddess Jayanti",
        altitude: "89 m",
        river: "Teesta River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Linked with Sati’s left toe.",
        highlights: ["Shakti Peeth"],
        slug: "jalpa-shakti-peeth",
        image: "https://etvbharatimages.akamaized.net/etvbharat/prod-images/768-512-9267005-thumbnail-3x2-i.jpg",
        description: "A holy Shakti Peeth located in North Bengal."
    },
    {
        id: 53,
        name: "Ramgiri Shakti Peeth",
        location: "Amarakantak, Madhya Pradesh, India",
        deity: "Goddess Kalika",
        altitude: "1048 m",
        river: "Narmada River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s right breast.",
        highlights: ["Shakti Peeth"],
        slug: "ramgiri-shakti-peeth",
        image: "https://www.alightindia.com/cdn/uploads/postimages/SMALL/kam1--311752.jpg",
        description: "An ancient site in Madhya Pradesh linked with Shakti Peethas."
    },
    {
        id: 54,
        name: "Tripura Sundari Shakti Peeth",
        location: "Udaipur, Tripura, India",
        deity: "Goddess Tripura Sundari",
        altitude: "49 m",
        river: "Gomati River",
        season: "October",
        festivals: ["Diwali", "Navratri"],
        facts: "One of the 51 Maha Shakti Peethas.",
        highlights: ["Shakti Peeth"],
        slug: "tripura-sundari-shakti-peeth",
        image: "https://content.jdmagicbox.com/comp/south_tripura/c4/9999p3823.3823.190911011601.d8c4/catalogue/shri-tripura-sundari-shakti-peeth-temple-south-tripura-temples-o6m9jjrdv2.jpg",
        description: "Also known as Matabari Temple, associated with Sati’s right foot."
    },
    {
        id: 55,
        name: "Chitrakoot Shakti Peeth",
        location: "Chitrakoot, Madhya Pradesh, India",
        deity: "Goddess Shivani",
        altitude: "207 m",
        river: "Mandakini River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Linked with Sati’s right breast.",
        highlights: ["Shakti Peeth"],
        slug: "chitrakoot-shakti-peeth",
        image: "https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2020/11/Hanuman-Dhara-Chitrakoot.jpg?resize=800%2C600&ssl=1",
        description: "A sacred Peeth in Madhya Pradesh."
    },
    {
        id: 56,
        name: "Panchsagar Shakti Peeth",
        location: "Varanasi, Uttar Pradesh, India",
        deity: "Goddess Varahi",
        altitude: "81 m",
        river: "Ganga",
        season: "All year",
        festivals: ["Navratri"],
        facts: " Associated  with Sati’s lower teeth.",
        highlights: ["Shakti Peeth"],
        slug: "panchsagar-shakti-peeth",
        image: "https://www.templepurohit.com/wp-content/uploads/2015/07/Panchsagar-Shakti-Peeth.jpg",
        description: "One of the Shakti Peethas in Kashi."
    },
    {
        id: 57,
        name: "Shringverpur Shakti Peeth",
        location: "Prayagraj, Uttar Pradesh, India",
        deity: "Goddess Lalita",
        altitude: "98 m",
        river: "Ganga",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s lips.",
        highlights: ["Shakti Peeth"],
        slug: "shringverpur-shakti-peeth",
        image: "https://www.thekumbhyatra.com/wp-content/uploads/2025/04/shringverpur-dham.webp",
        description: "A revered Shakti Peeth near Prayagraj."
    },
    {
        id: 58,
        name: "Goddess Bahula Shakti Peeth",
        location: "Ketugram, West Bengal, India",
        deity: "Goddess Bahula",
        altitude: "30 m",
        river: "Ajay River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati's left arm.",
        highlights: ["Shakti Peeth"],
        slug: "bahula-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/04/Gandaki-Chandi-Muktinath-shaktipeeth-temple-4.jpg",
        description: "One of the important Shakti Peeths of Bengal."
    },
    {
        id: 59,
        name: "Gandaki Shakti Peeth",
        location: "Pokhara, Nepal",
        deity: "Goddess Maheshwari",
        altitude: "822 m",
        river: "Gandaki River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s cheeks.",
        highlights: ["Shakti Peeth"],
        slug: "gandaki-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/04/Gandaki-Chandi-Muktinath-shaktipeeth-temple-4.jpg",
        description: "A sacred Shakti Peeth in Nepal."
    },
    {
        id: 60,
        name: "Godavari Shakti Peeth",
        location: "Kotilingeshwar, Andhra Pradesh, India",
        deity: "Goddess Vishweshwari",
        altitude: "350 m",
        river: "Godavari River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s left cheek.",
        highlights: ["Shakti Peeth"],
        slug: "godavari-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/05/umakotilingeswar-rakini-shaktipeeth-3.jpg",
        description: "A major Shakti Peeth located near the Godavari river."
    },
    {
        id: 61,
        name: "Vrindavan Shakti Peeth",
        location: "Vrindavan, Uttar Pradesh, India",
        deity: "Goddess Uma",
        altitude: "170 m",
        river: "Yamuna",
        season: "All year",
        festivals: ["Holi", "Navratri"],
        facts: "Linked with Sati’s hair.",
        highlights: ["Shakti Peeth", "68 Tirths"],
        slug: "vrindavan-shakti-peeth",
        image: "https://mathuravrindavantourism.co.in/images/places-to-visit/headers/katyayani-shakti-peeth-uma-shakti-peeth-vrindavan-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
        description: "A Shakti Peeth in the land of Krishna."
    },
    {
        id: 62,
        name: "Manibandh Shakti Peeth",
        location: "Pushkar, Rajasthan, India",
        deity: "Goddess Gayatri",
        altitude: "510 m",
        river: "Pushkar Lake",
        season: "October–November",
        festivals: ["Navratri", "Kartik Purnima"],
        facts: "Associated with Sati’s wrist.",
        highlights: ["Shakti Peeth"],
        slug: "manibandh-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/05/manibandh-gayatrin-shaktipeeth-2.jpg",
        description: "A prominent Shakti Peeth in Rajasthan."
    },
    {
        id: 63,
        name: "Goddess Kalika Shakti Peeth",
        location: "Ujjain, Madhya Pradesh, India",
        deity: "Goddess Harsiddhi",
        altitude: "492 m",
        river: "Shipra River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Linked with Sati’s upper lip.",
        highlights: ["Shakti Peeth"],
        slug: "kalika-shakti-peeth",
        image: "https://www.trawell.in/admin/images/upload/891041148Harsiddhi_Mata_Temple.jpg",
        description: "Harsiddhi Mata Temple is counted among the Shakti Peethas."
    },
    {
        id: 64,
        name: "Karnat Shakti Peeth",
        location: "Gaya, Bihar, India",
        deity: "Goddess Sarvamangala",
        altitude: "111 m",
        river: "Phalgu River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s ears.",
        highlights: ["Shakti Peeth"],
        slug: "karnat-shakti-peeth",
        image: "https://www.40kmph.com/wp-content/uploads/2014/10/Maa-Mangla-Gauri-Temple-Mangla-Gauri-Mandir-Road-Gaya-Bihar.jpg",
        description: "A sacred Shakti Peeth in Gaya."
    },
    {
        id: 65,
        name: "Mahamaya Shakti Peeth",
        location: "Amarnath, Jammu & Kashmir, India",
        deity: "Goddess Mahamaya",
        altitude: "3888 m",
        river: "Amravati River",
        season: "July–August",
        festivals: ["Navratri"],
        facts: "Associated with Sati’s throat.",
        highlights: ["Shakti Peeth"],
        slug: "mahamaya-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/04/mahamaya-shaktipeeth-amarnath-10.jpg",
        description: "One of the highest altitude Shakti Peeths."
    },
    {
        id: 66,
        name: "Shona Shakti Peeth",
        location: "Sonbhadra, Uttar Pradesh, India",
        deity: "Goddess Narmada",
        altitude: "100 m",
        river: "Son River",
        season: "All year",
        festivals: ["Navratri"],
        facts: "Associated with Sati's left ribs",
        highlights: ["Shakti Peeth"],
        slug: "shona-shakti-peeth",
        image: "https://thetempleguru.com/wp-content/uploads/2023/05/shondesh-shaktipeeth-narmada-udgam-amarkantak-6.jpg",
        description: "The final of the 51 Shakti Peethas."
    },
    // Chitrakoot Dham
    {
    id: 67,
    name: "Kamadgiri Temple",
    location: "Kamadgiri Hill, Chitrakoot, Madhya Pradesh, India",
    deity: "Lord Rama (Kamtanath)",
    altitude: "207 m",
    river: "Mandakini River",
    season: "October - March",
    festivals: ["Navratri", "Diwali"],
    facts: "Believed to be the original Chitrakoot; the epicenter of Lord Rama's exile.",
    highlights: ["Chitrakoot Dham"],
    image: "https://thetempleguru.com/wp-content/uploads/2023/09/Kamadgiri-temple-Chitrakoot-4.jpg",
    slug: "kamadgiri-temple",
    description: "Center of spiritual power in Chitrakoot where Lord Rama is believed to have stayed during his exile."
  },
  {
    id: 118,
    name: "Hanuman Dhara",
    location: "Chitrakoot, Madhya Pradesh, India",
    deity: "Lord Hanuman",
    altitude: "Hilltop site",
    river: "Natural spring",
    season: "October - March",
    festivals: ["Hanuman Jayanti"],
    facts: "Natural spring and shrine linked to Hanuman’s penance.",
    highlights: ["Chitrakoot Dham"],
    image: "https://staticimg.amarujala.com/assets/images/2021/12/22/hanuman-dhara-chitrakoot_1640162250.jpeg",
    slug: "hanuman-dhara",
    description: "A hilltop shrine with a natural spring, believed to have cooled Hanuman after burning Lanka."
  },
  {
    id: 119,
    name: "Gupt Godavari",
    location: "Chitrakoot, Madhya Pradesh, India",
    deity: "Lord Rama",
    altitude: "207 m",
    river: "Underground springs",
    season: "October - March",
    festivals: ["Ram Navami"],
    facts: "Cave shrine with water streams used by Rama and Lakshman.",
    highlights: ["Chitrakoot Dham"],
    image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Gupt_godavari.jpg",
    slug: "gupt-godavari",
    description: "Sacred cave complex with flowing water, associated with secret gatherings of Rama and Lakshman during exile."
  },
  {
    id: 120,
    name: "Sati Anusuya Ashram",
    location: "Chitrakoot, Madhya Pradesh, India",
    deity: "Sati Anusuya",
    altitude: "207 m",
    river: "Nearby spring",
    season: "October - March",
    festivals: ["Dattatreya Jayanti", "Navratri"],
    facts: "Ashram where Anusuya performed penance and raised Dattatreya.",
    highlights: ["Chitrakoot Dham"],
    image: "https://thechitrakoot.com/wp-content/uploads/2020/07/IMG_20180201_164203.jpg",
    slug: "sati-anusuya-ashram",
    description: "A serene ashram dedicated to Sati Anusuya, revered for her penance and as the birthplace of Dattatreya."
  },
  {
    id: 121,
    name: "Bharat Milap Temple",
    location: "Chitrakoot, Madhya Pradesh, India",
    deity: "Lord Bharat",
    altitude: "207 m",
    river: "Near Mandakini River",
    season: "October - March",
    festivals: ["Bharat Milap"],
    facts: "Marks the emotional reunion of Bharat and Rama during exile.",
    highlights: ["Chitrakoot Dham"],
    image: "https://cdn1.prayagsamagam.com/media/2023/06/01152319/Bharat-Milap-Temple.webp",
    slug: "bharat-milap-temple",
    description: "This sacred site symbolizes sacrifice and duty, with imprints believed to be of Lord Rama’s and Bharat’s feet."
  },
  {
    id: 122,
    name: "Ram Ghat",
    location: "Chitrakoot, Madhya Pradesh, India",
    deity: "Lord Rama",
    altitude: "207 m",
    river: "Mandakini River",
    season: "October - March",
    festivals: ["Kartik Purnima", "Ram Navami"],
    facts: "Holy ghat where Rama, Sita, and Lakshman are believed to have bathed.",
    highlights: ["Chitrakoot Dham"],
    image: "https://cdn-iefih.nitrocdn.com/rdrKwvjowWkFerxYJkmTlsEpOYvgNPuc/assets/images/optimized/rev-ccc4f4f/thechitrakoot.com/wp-content/uploads/2020/07/Ramghat-filter-1920.jpg",
    slug: "ram-ghat",
    description: "A revered bathing ghat on the Mandakini River, famous for evening aarti and boat rituals."
  },
  {
    id: 123,
    name: "Janaki Kund",
    location: "Chitrakoot, Madhya Pradesh, India",
    deity: "Goddess Sita",
    altitude: "207 m",
    river: "Mandakini River",
    season: "October - March",
    festivals: ["Sita Navami", "Diwali"],
    facts: "Tranquil river spot where Sita is believed to have bathed during exile.",
    highlights: ["Chitrakoot Dham"],
    image: "https://cdn1.prayagsamagam.com/media/2023/05/12200020/Janki-kund-chitrakoot-1.webp",
    slug: "janaki-kund",
    description: "A serene pool along the Mandakini River, connected to legends of Goddess Sita’s daily rituals."
  },
    // Mathura/Vrindavan
    {
        id: 68,
        name: "Banke Bihari Temple",
        location: "Vrindavan, Uttar Pradesh, India",
        deity: "Lord Krishna",
        altitude: "179 m",
        river: "Yamuna River",
        season: "October - April",
        festivals: ["Janmashtami", "Holi", "Radhashtami"],
        facts: "The idol's divine gaze is believed to be so powerful that the curtain is drawn frequently.",
        highlights: ["Mathura/Vrindavan", "Sapta Puri"],
        image: "https://www.bihariji.org/assets/img/biharijiTemple.jpeg",
        slug: "vrindavan",
        description: "A famous temple in Vrindavan, the heart of the Braj region associated with Lord Krishna."
    },
    {
        id: 69,
        name: "Prem Mandir",
        location: "Vrindavan, Uttar Pradesh, India",
        deity: "Radha Krishna & Sita Ram",
        altitude: "179 m",
        river: "Yamuna River",
        season: "October - April",
        festivals: ["Janmashtami", "Radhashtami"],
        facts: "A modern temple made of Italian marble, famous for its incredible lighting and musical fountain shows in the evening.",
        highlights: ["Mathura/Vrindavan", "Other Famous Dhams"],
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/70/2c/08/lightings-at-prem-mandir.jpg?w=1200&h=1200&s=1",
        slug: "prem-mandir",
        description: "A stunning spiritual complex dedicated to divine love, depicting scenes from the lives of Radha Krishna."
    },
    {
        id: 70,
        name: "Shri Krishna Janmabhoomi Temple",
        location: "Mathura, Uttar Pradesh, India",
        deity: "Lord Krishna",
        altitude: "174 m",
        river: "Yamuna",
        season: "All year",
        festivals: ["Janmashtami", "Holi", "Diwali"],
        facts: "Believed to be the birthplace of Lord Krishna.",
        highlights: ["Mathura/Vrindavan", "Other Famous Dhams"],
        slug: "krishna-janmabhoomi-temple",
        image: "https://www.christiedigital.com/globalassets/press-releases/archive/2023/sri-krishna/sri-krishna_slider1.jpg",
        description: "The most revered temple in Mathura dedicated to Lord Krishna’s birthplace."
    },
    {
        id: 71,
        name: "Dwarkadhish Temple",
        location: "Mathura, Uttar Pradesh, India",
        deity: "Lord Dwarkadhish (Krishna)",
        altitude: "176 m",
        river: "Yamuna",
        season: "All years",
        highlight: ["Janmashtami", "Jhulan Yatra"],
        facts: "Famous for its beautiful Rajasthani-style architecture.",
        highlights: ["Mathura/Vrindavan", "Other Famous Dhams"],
        slug: "dwarkadhish-temple",
        image: "https://www.holidify.com/images/cmsuploads/compressed/44740200661_87a6f2d457_b_20190409174705_20190409174732.jpg",
        description: "A grand temple dedicated to Lord Krishna, known for its intricate architecture."
    },
    {
        id: 72,
        name: "ISKCON Krishna Balaram Mandir",
        location: "Vrindavan, Uttar Pradesh, India",
        deity: "Krishna and Balaram",
        altitude: "171 m",
        river: "Yamuna",
        season: "All year",
        festivals: ["Janmashtami", "Gaura Purnima"],
        facts: "Center of Iskcon movement, attracts devotees worldwide.",
        highlights: ["Mathura/Vrindavan", "Other Famous Dhams"],
        slug: "iskcon-krishna-balaram-mandir",
        image: "https://mathuravrindavantourism.co.in/images/places-to-visit/headers/krishna-balaram-mandir-iskcon-vrindavan-mathura-indian-tourism-header-small.jpg",
        description: "A prominent ISKCON temple and spiritual hub in Vrindavan."
    },
    {
        id: 73,
        name: "Radha Raman Temple",
        location: "Vrindavan, Uttar Pradesh, India",
        deity: "Radha Raman (Krishna in shaligram form)",
        altitude: "173 m",
        river: "Yamuna",
        season: "All year",
        festivals: ["Janmashtami", "Radhashtami"],
        facts: "Established by Gopal Bhatta Goswami, one of the six Goswamis of Vrindavan.",
        highlights: ["Mathura/Vrindavan", "Other Famous Dhams"],
        slug: "radha-raman-temple",
        image: "https://vrindavantoday.in/wp-content/uploads/2021/10/DSCN2451.jpg",
        description: "A historic temple with self-manifested shaligram deity of Krishna."
    },
    {
        id: 74,
        name: "Shahji Temple",
        location: "Vrindavan, Uttar Pradesh, India",
        deity: "Lord Krishna as Chhote Radha Raman",
        altitude: "174 m",
        river: "Yamuna",
        season: "All year",
        festivals: ["Janmashtami", "Holi"],
        facts: "Known for its 12 magnificent marble pillars and artistic ceilings.",
        highlights: ["Mathura/Vrindavan"],
        slug: "shahji-temple",
        image: "https://mathuravrindavantourism.co.in/images/places-to-visit/headers/shahji-temple-mathura-indian-tourism-entry-fee-timings-holidays-reviews-header.jpg",
        description: "A famous temple with unique architecture and art."
    },
    {
        id: 75,
        name: "Govind Dev Ji Temple",
        location: "Vrindavan, Uttar Pradesh, India",
        deity: "Lord Govind Dev (Krishna)",
        altitude: "175 m",
        river: "Yamuna",
        season: "All year",
        festivals: ["Janmashtami", "Radhashtami"],
        facts: "Built by Raja Man Singh of Amber in 1590 AD.",
        highlights: ["Mathura/Vrindavan"],
        slug: "govind-dev-ji-temple",
        image: "https://www.trawell.in/admin/images/upload/941139133Vrindavan_Govind_Dev_Temple_Main.jpg",
        description: "A historic red sandstone temple with Mughal-style architecture."
    },
    // 7 Moksha Givers (Sapta Puri)
    {
        id: 76,
        name: "Ayodhya Dham",
        location: "Ayodhya, Uttar Pradesh, India",
        deity: "Lord Rama",
        altitude: "93 m",
        river: "Sarayu River",
        season: "September - March",
        festivals: ["Ram Navami", "Deepotsav (Diwali)"],
        facts: "The birthplace of Lord Rama (Ram Janmabhoomi) and one of the seven sacred cities for salvation.",
        highlights: ["Sapta Puri", "68 Tirths", "7 Moksha Givers"],
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg/1200px-Ayodhya_Ram_Mandir_Inauguration_Day_Picture.jpg",
        slug: "ayodhya",
        description: "An ancient city of immense religious importance, central to the epic Ramayana."
    },
    {
        id: 77,
        name: "Haridwar",
        location: "Haridwar, Uttarakhand, India",
        deity: "Goddess Ganga",
        altitude: "314 m",
        river: "Ganges River",
        season: "October - April",
        festivals: ["Kumbh Mela", "Ganga Aarti", "Kanwar Mela"],
        facts: "Meaning 'Gateway to God', it's where the Ganges emerges from the mountains onto the plains.",
        highlights: ["Sapta Puri", "68 Tirths", "7 Moksha Givers"],
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/har-ki-pauri-haridwar-uttarakhand-1-attr-hero?qlt=82&ts=1726645951242",
        slug: "haridwar",
        description: "One of the holiest cities, famous for the evening Ganga Aarti at Har Ki Pauri."
    },
    {
        id: 78,
        name: "Kanchipuram Temples",
        location: "Kanchipuram, Tamil Nadu, India",
        deity: "Multiple (Shiva & Vishnu)",
        altitude: "83 m",
        river: "Vegavathi River",
        season: "October - March",
        festivals: ["Brahmotsavam", "Maha Shivratri"],
        facts: "Known as the 'City of a Thousand Temples', it's one of the seven sacred Moksha-giving cities.",
        highlights: ["Sapta Puri", "68 Tirths", "7 Moksha Givers"],
        image: "https://temple.yatradham.org/public/Product/temple/temple_spkb15CZ_202408251324480.jpg",
        slug: "kanchipuram",
        description: "Famous for temples like Kailasanathar, Ekambareswarar, and Varadaraja Perumal."
    },
    {
        id: 79,
        name: "Mathura",
        location: "Uttar Pradesh, India",
        deity: "Lord Krishna",
        altitude: "174 m",
        river: "Yamuna",
        season: "All year",
        festivals: ["Janmashtami", "Holi", "Govardhan Puja"],
        facts: "Birthplace of Lord Krishna, rich in Krishna temples and culture.",
        highlights: ["Sapta Puri", "Other Famous Dhams", "68 Tirths", "7 Moksha Givers"],
        slug: "mathura",
        image: "https://temple.yatradham.org/public/Product/temple/temple_98qxh8GE_202408041807060.jpg",
        description: "Mathura, the birthplace of Krishna, is a divine city and one of the Sapta Puri."
    },
    {
        id: 80,
        name: "Kashi (Varanasi)",
        location: "Uttar Pradesh, India",
        deity: "Lord Shiva",
        altitude: "81 m",
        river: "Ganga",
        season: "October to March",
        festivals: ["Mahashivratri", "Dev Deepawali", "Diwali"],
        facts: "Oldest living city in the world, abode of Lord Shiva.",
        highlights: ["Sapta Puri", "Other Famous Dhams", "68 Tirths", "7 Moksha Givers"],
        slug: "Varanasi",
        image: "https://media.prayagpandits.com/media/2022/01/08165919/Untitled-design.webp",
        description: "Kashi or Varanasi is one of the holiest cities for Hindus and a Moksha-giving Sapta Puri."
    },
    {
        id: 81,
        name: "Ujjain",
        location: "Madhya Pradesh, India",
        deity: "Lord Shiva (Mahakaleshwar)",
        altitude: "494 m",
        river: "Shipra",
        season: "October to March",
        festivals: ["Mahashivratri", "Kumbh Mela", "Nag Panchami"],
        facts: "Home to Mahakaleshwar Jyotirlinga, one of the twelve Jyotirlingas.",
        highlights: ["Sapta Puri", "Other Famous Dhams", "68 Tirths", "7 Moksha Givers"],
        slug: "ujjain",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMcsufsDBMgeVJfHsdizRtLQlvwTQM-Ltbgw&s",
        description: "Ujjain, with its Mahakaleshwar Jyotirlinga, is a sacred Moksha-giving city of Sapta Puri."
    },
    // Remaining 68 Tirths
    {
        id: 82,
        name: "Prayagraj Tirth",
        location: "Uttar Pradesh, India",
        deity: "Triveni Sangam (Ganga, Yamuna, Saraswati)",
        altitude: "98 m",
        river: "Ganga, Yamuna, Saraswati (confluence)",
        season: "Magh (January-February)",
        festivals: ["Kumbh Mela", "Magh Mela"],
        facts: "Sacred confluence of three rivers, considered one of the holiest tirthas.",
        highlights: ["68 Tirths"],
        slug: "prayagraj-tirth",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/triveni-sangam-prayagraj-uttar-pradesh-1-attr-hero?qlt=82&ts=1751459171785",
        description: "Prayagraj Tirth is one of the most sacred pilgrimage centers where the Ganga, Yamuna, and mythical Saraswati meet."
    },
    {
        id: 83,
        name: "Gaya Tirth",
        location: "Bihar, India",
        deity: "Lord Vishnu (Vishnupad Temple)",
        altitude: "111 m",
        river: "Phalgu",
        season: "September to March",
        festivals: ["Pitru Paksha Mela"],
        facts: "Sacred for offering pind daan rituals to ancestors.",
        highlights: ["68 Tirths"],
        slug: "gaya-tirth",
        image: "https://shrimathuraji.com/wp-content/uploads/2024/06/gaya-ghat.jpg",
        description: "Gaya is famous for pind daan rituals and is one of the holiest pilgrimage places in India."
    },
    {
        id: 84,
        name: "Pushkar Tirth",
        location: "Rajasthan, India",
        deity: "Lord  Brahma",
        altitude: "530 m",
        river: "Pushkar Lake",
        season: "October to March",
        festivals: ["Pushkar Fair", "Kartik Purnima"],
        facts: "One of the few temple dedicated to Lord Brahma.",
        highlights: ["68 Tirths"],
        slug: "pushkar-tirth",
        image: "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Places-to-visit-in-Pushkar_600.jpg",
        description: "Pushkar is home to the rare Brahma temple and a sacred lake surrounded by ghats."
    },
    {
        id: 85,
        name: "Nashik Tirth",
        location: "Maharashtra, India",
        deity: "Lord Rama)",
        altitude: "560 m",
        river: "Godavari",
        season: "October to March",
        festivals: ["Kumbh Mela", "Ram Navami"],
        facts: "Associated with Lord Rama's exile and the episode of Sita Haran.",
        highlights: ["68 Tirths"],
        slug: "nashik-tirth",
        image: "https://maharashtratourism.gov.in/wp-content/uploads/2023/10/panchvati.dd8b9ff4d82f4ddf3ed5.webp",
        description: "Nashik is a Sacred for its association with Lord Rama and the hosting of kumbh mela."
    },
    {
        id: 86,
        name: "Kanyakumari Tirth",
        location: "Tamil Nadu, India",
        deity: "Goddess Devi Kanya Kumari",
        altitude: "0 m",
        river: "Sea (Indian Ocean)",
        season: "October to March",
        festivals: "Pongal, Chaitra Purnima",
        facts: "Southernmost tip of mainland India, confluence of three seas.",
        highlights: ["One of the 68 Tirths"],
        slug: "kanyakumari-tirth",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/thiruvalluvar-statue-kanyakumari-tamil-nadu-hero?qlt=82&ts=1726674535176",
        description: "Kanyakumari is known for its exquisite sunrise & sunset views and the Devi Kanya Kumari temple."
    },
    {
        id: 87,
        name: "Rishikesh Tirth",
        location: "Uttarakhand, India",
        deity: "Lord Vishnu & River Ganga",
        altitude: "372 m",
        river: "Ganga",
        season: "September to June",
        festivals: "International Yoga Festival, Ganga Dussehra",
        facts: "Yoga capital of the world and start point of Char Dham Yatra (via Haridwar).",
        highlights: [" 68 Tirths"],
        slug: "rishikesh-tirth",
        image: "https://captureatrip-cms-storage.s3.ap-south-1.amazonaws.com/Best_Time_to_Visit_Laxman_Jhula_fa2b5c527f.webp",
        description: "Rishikesh is revered for spiritual learning, yoga, and adventure tourism along the Ganga."
    },
    {
        id: 88,
        name: "Pandharpur Tirth",
        location: "Maharashtra, India",
        deity: "Lord Vitthal (Vithoba)",
        altitude: "504 m",
        river: "Bhima",
        season: "May to November",
        festivals: "Ashadhi Ekadashi, Kartiki Ekadashi",
        facts: "Major Warkari pilgrimage center in Maharashtra.",
        highlights: ["68 Tirths"],
        slug: "pandharpur-tirth",
        image: "https://youtellme.ai/wp-content/uploads/2024/07/AdobeStock_494366076-scaled.jpeg",
        description: "Pandharpur hosts grand celebrations during Ekadashis, drawing huge pilgrim crowds."
    },
    {
        id: 89,
        name: "Mount Abu Dilwara Tirth",
        location: "Rajasthan, India",
        deity: "Tirthankaras (Jain)",
        altitude: "1,220 m",
        river: "None",
        season: "October to March",
        festivals: "Paryushan, Mahavir Jayanti",
        facts: "Famous Jain pilgrimage with exquisitely carved temples.",
        highlights: ["68 Tirths"],
        slug: "mount-abu-dilwara-tirth",
        image: "https://www.exoticmiles.com/wp-content/uploads/2020/07/Dilwara-Temples.jpg",
        description: "Dilwara Temples are marvels of Jain architecture in Mount Abu."
    },
    {
        id: 90,
        name: "Rajgir Tirth",
        location: "Bihar, India",
        deity: "Lord Buddha / Jain Tirthankar",
        altitude: "110 m",
        river: "Gandak (proximity)",
        season: "October to March",
        festivals: "Buddha Purnima, Jain festivals",
        facts: "Historic spiritual center for Buddhists and Jains.",
        highlights: ["68 Tirths"],
        slug: "rajgir-tirth",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGrqpkNZnrxShGKDLvd6GuOOVPBZ1oq0qn6w&s",
        description: "Rajgir is an ancient pilgrimage site linked to both Buddhism and Jainism."
    },
    {
        id: 91,
        name: "Govardhan Tirth",
        location: "Uttar Pradesh, India",
        deity: "Lord Krishna",
        altitude: "175 m",
        river: "Yamuna (proximity)",
        season: "October to March",
        festivals: "Govardhan Puja",
        facts: "Sacred hill raised by Krishna to protect villagers from rain.",
        highlights: ["68 Tirths"],
        slug: "govardhan-tirth",
        image: "https://cms.patrika.com/wp-content/uploads/2018/06/05/untitled_14.jpg?w=450&q=90",
        description: "Govardhan Hill is venerated for its association with Lord Krishna’s divine act."
    },
    {
        id: 92,
        name: "Gokul Tirth",
        location: "Uttar Pradesh, India",
        deity: "Lord Krishna",
        altitude: "176 m",
        river: "Yamuna",
        season: "October to March",
        festivals: "Janmashtami",
        facts: "Where Krishna purportedly performed butter-stealing and other childhood leelas.",
        highlights: ["68 Tirths"],
        slug: "gokul-tirth",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/virupaksha-temple-hampi-karnataka-1-attr-hero?qlt=82&ts=1726721263787",
        description: "Gokul is revered for Krishna’s early divine activities and leelas."
    },
    {
        id: 93,
        name: "Hampi Virupaksha Tirth",
        location: "Karnataka, India",
        deity: "Lord Shiva (Virupaksha)",
        altitude: "469 m",
        river: "Tungabhadra",
        season: "October to March",
        festivals: "Hampi Utsav, Shivaratri",
        facts: "Historic temple in former Vijayanagara empire capital.",
        highlights: ["68 Tirths"],
        slug: "hampi-virupaksha-tirth",
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/virupaksha-temple-hampi-karnataka-1-attr-hero?qlt=82&ts=1726721263787",
        description: "Hampi’s Virupaksha temple stands in a rich archaeological landscape."
    },
    {
        id: 94,
        name: "Kamakshi Amman Tirth",
        location: "Kanchipuram, Tamil Nadu, India",
        deity: "Goddess Kamakshi (Parvati)",
        altitude: "83 m",
        river: "Vegavathi",
        season: "October to March",
        festivals: "Navratri, Panguni Utsavam",
        facts: "One of the Shakti Peethas, dedicated to Goddess Parvati.",
        highlights: ["68 Tirths"],
        slug: "kamakshi-amman-tirth",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/2d/Kamakshi_Amman_Temple.jpg",
        description: "Kamakshi Amman temple is an ancient and powerful Shakti shrine in Kanchipuram."
    },
    {
        id: 95,
        name: "Eklingji Tirth",
        location: "Udaipur, Rajasthan, India",
        deity: "Lord Shiva (Eklingji)",
        altitude: "582 m",
        river: "Indra Sarovar (Lake)",
        season: "October to March",
        festivals: "Maha Shivaratri",
        facts: "Historic Shiva temple built by Bappa Rawal.",
        highlight: [" 68 Tirths"],
        slug: "eklingji-tirth",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/d4/5c/be/eklingji-temple.jpg?w=1200&h=-1&s=1",
        description: "Eklingji is a famous Shiva temple near Udaipur, Rajasthan."
    },
    {
        id: 96,
        nam: "Nathdwara Tirth",
        location: "Rajasthan, India",
        deity: "Shrinathji (Lord Krishna)",
        altitude: "585 m",
        river: "Banas",
        season: "October to March",
        festivals: "Janmashtami, Annakut",
        facts: "Home of Shrinathji idol, brought from Mathura during Mughal rule.",
        highlights: [" 68 Tirths"],
        slug: "nathdwara-tirth",
        image: "https://www.indiantempletour.com/wp-content/uploads/2023/05/ranakpur-jain-temple.webp",
        description: "Nathdwara is the seat of Shrinathji, an incarnation of Lord Krishna."
    },
    {
        id: 97,
        name: "Chidambaram Tirth",
        location: "Tamil Nadu, India",
        deity: "Lord Nataraja (Shiva)",
        altitude: "5 m",
        river: "No major river",
        season: "November to March",
        festivals: "Natyanjali, Maha Shivaratri",
        facts: "One of the Panch Bhoota Sthalams (Sky element).",
        highlights: [" 68 Tirths"],
        slug: "chidambaram-tirth",
        image: "https://static.toiimg.com/photo/54409987.cms",
        description: "Chidambaram is a famous Nataraja temple representing the cosmic dance of Shiva."
    },
    {
        id: 98,
        name: "Kalahasti Tirth",
        location: "Andhra Pradesh, India",
        deity: "Lord Shiva (Vayu Lingam)",
        altitude: "90 m",
        river: "Swarnamukhi",
        season: "October to March",
        festivals: "Maha Shivaratri",
        facts: "Known as Dakshina Kailash and one of the Pancha Bhoota Lingas.",
        highlights: [" 68 Tirths"],
        slug: "kalahasti-tirth",
        image: "https://cdn1.tripoto.com/media/filter/nl/img/2380291/Image/1700118989_srikalahasti_temple_view.jpg.webp",
        description: "Kalahasti is famous for its Vayu Lingam and is an important Shaivite pilgrimage site."
    },
    {
        id: 99,
        name: "Kotilingeshwar Tirth",
        location: "Kolar, Karnataka, India",
        deity: "Lord Shiva",
        altitude: "821 m",
        river: "Cauvery (nearby region)",
        season: "October to March",
        festivals: "Maha Shivaratri",
        facts: "Famous for housing millions of Shiva Lingas.",
        highlights: [" 68 Tirths"],
        slug: "kotilingeshwar-tirth",
        image: "https://img.traveltriangle.com/blog/wp-content/uploads/2024/04/Kotilingeshwara-Temple-og.jpg",
        description: "Kotilingeshwar is renowned for having one of the largest collections of Shiva Lingas."
    },
    {
        id: 100,
        name: "Barsana Tirth",
        location: "Mathura, Uttar Pradesh, India",
        deity: "Radha Rani",
        altitude: "183 m",
        river: "Yamuna (nearby)",
        season: "October to March",
        festivals: "Lathmar Holi, Radhashtami",
        facts: "Birthplace of Radha Rani.",
        highlights: [" 68 Tirths"],
        slug: "barsana-tirth",
        image: "https://asoulwindow.com/wp-content/uploads/2022/03/Shri-Radha-Rani-Mahal-Barsana-Uttar-Pradesh-1024x768.jpg",
        description: "Barsana is the birthplace of Radha Rani and famous for Lathmar Holi festival."
    },
    {
        id: 101,
        name: "Palitana Tirth",
        location: "Bhavnagar, Gujarat, India",
        deity: "Jain Tirthankaras",
        altitude: "603 m",
        river: "Shetrunji",
        season: "October to March",
        festivals: "Mahavir Jayanti, Paryushan",
        facts: "World’s largest Jain temple complex with 900+ temples.",
        highlights: ["68 Tirths"],
        slug: "palitana-tirth",
        image: "https://assets.isu.pub/document-structure/230524234350-8cb59147de49872e4015d9a7647ddd90/v1/970f320d28ea92739e6dc357b07b1691.jpeg?width=720&quality=85%2C50",
        description: "Palitana is the most sacred pilgrimage for Jains, with thousands of beautifully carved temples."
    },
    {
        id: 102,
        name: "Shankarpur Tirth",
        location: "West Bengal, India",
        deity: "Lord Shiva",
        altitude: "12 m",
        river: "Bay of Bengal (Sea)",
        season: "October to March",
        festivals: "Maha Shivaratri",
        facts: "Popular coastal pilgrimage site in West Bengal.",
        highlights: ["68 Tirths"],
        slug: "shankarpur-tirth",
        image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/85/d8/df/caption.jpg?w=400&h=-1&s=1",
        description: "Shankarpur is a coastal tirth on the Bay of Bengal, sacred for Shiva devotees."
    },
    {
        id: 103,
        name: "Mayapur Tirth",
        location: "Nadia, West Bengal, India",
        deity: "Lord Chaitanya Mahaprabhu (Krishna avatar)",
        altitude: "15 m",
        river: "Ganga",
        season: "October to March",
        festivals: "Gaura Purnima",
        facts: "Headquarters of ISKCON and birthplace of Chaitanya Mahaprabhu.",
        highlights: ["68 Tirths"],
        slug: "mayapur-tirth",
        image: "https://temple.yatradham.org/public/Product/temple/temple_mbXfIoZN_202506301426470.webp",
        description: "Mayapur is the birthplace of Chaitanya Mahaprabhu and a global Vaishnav pilgrimage hub."
    },
    // Other Famous Dhams
    {
        id: 104,
        name: "Vaishno Devi Temple",
        location: "Katra, Jammu and Kashmir, India",
        deity: "Goddess Mahalakshmi",
        altitude: "1,585 m",
        river: "N/A (in Trikuta Mountains)",
        season: "March - October",
        festivals: ["Navaratri"],
        facts: "The shrine is in a cave where the goddess is represented by three natural rock formations (Pindies).",
        highlights: ["Shakti Peeth", "Other Famous Dhams", "68 Tirths"],
        image: "https://mohitbangari.com/wp-content/uploads/2024/07/Best-Time-To-Visit-Mata-Vaishno-Devi-Temple.jpg",
        slug: "vaishno-devi",
        description: "One of the most visited pilgrimage centers in India, dedicated to the Mother Goddess."
    },
    {
        id: 105,
        name: "Tirupati Balaji Temple",
        location: "Tirupati, Andhra Pradesh, India",
        deity: "Lord Venkateswara (Vishnu)",
        altitude: "853 m",
        river: "N/A (Tirumala Hills)",
        season: "September - March",
        festivals: ["Brahmotsavam", "Vaikunta Ekadasi"],
        facts: "One of the richest and most visited religious centers in the world.",
        highlights: ["Other Famous Dhams", "68 Tirths"],
        image: "https://theunitedindian.com/images/tirupati-balaji-hero.jpg",
        slug: "tirupati",
        description: "A landmark Vaishnavite temple situated in the hill town of Tirumala."
    },
    {
        id: 106,
        name: "Amarnath Cave Temple",
        location: "Anantnag, Jammu and Kashmir, India",
        deity: "Lord Shiva",
        altitude: "3,888 m",
        river: "N/A (Himalayas)",
        season: "July – August (Shravani Mela)",
        festivals: ["Shravani Mela"],
        facts: "A naturally formed ice stalagmite (Shiva Lingam) waxes and wanes with the moon's phases.",
        highlights: ["Other Famous Dhams", "68 Tirths"],
        image: "https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/08/History-of-Amarnath.jpg",
        slug: "amarnath",
        description: "A highly revered Hindu shrine located in a cave, accessible only during a short summer period."
    },
    // Additional Famous Dham
    {
        id: 107,
        name: "Sai Baba Temple",
        location: "Shirdi, Maharashtra, India",
        deity: "Sai Baba of Shirdi",
        altitude: "504 m",
        river: "N/A",
        season: "October - March",
        festivals: ["Ram Navami", "Guru Purnima", "Vijayadashami"],
        facts: "A holy shrine dedicated to the 19th-century saint, revered by people of all faiths.",
        highlights: ["Other Famous Dhams", "68 Tirths"],
        image: "https://images.hindustantimes.com/img/2021/10/06/1600x900/samadhi-established-beautiful-services-thursday-hindustan-shirdi_4f7f8ce0-2773-11eb-8924-93a7f7a2e27c_1633487759609.jpg",
        slug: "shirdi",
        description: "A major pilgrimage site attracting millions, promoting the message of 'Sabka Malik Ek' (One God governs all)."
    },

    // More "Other Famous Dhams"
    {
        id: 108,
        name: "Sabarimala Sree Ayyappa Temple",
        location: "Pathanamthitta, Kerala, India",
        deity: "Lord Ayyappan",
        altitude: "480 m",
        river: "Pamba River",
        season: "November – January (Mandalam-Makaravilakku)",
        festivals: ["Mandala Pooja", "Makaravilakku"],
        facts: "One of the largest annual pilgrimages in the world, requiring a 41-day period of austerities (vratham).",
        highlights: ["Other Famous Dhams"],
        image: "https://www.abhibus.com/blog/wp-content/uploads/2023/12/Sabarimala-Temple-History-Timings-Location.jpg",
        slug: "sabarimala",
        description: "A famous temple dedicated to Lord Ayyappan, located amidst 18 hills in a tiger reserve."
    },
    {
        id: 109,
        name: "Meenakshi Amman Temple",
        location: "Madurai, Tamil Nadu, India",
        deity: "Goddess Meenakshi (Parvati) & Lord Sundareswarar (Shiva)",
        altitude: "144 m",
        river: "Vaigai River",
        season: "October – March",
        festivals: ["Meenakshi Thirukalyanam", "Chithirai Festival"],
        facts: "An architectural marvel with 14 gopurams (gateway towers) and a hall with a thousand carved pillars.",
        highlights: ["Other Famous Dhams", "68 Tirths"],
        image: "https://www.sahyogmantratours.com/images/blogs/meenakshi-temple-20231009101928-1_crop.jpg",
        slug: "meenakshi-temple",
        description: "A historic Hindu temple that is a masterpiece of Dravidian architecture."
    },
    {
        id: 110,
        name: "Siddhivinayak Temple",
        location: "Mumbai, Maharashtra, India",
        deity: "Lord Ganesha",
        altitude: "Sea level",
        river: "N/A",
        season: "All year round",
        festivals: ["Ganesh Chaturthi", "Angaraki Chaturthi"],
        facts: "One of India's richest temples; the idol's trunk is uniquely tilted to the right.",
        highlights: ["Other Famous Dhams"],
        image: "https://temple.yatradham.org/public/Product/temple/temple_OmfG1LN1_202506301547270.webp",
        slug: "siddhivinayak",
        description: "A renowned temple of Lord Ganesha, the fulfiller of wishes, in the heart of Mumbai."
    },
    {
        id: 111,
        name: "Pashupatinath Temple",
        location: "Kathmandu, Nepal",
        deity: "Lord Shiva (Pashupati)",
        altitude: "1,300 m",
        river: "Bagmati River",
        season: "October - December",
        festivals: ["Maha Shivratri", "Teej"],
        facts: "A UNESCO World Heritage Site; only Hindus are allowed to enter the main temple courtyard.",
        highlights: ["Other Famous Dhams", "68 Tirths"],
        image: "https://www.kiomoi.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fkmadmin%2Fimage%2Fupload%2Fc_scale%2Cw_500%2Ff_auto%2Fv1735561884%2Fkiomoi%2Fpashupatinath_temple_5337.jpg&w=3840&q=75",
        slug: "pashupatinath",
        description: "One of the most sacred Hindu temples of Lord Shiva, located on the banks of the Bagmati River in Nepal."
    },
    {
        id: 112,
        name: "Sun Temple, Konark",
        location: "Konark, Odisha, India",
        deity: "Surya (The Sun God)",
        altitude: "Sea level",
        river: "Bay of Bengal coast",
        season: "September - March",
        festivals: ["Konark Dance Festival", "Magha Saptami"],
        facts: "A 13th-century UNESCO World Heritage Site built in the form of a giant chariot with 12 pairs of stone-carved wheels.",
        highlights: ["Other Famous Dhams"],
        image: "https://suryainn.in/wp-content/uploads/2015/01/konarksuntemple.jpg",
        slug: "konark-sun-temple",
        description: "An architectural marvel and a monumental representation of the Sun God Surya's chariot."
    },
    {
        id: 113,
        name: "Lingaraja Temple",
        location: "Bhubaneswar, Odisha, India",
        deity: "Lord Shiva (Harihara)",
        altitude: "45 m",
        river: "N/A (near Bindusagar Lake)",
        season: "October - March",
        festivals: ["Maha Shivratri", "Rukuna Ratha Yatra"],
        facts: "A classic example of Kalinga architecture; non-Hindus are not permitted inside the main sanctum.",
        highlights: ["Other Famous Dhams",],
        image: "https://s7ap1.scene7.com/is/image/incredibleindia/lingaraj-temple-bhubaneshwar-odisha-2-attr-hero?qlt=82&ts=1742165154990",
        slug: "lingaraja-temple",
        description: "The largest temple in Bhubaneswar, dedicated to Harihara, a combined form of Vishnu and Shiva."
    },
    {
        id: 114,
        name: "Dakshineswar Kali Temple",
        location: "Kolkata, West Bengal, India",
        deity: "Goddess Bhavatarini (Kali)",
        altitude: "Sea level",
        river: "Hooghly River",
        season: "October - March",
        festivals: ["Kali Puja", "Durga Puja"],
        facts: "Strongly associated with the 19th-century mystic Ramakrishna Paramahamsa, who served as a priest here.",
        highlights: ["Other Famous Dhams"],
        image: "https://kolkatatourism.travel/images/places-to-visit/headers/dakshineswar-kali-temple-kolkata-entry-fee-timings-holidays-reviews-header.jpg",
        slug: "dakshineswar-kali",
        description: "A famous Navaratna style temple on the eastern bank of the Hooghly River."
    },
    {
        id: 115,
        name: "Gangasagar",
        location: "Sagar Island, West Bengal, India",
        deity: "Ganges River, Sage Kapila",
        altitude: "Sea level",
        river: "Confluence of Ganges and Bay of Bengal",
        season: "January (Makar Sankranti)",
        festivals: ["Makar Sankranti Mela"],
        facts: "A saying goes 'Saare tirath baar baar, Gangasagar ek baar' (Visit other pilgrimages multiple times, but Gangasagar just once).",
        highlights: ["Other Famous Dhams", "68 Tirths"],
        image: "https://static2.tripoto.com/media/filter/tst/img/39685/TripDocument/1544684382_sagar_shiv_mandir_1.jpg",
        slug: "gangasagar",
        description: "A sacred pilgrimage site where the River Ganges meets the Bay of Bengal."
    },
    // More Famous Dhams
    {
        id: 116,
        name: "Mansa Devi Temple",
        location: "Haridwar, Uttarakhand, India",
        deity: "Goddess Mansa",
        altitude: "246 m",
        river: "Ganges River (overlooks)",
        season: "October - April",
        festivals: ["Navaratri Mela", "Kumbh Mela"],
        facts: "Located atop the Bilwa Parvat; devotees tie threads on a sacred tree to have their wishes fulfilled.",
        highlights: ["Other Famous Dhams"],
        image: "https://haridwarrishikeshtourism.in/images/places-to-visit/header/shri-mata-mansa-devi-mandir-haridwar-tourism-entry-fee-timings-holidays-reviews-header.jpg",
        slug: "mansa-devi-haridwar",
        description: "A prominent temple dedicated to the wish-fulfilling goddess, part of a holy trinity with Chandi Devi and Maya Devi."
    },
    {
        id: 117,
        name: "Ranakpur Jain Temple",
        location: "Pali, Rajasthan, India",
        deity: "Tirthankara Rishabhanatha (Adinath)",
        altitude: "486 m",
        river: "Magai River",
        season: "October - March",
        festivals: ["Mahavir Jayanti", "Paryushana"],
        facts: "Famous for its 1,444 intricately carved marble pillars, with no two being alike.",
        highlights: ["Other Famous Dhams"],
        image: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Worshippers_leaving_the_temple_in_Ranakpur.jpg",
        slug: "ranakpur-jain-temple",
        description: "A spectacular masterpiece of Jain architecture dedicated to the first Tirthankara, Adinath."
    },
];

export default function SacredDhams() {
    const [activeTab, setActiveTab] = useState("All");

    // ✅ Safe data (never undefined)
    const safeData = useMemo(() => (Array.isArray(dhamsData) ? dhamsData : []), []);

    // ✅ Safe filter (handles missing highlights)
    const filtered = useMemo(() => {
        if (activeTab === "All") return safeData;
        return safeData.filter(
            (d) => Array.isArray(d.highlights) && d.highlights.includes(activeTab)
        );
    }, [activeTab, safeData]);

    return (
        <div
  className="px-6 py-10 min-h-screen bg-cover bg-center"
  style={{
    backgroundImage:
      "url('https://upload.wikimedia.org/wikipedia/commons/c/c1/Khandoba_temple_Pune.jpg')",
  }}
>
    {/* Navbar */}
      <Navbar />    
          {/* Heading */}
            <div className="pt-8">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                Sacred <span className="dam"> Dhams</span> of India
            </h2>
</div>
            {/* Tabs */}
            <div className="flex justify-center mb-10">
                <div className="bg-white shadow rectangle-full p-2 flex flex-wrap gap-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveTab(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                                activeTab === cat
                                    ? "bg-orange-400 text-white shadow"
                                    : "text-gray-600 hover:bg-gray-100"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.length === 0 && (
                    <p className="text-gray-600 col-span-full text-center">
                        No temples for “{activeTab}” yet.
                    </p>
                )}

                {filtered.map((dham) => (
                    <div
                        key={dham?.id}
                        className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
                    >
                        {/* Image */}
                        <img
                            src={
                                dham?.image ||
                                "https://via.placeholder.com/800x450?text=Temple+Image"
                            }
                            alt={dham?.name || "Temple"}
                            className="w-full h-48 object-cover"
                        />

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="text-xl font-bold text-blue-700">
                                {dham?.name || "Unknown Temple"}
                            </h3>
                            <p className="text-sm text-gray-600">
                                {dham?.location || "N/A"}
                            </p>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2 mt-3">
                                {dham?.deity && (
                                    <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                    {dham.deity}
                  </span>
                                )}
                                {dham?.river && (
                                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                    {dham.river}
                  </span>
                                )}
                                {dham?.season && (
                                    <span className="bg-green-100 text-green-700 text-xs px-3 py-1 rounded-full">
                    {dham.season}
                  </span>
                                )}
                            </div>

                            {/* Highlights */}
                            <div className="mt-3 flex flex-wrap gap-2">
                                {(dham?.highlights || []).map((tag, i) => (
                                    <span
                                        key={i}
                                        className="bg-amber-100 text-amber-800 text-xs px-2.5 py-0.5 rounded"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>

                            {/* Festivals & Facts */}
                            <div className="mt-3 text-sm text-gray-700 space-y-1">
                                <p>
  <strong>Festivals:</strong>{" "}
  {Array.isArray(dham?.festivals)
    ? (dham.festivals.length > 0 ? dham.festivals.join(", ") : "N/A")
    : (dham?.festivals || "N/A")}
</p>
                                <p>
                                    <strong>Unique Fact:</strong> {dham?.facts || "N/A"}
                                </p>
                            </div>

                            {/* CTA */}
                            <div className="mt-4">
                                {/* 🔗 Make sure the slug matches your real routes */}
                                <Link
  to={`/temple/${dham?.slug || ""}`}
  className="inline-block w-full text-center px-4 py-2 
             bg-gradient-to-r from-orange-300 to-orange-500 
             text-white text-sm font-medium rounded-lg shadow 
             hover:from-orange-400 hover:to-orange-600 transition"
>
  View Details
</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
