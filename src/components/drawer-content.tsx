import { View } from "react-native"
import { DrawerContentComponentProps } from "@react-navigation/drawer"

import { DrawerButton } from "./drawer-button"
import { CustomOptions } from "@/types/navigation"

export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View style={{ flex: 1 }}>
      {drawerProps.state.routes.map((route, index) => {
        const isFocused = drawerProps.state.index === index
        const options = drawerProps.descriptors[route.key]
          .options as CustomOptions

        const onPress = () => {
          const event = drawerProps.navigation.emit({
            type: "drawerItemPress",
            canPreventDefault: true,
            target: route.key,
          })

          if (!isFocused && !event.defaultPrevented) {
            drawerProps.navigation.navigate(route.name, route.params)
          }
        }

        return (
          <DrawerButton
            key={route.key}
            onPress={onPress}
            title={options.title}
            isFocused={isFocused}
            iconName={options.iconName}
          />
        )
      })}
    </View>
  )
}
