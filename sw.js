const CACHE_NAME = 'fecit-portal-v3-app-final';

const CORE_ASSETS = [
  './',
  './index.html',
  './Portal%20Di%C3%A1rio%20de%20Bordo%20-%20FECIT.html',
  './portal.css',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './guia/index.html',
  './guia/guia.css',
  './guia/guia.js',
  './manual/index.html',
  './manual/manual.css',
  './manual/manual.js',
  './acervo/index.html',
  './acervo/acervo.css',
  './acervo/acervo.js'
];

const ACERVO_ASSETS = [
  './acervo/01_documentos_fecit/Carta_de_Anuencia_da_escola_Assinado.pdf',
  './acervo/01_documentos_fecit/FECIT%20RESUMO%20INGL%C3%8AS.pdf',
  './acervo/01_documentos_fecit/Modelo_Banner_FECIT%202026.pptx',
  './acervo/01_documentos_fecit/Modelo_Banner_FECIT%202026.pptx.png',
  './acervo/01_documentos_fecit/Plano_de_Pesquisa_FECIT_V_Consolidado.html',
  './acervo/01_documentos_fecit/Plano_de_Pesquisa_FECIT_V_Consolidado.pdf',
  './acervo/01_documentos_fecit/Programacao_2026.pdf',
  './acervo/01_documentos_fecit/REGULAMENTO-DA-V-FECIT-2026.pdf',
  './acervo/02_artigos_cientificos/Ferreira-Costa_et_al_2007_O_RPG_como_Ferramenta_de_Aprendizagem.pdf',
  './acervo/02_artigos_cientificos/Gomes_et_al_2023_RPG_na_Educacao_Brasileira_Revisao_Sistematica.pdf',
  './acervo/03_planejamentos_docentes/6%C2%B0%20ano%20-%20Abril%20-%20Ingl%C3%AAs.docx',
  './acervo/03_planejamentos_docentes/6%C2%B0%20ano%20-%20Agosto%20-%20Ingl%C3%AAs.docx',
  './acervo/03_planejamentos_docentes/6%C2%B0%20ano%20-%20Fevereiro%20-%20Ingl%C3%AAs.docx',
  './acervo/03_planejamentos_docentes/6%C2%B0%20ano%20-%20Junho%20-%20Ingl%C3%AAs.docx',
  './acervo/03_planejamentos_docentes/6%C2%B0%20ano%20-%20Maio%20-%20Ingl%C3%AAs.docx',
  './acervo/03_planejamentos_docentes/6%C2%B0%20ano%20-%20Mar%C3%A7o%20-%20Ingl%C3%AAs.docx',
  './acervo/03_planejamentos_docentes/6%C2%B0%20ano%20-%20Setembro%20-%20Ingl%C3%AAs.docx',
  './acervo/03_planejamentos_docentes/Planejamento_6ano_Dezembro_2026.html',
  './acervo/03_planejamentos_docentes/Planejamento_6ano_Dezembro_2026.pdf',
  './acervo/03_planejamentos_docentes/Planejamento_6ano_Novembro_2026.html',
  './acervo/03_planejamentos_docentes/Planejamento_6ano_Novembro_2026.pdf',
  './acervo/03_planejamentos_docentes/Planejamento_6ano_Outubro_2026.html',
  './acervo/03_planejamentos_docentes/Plano%20de%20Ensino%20Anual%20-%20L%C3%ADngua%20Inglesa%20-%206%C2%BA%20ano%20%28REME%29.pdf',
  './acervo/04_atividades_e_materiais/6%C2%BA%20ano%20-%20Visual%20Word%20Bank.docx',
  './acervo/04_atividades_e_materiais/6%C2%BA%20Ano%20-%20%F0%9F%8E%AE%20SCHOOL%20MISSION.docx',
  './acervo/04_atividades_e_materiais/6%C2%BA%20ano%20-%20%F0%9F%90%89%20THE%20MEMORY%20EATER.docx',
  './acervo/04_atividades_e_materiais/Dailyville_English_Quest.html',
  './acervo/04_atividades_e_materiais/Gabarito_Worksheet_Convencional_6Ano_C_v1_R1.md',
  './acervo/04_atividades_e_materiais/ID%20Card.docx',
  './acervo/04_atividades_e_materiais/Relatorio_Validacao_Worksheet_6Ano_C.md',
  './acervo/04_atividades_e_materiais/Worksheet_Convencional_6Ano_C_Simple_Present.html',
  './acervo/05_evidencias_fotograficas/Evidencia_01_Caderno_Estudante_Memory_Eater.jpg',
  './acervo/05_evidencias_fotograficas/Evidencia_02_Quadro_Branco_Memory_Eater.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_142950539_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143000273_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143043092_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143044609_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143104356_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143119883_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143132723_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143136469_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143145838_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143204744_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143230425_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143238041_HDR.jpg',
  './acervo/05_evidencias_fotograficas/IMG_20261117_143248490_HDR.jpg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.15%20%281%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.15%20%282%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.15%20%283%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.15.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.17%20%281%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.17%20%282%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.17%20%283%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.17.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.18.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.20%20%281%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.20%20%282%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.20.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.21%20%281%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.21%20%282%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.21%20%283%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.21.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.22%20%281%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.22%20%282%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.22%20%283%29.jpeg',
  './acervo/05_evidencias_fotograficas/WhatsApp%20Image%202026-11-17%20at%2020.09.22.jpeg',
  './assets/docx_media/6_ano_abril_ingl_s_rId7.jpg',
  './assets/docx_media/6_ano_agosto_ingl_s_rId7.jpg',
  './assets/docx_media/6_ano_fevereiro_ingl_s_rId7.jpg',
  './assets/docx_media/6_ano_junho_ingl_s_rId7.jpg',
  './assets/docx_media/6_ano_maio_ingl_s_rId7.jpg',
  './assets/docx_media/6_ano_mar_o_ingl_s_rId7.jpg',
  './assets/docx_media/6_ano_school_mission_rId6.jpg',
  './assets/docx_media/6_ano_school_mission_rId7.png',
  './assets/docx_media/6_ano_setembro_ingl_s_rId7.jpg',
  './assets/docx_media/6_ano_visual_word_bank_rId4.png',
  './assets/docx_media/6_ano_visual_word_bank_rId5.png',
  './assets/docx_media/6_ano_visual_word_bank_rId6.png',
  './assets/docx_media/6_ano_visual_word_bank_rId7.png',
  './assets/docx_media/6_ano_visual_word_bank_rId8.png',
  './assets/docx_media/carta_de_anuencia_da_escola_assinado_p1_1.jpg',
  './assets/docx_media/id_card_rId6.png',
  './assets/docx_media/id_card_rId7.png'
];

// Instalação do Service Worker com pre-cache resiliente
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      console.log('[PWA SW] Armazenando módulos principais...');
      await Promise.allSettled(CORE_ASSETS.map((url) => cache.add(url)));
      console.log('[PWA SW] Armazenando arquivos do acervo e evidências...');
      await Promise.allSettled(ACERVO_ASSETS.map((url) => cache.add(url)));
    })
  );
  self.skipWaiting();
});

// Ativação e limpeza de versões anteriores
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[PWA SW] Removendo cache antigo:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Estratégia de Fetch: Cache First com fallback de rede e cache dinâmico
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
