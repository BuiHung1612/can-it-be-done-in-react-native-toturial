import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { Column, Text } from 'native-base';
import { ColorSettings, Metrics } from 'themes';
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';

const HEIGHT = Metrics.screenMaxSize * 0.3;
const MAX_HEIGHT = Metrics.screenMaxSize * 0.9;
const MIN_HEIGHT = Metrics.screenMaxSize * 0.1;

const MAX_WIDTH = Metrics.screenMinSize;
const MIN_WIDTH = Metrics.screenMinSize * 0.3;
const YoutubeScreen = () => {
    const moveValue = useSharedValue(0);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (event, ctx) => {
            ctx.startY = moveValue.value;
        },
        onActive: (event, ctx) => {
            let newValue = ctx.startY + event.translationY;

            if (newValue > MAX_HEIGHT) {
                newValue = MAX_HEIGHT;
            }
            if (newValue < 0) {
                newValue = 0;
            }
            moveValue.value = newValue;
        },
        onEnd: (event, ctx) => {
            const velocityY = event.velocityY;

            if (velocityY < -40 && moveValue.value > 0) {
                moveValue.value = withSpring(0, {
                    velocity: velocityY,
                    damping: 18,
                });
            } else if (velocityY > 40 && moveValue.value < MAX_HEIGHT) {
                moveValue.value = withSpring(MAX_HEIGHT, {
                    velocity: velocityY,
                    damping: 18,
                });
            } else if (moveValue.value < MAX_HEIGHT / 2) {
                moveValue.value = withSpring(0, {
                    velocity: velocityY,
                    damping: 18, // giảm độ nảy của lò xo. mặc định là 10
                });
            } else {
                moveValue.value = withSpring(MAX_HEIGHT, {
                    velocity: velocityY,
                    damping: 18,
                });
            }
        },
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: moveValue.value,
                },
            ],
        };
    });
    const viewStyle = useAnimatedStyle(() => {
        const _width = interpolate(
            moveValue.value,
            [MAX_HEIGHT * 0.95, MAX_HEIGHT],
            [MAX_WIDTH, MIN_WIDTH],
            {
                extrapolateLeft: Extrapolation.CLAMP,
                extrapolateRight: Extrapolation.CLAMP,
            },
        );

        const _height = interpolate(
            moveValue.value,
            [0, MAX_HEIGHT],
            [HEIGHT, MIN_HEIGHT],
            {
                extrapolateLeft: Extrapolation.CLAMP,
                extrapolateRight: Extrapolation.CLAMP,
            },
        );
        return {
            width: _width,
            height: _height,
        };
    }, []);

    const opacityStyle = useAnimatedStyle(() => {
        const _opacity = interpolate(
            moveValue.value,
            [0, MAX_HEIGHT / 2],
            [1, 0],
            {
                extrapolateLeft: Extrapolation.CLAMP,
                extrapolateRight: Extrapolation.CLAMP,
            },
        );
        return {
            opacity: _opacity,
        };
    }, []);

    const swipeUp = () => {
        moveValue.value = withSpring(0, {
            velocity: 0,
            damping: 18,
        });
    };
    return (
        <Column flex={1} backgroundColor={'red.200'}>
            <Column bgColor={'gray.300'} flex={1}>
                <PanGestureHandler onGestureEvent={gestureHandler}>
                    <Animated.View style={[styles.container, animatedStyle]}>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={swipeUp}
                            style={styles.rowView}>
                            <Animated.View
                                style={[styles.mainView, viewStyle]}
                            />
                            <Column flex={1} mx={2}>
                                <Animated.Text numberOfLines={1} style={{}}>
                                    Cặp đôi hoàn hảo 2014 tập 9 (11/01/2015) Bùi
                                    Anh Tuấn, Tú Vi - Chuyện nàng kiều
                                    VietShowBizRevet
                                </Animated.Text>
                                <Text numberOfLines={1}>
                                    VietShowBiz Nhìn lại
                                </Text>
                            </Column>
                            <AntDesign name="heart" size={20} color="black" />
                        </TouchableOpacity>

                        <Animated.View style={[opacityStyle]}>
                            <Text>
                                Cặp đôi hoàn hảo 2014 tập 9 (11/01/2015) Bùi Anh
                                Tuấn, Tú Vi - Chuyện nàng kiều VietShowBizRevet
                            </Text>
                        </Animated.View>
                    </Animated.View>
                </PanGestureHandler>
            </Column>
        </Column>
    );
};

export default YoutubeScreen;

const styles = StyleSheet.create({
    mainView: {
        height: HEIGHT,
        width: Metrics.screenMinSize,
        backgroundColor: ColorSettings.info,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 6,
    },
});
