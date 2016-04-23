#!/bin/bash

# done only once
#mkdir keys
#mkdir keys/android
#keytool -genkey -v -keystore keys/android/filletFinder-release-key.keystore -alias filletFinder-alias -keyalg RSA -keysize 2048 -validity 10000

cordova build --release android
cp platforms/android/build/outputs/apk/android-release.apk release/android/filletFinder.apk