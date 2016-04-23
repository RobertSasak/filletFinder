#!/bin/bash

cordova build --release android
cp platforms/android/build/outputs/apk/android-release.apk release/android/skattelister.apk