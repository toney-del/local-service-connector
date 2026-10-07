import { Pressable, StyleSheet, Text } from 'react-native';

type Props = {
  icon: string;
  label: string;
  onPress: () => void;
};

export default function ServiceButton({ icon, label, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: '48%',
    backgroundColor: '#1e293b',
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#334155',
  },
  buttonPressed: {
    opacity: 0.7, // Simulates the TouchableOpacity feedback
  },
  icon: { fontSize: 32 },
  label: {
    color: '#e2e8f0',
    marginTop: 6,
    fontSize: 14,
    fontWeight: '500',
  },
});