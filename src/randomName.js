export function randomName() {
  const adjectives = [
    "Adventurous",
    "Calm",
    "Dazzling",
    "Elegant",
    "Fascinating",
    "Gentle",
    "Harmonious",
    "Inquisitive",
    "Joyful",
    "Kind",
    "Lively",
    "Magical",
    "Nurturing",
    "Optimistic",
    "Playful",
    "Quirky",
    "Radiant",
    "Soothing",
    "Tranquil",
    "Unwavering",
    "Vibrant",
    "Whimsical",
    "Xenial",
    "Youthful",
    "Zealous",
  ];
  const nouns = [
    "Adventure",
    "Breeze",
    "Cascade",
    "Dawn",
    "Echo",
    "Fountain",
    "Grove",
    "Harmony",
    "Island",
    "Journey",
    "Kaleidoscope",
    "Lagoon",
    "Meadow",
    "Nest",
    "Orchard",
    "Pebble",
    "Quasar",
    "Ripple",
    "Serenity",
    "Tide",
    "Umbra",
    "Valley",
    "Waterfall",
    "Xylophone",
    "Yonder",
    "Zenith",
  ];
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  return adjective + noun;
}