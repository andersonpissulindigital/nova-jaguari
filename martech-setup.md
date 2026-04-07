tracking_urls:
  - ad_index: "1"
    url: "https://novajaguari.opensquad.com/?utm_source=google&utm_medium=cpc&utm_campaign=nova_jaguari_vendas&utm_content=racional_patrimonial"
  - ad_index: "2"
    url: "https://novajaguari.opensquad.com/?utm_source=google&utm_medium=cpc&utm_campaign=nova_jaguari_vendas&utm_content=lifestyle_natureza"
  - ad_index: "3"
    url: "https://novajaguari.opensquad.com/?utm_source=google&utm_medium=cpc&utm_campaign=nova_jaguari_vendas&utm_content=oportunidade_investimento"

pipedrive_mapping:
  campos_origem:
    - "Nome -> Person Name"
    - "E-mail -> Person Email"
    - "Telefone -> Person Phone"
    - "utm_source -> UTM Source"
    - "utm_medium -> UTM Medium"
    - "utm_campaign -> UTM Campaign"
    - "utm_content -> UTM Content"

automacao_webhook_workflow:
  - step: "Captura via Webhook"
    logic: "Receber dados do formulário de lead da Landing Page."
  - step: "Qualificação no Pipedrive"
    logic: "Criar ou atualizar Pessoa e criar Negócio no Funil de Vendas."
  - step: "Atribuição de UTMs"
    logic: "Mapear parâmetros da URL para os campos personalizados do Negócio para rastreio de ROI."
  - step: "Notificação Comercial"
    logic: "Enviar alerta instantâneo para o time de vendas (Slack/WhatsApp)."
