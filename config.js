/**
 * EVM Vote Configuration File
 * 
 * Add new pages by adding objects to the PAGES array.
 * Access pages using query parameter: ?order=1, ?order=2, etc.
 * 
 * Each page config requires:
 * - order: Unique page identifier (used in URL query)
 * - title: Main title (municipality name)
 * - subtitle: Subtitle (division info)
 * - totalSlots: Total number of voting slots
 * - candidateSlot: Position of the active candidate (1-indexed)
 * - candidate: Object with name, party, iconPath, posterPath
 * - beepSound: Path to beep sound file
 */

const PAGES = [
  {
    order: 1,
    title: "ജില്ലാ പഞ്ചായത്ത്",
    subtitle: "കരുവാരക്കുണ്ട് ഡിവിഷൻ",
    totalSlots: 8,
    candidateSlot: 1,
    candidate: {
      name: "മുസ്തഫ അബ്ദുൽ ലത്തീഫ്",
      party: "യുഡിഎഫ്",
      iconPath: "assets/iuml.jpg",
      posterPath: "assets/order-1.webp"
    },
    beepSound: "assets/beep.mp3"
  },
];

/**
 * Get page configuration by order number
 * @param {number} order - The order number from URL query
 * @returns {object|null} - Page config or null if not found
 */
function getPageConfig(order) {
  return PAGES.find(page => page.order === order) || null;
}

/**
 * Get default page configuration (first page)
 * @returns {object} - Default page config
 */
function getDefaultConfig() {
  return PAGES[0];
}

/**
 * Get all available page orders
 * @returns {number[]} - Array of available order numbers
 */
function getAvailableOrders() {
  return PAGES.map(page => page.order);
}
