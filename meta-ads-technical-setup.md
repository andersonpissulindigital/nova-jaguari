# Configuração Técnica: Pixel e CAPI (Meta Ads)

Para que o Facebook e Instagram encontrem compradores de imóveis de luxo, precisamos alimentar o algoritmo com dados precisos.

---

## 1. Configurar o Pixel de Conversão
No Gerenciador de Negócios (BM):
1. Vá em **Configurações do Negócio** -> **Fontes de Dados** -> **Pixels (ou Datasets)**.
2. Copie o **ID do Pixel**.
3. No seu GTM:
    - Adicione a Tag do Pixel do Facebook (Base Code) em todas as páginas.
    - Acionador: `All Pages`.

---

## 2. Evento de Conversão (Lead)
Não basta rastrear visitas, precisamos rastrear quem envia o formulário:
1. Crie uma nova Tag no GTM: **Facebook Pixel - Event**.
2. Tipo de Evento: **Lead**.
3. **Parâmetros:**
    - `content_name: nova_jaguari_form`
    - `value: 1200000` (Valor estimado do imóvel)
    - `currency: BRL`
4. **Acionador (Trigger):** Use o evento `lead_captured` que já configuramos no código.

---

## 3. API de Conversão (CAPI) - Opcional e Recomendado
Para evitar perdas de dados por bloqueadores de anúncios (iOS 14+):
1. No Gerenciador de Eventos, vá em **Configurações** -> **API de Conversões**.
2. Clique em **Gerar token de acesso**.
3. Se você usar o GTM Server-Side ou um plugin, use esse token para enviar o evento direto do servidor.

---

## 4. Verificar com "Test Events"
1. No Gerenciador de Eventos, abra a aba **Eventos de Teste**.
2. Digite a URL da sua Landing Page.
3. Preencha o formulário até o final (Página de Obrigado).
4. Verifique se o evento **Lead** apareceu no painel com o status "Recebido".

**Isso garante que seu Remarketing e Público Lookalike sejam alimentados apenas por leads reais.** 🛡️📊
