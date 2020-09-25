import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import SideMenu from "react-native-side-menu-updated";
import { Drawer } from "react-native-paper";

const Home = ({ history }) => {
  let [open, setOpen] = useState(false);
  let [active, setActive] = useState("home");
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flexGrow: 1,
      }}
    >
      <Text style={styles.title}>Home</Text>
      <Button
        icon="camera"
        mode="contained"
        onPress={() => {
          history.push({
            pathname: "/account",
            search: "?accountId=42",
          });
        }}
      >
        Press me
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "600",
  },
});

export default Home;
