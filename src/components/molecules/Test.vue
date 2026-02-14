<template>
  <section class="contact-section">
    <h2>Fale Conosco</h2>
    <p>Escolha o canal de sua preferência:</p>

    <div class="contact-grid">
      <a href="https://wa.me/seunumeroaqui" target="_blank" class="card whatsapp">
        <IconWhatsapp />
        <span>Enviar Mensagem</span>
        <small>Resposta em poucos minutos</small>
      </a>

      <a href="https://instagram.com/seuperfil" target="_blank" class="card instagram">
        <IconInstagram />
        <span>Ver Catálogo no Insta</span>
        <small>@seunomedeusuario</small>
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  text-decoration: none;
  transition: transform 0.3s ease;
  color: white;
}

.card:hover {
  transform: translateY(-50%) scale(1.05); /* Usando a lógica que aprendemos! */
}

.whatsapp { background-color: #25D366; }
.instagram { background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); }

span { font-weight: bold; font-size: 1.2rem; margin-top: 10px; }
small { opacity: 0.9; margin-top: 5px; }
</style>