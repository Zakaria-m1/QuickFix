import { StyleSheet } from 'react-native';
import colors from './colors';

const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,  // Black background
    padding: 16,
  },
  semiContainer: {
    marginBottom: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,  // Orange
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: colors.text,  // White text
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.primary,  // Orange
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
    backgroundImage: `linear-gradient(to bottom, ${colors.primary}, ${colors.accent})`, // Orange to Light Orange gradient
  },
  buttonText: {
    color: colors.secondary,  // Black text on button
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: colors.primary,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginVertical: 10,
  },
  card: {
    backgroundColor: colors.card,
    padding: 20,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 10,
  },
  modal: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
});

export default globalStyles;
