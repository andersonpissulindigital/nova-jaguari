# Guia de Configuração: GTM & Conversões (Nova Jaguari)

Este guia explica como configurar o seu Google Tag Manager para ler os eventos automáticos que implementei no código da Landing Page.

## 1. Variáveis da Camada de Dados (Data Layer Variables)
Crie as seguintes variáveis no GTM para capturar os detalhes dos eventos:

| Nome da Variável no GTM | Nome da Variável na Camada de Dados | Descrição |
| :--- | :--- | :--- |
| `DLV - scroll_depth` | `scroll_depth` | Captura 25%, 50%, 75% ou 100%. |
| `DLV - btn_text` | `btn_text` | Captura o texto do botão clicado (ex: "Falar com Consultor"). |
| `DLV - form_name` | `form_name` | Identifica o formulário (sempre `nova_jaguari_lead`). |

## 2. Acionadores (Triggers)
Crie acionadores do tipo **"Evento Personalizado"** (Custom Event) com os seguintes nomes de evento:

| Nome do Evento | Descrição do Gatilho | Uso Recomendado |
| :--- | :--- | :--- |
| `page_scroll` | Dispara quando o usuário atinge marcos de rolagem. | Medir engajamento (GA4). |
| `btn_click` | Dispara em qualquer clique de botão de ação. | Medir interesse em seções específicas. |
| `form_step_1_complete` | Dispara após preencher nome/e-mail/tel. | Identificar abandono no passo 2. |
| `lead_captured` | **O EVENTO PRINCIPAL.** Dispara no envio final. | **Conversão Principal (Meta API/Google Ads).** |

## 3. Configuração de Tags (CAPI e GA4)

### GA4 - Evento Recomendado
Para o `lead_captured`, configure uma Tag de Evento do GA4:
- **Nome do Evento:** `generate_lead`
- **Parâmetros:** Inclua `value: 1200000` (valor médio do projeto) e `currency: BRL`.

### Meta Pixel / Conversions API
No GTM Server-Side ou via Pixel padrão:
- Use o acionador `lead_captured` para disparar o evento de **Lead**.

---

> [!IMPORTANT]
> **Substituição de ID:** Lembre-se de substituir o `GTM-XXXXXXX` no `index.html` e `obrigado.html` pelo seu ID real antes de publicar.

> [!TIP]
> Use o modo de **Visualização (Preview)** do GTM para testar se os eventos aparecem no console à medida que você navega na página.
