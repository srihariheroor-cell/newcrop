// Smart Crop Diagnostic Database
export const cropDiseases = [
  {
    id: "tomato_late_blight",
    crop: "Tomato",
    name: "Late Blight",
    scientificName: "Phytophthora infestans",
    confidence: 97.4,
    severity: "High",
    severityScore: 88,
    affectedArea: "34% of leaf surface",
    statusColor: "#ef4444",
    colorTheme: "danger",
    symptoms: [
      "Dark, water-soaked brown spots on leaf tips and margins",
      "Pale green translucent border around decaying tissue",
      "White fuzzy mold growth on undersides in moist weather",
      "Rapid wilting and decay of leaf petiole stems"
    ],
    causes: "Fungal-like oomycete pathogen spread by wind-blown spores in cool (60-70°F) and humid (>90% RH) conditions.",
    organicTreatments: [
      "Spray Liquid Copper Fungicide thoroughly over upper and lower leaf surfaces every 5–7 days.",
      "Apply Cold-Pressed Neem Oil (2 tbsp/gal water) with organic insecticidal soap.",
      "Prune infected lower foliage immediately and destroy (do not compost).",
      "Transition from overhead sprinklers to ground-level drip irrigation."
    ],
    chemicalTreatments: [
      "Foliar application of Chlorothalonil or Mancozeb preventative protective spray.",
      "Systemic treatment with Metalaxyl / Mefenoxam + Mancozeb tank mix for active control.",
      "Rotate active chemical modes of action (FRAC Group 4 and Group M3) to prevent fungicide resistance."
    ],
    prevention: [
      "Enforce 3-year crop rotation with non-solanaceous crops (avoid peppers, potatoes, eggplants).",
      "Maintain 24-30 inch plant spacing for maximum sunlight penetration and air movement.",
      "Use mulch layers to prevent soil-borne spore splashing onto leaves during rain."
    ],
    boundingArea: { x: 22, y: 18, width: 54, height: 58 },
    heatmapPoints: [
      { x: 35, y: 30, radius: 28, intensity: 0.9 },
      { x: 58, y: 48, radius: 32, intensity: 0.8 },
      { x: 25, y: 60, radius: 20, intensity: 0.65 }
    ],
    bgColor: "#2e1065",
    leafColor: "#15803d",
    spotColor: "#451a03"
  },
  {
    id: "tomato_yellow_curl",
    crop: "Tomato",
    name: "Yellow Leaf Curl Virus",
    scientificName: "Tomato yellow leaf curl virus (TYLCV)",
    confidence: 95.8,
    severity: "Critical",
    severityScore: 94,
    affectedArea: "62% of plant canopy",
    statusColor: "#dc2626",
    colorTheme: "danger",
    symptoms: [
      "Upward curling and cupping of leaf margins",
      "Interveinal chlorosis (yellowing between green leaf veins)",
      "Marked stunting of young shoots and bushy plant habit",
      "Flower abortion and severe reduction in fruit set"
    ],
    causes: "Begomovirus transmitted exclusively by the Silverleaf Whitefly (Bemisia tabaci).",
    organicTreatments: [
      "Install yellow sticky cards (10-15 per 1000 sq ft) to monitor and catch whitefly vectors.",
      "Apply reflective silver aluminum mulch beneath plants to disorient flying insects.",
      "Spray Potassium Salts of Fatty Acids (Insecticidal Soap) combined with horticultural oil."
    ],
    chemicalTreatments: [
      "Soil drench or foliar spray of Imidacloprid or Thiamethoxam for systemic vector control.",
      "Spirotetramat or Cyantraniliprole foliar spray during high whitefly pressure phases."
    ],
    prevention: [
      "Plant certified resistant/tolerant tomato cultivars (e.g., Sun Gold, Tycoon, Defiant).",
      "Erect 50-mesh physical insect screening around nursery beds and green houses."
    ],
    boundingArea: { x: 15, y: 15, width: 70, height: 68 },
    heatmapPoints: [
      { x: 40, y: 25, radius: 35, intensity: 0.95 },
      { x: 55, y: 55, radius: 40, intensity: 0.85 }
    ],
    bgColor: "#451a03",
    leafColor: "#a3e635",
    spotColor: "#eab308"
  },
  {
    id: "corn_common_rust",
    crop: "Corn / Maize",
    name: "Common Rust",
    scientificName: "Puccinia sorghi",
    confidence: 96.1,
    severity: "Moderate",
    severityScore: 65,
    affectedArea: "28% of leaf surface",
    statusColor: "#f59e0b",
    colorTheme: "warning",
    symptoms: [
      "Small cinnamon-brown to golden pustules scattered across both leaf surfaces",
      "Powdery reddish-brown spore dust when touched",
      "Elongated chlorotic spots preceding pustule eruption",
      "Premature leaf drying under severe infections"
    ],
    causes: "Basidiomycete fungus airborne from southern regions during warm, humid days (65-78°F) with dew.",
    organicTreatments: [
      "Dust foliage with elemental sulfur powder in early morning dew.",
      "Apply bio-fungicides containing Bacillus subtilis or Trichoderma strains.",
      "Ensure maximum sunlight exposure and avoid late afternoon irrigation."
    ],
    chemicalTreatments: [
      "Foliar application of Azoxystrobin, Pyraclostrobin, or Propiconazole at first sign of pustules.",
      "Apply Triazole + Strobilurin premix fungicide if infection reaches upper canopy before silking."
    ],
    prevention: [
      "Select high-yielding corn hybrids with genetic resistance genes (Rp genes).",
      "Destroy woodsorrel (Oxalis) alternate host weeds near field boundaries."
    ],
    boundingArea: { x: 18, y: 22, width: 64, height: 52 },
    heatmapPoints: [
      { x: 30, y: 35, radius: 18, intensity: 0.75 },
      { x: 50, y: 45, radius: 22, intensity: 0.7 },
      { x: 68, y: 30, radius: 15, intensity: 0.6 }
    ],
    bgColor: "#14532d",
    leafColor: "#16a34a",
    spotColor: "#b45309"
  },
  {
    id: "corn_northern_blight",
    crop: "Corn / Maize",
    name: "Northern Corn Leaf Blight",
    scientificName: "Exserohilum turcicum",
    confidence: 94.7,
    severity: "High",
    severityScore: 82,
    affectedArea: "45% of lower foliage",
    statusColor: "#ef4444",
    colorTheme: "danger",
    symptoms: [
      "Long, elliptical, cigar-shaped tan or grayish lesions (1-6 inches long)",
      "Dark olivaceous spore dust inside lesion centers during moist periods",
      "Lesions coalescing into large blighted dead zones across leaf veins"
    ],
    causes: "Fungal pathogen overwintering in corn crop residue, favored by moderate temperatures (64-81°F) and wet leaves.",
    organicTreatments: [
      "Spray Potassium Bicarbonate solution (1 tbsp/gal water with organic sticker).",
      "Incorporate bio-inoculants into soil to accelerate residue decomposition post-harvest.",
      "Foliar spray of active compost tea rich in beneficial saprophytic microbes."
    ],
    chemicalTreatments: [
      "Apply Prothioconazole, Trifloxystrobin, or Metconazole fungicide at VT/R1 growth stage.",
      "Re-evaluate treatment threshold if 50% of plants show lesions on the ear leaf minus one."
    ],
    prevention: [
      "Enforce minimum 2-year rotation with non-host crops like soybeans, sunflower, or cotton.",
      "Practice clean tillage or conservation tillage with residue shredding."
    ],
    boundingArea: { x: 12, y: 25, width: 76, height: 48 },
    heatmapPoints: [
      { x: 28, y: 40, radius: 25, intensity: 0.88 },
      { x: 62, y: 50, radius: 30, intensity: 0.82 }
    ],
    bgColor: "#1c1917",
    leafColor: "#15803d",
    spotColor: "#78350f"
  },
  {
    id: "potato_early_blight",
    crop: "Potato",
    name: "Early Blight",
    scientificName: "Alternaria solani",
    confidence: 93.9,
    severity: "Moderate",
    severityScore: 58,
    affectedArea: "22% of canopy",
    statusColor: "#f59e0b",
    colorTheme: "warning",
    symptoms: [
      "Target-board dark brown lesions with concentric ridges on older bottom leaves",
      "Yellow chlorotic halo surrounding distinct brown leaf spots",
      "Leaves turning completely yellow, dying, and hanging on stems"
    ],
    causes: "Fungal pathogen favored by alternating wet and dry cycles, nitrogen deficiency, and plant stress.",
    organicTreatments: [
      "Apply Copper Hydroxide or Copper Sulfate formulation every 7 days.",
      "Foliar spray of Bacillus amyloliquefaciens (strain QST 713).",
      "Supply adequate Nitrogen & Potassium via organic fertigation to alleviate stress."
    ],
    chemicalTreatments: [
      "Foliar application of Difenoconazole, Azoxystrobin, or Chlorothalonil.",
      "Rotate with Boscalid or Fluopyram to manage severe late-season outbreaks."
    ],
    prevention: [
      "Maintain optimal plant nutrition; avoid premature vine senescing.",
      "Destroy potato volunteer plants and Solanaceous weeds."
    ],
    boundingArea: { x: 20, y: 20, width: 60, height: 60 },
    heatmapPoints: [
      { x: 38, y: 38, radius: 24, intensity: 0.7 },
      { x: 60, y: 55, radius: 20, intensity: 0.65 }
    ],
    bgColor: "#3f6212",
    leafColor: "#4d7c0f",
    spotColor: "#292524"
  },
  {
    id: "rice_bacterial_blight",
    crop: "Rice",
    name: "Bacterial Leaf Blight",
    scientificName: "Xanthomonas oryzae pv. oryzae",
    confidence: 98.2,
    severity: "High",
    severityScore: 90,
    affectedArea: "50% of tillers affected",
    statusColor: "#ef4444",
    colorTheme: "danger",
    symptoms: [
      "Water-soaked yellow-to-white translucent stripes starting from leaf tips along margins",
      "Wavy lesion margins with bacterial ooze beads drying into amber drops",
      "Seedling wilt (Kresek phase) leading to entire plant death"
    ],
    causes: "Vascular bacterial infection entering through leaf hydathodes or mechanical wounds during rainstorms and high humidity.",
    organicTreatments: [
      "Traditional bio-formulation spray: Fresh cow dung slurry (10% W/V) filtered through fine cloth.",
      "Foliar application of Copper Hydroxide + Kasugamycin bio-bactericide.",
      "Drain standing water immediately and reduce water depth."
    ],
    chemicalTreatments: [
      "Seed treatment and foliar spray of Streptomycin Sulfate (90%) + Tetracycline Hydrochloride (10%).",
      "Apply Copper Oxychloride 50% WP at 2.5 g/liter."
    ],
    prevention: [
      "Avoid excessive split applications of Nitrogen fertilizer during active tillering.",
      "Plant high-resistant varieties containing Xa21 or Xa4 resistance genes."
    ],
    boundingArea: { x: 10, y: 15, width: 80, height: 70 },
    heatmapPoints: [
      { x: 45, y: 25, radius: 35, intensity: 0.92 },
      { x: 50, y: 60, radius: 30, intensity: 0.85 }
    ],
    bgColor: "#064e3b",
    leafColor: "#65a30d",
    spotColor: "#fef08a"
  },
  {
    id: "wheat_yellow_rust",
    crop: "Wheat",
    name: "Yellow Stripe Rust",
    scientificName: "Puccinia striiformis f. sp. tritici",
    confidence: 96.5,
    severity: "High",
    severityScore: 85,
    affectedArea: "40% of flag leaf",
    statusColor: "#ef4444",
    colorTheme: "danger",
    symptoms: [
      "Bright yellow to orange pustules arranged in narrow linear stripes along leaf veins",
      "Yellow powdery spores rubbing off on fingers",
      "Desiccation of flag leaves critical for grain filling"
    ],
    causes: "Airborne fungal spores thriving in cool climates (35-59°F) with high relative humidity and morning mists.",
    organicTreatments: [
      "Foliar spray of Micronized Sulfur (3-4 g/L).",
      "Bio-inoculant foliar application of Pseudomonas fluorescens.",
      "Ensure early sowing to escape peak stripe rust weather window."
    ],
    chemicalTreatments: [
      "Immediate spray of Tebuconazole 250 EC or Propiconazole 25 EC at initial appearance.",
      "Mix Pyraclostrobin for prolonged residual protection during flag leaf emergence."
    ],
    prevention: [
      "Sow certified rust-resistant wheat varieties (e.g., DBW 187, HD 3226).",
      "Eliminate volunteer wheat plants during non-crop fallow period."
    ],
    boundingArea: { x: 25, y: 10, width: 50, height: 80 },
    heatmapPoints: [
      { x: 45, y: 30, radius: 20, intensity: 0.88 },
      { x: 52, y: 55, radius: 22, intensity: 0.84 }
    ],
    bgColor: "#14532d",
    leafColor: "#22c55e",
    spotColor: "#eab308"
  },
  {
    id: "apple_scab",
    crop: "Apple",
    name: "Apple Scab",
    scientificName: "Venturia inaequalis",
    confidence: 95.1,
    severity: "Moderate",
    severityScore: 70,
    affectedArea: "30% of leaf & fruit",
    statusColor: "#f59e0b",
    colorTheme: "warning",
    symptoms: [
      "Velvety olive-green to dull dark brown spots on upper leaf surfaces",
      "Leaf puckering, twisting, and premature autumn defoliation",
      "Cork-like dark scabby lesions on young apples causing cracking"
    ],
    causes: "Ascomycete fungus overwintering on fallen leaves; ascospore release triggered by spring rains.",
    organicTreatments: [
      "Apply Liquid Lime-Sulfur spray at green tip and pink bud stage.",
      "Foliar spray of Potassium Bicarbonate (0.5% solution).",
      "Rake, collect, and burn or deeply compost all fallen autumn orchard leaves."
    ],
    chemicalTreatments: [
      "Protectant sprays with Captan or Mancozeb before rain events.",
      "Curative systemic sprays with Myclobutanil, Difenoconazole, or Cyprodinil within 48 hours of infection event."
    ],
    prevention: [
      "Prune orchard trees annually to open up canopy for fast drying after rain.",
      "Plant scab-resistant cultivars (e.g., Liberty, Enterprise, Pristine)."
    ],
    boundingArea: { x: 20, y: 20, width: 60, height: 60 },
    heatmapPoints: [
      { x: 35, y: 35, radius: 25, intensity: 0.72 },
      { x: 60, y: 50, radius: 22, intensity: 0.68 }
    ],
    bgColor: "#365314",
    leafColor: "#15803d",
    spotColor: "#292524"
  },
  {
    id: "healthy_cotton",
    crop: "Cotton",
    name: "Healthy Cotton Canopy",
    scientificName: "Gossypium hirsutum (Normal)",
    confidence: 99.1,
    severity: "Healthy",
    severityScore: 0,
    affectedArea: "0% (Optimal Health)",
    statusColor: "#10b981",
    colorTheme: "success",
    symptoms: [
      "Vibrant deep green palmate leaves with clear prominent veins",
      "Robust main stem nodes with active squares and bolls",
      "Zero signs of chlorosis, necrosis, or pest feeding damage"
    ],
    causes: "Optimal nutrient balance, suitable soil moisture, and active IPM pest management.",
    organicTreatments: [
      "Maintain organic compost soil cover.",
      "Regular releases of Trichogramma egg parasitoids for bollworm prevention.",
      "Foliar spray of seaweed extract (Ascophyllum nodosum) to boost vigor."
    ],
    chemicalTreatments: [
      "No chemical intervention required. Continue regular scouting schedule."
    ],
    prevention: [
      "Maintain soil organic matter > 2.5%.",
      "Ensure balanced drip fertigation schedules based on petiole nitrate testing."
    ],
    boundingArea: { x: 0, y: 0, width: 100, height: 100 },
    heatmapPoints: [],
    bgColor: "#064e3b",
    leafColor: "#10b981",
    spotColor: "transparent"
  },
  {
    id: "unrecognized_image",
    crop: "Unknown / Non-Plant",
    name: "Unrecognized Image",
    scientificName: "No Plant Foliage Detected",
    confidence: 0,
    severity: "Invalid",
    severityScore: 0,
    affectedArea: "N/A",
    statusColor: "#64748b",
    colorTheme: "warning",
    symptoms: [
      "No agricultural leaf or plant foliage detected in image",
      "Color spectrum lacks chlorophyll (G) and foliage decay signatures",
      "Image may contain objects, humans, animals, or non-farm background"
    ],
    causes: "The uploaded file does not match known agricultural plant structures or crop leaf characteristics.",
    organicTreatments: [
      "Please upload a clear, close-up photo of a crop leaf (Tomato, Corn, Potato, Rice, Wheat, Cotton, or Apple).",
      "Ensure proper focus and natural lighting over the leaf surface."
    ],
    chemicalTreatments: [
      "No diagnosis available for non-plant images."
    ],
    prevention: [
      "Take photos 4-8 inches away from the affected leaf area.",
      "Avoid extreme dark shadows or reflective flash glare."
    ],
    boundingArea: null,
    heatmapPoints: [],
    bgColor: "#1e293b",
    leafColor: "#475569",
    spotColor: "transparent"
  },
  {
    id: "healthy_tomato",
    crop: "Tomato",
    name: "Healthy Tomato Plant",
    scientificName: "Solanum lycopersicum (Normal)",
    confidence: 99.6,
    severity: "Healthy",
    severityScore: 0,
    affectedArea: "0% (Optimal Health)",
    statusColor: "#10b981",
    colorTheme: "success",
    symptoms: [
      "Dark emerald green foliage with sturdy glandular hairs",
      "Clean leaf margins without discoloration or spots",
      "Active yellow floral clusters and healthy fruit formation"
    ],
    causes: "Strong immune state, ideal root aeration, and balanced N-P-K nutrition.",
    organicTreatments: [
      "Routine application of beneficial Mycorrhizal fungi to roots.",
      "Mulch base with straw to retain soil moisture equilibrium."
    ],
    chemicalTreatments: [
      "No chemical pesticides needed."
    ],
    prevention: [
      "Monitor weather humidity regularly and keep foliage dry."
    ],
    boundingArea: { x: 0, y: 0, width: 100, height: 100 },
    heatmapPoints: [],
    bgColor: "#022c22",
    leafColor: "#059669",
    spotColor: "transparent"
  }
];
