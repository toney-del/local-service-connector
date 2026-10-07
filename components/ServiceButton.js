import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ServiceButton({ icon, label, onPress }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "48%",
    backgroundColor: "#1e293b",
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#334155",
  },
  icon: { fontSize: 32 },
  label: {
    color: "#e2e8f0",
    marginTop: 6,
    fontSize: 14,
    fontWeight: "500",
  },
});
