# Portal do Diário de Bordo — V FECIT 2026 (PWA)
### Aplicativo Integrado de Iniciação Científica, Diário de Bordo e Acervo Digital

[![PWA Ready](https://img.shields.io/badge/PWA-Ready-10b981?style=for-the-badge&logo=pwa&logoColor=white)](manifest.json)
[![V FECIT 2026](https://img.shields.io/badge/V%20FECIT-2026-1e3a8a?style=for-the-badge)](https://fecit.campogrande.ms.gov.br)
[![REME Campo Grande](https://img.shields.io/badge/REME-Campo%20Grande%20--%20MS-f59e0b?style=for-the-badge)](http://www.campogrande.ms.gov.br/semed)

---

## 📌 Identificação do Projeto

* **Título da Pesquisa:** *Metodologias Ativas: A Gamificação como Ferramenta Facilitadora no Processo de Ensino-Aprendizagem de Língua Inglesa*
* **Pesquisadoras:** Julia Barbosa Rodrigues & Maria Alice Victor Vilhagra
* **Professor Orientador:** Renato Alvarenga
* **Instituição de Ensino:** Escola Municipal Santos Dumont
* **Rede:** REME · Rede Municipal de Ensino de Campo Grande - MS
* **Categoria:** V – Ensino Fundamental
* **Formato do Diário Oficial:** Caderno físico brochura manuscrito + Aplicativo PWA de apoio e acervo

---

## 📱 Módulos do Aplicativo (PWA)

Este repositório é um **Progressive Web App (PWA)** com CSS/JS 100% embutidos nos HTMLs e **Service Worker (`sw.js`)** para consulta em qualquer dispositivo (Android, iOS, tablet ou computador), mesmo offline:

1. **Portal Inicial (`index.html` e `Portal Diário de Bordo - FECIT.html`):**
   - Acesso aos 3 ambientes principais, atalhos rápidos para as categorias do acervo e botão **Instalar App** com suporte a `beforeinstallprompt` e guia passo a passo para iOS/Android/Desktop.
2. **Guia de Pesquisa & FECIT (`guia/index.html`):**
   - Missões 1 a 8 (Projeto em 60s, Cronograma, Análise Documental com links diretos para o Acervo, Diário de Bordo, Tabela Comparativa interativa, Mapa do Banner Oficial, Simulador da Banca Avaliadora e Checklist Final);
   - Galeria embutida das evidências principais e anexo institucional da REME recolhido em `<details>`.
3. **Manual do Diário de Bordo (`manual/index.html`):**
   - Regras oficiais do caderno brochura físico, página de rosto/identificação, sumário e modelos prontos das **8 entradas obrigatórias** (7 burocráticas/metodológicas e 1 de observação prática) com cópia com 1 clique e progresso salvo em `LocalStorage`.
4. **Acervo Digital & Evidências (`acervo/index.html`):**
   - Biblioteca pesquisável com leitor interno para leitura no próprio app (`.docx`, `.md`, texto extraído de `.pdf`, `.html` e imagens) e galeria lightbox em tela cheia para as **35 fotos** da pesquisa.

---

## 📂 Corpus Curado em `acervo/` (66 arquivos em 5 categorias)

| Categoria | Pasta | Arquivos |
| :--- | :--- | :---: |
| **1. Documentos FECIT & Submissão** | `acervo/01_documentos_fecit/` | **8** (`Plano_de_Pesquisa_FECIT_V_Consolidado.pdf`/`.html`, `FECIT RESUMO INGLÊS.pdf`, `Carta_de_Anuencia_da_escola_Assinado.pdf`, `REGULAMENTO-DA-V-FECIT-2026.pdf`, `Programacao_2026.pdf`, `Modelo_Banner_FECIT 2026.pptx`/`.png`) |
| **2. Artigos Científicos** | `acervo/02_artigos_cientificos/` | **2** (`Gomes_et_al_2023_RPG_na_Educacao_Brasileira_Revisao_Sistematica.pdf`, `Ferreira-Costa_et_al_2007_O_RPG_como_Ferramenta_de_Aprendizagem.pdf`) |
| **3. Planejamentos Docentes** | `acervo/03_planejamentos_docentes/` | **13** (`Plano de Ensino Anual - Língua Inglesa - 6º ano (REME).pdf` + planejamentos mensais do 6º ano C de Fevereiro a Dezembro/2026) |
| **4. Atividades & Materiais** | `acervo/04_atividades_e_materiais/` | **8** (`6º ano - 🐉 THE MEMORY EATER.docx`, `6º Ano - 🎮 SCHOOL MISSION.docx`, `ID Card.docx`, `6º ano - Visual Word Bank.docx`, `Dailyville_English_Quest.html`, `Worksheet_Convencional_6Ano_C_Simple_Present.html`, `Gabarito_Worksheet_Convencional_6Ano_C_v1_R1.md`, `Relatorio_Validacao_Worksheet_6Ano_C.md`) |
| **5. Evidências Fotográficas** | `acervo/05_evidencias_fotograficas/` | **35** (2 evidências principais do *Memory Eater* + 13 registros `IMG_20261117_*_HDR.jpg` + 20 registros `WhatsApp Image 2026-11-17*`) |

---

## 🚀 Como Hospedar no GitHub Pages

1. Suba todo o conteúdo da pasta `Portal_Diario_de_Bordo_v3` para o seu repositório no GitHub.
2. No GitHub, acesse **Settings → Pages**.
3. Em **Build and deployment**:
   - **Source:** selecione `Deploy from a branch`.
   - **Branch:** selecione `main` (ou a branch publicada) e a pasta `/ (root)`, depois clique em **Save**.
4. Acesse a URL HTTPS gerada (ex.: `https://seu-usuario.github.io/seu-repositorio/`).

---

## 📲 Como Instalar no Smartphone ou Computador

* **Android (Chrome / Edge / Samsung Internet):** toque no botão **"📲 Instalar App no Celular / PC"** no topo do portal ou abra o menu `⋮` → **"Instalar aplicativo"**.
* **iPhone / iPad (Safari):** toque no botão **Compartilhar** → **"Adicionar à Tela de Início"**.
* **Windows / Mac (Chrome / Edge):** clique no ícone de instalação na barra de endereços do navegador.

---

## 🔒 Governança e Privacidade

O progresso marcado no checklist e nos registros do manual é salvo localmente no navegador do dispositivo (`LocalStorage`), sem envio de dados a servidores externos.
