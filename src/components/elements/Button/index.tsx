import { Pressable as NativePressable, StyleProp, StyleSheet, TextStyle } from 'react-native';
import { TextSize } from '../../types/TextSize';
import { Color } from '../../types/Color';
import useAssets from '@/hooks/useAssets';
import { Variant } from '@/components/types/Variant';
import Text from '../Text';
import { Radius } from '@/components/types/Radius';
import { radiusStyles } from '@/components/styles/radiusStyles';
import { TextAlignment } from '@/components/types/TextAlignment';

type ButtonProps = {
    children: string;
    size?: TextSize;
    weight?: TextStyle['fontWeight'];
    variant?: Variant;
    color?: Color;
    radius?: Radius,
    alignment?: TextAlignment,
    onPress: () => void;
    style?: StyleProp<TextStyle>;
};

export default function Button({
    children,
    size = 'md',
    weight = 'semibold',
    variant = 'solid',
    color = 'accent',
    radius = 'md',
    alignment = 'center',
    onPress,
    style,
}: ButtonProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const { colors } = useAssets();

    const commonStyles = StyleSheet.create({
        button: {
            padding: 10,
            borderRadius: radiusStyles[radius],
            color: 'white',
        },
    });

    const variantsStyles = StyleSheet.create({
        solid: {
            backgroundColor: colors[color],
        },
        soft: {
            backgroundColor: colors[color],
            opacity: 0.5,
        },
        outline: {
            borderColor: colors[color],
        },
        link: {
            color: colors[color],
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <NativePressable onPress={onPress}>
            <Text size={size} weight={weight} alignment={alignment} style={[commonStyles.button, variantsStyles[variant], style]}>
                {children}
            </Text>
        </NativePressable>
    );
}
