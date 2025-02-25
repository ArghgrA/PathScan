let textArray = [];

document.getElementById('ButtonTest').addEventListener('click', function () {

    let text = document.getElementById('text').value;

    let words = text.split(/\s+/);

    if(!text.trim()){
        alert("Enter wordlist!!!");
        return;
    }
    
    words.forEach(word => {
        textArray.push(word);
    });
    
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentUrl = tabs[0].url;

        const proxyUrl = 'http://localhost:8080/';

        
        textArray.forEach(word => {
            const url = currentUrl + word;

            const fullUrl = proxyUrl + url;

            fetch(fullUrl)
                .then(response => {
                    const textarea = document.getElementById('risposta');
                    if (response.status === 200) {
                        textarea.value += `Succes for "${word}" (Status 200)\n\n`;
                    } else {
                        textarea.value += `Error for "${word}" (Status ${response.status})\n\n`;
                    }
                })
                .catch(error => {
                    const textarea = document.getElementById('risposta');
                    textarea.value += `Error in the request for this word "${word}": ${error.message}\n\n`;
                });
        });

        textArray = [];
        document.getElementById("risposta").value = "";

    });
});