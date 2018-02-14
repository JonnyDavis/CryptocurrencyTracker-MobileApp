import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Header = () => {
	return (
		<View>
			<Text style={styles.headerText}> Cryptocurrency Tracker </Text>
		</View>
	)
} 

export default Header;


const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
  },
});