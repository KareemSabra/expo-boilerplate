import { useThemeColor } from "@/hooks/useThemeColor";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import Text from "../Text";

type ButtonProps = {
  buttonText: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
};

export default function Button({
  buttonText,
  onPress,
  buttonStyle,
  textStyle,
}: ButtonProps) {
  // ----------------------------------------------------------------------------------------------------
  // MARK: States & Constants
  // ----------------------------------------------------------------------------------------------------
  const color = useThemeColor({}, "button");

  // ----------------------------------------------------------------------------------------------------
  // MARK: Styles
  // ----------------------------------------------------------------------------------------------------
  const styles = StyleSheet.create({
    button: {
      backgroundColor: color,
      padding: 16,
      borderRadius: 8,
      alignItems: "center",
    },
  });

  // ----------------------------------------------------------------------------------------------------
  // MARK: Main Component UI
  // ----------------------------------------------------------------------------------------------------
  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={textStyle}>{buttonText}</Text>
    </TouchableOpacity>
  );
}
