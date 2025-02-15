import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView } from "react-native";

import { getAgents } from "./lib/agents";

export default function App() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents()
      .then((agents) => {
        setAgents(agents);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        {agents.map((agent) => (
          <View key={agent.uuid} style={styles.card}>
            <Image source={{ uri: agent.img }} style={styles.image} />
            <Text style={styles.title}>{agent.displayName}</Text>
            <Text style={styles.description}>{agent.description}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginBottom: 30,
  },
  image: {
    width: 107,
    height: 147,
    boderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
});
