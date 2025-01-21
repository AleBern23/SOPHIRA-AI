// Chat functionality
function getResponse(input) {
    for (const item of patterns) {
        const match = input.match(item.pattern);
        if (match) {
            let response = item.responses[Math.floor(Math.random() * item.responses.length)];
            if (match.length > 1) {
                response = response.replace("{0}", match[1]);
            }
            return response;
        }
    }
    return "Even a digital detective gets stumped sometimes. Care to rephrase that?";
}

function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value;
    if (!message.trim()) return;
    
    const chatMessages = document.getElementById("chat-messages");

    // User message
    chatMessages.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

    // Simulate typing delay
    setTimeout(() => {
        const response = getResponse(message);
        chatMessages.innerHTML += `<p><strong>NOIR·AI:</strong> ${response}</p>`;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 1000);
    
    input.value = "";
}

// Enter key functionality
document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const openChatButton = document.getElementById('open-chat');
    const chatModal = document.getElementById('chat-modal');
    const closeChat = document.querySelector('.close-chat');

    openChatButton.addEventListener('click', function() {
        chatModal.classList.add('active');
    });

    closeChat.addEventListener('click', function() {
        chatModal.classList.remove('active');
    });

    // Close modal when clicking outside the chat container
    chatModal.addEventListener('click', function(e) {
        if (e.target === chatModal) {
            chatModal.classList.remove('active');
        }
    });
});

