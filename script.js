const chargebacks = [
  {
    date: "10/01/2026",
    chargebackDate: "14/01/2026",
    code: "12345",
    seller: "Loja do Jair",
    owner: "Ana Souza",
    classification: "Fraude",
    amount: "R$ 1.560,00",
    transactionType: "Web",
    partner: "Clear",
    brand: "Visa",
    arn: "84011234567890123456789",
    disputeStatus: "Em análise",
    chargebackStatus: "Aberto",
    dueCategory: "Hoje",
    pendingAction: "Sim"
  },
  {
    date: "14/01/2026",
    chargebackDate: "18/01/2026",
    code: "12346",
    seller: "Casa Aurora",
    owner: "Carlos Lima",
    classification: "Desacordo",
    amount: "R$ 840,00",
    transactionType: "APP",
    partner: "Todos",
    brand: "Mastercard",
    arn: "84011234567890123456790",
    disputeStatus: "Documentação pendente",
    chargebackStatus: "Em tratamento",
    dueCategory: "Em 5 dias",
    pendingAction: "Não"
  },
  {
    date: "17/01/2026",
    chargebackDate: "20/01/2026",
    code: "12347",
    seller: "Tech Center",
    owner: "Marina Costa",
    classification: "Erro de processamento",
    amount: "R$ 2.340,00",
    transactionType: "Mobile",
    partner: "Unico",
    brand: "Elo",
    arn: "84011234567890123456791",
    disputeStatus: "Reaberta",
    chargebackStatus: "Aguardando evidência",
    dueCategory: "Em 10 dias",
    pendingAction: "Sim"
  },
  {
    date: "21/01/2026",
    chargebackDate: "24/01/2026",
    code: "12348",
    seller: "Mercado Três Irmãos",
    owner: "Carlos Lima",
    classification: "Fraude",
    amount: "R$ 620,00",
    transactionType: "Web",
    partner: "Clear",
    brand: "American Express",
    arn: "84011234567890123456792",
    disputeStatus: "Escalada",
    chargebackStatus: "Contestação enviada",
    dueCategory: "Acima de 10 dias",
    pendingAction: "Não"
  },
  {
    date: "25/01/2026",
    chargebackDate: "28/01/2026",
    code: "12349",
    seller: "Boutique Solar",
    owner: "Ana Souza",
    classification: "Desacordo",
    amount: "R$ 1.180,00",
    transactionType: "APP",
    partner: "Todos",
    brand: "Hipercard",
    arn: "84011234567890123456793",
    disputeStatus: "Em análise",
    chargebackStatus: "Aberto",
    dueCategory: "Em 5 dias",
    pendingAction: "Sim"
  }
];

