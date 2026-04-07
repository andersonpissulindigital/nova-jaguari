/**
 * Martech Integration Engine - Nova Jaguari V1
 * Responsável pela captura de UTMs e envio de Leads para CRM.
 */

const Martech = {
    config: {
        webhookUrl: 'https://n8n.andersonpissulin.com.br/webhook/nova-jaguari-leads', // Substituto pela URL real do n8n/Make
        storageKey: 'apoena_utm_data'
    },

    nextStep() {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const telefone = document.getElementById('telefone').value;

        if(nome && email && telefone) {
            document.getElementById('step1').classList.remove('active');
            document.getElementById('step2').classList.add('active');
            document.getElementById('progressFill').style.width = '100%';
        } else {
            alert('Por favor, preencha todos os campos do primeiro passo.');
        }
    },

    init() {
        this.captureUTMs();
        this.bindFormEvents();
    },

    captureUTMs() {
        const urlParams = new URLSearchParams(window.location.search);
        const utms = {
            source: urlParams.get('utm_source') || 'organic',
            medium: urlParams.get('utm_medium') || 'web',
            campaign: urlParams.get('utm_campaign') || 'none',
            content: urlParams.get('utm_content') || 'none',
            term: urlParams.get('utm_term') || 'none',
            timestamp: new Date().toISOString()
        };

        // Persistência para caso o usuário navegue e depois volte ao form
        localStorage.setItem(this.config.storageKey, JSON.stringify(utms));
        console.log('UTMs Capturadas:', utms);
    },

    async submitLead(data) {
        const utm_data = JSON.parse(localStorage.getItem(this.config.storageKey));
        const payload = { ...data, ...utm_data };

        console.log('Enviando Payload Final:', payload);

        try {
            // Simulação de Envio (Substituir por fetch real ao ter o webhook)
            const response = await fetch(this.config.webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                // Sucesso: Ativar flag de conversão para acesso à página de obrigado
                sessionStorage.setItem('apoena_conversion', 'true');
                return true;
            } else {
                throw new Error('Erro no servidor de recebimento.');
            }
        } catch (error) {
            console.error('Falha na integração:', error);
            // Mesmo com erro, salvamos localmente para não perder o lead
            this.saveLocalBackup(payload);
            sessionStorage.setItem('apoena_conversion', 'true'); // Ativamos para não bloquear o usuário em falhas de rede
            return true;
        }
    },

    saveLocalBackup(payload) {
        const backups = JSON.parse(localStorage.getItem('apoena_leads_backup') || '[]');
        backups.push(payload);
        localStorage.setItem('apoena_leads_backup', JSON.stringify(backups));
        console.warn('Lead salvo localmente devido a falha no webhook.');
    },

    bindFormEvents() {
        const form = document.getElementById('leadForm');
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                const success = await this.submitLead(data);
                if (success) {
                    form.reset(); // Limpa o formulário após envio
                    window.location.href = 'obrigado.html'; // Redirecionamento Final
                }
            });
        }
    }
};

// Start
document.addEventListener('DOMContentLoaded', () => Martech.init());
