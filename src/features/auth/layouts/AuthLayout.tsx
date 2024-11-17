import Stack from "@/components/elements/Stack";
import Text from "@/components/elements/Text";
import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AuthLayoutProps = {
  children: React.ReactNode;
  style?: ViewStyle;
  padding?: number;
  title: string;
};

export default function AuthLayout({
  children,
  style,
  title,
  padding = 16,
}: AuthLayoutProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: Styles
  // ----------------------------------------------------------------------------------------------------
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    content: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
  });

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <SafeAreaView style={[styles.container, { padding }]}>
      <View style={[styles.content, style]}>
        <Stack
          style={{
            height: "100%",
            paddingHorizontal: 8,
            paddingVertical: 24,

            justifyContent: "center",
          }}
          gap={32}
        >
          <Text alignment="center">{title}</Text>
          {children}
        </Stack>
      </View>
    </SafeAreaView>
  );
}
