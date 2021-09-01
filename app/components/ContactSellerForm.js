import React from "react";
import { View, StyleSheet, Keyboard, Alert } from "react-native";
import * as Notifications from "expo-notifications";

function ContactSellerForm({ listing }) {
  const handleSubmit = async ({ message }, { resetForm }) => {
    Keyboard.dismiss();

    const result = await messagesApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the message to the seller.");
    }

    resetForm();
    Notifications.presentLocalNotificationAsync({
      title: "Awsome!",
      body: "Your message was sent to the seller.",
    });
  };

  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {},
});

export default ContactSellerForm;
