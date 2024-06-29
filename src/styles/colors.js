const lightTheme = {
  dark: false,
  colors: {
    primary: '#000000',  // Black for primary elements
    secondary: '#FFFFFF',  // White for backgrounds
    accent: '#28A745',  // Light Orange for subtle highlights
    card: '#FFFFFF',  // White for card backgrounds
    background: '#F8F8F8',  // Very light grey for app background
    separator: '#E0E0E0',  // Light grey for separators
    text: '#000000',  // Black for text
    white: '#FFFFFF',
    gray: '#888888',  // Medium grey for secondary text
    error: '#FF0000',  // Red for errors
    border: '#e5e7eb',
  },
};

const darkTheme = {
  dark: true,
  colors: {
    primary: '#FFFFFF',  // White for primary elements
    secondary: '#121212',  // Very dark grey for backgrounds
    accent: '#FFD580',  // Light Orange for subtle highlights
    card: '#1E1E1E',  // Dark grey for card backgrounds
    background: '#121212',  // Very dark grey for app background
    separator: '#303030',  // Dark grey for separators
    text: '#FFFFFF',  // White for text
    white: '#FFFFFF',
    gray: '#BBBBBB',  // Light grey for secondary text
    error: '#FF0000',  // Red for errors
  },
};

export default { lightTheme, darkTheme };
