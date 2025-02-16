import { StyleSheet, View, Image, Text} from "react-native";

export function AgentCard({ agent }) {
  return (
    <View key={agent.uuid} style={styles.card}>
      <Image source={{ uri: agent.img }} style={styles.image} />
      <Text style={styles.title}>{agent.displayName}</Text>
      <Text style={styles.description}>{agent.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
