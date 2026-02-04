<script setup>
import Background from '../atoms/Background.vue';
import ButtonBascket from '../atoms/ButtonBascket.vue';
import PresentationText from '../atoms/PresentationText.vue';

</script>

<template>
    <section>
        <Background class="container">
            <div class="content">
                <PresentationText
                    text="Cestas Personalizadas para Todas as Ocasiões"
                    subtext="Cestas feitas à mão para momentos inesquecíveis. 
                    Do café da manhã ao brinde especial, estamos aqui para 
                    tornar o seu dia mais doce."
                />
                <ButtonBascket
                    text="Ver Catálogo"
                />
            </div>
            
        </Background>
    </section>
</template>

<style>
    .container {
        display: flex;
        justify-content: center;
    }
    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 40px;

        padding: 40px;
        width: 60%;
    }
</style>