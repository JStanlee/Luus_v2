# Implementation Plan - LUUS v2 🚀

Ten dokument zawiera szczegółowy plan techniczny kolejnych kroków rozwoju aplikacji LUUS v2, mający na celu przygotowanie jej do publikacji w sklepach App Store i Google Play.

## 1. Natywna Autoryzacja (Compliance)
- [x] **UI Logowania (Platform-specific)**: Dodano przycisk Google (wszędzie) i Apple (tylko iOS).
- [x] **Implementacja Google Auth**: Integracja `@codetrix-studio/capacitor-google-auth`.
- [x] **Implementacja Apple Sign-In**: Integracja `@capacitor-community/apple-sign-in`.
- [x] **Aktualizacja AuthContext.jsx**: Implementacja metod logowania native tokenem do Supabase.
- [!] **Fix: Supabase Email**: Jeśli mail przychodzi bez linka, użytkownik musi sprawdzić w Supabase Dashboard > Auth > Email Templates, czy tag `{{ .ConfirmationURL }}` jest obecny w treści maila "Confirm signup".

## 2. Monetyzacja (RevenueCat & AdMob)
- [ ] **Klucze Produkcyjne**: Podmiana placeholderów w `src/lib/revenuecat.js` na realne klucze API.
- [ ] **Flow Zakupowy**: Walidacja, czy po udanym zakupie `MonetizationContext` poprawnie aktualizuje stan `isPremium` w bazie Supabase (`profiles`).
- [ ] **Obsługa AdMob**: Przetestowanie wyświetlania reklam nagrodowych (Rewarded Ads) dla darmowych użytkowników przy próbie wykonania akcji premium.

## 3. Deep Linking & Notifications
- [ ] **Deep Linking**: Konfiguracja schematu URL `luus://` dla iOS/Android.
    - Obsługa przychodzących linków w `App.jsx`, aby otwierać konkretne widoki treningów.
- [ ] **Local Notifications**: Integracja przypomnień o treningach.
    - Dodanie przełączników powiadomień w profilu użytkownika.
    - Harmonogramowanie powiadomień "push" lokalnie przez `@capacitor/local-notifications`.

## 4. Stabilność i Testy Natywne
- [ ] **Android Build**: Wykonanie pełnej kompilacji `npx cap run android` i testy na fizycznym urządzeniu.
    - Weryfikacja działania Timera w tle.
    - Sprawdzenie Haptics (wibracji) w trakcie zmieniania serii/ćwiczeń.
- [ ] **Bug Tracking**: Monitorowanie logów w Android Studio pod kątem błędów krytycznych.

## 5. Przygotowanie do Publikacji (Launch Prep)
- [ ] **Legal**: Stworzenie i podpięcie strony `Terms of Service` (ToS) obok istniejącej polityki prywatności.
- [ ] **UI/UX Polish**: 
    - Przegląd widoku `Session.jsx` (ekran treningu) pod kątem estetyki "Premium".
    - Upewnienie się, że wszystkie ikony Font Awesome działają spójnie w całej aplikacji.

---
*Plan wygenerowany: 01.02.2026. Kolejność zadań może ulec zmianie w zależności od dostępności kluczy API dewelopera.*
