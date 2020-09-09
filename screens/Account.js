import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { getUrlParams } from "../utils/url";
import { Drawer } from "react-native-paper";

const Account = ({ history }) => {
  const [active, setActive] = React.useState("");

  const urlParams = getUrlParams(history.location.search);
  const { accountId } = urlParams;

  return (
    <View>
      <Text style={styles.title}>Account {accountId}</Text>
      <Button
        color="blue"
        onPress={() => {
          history.go(-1);
        }}
        title="Back"
      />

      <Drawer.Section title="Some title">
        <Drawer.Item
          label="First Item"
          active={active === "first"}
          onPress={() => setActive("first")}
        />
        <Drawer.Item
          label="Second Item"
          active={active === "second"}
          onPress={() => setActive("second")}
        />
      </Drawer.Section>
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

export default Account;
