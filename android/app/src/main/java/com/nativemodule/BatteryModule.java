package com.mobilewebsoket;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import android.os.BatteryManager;
public class BatteryModule extends ReactContextBaseJavaModule {

    public BatteryModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "BatteryModule";
    }

    @ReactMethod
    public void getBatteryHealth(int number1, int number2, Promise promise) {
        try {
            BatteryManager
        } catch (Exception e) {
            promise.reject("ERROR", e);
        }
    }
}
