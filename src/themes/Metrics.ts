import { Platform } from 'react-native';

export type Size = 'normal' | 'large' | 'small' | 'medium';
export type Appearance = 'filled' | 'outline' | 'ghost';

const { Dimensions } = require('react-native');
const screen = Dimensions.get('screen');
const window = Dimensions.get('window');
//In iOS devices, screenHeight === windowHeight;
//In Android devices with bottom navigator bar, screen height === windowHeight + statusBarHeight + bottomNavigatorBarHeight ;

const {
    width: windowWidth,
    height: windowHeight,
    scale,
} = Dimensions.get('window');

const screenMinSize = Math.min(screen.width, screen.height);
const screenMaxSize = Math.max(screen.width, screen.height);

const windowMinSize = Math.min(window.width, window.height);
const windowMaxSize = Math.max(window.width, window.height);

const DESIGN_WIDTH = 428;
const DESIGN_HEIGHT = 926;

const horizontalScreenRatio = screenMinSize / DESIGN_WIDTH;
const verticalScreenRatio = screenMaxSize / DESIGN_HEIGHT;

const MetricsBase = {
    scale,
    screenHorizontalInset:
        screenMinSize > 400 ? 24 : screenMinSize < 360 ? 16 : 20,
    screenVerticalInset:
        screenMinSize > 400 ? 20 : screenMinSize < 360 ? 16 : 18,
};

/** @internal */
export let Metrics = {
    ...MetricsBase,
    screenMinSize,
    screenMaxSize,
    windowMinSize,
    windowMaxSize: Platform.OS === 'ios' ? windowMaxSize : 0,
    windowWidth: Math.round(windowWidth),
    windowHeight: Math.round(windowHeight),
    designWidth: DESIGN_WIDTH,
    designHeight: DESIGN_HEIGHT,
    modalDeviceWidth: Number.MAX_VALUE,
    modalDeviceHeight: Number.MAX_VALUE,
    horizontalScreenRatio,
    verticalScreenRatio,
    navigationButtonSize: 36,
    screenDesignRatio: Math.max(horizontalScreenRatio, verticalScreenRatio),
    calloutWidth: 300,
    navigationIconSize: 24,
    screenTitleSize: 14,
    nbScreenHorizontalInset: `${MetricsBase.screenHorizontalInset}px`,
    nbScreenVerticalInset: `${MetricsBase.screenVerticalInset}px`,
    contentWidth: screenMinSize - 2 * MetricsBase.screenHorizontalInset,
    bottomModalButtonHeight: 40,
    bottomModalButtonFontSize: 14,
    borderRadius: 10,
    normalFontSize: 12,
    filterTabHeight: 52,
    modalHeight: Math.min(screenMaxSize * 0.9, 650),
    screenHeight: Dimensions.get('window').height,
    screenWidth: Dimensions.get('window').width,
    alertWidth: Math.min(400, screenMinSize * 0.9),
};

/** @internal */
export const ZIndexes = {
    navigationBar: 1,
};
