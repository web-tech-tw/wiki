# Vue.js：簡要規則集

Vue.js 是一個用於構建使用者介面的漸進式 JavaScript 框架。它的核心庫專注於視圖層 (View Layer)，易於上手，同時也能配合強大的生態系來構建複雜的單頁應用 (SPA)。

Vue 的設計哲學在於「易學易用」與「靈活高效」之間取得平衡。

## 核心原則

1. **響應式系統 (Reactivity)**：
   - Vue 的核心特性。當數據發生變化時，視圖會自動更新。
   - 理解 `ref` 與 `reactive` 的使用場景與差異。
2. **組件化 (Component-Based)**：
   - 將 UI 拆分為獨立、可重用的組件。
   - **單文件組件 (SFC, .vue)**：將模板 (Template)、邏輯 (Script) 與樣式 (Style) 封裝在同一個檔案中，提高內聚力。
3. **單向數據流 (One-Way Data Flow)**：
   - 數據由父組件透過 `props` 向下傳遞給子組件。
   - 子組件透過 `events` (emit) 向父組件發送訊息。避免子組件直接修改 props。

## 開發實務

1. **優先使用 Composition API**：
   - 對於複雜的組件，Composition API 比 Options API 提供更好的邏輯重用與組織能力。
   - 使用 `<script setup>` 語法糖，這能提供更簡潔的代碼與更好的 TypeScript 支援。
2. **生命週期鉤子 (Lifecycle Hooks)**：
   - 理解組件的創建、掛載、更新與銷毀過程（`onMounted`, `onUpdated`, `onUnmounted`），並在適當的時機執行邏輯（如 API 呼叫、資源釋放）。
3. **計算屬性 (Computed Properties)**：
   - 對於依賴其他數據而產生的數據，應使用 `computed` 而非在模板中撰寫複雜表達式，以利用其快取特性。

## 生態系與工具

1. **狀態管理 (Pinia)**：
   - 使用 Pinia 作為全局狀態管理庫（Vuex 的現代替代方案）。
   - 它體積輕量、API 直觀，並對 TypeScript 有極佳的支援。
2. **路由管理 (Vue Router)**：
   - 用於構建單頁應用。理解動態路由匹配、導航守衛 (Navigation Guards) 與懶加載 (Lazy Loading) 的用法。
3. **構建工具 (Vite)**：
   - 採用 Vite 作為開發伺服器與構建工具，享受極速的熱更新 (HMR) 與打包效能。

## 參見

* Vue.js 官方文件
* Pinia
* Vue Router
* Vite
