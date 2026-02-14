# Mapa drogowa LUUS v2 🚀 (iOS, Android & Backend)

Ten dokument zawiera podsumowanie obecnego stanu projektu oraz listę kroków niezbędnych do wydania profesjonalnej, natywnej aplikacji.

## Gdzie jesteśmy (Status: 31.01.2026)
- [x] **Nowa struktura**: Projekt w osobnym folderze `luus_v2`.
- [x] **Backend**: Podłączony Supabase (URL + anon key w `.env`).
- [x] **Baza Danych**: Tabele `profiles` i `workouts` utworzone w SQL Editorze.
- [x] **Autoryzacja**: System logowania/rejestracji Supabase (`AuthProvider`) działa.
- [x] **Synchronizacja Danych (Cloud Sync)**: Zintegrowano Supabase z Dashboard, History, Session i Profile. Dane zapisują się w chmurze! ☁️
- [x] **Android Support**: Dodano platformę Android przez Capacitor.

## Kroki do pełnej natywności (Next Steps)

### 1. Bezpieczeństwo i Wydajność AI - [ZAKOŃCZONE]
- [x] Przeniesienie skryptu `generateWorkout` do Supabase Edge Functions.
- [x] Ukrycie klucza Gemini w "Secrets" Supabase.
- [x] **Optymalizacja szybkości**: Prędkość generowania zwiększona o ~200% (Temp=0.1, Optimized Prompt).

### 2. Apple App Store & Google Play Compliance - [W TOKU]
- [/] **Natywne Logowanie Apple/Google**: Struktura w AuthContext gotowa. Czeka na ID projektów.
- [x] **RevenueCat**: Pełna integracja (@revenuecat/purchases-capacitor). Gotowe na subskrypcje.
- [x] **Polityka Prywatności**: Dodana strona `/privacy`.
- [x] **Usuń konto**: Dodana funkcja w profilu użytkownika.

### 3. Native Look & Feel - [W TOKU]
- [x] **Ikony i Splash**: Wygenerowano 135 plików graficznych (Złote Logo Premium).
- [x] **Haptics**: Integracja wibracji w Architect, Session i Profile.
- [ ] **Deep Linking**: W planach.

---
*Zaktualizowano stan prac (31.01.2026). Aplikacja gotowa do testów monetyzacji i brandingu.*
