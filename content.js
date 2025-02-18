function calculateSpread() {
    let bidElement = document.querySelector("div.quote-bidask-val.fg-sell");
    let askElement = document.querySelector("div.quote-bidask-val.fg-buy");
    let headerRow = document.querySelector("div.end-16.fg70");

    if (bidElement && askElement && headerRow) {
        let bidText = bidElement.childNodes[0].nodeValue;
        let askText = askElement.childNodes[0].nodeValue;

        let bid = parseFloat(bidText);
        let ask = parseFloat(askText);

        if (!isNaN(bid) && !isNaN(ask)) {
            let spread = (bid - ask).toFixed(2);
            let percentage = ((spread / ask) * 100).toFixed(2) + "%";

            let parent = bidElement.parentElement;

            let existingSpread = document.querySelector(".ibkr-spread-display");
            let existingLabel = document.querySelector(".ibkr-spread-label");
            if (existingSpread) existingSpread.remove();
            if (existingLabel) existingLabel.remove();

            let spreadLabel = document.createElement("div");
            spreadLabel.className = "ibkr-spread-label";
            spreadLabel.innerText = "Spread";

            let spreadElement = document.createElement("div");
            spreadElement.className = "ibkr-spread-display quote-bidask-val fg70";
            spreadElement.innerText = `${spread} (${percentage})`;

            headerRow.appendChild(spreadLabel);
            parent.appendChild(spreadElement);
        }
    }
}

setInterval(calculateSpread, 100);
window.addEventListener("load", calculateSpread);