const chargebackDetails = {
  "12345": {
    transactionCode: "12345",
    transactionDate: "10/01/2026",
    totalAmount: "R$ 1.560,00",
    sellerName: "Loja do Jair",
    sellerDocument: "12.345.678/0001-10",
    paymentMethod: "Crédito parcelado",
    installmentsCount: "3",
    transactionStatus: "Chargeback em análise",
    authorizationCode: "A91K72",
    arn: "84011234567890123456789",
    nsu: "44578123",
    brand: "Visa",
    issuerBank: "Banco Aurora",
    cardCountry: "Brasil",
    authorizationResult: "Aprovada",
    authorizationDateTime: "10/01/2026 14:23",
    caseStatus: "Em contestação",
    caseOwner: "Ana Claudia",
    merchant: {
      id: "EST-90210",
      name: "Loja do Jair",
      document: "12.345.678/0001-10",
      legalName: "Loja do Jair Comercio Digital Ltda",
      email: "financeiro@lojadojair.com.br",
      phone: "(11) 3456-7890",
      city: "São Paulo",
      segment: "Varejo digital"
    },
    contestation: {
      currentStatus: "Em análise",
      lifecycle: [
        { date: "15/01/2026 09:12", status: "Contestação aberta", user: "Fila automática" },
        { date: "16/01/2026 11:05", status: "Notificação enviada", user: "Ana Souza" },
        { date: "18/01/2026 14:48", status: "Resposta recebida", user: "Carlos Lima" },
        { date: "19/01/2026 10:22", status: "Em análise", user: "Marina Costa" }
      ],
      notification: {
        date: "16/01/2026 11:05",
        user: "Ana Souza",
        text: "Olá, identificamos uma contestação referente à transação 12345. Precisamos do comprovante de entrega e do histórico de atendimento para seguir com a análise."
      },
      sellerReply: {
        date: "18/01/2026 14:48",
        user: "Jair Pereira",
        text: "Enviamos em anexo o comprovante de entrega assinado pelo cliente e o registro do atendimento realizado no dia da compra.",
        attachment: "defesa_chargeback_12345.pdf"
      }
    },
    historyLog: [
      {
        date: "10/03/2026",
        action: "Chargeback atribuído para Marcela por Ana Claudia",
        user: "Ana Claudia"
      }
    ],
    installments: [
      {
        label: "1/3",
        cbkDate: "14/01/2026",
        vrolCase: "14872",
        reason: "Fraude",
        amount: "R$ 520,00",
        status: "Em análise",
        dueDate: "20/04/2026",
        owner: "Ana Souza",
        history: [
          { date: "14/01/2026 09:30", status: "Recebido", amount: "R$ 520,00", owner: "Fila automática" },
          { date: "15/01/2026 10:45", status: "Triagem", amount: "R$ 520,00", owner: "Ana Souza" },
          { date: "17/01/2026 16:10", status: "Em análise", amount: "R$ 520,00", owner: "Ana Souza" }
        ]
      },
      {
        label: "2/3",
        cbkDate: "16/01/2026",
        vrolCase: "32641",
        reason: "Fraude",
        amount: "R$ 520,00",
        status: "Em contestação",
        dueDate: "24/04/2026",
        owner: "Carlos Lima",
        history: [
          { date: "16/01/2026 11:10", status: "Recebido", amount: "R$ 520,00", owner: "Fila automática" },
          { date: "18/01/2026 08:20", status: "Em análise", amount: "R$ 520,00", owner: "Carlos Lima" },
          { date: "19/01/2026 15:50", status: "Em contestação", amount: "R$ 520,00", owner: "Carlos Lima" },
          { date: "21/01/2026 09:05", status: "Documentação enviada", amount: "R$ 520,00", owner: "Carlos Lima" }
        ]
      },
      {
        label: "3/3",
        cbkDate: "20/01/2026",
        vrolCase: "47218",
        reason: "Fraude",
        amount: "R$ 520,00",
        status: "Aceito",
        dueDate: "29/04/2026",
        owner: "Marina Costa",
        history: [
          { date: "20/01/2026 10:00", status: "Recebido", amount: "R$ 520,00", owner: "Fila automática" },
          { date: "22/01/2026 14:15", status: "Revisado", amount: "R$ 520,00", owner: "Marina Costa" },
          { date: "23/01/2026 18:05", status: "Aceito", amount: "R$ 520,00", owner: "Marina Costa" }
        ]
      }
    ]
  }
};

const resultsBody = document.getElementById("resultsBody");
const resultsSummary = document.getElementById("resultsSummary");
const filtersForm = document.getElementById("filtersForm");

function getStatusClass(status) {
  const normalized = status.toLowerCase();

  if (normalized.includes("aceito") || normalized.includes("aprovada") || normalized.includes("sim")) {
    return "is-positive";
  }

  if (normalized.includes("recusado") || normalized.includes("negada") || normalized.includes("não")) {
    return "is-negative";
  }

  if (normalized.includes("contestação") || normalized.includes("contestacao")) {
    return "is-warning";
  }

  return "is-neutral";
}

