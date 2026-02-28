export const realmsData = {
  mathematics: {
    name: 'Mathematics',
    sanskrit: 'गणित',
    accent: '#4fc3f7',
    description: 'The foundation of all knowledge',
    environment: 'Ancient Vedic Gurukul',
    zones: [
      {
        id: 'zone1',
        name: 'The Courtyard',
        objects: [
          {
            id: 'zero',
            name: 'The Stone Tablet',
            position: { x: 20, y: 60 },
            story: {
              title: 'The Birth of Zero',
              subtitle: 'Aryabhata & Brahmagupta — 499 AD',
              content: 'Imagine trying to count without zero. No computers. No phones. No modern science. For thousands of years, civilizations across the world struggled with mathematics because they had no concept of nothing. Then in ancient India, a young mathematician named Aryabhata sitting in the great university of Nalanda looked at the empty space between numbers and saw something revolutionary — he saw everything. He formalized zero not just as an absence but as a number with its own identity, its own rules, its own power. Brahmagupta took it further — he wrote the first rules for arithmetic with zero. Addition, subtraction, multiplication. Suddenly mathematics could describe the universe. Today every computer on earth runs on binary code — ones and zeros. Every calculation ever made uses this system. Every satellite, every phone, every medical machine. All of it traces back to one moment in ancient India when a mathematician looked at nothing and saw infinity.',
              fact: 'The word "zero" comes from the Arabic "sifr" which itself comes from the Sanskrit word "shunya" meaning empty or void.'
}
          },
          {
            id: 'baudhayana',
            name: 'The Geometric Carving',
            position: { x: 50, y: 70 },
            story: {
            title: "India's Theorem",
            subtitle: 'Baudhayana — 800 BCE',
            content: 'In every school in every country on Earth, children learn the Pythagorean theorem. The square of the hypotenuse equals the sum of squares of the other two sides. It is named after the Greek mathematician Pythagoras who was born in 570 BCE. But carved into ancient Indian texts called the Sulba Sutras — written by the mathematician Baudhayana — is the exact same theorem. Written in 800 BCE. Two hundred and thirty years before Pythagoras was even born. Baudhayana did not just state the theorem — he used it practically to construct perfectly proportioned sacred fire altars across ancient India. The geometry was so precise that archaeologists excavating these sites thousands of years later found the mathematical relationships still intact in the physical dimensions of the structures. The world calls it Pythagoras. History knows it began in India.',
            fact: 'The Sulba Sutras also contain approximations of the square root of 2 accurate to five decimal places — written in 800 BCE.'
}
          },
          {
            id: 'decimal',
            name: 'The Counting Stones',
            position: { x: 75, y: 55 },
            story: {
            title: 'How The World Counts',
            subtitle: 'Ancient India — 100 BCE',
            content: 'Right now, everywhere on Earth, every number written by every human being uses a system invented in ancient India. The decimal place value system — where the position of a digit determines its value — was one of the most transformative intellectual achievements in human history. Before this system, Romans wrote 1999 as MCMXCIX. Imagine trying to do multiplication with that. Ancient Indian mathematicians developed a clean elegant system where ten symbols could express any number imaginable. Arab scholars traveling to India encountered this system and brought it back to the Islamic world. European mathematicians learned it from Arab scholars. They called them Arabic numerals. But Arab scholars themselves called them Hindu numerals — because they knew exactly where they came from. Every bill you pay, every distance you measure, every calculation ever made in the modern world is done in a system that ancient India gave humanity.',
            fact: 'Fibonacci — the famous Italian mathematician — traveled to North Africa and learned Indian numerals from Arab scholars. He introduced them to Europe in 1202 AD.'
}
          }
        ]
      },
      {
        id: 'zone2',
        name: 'The Inner Chamber',
        objects: [
          {
            id: 'pingala',
            name: 'The Sand Patterns',
            position: { x: 30, y: 60 },
            story: {
            title: 'The Language of Machines',
            subtitle: 'Pingala — 300 BCE',
            content: 'In 300 BCE an ancient Indian scholar named Pingala was studying the rhythms and meters of Sanskrit poetry. He was trying to find patterns in how short and long syllables combined to create different rhythms. To map these patterns he created a system using two symbols — light and heavy, short and long. What Pingala created to describe the beauty of Sanskrit verse was mathematically identical to what engineers in the 1940s called the binary number system — the language of all computers. Every piece of software ever written, every app on your phone, every email ever sent exists as a pattern of ones and zeros. The same pattern Pingala described in the context of ancient poetry over two thousand years ago. The language that powers the entire digital world was born in ancient India as a way to understand the music of Sanskrit.',
            fact: 'Pingala\'s binary system is described in his text Chandahśāstra — a work on Sanskrit prosody written around 300 BCE.'
}
          },
          {
            id: 'madhava',
            name: 'The Kerala Scroll',
            position: { x: 65, y: 65 },
            story: {
            title: 'Calculus — The Untold Origin',
            subtitle: 'Madhava of Kerala — 1350 AD',
            content: 'Every student of mathematics learns that calculus was invented by Isaac Newton and Gottfried Leibniz in the late 1600s. It is one of the most celebrated achievements in the history of science. But in the lush green forests of Kerala in southern India, two hundred years before Newton was born, a mathematician named Madhava had already discovered it. Madhava developed infinite series expansions for trigonometric functions — the mathematical foundation of calculus. He computed the value of Pi to eleven decimal places using these series. He calculated sine and cosine values with accuracy that would not be matched in Europe for centuries. His work was recorded and expanded by the Kerala School of Mathematics — a remarkable tradition of mathematical thinking that flourished in India while Europe was still in the medieval period. History gave Newton and Leibniz the credit. The mathematics itself began in Kerala.',
            fact: 'The Kerala School of Mathematics flourished from the 14th to 16th century. Some historians believe their work may have reached Europe through Jesuit missionaries before Newton\'s birth.'
}
          }
        ]
      }
    ]
  },
  astronomy: {
    name: 'Astronomy',
    sanskrit: 'खगोल',
    accent: '#9c6fd6',
    description: 'Reading the cosmos with naked eyes',
    environment: 'Ancient Observatory at Night',
    zones: [
      {
        id: 'zone1',
        name: 'The Main Platform',
        objects: [
          {
            id: 'dayLength',
            name: 'The Sundial',
            position: { x: 25, y: 60 },
            story: {
            title: 'One Second From Perfect',
            subtitle: 'Aryabhata — 499 AD',
            content: 'In the year 499 AD a twenty three year old mathematician sat in the ancient university of Nalanda and calculated how long it takes the Earth to complete one full rotation. He had no telescope. No atomic clock. No satellite. No computer. He had mathematics, observation, and a mind of extraordinary precision. Aryabhata calculated the length of a sidereal day — the time for Earth to rotate relative to distant stars — as 23 hours, 56 minutes, and 4.1 seconds. Modern atomic clocks, the most precise instruments ever created by humanity, measure this value as 23 hours, 56 minutes, and 4.091 seconds. Aryabhata was less than one second away from perfect. Fifteen hundred years ago. Using pure mathematics. In an age when most of the world believed the Sun moved around a flat Earth, a young Indian scholar had already calculated the rotation of our planet with atomic clock precision.',
  fact: 'Aryabhata wrote his masterwork Aryabhatiya at age 23. It contains 118 verses covering mathematics, algebra, plane trigonometry, and spherical trigonometry.'
}         
          },
          {
            id: 'earthCircumference',
            name: 'The Stone Globe',
            position: { x: 55, y: 65 },
            story: {
            title: 'Measuring the Unmeasurable',
            subtitle: 'Brahmagupta — 628 AD',
            content: 'How do you measure the size of a planet without leaving it? In 628 AD the Indian mathematician and astronomer Brahmagupta solved this problem using pure mathematical reasoning. By observing the angles of stars from different locations and applying sophisticated spherical geometry, he calculated the circumference of the Earth as approximately 36,000 kilometers. The actual value measured by modern satellites is 40,075 kilometers. Brahmagupta was within 10 percent of the correct answer — extraordinary precision for the 7th century. To put this in perspective — when Christopher Columbus sailed west in 1492, nearly nine hundred years after Brahmagupta, he was using estimates of Earth\'s size that were less accurate than the Indian calculation made almost a millennium earlier. Columbus actually underestimated Earth\'s size significantly — which is why he thought he had reached Asia when he found America.',
          fact: 'Brahmagupta also described gravity in his text Brahmasphutasiddhanta — he wrote that "bodies fall towards the Earth as it is in the nature of the Earth to attract bodies."'
}
          },
          {
            id: 'panchanga',
            name: 'The Calendar Stone',
            position: { x: 78, y: 55 },
            story: {
            title: 'The Living Calendar',
            subtitle: 'Vedic India — 1000 BCE',
            content: 'Three thousand years ago ancient Indian astronomers created a calendar system so sophisticated and so accurate that it is still in active use today. The Panchanga — meaning five limbs — tracks five simultaneous astronomical cycles: the lunar day, the day of the week, the lunar mansion, the yoga, and the karana. It accurately predicts solar and lunar eclipses, planetary positions, and the precise timing of astronomical events centuries into the future. Every Hindu festival celebrated today — Diwali, Holi, Navratri, Eid calculated by Islamic scholars using methods derived from Indian astronomy — is timed using this ancient system. While civilizations across the world were building crude seasonal calendars, ancient India had created a multi dimensional astronomical tracking system of breathtaking complexity. It has been running continuously for over three thousand years without a single correction needed.',
            fact: 'The Panchanga predicted the solar eclipse of August 11 1999 with such accuracy that modern astronomers verified the ancient calculations and found them correct.'
}
          }
        ]
      },
      {
        id: 'zone2',
        name: 'The Star Tower',
        objects: [
          {
            id: 'heliocentrism',
            name: 'The Ancient Instrument',
            position: { x: 30, y: 58 },
            story: {
            title: 'A Thousand Years Too Early',
            subtitle: 'Aryabhata — 499 AD',
            content: 'In 1543 AD the Polish astronomer Nicolaus Copernicus published his heliocentric model of the solar system — the revolutionary idea that Earth and the planets revolve around the Sun. Europe celebrated it as one of the greatest scientific breakthroughs in history. It took immense courage because it contradicted the Church. But one thousand and forty four years earlier, in 499 AD, the Indian astronomer Aryabhata had already proposed exactly this. He stated clearly that the Earth rotates on its own axis — that the rising and setting of stars is caused by Earth\'s rotation not the movement of the sky. He described the planets moving in elliptical orbits. He placed the Sun at the center of the planetary system. He was right about all of it. For a thousand years this knowledge sat in Indian texts, studied and built upon by successive generations of Indian astronomers, while the West was still building a worldview where Earth sat motionless at the center of everything.',
            fact: 'The Arab astronomer Al-Biruni visited India in the 11th century and wrote extensively about Aryabhata\'s astronomical theories, calling them more accurate than anything in the Islamic world at the time.'
}
          },
          {
            id: 'eclipse',
            name: 'The Eclipse Device',
            position: { x: 65, y: 62 },
            story: {
            title: 'When Gods Went Dark',
            subtitle: 'Varahamihira — 505 AD',
            content: 'For most ancient civilizations a solar eclipse was a terrifying supernatural event — a dragon swallowing the Sun, a sign of divine anger, an omen of catastrophe. Armies stopped battles. Kings cowered in their palaces. Priests performed urgent rituals to bring the Sun back. In ancient India it was different. Indian astronomers had mathematically understood the mechanics of eclipses — that they were caused by the shadow of the Moon falling on Earth or Earth\'s shadow falling on the Moon. Varahamihira and Brahmagupta could calculate exactly when eclipses would occur, how long they would last, and what percentage of the Sun would be covered — centuries before any other civilization on Earth understood what caused them. In a world filled with eclipse terror, ancient Indian astronomers watched calmly, noting the time, comparing predictions with observations, and refining their already extraordinary calculations.',
            fact: 'Varahamihira\'s Brihat Samhita written in 550 AD is an encyclopedic work covering astronomy, astrology, meteorology, botany, and even perfumery — demonstrating the breadth of ancient Indian scientific knowledge.'
}
          }
        ]
      }
    ]
  },
  philosophy: {
    name: 'Philosophy',
    sanskrit: 'दर्शन',
    accent: '#ffb347',
    description: 'The deepest questions ever asked',
    environment: 'Forest Clearing with Banyan Tree',
    zones: [
      {
        id: 'zone1',
        name: 'The Banyan Tree',
        objects: [
          {
            id: 'upanishads',
            name: 'The Ancient Banyan',
            position: { x: 40, y: 50 },
            story: {
            title: 'The Question That Changed Everything',
            subtitle: 'Ancient India — 800 BCE',
            content: 'Three thousand years ago in the forests of ancient India, thinkers sat under trees and asked questions that humanity is still trying to answer. Who am I? What is consciousness? What is the nature of reality? These are not religious questions — they are the deepest philosophical questions that exist. The Upanishads — over 200 ancient Indian texts — contain the most sophisticated early exploration of consciousness, reality, and existence ever written. They introduced Brahman — the universal consciousness underlying all existence — and Atman — the individual self. Their central insight: that at the deepest level, individual consciousness and universal consciousness are the same thing. Thousands of years later quantum physicists, neuroscientists, and philosophers are arriving at similar conclusions using mathematics and experiments. Arthur Schopenhauer — considered one of Europe\'s greatest philosophers — read the Upanishads late in life and wrote that they were the greatest gift of any century and that they had been the comfort of his life.',
            fact: 'The Upanishads have been translated into Persian, Latin, French, German, and English. They influenced philosophers from Schopenhauer to Emerson to Jung to Oppenheimer.'
}
          },
          {
            id: 'advaita',
            name: 'The Mirror',
            position: { x: 70, y: 60 },
            story: {
            title: 'The Illusion of Separation',
            subtitle: 'Adi Shankaracharya — 788 AD',
            content: 'In 788 AD a child was born in a small village in Kerala who would walk across the entire Indian subcontinent, debate the greatest scholars of his age, and produce a philosophical system so profound that it is still studied in philosophy departments around the world today. His name was Adi Shankaracharya and his philosophy was Advaita Vedanta — non-duality. His central insight was radical and beautiful: that the experience of being a separate individual self — separate from other people, separate from the universe — is an illusion called Maya. At the deepest level of reality there is only one consciousness. The universe is not a collection of separate things. It is one thing experiencing itself from billions of different perspectives. This idea — arrived at through pure philosophical reasoning in 8th century India — is remarkably close to what some interpretations of quantum mechanics and consciousness studies suggest today. Shankaracharya consolidated this entire philosophical system and debated it across India before he died at the age of 32.',
            fact: 'Shankaracharya walked over 2000 kilometers across India on foot, established four monasteries at the four cardinal directions of the subcontinent, and wrote commentaries on the Upanishads, Bhagavad Gita, and Brahma Sutras — all before the age of 32.'
}
          },
          {
            id: 'vasudhaiva',
            name: 'The World Stone',
            position: { x: 20, y: 65 },
            story: {
            title: 'One Family',
            subtitle: 'Maha Upanishad — Ancient India',
            content: 'The United Nations was founded in 1945. The Universal Declaration of Human Rights was adopted in 1948. The idea that all human beings belong to one global community — that national boundaries are secondary to our shared humanity — feels like a modern progressive idea. It is not. Thousands of years ago an ancient Indian text called the Maha Upanishad contained four Sanskrit words that expressed this idea with more elegance than any modern declaration: Vasudhaiva Kutumbakam. The whole world is one family. Not the whole nation. Not the whole tribe. Not the whole religion. The whole world. Every human being regardless of where they were born, what language they spoke, what god they worshipped — one family. In an age of tribalism, warfare, and rigid social hierarchies this was a revolutionary moral statement. Today these four words are inscribed in the entrance hall of the Parliament of India — a three thousand year old idea still guiding a modern democracy.',
            fact: 'Vasudhaiva Kutumbakam was quoted by the Indian Prime Minister at the G20 summit in 2023, bringing this ancient philosophy to the world stage once again.'
}
          }
        ]
      },
      {
        id: 'zone2',
        name: 'The River Bank',
        objects: [
          {
            id: 'charvaka',
            name: 'The Stone Fire Pit',
            position: { x: 35, y: 62 },
            story: {
            title: 'The First Rationalists',
            subtitle: 'Charvaka School — 600 BCE',
            content: 'In a world dominated by religion, ritual, and divine authority — in an age when questioning the gods could mean death — a school of philosophers in ancient India stood up and said: there is no God, there is no afterlife, there is no soul, and the only valid source of knowledge is direct sensory experience. The Charvaka school — also called Lokayata meaning of this world — was the world\'s first organized atheist and materialist philosophical movement. They rejected the Vedas. They rejected priests. They rejected karma and reincarnation. They argued that consciousness is simply a property of matter and disappears at death. They demanded evidence for claims. They celebrated life in the present rather than sacrifice for a promised afterlife. This radical rational philosophy existed in India six hundred years before the Common Era — centuries before Greek materialism, centuries before the European Enlightenment, centuries before modern secular humanism. Ancient India contained multitudes — and among them were the world\'s first rational skeptics.',
            fact: 'Despite being called heretical by orthodox Hindu texts, Charvaka philosophy was taken seriously enough to be debated and documented by scholars across all Indian philosophical traditions for centuries.'
}
          },
          {
            id: 'buddhism',
            name: 'The Lotus',
            position: { x: 68, y: 58 },
            story: {
            title: 'The Mind That Moved The World',
            subtitle: 'Siddhartha Gautama — 500 BCE',
            content: 'Born as a prince in the foothills of the Himalayas in what is now Nepal — then part of the ancient Indian cultural world — Siddhartha Gautama walked away from everything. His palace, his wealth, his family. He spent years as an ascetic, nearly starving himself. He sat under a Bodhi tree in Bodh Gaya in modern Bihar and refused to move until he understood the nature of suffering. What emerged from that stillness was one of the most influential philosophical and psychological systems in human history. The Four Noble Truths. The Eightfold Path. The Middle Way. The concept of impermanence. The radical idea that suffering comes from craving and that the mind can be trained to be free. Buddhism spread from ancient India across all of Asia — shaping the philosophy, art, architecture, governance, and daily life of billions of people across China, Japan, Korea, Thailand, Sri Lanka, Tibet, and beyond. Today over 500 million people follow a path that began under a tree in ancient India.',
            fact: 'The Bodhi tree under which the Buddha attained enlightenment in Bodh Gaya still stands today — or rather a direct descendant of it does. It is one of the most visited sacred sites in the world.'
}
          }
        ]
      }
    ]
  },
  trade: {
    name: 'Trade',
    sanskrit: 'व्यापार',
    accent: '#4db6ac',
    description: 'The empire of commerce',
    environment: 'Ancient Port at Dusk',
    zones: [
      {
        id: 'zone1',
        name: 'The Dockyard',
        objects: [
          {
            id: 'lothal',
            name: 'The Ancient Dock',
            position: { x: 25, y: 62 },
            story: {
  title: 'The Port That Shouldn\'t Exist',
  subtitle: 'Lothal, Gujarat — 2400 BCE',
  content: 'In 1954 archaeologists digging in the Gujarat desert made a discovery that rewrote the history of human civilization. They found a port. Not just any port — a perfectly engineered maritime facility with a tidal lock system, brick-lined docks, warehouses, and a sophisticated drainage network. It was 4400 years old. The port of Lothal — part of the Indus Valley Civilization — had engineering solutions that European ports would not implement for thousands of years. The tidal lock allowed ships to enter and exit regardless of tide levels — a concept that modern ports still use. The dock was aligned to take advantage of prevailing winds. The warehouses were positioned for efficient loading and unloading. At a time when most civilizations were just discovering river navigation, ancient India had already built a planned international sea port with advanced hydraulic engineering. The world\'s first global traders were from India.',
  fact: 'Artifacts from Lothal have been found in Mesopotamia, Persia, and Egypt — confirming that this 4400 year old port was conducting genuine international trade across thousands of kilometers.'
}
          },
          {
            id: 'gdp',
            name: "The Merchant's Scale",
            position: { x: 55, y: 58 },
            story: {
            title: 'The Richest Place on Earth',
            subtitle: 'Ancient India — 1 AD',
            content: 'When the Roman Empire was at the height of its power — conquering Britain, ruling North Africa, dominating the Mediterranean — there was a civilization on the other side of the world that was wealthier. By a lot. At the beginning of the Common Era, ancient India accounted for approximately one third of the entire world\'s economic output. This is not mythology or national pride — it is documented by the economic historian Angus Maddison in rigorous historical GDP research used by the OECD and World Bank. Ancient India produced the world\'s most sought after goods — cotton textiles so fine they were described as "woven air", steel so superior that the entire ancient world paid fortunes for it, spices that were literally worth their weight in gold, gems that adorned the crowns of every major empire. For over a thousand years ancient India sat at the center of global commerce — not as a supplier to richer nations but as the richest nation itself.',
            fact: 'India\'s share of world GDP was approximately 32% in 1 AD. By 1947 when British rule ended it had fallen to under 4%. The wealth was not lost — it was systematically transferred.'
}
          },
          {
            id: 'shrenis',
            name: 'The Guild Seal',
            position: { x: 78, y: 65 },
            story: {
            title: 'Before The Corporation',
            subtitle: 'Ancient India — 800 BCE',
            content: 'Business school textbooks say the modern corporation was invented by the Dutch East India Company in 1602 — a joint stock company that allowed multiple investors to share profits and losses from trading expeditions. But in ancient India, over two thousand years earlier, sophisticated business organizations called Shrenis were already operating with most of the features we associate with modern corporations. Shrenis had their own legal identity separate from their members. They issued what functioned as promissory notes — an early form of banking instrument. They had internal governance rules and dispute resolution mechanisms. They operated across vast distances coordinating trade from India to Arabia to Southeast Asia to Rome. They were regulated under Chanakya\'s Arthashastra which describes rules for their formation, operation, and dissolution in remarkable detail. The idea of organized collective commerce — the foundation of the entire modern global economy — was pioneered in ancient India.',
            fact: 'Shrenis are mentioned in Buddhist texts, the Arthashastra, and inscriptions found across ancient India dating back to at least 800 BCE — over 2400 years before the Dutch East India Company.'
}
          }
        ]
      },
      {
        id: 'zone2',
        name: 'The Treasury',
        objects: [
          {
            id: 'rome',
            name: 'The Roman Coin',
            position: { x: 32, y: 60 },
            story: {
            title: 'The Empire That Paid India',
            subtitle: 'Rome & India — 1 AD',
            content: 'The Roman Empire conquered most of the known world. Its legions marched from Scotland to Mesopotamia. Its navy controlled the Mediterranean. It was the most powerful military force of its age. And it was economically dependent on India. Roman citizens had developed an insatiable appetite for Indian goods — pepper, cotton, silk, gems, ivory, and aromatic woods. The trade was so one-sided that gold was flowing out of Rome into India at an alarming rate. The Roman historian Pliny the Elder wrote in 77 AD that India was draining the Roman Empire of fifty million sesterces every year. Emperor Tiberius tried to pass laws banning Indian luxury goods to stop the financial hemorrhage. It did not work. When archaeologists excavate Roman sites today they find Indian pepper, Indian cotton, Indian gems. When they excavate ancient Indian sites they find Roman gold coins — more Roman coins found in India than in any country outside the former Roman Empire itself.',
            fact: 'Pliny the Elder wrote in his Natural History: "India, China and Arabia take from our empire annually 100 million sesterces" — with India receiving the largest share. This is documented historical fact.'
}
          },
          {
            id: 'pepper',
            name: 'The Pepper Jar',
            position: { x: 65, y: 63 },
            story: {
            title: 'The Spice That Discovered America',
            subtitle: 'Indian Trade Routes — Ancient to Medieval',
            content: 'In 1492 Christopher Columbus sailed west from Spain with three ships and a mission: find a direct sea route to India. Not to discover a new continent. Not to find America. To find India — specifically to find the source of black pepper and other spices that were making Indian and Arab merchants extraordinarily wealthy while European buyers paid ruinous prices. Indian black pepper was called black gold in the medieval world — more valuable by weight than most metals. When Alaric the Visigoth sacked Rome in 410 AD he demanded 3000 pounds of pepper as part of his ransom. The entire Age of Exploration — the voyages that mapped the world, that connected the continents, that created the modern global order — was driven primarily by Europe\'s desperate attempt to access Indian spices directly rather than through Arab middlemen. Columbus found America by accident while looking for India. Vasco da Gama succeeded in 1498. The world was changed by the search for something that grew on the Malabar Coast of India.',
            fact: 'The word "pepper" in English derives from the Old English "pipor" which comes from Latin "piper" which comes directly from the Sanskrit word "pippali". The spice and its name both originated in India.'
}
          }
        ]
      }
    ]
  },
  architecture: {
    name: 'Architecture',
    sanskrit: 'स्थापत्य',
    accent: '#cc7a4a',
    description: 'Building the impossible',
    environment: 'Ancient Temple Ruins at Golden Hour',
    zones: [
      {
        id: 'zone1',
        name: 'The Temple Courtyard',
        objects: [
          {
            id: 'indusValley',
            name: 'The City Map',
            position: { x: 22, y: 62 },
            story: {
  title: 'Cities Before Civilization',
  subtitle: 'Indus Valley — 2500 BCE',
  content: 'In 2500 BCE while ancient Egyptians were building pyramids as monuments to their kings, while ancient Mesopotamians were building ziggurats as temples to their gods, the people of the Indus Valley were building something more radical — cities designed for people. The urban planning of Mohenjo-daro and Harappa was so sophisticated it seems impossible for its age. Streets were laid out in perfect grids with smaller lanes running perpendicular to main roads. Every house had access to a covered underground drainage system — a municipal sewage network more sophisticated than anything that would exist in Europe for another four thousand years. Public baths suggested civic spaces for community use. Multi-story buildings demonstrated advanced structural engineering. Standardized brick sizes across cities thousands of kilometers apart suggested centralized planning or shared knowledge systems. These were not primitive settlements — they were designed cities built for human comfort and dignity at a scale and sophistication that the ancient world would not see again for millennia.',
  fact: 'The Great Bath of Mohenjo-daro — built around 2500 BCE — is considered the world\'s earliest public water tank. It was waterproofed with a layer of natural tar and surrounded by changing rooms.'
}
          },
          {
            id: 'kailasa',
            name: 'The Mountain Temple',
            position: { x: 52, y: 58 },
            story: {
  title: 'The Impossible Temple',
  subtitle: 'Kailasa Temple, Ellora — 756 AD',
  content: 'Modern structural engineers have looked at the Kailasa Temple at Ellora and come to a sobering conclusion: they could not build it today. Not because we lack the knowledge — but because the method of construction makes no sense by modern logic. The Kailasa Temple was not built by adding stone upon stone. It was carved. Starting from the top of a mountain and working downward, ancient craftsmen removed an estimated 400,000 tons of rock using only hand tools — chisels, hammers, and human determination — to reveal a temple hidden inside the mountain. The finished structure is twice the size of the Parthenon in Athens. It contains elephants, lions, and mythological scenes carved with such precision that individual feathers on carved birds are visible. The structural calculations required to remove that much rock from the inside of a mountain without the entire thing collapsing are staggering. It took multiple generations to complete. And it was built 200 years before construction of Angkor Wat even began.',
  fact: 'The Kailasa Temple was built during the reign of the Rashtrakuta king Dantidurga. Ancient inscriptions found at the site suggest even the builders were astonished by what they had achieved.'
}
          },
          {
            id: 'konark',
            name: 'The Stone Wheel',
            position: { x: 76, y: 65 },
            story: {
  title: 'The Temple That Tells Time',
  subtitle: 'Konark Sun Temple — 1250 AD',
  content: 'At first glance the Konark Sun Temple in Odisha looks like a magnificent chariot — a stone vehicle for the Sun God, pulled by seven horses across the sky, with 24 elaborately carved wheels along its base. Look closer at those wheels. Each wheel has eight thick spokes and eight thinner spokes — sixteen in total. The thick spokes divide the wheel into eight sections representing the eight praharas — the eight three-hour periods of the Hindu day. The distance between spokes and the position of the hub can be used to calculate the precise time from the shadow cast by the Sun. These wheels are not decorative. They are accurate sundials built into the architecture of a temple. The builders of Konark combined sacred symbolism, artistic brilliance, and functional astronomical instrumentation into a single monument. Standing before it you are looking simultaneously at a work of art, a religious statement, and a working scientific instrument.',
  fact: 'The Konark Sun Temple is a UNESCO World Heritage Site. The Indian Navy uses the Konark wheel — the Konark Chakra — as its official insignia.'
}
          }
        ]
      },
      {
        id: 'zone2',
        name: 'The Cave Entrance',
        objects: [
          {
            id: 'ajanta',
            name: 'The Cave Paintings',
            position: { x: 35, y: 60 },
            story: {
  title: 'The Lost Masterpiece',
  subtitle: 'Ajanta Caves — 200 BCE to 650 AD',
  content: 'For over a thousand years they were forgotten. Hidden in a horseshoe shaped gorge in Maharashtra, overgrown with jungle, unknown to the outside world, thirty rock-cut cave temples containing some of the greatest art ever created by human hands. Then in 1819 a British officer named John Smith was tiger hunting in the area when he spotted something through the dense foliage — a carved facade in the cliff face. What he had stumbled upon were the Ajanta caves — Buddhist cave monuments carved and painted over eight hundred years from 200 BCE to 650 AD. The paintings inside depict scenes of extraordinary complexity and beauty — royal courts, trading caravans, love stories, battles, spiritual teachings — all rendered with a sophistication of perspective and emotion that European painting would not achieve for another thousand years. And the colors. Made from minerals, plants, and natural pigments by ancient craftsmen who understood chemistry intuitively, these paintings have survived two thousand years and remain vivid today.',
  fact: 'The Ajanta caves contain the world\'s oldest surviving paintings on a large scale. The painting techniques used there were so advanced that art historians believe they influenced Buddhist art traditions across all of Asia.'
}
          },
          {
            id: 'ironPillar',
            name: 'The Iron Pillar',
            position: { x: 68, y: 62 },
            story: {
  title: 'The Mystery of the Rust-Free Pillar',
  subtitle: 'Delhi Iron Pillar — 402 AD',
  content: 'In the courtyard of the Qutb Minar complex in Delhi stands a seven meter tall iron pillar that has been there for over 1600 years. It weighs more than six tons. It has survived monsoons, temperature extremes, and the pollution of a modern megacity. And it has not rusted. For centuries this was considered a mystery — even a miracle. Modern metallurgists finally solved it in the 20th century. The pillar was forged using a unique composition of phosphoric iron that creates a protective layer of iron hydrogen phosphate on its surface — a natural self-repairing coating that prevents oxidation. Ancient Indian metallurgists had somehow — through generations of empirical experimentation — developed a forge-welding technique and metal composition that modern industry struggled to replicate. They did not have the scientific theory to explain why it worked. They simply knew that it did, and they executed it flawlessly on a scale that remains extraordinary.',
  fact: 'An inscription on the pillar written in Sanskrit in the Gupta script confirms it was erected during the reign of Chandragupta II around 402 AD. Scientists are still studying it to fully understand its corrosion resistance.'
}
          }
        ]
      }
    ]
  },
  art: {
    name: 'Art',
    sanskrit: 'कला',
    accent: '#e57373',
    description: 'Beauty as a form of truth',
    environment: 'Ancient Cave with Paintings',
    zones: [
      {
        id: 'zone1',
        name: 'The Cave Walls',
        objects: [
          {
            id: 'bhimbetka',
            name: 'The Ancient Painting',
            position: { x: 25, y: 58 },
            story: {
  title: '30,000 Years of Unbroken Art',
  subtitle: 'Bhimbetka, Madhya Pradesh — 30,000 BCE',
  content: 'Before the pyramids. Before Stonehenge. Before writing. Before agriculture. Before cities. Before any of the things we call civilization — there were people in India making art. The Bhimbetka rock shelters in Madhya Pradesh contain paintings that are thirty thousand years old — among the oldest known artworks in the world. And what makes them extraordinary is not just their age but their quality. These are not random scratches. They depict complex social scenes — hunts with multiple participants, dances with detailed costumes, animals rendered with such accurate anatomy that zoologists can identify the exact species. The paintings span thirty thousand years of continuous human occupation — layer upon layer of different peoples, different cultures, different styles, all choosing to come to these particular shelters and leave their mark on the same walls. It is the longest continuous artistic tradition ever documented in a single location. India has been making art for thirty thousand years.',
  fact: 'Bhimbetka is a UNESCO World Heritage Site. The name comes from "Bhima Baithaka" meaning the sitting place of Bhima — a hero of the Mahabharata — in local legend.'
}
          },
          {
            id: 'ajantaPigments',
            name: 'The Color Palette',
            position: { x: 58, y: 65 },
            story: {
  title: 'Chemistry Disguised as Beauty',
  subtitle: 'Ajanta Caves — 200 BCE',
  content: 'Two thousand years ago ancient Indian artists made a decision that would puzzle and astonish scientists in the twenty-first century. They decided that their paintings should last forever. The pigments they developed for the Ajanta cave paintings were not accidental — they were the result of sophisticated empirical chemistry. Blue came from lapis lazuli ground to precise particle sizes. Green came from malachite mixed with specific binding agents. Red came from red ochre processed in particular ways. The binding agents — a mixture of glue, lime, and plant gums — were applied in exact proportions to cave walls prepared with multiple layers of clay, cow dung, rice husks, and lime plaster. The result: paintings that have survived two thousand years in a humid cave environment and are still vivid today. Modern conservation scientists studying Ajanta\'s pigments have found that some are more chemically stable than contemporary museum-grade synthetic paints. Ancient Indian artists understood materials science at a level that took the rest of the world two thousand years to rediscover.',
  fact: 'The Ajanta cave painters worked by lamplight — the caves have no natural light. They developed a system of using large metal mirrors to reflect and direct sunlight into the caves for illumination during painting.'
}
          },
          {
            id: 'muslin',
            name: 'The Gossamer Fabric',
            position: { x: 78, y: 60 },
            story: {
  title: 'The Fabric That Cannot Be Made',
  subtitle: 'Dhaka Muslin — Ancient Bengal',
  content: 'There is a fabric that the world has lost. Ancient Bengal produced a cotton muslin of such extraordinary fineness that it defied description. Roman writers called it "woven wind." Mughal emperors called it "running water." A full sari — six meters of fabric — could be folded and passed through a finger ring. So sheer that a woman wearing ten yards of it appeared to be wearing nothing at all. The thread count was so impossibly fine — finer than human hair — that microscopic analysis of surviving fragments has left modern textile engineers baffled. No industrial machine today can produce thread that fine. The raw material was a specific variety of cotton called Phuti karpas that grew only on the banks of the Meghna river in Bengal — it no longer exists. The weavers — a hereditary guild who spent decades developing their skill — were deliberately targeted and destroyed by British colonial authorities trying to protect the British textile industry. Their fingers were cut. The craft was killed. The fabric exists now only in museum fragments and ancient descriptions.',
  fact: 'A specimen of Dhaka muslin held in the Victoria and Albert Museum in London has a thread count of 1800 threads per inch. The finest modern luxury cotton typically reaches 400.'
}
          }
        ]
      },
      {
        id: 'zone2',
        name: 'The Performance Stage',
        objects: [
          {
            id: 'natyaShastra',
            name: 'The Dance Scroll',
            position: { x: 30, y: 62 },
            story: {
  title: 'The Complete Science of Expression',
  subtitle: 'Bharata Muni — 200 BCE',
  content: 'Around 200 BCE an ancient Indian scholar named Bharata Muni compiled the most comprehensive treatise on performing arts ever written. The Natya Shastra — the science of performance — contains 6000 verses covering every dimension of theatrical and artistic expression imaginable. It describes 108 distinct karanas — units of dance movement. It catalogs 36 different types of eye movement and their emotional meanings. It defines hand gestures — mudras — so precisely that a trained reader can reconstruct ancient performances from the text alone. But most remarkably the Natya Shastra developed a complete theory of aesthetic experience — the Rasa theory — which identifies eight fundamental human emotions and explains how art can reliably produce specific emotional responses in an audience. This is not mysticism. It is a systematic psychological theory of how human beings experience art. Two thousand years later this theory is still the foundation of classical Indian dance, music, and theatre — and is studied in drama schools and philosophy departments worldwide.',
  fact: 'The Natya Shastra influenced the development of performing arts traditions across all of Southeast Asia. Classical dance forms in Thailand, Cambodia, Java, and Bali trace their theoretical foundations to this ancient Indian text.'
}
          },
          {
            id: 'nataraja',
            name: 'The Bronze Dancer',
            position: { x: 68, y: 58 },
            story: {
  title: 'The Dance of Everything',
  subtitle: 'Chola Dynasty — 900 AD',
  content: 'In the courtyard of CERN — the largest physics laboratory in the world, home of the Large Hadron Collider, the place where humanity searches for the fundamental nature of matter — stands a bronze statue of a dancing figure. The Indian government gifted it. Physicists chose to place it there. Because the Nataraja — Shiva as the cosmic dancer — is a symbol that a particle physicist from any culture can recognize as a profound artistic expression of what they study every day. The Chola bronze casters of South India created the Nataraja around 900 AD using the lost wax casting technique, producing sculptures of such anatomical precision, dynamic energy, and philosophical depth that Carl Sagan described the image as a metaphor for the modern understanding of the cosmos. Every element of the sculpture encodes meaning — the drum of creation, the flame of destruction, the ring of fire representing the cycle of the universe, the lifted foot representing liberation, the trampled dwarf representing ignorance. Art and physics. Symbol and science. Ancient India and the modern world.',
  fact: 'The Nataraja at CERN was unveiled in 2004. A plaque beside it contains a quote from physicist Fritjof Capra connecting the dance of Shiva to the dance of subatomic particles.'
}
          }
        ]
      }
    ]
  },
  ayurveda: {
    name: 'Ayurveda',
    sanskrit: 'आयुर्वेद',
    accent: '#81c784',
    description: 'The science of life',
    environment: 'Lush Forest Floor',
    zones: [
      {
        id: 'zone1',
        name: 'The Herb Garden',
        objects: [
          {
            id: 'charaka',
            name: 'The Herb Bundles',
            position: { x: 25, y: 60 },
            story: {
  title: 'The First Doctor',
  subtitle: 'Charaka Samhita — 400 BCE',
  content: 'Twenty-four hundred years ago a physician named Charaka compiled a medical encyclopedia that would remain the most comprehensive text on medicine for centuries. The Charaka Samhita documents over 700 medicinal plants, describes the importance of diet and digestion in health, identifies different body types and their susceptibility to different diseases, and establishes medical ethics including confidentiality between doctor and patient. But what is most remarkable about the Charaka Samhita is its philosophical approach to medicine. Charaka did not treat diseases — he treated people. He understood that the same illness manifests differently in different people, that mental state affects physical health, that prevention is more valuable than cure. These insights — the personalization of medicine, the mind-body connection, preventive healthcare — are what modern medicine is only now rediscovering as "integrative medicine" and "precision medicine." Charaka understood them 2400 years ago and built an entire medical system around them.',
  fact: 'The Charaka Samhita describes the concept of metabolism, immunity, and the role of digestion in health with such accuracy that modern Ayurvedic researchers are finding molecular-level confirmations of its observations.'
}
          },
          {
            id: 'copper',
            name: 'The Copper Vessel',
            position: { x: 55, y: 65 },
            story: {
  title: 'Ancient Knowledge, Modern Science',
  subtitle: 'Ayurvedic Practice — Ancient India',
  content: 'For thousands of years ancient Indians stored drinking water in copper vessels. Ayurvedic texts recommended it. Grandmothers practiced it. It was dismissed by modern medicine as superstition — the kind of thing educated people were supposed to grow out of. Then scientists started testing it. A study published in the Journal of Health Population and Nutrition in 2012 found that water stored in copper vessels for sixteen hours showed significant reduction in harmful bacteria including E. coli, Salmonella, and other pathogens that cause deadly diarrheal diseases. Further research confirmed that copper ions actively kill bacteria and viruses on contact — a property called the oligodynamic effect. Today hospitals around the world are installing copper door handles, copper bed rails, and copper surfaces in intensive care units to reduce hospital-acquired infections. The World Health Organization has acknowledged copper as an effective antimicrobial surface material. Ancient Indians knew this empirically thousands of years ago and built it into their daily practice. Science took until the 21st century to understand why they were right.',
  fact: 'A 2015 study found that copper surfaces in hospital rooms reduced healthcare-associated infections by 58% compared to standard surfaces. Ancient Ayurvedic wisdom is now becoming standard hospital protocol.'
}
          },
          {
            id: 'mortar',
            name: 'The Stone Mortar',
            position: { x: 78, y: 58 },
            story: {
  title: 'The First Pharmacy',
  subtitle: 'Ancient India — 600 BCE',
  content: 'Before Hippocrates. Before Galen. Before the entire tradition of Western medicine that the modern world is built on — ancient India had already created a systematic science of pharmacology. The Ayurvedic tradition developed sophisticated methods for extracting medicinal compounds from plants, purifying minerals into therapeutic substances, and combining ingredients in precise ratios to create medicines for specific conditions. Ancient Indian pharmacists — called Vaidyas — understood processes we now call distillation, fermentation, calcination, and sublimation. They created herbal oils, medicated ghees, mineral preparations, and fermented medicines. The Ashtanga Hridayam describes over 600 medicinal herbs and their applications. Modern pharmaceutical researchers are finding active compounds in these ancient formulations — turmeric\'s curcumin as an anti-inflammatory, ashwagandha\'s withanolides as stress adaptogens, neem\'s nimbin as an antibacterial — confirming molecule by molecule what ancient Indian pharmacists knew from centuries of careful observation.',
  fact: 'Over 25% of modern pharmaceutical drugs are derived from or inspired by natural plant compounds. Many of the plants now being studied by pharmaceutical companies were documented in Ayurvedic texts 2000 years ago.'
}
          }
        ]
      },
      {
        id: 'zone2',
        name: 'The Treatment Chamber',
        objects: [
          {
            id: 'sushruta',
            name: 'The Surgical Tools',
            position: { x: 30, y: 62 },
            story: {
  title: 'The Surgeon Who Was 2000 Years Early',
  subtitle: 'Sushruta — 600 BCE',
  content: 'In 600 BCE — at a time when European medicine consisted primarily of prayers to gods and the occasional bloodletting — an Indian physician named Sushruta was performing plastic surgery. His text the Sushruta Samhita describes over 300 surgical procedures and 120 surgical instruments including scalpels, forceps, needles, and catheters. He performed rhinoplasty — the reconstruction of damaged noses — using skin flaps from the cheek in a technique so effective that British surgeons in the 18th century learned and adopted it to treat soldiers whose noses had been cut off as punishment. They called it the "Hindu method." Sushruta described cataract surgery using a curved needle to push the clouded lens away from the visual field — a procedure the American Academy of Ophthalmology credits him as the first to perform. He wrote about the importance of sterile conditions, about post-operative care, about the psychological preparation of patients before surgery. He was practicing evidence-based medicine two thousand years before the term existed.',
  fact: 'The Sushruta Samhita describes 8 types of surgical procedures: excision, scarification, puncturing, exploration, extraction, secretion, suturing, and probing — a classification system that influenced surgical practice for centuries.'
}
          },
          {
            id: 'tridosha',
            name: 'The Balance Diagram',
            position: { x: 68, y: 60 },
            story: {
  title: 'The Body as a System',
  subtitle: 'Ayurvedic Theory — Ancient India',
  content: 'Modern medicine is extraordinarily good at treating disease after it occurs. It is much less good at preventing it. The reason is philosophical — Western medicine was built on a reductionist model that treats the body as a collection of separate parts and diseases as external invaders to be defeated. Ayurveda was built on a systems model — the understanding that the body is an integrated whole and that disease is a manifestation of imbalance within that system. The Tridosha theory — the three doshas of Vata, Pitta, and Kapha — is a framework for understanding individual constitutional tendencies, how different people respond to the same environment differently, and what kinds of imbalances each constitutional type is prone to. This is exactly what modern precision medicine — one of the most exciting frontiers of 21st century healthcare — is trying to achieve: personalized medicine that treats individuals rather than diseases. Ayurveda built a working model of this three thousand years ago. The language is different. The underlying insight is identical.',
  fact: 'Harvard Medical School, Johns Hopkins, and Stanford all have integrative medicine programs that include Ayurvedic principles. Multiple Ayurvedic compounds are currently in Phase II and Phase III clinical trials for cancer, diabetes, and neurological conditions.'
}
          }
        ]
      }
    ]
  },
  warstrategy: {
    name: 'War Strategy',
    sanskrit: 'युद्ध नीति',
    accent: '#ef5350',
    description: 'The art of winning before the battle',
    environment: 'Dark Battlefield at Dawn',
    zones: [
      {
        id: 'zone1',
        name: 'The Command Post',
        objects: [
          {
            id: 'arthashastra',
            name: 'The Ancient Manuscript',
            position: { x: 22, y: 60 },
            story: {
  title: 'The Book That Was Lost For 2000 Years',
  subtitle: 'Chanakya — 300 BCE',
  content: 'For two thousand years it was gone. Mentioned in other ancient texts, referenced by scholars, described as a masterwork of political and military thought — but the actual text of Chanakya\'s Arthashastra had vanished from history. Then in 1905 a Sanskrit scholar named R. Shamasastry received a bundle of palm leaf manuscripts from an anonymous donor at the Oriental Research Institute in Mysore. He spent years translating them. What he had found was the complete text of the Arthashastra — the most comprehensive ancient manual on statecraft, warfare, economics, and governance ever written. In 15 books and 6000 verses Chanakya covers military strategy, espionage networks, diplomatic relations, economic policy, judicial systems, urban planning, and the psychology of power. When Western scholars read it they were stunned. Some compared it to Machiavelli\'s Prince — then realized Chanakya had written it 1800 years earlier and in far more detail. It is not just a manual for war. It is a complete theory of the state.',
  fact: 'The Arthashastra was so advanced that when it was rediscovered in 1905 many Western scholars initially refused to believe it was genuinely ancient — it seemed too sophisticated for its claimed date of 300 BCE.'
}
          },
          {
            id: 'chandragupta',
            name: 'The Emperor\'s Crown',
            position: { x: 55, y: 65 },
            story: {
  title: 'The Strategy That Built An Empire',
  subtitle: 'Chanakya & Chandragupta — 321 BCE',
  content: 'He was nobody. A young man of humble birth with no army, no kingdom, no resources, and no allies. The Nanda Empire was the most powerful in India — a vast military state with an enormous standing army that had turned back even Alexander the Great\'s forces at its borders. What Chandragupta Maurya had was Chanakya. The greatest strategic mind of his age took this young man and through a combination of military strategy, political intelligence, psychological warfare, and diplomatic genius helped him dismantle the Nanda Empire piece by piece. They started at the periphery, never confronting the center directly. They built alliances with regional rulers who resented Nanda authority. They used espionage to sow division within Nanda leadership. They identified and exploited every weakness. In 321 BCE Chandragupta entered the Nanda capital and claimed the throne. From that beginning he built the Maurya Empire — stretching from modern Afghanistan to Bangladesh, from the Himalayas to the Deccan. The largest empire India had ever seen. Built not by the strongest warrior but by the smartest strategist.',
  fact: 'Greek ambassador Megasthenes visited the Maurya court and described it as more magnificent than the courts of Persia and Macedonia. His account — Indica — is one of the primary sources for our knowledge of ancient India.'
}
          },
          {
            id: 'saamDaam',
            name: 'The Treaty Scroll',
            position: { x: 78, y: 58 },
            story: {
  title: 'Win Without Fighting',
  subtitle: 'Chanakya — 300 BCE',
  content: 'Sun Tzu wrote that the supreme art of war is to subdue the enemy without fighting. Chanakya built an entire strategic framework around this idea centuries before Sun Tzu\'s text reached India. Saam Daam Dand Bhed — four words that represent a complete decision tree for resolving conflict. Saam: negotiate, persuade, find common ground. Exhaust this option completely before moving on. Daam: offer incentives, create alignment of interests, make cooperation more attractive than conflict. If this fails. Dand: demonstrate consequences, apply measured pressure, show that opposition has costs. Only if all three have been fully exhausted. Bhed: create division among opponents, exploit internal contradictions, separate allies from enemies. And only after all four have failed — war. This framework is 2300 years old. It is still taught in Indian military academies. It appears in Indian corporate strategy literature. It is referenced in diplomatic training programs. Because it works. The insight that every conflict has non-violent solutions that should be exhausted before violence is both moral and strategically sound.',
  fact: 'The phrase Saam Daam Dand Bhed has entered the Hindi language as a common idiom for a comprehensive approach to problem-solving. It is used in everyday conversation, business strategy, and political analysis.'
}
          }
        ]
      },
      {
        id: 'zone2',
        name: 'The Battlefield',
        objects: [
          {
            id: 'chakravyuha',
            name: 'The Formation Diagram',
            position: { x: 32, y: 62 },
            story: {
  title: 'The Formation No One Could Escape',
  subtitle: 'Mahabharata — Ancient India',
  content: 'Picture an army arranged not in a line but in a spiral — a rotating inward turning formation where each layer of soldiers moves in coordination with all the others, creating a system where any force that enters is drawn deeper inward while the walls close behind them. This is the Chakravyuha — the wheel or discus formation described in the Mahabharata. It was considered the most dangerous military formation of the ancient world because it had no conventional weakness. You could not flank it — the spiral wrapped around flanking forces. You could not charge through it — the layers absorbed the impact and closed behind the charge. The only way to survive it was to know how to enter AND how to exit. The story of Abhimanyu — the young warrior who had learned how to enter the Chakravyuha in his mother\'s womb but had fallen asleep before hearing how to exit — is one of the most powerful military allegories in history. Brilliance without complete knowledge is fatal. Military historians who have analyzed the formation call it genuinely effective tactical thinking.',
  fact: 'Several modern military strategists and game theorists have studied the Chakravyuha and published papers analyzing its tactical properties. Its core principle — making retreat as costly as advance — appears in multiple modern military doctrines.'
}
          },
          {
            id: 'chola',
            name: 'The Naval Map',
            position: { x: 67, y: 58 },
            story: {
  title: 'The Empire Across The Ocean',
  subtitle: 'Chola Dynasty — 900 AD',
  content: 'Most people learn about ancient Indian history as the story of a subcontinent turned inward — kingdoms competing for territory within India\'s borders. But for three centuries the Chola dynasty of South India looked outward — across the Bay of Bengal — and built a maritime empire that most history books have never told. At the height of Chola naval power their warships controlled the sea lanes from the Malabar Coast to the South China Sea. They conducted successful military expeditions to Sri Lanka, the Maldives, the Andaman Islands, and in 1025 AD launched the greatest naval campaign of the medieval world — a 3000 kilometer ocean crossing to attack the powerful Srivijaya Empire of modern Sumatra and Malaysia. Rajendra Chola I\'s navy crossed open ocean, defeated multiple maritime kingdoms, and established Chola dominance over the most important trade routes in the medieval world. Indian civilization, Indian culture, Indian art and architecture traveled with these ships — the temples of Cambodia, the art of Thailand, the culture of Java all bear the imprint of this forgotten Indian maritime empire.',
  fact: 'The Chola expedition of 1025 AD is documented in inscriptions found in both India and Southeast Asia. It is considered by naval historians as one of the most ambitious and successful maritime military operations of the pre-modern era.'
}
          }
        ]
      }
    ]
  }
};