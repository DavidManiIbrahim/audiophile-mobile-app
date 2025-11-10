# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   # Audiophile Store — Mobile (Expo)

   ![EAS Build](https://img.shields.io/badge/EAS-build-blue) ![Expo](https://img.shields.io/badge/Expo-enabled-brightgreen)

   This repository contains a demo mobile storefront called "Audiophile" built with Expo (managed workflow) and the Expo Router. It's a learning/demo app that demonstrates UI layout, file-based routing, and EAS build profiles for producing Android binaries (APK/AAB).

   Contents of this README

   - What the project does
   - Local development
   - How routing and components work
   - Building Android binaries with EAS (APK & AAB)
   - Example: add a ProductDetail route
   - CI example (GitHub Actions) to build both APK and AAB
   - Troubleshooting, contributing, license

   What this project does

   - Home screen with hero sections and category cards
   - Navbar with dropdown navigation to categories
   - Placeholder category screens: `app/Headphones.jsx`, `app/Speakers.jsx`, `app/Earphones.jsx`
   - Product buttons reference a `ProductDetail` route (not included by default)
   - Images in `app/index.jsx` were commented out to avoid missing-asset errors — add assets under `assets/` or restore the imports to enable images

   Local development

   1. Install dependencies

   ```bash
   cd /workspaces/audiophile-mobile-app/audiophile-store-app
   npm install
   ```

   2. Start the dev server

   ```bash
   npx expo start
   ```

   Open the devtools in your browser and run in Expo Go or an emulator.

   How routing and components work

   - File-based routes live in `app/`. For example `app/Headphones.jsx` maps to the `/headphones` route.
   - The Navbar component (`app/components/Navbar.jsx`) uses the Expo Router to navigate (router.push('/headphones')).
   - If you see "page not found" for a route, confirm the file exists under `app/` and matches the path.

   Building Android APK / AAB with EAS

   This project includes `eas.json` with two useful profiles:

   - `production-apk` — builds an APK (sideloadable)
   - `production-aab` — builds an AAB (recommended for Google Play)

   Prerequisites

   - Node and npm installed
   - EAS CLI (install globally if needed):

   ```bash
   npm install -g eas-cli
   ```

   - Login to Expo (the CLI will prompt):

   ```bash
   eas login
   ```

   - (Optional) Set up Android credentials (keystore). EAS can manage credentials on your behalf during the build.

   Build commands

   - Build an APK (sideloadable):

   ```bash
   cd /workspaces/audiophile-mobile-app/audiophile-store-app
   eas build -p android --profile production-apk
   ```

   - Build an AAB (upload to Play Store):

   ```bash
   eas build -p android --profile production-aab
   ```

   Notes

   - APK: single installable binary for testing or internal distribution.
   - AAB: recommended for Play Store; Google Play serves optimized APKs to devices.
   - EAS produces one artifact per job/profile — run both profiles to get both artifacts.

   Example: add a ProductDetail route

   If you want product buttons to navigate to a working detail page, add `app/ProductDetail.jsx` with this minimal example:

   ```jsx
   // app/ProductDetail.jsx
   import React from 'react';
   import { View, Text, Button } from 'react-native';
   import { useSearchParams, useRouter } from 'expo-router';

   export default function ProductDetail() {
      const { productId, category } = useSearchParams();
      const router = useRouter();

      return (
         <View style={{ padding: 24 }}>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>{productId}</Text>
            <Text style={{ marginVertical: 8 }}>Category: {category}</Text>
            <Button title="Back" onPress={() => router.back()} />
         </View>
      );
   }
   ```

   CI: GitHub Actions example to build APK and AAB

   Create `.github/workflows/eas-build.yml` with the following (requires `EAS_TOKEN` secret):

   ```yaml
   name: EAS Build (APK & AAB)

   on:
      workflow_dispatch:

   jobs:
      build-apk:
         runs-on: ubuntu-latest
         env:
            EAS_TOKEN: ${{ secrets.EAS_TOKEN }}
         steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
               with:
                  node-version: 18
            - run: npm ci
            - run: npm install -g eas-cli
            - run: eas build -p android --profile production-apk --non-interactive

      build-aab:
         runs-on: ubuntu-latest
         env:
            EAS_TOKEN: ${{ secrets.EAS_TOKEN }}
         needs: build-apk
         steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
               with:
                  node-version: 18
            - run: npm ci
            - run: npm install -g eas-cli
            - run: eas build -p android --profile production-aab --non-interactive
   ```

   Troubleshooting

   - Routes: make sure a route file exists under `app/` (e.g. `app/Headphones.jsx`).
   - Images: add missing files under `assets/` or replace imports with placeholders to avoid bundler errors.
   - EAS credentials: manage via `eas credentials` or let EAS handle them during the build.

   Contributing

   - PRs and issues are welcome. For small demos like this, opening an issue describing the change is a good first step.

   License

   This repository is a demo/example. Add a license file (e.g., `MIT`) if you plan to publish or share the project.

   If you'd like, I can create the `app/ProductDetail.jsx` placeholder now and wire the product buttons so navigation doesn't fail — tell me to proceed and I'll add it.
