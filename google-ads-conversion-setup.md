# Configuração Técnica: Conversões e Metas (Google Ads)

Para que o Google saiba quais Cliques geraram Leads de R$ 1.2M, precisamos vincular o GTM à conta do Google Ads.

---

## 1. Criar a Ação de Conversão
No painel do Google Ads:
1. Vá em **Metas (Goals)** -> **Conversões** -> **Resumo**.
2. Clique em **+ Nova ação de conversão**.
3. Selecione **Site**.
4. Insira a URL da sua Landing Page e clique em **Verificar**.
5. Em "Adicionar uma ação de conversão manualmente", clique em **+ Adicionar uma ação de conversão**.
6. **Categoria:** Contato (ou Lead de Formulário).
7. **Nome da Conversão:** `leads_nova_jaguari`.
8. **Valor:** Usar valores diferentes para cada conversão. Recomendado: **R$ 1.200.000,00** (valor médio do imóvel).
9. **Contagem:** Uma (fundamental para leads, não queremos contar a mesma pessoa 10 vezes).
10. Clique em **Criar e Continuar**.

---

## 2. Configurar o Tag Manager (GTM)
Para enviar o evento `lead_captured`:
1. Selecione **Usar o Gerenciador de Tags do Google**.
2. Copie o **ID da Conversão** e o **Rótulo da Conversão**.
3. No seu GTM:
    - Crie uma nova **Tag** do tipo **Acompanhamento de conversões do Google Ads**.
    - Cole o ID e o Rótulo nos campos correspondentes.
    - **Acionador (Trigger):** Use o evento `lead_captured` que já configuramos no código.
4. Salve e publique o GTM.

---

## 3. Configurar Público-Alvo de Alta Performance (Dica VIP)
Não anuncie para todos. No nível da Campanha:
1. Vá em **Públicos-alvo** -> **Edição de Públicos**.
2. Adicione **Segmentos In-Market**:
    - `Casas (Compra)`
    - `Imóveis Residenciais`
3. Vá em **Informações Demográficas** -> **Renda Familiar**.
4. **DESATIVE** as opções:
    - 50% inferiores
    - 31-40% 
    - 41-50%
5. Mantenha apenas: **10% Principais**, **11 a 20%**, **21 a 30%** e **Desconhecido**.

**Isso garante que sua verba seja faturada apenas por pessoas com potencial financeiro para o Nova Jaguari.** 🛡️💰
