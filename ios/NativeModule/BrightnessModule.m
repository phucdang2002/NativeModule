#import <React/RCTBridgeModule.h>
#import <UIKit/UIKit.h>

@interface BrightnessModule : NSObject <RCTBridgeModule>
@end

@implementation BrightnessModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(setBrightness:(CGFloat)level) {
  dispatch_async(dispatch_get_main_queue(), ^{
    UIScreen.mainScreen.brightness = fmax(0.0, fmin(1.0, level)); // Clamp between 0 and 1
  });
}
@end
