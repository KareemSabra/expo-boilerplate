import { Link, Stack } from "expo-router";
import { StyleSheet } from "react-native";

import Text from "@/components/ui/Text";
import { ThemedView } from "@/components/ThemedView";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <ThemedView style={styles.container}>
        <Text type="title">This screen doesn't exist.</Text>
        <Link href="/(home)" style={styles.link}>
          <Text type="link">Go to home screen!</Text>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
