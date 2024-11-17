import { Text as NativeText, StyleProp, StyleSheet, TextStyle } from 'react-native';
import { TextSize } from '../../types/TextSize';
import { textSizeStyles } from '../../styles/textSizeStyles';
import { Color } from '../../types/Color';
import useAssets from '@/hooks/useAssets';
// import { TextAlignment } from '@/components/types/TextAlignment';
import { textAlignmentStyles } from '@/components/styles/textAlignmentStyles';
import { TextAlignment } from '@/components/types/TextAlignment';

type TextProps = {
    children: string | JSX.Element;
    size?: TextSize;
    weight?: TextStyle['fontWeight'];
    color?: Color;
    alignment?: TextAlignment;
    style?: StyleProp<TextStyle>;
};

export default function Text({ children, size = 'md', weight = 'medium', color = 'primary', alignment = 'start', style }: TextProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const { colors } = useAssets();

    const styles = StyleSheet.create({
        common: {
            fontSize: typeof size === 'string' ? textSizeStyles[size as keyof typeof textSizeStyles] : size,
            fontWeight: weight,
            color: colors[color],
            textAlign: textAlignmentStyles[alignment] as TextStyle['textAlign']
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return <NativeText style={[styles.common, style]}>{children}</NativeText>;
}
