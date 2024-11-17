type AppConfig = {
    colors: {
        light: {
            accent: string;
            destructive: string;
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;
            dark: string;
            light: string;
            none: string;
        };
        dark: {
            accent: string;
            destructive: string;
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;
            dark: string;
            light: string;
            none: string;
        };
    };
};

export const appConfig: AppConfig = {
    colors: {
        light: {
            accent: '#f97316',
            destructive: '#b91c1c',
            primary: '#020617',
            secondary: '#1e293b',
            tertiary: '#475569',
            quaternary: '#94a3b8',
            dark: '#020617',
            light: '#f8fafc',
            none: '',
        },
        dark: {
            accent: '#f97316',
            destructive: '#b91c1c',
            primary: '#f8fafc',
            secondary: '#e2e8f0',
            tertiary: '#94a3b8',
            quaternary: '#475569',
            dark: '#020617',
            light: '#f8fafc',
            none: '',
        },
    },
};