function renderTable(items) {
  if (!resultsBody || !resultsSummary) {
    return;
  }

  resultsBody.innerHTML = "";

  if (!items.length) {
    resultsBody.innerHTML = `
      <tr>
        <td colspan="6">
          <div class="empty-state">Nenhum chargeback encontrado para os filtros informados.</div>
        </td>
      </tr>
    `;
    resultsSummary.textContent = "0 registros encontrados.";
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("tr");
    const pillClass = getStatusClass(item.pendingAction);

    row.innerHTML = `
      <td>${item.date}</td>
      <td><a class="transaction-link" href="detalhes.html?id=${encodeURIComponent(item.code)}">${item.code}</a></td>
      <td>${item.seller}</td>
      <td>${item.classification}</td>
      <td>${item.amount}</td>
      <td><span class="pill ${pillClass}">${item.pendingAction}</span></td>
    `;

    resultsBody.appendChild(row);
  });

  resultsSummary.textContent = `${items.length} registro${items.length > 1 ? "s" : ""} encontrado${items.length > 1 ? "s" : ""}.`;
}

function matchesText(value, filterValue) {
  return value.toLowerCase().includes(filterValue.toLowerCase());
}

function parseBrazilianDate(value) {
  const [day, month, year] = value.split("/");
  return new Date(`${year}-${month}-${day}T00:00:00`);
}

function isDateInRange(dateValue, startDate, endDate) {
  if (!startDate && !endDate) {
    return true;
  }

  const current = parseBrazilianDate(dateValue);

  if (startDate) {
    const start = new Date(`${startDate}T00:00:00`);
    if (current < start) {
      return false;
    }
  }

  if (endDate) {
    const end = new Date(`${endDate}T23:59:59`);
    if (current > end) {
      return false;
    }
  }

  return true;
}

function getSelectedValues(selectName) {
  if (!filtersForm) {
    return [];
  }

  return Array.from(
    filtersForm.querySelectorAll(`.multiselect[data-name="${selectName}"] input:checked`)
  ).map((option) => option.value);
}

function matchesMultiValue(value, selectedValues) {
  return !selectedValues.length || selectedValues.includes(value);
}

function setupFilters() {
  if (!filtersForm) {
    return;
  }

  filtersForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(filtersForm);
    const filters = {
      startDate: formData.get("startDate").trim(),
      endDate: formData.get("endDate").trim(),
      dateType: getSelectedValues("dateType"),
      transactionCode: formData.get("transactionCode").trim(),
      classification: getSelectedValues("classification"),
      seller: formData.get("seller").trim(),
      owner: getSelectedValues("owner"),
      brand: getSelectedValues("brand"),
      transactionType: getSelectedValues("transactionType"),
      arn: formData.get("arn").trim(),
      disputeStatus: formData.get("disputeStatus").trim(),
      chargebackStatus: formData.get("chargebackStatus").trim(),
      dueDateRange: getSelectedValues("dueDateRange"),
      partner: getSelectedValues("partner")
    };

    const filteredItems = chargebacks.filter((item) => {
      const selectedDateTypes = filters.dateType.length ? filters.dateType : ["transactionDate"];
      const dateMatch = selectedDateTypes.some((dateType) => {
        const referenceDate = dateType === "chargebackDate" ? item.chargebackDate : item.date;
        return isDateInRange(referenceDate, filters.startDate, filters.endDate);
      });
      const codeMatch = !filters.transactionCode || matchesText(item.code, filters.transactionCode);
      const classMatch = matchesMultiValue(item.classification, filters.classification);
      const sellerMatch = !filters.seller || matchesText(item.seller, filters.seller);
      const ownerMatch = matchesMultiValue(item.owner, filters.owner);
      const brandMatch = matchesMultiValue(item.brand, filters.brand);
      const transactionTypeMatch = matchesMultiValue(item.transactionType, filters.transactionType);
      const arnMatch = !filters.arn || matchesText(item.arn, filters.arn);
      const disputeMatch = !filters.disputeStatus || matchesText(item.disputeStatus, filters.disputeStatus);
      const chargebackMatch = !filters.chargebackStatus || matchesText(item.chargebackStatus, filters.chargebackStatus);
      const dueMatch = matchesMultiValue(item.dueCategory, filters.dueDateRange);
      const partnerMatch = matchesMultiValue(item.partner, filters.partner);

      return dateMatch && codeMatch && classMatch && sellerMatch && ownerMatch && brandMatch && transactionTypeMatch && arnMatch && disputeMatch && chargebackMatch && dueMatch && partnerMatch;
    });

    console.log("Filtros aplicados:", filters);
    renderTable(filteredItems);
  });
}

