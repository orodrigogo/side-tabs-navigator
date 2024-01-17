import { Pressable, StyleSheet } from "react-native"
import { Slot, useNavigation } from "expo-router"
import { DrawerActions } from "@react-navigation/native"
import { StatusBar } from "expo-status-bar"
import { Entypo } from "@expo/vector-icons"

export default function Layout() {
  const navigation = useNavigation()
  const toggleMenu = () => navigation.dispatch(DrawerActions.toggleDrawer())

  return (
    <>
      <StatusBar style="light" backgroundColor="transparent" translucent />

      <Pressable onPress={toggleMenu} style={styles.menu}>
        <Entypo name="menu" color="#FFF" size={32} />
      </Pressable>

      <Slot />
    </>
  )
}

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    right: 32,
    top: 32,
    zIndex: 1,
  },
})
