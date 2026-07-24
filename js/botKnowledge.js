// AgriBot Agronomist AI Intelligence Engine

export const quickPrompts = [
  "🛡️ How to treat Late Blight organically?",
  "🌿 Best N-P-K fertilizer ratio for Tomato?",
  "🧪 What soil pH is best for Corn?",
  "🐛 How to control Silverleaf Whiteflies?",
  "💧 Ideal watering schedule for Wheat?",
  "🌾 How to prevent Yellow Rust in Wheat?"
];

export function getBotResponse(userQuery) {
  const query = userQuery.toLowerCase().trim();

  // Late Blight query
  if (query.includes("late blight") || query.includes("phytophthora") || query.includes("tomato blight")) {
    return {
      title: "Late Blight (Phytophthora infestans) Management Protocol",
      badge: "Pathology Alert",
      badgeColor: "#ef4444",
      content: `**Late Blight** is a destructive pathogen that spreads rapidly in high humidity (>90%) and cool temperatures (60-70°F). Here is your recommended treatment plan:

### 🍃 Organic & Bio-Controls:
1. **Copper Fungicide**: Apply Liquid Copper Hydroxide spray over all leaf surfaces immediately. Re-apply every 5-7 days.
2. **Neem Oil Extract**: Mix 2 tbsp cold-pressed neem oil + 1 tsp liquid Castile soap per gallon of water. Spray in early morning.
3. **Canopy Pruning**: Remove and destroy all infected foliage showing water-soaked lesions.

### 🧪 Chemical Treatments:
- **Protective**: Chlorothalonil or Mancozeb 75 WP (2.5 g/L).
- **Curative Systemic**: Metalaxyl + Mancozeb tank mix.

> 💡 **Prevention Tip**: Switch to drip irrigation to keep leaf surfaces dry, and enforce a 3-year crop rotation schedule!`
    };
  }

  // Fertilizer / NPK query
  if (query.includes("fertilizer") || query.includes("npk") || query.includes("nitrogen") || query.includes("phosphorus") || query.includes("potassium")) {
    return {
      title: "Crop Nutrition & N-P-K Guidelines",
      badge: "Soil & Agronomy",
      badgeColor: "#10b981",
      content: `For optimal growth, crops require balanced **Nitrogen (N)**, **Phosphorus (P)**, and **Potassium (K)** based on their growth stage:

### 🍅 Tomato:
- **Vegetative Phase**: 10-10-10 or 12-15-10 for strong foliage and root establishment.
- **Flowering & Fruiting**: Shift to high Potassium **5-10-15** or **8-16-24** to promote fruit size and prevent blossom end rot (add Calcium nitrate!).

### 🌽 Corn / Maize:
- Heavy Nitrogen feeder! Apply **46-0-0 (Urea)** at side-dressing (V6 stage). Target **150-200 lbs N/acre**.

### 🌾 Wheat & Rice:
- Basal application of **18-46-0 (DAP)** at planting, followed by top-dressed Nitrogen split in two equal doses during tillering and panicle initiation.`
    };
  }

  // Soil pH query
  if (query.includes("ph") || query.includes("soil acidity") || query.includes("lime") || query.includes("alkaline")) {
    return {
      title: "Soil pH Optimization Guide",
      badge: "Soil Doctor",
      badgeColor: "#8b5cf6",
      content: `Soil pH determines nutrient availability to root hairs:

### 🎯 Ideal pH Ranges by Crop:
- **Tomato**: 6.0 – 6.8 (Slightly Acidic)
- **Corn**: 5.8 – 7.0 (Neutral to Slightly Acidic)
- **Potato**: 5.0 – 6.0 (Prefers Acidic to prevent Potato Scab!)
- **Wheat & Rice**: 6.0 – 7.5

### 🛠️ How to Adjust Soil pH:
- **To Raise pH (Too Acidic < 5.5)**: Add **Dolomitic Agricultural Lime** (Calcium carbonate + Magnesium). Apply 5-10 lbs per 100 sq ft and till 6 inches deep.
- **To Lower pH (Too Alkaline > 7.5)**: Apply **Elemental Sulfur** or Aluminum Sulfate. Elemental sulfur takes 2-3 months for soil bacteria to oxidize into sulfate.`
    };
  }

  // Whiteflies or Pest control query
  if (query.includes("pest") || query.includes("whitefly") || query.includes("insect") || query.includes("aphid") || query.includes("bug")) {
    return {
      title: "Integrated Pest Management (IPM) Strategy",
      badge: "Entomology",
      badgeColor: "#f59e0b",
      content: `Effective pest management relies on early detection and multi-layered control:

### 🐞 Whiteflies & Aphids:
- **Physical Traps**: Place **Yellow Sticky Traps** at canopy level (1 trap per 100 sq ft).
- **Biological Control**: Release **Lacewing larvae** or *Encarsia formosa* parasitic wasps.
- **Organic Spray**: Potassium Salts of Fatty Acids (Insecticidal Soap) + Horticultural Mineral Oil.

### 🐛 Caterpillars & Armyworms:
- **B.t. Spray**: Apply *Bacillus thuringiensis* (Dipel/Thuricide) in evening hours. It paralyzes insect stomach linings while leaving bees completely safe!`
    };
  }

  // Yellow Rust / Wheat query
  if (query.includes("rust") || query.includes("yellow rust") || query.includes("wheat")) {
    return {
      title: "Wheat Yellow Rust (Stripe Rust) Emergency Protocol",
      badge: "Rust Alert",
      badgeColor: "#ef4444",
      content: `**Yellow Stripe Rust** (*Puccinia striiformis*) can cause up to 70% yield loss if flag leaf is infected during grain filling.

### ⚡ Action Plan:
1. **Immediate Spray**: Spray **Tebuconazole 250 EC** (1 mL/L water) or **Propiconazole 25 EC** at initial yellow pustule sightings.
2. **Organic Dusting**: Apply sulfur powder (3 kg/acre) during high humidity mornings.
3. **Resistant Seed Varieties**: Next season, transition to resistant wheat varieties like **DBW 187**, **HD 3226**, or **PBW 725**.`
    };
  }

  // Watering / Irrigation
  if (query.includes("water") || query.includes("irrigation") || query.includes("drip") || query.includes("moisture")) {
    return {
      title: "Smart Irrigation & Soil Moisture Management",
      badge: "Water Tech",
      badgeColor: "#0284c7",
      content: `Proper moisture management prevents root rot while maximizing water use efficiency:

### 💧 Golden Rules of Crop Irrigation:
1. **Drip Over Overhead**: Drip irrigation reduces foliage wetness by 95%, cutting fungal diseases like Late Blight and Mildew dramatically.
2. **Moisture Sensing**: Keep root zone volumetric water content between **65% – 85% Field Capacity**.
3. **Morning Watering**: Irrigate between 5:00 AM – 8:00 AM so sun dries off any stray splash droplets quickly.`
    };
  }

  // Default intelligent agronomist answer generator
  return {
    title: `Agronomist Insight: ${userQuery}`,
    badge: "AgriBot AI",
    badgeColor: "#10b981",
    content: `Thank you for asking about **"${userQuery}"**. As your AI Agronomist, here are the key agricultural recommendations:

1. **Diagnosis & Monitoring**: Inspect your field's upper and lower leaf surfaces during early morning hours for early signs of chlorosis, necrosis, or pest activity.
2. **Soil & Tissue Testing**: Conduct a laboratory soil test every 2 seasons to verify N-P-K levels, electrical conductivity (EC), and organic carbon content.
3. **Integrated Crop Care**: Combine organic soil amendments (vermicompost, bio-char) with precise targeted crop protection for resilient yields.

> 💬 Ask me specifically about **Late Blight**, **N-P-K Fertilizers**, **Soil pH**, **Whiteflies**, **Yellow Rust**, or **Irrigation** for step-by-step spray recipes!`
  };
}
