# Apple Developer Portal Checklist 🍎

## Przed pierwszym buildem na Mac - Konfiguracja w Apple Developer Portal

### 1. Weryfikacja/Utworzenie App ID
📍 **Gdzie:** https://developer.apple.com/account/resources/identifiers/list

- [ ] Zaloguj się do Apple Developer Portal
- [ ] Przejdź do **Certificates, Identifiers & Profiles**
- [ ] Wybierz **Identifiers** → **App IDs**
- [ ] Sprawdź, czy istnieje App ID: **com.luus.v2**
  - Jeśli NIE istnieje, kliknij **+** i utwórz nowy:
    - **Description:** LUUS - AI Personal Trainer
    - **Bundle ID:** com.luus.v2
    - **Capabilities:**
      - ✅ Sign in with Apple
      - ✅ Push Notifications
      - ✅ In-App Purchase (dla RevenueCat)

### 2. Konfiguracja Sign in with Apple
📍 **Apple Developer Portal** → **Identifiers** → **com.luus.v2**

- [ ] Upewnij się, że **Sign in with Apple** jest zaznaczone
- [ ] Kliknij **Configure** obok Sign in with Apple
- [ ] Ustaw **Primary App ID:** com.luus.v2
- [ ] Zapisz zmiany

### 3. Supabase - Apple OAuth Setup
📍 **Supabase Dashboard** → **Authentication** → **Providers**

- [ ] Włącz **Apple** Provider
- [ ] Ustaw:
  - **Service ID:** com.luus.v2
  - **Authorized Client IDs:** com.luus.v2
  - **Private Key:** (Wygeneruj w Apple Developer Portal - patrz sekcja 4)
  - **Key ID:** (Z Apple Developer Portal)
  - **Team ID:** (Twój Apple Developer Team ID - znajdziesz w Membership)

### 4. Wygenerowanie Private Key dla Apple Sign-In
📍 **Apple Developer Portal** → **Certificates, Identifiers & Profiles** → **Keys**

- [ ] Kliknij przycisk **+** (Create a Key)
- [ ] Nazwa klucza: **LUUS Apple Sign-In Key**
- [ ] Zaznacz **Sign in with Apple**
- [ ] Kliknij **Configure** i wybierz Primary App ID: **com.luus.v2**
- [ ] Kliknij **Continue** → **Register**
- [ ] **POBIERZ PLIK .p8** (możesz go pobrać tylko raz!)
- [ ] Skopiuj **Key ID** (np. ABC123XYZ)
- [ ] Wklej zawartość pliku .p8 do Supabase Dashboard → Apple Provider → **Private Key**

### 5. Google OAuth dla iOS
📍 **Google Cloud Console:** https://console.cloud.google.com

- [ ] Wybierz projekt **LUUS**
- [ ] Przejdź do **APIs & Services** → **Credentials**
- [ ] Kliknij **Create Credentials** → **OAuth 2.0 Client ID**
- [ ] Wybierz typ aplikacji: **iOS**
- [ ] Podaj **Bundle ID:** com.luus.v2
- [ ] Skopiuj wygenerowany **iOS Client ID**
- [ ] Otwórz plik `capacitor.config.json` w projekcie
- [ ] Zamień placeholder:
  ```json
  "iosClientId": "TUTAJ_WKLEJ_IOS_CLIENT_ID"
  ```
- [ ] Zapisz i wykonaj: `npx cap sync ios`

### 6. RevenueCat - iOS Configuration
📍 **RevenueCat Dashboard:** https://app.revenuecat.com

- [ ] Utwórz nowy projekt lub wybierz istniejący projekt **LUUS**
- [ ] Dodaj aplikację iOS:
  - **Bundle ID:** com.luus.v2
  - **App Store Shared Secret:** (Pobierz z App Store Connect)
- [ ] Skopiuj **iOS API Key**
- [ ] Otwórz plik `src/lib/revenuecat.js`
- [ ] Podmień placeholder:
  ```javascript
  const API_KEY_IOS = "TWÓJ_IOS_API_KEY_Z_REVENUECAT";
  ```

### 7. App Store Connect - Utworzenie App Record
📍 **App Store Connect:** https://appstoreconnect.apple.com

- [ ] Zaloguj się do App Store Connect
- [ ] Przejdź do **My Apps**
- [ ] Kliknij **+** → **New App**
- [ ] Wypełnij dane:
  - **Platform:** iOS
  - **Name:** LUUS - AI Personal Trainer
  - **Primary Language:** Polish (lub English)
  - **Bundle ID:** com.luus.v2
  - **SKU:** LUUS-V2 (dowolny unikalny identyfikator)
- [ ] Kliknij **Create**

---

## Po ukończeniu powyższych kroków:
✅ Możesz otworzyć projekt w Xcode (`ios/App/App.xcworkspace`)  
✅ Wszystkie konfiguracje autoryzacji będą działać  
✅ RevenueCat będzie gotowy do testowania subskrypcji  

---

*Ostatnia aktualizacja: 14.02.2026*  
*Zarezerwuj ok. 45-60 minut na przejście przez całą checklist pierwszy raz.*
