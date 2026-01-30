# PHP：簡要規則集

PHP 是一種廣泛使用的開源通用腳本語言，特別適用於 Web 開發。隨著 PHP 8.x 的發布，該語言引入了強型別系統、JIT 編譯器等現代化特性，大幅提升了效能與開發體驗。

現代 PHP 開發不再是雜亂無章的腳本堆疊，而是強調結構化、標準化與安全性。

## 核心原則

1. **擁抱現代 PHP (Modern PHP)**：
   - 使用最新穩定版本的 PHP。
   - 善用 **型別宣告 (Type Declarations)** 與 **回傳型別 (Return Types)** 來提高程式碼的健壯性。
   - 使用新特性如 `match` 表達式、命名參數 (Named Arguments)、建構子屬性提升 (Constructor Property Promotion) 與屬性 (Attributes)。
2. **遵循 PSR 標準 (PHP-FIG)**：
   - **PSR-12**：遵循統一的程式碼風格規範。
   - **PSR-4**：使用標準的 Autoloading 機制，避免手動 `require` 檔案。

## 開發與生態系

1. **依賴管理 (Composer)**：
   - 所有的外部套件管理都應透過 Composer 進行。
   - 理解 `composer.json` 與 `composer.lock` 的區別，並將 `vendor/` 目錄排除於版本控制之外。
2. **框架的使用**：
   - **Laravel**：以開發者體驗著稱，提供豐富的生態系與工具（Eloquent ORM, Artisan CLI）。
   - **Symfony**：強調可重用組件與企業級架構，許多現代 PHP 專案（包括 Laravel）都依賴 Symfony 組件。
   - 避免重複造輪子，善用成熟的框架與社群套件。
3. **測試驅動**：
   - 使用 **PHPUnit** 或 **Pest** 撰寫單元測試與功能測試。
   - 確保核心邏輯有足夠的測試覆蓋率。

## 安全性與效能

1. **防範 SQL Injection**：
   - 絕對禁止將使用者輸入直接串接到 SQL 查詢字串中。
   - 始終使用 **PDO (PHP Data Objects)** 及其預處理語句 (Prepared Statements)。
2. **防範 XSS**：
   - 輸出使用者內容到 HTML 時，務必進行適當的跳脫 (Escaping) 處理（如使用 `htmlspecialchars` 或樣板引擎的自動過濾功能）。
3. **組態設定**：
   - 在生產環境中關閉錯誤顯示 (`display_errors = Off`)，並確保開啟錯誤日誌。
   - 妥善設定 `opcache` 以提升執行效能。

## 參見

* PHP The Right Way
* PHP-FIG (Framework Interop Group)
* Composer
* PHP 官方手冊
