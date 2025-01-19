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
        <View style={styles.screen}>
            <View style={styles.batteryContainer}>
                <View style={styles.batteryBody}>
                    <View
                        style={[
                            styles.batteryLevel,
                            {
                                height: `${battery}%`,
                                backgroundColor: battery > 20 ? '#2ecc71' : '#e74c3c'
                            }
                        ]}
                    />
                </View>
                <View style={styles.batteryNumber}>
                    <Text style={styles.batteryText}>{battery}%</Text>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    batteryContainer: {
        alignItems: 'center',
        backgroundColor: '#1a1a1a',
        borderRadius: 20,
        padding: 20,
        width: '80%',
        aspectRatio: 1,
    },
    batteryBody: {
        width: '60%',
        height: '70%',
        borderWidth: 3,
        borderColor: '#2ecc71',
        borderRadius: 15,
        overflow: 'hidden',
        justifyContent: 'flex-end',
    },
    batteryLevel: {
        width: '100%',
        backgroundColor: '#2ecc71',
    },
    batteryNumber: {
        marginTop: 15,
    },
    batteryText: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
});
export default BatteryLife;