const menuButton = document.querySelector(".nav-toggle");
const menu = document.querySelector("#primary-menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menu.classList.toggle("is-open", !expanded);
  });
}

const currentPage = window.location.pathname.split("/").pop() || "index.html";
document.querySelectorAll(".nav-menu a").forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage) {
    link.setAttribute("aria-current", "page");
  }
});

const checklist = document.querySelector("[data-checklist]");
const statusMessage = document.querySelector("#checklist-save-state");
const resetButton = document.querySelector("[data-reset-checklist]");
const storageKey = "applied-human-ai-bdp-checklist-v2";
const statusClassMap = ["completed", "in-progress", "pending", "needs-info"];

function readChecklistState() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function writeChecklistState(state) {
  localStorage.setItem(storageKey, JSON.stringify(state));
}

function updateChecklistSummary() {
  if (!checklist) return;

  const counts = {
    completed: 0,
    "in-progress": 0,
    pending: 0,
    "needs-info": 0,
  };

  checklist.querySelectorAll("select").forEach((select) => {
    counts[select.value] += 1;
  });

  Object.entries(counts).forEach(([status, count]) => {
    const node = document.querySelector(`[data-status-count="${status}"]`);
    if (node) node.textContent = count;
  });
}

function applyStatusClass(item, status) {
  item.classList.remove(...statusClassMap.map((name) => `status-${name}`));
  item.classList.add(`status-${status}`);
}

if (checklist) {
  const savedState = readChecklistState();

  checklist.querySelectorAll(".check-item").forEach((item) => {
    const select = item.querySelector("select");
    const itemId = item.dataset.itemId;
    const defaultStatus = item.dataset.defaultStatus || select.value;
    const savedStatus = savedState[itemId] || defaultStatus;
    select.value = savedStatus;
    applyStatusClass(item, savedStatus);

    select.addEventListener("change", () => {
      const state = readChecklistState();
      state[itemId] = select.value;
      writeChecklistState(state);
      applyStatusClass(item, select.value);
      updateChecklistSummary();

      if (statusMessage) {
        statusMessage.textContent = `Saved ${item.querySelector("h2").textContent} as ${select.options[select.selectedIndex].textContent}.`;
      }
    });
  });

  updateChecklistSummary();
}

if (resetButton && checklist) {
  resetButton.addEventListener("click", () => {
    localStorage.removeItem(storageKey);
    checklist.querySelectorAll(".check-item").forEach((item) => {
      const select = item.querySelector("select");
      const defaultStatus = item.dataset.defaultStatus || "pending";
      select.value = defaultStatus;
      applyStatusClass(item, defaultStatus);
    });
    updateChecklistSummary();
    if (statusMessage) {
      statusMessage.textContent = "Checklist statuses reset.";
    }
  });
}