function setupMultiselects() {
  const multiselects = document.querySelectorAll(".multiselect");

  if (!multiselects.length) {
    return;
  }

  function updateLabel(multiselect) {
    const label = multiselect.querySelector(".multiselect-label");
    const placeholder = multiselect.dataset.placeholder || "Selecione";
    const selected = Array.from(multiselect.querySelectorAll("input:checked")).map((input) => input.value);

    label.textContent = selected.length ? selected.join(", ") : placeholder;
  }

  function closeMultiselect(multiselect) {
    const trigger = multiselect.querySelector(".multiselect-trigger");
    const menu = multiselect.querySelector(".multiselect-menu");

    multiselect.classList.remove("is-open");
    trigger.setAttribute("aria-expanded", "false");
    menu.hidden = true;
  }

  multiselects.forEach((multiselect) => {
    const trigger = multiselect.querySelector(".multiselect-trigger");
    const menu = multiselect.querySelector(".multiselect-menu");
    const isSingleSelect = multiselect.dataset.name === "dateType";

    updateLabel(multiselect);

    trigger.addEventListener("click", () => {
      const willOpen = !multiselect.classList.contains("is-open");

      multiselects.forEach((item) => closeMultiselect(item));

      if (willOpen) {
        multiselect.classList.add("is-open");
        trigger.setAttribute("aria-expanded", "true");
        menu.hidden = false;
      }
    });

    multiselect.querySelectorAll('input[type="checkbox"]').forEach((input) => {
      input.addEventListener("change", () => {
        if (isSingleSelect && input.checked) {
          multiselect.querySelectorAll('input[type="checkbox"]').forEach((otherInput) => {
            if (otherInput !== input) {
              otherInput.checked = false;
            }
          });
        }

        updateLabel(multiselect);
      });
    });
  });

  document.addEventListener("click", (event) => {
    multiselects.forEach((multiselect) => {
      if (!multiselect.contains(event.target)) {
        closeMultiselect(multiselect);
      }
    });
  });
}

function buildSummaryItem(label, value) {
  return `
    <div class="detail-item summary-item">
      <strong>${label}</strong>
      <span>${value}</span>
    </div>
  `;
}

function buildHistoryRows(history) {
  return history.map((entry) => `
    <tr>
      <td>${entry.date}</td>
      <td>${entry.status}</td>
      <td>${entry.amount}</td>
      <td>${entry.owner}</td>
    </tr>
  `).join("");
}

function buildContestationLifecycleRows(items) {
  return items.map((entry) => `
    <tr>
      <td>${entry.date}</td>
      <td>${entry.status}</td>
      <td>${entry.user}</td>
    </tr>
  `).join("");
}

function buildGeneralHistoryRows(items) {
  return items.map((entry) => `
    <tr>
      <td>${entry.date}</td>
      <td>${entry.action}</td>
      <td>${entry.user}</td>
    </tr>
  `).join("");
}

function currencyToNumber(value) {
  return Number(value.replace(/[^\d,]/g, "").replace(/\./g, "").replace(",", "."));
}

