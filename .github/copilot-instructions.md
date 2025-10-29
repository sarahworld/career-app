# GitHub Copilot Instructions — React Native + TypeScript (Mobile)

> **Project defaults**
>
> - React Native (modern, Hermes enabled), TypeScript **strict**.
> - Functional components + React Hooks only.
> - Use `SafeAreaView` from `react-native-safe-area-context` at screen roots.
> - UI: `StyleSheet.create` or a central theme system; prefer `Pressable` for interactions.
>
> Copilot, follow these rules when generating code, tests, or docs. Pay special attention to **DRY** (Don't Repeat Yourself) principles: factor repeated logic into hooks, utilities, theme tokens, or shared components. Avoid long repetitive chains — use lookup maps and small helpers.

---

## 1) Code Style & TypeScript

- Always produce **TypeScript** code. Use `strict` mode and prefer `interface` for exported object shapes.
- Favor **named exports** (avoid default exports for components/hooks).
- Use modern syntax (async/await, optional chaining, nullish coalescing).
- Keep functions small, pure where possible, and isolate side effects.
- Avoid `any`. If unavoidable, add a `// TODO: add proper type` comment.
- Emphasize **DRY**: when you see repeated patterns, create a small helper or utility (e.g., color maps, spacing helpers, typed api clients, generic list renderers).

**Example:**

```ts
// ✅ Good: small utility for color mapping
const bgColors: Record<string, string> = { red: COLORS.redLight, green: COLORS.greenLight };
const style = { backgroundColor: bgColors[color] || COLORS.default };
```

---

## 2) Components & Hooks

- Functional components only. Use hooks for lifecycle and state (`useState`, `useEffect`, `useMemo`, `useCallback`).
- Use `React.memo` for pure presentational components and `useCallback` for event handlers to avoid re-renders.
- Use typed custom hooks for reusable logic (e.g., `useUser`, `useApi`) and export them from `/src/hooks`.
- Keep presentational (`/components`) and container/screen logic (`/screens`) separated to remain DRY.
- Use `SafeAreaView` in screen containers.

---

## 3) Styling & Theme Tokens (DRY emphasis)

- Centralize tokens in `src/theme/tokens.ts` for colors, spacing, radii, typography.
- Use `StyleSheet.create` for component styles.
- Avoid magic numbers in styles; reference tokens instead.
- For repetitive style blocks (card/button), create style helpers/factories in `src/theme/utils.ts`.

**Tokens example:**

```ts
export const COLORS = { bg: '#e7dce8', header: '#cfeee1', text: '#000' };
export const SPACING = { xs: 4, sm: 8, md: 12, lg: 16 };
```

---

## 4) State & Data

- Local state: `useState` or `useReducer`.
- Cross-screen state: React Context or Redux Toolkit (RTK). If using RTK, make typed slices and thunks.
- Use `react-query` (TanStack Query) for server state and caching where appropriate.
- Encapsulate data logic into hooks (DRY). Do not scatter API calls across components.

---

## 5) Navigation (React Navigation v6+)

- Use `@react-navigation/native` + `@react-navigation/native-stack`.
- Always define a typed `RootStackParamList` and use navigation prop types.

```ts
export type RootStackParamList = { Home: undefined; Details: { id: string } };
```

---

## 6) Avoid Deprecated APIs

When Copilot suggests the left item, replace with the right item. Do not generate code that imports deprecated RN core modules.

| Deprecated / Legacy                | Use Instead                                        |
| ---------------------------------- | -------------------------------------------------- |
| `AsyncStorage` from `react-native` | `@react-native-async-storage/async-storage`        |
| `Clipboard` from `react-native`    | `@react-native-clipboard/clipboard`                |
| `NetInfo` from `react-native`      | `@react-native-community/netinfo`                  |
| `DatePickerIOS/Android`            | `@react-native-community/datetimepicker`           |
| `CameraRoll` from RN core          | `@react-native-camera-roll/camera-roll`            |
| `ImagePickerIOS`                   | `react-native-image-picker` or `expo-image-picker` |
| `ListView` / `SwipeableListView`   | `FlatList`, `SectionList`                          |
| Legacy lifecycles                  | Hooks: `useEffect`, `useLayoutEffect`              |
| `YellowBox`                        | `LogBox`                                           |

Also prefer `Pressable` over old touchables.

---

## 7) Networking & API

- Create a single `axios` client in `src/api/client.ts` with interceptors.
- Define DTOs and map API responses to domain models in `src/api/mappers.ts` (DRY).

```ts
export const api = axios.create({ baseURL: ENV.API_URL, timeout: 15000 });
```

---

## 8) Forms & Validation

- Use `react-hook-form` + `zod` or `yup` for schema validation.
- Extract form fields to reusable components to remain DRY (e.g., `TextField`, `SelectField`).

---

## 9) Lists & Performance

- Use `FlatList` or `SectionList` for lists (>5 items). Provide `keyExtractor`, `initialNumToRender`, and `getItemLayout` if possible.
- Memoize expensive renders and handlers.

---

## 10) Accessibility & Internationalization

- Set `accessibilityRole`, `accessibilityLabel`, and `accessibilityState` for interactive controls.
- Use an i18n layer (e.g., `i18next`) for strings.
- Support RTL and font scaling.

---

## 11) Animations & Gestures

- Use `react-native-reanimated` v3+ and `react-native-gesture-handler` v2+.
- Keep animations off main thread where possible.

---

## 12) Storage & Caching

- Use `@react-native-async-storage/async-storage` for key-value storage.
- Use `react-native-fast-image` for caching large images where needed.

---

## 13) Linting, Types, CI

- Enforce ESLint, Prettier, and `tsc --noEmit` in CI.
- Suggested scripts to add to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint 'src/**/*.{ts,tsx}'",
    "typecheck": "tsc --noEmit",
    "test": "jest"
  }
}
```

---

## 14) Testing

- Use Jest + `@testing-library/react-native`.
- Write tests for hooks, screens, and components. Prefer behavioral tests (role/label) over implementation tests.

---

## 15) Error Handling & Logging

- Centralize error shapes and user-facing messages.
- Use a logger abstraction (console in dev, Sentry/LogRocket in prod).

---

## 16) DRY-Specific Rules (explicit)

1. **Factoring:** When Copilot generates repeated style objects, repeated logic, or repeated JSX blocks, factor them into a reusable component or utility.
2. **Style tokens:** Don’t hardcode color/spacing — use theme tokens.
3. **Helpers:** Use small mapping objects (e.g., `bgColors`, `iconMap`) instead of long conditionals.
4. **Hooks:** For repeated side-effect patterns (fetching, subscribing), generate a reusable hook.
5. **Avoid duplication in tests:** Reuse test-utils and fixtures.

---

## 17) Example Preferred Patterns

**Button (DRY, accessible):**

```tsx
export const Button = ({ label, onPress }: { label: string; onPress: () => void }) => (
  <Pressable onPress={onPress} accessibilityRole="button" style={styles.btn}>
    <Text>{label}</Text>
  </Pressable>
);
```

**Color map example (avoid ternary chains):**

```ts
const colorMap: Record<string, string> = { red: COLORS.redLight, redDark: COLORS.redDark, green: COLORS.greenLight };
const bg = colorMap[color] ?? COLORS.default;
```

---

## 18) What Not to Do (summary)

- Don’t output JS — always TypeScript.
- Don’t use deprecated RN core modules.
- Don’t hardcode repeated values; factor them.
- Don’t put API calls directly inside UI components — use hooks or services.

---

## 19) Completion Checklist for Copilot

- Typed exports
- No deprecated imports
- Uses tokens and helpers (DRY)
- Accessibility attributes present
- Tests scaffolded for new logic

---

If you want, I can also generate matching `.eslintrc`, `tsconfig.json`, and a CI workflow file. Just ask.

