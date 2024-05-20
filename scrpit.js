document.addEventListener("DOMContentLoaded", function() {
    // Change Font Style
    const changeFontButton = document.getElementById("changeFontButton");
    const greetingText = document.getElementById("greetingText");

    changeFontButton.addEventListener("click", function() {
        const currentFont = greetingText.style.fontFamily;
        greetingText.style.fontFamily = currentFont === "serif" ? "sans-serif" : "serif";
    });

    // Quote Generator
    const newQuoteButton = document.getElementById("newQuoteButton");
    const quoteDisplay = document.getElementById("quoteDisplay");
    const quotes = [
        "The mind is everything. What you think you become.",
        "Peace comes from within. Do not seek it without.",
        "You only lose what you cling to.",
        "Three things cannot be long hidden: the sun, the moon, and the truth.",
        "Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship."
    ];

    newQuoteButton.addEventListener("click", function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        quoteDisplay.textContent = quotes[randomIndex];
    });

    // Countdown Timer
    const countdown = document.getElementById("countdown");
    const targetDate = new Date("May 19, 2024 00:00:00").getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

        if (distance < 0) {
            countdown.innerHTML = "The event has started!";
        }
    }

    setInterval(updateCountdown, 1000);

    // Modal Popup
    const modal = document.getElementById("modal");
    const modalButton = document.getElementById("modalButton");
    const span = document.getElementsByClassName("close")[0];

    modalButton.addEventListener("click", function() {
        modal.style.display = "block";
    });

    span.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
