import { Drawer } from "expo-router/drawer"

import { CustomOptions } from "@/types/navigation"
import { DrawerContent } from "@/components/drawer-content"

export default function TabLayout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: { width: 124, backgroundColor: "#F9EAE3" },
        swipeEnabled: false,
      }}
      defaultStatus="open"
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="index"
        options={
          { title: "Início", iconName: "shopping-cart" } as CustomOptions
        }
      />
      <Drawer.Screen
        name="preparing"
        options={{ title: "Preparando", iconName: "dropbox" } as CustomOptions}
      />
      <Drawer.Screen
        name="sent"
        options={{ title: "Enviado", iconName: "paper-plane" } as CustomOptions}
      />
      <Drawer.Screen
        name="delivered"
        options={{ title: "Entregue", iconName: "box" } as CustomOptions}
      />
    </Drawer>
  )
}
