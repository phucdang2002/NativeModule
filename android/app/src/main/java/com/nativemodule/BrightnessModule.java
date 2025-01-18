package com.nativemodule;

import android.view.WindowManager;
import android.app.Activity;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class BrightnessModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public BrightnessModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "BrightnessModule";
    }

    @ReactMethod
    public void setBrightness(float brightness) {
        final Activity activity = getCurrentActivity();
        if (activity != null) {
            activity.runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    WindowManager.LayoutParams layoutParams = activity.getWindow().getAttributes();
                    layoutParams.screenBrightness = brightness;
                    activity.getWindow().setAttributes(layoutParams);
                }
            });
        }
    }
}