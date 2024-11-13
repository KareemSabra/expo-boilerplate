import { Stack } from "expo-router";

export default function AuthLayout() {
  // Todo Implement auth guard
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="login/index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="register/index"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
