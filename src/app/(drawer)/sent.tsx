import { StyleSheet, Text, View } from "react-native"

export default function Sent() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enviado</Text>
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
