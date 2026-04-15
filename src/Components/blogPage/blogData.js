import kedarnath1 from '../../assets/blog section/1.jpeg';
import kedarnath2 from '../../assets/blog section/2.jpeg';
import badrinath1 from '../../assets/blog section/bdr1.jpeg';
import badrinath2 from '../../assets/blog section/bdr2.jpeg';
import somnath1 from '../../assets/blog section/sm1.jpg';
import somnath2 from '../../assets/blog section/sm2.jpg';
import kashi1 from '../../assets/blog section/kv1.png';
import kashi2 from '../../assets/blog section/kv2.jpg';
import meenakshi1 from '../../assets/blog section/mn1.jpg';
import meenakshi2 from '../../assets/blog section/mn2.jpg';

export const blogData = [
    {
        id: 1,
        title: "Kedarnath: The Abode of the Absolute",
        shortDescription:
            "When I first caught a glimpse of Kedarnath, nestled high among snow-capped peaks, I felt like I had entered another realm. The sheer power and peace of the place hit me instantly. Trekking those steep paths wasn’t just physically challenging — it was a spiritual cleanse I never knew I needed.",
        cardImage: kedarnath1,
        images: [kedarnath1, kedarnath2],
        info: {
            deity: "Lord Shiva",
            location: "Kedarnath, Uttarakhand",
            bestTime: "May to October",
            ticketPrice: "Free Entry",
            timing: "6:00 AM - 8:00 PM",
        },
        fullDescription: [
            {
                category: "Historical Significance",
                content:
                    "As I stood before the temple, I couldn’t help but feel connected to the centuries of faith etched into every stone. Legend has it that the Pandavas built the original temple here seeking Lord Shiva’s forgiveness, and honestly, you feel that depth of history the moment you step in."
            },
            {
                category: "Architectural Marvel",
                content:
                    "What struck me was how this ancient temple has stood through centuries of snowfall, floods, and storms — built with massive stone slabs stacked without mortar. Inside, the conical Shiva linga radiates a quiet, magnetic energy. You don’t have to be religious to feel something profound here."
            },
            {
                category: "The Visitor Experience",
                content:
                    "The trek is tough — let’s not sugarcoat it. But it’s also a journey that slows you down, makes you reflect. I met people chanting, walking barefoot, even crying — and I understood why. Kedarnath doesn’t just touch your soul, it shakes it awake."
            }
        ]
    },
    {
        id: 2,
        title: "Badrinath Temple: Abode of Vishnu",
        shortDescription:
            "Tucked between the snowy Nar and Narayana peaks, Badrinath greeted me with its vibrant colors and sacred stillness. The river Alaknanda rushes by, adding melody to the spiritual hum of the temple. Just standing in the queue, I felt part of something ancient and holy.",
        cardImage: badrinath1,
        images: [badrinath1, badrinath2],
        info: {
            deity: "Lord Vishnu",
            location: "Badrinath, Uttarakhand",
            bestTime: "May to June & Sep to Oct",
            ticketPrice: "Free Entry",
            timing: "4:30 AM - 9:00 PM",
        },
        fullDescription: [
            {
                category: "Spiritual Importance",
                content:
                    "Badrinath isn’t just a temple, it’s a living legacy. As one of the 108 Divya Desams, it holds immense value for Vaishnavites. I took a dip in the Tapt Kund before darshan, and even in freezing cold, it felt purifying. The air here is alive with chants, bells, and pure devotion."
            },
            {
                category: "Mythological Roots",
                content:
                    "Stories say Lord Vishnu meditated here while Lakshmi protected him as a tree. The temple itself, revived by Adi Shankaracharya, has this magnetic pull — even the most restless heart slows down. I left Badrinath with a sense of completeness I hadn’t felt in years."
            }
        ]
    },
    {
        id: 3,
        title: "Somnath Temple: The Eternal Shrine",
        shortDescription:
            "When you stand on the edge of the Arabian Sea, watching waves crash near Somnath Temple, it’s hard not to feel goosebumps. This temple is strength personified — destroyed, rebuilt, and still standing proud. The sunset here felt like time stood still.",
        cardImage: somnath1,
        images: [somnath1, somnath2],
        info: {
            deity: "Lord Shiva",
            location: "Prabhas Patan, Gujarat",
            bestTime: "October to March",
            ticketPrice: "Free Entry",
            timing: "6:00 AM - 10:00 PM",
        },
        fullDescription: [
            {
                category: "Historical Resilience",
                content:
                    "Somnath's past is brutal — countless invasions, demolitions, and reconstructions. But its soul? Unshaken. Walking through its premises, I felt like each stone whispered stories of survival and pride. It’s not just a temple; it’s a phoenix that keeps rising."
            },
            {
                category: "Architectural Grandeur",
                content:
                    "Its Chalukya-style carvings, intricate pillars, and the stunning seaside location make it unforgettable. I stayed back for the light and sound show — and the narration gave me chills. Seeing history unfold right before you, under a starry sky, is something else."
            }
        ]
    },
    {
        id: 4,
        title: "Kashi Vishwanath: Heart of Varanasi",
        shortDescription:
            "Stepping into Varanasi is like stepping into eternity. Kashi Vishwanath Temple sits at its core — intense, alive, and drenched in devotion. The scent of incense, sound of bells, and the river Ganga nearby create a vibe unlike anything I’ve ever known.",
        cardImage: kashi1,
        images: [kashi1, kashi2],
        info: {
            deity: "Lord Shiva",
            location: "Varanasi, Uttar Pradesh",
            bestTime: "October to March",
            ticketPrice: "Free Entry",
            timing: "3:00 AM - 11:00 PM",
        },
        fullDescription: [
            {
                category: "Spiritual Epicenter",
                content:
                    "Kashi Vishwanath is more than a temple — it’s the very breath of Varanasi. Devotees line up at 3 AM, some with tears, others with flowers. I stood there silently, absorbing generations of devotion pouring into the sanctum. It’s raw. It’s real. It’s unforgettable."
            },
            {
                category: "Cultural Significance",
                content:
                    "The golden dome, the ghats nearby, the constant mantras — it’s a place that teaches you to let go and just be. It's where philosophy meets street life, and where moksha doesn’t feel like a concept, but a living reality."
            }
        ]
    },
    {
        id: 5,
        title: "Meenakshi Amman Temple: Divine Union",
        shortDescription:
            "When I walked into Meenakshi Temple in Madurai, I didn’t expect to be this overwhelmed. It’s not just grand, it’s alive — buzzing with rituals, music, and color. The sheer detail on every tower left me speechless, and the energy inside the sanctum? Intense.",
        cardImage: meenakshi1,
        images: [meenakshi1, meenakshi2],
        info: {
            deity: "Goddess Meenakshi & Lord Sundareswarar",
            location: "Madurai, Tamil Nadu",
            bestTime: "October to March",
            ticketPrice: "Free Entry (Special Darshan extra)",
            timing: "5:00 AM - 12:30 PM & 4:00 PM - 10:00 PM",
        },
        fullDescription: [
            {
                category: "Dravidian Architecture",
                content:
                    "The gopurams are literal towers of art — thousands of sculpted deities, demons, dancers. It’s mind-blowing how much detail is packed into every inch. I walked around for an hour just soaking in the craftsmanship, and still didn’t feel done."
            },
            {
                category: "A Living Temple",
                content:
                    "Unlike silent ruins, Meenakshi Temple is bustling with life. From priests chanting to families praying together, every corner is filled with activity. The Hall of a Thousand Pillars took my breath away — symmetry, scale, and spiritual vibe all in one."
            }
        ]
    }
];
