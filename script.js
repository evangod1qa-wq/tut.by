/* script.js */

// 1. Имитация погоды и валют
window.onload = function() {
    if(document.getElementById('weather')) {
        document.getElementById('weather').innerText = "-5°C, Снег";
    }
    if(document.getElementById('usd')) {
        // Курс 2003 года примерно
        document.getElementById('usd').innerText = "1920 BYR"; 
        document.getElementById('eur').innerText = "2050 BYR";
    }
};

// 2. VK Чат (Логика)
function sendVkMessage() {
    var input = document.getElementById('vkInput');
    var chat = document.getElementById('vkChatArea');
    var msg = input.value;

    if(msg.trim() !== "") {
        // Добавляем сообщение пользователя
        var userLine = document.createElement('div');
        userLine.style.marginBottom = "5px";
        userLine.innerHTML = "<b>Вы:</b> " + msg;
        chat.appendChild(userLine);

        input.value = "";
        
        // Автоматический ответ
        setTimeout(function(){
            var botLine = document.createElement('div');
            botLine.style.marginBottom = "5px";
            botLine.style.color = "#cc0000";
            botLine.innerHTML = "<b>Admin:</b> Привет! Добро пожаловать на TAT.BY!";
            chat.appendChild(botLine);
            chat.scrollTop = chat.scrollHeight; // прокрутка вниз
        }, 1000);
    }
}

// 3. PAINT (Рисовалка)
var canvas = document.getElementById('drawCanvas');
if (canvas) {
    var ctx = canvas.getContext('2d');
    var painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }
    function endPosition() {
        painting = false;
        ctx.beginPath();
    }
    function draw(e) {
        if (!painting) return;
        ctx.lineWidth = document.getElementById('paintSize').value;
        ctx.lineCap = 'round';
        ctx.strokeStyle = document.getElementById('paintColor').value;

        // Поправка на позицию мыши относительно канваса
        var rect = canvas.getBoundingClientRect();
        ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
    }

    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
}

function clearCanvas() {
    var canvas = document.getElementById('drawCanvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
    var canvas = document.getElementById('drawCanvas');
    var link = document.createElement('a');
    link.download = 'my-drawing.png';
    link.href = canvas.toDataURL();
    link.click();
}

// 4. WORD (Сохранение текста)
function saveText() {
    var text = document.getElementById('wordText').value;
    var filename = document.getElementById('filename').value;
    
    var blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    var link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
}