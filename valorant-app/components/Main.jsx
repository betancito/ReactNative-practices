import { useEffect, useState } from "react";
import { ScrollView, View, ActivityIndicator } from "react-native";
import { getAgents } from "../lib/agents";
import { AgentCard } from "./AgentCartd";

export function Main() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents()
      .then((agents) => {
        setAgents(agents);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <>
      {agents.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView>
          {" "}
          {agents.map((agent) => (
            <AgentCard key={agent.uuid} agent={agent} />
          ))}{" "}
        </ScrollView>
      )}
    </>
  );
}
