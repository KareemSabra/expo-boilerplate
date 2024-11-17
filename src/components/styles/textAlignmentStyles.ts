import { TextStyle } from "react-native";
import { TextAlignment } from "../types/TextAlignment";


export const textAlignmentStyles: Record<TextAlignment, TextStyle['textAlign']> = {
    start: 'left',
    end: 'right',
    center: 'center',
    justify: 'justify'
}