import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, ScrollView} from "react-native";

import { getAgents } from "./lib/agents";

export default function App() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents().then((agents) => {
      setAgents(agents);
    }).
    catch((error) => alert(error));
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar style="auto" />
        {agents.map(agent => (
          <View key={agent.uuid} style={styles.card}>
            <Image
              source={{ uri: agent.img}}
              style = {{
                width: 107,
                height: 147,
                boderRadius: 10,
              }}
            />
            <Text>{agent.displayName}</Text>
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
});
