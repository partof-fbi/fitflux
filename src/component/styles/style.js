import { StyleSheet } from "react-native";

export const colors = {
  primary: "#0152FF",
  secondary: "#FFA500",
  accent: "#FF00FF",
  background: "#F8F8F8",
  text: "#333333",
  error: "#FF0000",
  success: "#008000",
  warning: "#FFA500",
  button: "#293241",
  textColor: "#222222",
};

export const sizes = {
  small: 8,
  medium: 16,
  large: 24,
};

export const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
  },
  image: {
    width: 170,
    height: 170,
  },
});

export const extendedStyles = StyleSheet.create({
  container: {
    ...baseStyles.container,
    padding: 10,
  },
  title: {
    ...baseStyles.title,
    color: "#333",
  },
  tittleSplash: {
    ...baseStyles.title,
    color: "#fff",
  },
});