function buildInstallmentCard(installment, index) {
  return `
    <article class="installment-card" data-installment-index="${index}">
      <div class="installment-grid">
        <div>
          <span class="installment-label">Parcela</span>
          <strong>${installment.label}</strong>
        </div>
        <div>
          <span class="installment-label">Data CBK</span>
          <strong>${installment.cbkDate}</strong>
        </div>
        <div>
          <span class="installment-label">VROL Case</span>
          <strong>${installment.vrolCase}</strong>
        </div>
        <div>
          <span class="installment-label">Razão</span>
          <strong>${installment.reason}</strong>
        </div>
        <div>
          <span class="installment-label">Valor</span>
          <strong class="installment-amount">${installment.amount}</strong>
        </div>
        <div>
          <span class="installment-label">Status</span>
          <span class="pill ${getStatusClass(installment.status)} installment-status">${installment.status}</span>
        </div>
        <div>
          <span class="installment-label">Data de vencimento</span>
          <strong>${installment.dueDate}</strong>
        </div>
        <div>
          <span class="installment-label">Responsável</span>
          <strong>${installment.owner}</strong>
        </div>
        <div class="installment-action">
          <button class="accordion-toggle" type="button" aria-expanded="false">Expandir</button>
        </div>
      </div>

      <div class="accordion-panel" hidden>
        <div class="accordion-section">
          <div class="section-heading section-heading-compact">
            <h3>Histórico da parcela</h3>
          </div>
          <div class="table-wrapper compact-table">
            <table>
              <thead>
                <tr>
                  <th>Data</th>
                  <th>Status</th>
                  <th>Valor</th>
                  <th>Responsável</th>
                </tr>
              </thead>
              <tbody>
                ${buildHistoryRows(installment.history)}
              </tbody>
            </table>
          </div>
        </div>

        <div class="accordion-section">
          <div class="section-heading section-heading-compact">
            <h3>Ações da parcela</h3>
          </div>
          <form class="parcel-action-form" data-installment-label="${installment.label}">
            <label class="field">
              <span>Alterar status</span>
              <select name="status">
                <option value="Em análise" ${installment.status === "Em análise" ? "selected" : ""}>Em análise</option>
                <option value="Em contestação" ${installment.status === "Em contestação" ? "selected" : ""}>Em contestação</option>
                <option value="Aceito" ${installment.status === "Aceito" ? "selected" : ""}>Aceito</option>
                <option value="Recusado" ${installment.status === "Recusado" ? "selected" : ""}>Recusado</option>
              </select>
            </label>

            <label class="field">
              <span>Valor</span>
              <input type="number" name="amount" min="0" step="0.01" value="${currencyToNumber(installment.amount)}">
            </label>

            <button class="primary-button" type="submit">Salvar ação</button>
          </form>
        </div>
      </div>
    </article>
  `;
}

function setupTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");

  if (!tabButtons.length || !tabPanels.length) {
    return;
  }

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const activeTab = button.dataset.tab;

      tabButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
      });

      tabPanels.forEach((panel) => {
        const shouldShow = panel.id === `tab-${activeTab}`;
        panel.classList.toggle("is-active", shouldShow);
        panel.hidden = !shouldShow;
      });
    });
  });
}

function setupAccordions() {
  document.querySelectorAll(".accordion-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".installment-card");
      const panel = card.querySelector(".accordion-panel");
      const isExpanded = button.getAttribute("aria-expanded") === "true";

      button.setAttribute("aria-expanded", String(!isExpanded));
      button.textContent = isExpanded ? "Expandir" : "Recolher";
      panel.hidden = isExpanded;
    });
  });
}

function setupParcelActions() {
  document.querySelectorAll(".parcel-action-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(form);
      const status = String(formData.get("status"));
      const amount = Number(formData.get("amount") || 0).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
      });
      const card = form.closest(".installment-card");
      const statusElement = card.querySelector(".installment-status");
      const amountElement = card.querySelector(".installment-amount");

      statusElement.className = `pill ${getStatusClass(status)} installment-status`;
      statusElement.textContent = status;
      amountElement.textContent = amount;

      console.log("Ação salva:", {
        parcela: form.dataset.installmentLabel,
        status,
        valor: amount
      });
    });
  });
}

