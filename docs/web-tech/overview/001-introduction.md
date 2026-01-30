# Web 技術與 Node.js 生態系：簡要規則集

現代 Web 開發涵蓋了從前端應用到後端 API 及資料庫的完整技術堆疊。本規則集聚焦於基於 Node.js 生態系的 Web 應用程式開發、API 設計與資料庫管理的核心概念。

構建 Web 應用不僅是實現功能，更需要考量效能、可擴展性與安全性。

## 核心原則

1. **無狀態架構 (Statelessness)**：Web 伺服器不應在請求之間保存客戶端狀態（如 Session 資訊）。狀態應儲存在客戶端或外部資料庫/快取中，這有助於水平擴展。
2. **RESTful API 設計**：利用 HTTP 方法（GET, POST, PUT, DELETE）明確表達對資源的操作。使用標準的 HTTP 狀態碼傳達結果。
3. **非阻塞 I/O (Non-blocking I/O)**：Node.js 基於事件驅動架構。避免在主執行緒（Event Loop）中執行繁重的計算任務，以免阻塞整個應用程式的請求處理。

## Node.js 後端開發

1. **框架選擇**：
   - **Express.js**：極簡、靈活的 Web 框架，擁有龐大的生態系，適合快速開發。
   - **NestJS**：基於 TypeScript 的框架，採用模組化架構與依賴注入（DI），受 Angular 啟發，適合構建大型企業級應用。
   - **Fastify**：專注於高效能與低開銷的框架。

2. **API 開發模式**：
   - **REST**：資源導向，結構清晰，易於快取。
   - **GraphQL**：允許客戶端精確請求所需數據，減少 Over-fetching 和 Under-fetching，適合複雜的資料關聯查詢。

3. **非同步處理**：善用 `async/await` 語法處理非同步操作，避免 Callback Hell，使程式碼更易讀、易維護。

## 資料庫與存儲

1. **關聯式資料庫 (RDBMS)**：如 PostgreSQL、MySQL。適用於結構化數據、需要強一致性（ACID）與複雜關聯查詢的場景。
   - **ORM 工具**：Prisma, TypeORM, Sequelize。
2. **NoSQL 資料庫**：如 MongoDB。適用於非結構化數據、快速迭代、高寫入吞吐量的場景。
   - **ODM 工具**：Mongoose。
3. **快取 (Caching)**：使用 Redis 或 Memcached 快取頻繁存取的數據，減輕資料庫負載並提升回應速度。

## 安全性 (Web Security)

1. **OWASP Top 10**：熟悉並防範常見的 Web 安全漏洞。
   - **Injection**：使用參數化查詢防止 SQL Injection。
   - **XSS (跨站腳本攻擊)**：對所有用戶輸入進行適當的編碼與過濾。
   - **CSRF (跨站請求偽造)**：使用 CSRF Token 或 SameSite Cookie 屬性進行防護。
2. **身份驗證與授權**：
   - 使用 **JWT (JSON Web Token)** 進行無狀態身份驗證。
   - 密碼應使用強雜湊演算法（如 Argon2, bcrypt）進行雜湊儲存，絕不可明碼儲存。
   - 實作適當的速率限制 (Rate Limiting) 以防止暴力破解與 DDoS 攻擊。

## 參見

* MDN Web Docs
* Node.js 官方文件
* OWASP (Open Web Application Security Project)
* 12-Factor App
