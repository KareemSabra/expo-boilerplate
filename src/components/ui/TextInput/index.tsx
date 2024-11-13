import { useThemeColor } from "@/hooks/useThemeColor";
import { TextInput as RNTextInput, StyleSheet } from "react-native";

type TextInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
};

export default function TextInput({
  placeholder,
  value,
  onChangeText,
}: TextInputProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: States & Constants
  // ----------------------------------------------------------------------------------------------------
  const color = useThemeColor({}, "text");
  const borderColor = useThemeColor({}, "inputBorder");

  // ----------------------------------------------------------------------------------------------------
  // MARK: Styles
  // ----------------------------------------------------------------------------------------------------
  const styles = StyleSheet.create({
    input: {
      width: "100%",
      padding: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor,
      color,
    },
  });

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <RNTextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={styles.input}
    />
  );
}
