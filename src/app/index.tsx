import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Pressable onPress={() => router.push("/users/1")}>
        <Text>Go to User 1</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
