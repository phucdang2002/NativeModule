import { NativeModules, View } from "react-native";

function BatteryLife() {
    const { BatteryModule } = NativeModules;
    return (
        <View>
            <h1>Battery: {BatteryModule.getBatteryHealth()}</h1>
        </View>
    )
}
export default BatteryLife;