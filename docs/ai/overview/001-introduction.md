# Artificial Intelligence：簡要規則集

人工智慧 (AI) 正在重塑各行各業。從傳統的機器學習 (Machine Learning) 到深度學習 (Deep Learning)，再到近期爆發的生成式 AI (Generative AI)，理解其原理與應用邊界至關重要。

本規則集涵蓋 AI 開發的核心概念、常用工具與倫理考量。

## 核心概念

1. **學習範式**：
   - **監督式學習 (Supervised Learning)**：使用標註數據進行訓練（如分類、回歸）。
   - **非監督式學習 (Unsupervised Learning)**：在無標註數據中尋找結構（如分群、降維）。
   - **強化學習 (Reinforcement Learning)**：透過與環境互動並獲取獎勵來學習策略。
2. **模型訓練與評估**：
   - **過擬合 (Overfitting)**：模型在訓練數據上表現極好，但在未知數據上表現差（死記硬背）。
   - **欠擬合 (Underfitting)**：模型無法捕捉數據中的規律。
   - 始終將數據集分為訓練集 (Training Set)、驗證集 (Validation Set) 與測試集 (Test Set)。
3. **生成式 AI與大型語言模型 (LLM)**：
   - 理解 Tokenization、Attention 機制與 Prompt Engineering 的基礎。
   - 認識 RAG (Retrieval-Augmented Generation) 技術以解決幻覺問題。

## 工具與生態系

1. **程式語言**：**Python** 是 AI 領域的絕對主流語言。
2. **框架與庫**：
   - **PyTorch**：學術界與研究領域首選，動態計算圖，除錯容易。
   - **TensorFlow / Keras**：Google 開發，工業界部署廣泛。
   - **Scikit-learn**：傳統機器學習算法（如 SVM、隨機森林）的標準庫。
   - **Pandas & NumPy**：數據處理與科學計算的基石。
3. **模型庫與平台**：
   - **Hugging Face**：預訓練模型（Transformer）的集散地，AI 界的 GitHub。

## 最佳實踐與倫理

1. **數據品質**：
   - Garbage In, Garbage Out。數據清洗、預處理與特徵工程往往佔據專案 80% 的時間。
2. **負責任的 AI (Responsible AI)**：
   - **偏見與公平性**：注意訓練數據中的偏見，避免模型產生歧視性結果。
   - **可解釋性 (Explainability)**：盡可能理解模型的決策依據，避免「黑箱」運作。
3. **隱私與安全**：
   - 在訓練模型時注意保護敏感個人數據。
   - 防範對抗式攻擊 (Adversarial Attacks) 與提示注入 (Prompt Injection)。

## 參見

* PyTorch Documentation
* Hugging Face
* Scikit-learn User Guide
* ArXiv.org (最新論文)
