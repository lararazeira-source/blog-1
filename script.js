/* Variáveis para Temas Claro e Escuro */
:root {
    --bg-color: rgb(249, 245, 244);
    --text-color: #700f86;
    --card-bg: #ffffff;
    --header-bg: #5e0a92;
    --header-text: #ffffff;
    --shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    --border-color: #e0e0e0;
    --btn-bg: #ffffff;
    --btn-text: #3d0b4a;
    --link-color: #3b2b79;
}

/* Alteração das variáveis no Modo Escuro */
body.dark-mode {
    --bg-color: #121212;
    --text-color: #e0e0e0;
    --card-bg: #1e1e1e;
    --header-bg: #c90eea;
    --header-text: #ffffff;
    --shadow: 0 8px 24px rgba(0, 0, 0, 0.5);
    --border-color: #333333;
    --btn-bg: #2d2d2d;
    --btn-text: #986ceb;
    --link-color: #7a16f3;
}

/* Estilos Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Cabeçalho */
.site-header {
    background-color: var(--header-bg);
    color: var(--header-text);
    text-align: center;
    padding: 40px 20px;
    margin-bottom: 30px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.header-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.site-header h1 {
    font-size: 2.5rem;
}

.site-header p {
    font-size: 1.1rem;
}

/* Botão do Modo Escuro */
.dark-mode-btn {
    background-color: var(--btn-bg);
    color: var(--btn-text);
    border: none;
    padding: 10px 20px;
    border-radius: 20px;
    font-weight: bold;
    cursor: pointer;
    font-size: 0.95rem;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 10px;
}

.dark-mode-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
}

/* Container de Conteúdo */
.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Centralização perfeita dos cards */
    gap: 30px;
}

/* Cartão do Pet */
.pet-card {
    background: var(--card-bg);
    border-radius: 12px;
    box-shadow: var(--shadow);
    overflow: hidden;
    width: 100%;
    max-width: 650px; /* Mantém os cards alinhados e com tamanho confortável */
    border: 1px solid var(--border-color);
    transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.pet-card:hover {
    transform: translateY(-5px); /* Efeito sutil ao passar o mouse */
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
}

.image-container img {
    width: 100%;
    height: 300px;
    object-fit: cover;
    display: block;
}

/* Conteúdo interno do Card */
.card-content {
    padding: 25px;
}

.card-content h2 {
    font-size: 1.6rem;
    margin-bottom: 12px;
}

.card-content p {
    font-size: 1rem;
    margin-bottom: 20px;
}

.read-more {
    display: inline-block;
    color: var(--link-color);
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

.read-more:hover {
    text-decoration: underline;
}