    // Tab switching
    function switchMission(num) {
      document.querySelectorAll('.tab-btn').forEach((btn, idx) => {
        btn.classList.toggle('active', idx === (num - 1));
      });
      document.querySelectorAll('.mission-section').forEach((sec, idx) => {
        sec.classList.toggle('active', idx === (num - 1));
      });
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }

    // Countdown Timer to 02/12/2026 08:00
    function updateCountdown() {
      const target = new Date("2026-12-02T08:00:00-04:00").getTime();
      const now = new Date().getTime();
      const diff = target - now;

      const el = document.getElementById("countdownTimer");
      if (!el) return;

      if (diff <= 0) {
        el.innerText = "É HOJE! Sucesso na apresentação, pesquisadoras!";
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      el.innerText = `${days} dias, ${hours}h ${mins}m ${secs}s`;
    }
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // Flashcard Toggle
    function toggleCard(card) {
      card.classList.toggle('open');
      const icon = card.querySelector('.flashcard-toggle-icon');
      if (icon) {
        icon.innerText = card.classList.contains('open') ? 'Fechar Resposta ▴' : 'Ver Resposta ▾';
      }
    }

    // File Path Box Toggle
    function toggleFilePath(boxId, btn) {
      const box = document.getElementById(boxId);
      if (!box) return;
      const isOpen = box.classList.toggle('open');
      if (btn) {
        if (!btn.getAttribute('data-label')) {
          btn.setAttribute('data-label', btn.innerHTML);
        }
        btn.innerHTML = isOpen ? '📂 Ocultar endereço ▴' : btn.getAttribute('data-label');
      }
    }

    // Embedded Document Reader Toggle
    function toggleDocReader(boxId, btn) {
      const box = document.getElementById(boxId);
      if (!box) return;
      const isOpen = box.classList.toggle('open');
      if (btn) {
        btn.classList.toggle('active', isOpen);
        if (!btn.getAttribute('data-label')) {
          btn.setAttribute('data-label', btn.innerHTML);
        }
        btn.innerHTML = isOpen ? '📕 Fechar Leitura na Tela ▴' : btn.getAttribute('data-label');
      }
    }

    // Official Banner Slot Details (Fiel ao Modelo PPTX)
    const bannerOfficialData = {
      topo: {
        title: "TÍTULO DO TRABALHO E DADOS DE IDENTIFICAÇÃO",
        desc: "Título em caixa alta (exatamente o aprovado): 'METODOLOGIAS ATIVAS: A GAMIFICAÇÃO COMO FERRAMENTA FACILITADORA NO PROCESSO DE ENSINO-APRENDIZAGEM DE LÍNGUA INGLESA'. Autores: Julia Barbosa Rodrigues e Maria Alice Victor Vilhagra. Orientador: Renato Alvarenga. Escola Municipal Santos Dumont. Categoria V – Ensino Fundamental."
      },
      intro: {
        title: "1. INTRODUÇÃO (COLUNA ESQUERDA)",
        desc: "Apresentar a problemática do desinteresse no aprendizado de língua estrangeira, a fundamentação em metodologias ativas e a pergunta norteadora: 'De que forma a gamificação atua facilitando a aprendizagem de Língua Inglesa no 6º ano?'."
      },
      objetivos: {
        title: "2. OBJETIVO GERAL (COLUNA ESQUERDA)",
        desc: "Objetivo Geral: Investigar o potencial facilitador da gamificação no ensino-aprendizagem de Língua Inglesa nos anos finais do Ensino Fundamental. Objetivos específicos: mapear práticas pedagógicas lúdicas, analisar o engajamento estudantil e comparar com os métodos convencionais."
      },
      metodologia: {
        title: "3. METODOLOGIA (COLUNA ESQUERDA)",
        desc: "Classificação: Pesquisa documental de natureza qualitativa. Objeto de estudo: Corpus pedagógico de uma turma de 6º ano C (planejamentos mensais, atividade gamificada 'The Memory Eater (Guia do Mestre / Batalha de Guildas)' e worksheet convencional 'Simple Present'). Conforme nota no modelo oficial, a descrição pode ser em texto ou fluxograma."
      },
      consideracoes: {
        title: "4. CONSIDERAÇÕES FINAIS (COLUNA ESQUERDA)",
        desc: "Nota: No modelo oficial da FECIT, o termo é 'CONSIDERAÇÕES FINAIS'. Aqui são sintetizadas as descobertas: a gamificação proporciona desarmamento afetivo, entusiasmo e vocabulário rápido, enquanto a folha consolida a fixação ortográfica e sintática. Ambas são complementares."
      },
      referencias: {
        title: "5. REFERÊNCIAS (COLUNA ESQUERDA)",
        desc: "Normas da ABNT (conforme Plano de Pesquisa aprovado):<br>• GOMES, Pedro H. M. M. <em>et al.</em> Role Playing Game na Educação Brasileira: uma revisão sistemática. <strong>Revista Momento – diálogos em educação</strong>, v. 32, n. 2, p. 307-334, 2023.<br>• FERREIRA-COSTA, Rodney <em>et al.</em> O Role Playing Game (RPG) como ferramenta de aprendizagem no ensino fundamental e médio. 2007.<br>• SALDANHA, Ana A.; BATISTA, José R. A concepção do Role-playing game (RPG) em jogadores sistemáticos. <strong>Psicologia: Ciência e Profissão</strong>, 29(4), p. 700-717, 2009.<br>• BACICH, L.; MORAN, J. <strong>Metodologias ativas para uma educação inovadora</strong>. 2018.<br>• FARDO, M. L. A gamificação aplicada em ambientes de aprendizagem. 2013.<br>• BRASIL. Ministério da Educação. <strong>Base Nacional Comum Curricular (BNCC)</strong>. 2018."
      },
      resultados: {
        title: "6. RESULTADOS E DISCUSSÕES (COLUNA DIREITA - DESTAQUE)",
        desc: "Esta é a coluna mais ampla do banner oficial. Nela deve constar a Tabela 1 (Matriz Comparativa dos Materiais) com os 4 critérios (Dinâmica da Turma, Estímulo Cognitivo, Feedback e Síntese Científica), acompanhada das duas evidências fotográficas da pesquisa:<br>• <strong>Figura 1:</strong> Registro em Quadro da Dinâmica <em>The Memory Eater</em> (Fonte: Autores).<br>• <strong>Figura 2:</strong> Registro Empírico no Caderno de Aluno do 6º Ano C com Correção Gramatical e <em>Help Board</em> (Fonte: Autores)."
      }
    };

    function selectBannerBlock(slotKey) {
      document.querySelectorAll('.banner-block').forEach(el => el.classList.remove('active-slot'));
      if (event && event.currentTarget) {
        event.currentTarget.classList.add('active-slot');
      }
      const data = bannerOfficialData[slotKey];
      if (data) {
        document.getElementById('bannerDetailTitle').innerText = data.title;
        document.getElementById('bannerDetailDesc').innerHTML = data.desc;
      }
    }

    // Copy Diario Template
    function copyDiarioText() {
      const text = document.getElementById("diarioTemplate").innerText;
      navigator.clipboard.writeText(text).then(() => {
        alert("✅ Modelo de registro copiado com sucesso! Podem transcrever para o Diário de Bordo físico.");
      }).catch(() => {
        alert("Selecione o texto e copie manualmente com Ctrl+C.");
      });
    }

    // Table Storage & Defaults
    const tableDefaults = {
      "cell-1-1": "Trabalho colaborativo em equipes de 4 a 5 estudantes. Alta interação verbal, negociação entre os pares, quebra da inibição e engajamento dinâmico na resolução do desafio.",
      "cell-1-2": "Trabalho individual e reflexivo. Ênfase no silêncio, na concentração pessoal, na autonomia de raciocínio e no ritmo próprio de escrita de cada estudante.",
      "cell-2-1": "Resolução de problemas sob formato de enigma lúdico (batalha de guildas e gerenciamento de HP/Gold). Estimula raciocínio rápido, dedução e associação direta entre significados e vocabulário básico e Verb To Be.",
      "cell-2-2": "Aplicação sistemática e analítica das regras gramaticais do Simple Present (flexão da 3ª pessoa: -s, -es, -ies). Exige reconhecimento de sujeito, verbo e concordância em frases estruturadas.",
      "cell-3-1": "Feedback imediato e em tempo real. A equipe percebe o acerto ou erro no ato da validação da palavra, ajustando a estratégia de forma instantânea sem sentimento punitivo.",
      "cell-3-2": "Feedback diferido (posterior). A devolutiva depende da correção, visto ou gabarito apresentado pelo professor, permitindo autoavaliação após a conclusão da tarefa escrita.",
      "cell-4-1": "Atua como elemento motivador e facilitador. Reduz a ansiedade inicial em relação à Língua Inglesa e promove atitude participativa e segurança socioemocional.",
      "cell-4-2": "Atua como instrumento de consolidação e formalização. Garante a precisão ortográfica, o registro perene no caderno e a fixação da estrutura sintática da língua."
    };

    function saveTableData() {
      for (let r = 1; r <= 4; r++) {
        localStorage.setItem(`fecit_v2_cell_${r}_1`, document.getElementById(`cell-${r}-1`).value);
        localStorage.setItem(`fecit_v2_cell_${r}_2`, document.getElementById(`cell-${r}-2`).value);
      }
      const status = document.getElementById('saveStatus');
      status.innerText = "Salvo com sucesso!";
      setTimeout(() => { status.innerText = ""; }, 3000);
      updateProgress();
    }

    function loadSavedTableData() {
      for (let r = 1; r <= 4; r++) {
        const v1 = localStorage.getItem(`fecit_v2_cell_${r}_1`);
        const v2 = localStorage.getItem(`fecit_v2_cell_${r}_2`);
        if (v1 !== null) document.getElementById(`cell-${r}-1`).value = v1;
        if (v2 !== null) document.getElementById(`cell-${r}-2`).value = v2;
      }
    }

    function resetCrit(r) {
      document.getElementById(`cell-${r}-1`).value = tableDefaults[`cell-${r}-1`];
      document.getElementById(`cell-${r}-2`).value = tableDefaults[`cell-${r}-2`];
      localStorage.setItem(`fecit_v2_cell_${r}_1`, tableDefaults[`cell-${r}-1`]);
      localStorage.setItem(`fecit_v2_cell_${r}_2`, tableDefaults[`cell-${r}-2`]);
      const status = document.getElementById('saveStatus');
      status.innerText = `Critério ${r} restaurado!`;
      setTimeout(() => { status.innerText = ""; }, 2500);
    }

    function restoreDefaults() {
      for (const [id, val] of Object.entries(tableDefaults)) {
        document.getElementById(id).value = val;
      }
      saveTableData();
    }

    function exportTableSummary() {
      let summary = "TABELA 1 - ANÁLISE COMPARATIVA DOS MATERIAIS PEDAGÓGICOS\\n\\n";
      const names = [
        "1. Dinâmica e Organização da Turma",
        "2. Estímulo Cognitivo e Mobilização do Conteúdo",
        "3. Mecanismo de Retorno (Feedback)",
        "4. Síntese Pedagógica e Contribuição"
      ];
      for (let r = 1; r <= 4; r++) {
        summary += `${names[r-1]}:\\n`;
        summary += `  • Jogo Gamificado (The Memory Eater (Guia do Mestre / Batalha de Guildas)): ${document.getElementById(`cell-${r}-1`).value}\\n`;
        summary += `  • Atividade Convencional (Worksheet Simple Present): ${document.getElementById(`cell-${r}-2`).value}\\n\\n`;
      }
      navigator.clipboard.writeText(summary).then(() => {
        alert("✅ Texto da Tabela 1 copiado! Pode colar diretamente no arquivo do PowerPoint do Banner.");
      });
    }

    // Global Progress Tracking
    function updateProgress() {
      const chks = document.querySelectorAll('#checklistContainer input[type="checkbox"]');
      let checked = 0;
      chks.forEach(chk => {
        const item = chk.closest('.chk-item');
        if (chk.checked) {
          checked++;
          if (item) item.classList.add('checked');
          localStorage.setItem(`fecit_chk_${chk.id}`, '1');
        } else {
          if (item) item.classList.remove('checked');
          localStorage.removeItem(`fecit_chk_${chk.id}`);
        }
      });

      const pct = Math.round((checked / chks.length) * 100);
      document.getElementById('globalProgressFill').style.width = pct + '%';
      document.getElementById('globalProgressLabel').innerText = `Progresso da Pesquisa: ${pct}%`;
    }

    function loadSavedChecklist() {
      const chks = document.querySelectorAll('#checklistContainer input[type="checkbox"]');
      chks.forEach(chk => {
        if (localStorage.getItem(`fecit_chk_${chk.id}`) === '1') {
          chk.checked = true;
          const item = chk.closest('.chk-item');
          if (item) item.classList.add('checked');
        }
      });
      updateProgress();
    }

    // Lightbox Modal for Embedded Evidence Photos
    function openImageModal(src, caption) {
      const modal = document.getElementById('imgLightboxModal');
      const img = document.getElementById('imgLightboxSrc');
      const cap = document.getElementById('imgLightboxCaption');
      if (!modal || !img || !cap) return;
      img.src = src;
      cap.innerText = caption || '';
      modal.classList.add('open');
    }

    function closeImageModal() {
      const modal = document.getElementById('imgLightboxModal');
      if (modal) modal.classList.remove('open');
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeImageModal();
    });

    // Init on Load
    window.addEventListener('DOMContentLoaded', () => {
      loadSavedTableData();
      loadSavedChecklist();
    });