# iOS Build Guide - LUUS v2 🍎

## Status Przygotowania
✅ Projekt iOS został wygenerowany i skonfigurowany  
✅ Wszystkie pluginy zostały zainstalowane  
✅ Info.plist i entitlements są gotowe  
⚠️ Wymaga konfiguracji na Mac z Xcode

---

## Co musisz zrobić na Mac (gdy będziesz mieć dostęp):

### 1. Otwórz projekt w Xcode
```bash
cd /path/to/luus_v2/ios/App
open App.xcworkspace
```
**UWAGA:** Otwieraj **App.xcworkspace**, NIE App.xcodeproj!

### 2. Skonfiguruj Signing & Capabilities
W Xcode:
1. Wybierz target **App** w nawigatorze po lewej
2. Kliknij zakładkę **Signing & Capabilities**
3. Wybierz swój **Team** (Apple Developer Account)
4. Upewnij się, że Bundle Identifier to: `com.luus.v2`
5. Sprawdź, czy **Sign in with Apple** capability jest dodana (powinna być automatycznie)

### 3. Dodaj iOS Client ID dla Google Auth
**WAŻNE:** W pliku `capacitor.config.json` znajduje się placeholder:
```json
"iosClientId": "163134873590-PLACEHOLDER_IOS_ID.apps.googleusercontent.com"
```

Aby uzyskać prawdziwy iOS Client ID:
1. Wejdź na [Google Cloud Console](https://console.cloud.google.com)
2. Wybierz projekt LUUS
3. Przejdź do **APIs & Services** → **Credentials**
4. Kliknij **Create Credentials** → **OAuth 2.0 Client ID**
5. Wybierz typ **iOS**
6. Podaj Bundle ID: `com.luus.v2`
7. Skopiuj wygenerowany iOS Client ID i zamień placeholder w `capacitor.config.json`
8. Wykonaj ponownie: `npx cap sync ios`

### 4. Skonfiguruj Apple Sign-In w Apple Developer Portal
1. Wejdź na [Apple Developer Portal](https://developer.apple.com)
2. Przejdź do **Certificates, Identifiers & Profiles**
3. Wybierz **App IDs** i znajdź lub utwórz: `com.luus.v2`
4. Upewnij się, że **Sign in with Apple** jest zaznaczone jako Capability
5. Zapisz zmiany

### 5. Skonfiguruj RevenueCat dla iOS
W pliku `src/lib/revenuecat.js` podmień placeholder:
```javascript
const API_KEY_IOS = "TWÓJ_REVENUE_CAT_IOS_API_KEY";
```

### 6. Build i Run
W Xcode:
1. Wybierz urządzenie docelowe (symulator lub prawdziwy iPhone)
2. Kliknij przycisk **Play** (▶️)
3. Aplikacja powinna się zbudować i uruchomić

---

## Testowanie Autoryzacji

### Google Sign-In (iOS)
- Po kliknięciu "Zaloguj przez Google" powinna otworzyć się natywna przeglądarka Safari
- Użytkownik loguje się do konta Google
- Po zalogowaniu wraca do aplikacji z tokenem

### Apple Sign-In
- Działa tylko na fizycznym urządzeniu (NIE działa na symulatorze)
- Użytkownik widzi natywny ekran Apple ID
- Po zalogowaniu token jest przekazywany do Supabase

---

## Troubleshooting

### Problem: "No such file or directory: GoogleService-Info.plist"
**Rozwiązanie:** Ten plik NIE jest wymagany dla Capacitor Google Auth. Jeśli widzisz ten błąd, zignoruj go lub usuń referencję w Build Phases.

### Problem: "Apple Sign-In nie działa na symulatorze"
**Rozwiązanie:** To normalne! Apple Sign-In działa TYLKO na prawdziwych urządzeniach.

### Problem: "Target has signing issues"
**Rozwiązanie:** 
1. W Xcode, przejdź do Signing & Capabilities
2. Upewnij się, że masz wybrany poprawny Team
3. Jeśli używasz darmowego konta, zmień Bundle ID na unikalny (np. `com.YOUR_NAME.luus`)

---

## Następne kroki (po pierwszym udanym buildzie)
- [ ] Przetestuj generowanie treningów (nowa logika AI)
- [ ] Sprawdź działanie Haptics (wibracje)
- [ ] Przetestuj AuthContext (logowanie Google/Apple)
- [ ] Zweryfikuj RevenueCat (status Premium)

---

*Przygotowane: 14.02.2026*  
*Wszystko jest gotowe – wystarczy Mac i 30 minut konfiguracji! 🚀*
