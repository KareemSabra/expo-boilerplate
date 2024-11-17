import { appConfig } from '@/config/appConfig';
import { useColorScheme } from 'react-native';

export default function useAssets() {
    const colorScheme = useColorScheme() ?? 'light';

    return {
        colors: {
            accent: appConfig.colors[colorScheme].accent,
            destructive: appConfig.colors[colorScheme].destructive,
            primary: appConfig.colors[colorScheme].primary,
            secondary: appConfig.colors[colorScheme].secondary,
            tertiary: appConfig.colors[colorScheme].tertiary,
            quaternary: appConfig.colors[colorScheme].quaternary,
            dark: appConfig.colors[colorScheme].dark,
            light: appConfig.colors[colorScheme].light,
            none: appConfig.colors[colorScheme].none,
        },
    };
}
