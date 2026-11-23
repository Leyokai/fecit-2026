    // Copy Snippet Logic
    function copySnippet(elementId, btn) {
      const el = document.getElementById(elementId);
      if (!el) return;
      const text = el.innerText || el.textContent;

      navigator.clipboard.writeText(text).then(() => {
        showToast("Texto copiado! Pronto para passar a limpo 📋");
        if (btn) {
          const origText = btn.innerHTML;
          btn.innerHTML = "✓ Copiado!";
          btn.classList.add("copied");
          setTimeout(() => {
            btn.innerHTML = origText;
            btn.classList.remove("copied");
          }, 2000);
        }
      }).catch(err => {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        showToast("Texto copiado! 📋");
      });
    }

    function showToast(msg) {
      const toast = document.getElementById("toast");
      toast.innerText = msg;
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
    }

    // Toggle Card Completion and LocalStorage Persistence
    function toggleCard(cardId, isChecked) {
      const card = document.getElementById(cardId);
      if (card) {
        if (isChecked) {
          card.classList.add("completed");
        } else {
          card.classList.remove("completed");
        }
      }
      saveProgress();
      updateProgressUI();
    }

    function saveProgress() {
      const checks = {};
      for (let i = 1; i <= 8; i++) {
        const chk = document.getElementById(`check-${i}`);
        if (chk) {
          checks[`check-${i}`] = chk.checked;
        }
      }
      try {
        localStorage.setItem("fecit_diario_progress_v4", JSON.stringify(checks));
      } catch (e) {}
    }

    function loadProgress() {
      try {
        const raw = localStorage.getItem("fecit_diario_progress_v4");
        if (raw) {
          const checks = JSON.parse(raw);
          for (let i = 1; i <= 8; i++) {
            const chk = document.getElementById(`check-${i}`);
            if (chk && checks[`check-${i}`]) {
              chk.checked = true;
              const card = document.getElementById(`card-entry-${i}`);
              if (card) card.classList.add("completed");
            }
          }
        }
      } catch (e) {}
      updateProgressUI();
    }

    function updateProgressUI() {
      let count = 0;
      for (let i = 1; i <= 8; i++) {
        const chk = document.getElementById(`check-${i}`);
        if (chk && chk.checked) count++;
      }
      const pct = Math.round((count / 8) * 100);
      document.getElementById("progressFill").style.width = pct + "%";
      document.getElementById("progressSummary").innerText = `${count} de 8 registros (${pct}%)`;
    }

    // Initialize on load
    window.addEventListener("DOMContentLoaded", () => {
      loadProgress();
    });