function renderDetailsPage() {
  const detailTitle = document.getElementById("detailTitle");
  const summaryOwner = document.getElementById("summaryOwner");
  const transactionSummary = document.getElementById("transactionSummary");
  const authorizationSummary = document.getElementById("authorizationSummary");
  const installmentsList = document.getElementById("installmentsList");
  const merchantSummary = document.getElementById("merchantSummary");
  const currentContestationStatus = document.getElementById("currentContestationStatus");
  const contestationLifecycleBody = document.getElementById("contestationLifecycleBody");
  const notificationMeta = document.getElementById("notificationMeta");
  const notificationText = document.getElementById("notificationText");
  const sellerReplyMeta = document.getElementById("sellerReplyMeta");
  const sellerReplyText = document.getElementById("sellerReplyText");
  const sellerReplyAttachment = document.getElementById("sellerReplyAttachment");
  const generalHistoryBody = document.getElementById("generalHistoryBody");

  if (!detailTitle || !summaryOwner || !transactionSummary || !authorizationSummary || !installmentsList) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const transactionId = params.get("id") || "12345";
  const fallback = chargebackDetails["12345"];
  const details = chargebackDetails[transactionId] || {
    ...fallback,
    transactionCode: transactionId
  };

  detailTitle.textContent = `Detalhes do Chargeback ${details.transactionCode}`;
  summaryOwner.textContent = details.caseOwner;

  transactionSummary.innerHTML = [
    ["Código da transação", details.transactionCode],
    ["Data da transação", details.transactionDate],
    ["Valor total", details.totalAmount],
    ["Nome do vendedor", details.sellerName],
    ["CPF/CNPJ do vendedor", details.sellerDocument],
    ["Meio de pagamento", details.paymentMethod],
    ["Quantidade de parcelas", details.installmentsCount],
    ["Status da transação", details.transactionStatus]
  ].map(([label, value]) => buildSummaryItem(label, value)).join("");

  authorizationSummary.innerHTML = [
    ["Código de autorização", details.authorizationCode],
    ["ARN", details.arn],
    ["NSU", details.nsu],
    ["Bandeira", details.brand],
    ["Banco emissor", details.issuerBank],
    ["País do cartão", details.cardCountry],
    ["Resultado da autorização", details.authorizationResult],
    ["Data e hora da autorização", details.authorizationDateTime]
  ].map(([label, value]) => buildSummaryItem(label, value)).join("");

  installmentsList.innerHTML = details.installments
    .map((installment, index) => buildInstallmentCard(installment, index))
    .join("");

  if (merchantSummary && currentContestationStatus && contestationLifecycleBody && notificationMeta && notificationText && sellerReplyMeta && sellerReplyText && sellerReplyAttachment) {
    merchantSummary.innerHTML = [
      ["ID", details.merchant.id],
      ["Nome", details.merchant.name],
      ["CNPJ/CPF", details.merchant.document],
      ["Razão social", details.merchant.legalName],
      ["E-mail", details.merchant.email],
      ["Telefone", details.merchant.phone],
      ["Cidade", details.merchant.city],
      ["Segmento", details.merchant.segment]
    ].map(([label, value]) => buildSummaryItem(label, value)).join("");

    currentContestationStatus.textContent = details.contestation.currentStatus;
    contestationLifecycleBody.innerHTML = buildContestationLifecycleRows(details.contestation.lifecycle);
    notificationMeta.textContent = `${details.contestation.notification.date} | ${details.contestation.notification.user}`;
    notificationText.textContent = details.contestation.notification.text;
    sellerReplyMeta.textContent = `${details.contestation.sellerReply.date} | ${details.contestation.sellerReply.user}`;
    sellerReplyText.textContent = details.contestation.sellerReply.text;
    sellerReplyAttachment.textContent = `Anexo: ${details.contestation.sellerReply.attachment}`;
  }

  if (generalHistoryBody) {
    generalHistoryBody.innerHTML = buildGeneralHistoryRows(details.historyLog);
  }

  setupTabs();
  setupAccordions();
  setupParcelActions();
}

setupFilters();
setupMultiselects();
renderTable(chargebacks);
renderDetailsPage();
