import { Tabs } from "expo-router"

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Início" }} />
      <Tabs.Screen name="preparing" options={{ title: "Preparando" }} />
      <Tabs.Screen name="sent" options={{ title: "Enviado" }} />
      <Tabs.Screen name="delivered" options={{ title: "Entregue" }} />
    </Tabs>
  )
}
