# Linux：簡要規則集

Linux 是現代伺服器基礎架構的基石。掌握 Linux 不僅是學習操作系統，更是理解電腦系統運作原理的過程。

本規則集旨在提供 Linux 系統管理、命令行操作與核心概念的指引。

## 核心原則

1. **一切皆檔案 (Everything is a file)**：在 Linux 中，幾乎所有資源（包括硬體設備、目錄、Socket）都被視為檔案來操作。
2. **小工具哲學**：每個程式只做一件事，並把它做好。透過管道 (Pipe) 將這些小工具組合起來，完成複雜的任務。
3. **避免使用 Root**：日常操作應使用普通用戶帳號，僅在必要時使用 `sudo` 獲取管理員權限，以降低系統損壞風險。

## 系統管理與操作

1. **檔案權限**：
   - 理解使用者 (User)、群組 (Group) 與其他人 (Others) 的權限模型。
   - 熟悉 `chmod` (修改權限)、`chown` (修改擁有者) 與 `ls -l` 的使用。
   - 謹慎設置 777 權限，這通常是安全漏洞的開端。
2. **進程管理**：
   - 使用 `top` 或 `htop` 監控系統資源與進程狀態。
   - 熟悉 `ps` (查看進程)、`kill` (發送信號) 的用法。
   - 理解 **Systemd** 的服務管理指令 (`systemctl status/start/enable`)。
3. **套件管理**：
   - 根據發行版使用正確的套件管理器（如 Debian/Ubuntu 的 `apt`，CentOS/RHEL 的 `dnf/yum`）。
   - 定期執行更新以修補安全漏洞。

## Shell 與命令列工具

1. **管道與重定向**：
   - 善用 `|` (管道) 將一個指令的輸出傳遞給下一個指令。
   - 使用 `>` (覆蓋) 與 `>>` (追加) 將輸出重定向至檔案。
2. **文本處理三劍客**：
   - **grep**：強大的文本搜索工具，支援正規表示式。
   - **awk**：強大的文本分析與報表生成工具，適合處理欄位資料。
   - **sed**：串流編輯器，用於文本的查找、替換與修改。
3. **遠端連線**：
   - 使用 **SSH** 進行安全遠端管理。
   - 禁用密碼登入，強制使用金鑰認證 (Key-based Authentication) 以提升安全性。

## 參見

* Linux Filesystem Hierarchy Standard (FHS)
* Bash Reference Manual
* LPIC (Linux Professional Institute Certification)
