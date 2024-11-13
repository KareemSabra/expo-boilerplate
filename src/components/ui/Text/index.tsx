import { Text as RNText, StyleProp, StyleSheet, TextStyle } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type TextProps = {
  children: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
  style?: StyleProp<TextStyle>;
};

export default function Text({ style, type = "default", children }: TextProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: States & Constants
  // ----------------------------------------------------------------------------------------------------
  const color = useThemeColor({}, "text");

  // ----------------------------------------------------------------------------------------------------
  // MARK: Styles
  // ----------------------------------------------------------------------------------------------------
  const styles = StyleSheet.create({
    default: {
      fontSize: 16,
      lineHeight: 24,
    },
    defaultSemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: "600",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      lineHeight: 32,
    },
    subtitle: {
      fontSize: 20,
      fontWeight: "bold",
    },
    link: {
      lineHeight: 30,
      fontSize: 16,
      color: "#0a7ea4",
    },
  });

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <RNText
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
    >
      {children}
    </RNText>
  );
}
