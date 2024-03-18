import { StyleSheet, View, Text } from "react-native";

export default function Sample1() {
  return (
    <View>
      <View>
        <View style={styles.container}></View>
        <View style={styles.column}></View>
        <Text style={styles.ali}></Text>

        <Text>Train 1</Text>

        <Text>0800-0900</Text>

        <Text>--</Text>

        <Text>0930-1000</Text>
        <Text>1010-1100</Text>
        <Text>--</Text>
        <Text>1120-1200</Text>
        <Text>1220-1240</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>--</Text>
      </View>

      <View style={styles.column}>
        <Text style={styles.ali}></Text>

        <Text>Train 2</Text>
        <Text>0800-0900</Text>

        <Text>--</Text>

        <Text>0930-1000</Text>
        <Text>1010-1100</Text>
        <Text>--</Text>
        <Text>1120-1200</Text>
        <Text>1220-1240</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>0800-1100</Text>
        <Text>--</Text>
        <Text>--</Text>
        <Text>--</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the available vertical space
    width: "100%", // Fill the width of the parent container
    padding: 0, // Padding top and bottom are 0
    paddingHorizontal: 16, // Padding left and right are 16
    marginBottom: 8,
    marginVertical: 10, // Gap (margin bottom) is 8
    backgroundColor: "#f0f0f0",
  },

  column: {
    width: 120, // "Hug" (120px)
    flex: 1,
    flexDirection: "column",
  },
  ali: {
    width: 105, // Fill (105px)
    height: 28, // Hug (28px)
    borderWidth: 1, // Border width
    borderColor: "#FFFFFF", // Border color
    borderStyle: "solid", // Border style
    backgroundColor: "#F2F2F2",
  },
});
