import { theme } from 'native-base';

/** @internal */
export const Colors = {
    black1: '#000000',
    black: '#3B3B3B',
    white: '#FFFFFF',
    gray1: '#F8F8F8',
    gray2: '#DEDEDE',
    gray3: '#D6D6D6',
    gray4: '#C4C4C4',
    gray5: '#888888',
    neutralGray2: '#E7E7E7',
    neutralBlack: '#252223',
    gray6: '#666666',
    red: '#FF6A6A',
    pink8: '#FF424F',
    green: '#2ECC71',
    blue: '#0085FF',
    transparent: 'transparent',
    lotion: '#FAFAFA',
    pattelPink: '#F8D8EE',
    pattelGreen: '#DAFBF9',
    pattelBlue: '#D4E8FA',
    subBlue: '#A5D0F9',
    subRed: '#FFC0C0',
};

/** @internal */
export const ColorSettings = {
    /** Base */
    primary: '#D03690',
    primaryPack: {
        '50': '#FFE8F5',
        '100': '#FFE8F5',
        '200': '#EA69B4',
        '300': '#EA69B4',
        '400': '#D03690',
        '500': '#D03690',
        '600': '#B70E71',
        '700': '#B70E71',
        '800': '#B70E71',
        '900': '#B70E71',
    },
    secondary: '#62D0C4',
    background: ['#E7F8F8', '#E2EDF8'],
    screen: Colors.white,
    border: Colors.gray5,
    /** Text & input fields */
    text: '#252223',
    text1: '#404040',
    lighterText: '#52525B',
    darkerText: '#000000',
    placeholderText: Colors.neutralGray2,
    inputBgColor: 'white',
    inputIcon: Colors.neutralGray2,
    inputIconActive: '#252223',
    inActiveInputBgColor: theme.colors.gray[100],
    invalidField: '#ff0000',
    requiredMarkColor: '#ff0000',
    /** Status */
    info: '#5E7AA9',
    infoBg: '#dfe4ee',
    success: Colors.green,
    successBg: '#dce9e3',
    warning: '#F3AA1C',
    warningBg: '#fbeada',
    error: '#E74C3C',
    errorBg: '#fbdddd',
    /** Other components */
    spinner: Colors.pattelPink,
    modal: 'rgba(37, 34, 35, 0.5)',
    toolTip: '#FCEDF8',
    shadow: '#1F2937', //rgb(31, 41, 55)
};
