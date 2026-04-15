import React, { useState, useMemo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

// --- FESTIVAL DATA (Grouped by State) - Updated based on common Hindu Calendar dates for 2025 & 2026 ---
// Please note: Exact dates can vary slightly based on regional Panchang differences and specific astronomical calculations.
const festivalsByState = {
  'All India': {
    '2025-01-15': 'Makar Sankranti / Pongal',
    '2025-02-02': 'Vasant Panchami',
    '2025-02-26': 'Maha Shivaratri',
    '2025-03-14': 'Holi',
    '2025-03-30': 'Ugadi / Gudi Padwa',
    '2025-04-06': 'Ram Navami',
    '2025-04-12': 'Hanuman Jayanti',
    '2025-08-09': 'Raksha Bandhan',
    '2025-08-16': 'Janmashtami',
    '2025-08-27': 'Ganesh Chaturthi',
    '2025-09-22': 'Navaratri Start',
    '2025-10-02': 'Dussehra',
    '2025-10-21': 'Diwali',
    '2025-10-27': 'Chhath Puja',
    '2025-11-05': 'Guru Nanak Jayanti',
    '2025-12-25': 'Christmas',

    // 2026 Dates
    '2026-01-14': 'Makar Sankranti / Pongal',
    '2026-01-23': 'Vasant Panchami',
    '2026-02-15': 'Maha Shivaratri',
    '2026-03-04': 'Holi',
    '2026-03-19': 'Ugadi / Gudi Padwa',
    '2026-03-27': 'Ram Navami',
    '2026-04-02': 'Hanuman Jayanti',
    '2026-08-28': 'Raksha Bandhan',
    '2026-09-04': 'Janmashtami',
    '2026-09-14': 'Ganesh Chaturthi',
    '2026-10-11': 'Navaratri Start',
    '2026-10-20': 'Dussehra',
    '2026-11-08': 'Diwali',
    '2026-11-15': 'Chhath Puja',
    '2026-11-24': 'Guru Nanak Jayanti',
    '2026-12-25': 'Christmas',
  },
  'Andhra Pradesh': {
    '2025-03-30': 'Ugadi',
    '2026-03-19': 'Ugadi'
  },
  'Assam': {
    '2025-01-14': 'Magh Bihu',
    '2025-04-14': 'Bohag Bihu',
    '2025-06-22': 'Ambubachi Mela',
    '2026-01-14': 'Magh Bihu',
    '2026-04-15': 'Bohag Bihu'
  },
  'Bihar': {
    '2025-10-27': 'Chhath Puja',
    '2026-11-15': 'Chhath Puja'
  },
  'Goa': {
    '2026-02-22': 'Goa Carnival'
  },
  'Gujarat': {
    '2025-09-22': 'Navaratri Start',
    '2025-01-14': 'Uttarayan',
    '2026-01-14': 'Uttarayan'
  },
  'Haryana': {
    '2025-01-13': 'Lohri',
    '2025-04-14': 'Baisakhi',
    '2026-01-13': 'Lohri',
    '2026-04-14': 'Baisakhi'
  },
  'Himachal Pradesh': {
    '2025-10-02': 'Kullu Dussehra',
    '2026-10-20': 'Kullu Dussehra'
  },
  'Jammu & Kashmir': {
    '2025-04-14': 'Baisakhi',
    '2026-04-14': 'Baisakhi'
  },
  'Jharkhand': {
    '2026-04-03': 'Sarhul'
  },
  'Karnataka': {
    '2025-10-02': 'Mysuru Dasara',
    '2025-03-30': 'Ugadi',
    '2026-03-19': 'Ugadi'
  },
  'Kerala': {
    '2025-09-04': 'Onam',
    '2025-04-14': 'Vishu',
    '2026-04-14': 'Vishu',
    '2026-08-26': 'Onam'
  },
  'Ladakh': {
    '2026-06-26': 'Hemis Festival'
  },
  'Madhya Pradesh': {
    '2026-02-20': 'Khajuraho Dance Fest'
  },
  'Maharashtra': {
    '2025-08-27': 'Ganesh Chaturthi',
    '2025-03-30': 'Gudi Padwa',
    '2026-03-19': 'Gudi Padwa'
  },
  'Manipur': {
    '2025-03-14': 'Yaosang (Holi)',
    '2026-03-04': 'Yaosang (Holi)'
  },
  'Nagaland': {
    '2025-12-01': 'Hornbill Festival'
  },
  'Odisha': {
    '2025-06-27': 'Ratha Yatra',
    '2025-06-14': 'Raja Parba',
    '2026-07-16': 'Ratha Yatra'
  },
  'Punjab': {
    '2025-01-13': 'Lohri',
    '2025-04-14': 'Baisakhi',
    '2025-11-05': 'Guru Nanak Jayanti',
    '2026-01-13': 'Lohri',
    '2026-04-14': 'Baisakhi',
    '2026-11-24': 'Guru Nanak Jayanti'
  },
  'Rajasthan': {
    '2025-08-07': 'Teej',
    '2025-11-08': 'Pushkar Fair'
  },
  'Sikkim': {
    '2026-02-18': 'Losar'
  },
  'Tamil Nadu': {
    '2025-01-15': 'Pongal',
    '2025-04-14': 'Puthandu',
    '2025-02-11': 'Thaipusam',
    '2026-01-15': 'Pongal',
    '2026-04-14': 'Puthandu',
    '2026-02-01': 'Thaipusam'
  },
  'Telangana': {
    '2025-07-20': 'Bonalu',
    '2025-03-30': 'Ugadi',
    '2026-03-19': 'Ugadi'
  },
  'Tripura': {
    '2025-07-01': 'Kharchi Puja'
  },
  'Uttar Pradesh': {
    '2025-10-27': 'Chhath Puja'
  },
  'Uttarakhand': {
    '2025-06-05': 'Ganga Dussehra'
  },
  'West Bengal': {
    '2025-09-28': 'Durga Puja',
    '2026-01-23': 'Saraswati Puja',
    '2025-04-15': 'Poila Boishakh',
    '2026-04-15': 'Poila Boishakh',
    '2026-10-17': 'Durga Puja'
  },
};

// --- NATIONAL DAYS DATA (Fixed dates) ---
const nationalDays = {
  '2025-01-26': 'Republic Day',
  '2025-07-22': 'National Flag Adoption Day',
  '2025-08-15': 'Independence Day',
  '2025-10-02': 'Gandhi Jayanti / Shastri Jayanti',
  '2025-11-14': 'Children\'s Day (Nehru Jayanti)',
  
  '2026-01-26': 'Republic Day',
  '2026-07-22': 'National Flag Adoption Day',
  '2026-08-15': 'Independence Day',
  '2026-10-02': 'Gandhi Jayanti / Shastri Jayanti',
  '2026-11-14': 'Children\'s Day (Nehru Jayanti)',
};

// --- FESTIVAL AND NATIONAL DAY DESCRIPTIONS ---
const eventDescriptions = {
  // Hindu Festival Descriptions
  'Makar Sankranti / Pongal': {
    type: 'festival',
    why: "Celebrates the sun's transit into Capricorn (Makara Rashi), marking the end of winter solstice and the beginning of longer days. It's a harvest festival, signifying the abundance of crops.",
    how: "People take holy dips in rivers, worship the Sun God, and make offerings of newly harvested grains. Kite flying is a popular activity. In South India (Pongal), homes are decorated, and a special dish of boiled rice with milk and jaggery is prepared as an offering.",
    who: "Primarily Surya Dev (Sun God), though various regional deities are also worshipped."
  },
  'Vasant Panchami': {
    type: 'festival',
    why: "Marks the arrival of spring and is dedicated to Maa Saraswati, the goddess of knowledge, music, arts, and learning. It's considered an auspicious day to begin new ventures, especially in education.",
    how: "Devotees worship Maa Saraswati, often placing books and musical instruments near her idol. Children are introduced to reading and writing. People wear yellow clothes, offer yellow flowers, and prepare yellow sweets, symbolizing the vibrancy of spring and knowledge.",
    who: "Maa Saraswati."
  },
  'Maha Shivaratri': {
    type: 'festival',
    why: "Celebrates the 'Great Night of Shiva.' It's believed to be the night when Lord Shiva performs the cosmic dance of creation, preservation, and destruction (Tandava). Some believe it's the day Shiva married Goddess Parvati.",
    how: "Devotees observe a strict fast, perform Lingam Puja (worship of Shiva Lingam) with milk, water, Bael leaves, fruits, and flowers. Many stay awake all night, chanting mantras and meditating. Temples dedicated to Shiva are elaborately decorated.",
    who: "Lord Shiva."
  },
  'Holi': {
    type: 'festival',
    why: "The 'Festival of Colors' signifies the triumph of good over evil, the arrival of spring, and the end of winter. It also marks the victory of devotion over arrogance (Prahlad-Hiranyakashipu story) and the love of Radha and Krishna.",
    how: "The night before Holi, bonfires are lit (Holika Dahan) to symbolize the burning of evil. On Holi, people throw colored powders (gulal) and water at each other, sing, dance, and share sweets. Families and friends gather to celebrate.",
    who: "Lord Krishna (especially in Braj region), Lord Vishnu (for Prahlad story), Kama Deva (in some traditions)."
  },
  'Ugadi / Gudi Padwa': {
    type: 'festival',
    why: "Marks the Hindu New Year in various parts of India. It's believed that Lord Brahma created the universe on this day.",
    how: "Homes are cleaned and decorated with rangoli. People take ritualistic oil baths. A special dish called 'Ugadi Pacchadi' or 'Puran Poli' is prepared. Gudi Padwa involves hoisting a 'Gudi' (a bamboo stick adorned with a silk cloth).",
    who: "Lord Brahma, Lord Vishnu."
  },
  'Ram Navami': {
    type: 'festival',
    why: "Celebrates the birth of Lord Rama, the seventh incarnation of Lord Vishnu. It signifies the victory of dharma (righteousness) over adharma (unrighteousness).",
    how: "Devotees observe fasts, recite verses from the Ramayana, and sing bhajans. Temples dedicated to Rama are decorated, and idols of Rama, Sita, Lakshmana, and Hanuman are worshipped.",
    who: "Lord Rama (an incarnation of Lord Vishnu), Sita, Lakshmana, Hanuman."
  },
  'Hanuman Jayanti': {
    type: 'festival',
    why: "Celebrates the birth of Lord Hanuman, the devoted servant of Lord Rama and a symbol of strength, devotion, and courage.",
    how: "Devotees visit Hanuman temples, observe fasts, and recite Hanuman Chalisa or other hymns. Offerings like ladoos, sindoor, and oil are made. Many perform special pujas and aartis.",
    who: "Lord Hanuman."
  },
  'Raksha Bandhan': {
    type: 'festival',
    why: "A festival celebrating the bond between brothers and sisters. Sisters tie a sacred thread (rakhi) on their brothers' wrists, and brothers pledge to protect their sisters.",
    how: "Sisters tie rakhis on their brothers' wrists, apply tilak, and perform a small aarti. Brothers give gifts to their sisters. Families gather to celebrate, share sweets, and strengthen family ties.",
    who: "It's a social and familial festival; no specific deity is worshipped, but blessings are sought for family well-being."
  },
  'Janmashtami': {
    type: 'festival',
    why: "Celebrates the birth of Lord Krishna, the eighth incarnation of Lord Vishnu. It signifies the victory of good over evil and the importance of dharma.",
    how: "Devotees observe a fast until midnight, when Lord Krishna is believed to have been born. Temples are decorated, and idols of infant Krishna are bathed and adorned. 'Dahi Handi' is a popular tradition in some regions.",
    who: "Lord Krishna (an incarnation of Lord Vishnu), Radha."
  },
  'Ganesh Chaturthi': {
    type: 'festival',
    why: "Celebrates the birth of Lord Ganesha, the elephant-headed god of wisdom, prosperity, and good fortune, and the remover of obstacles.",
    how: "Idols of Lord Ganesha are installed in homes and public pandals. Elaborate pujas are performed. Offerings of modak and other sweets are made. The festival culminates with the immersion of the idol (Visarjan) in water bodies.",
    who: "Lord Ganesha."
  },
  'Navaratri Start': {
    type: 'festival',
    why: "Marks the beginning of Sharad Navaratri, a nine-night festival dedicated to the nine forms of Goddess Durga. It celebrates the victory of Goddess Durga over the demon Mahishasura.",
    how: "Devotees observe fasts, perform 'Ghatasthapana', and daily pujas to different forms of Durga. Dandiya and Garba dances are popular, especially in Gujarat. The festival culminates with Dussehra.",
    who: "Goddess Durga and her nine forms."
  },
  'Dussehra': {
    type: 'festival',
    why: "Also known as Vijayadashami, it signifies the victory of Lord Rama over the demon king Ravana and the victory of Goddess Durga over the demon Mahishasura. It symbolizes the triumph of righteousness over evil.",
    how: "Effigies of Ravana, Meghnad, and Indrajit are burned in open fields. Ravan Dahan is often accompanied by fireworks. In some regions, 'Durga Visarjan' marks the end of Durga Puja.",
    who: "Lord Rama, Goddess Durga."
  },
  'Diwali': {
    type: 'festival',
    why: "The 'Festival of Lights' symbolizes the victory of light over darkness, good over evil, and knowledge over ignorance. It also marks Lord Rama's return to Ayodhya, and the worship of Goddess Lakshmi for wealth and prosperity.",
    how: "Homes are decorated with diyas (oil lamps), candles, and lights. Rangolis are made. People perform Lakshmi Puja (worship of Goddess Lakshmi and Lord Ganesha). Firecrackers are lit, sweets and gifts are exchanged, and new clothes are worn.",
    who: "Goddess Lakshmi, Lord Ganesha, Lord Rama, Goddess Sita, Lord Hanuman."
  },
  'Chhath Puja': {
    type: 'festival',
    why: "A major ancient Hindu Vedic festival dedicated to Surya Dev (the Sun God) and Chhathi Maiya (goddess of power and prosperity). It is performed to thank them for sustaining life on Earth.",
    how: "Observed with extreme devotion, involving rigorous fasting, standing in water bodies at sunrise and sunset to offer 'arghya' to the Sun God, and offering special prasad like Thekua.",
    who: "Surya Dev (Sun God), Chhathi Maiya."
  },
  'Guru Nanak Jayanti': {
    type: 'festival',
    why: "Celebrates the birth of Guru Nanak Dev Ji, the founder of Sikhism. It is one of the most sacred festivals in Sikhism.",
    how: "Processions (Nagar Kirtan) are held, and Gurdwaras are beautifully decorated. 'Akhand Path' (continuous recitation of the Guru Granth Sahib) is performed. Langars (community meals) are served.",
    who: "Guru Nanak Dev Ji."
  },
  'Christmas': {
    type: 'festival',
    why: "Celebrates the birth of Jesus Christ, who Christians believe is the Son of God. It's a time of peace, joy, and goodwill.",
    how: "People attend church services, exchange gifts, decorate homes with Christmas trees and lights, and share festive meals with family and friends. Santa Claus is a popular figure.",
    who: "Jesus Christ."
  },
  'Republic Day': {
    type: 'national',
    why: "Commemorates the date on which the Constitution of India came into effect on January 26, 1950, replacing the Government of India Act (1935) as the governing document of India. This marked India's transition to a republic.",
    how: "The main celebration is a grand parade in New Delhi, showcasing the military might and cultural diversity of the nation. The President of India takes the salute. Schools and colleges hold cultural programs.",
    who: "Celebrates the Constitution and the leaders who drafted it."
  },
  'National Flag Adoption Day': {
    type: 'national',
    why: "On this day in 1947, the Constituent Assembly of India adopted the tricolor flag as the national flag of independent India. The flag was designed by Pingali Venkayya.",
    how: "While not a public holiday, it is a day of historical significance where people reflect on the importance of the national flag. Educational institutions may hold special events.",
    who: "The Constituent Assembly of India and Pingali Venkayya."
  },
  'Independence Day': {
    type: 'national',
    why: "Commemorates India's freedom from British rule on August 15, 1947. This day marks the end of nearly 200 years of British colonial rule and the birth of a free nation.",
    how: "Celebrated with flag-hoisting ceremonies, parades, and cultural programs. The Prime Minister of India hoists the flag at the Red Fort in Delhi and delivers a speech to the nation. Schools and public institutions hold events.",
    who: "Celebrates the nation's freedom fighters and political leaders."
  },
  'Gandhi Jayanti / Shastri Jayanti': {
    type: 'national',
    why: "This day marks the birthdays of two great national leaders: Mahatma Gandhi and Lal Bahadur Shastri. Gandhi Jayanti is celebrated as the International Day of Non-Violence. Shastri's 'Jai Jawan, Jai Kisan' slogan is remembered for its tribute to soldiers and farmers.",
    how: "Prayers and tributes are paid at the memorials of both leaders (Raj Ghat for Gandhi and Vijay Ghat for Shastri) in Delhi. Schools and colleges hold events on their lives and teachings.",
    who: "Mahatma Gandhi and Lal Bahadur Shastri."
  },
  'Children\'s Day (Nehru Jayanti)': {
    type: 'national',
    why: "Celebrates the birthday of India's first Prime Minister, Jawaharlal Nehru, who was known for his affection for children. The day is dedicated to increasing awareness of the rights, care, and education of children.",
    how: "Educational institutions and organizations hold special events and fun activities for children. Tributes are paid to Jawaharlal Nehru.",
    who: "Jawaharlal Nehru."
  },
};

const states = Object.keys(festivalsByState).sort();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const years = [2025, 2026];

// --- Helper Functions ---
const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

// --- Festival & National Day Detail Modal Component (UPDATED with Tabs) ---
const EventModal = ({ eventInfo, onClose }) => {
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  if (!eventInfo || eventInfo.length === 0) {
    return null;
  }

  const currentEvent = eventInfo[currentEventIndex];
  const totalEvents = eventInfo.length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto p-6 relative transform transition-all scale-100 opacity-100 duration-300 ease-out">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold transition-transform transform hover:rotate-90"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Tab Navigation for Multiple Events */}
        {totalEvents > 1 && (
          <div className="mb-4 border-b border-gray-200">
            <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
              {eventInfo.map((event, index) => (
                <li key={index} className="me-2" role="presentation">
                  <button
                    className={`inline-block p-4 border-b-2 rounded-t-lg ${
                      index === currentEventIndex
                        ? 'border-amber-500 text-amber-600 font-bold'
                        : 'border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300'
                    }`}
                    onClick={() => setCurrentEventIndex(index)}
                    aria-selected={index === currentEventIndex}
                    role="tab"
                  >
                    {event.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Modal Content */}
        <div className="mb-6">
          <h2 className={`text-3xl font-extrabold ${currentEvent.type === 'national' ? 'text-blue-700' : 'text-amber-700'} mb-4 border-b pb-2 ${currentEvent.type === 'national' ? 'border-blue-200' : 'border-amber-200'}`}>
            {currentEvent.name}
          </h2>
          <div className="flex flex-col space-y-4 text-base">
            {currentEvent.why && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Why We Celebrate? (क्यों मनाते हैं?)</h3>
                <p className="text-gray-700 leading-relaxed">{currentEvent.why}</p>
              </div>
            )}
            {currentEvent.how && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">How We Celebrate? (कैसे मनाते हैं?)</h3>
                <p className="text-gray-700 leading-relaxed">{currentEvent.how}</p>
              </div>
            )}
            {currentEvent.who && (
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{currentEvent.type === 'national' ? 'Who is Remembered?' : 'Which God is Worshipped?'}</h3>
                <p className="text-gray-700 leading-relaxed">{currentEvent.who}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};


// --- Main Calendar Component ---
const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedState, setSelectedState] = useState('All India');
  const [selectedFestivalDate, setSelectedFestivalDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalEventInfo, setModalEventInfo] = useState([]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // Memoize the combined list of events for the dropdown
  const allEventsForDropdown = useMemo(() => {
    const combinedEvents = { ...festivalsByState['All India'], ...nationalDays, ...(festivalsByState[selectedState] || {}) };
    return Object.entries(combinedEvents).sort((a, b) => new Date(a[0]) - new Date(b[0]));
  }, [selectedState]);

  const handleDateChange = (year, month) => {
    setCurrentDate(new Date(year, month, 1));
    setSelectedFestivalDate('');
    setShowModal(false);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedFestivalDate('');
    setShowModal(false);
  };

  const handleFestivalChange = (e) => {
    const eventDateStr = e.target.value;
    setSelectedFestivalDate(eventDateStr);
    setShowModal(false);

    if (eventDateStr) {
      const [fYear, fMonth, fDay] = eventDateStr.split('-').map(Number);
      setCurrentDate(new Date(fYear, fMonth - 1, fDay));
    }
  };

  const handleDayClick = (dateString) => {
    const events = [];
    
    const festivalName = festivalsByState[selectedState]?.[dateString] || festivalsByState['All India']?.[dateString];
    if (festivalName) {
      const info = eventDescriptions[festivalName];
      if (info) events.push({ name: festivalName, ...info });
    }

    const nationalDayName = nationalDays[dateString];
    if (nationalDayName) {
      const info = eventDescriptions[nationalDayName];
      if (info) events.push({ name: nationalDayName, ...info });
    }
    

    if (events.length > 0) {
      setModalEventInfo(events);
      setShowModal(true);
      setSelectedFestivalDate(dateString);
    } else {
      setShowModal(false);
      setSelectedFestivalDate('');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setModalEventInfo([]);
  };

  const renderCalendarDays = () => {
    const totalDays = daysInMonth(year, month);
    const startingDay = firstDayOfMonth(year, month);
    const today = new Date();
    const stateFestivals = festivalsByState[selectedState] || {};
    const allIndiaFestivals = festivalsByState['All India'];
    const days = [];

    for (let i = 0; i < startingDay; i++) {
      days.push(<div key={`empty-start-${i}`} className="border-r border-b border-amber-100"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const festival = stateFestivals[dateString] || allIndiaFestivals[dateString] || null;
      const nationalDay = nationalDays[dateString] || null;
      const isSelectedFestival = dateString === selectedFestivalDate;
      const isToday = day === today.getDate() && month === today.getMonth() && year === today.getFullYear();

      const hasEvent = festival || nationalDay;
      const dayClasses = `
        relative flex flex-col h-24 p-2 transition-all duration-300 ease-in-out group rounded-lg
        ${hasEvent ? 'cursor-pointer' : 'cursor-default'}
        ${isSelectedFestival ? 'bg-yellow-200/80 shadow-lg scale-105' : 'hover:bg-yellow-50/80'}
      `;

      days.push(
        <div key={day} className="border-r border-b border-amber-100 p-1">
          <div
            className={dayClasses}
            title={festival || nationalDay || ''}
            onClick={() => handleDayClick(dateString)}
          >
            <div className={`
              flex items-center justify-center w-8 h-8 rounded-full font-bold text-lg transition-all
              ${isToday ? 'bg-amber-500 text-white shadow-md' : 'text-gray-700 group-hover:text-amber-600'}
              ${isSelectedFestival ? 'bg-yellow-500 text-white' : ''}
            `}>
              {day}
            </div>
            {festival && (
              <div className="mt-1 flex-grow overflow-hidden text-center">
                <p className="text-xs font-bold text-amber-800 truncate" aria-label={festival}>
                  {festival}
                </p>
              </div>
            )}
            {nationalDay && (
                <div className="mt-1 flex-grow overflow-hidden text-center">
                    <p className="text-xs font-bold text-blue-800 truncate" aria-label={nationalDay}>
                        {nationalDay}
                    </p>
                </div>
            )}
            {hasEvent && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
            )}
          </div>
        </div>
      );
    }

    const remainingCells = (7 - (days.length % 7)) % 7;
    for (let i = 0; i < remainingCells; i++) {
      days.push(<div key={`empty-end-${i}`} className="border-r border-b border-amber-100"></div>);
    }
    return days;
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-5xl mx-auto font-sans border border-gray-200">
      {/* Main Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
          Festivals Calendar
        </h1>
        <p className="text-sm text-gray-600 mt-2">Dates are based on common Panchang calculations for festivals and fixed dates for national days.</p>
      </div>

      {/* Filters Section with new styling */}
      <div className="mb-6 p-4 bg-gradient-to-r from-yellow-50 to-amber-100 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        {[{ id: 'state-filter', label: 'Rajya (State)', value: selectedState, handler: handleStateChange, options: states.map(s => [s, s]) },
        { id: 'festival-filter', label: 'Tyohaar / Diwas', value: selectedFestivalDate, handler: handleFestivalChange, options: [['', 'Koi chunein...'], ...allEventsForDropdown] },
        { id: 'month-filter', label: 'Mahina (Month)', value: month, handler: (e) => handleDateChange(year, parseInt(e.target.value)), options: months.map((m, i) => [i, m]) },
        { id: 'year-filter', label: 'Saal (Year)', value: year, handler: (e) => handleDateChange(parseInt(e.target.value), month), options: years.map(y => [y, y]) }
        ].map(filter => (
          <div key={filter.id}>
            <label htmlFor={filter.id} className="block text-sm font-semibold text-amber-800 mb-1">{filter.label}</label>
            <div className="relative">
              <select id={filter.id} value={filter.value} onChange={filter.handler} className="w-full appearance-none p-2.5 bg-white border-2 border-amber-200 rounded-lg shadow-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition">
                {filter.options.map(([val, name]) => <option key={val} value={val}>{name}</option>)}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"></path></svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4 mt-6 px-2">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">{monthName} {year}</h2>
        <button onClick={() => setCurrentDate(new Date())} className="px-5 py-2 text-sm font-semibold text-amber-600 bg-amber-100 rounded-full hover:bg-amber-200 transition-colors duration-300 shadow-sm border border-amber-200">
          Aaj (Today)
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 border-t border-l border-amber-100 bg-amber-50/50 rounded-t-lg">
        {daysOfWeek.map(day => (
          <div key={day} className="p-3 text-center font-bold text-amber-700 border-r border-b border-amber-100 text-sm">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 border-l border-b border-amber-100 rounded-b-lg">{renderCalendarDays()}</div>

      {/* Festival & National Day Detail Modal */}
      {showModal && (
        <EventModal eventInfo={modalEventInfo} onClose={closeModal} />
      )}
    </div>
  );
};

function App() {
  return (
    <>
    <Navbar></Navbar>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 mt-15">
      
      <Calendar />
    </div>
      <Footer></Footer>

    </>
  );
}

export default App;
