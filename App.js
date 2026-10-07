import { useState } from "react";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import ServiceButton from "./components/ServiceButton";

// Central list so buttons + counts stay in sync
const SERVICES = [
  { key: "plumber", icon: "🔧", label: "Plumber" },
  { key: "electrician", icon: "⚡", label: "Electrician" },
  { key: "cleaner", icon: "🧹", label: "Cleaner" },
  { key: "carpenter", icon: "🪚", label: "Carpenter" },
];

const INITIAL_COUNTS = {
  plumber: 0,
  electrician: 0,
  cleaner: 0,
  carpenter: 0,
};

export default function App() {
  // Step 3 — one state object tracking every service count
  const [counts, setCounts] = useState(INITIAL_COUNTS);

  // Increment the selected service
  const handleSelect = (key) => {
    setCounts((prev) => ({
      ...prev,
      [key]: prev[key] + 1,
    }));
  };

  // Step 5 — reset returns a brand new object
  const handleReset = () => {
    setCounts({ ...INITIAL_COUNTS });
  };

  const maxCount = Math.max(...Object.values(counts));
  const totalRequests = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Local Service Connector</Text>
        <Text style={styles.subtitle}>Tap a service to log a request</Text>

        {/* Step 2 — reuse the component for each service */}
        <View style={styles.buttonGrid}>
          {SERVICES.map((s) => (
            <ServiceButton
              key={s.key}
              icon={s.icon}
              label={s.label}
              onPress={() => handleSelect(s.key)}
            />
          ))}
        </View>

        {/* Step 4 — display running counts */}
        <View style={styles.countsBox}>
          <Text style={styles.sectionTitle}>Request Counts</Text>

          {SERVICES.map((s) => {
            const isTop = counts[s.key] === maxCount && maxCount > 0;
            return (
              <Text
                key={s.key}
                style={[styles.countLine, isTop && styles.topCount]}
              >
                {s.icon} {s.label}: {counts[s.key]}
                {isTop ? "  ⭐" : ""}
              </Text>
            );
          })}

          <Text style={styles.total}>Total requests: {totalRequests}</Text>
        </View>

        {/* Step 5 — Reset */}
        <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#0f172a" },
  container: { padding: 20, paddingBottom: 40 },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#f8fafc",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    textAlign: "center",
    marginTop: 4,
    marginBottom: 20,
  },

  buttonGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  countsBox: {
    marginTop: 24,
    padding: 16,
    backgroundColor: "#1e293b",
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#e2e8f0",
    marginBottom: 12,
  },
  countLine: {
    fontSize: 16,
    color: "#cbd5e1",
    marginVertical: 4,
  },
  // Bonus — most-selected service is bigger + highlighted
  topCount: {
    fontSize: 22,
    color: "#38bdf8",
    fontWeight: "bold",
  },
  total: {
    marginTop: 12,
    fontSize: 14,
    color: "#94a3b8",
    fontStyle: "italic",
  },

  resetButton: {
    marginTop: 24,
    backgroundColor: "#ef4444",
    padding: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  resetText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
