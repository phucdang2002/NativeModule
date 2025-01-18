package com.nativemodule;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import android.os.BatteryManager;
import android.content.Intent;
import android.content.IntentFilter;
public class BatteryModule extends ReactContextBaseJavaModule {

    public BatteryModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "BatteryModule";
    }

    @ReactMethod
    public void getBatteryHealth(Promise promise) {
        try {
            IntentFilter ifilter = new IntentFilter(Intent.ACTION_BATTERY_CHANGED);
            Intent batteryStatus = getReactApplicationContext().registerReceiver(null, ifilter);

            int level = batteryStatus.getIntExtra(BatteryManager.EXTRA_LEVEL, -1);
            int scale = batteryStatus.getIntExtra(BatteryManager.EXTRA_SCALE, -1);

            float batteryPct = level / (float) scale * 100;

            promise.resolve(batteryPct);
        } catch (Exception e) {
            promise.reject("ERROR", e);
        }
    }
}
