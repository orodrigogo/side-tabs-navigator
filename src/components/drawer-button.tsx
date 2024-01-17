import { Text, Pressable, PressableProps, StyleSheet, View } from "react-native"
import { Entypo } from "@expo/vector-icons"

export type IconNameType = keyof typeof Entypo.glyphMap

interface TabBarButtonProps extends PressableProps {
  title?: string
  isFocused?: boolean
  iconName: IconNameType
}

export function DrawerButton({
  title = "",
  iconName,
  isFocused = false,
  ...rest
}: TabBarButtonProps) {
  return (
    <Pressable style={[styles.button, isFocused && styles.focused]} {...rest}>
      <View style={styles.content}>
        <Entypo name={iconName} size={32} color="#423532" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    transform: [{ rotate: "270deg" }],
    gap: 12,
  },
  focused: {
    backgroundColor: "#FFAF5B",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#423532",
  },
})
