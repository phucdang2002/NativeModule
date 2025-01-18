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
        <View style={styles.container}>
            <View style={styles.brightnessContainer}>
                <Text style={styles.title}>Screen Brightness</Text>
                <Slider
                    style={styles.slider}
                    minimumValue={0}
                    maximumValue={1}
                    value={brightness}
                    onValueChange={handleBrightnessChange}
                />
                <Text style={styles.brightnessText}>
                    {(brightness * 100).toFixed(0)}%
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    batteryContainer: {
        marginBottom: 40,
        alignItems: 'center',
    },
    brightnessContainer: {
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    batteryText: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#2196F3',
    },
    slider: {
        width: '100%',
        height: 40,
    },
    brightnessText: {
        fontSize: 18,
        marginTop: 10,
    },
});

export default BrightnessSetting;