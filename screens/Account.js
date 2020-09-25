import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { getUrlParams } from "../utils/url";
import { Drawer } from "react-native-paper";
import { Translate } from "react-localize-redux";
const Account = ({ history }) => {
  const [active, setActive] = React.useState("");

  const urlParams = getUrlParams(history.location.search);
  const { accountId } = urlParams;

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "yellow",
        flexGrow: 1,
      }}
    >
      {/* <Text style={styles.title}>
        <Translate id="user.account" />
      </Text> */}
      <Button
        color="blue"
        onPress={() => {
          history.go(-1);
        }}
        title="Back"
      />
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
