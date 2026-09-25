# CATCH — Glitch Launcher

Neon glitch Android launcher look: black screen, RGB-split clock, and the CATCH mark.

## Download the APK

Install **CATCH.apk** on your Android phone.

1. Download `CATCH.apk` from this chat or rebuild it with `android/build.sh`
2. On your phone open **Settings → Security** and allow apps from this source / unknown apps for your Files app
3. Open the APK and tap **Install**
4. Open the new **CATCH** app

Swipe up (or tap) the lock screen to reach the home grid. Tap the round CATCH button to lock again. Back goes to the lock screen; back again closes the app.

This APK is a **look-alike launcher inside an app**. It does not replace your real Android home screen, and the icons are demo buttons (they show the app name, they do not open Phone or Chrome).

## Web preview

https://glitchplays1.github.io/catch-glitch-launcher/

## Build the APK yourself

You need the Android SDK command-line tools (platform 34 and build-tools 34).

```bash
cd android
export ANDROID_SDK_ROOT=/path/to/android-sdk
./build.sh
```

The signed file is `android/CATCH.apk`.

Package name: `com.glitchplays1.catchlauncher`

Made for [Glitchplays1](https://github.com/Glitchplays1).
