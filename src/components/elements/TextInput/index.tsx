import useAssets from "@/hooks/useAssets";
import {
  TextInput as NativeTextInput,
  StyleProp,
  StyleSheet,
  TextStyle,
} from "react-native";

type TextInputProps = {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<TextStyle>;
};

export default function TextInput({
  placeholder,
  value,
  onChangeText,
  style,
}: TextInputProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: States & Constants
  // ----------------------------------------------------------------------------------------------------
  const { colors } = useAssets();
  const styles = StyleSheet.create({
    common: {
      color: colors.primary,
      borderWidth: 1,
      borderColor: colors.accent,
      borderRadius: 10,
      padding: 10,
    },
  });

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <NativeTextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={[styles.common, style]}
    />
  );
}
