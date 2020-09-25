import React, { useState } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Button } from "react-native-paper";
import SideMenu from "react-native-side-menu-updated";
import { Drawer } from "react-native-paper";

const styles = StyleSheet.create({
  title: {
    color: "black",
    fontSize: 24,
    fontWeight: "600",
  },
});

export function PageWrapper({ history, children }) {
  console.log({ history: history.location.pathname });
  let [screenOpen, setScreenOpen] = useState(false);

  return (
    <SideMenu
      open={screenOpen}
      menu={
        <Drawer.Section title="Some title">
          <Drawer.Item
            label="Home"
            active={history.location.pathname == "/"}
            onPress={() => {
              history.push({
                pathname: "/",
              });
              setScreenOpen(true);
            }}
          />
          <Drawer.Item
            label="Login"
            active={history.location.pathname == "/account"}
            onPress={() => {
              history.push({
                pathname: "/account",
              });

              setScreenOpen(true);
            }}
          />
        </Drawer.Section>
      }
      onChange={(isOpen) => {
        setScreenOpen(screenOpen);
      }}
    >
      {children}
    </SideMenu>
  );
}
