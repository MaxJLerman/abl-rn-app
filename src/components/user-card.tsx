import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router } from "expo-router";

type User = {
  id: string;
  name: string;
  age: number;
  gender: string;
  maritalStatus: string;
};

const UserCard = ({ user }: { user: User }) => {
  return (
    <Pressable
      style={[
        styles.userCard,
        user.gender === "Male"
          ? styles.male
          : user.gender === "Other"
          ? styles.other
          : styles.female,
      ]}
      onPress={() => router.push(`/users/${user.id}`)}
    >
      <Text
        style={
          user.gender === "Male"
            ? [styles.maleColour, styles.text]
            : styles.text
        }
      >
        {user.name.split(" ")[0]}'s card
      </Text>
    </Pressable>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  userCard: {
    width: "48%",
    marginVertical: 8,
    borderRadius: 10,
  },
  male: {
    backgroundColor: "blue",
  },
  maleColour: {
    color: "white",
  },
  female: {
    backgroundColor: "pink",
  },
  other: {
    backgroundColor: "gray",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
