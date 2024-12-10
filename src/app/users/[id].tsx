import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

import data from "../../data/index";

const UserPage = () => {
  const [showMaritalStatus, setShowMaritalStatus] = useState<boolean>(true);
  const { id } = useLocalSearchParams<{ id: string }>();

  const user = data.find((user) => user.id === id);

  return (
    <View>
      <Text style={styles.text}>User ID: {user?.id}</Text>
      <Text style={styles.text}>Name: {user?.name}</Text>
      <Text style={styles.text}>Age: {user?.age}</Text>
      <Text style={styles.text}>Gender: {user?.gender}</Text>
      <Text style={styles.text}>
        Marital Status: {showMaritalStatus ? user?.maritalStatus : "******"}
      </Text>
      <TouchableOpacity
        onPress={() => setShowMaritalStatus(!showMaritalStatus)}
        style={[
          styles.button,
          showMaritalStatus
            ? { backgroundColor: "green" }
            : { backgroundColor: "red" },
        ]}
      >
        <Text
          style={{
            color: "white",
          }}
        >
          Toggle Marital Status
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserPage;

const styles = StyleSheet.create({
  text: {
    paddingLeft: 10,
  },
  button: {
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 10,
    height: 50,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
});
