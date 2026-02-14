# Plan Działań - LUUS v2 🚀

## 1. Finalizacja Androida
- [ ] Upewnienie się, że build przechodzi bez błędów (`npx cap run android`).
- [ ] Odpalenie i testy na emulatorze/fizycznym telefonie.
- [ ] Weryfikacja działania wibracji (Haptics) i timera w tle.

## 2. Testy Autoryzacji
- [ ] Weryfikacja logowania Google (Client ID w `capacitor.config.json`).
- [ ] Weryfikacja logowania Apple (tylko iOS).
- [ ] Sprawdzenie, czy profile w Supabase tworzą się poprawnie po logowaniu.

## 3. RevenueCat (Subskrypcje)
- [ ] Podpięcie właściwych kluczy API w `src/lib/revenuecat.js`.
- [ ] Test statusu `isPremium` w `MonetizationContext`.
- [ ] Walidacja flow zakupowego (sandbox).

## 4. Szlifowanie UI (Session.jsx)
- [ ] Dopracowanie ekranu treningu pod kątem "Premium" designu.
- [ ] Sprawdzenie spójności ikon (Font Awesome).
- [ ] Animacje przejść między seriami/ćwiczeniami.

## 5. iOS Build Preparation ✅ **GOTOWE**
- [x] Dodanie platformy iOS do projektu (`npx cap add ios`).
- [x] Konfiguracja Info.plist (Google OAuth, Apple Sign-In, uprawnienia).
- [x] Utworzenie App.entitlements dla Apple Sign-In.
- [x] Konfiguracja capacitor.config.json (iOS Client ID placeholder).
- [x] Synchronizacja projektu (`npx cap sync ios`).
- [x] Utworzenie iOS_BUILD_GUIDE.md z instrukcjami dla Mac.
- [ ] **NA MAC:** Konfiguracja Signing & Capabilities w Xcode.
- [ ] **NA MAC:** Podmiana iOS Client ID w capacitor.config.json.
- [ ] **NA MAC:** Pierwszy build i test na symulatorze/urządzeniu.

---
*Status: 14.02.2026*
