import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import SideMenu from "react-native-side-menu-updated";
import { Drawer } from "react-native-paper";

const Home = ({ history }) => {
  let [open, setOpen] = useState(false);
  let [active, setActive] = useState("home");
  return (
    <SideMenu
      open={open}
      menu={
        <Drawer.Section title="Some title">
          <Drawer.Item
            label="First Item"
            active={active === "home"}
            onPress={() => setActive("home")}
          />
          <Drawer.Item
            label="Second Item"
            active={active === "second"}
            onPress={() => setActive("second")}
          />
        </Drawer.Section>
      }
      onChange={(isOpen) => {
        setOpen(open);
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
          flexGrow: 1,
        }}
      >
        <Text style={styles.title}>Hosdme</Text>
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
    </SideMenu>
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
