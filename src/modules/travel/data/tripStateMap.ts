// Maps trip slug → GeoJSON NAME_1 state name (exact match required)
export const tripStateMap: Record<string, string> = {
  // Karnataka
  "ramadevara-betta-hilltop-february-2026": "Karnataka",
  "nandi-hills-resort-march-2025":          "Karnataka",
  "gokarna-april-2025":                     "Karnataka",
  "ramadevara-betta-hilltop-july-2025":     "Karnataka",
  "coorg-august-2025":                      "Karnataka",
  "nandi-hills-june-2024":                  "Karnataka",
  "bangalore-may-2023":                     "Karnataka",

  // Uttaranchal (GeoJSON uses old name)
  "uttarakhand-march-2026": "Uttaranchal",

  // Sikkim
  "sikkim-april-2025": "Sikkim",

  // West Bengal
  "west-bengal-april-2025": "West Bengal",

  // Goa
  "goa-november-2025": "Goa",
  "goa-june-2024":     "Goa",

  // Kerala
  "kerala-march-2024": "Kerala",

  // Tamil Nadu
  "ooty-coonor-august-2024": "Tamil Nadu",

  // Himachal Pradesh
  "manali-december-2022": "Himachal Pradesh",

  // Chhattisgarh
  "chhattisgarh-june-2023": "Chhattisgarh",

  // Andhra Pradesh
  "araku-valley-visakhapatnam-december-2023": "Andhra Pradesh",
  "dino-park-december-2023":                  "Andhra Pradesh",
  "araku-valley-december-2021":               "Andhra Pradesh",
  "vishakhapatnam-april-2019":                "Andhra Pradesh",

  // Orissa (GeoJSON uses old name for Odisha)
  "kechla-january-2023":          "Orissa",
  "bhubaneswar-january-2023":     "Orissa",
  "18000-may-2023":               "Orissa",
  "bhubaneswar-september-2023":   "Orissa",
  "deomali-rani-duduma-october-2023": "Orissa",
  "deojharan-november-2023":      "Orissa",
  "bhubaneswar-december-2023":    "Orissa",
  "gadpadar-december-2023":       "Orissa",
  "hirakud-dam-january-2022":     "Orissa",
  "koraput-view-point-january-2022": "Orissa",
  "18000-march-2022":             "Orissa",
  "bara-bakhra-july-2022":        "Orissa",
  "kechla-february-2021":         "Orissa",
  "upper-kolab-july-2021":        "Orissa",
  "koraput-sunabeda-august-2021": "Orissa",
  "gadpadar-august-2021":         "Orissa",
  "right-dyke-september-2021":    "Orissa",
  "putsil-october-2021":          "Orissa",
  "siphon-november-2021":         "Orissa",
  "deojharan-november-2021":      "Orissa",
  "maliguda-november-2020":       "Orissa",
  "maliguda-january-2019":        "Orissa",
  "bhubaneswar-november-2018":    "Orissa",
  "kechla-november-2018":         "Orissa",
  "bhubaneswar-december-2017":    "Orissa",

  // International (no state mapping)
  "phuket-thailand-march-2024": "",
}
