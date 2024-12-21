document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (!message.trim()) {
        alert('Message cannot be empty!');
        return;
    }

    const newMessage = document.createElement('div');
    newMessage.classList.add('message');

    const nameElement = document.createElement('div');
    nameElement.classList.add('name');
    nameElement.textContent = name ? name : 'Anonymous';

    const messageElement = document.createElement('p');
    messageElement.textContent = message;

    newMessage.appendChild(nameElement);
    newMessage.appendChild(messageElement);

    // Append new message
    const messagesContainer = document.getElementById('messages');
    messagesContainer.insertBefore(newMessage, messagesContainer.firstChild);

    // Clear form
    document.getElementById('messageForm').reset();

    // Show notification
    const notification = document.getElementById('notification');
    notification.style.display = 'block';
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
});