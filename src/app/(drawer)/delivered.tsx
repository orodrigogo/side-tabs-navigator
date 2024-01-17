import { StyleSheet, Text, View } from "react-native"

export default function Delivered() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entregue</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF",
  },
})
