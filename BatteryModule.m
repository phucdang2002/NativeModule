#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface BatteryModule : NSObject <RCTBridgeModule>
@end

@implementation BatteryModule

RCT_EXPORT_MODULE();

RCT_REMAP_METHOD(getBatteryLevel,
                 resolver:(RCTPromiseResolveBlock)resolve
                 rejecter:(RCTPromiseRejectBlock)reject) {
  [UIDevice currentDevice].batteryMonitoringEnabled = YES;
  float batteryLevel = [UIDevice currentDevice].batteryLevel;
  
  if (batteryLevel < 0) {
    NSError *error = [NSError errorWithDomain:@"BatteryModule"
                                         code:500
                                     userInfo:@{NSLocalizedDescriptionKey: @"Unable to fetch battery level"}];
    reject(@"battery_error", @"Battery level not available", error);
  } else {
    resolve(@(batteryLevel * 100)); // Return percentage
  }
}

@end
