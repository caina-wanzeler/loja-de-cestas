<script setup>
import ButtonContact from '../atoms/contact/ButtonContact.vue';
import ContactText from '../atoms/contact/ContactText.vue';
import DisplayCard from '../atoms/contact/DisplayCard.vue';
import IconInstagram from '../atoms/contact/icon/IconInstagram.vue';
import IconWhatsapp from '../atoms/contact/icon/IconWhatsapp.vue';


const instagramLink = "https://www.instagram.com/cesta.dalua?igsh=MTZ2YmIzODhidzl2Ng=="
const whatsappLink = "https://wa.me/5563984460585"

const sideIcon = 40
</script>

<template>
    <section class="contact">
        <ContactText 
            title="Entre em Contato" 
            subtitle="Siga pelos nossos canais de comunicação"
        />
    
    
        <div class="container-display">
            <DisplayCard 
                title="Peça agora pelo WhatsApp"
                subtitle="Dúvidas ou encomendas personalizadas? Fale conosco agora"
                background="rgb(37, 211, 102)"
                hoverColor="rgb(40, 230, 110)"
            >
                <template #icon>
                    <IconWhatsapp :side="sideIcon" />
                </template>

                <template #button>
                    <ButtonContact text="Peça agora" :link="whatsappLink" />
                </template>
            </DisplayCard>

            <DisplayCard 
                title="Nosso Dia a Dia"
                subtitle="Siga-nos para ver as produções do dia: @SuaLoja"
                background="rgb(225, 48, 108)"
                hoverColor="rgb(243, 28, 100)"
            >
                <template #icon>
                    <IconInstagram :side="sideIcon" />
                </template>

                <template #button>
                    <ButtonContact text="Ver Catálogo" :link="instagramLink" />
                </template>
            </DisplayCard>
        </div>
    </section>
    
</template>

<style scoped>
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    
        .container-display {
            display: flex;
            gap: 5vw;
            padding: 20px 0;
        }
    }
</style>