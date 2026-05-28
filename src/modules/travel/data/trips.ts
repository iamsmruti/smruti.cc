export interface Trip {
  destination: string;
  date: string;
  emoji: string;
  story?: string;
  highlights?: string[];
  coverImage?: string;
  gallery?: string[];
  slug: string;
  coordinates: [number, number];
}

const trips: Trip[] = [
  {
    "destination": "Ramadevara Betta Hilltop",
    "date": "February 2026",
    "emoji": "⛰️",
    "slug": "ramadevara-betta-hilltop-february-2026",
    "coordinates": [
      12.7214,
      77.2917
    ]
  },
  {
    "destination": "Uttarakhand",
    "date": "March 2026",
    "emoji": "🏔️",
    "slug": "uttarakhand-march-2026",
    "coordinates": [
      30.0668,
      79.0193
    ],
    "coverImage": "/travel/uttarakhand-march-2026/08-backview-peaks.png",
    "gallery": [
      "/travel/uttarakhand-march-2026/08-backview-peaks.png",
      "/travel/uttarakhand-march-2026/07-crampons-summit.png",
      "/travel/uttarakhand-march-2026/04-standing-peaks.png",
      "/travel/uttarakhand-march-2026/03-sitting-peaks.png",
      "/travel/uttarakhand-march-2026/05-devprayag.png",
      "/travel/uttarakhand-march-2026/06-night-snow.png",
      "/travel/uttarakhand-march-2026/09-snowfield.png",
      "/travel/uttarakhand-march-2026/02-bikes-lake.png",
      "/travel/uttarakhand-march-2026/13-bike-ride.png",
      "/travel/uttarakhand-march-2026/10-rafting.jpeg",
      "/travel/uttarakhand-march-2026/01-group-huddle.png",
      "/travel/uttarakhand-march-2026/11-friends.jpeg",
      "/travel/uttarakhand-march-2026/12-misty-forest.png"
    ]
  },
  {
    "destination": "Nandi Hills, Resort",
    "date": "March 2025",
    "emoji": "🌄",
    "slug": "nandi-hills-resort-march-2025",
    "coordinates": [
      13.3702,
      77.6835
    ]
  },
  {
    "destination": "Sikkim",
    "date": "April 2025",
    "emoji": "🏔️",
    "slug": "sikkim-april-2025",
    "coordinates": [
      27.533,
      88.5122
    ]
  },
  {
    "destination": "West Bengal",
    "date": "April 2025",
    "emoji": "🐅",
    "slug": "west-bengal-april-2025",
    "coordinates": [
      22.9868,
      87.855
    ]
  },
  {
    "destination": "Gokarna",
    "date": "April 2025",
    "emoji": "🏖️",
    "slug": "gokarna-april-2025",
    "coordinates": [
      14.5398,
      74.3188
    ]
  },
  {
    "destination": "Ramadevara Betta Hilltop",
    "date": "July 2025",
    "emoji": "⛰️",
    "slug": "ramadevara-betta-hilltop-july-2025",
    "coordinates": [
      12.7214,
      77.2917
    ]
  },
  {
    "destination": "Coorg",
    "date": "August 2025",
    "emoji": "☕",
    "slug": "coorg-august-2025",
    "coordinates": [
      12.3375,
      75.8069
    ]
  },
  {
    "destination": "Goa",
    "date": "November 2025",
    "emoji": "🏖️",
    "coverImage": "https://images.unsplash.com/photo-1512343879784-a960bf40e4f2?q=80&w=1000&auto=format&fit=crop",
    "story": "A perfect escape to the beaches of Goa. Spent the days riding scooters through narrow lush green roads, eating amazing seafood, and watching sunsets. South Goa hits different when you just want to disconnect.",
    "highlights": [
      "Palolem Beach",
      "Scooter rides",
      "Seafood"
    ],
    "slug": "goa-november-2025",
    "coordinates": [
      15.2993,
      74.124
    ]
  },
  {
    "destination": "Kerala",
    "date": "March 2024",
    "emoji": "🌴",
    "slug": "kerala-march-2024",
    "coordinates": [
      10.8505,
      76.2711
    ]
  },
  {
    "destination": "Phuket, Thailand",
    "date": "March 2024",
    "emoji": "🏝️",
    "slug": "phuket-thailand-march-2024",
    "coordinates": [
      7.9519,
      98.3381
    ]
  },
  {
    "destination": "Nandi Hills",
    "date": "June 2024",
    "emoji": "🌄",
    "slug": "nandi-hills-june-2024",
    "coordinates": [
      13.3702,
      77.6835
    ]
  },
  {
    "destination": "Goa",
    "date": "June 2024",
    "emoji": "🏖️",
    "slug": "goa-june-2024",
    "coordinates": [
      15.2993,
      74.124
    ]
  },
  {
    "destination": "Ooty & Coonor",
    "date": "August 2024",
    "emoji": "🚂",
    "slug": "ooty-coonor-august-2024",
    "coordinates": [
      11.41,
      76.6973
    ]
  },
  {
    "destination": "Kechla",
    "date": "January 2023",
    "emoji": "🏞️",
    "slug": "kechla-january-2023",
    "coordinates": [
      18.892,
      82.593
    ]
  },
  {
    "destination": "Bhubaneswar",
    "date": "January 2023",
    "emoji": "🛕",
    "slug": "bhubaneswar-january-2023",
    "coordinates": [
      20.2961,
      85.8245
    ]
  },
  {
    "destination": "18000",
    "date": "May 2023",
    "emoji": "📍",
    "slug": "18000-may-2023",
    "coordinates": [
      18.8143,
      82.7132
    ]
  },
  {
    "destination": "Bangalore",
    "date": "May 2023",
    "emoji": "🏙️",
    "slug": "bangalore-may-2023",
    "coordinates": [
      12.9716,
      77.5946
    ]
  },
  {
    "destination": "Chhattisgarh",
    "date": "June 2023",
    "emoji": "🌳",
    "slug": "chhattisgarh-june-2023",
    "coordinates": [
      21.2787,
      81.8661
    ]
  },
  {
    "destination": "Bhubaneswar",
    "date": "September 2023",
    "emoji": "🛕",
    "slug": "bhubaneswar-september-2023",
    "coordinates": [
      20.2961,
      85.8245
    ]
  },
  {
    "destination": "Deomali, Rani Duduma",
    "date": "October 2023",
    "emoji": "⛰️",
    "slug": "deomali-rani-duduma-october-2023",
    "coordinates": [
      18.6655,
      82.978
    ]
  },
  {
    "destination": "Deojharan",
    "date": "November 2023",
    "emoji": "🏞️",
    "slug": "deojharan-november-2023",
    "coordinates": [
      21.6,
      85.5
    ]
  },
  {
    "destination": "Bhubaneswar",
    "date": "December 2023",
    "emoji": "🛕",
    "slug": "bhubaneswar-december-2023",
    "coordinates": [
      20.2961,
      85.8245
    ]
  },
  {
    "destination": "Gadpadar",
    "date": "December 2023",
    "emoji": "📍",
    "slug": "gadpadar-december-2023",
    "coordinates": [
      18.8143,
      82.7132
    ]
  },
  {
    "destination": "Araku Valley & Visakhapatnam",
    "date": "December 2023",
    "emoji": "🚂",
    "slug": "araku-valley-visakhapatnam-december-2023",
    "coordinates": [
      18.3273,
      82.8775
    ]
  },
  {
    "destination": "Dino Park",
    "date": "December 2023",
    "emoji": "🦕",
    "slug": "dino-park-december-2023",
    "coordinates": [
      17.6868,
      83.2185
    ]
  },
  {
    "destination": "Hirakud Dam",
    "date": "January 2022",
    "emoji": "🌊",
    "slug": "hirakud-dam-january-2022",
    "coordinates": [
      21.5275,
      83.8732
    ]
  },
  {
    "destination": "Koraput, View Point",
    "date": "January 2022",
    "emoji": "⛰️",
    "slug": "koraput-view-point-january-2022",
    "coordinates": [
      18.8143,
      82.7132
    ]
  },
  {
    "destination": "18000",
    "date": "March 2022",
    "emoji": "📍",
    "slug": "18000-march-2022",
    "coordinates": [
      18.8143,
      82.7132
    ]
  },
  {
    "destination": "Bara Bakhra",
    "date": "July 2022",
    "emoji": "📍",
    "slug": "bara-bakhra-july-2022",
    "coordinates": [
      18.8,
      82.7
    ]
  },
  {
    "destination": "Manali",
    "date": "December 2022",
    "emoji": "🏔️",
    "slug": "manali-december-2022",
    "coordinates": [
      32.2396,
      77.1887
    ]
  },
  {
    "destination": "Kechla",
    "date": "February 2021",
    "emoji": "🏞️",
    "slug": "kechla-february-2021",
    "coordinates": [
      18.892,
      82.593
    ]
  },
  {
    "destination": "Upper Kolab",
    "date": "July 2021",
    "emoji": "🌊",
    "slug": "upper-kolab-july-2021",
    "coordinates": [
      18.7909,
      82.628
    ]
  },
  {
    "destination": "Koraput, Sunabeda",
    "date": "August 2021",
    "emoji": "⛰️",
    "slug": "koraput-sunabeda-august-2021",
    "coordinates": [
      18.7845,
      82.8315
    ]
  },
  {
    "destination": "Gadpadar",
    "date": "August 2021",
    "emoji": "📍",
    "slug": "gadpadar-august-2021",
    "coordinates": [
      18.8143,
      82.7132
    ]
  },
  {
    "destination": "Right Dyke",
    "date": "September 2021",
    "emoji": "🌊",
    "slug": "right-dyke-september-2021",
    "coordinates": [
      18.8,
      82.6
    ]
  },
  {
    "destination": "Putsil",
    "date": "October 2021",
    "emoji": "⛰️",
    "slug": "putsil-october-2021",
    "coordinates": [
      18.665,
      82.97
    ]
  },
  {
    "destination": "Siphon",
    "date": "November 2021",
    "emoji": "🌊",
    "slug": "siphon-november-2021",
    "coordinates": [
      18.8,
      82.6
    ]
  },
  {
    "destination": "Deojharan",
    "date": "November 2021",
    "emoji": "🏞️",
    "slug": "deojharan-november-2021",
    "coordinates": [
      21.6,
      85.5
    ]
  },
  {
    "destination": "Araku Valley",
    "date": "December 2021",
    "emoji": "🚂",
    "slug": "araku-valley-december-2021",
    "coordinates": [
      18.3273,
      82.8775
    ]
  },
  {
    "destination": "Maliguda",
    "date": "November 2020",
    "emoji": "📍",
    "slug": "maliguda-november-2020",
    "coordinates": [
      18.8789,
      82.6465
    ]
  },
  {
    "destination": "Maliguda",
    "date": "January 2019",
    "emoji": "📍",
    "slug": "maliguda-january-2019",
    "coordinates": [
      18.8789,
      82.6465
    ]
  },
  {
    "destination": "Vishakhapatnam",
    "date": "April 2019",
    "emoji": "🏖️",
    "slug": "vishakhapatnam-april-2019",
    "coordinates": [
      17.6868,
      83.2185
    ]
  },
  {
    "destination": "Bhubaneswar",
    "date": "November 2018",
    "emoji": "🛕",
    "slug": "bhubaneswar-november-2018",
    "coordinates": [
      20.2961,
      85.8245
    ]
  },
  {
    "destination": "Kechla",
    "date": "November 2018",
    "emoji": "🏞️",
    "slug": "kechla-november-2018",
    "coordinates": [
      18.892,
      82.593
    ]
  },
  {
    "destination": "Bhubaneswar",
    "date": "December 2017",
    "emoji": "🛕",
    "slug": "bhubaneswar-december-2017",
    "coordinates": [
      20.2961,
      85.8245
    ]
  }
];

export default trips;
