import Slider from "@react-native-community/slider";
import { useState } from "react";
import { NativeModules, StyleSheet, Text, View } from "react-native";

function BrightnessSetting() {
    const [brightness, setBrightness] = useState(0.5);
    const { BrightnessModule } = NativeModules;
    const handleBrightnessChange = (value) => {
        setBrightness(value);
        BrightnessModule.setBrightness(value);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.brightnessContainer}>
                <View style={styles.brightnessCircle}>
                    <Text style={styles.brightnessText}>{(brightness * 100).toFixed(0)}%</Text>
                </View>
                <Text style={styles.title}>Brightness</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    value={brightness}
                    onValueChange={handleBrightnessChange}
                    minimumTrackTintColor="#007AFF"
                    maximumTrackTintColor="#DEDEDE"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        alignSelf: 'flex-start',
        marginLeft: '10%',
    },
    slider: {
        width: '80%',
        height: 40,
    },
    brightnessContainer: {
        width: '100%',
        alignItems: 'center',
    },
    brightnessCircle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 2,
        borderColor: '#007AFF',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    brightnessText: {
        fontSize: 24,
        fontWeight: '500',
        color: '#007AFF',
    },
});

export default BrightnessSetting;