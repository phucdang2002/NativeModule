import { useEffect, useState } from "react";
import { NativeModules, StyleSheet, Text, View } from "react-native";

function BatteryLife() {
    const [battery, setBattery] = useState(0);
    const { BatteryModule } = NativeModules;
    useEffect(() => {
        const setBatteryLevel = async () => {
            const batteryLevel = await BatteryModule.getBatteryHealth();
            setBattery(batteryLevel);
        }
        setBatteryLevel();
    }, [])
    return (
        <View style={styles.batteryContainer}>
            <Text style={styles.title}>Battery Level</Text>
            <Text style={styles.batteryText}>{battery.toFixed(0)}%</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    batteryContainer: {
        marginBottom: 40,
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
});
export default BatteryLife;