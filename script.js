// Inicializar o calendário
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendario');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth'
    });
    calendar.render();
});

// Adicionar período menstrual
document.getElementById('form-periodo').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const dataInicio = document.getElementById('data-inicio').value;
    const dataFim = document.getElementById('data-fim').value;

    if (!dataInicio || !dataFim) {
        alert('Por favor, preencha as datas.');
        return;
    }

    const list = document.getElementById('lista-periodos');
    const li = document.createElement('li');
    li.textContent = `Início: ${dataInicio} - Fim: ${dataFim}`;
    const btn = document.createElement('button');
    btn.textContent = 'Excluir';
    btn.onclick = function() {
        list.removeChild(li);
    };
    li.appendChild(btn);
    list.appendChild(li);
});

// Adicionar sintomas
document.getElementById('form-sintomas').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const sintoma = document.getElementById('sintoma').value;

    if (!sintoma) {
        alert('Por favor, insira um sintoma.');
        return;
    }

    const list = document.getElementById('lista-sintomas');
    const li = document.createElement('li');
    li.textContent = sintoma;
    const btn = document.createElement('button');
    btn.textContent = 'Excluir';
    btn.onclick = function() {
        list.removeChild(li);
    };
    li.appendChild(btn);
    list.appendChild(li);
});

// Adicionar comentários
document.getElementById('form-comentarios').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const comentario = document.getElementById('comentario').value;

    if (!comentario) {
        alert('Por favor, insira um comentário.');
        return;
    }

    const list = document.getElementById('lista-comentarios');
    const li = document.createElement('li');
    li.textContent = comentario;
    const btn = document.createElement('button');
    btn.textContent = 'Excluir';
    btn.onclick = function() {
        list.removeChild(li);
    };
    li.appendChild(btn);
    list.appendChild(li);
});

// Calcular período fértil
document.getElementById('form-calculo').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const dataPeriodo = new Date(document.getElementById('data-periodo').value);
    const ciclo = parseInt(document.getElementById('ciclo').value);

    if (!dataPeriodo || isNaN(ciclo) || ciclo <= 0) {
        alert('Por favor, insira uma data válida e um número de ciclo maior que zero.');
        return;
    }

    const periodoFertil = new Date(dataPeriodo);
    periodoFertil.setDate(periodoFertil.getDate() + ciclo / 2);
    document.getElementById('resultado').textContent = `Seu período fértil começa em: ${periodoFertil.toDateString()}`;
});

// Chatbot
const messages = document.getElementById('messages');
const chatInput = document.getElementById('chat-input');
const sendBtn = document.getElementById('send-btn');

const responses = [
    "Olá! Como posso ajudar você hoje?",
    "Olá! Não se esqueça de beber bastante água.",
    "Oi! Se precisar de dicas de bem-estar, estou aqui.",
    "Olá! Registre seus sintomas para melhor acompanhamento.",
    "Oi! Não se esqueça de se cuidar e manter a calma."
];

sendBtn.addEventListener('click', function() {
    const userMessage = chatInput.value;
    if (!userMessage) return;

    const userMessageElement = document.createElement('p');
    userMessageElement.textContent = `Você: ${userMessage}`;
    messages.appendChild(userMessageElement);
    
    chatInput.value = '';

    // Simula uma resposta do chatbot
    setTimeout(function() {
        const botResponse = responses[Math.floor(Math.random() * responses.length)];
        const botMessageElement = document.createElement('p');
        botMessageElement.textContent = `Bot: ${botResponse}`;
        messages.appendChild(botMessageElement);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
});
