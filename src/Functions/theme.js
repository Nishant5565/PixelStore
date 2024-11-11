const themeConfig = {
  light: {
    background: "bg-[#FFE5CF]",    // Soft peachy-cream background
    text: "text-[#FF885B]",        // Natural green for regular text
    hoverText: "hover:text-[#FF885B]", // Vibrant coral hover text for interactive elements
    primary: "text-[#557C56]",      // Natural green for headings and logos
    border: "border-[#FFE5CF]",     // Cream-colored borders
    buttonBackground: "bg-[#FF885B] hover:bg-[#FF7043]", // Vibrant coral button with hover effect
    buttonText: "text-white",       // White text for buttons
  },
  dark: {
    background: "bg-[#1C1C1E]",     // Dark charcoal background for dark mode
    text: "text-[#F0F0F0]",         // Light gray text for dark mode
    hoverText: "hover:text-[#00ACC1]", // Cool cyan hover text
    primary: "text-[#00ACC1]",      // Primary color for dark mode
    border: "border-[#2C2C2E]",     // Muted gray borders for dark mode
    buttonBackground: "bg-[#00ACC1] hover:bg-[#26C6DA]", // Cool cyan button
    buttonText: "text-white",       // White text for buttons in dark mode
  },
};

export default themeConfig;
