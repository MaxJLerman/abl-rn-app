import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";

import data from "../data";
import UserCard from "../components/user-card";

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <UserCard user={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={<Text>Choose a User:</Text>}
        contentContainerStyle={styles.flatListContainer}
        columnWrapperStyle={styles.flatListColumn}
        style={{ paddingHorizontal: 10, paddingVertical: 5 }}
      />
      <Pressable
        onPress={() =>
          router.push("/users/d3b07384-d9a6-4b2c-8e18-c5709c48ef1d")
        }
      >
        <Text>Go to User 1</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  flatListColumn: {
    justifyContent: "space-between",
  },
});
