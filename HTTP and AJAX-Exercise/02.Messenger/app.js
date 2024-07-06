function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/messenger';

    // Get DOM elements
    const sendButton = document.getElementById('submit');
    const refreshButton = document.getElementById('refresh');
    const textareaResult = document.querySelector('textarea');
    const authorInput = document.querySelector('input[name="author"]');
    const contentInput = document.querySelector('input[name="content"]');

    // Event listener for sending a message
    sendButton.addEventListener('click', sendMessageEvent);

    async function sendMessageEvent(event) {
        const author = authorInput.value.trim();
        const content = contentInput.value.trim();

        if (!author || !content) {
            alert('Please enter both author and content!');
            return;
        }

        const message = {
            author,
            content
        };

        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(message)
            });

            if (!response.ok) {
                throw new Error(`Failed to post message: ${response.status} ${response.statusText}`);
            }

            // Clear input fields after successful submission
            authorInput.value = '';
            contentInput.value = '';

            // Trigger refresh of messages after sending
            refreshEvent();

        } catch (error) {
            console.error('Error posting message:', error);
        }
    }

    // Event listener for refreshing messages
    refreshButton.addEventListener('click', refreshEvent);

    async function refreshEvent(event) {
        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error(`Failed to fetch messages: ${response.status} ${response.statusText}`);
            }

            const messages = await response.json();

            // Prepare messages for display
            let messagesArr = [];
            for (let key in messages) {
                const message = messages[key];
                messagesArr.push(`${message.author}: ${message.content}`);
            }

            // Display messages in the textarea
            textareaResult.value = messagesArr.join('\n');

        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    }

    // Initial load of messages
    refreshEvent();
}

attachEvents();
