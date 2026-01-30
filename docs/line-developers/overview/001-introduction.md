# LINE Developers：簡要規則集

LINE Developers 平台提供了一系列 API 與工具，讓開發者能夠構建與 LINE 用戶互動的應用程式。本規則集涵蓋了 LINE 平台開發的核心組件與最佳實踐。

開發 LINE 應用時，重點在於提供流暢、整合的使用者體驗，並妥善處理用戶隱私與互動。

## 核心組件

1. **Messaging API**：用於構建聊天機器人（Chatbot）。
   - **Reply API**：免費回應使用者發送的訊息（需在收到 Webhook 後短時間內回應）。
   - **Push API**：主動向使用者發送訊息（通常為付費功能）。
   - **Webhook**：接收使用者互動事件（如文字訊息、貼圖、加好友、Postback）的通知機制。
2. **LIFF (LINE Front-end Framework)**：在 LINE App 內運行的 Web 應用程式平台。
   - 允許取得使用者 Profile、發送訊息至聊天室，並與 LINE 客戶端深度整合。
   - 解決了 Chatbot 介面互動性不足的問題，適合表單填寫、複雜操作等場景。
3. **LINE Login**：基於 OAuth 2.0 與 OpenID Connect 的身份驗證服務。
   - 讓使用者使用 LINE 帳號登入您的 Web App 或原生 App。
   - 可一併獲取使用者資料與加好友權限。

## 開發與實作

1. **Flex Message**：
   - 使用 JSON 格式定義的高度客製化訊息佈局。
   - 善用 **Flex Message Simulator** 進行視覺化設計與除錯。
   - 避免過度複雜的巢狀結構，以確保渲染效能。
2. **Webhook 處理**：
   - 務必驗證請求簽章（X-Line-Signature），確保請求確實來自 LINE 平台。
   - Webhook 伺服器應具備高可用性與快速回應能力（需回傳 HTTP 200 OK）。
   - 建議使用佇列（Queue）非同步處理複雜的商業邏輯，避免逾時。
3. **通道存取權杖 (Channel Access Token)**：
   - 使用短期權杖（Stateless Channel Access Token）以提高安全性。
   - 妥善保管 Channel Secret 與 Access Token，切勿洩漏於前端代碼中。

## UX 與最佳實踐

1. **混合使用 LIFF 與 Chatbot**：
   - 簡單對話使用 Chatbot，複雜輸入使用 LIFF，提供無縫體驗。
2. **尊重用戶隱私**：
   - 僅在必要時請求用戶個資。
   - 遵循 LINE 平台的使用條款與隱私政策。
3. **錯誤處理與引導**：
   - 當機器人無法理解用戶指令時，應提供明確的引導或選單（Rich Menu），而不是無回應。

## 參見

* LINE Developers Documentation
* LINE API Expert
* Flex Message Simulator
* LINE Official Account Manager
