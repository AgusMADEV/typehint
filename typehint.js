console.log("AgusMADEV | TypeHint en funcionamiento");

document.addEventListener("DOMContentLoaded", () => {
    const inputIcons = {
        text: "abc",
        number: "123",
        email: "@",
        password: "🔒",
        tel: "📞",
        url: "🌐",
        date: "📅",
        search: "🔎"
    };

    document.querySelectorAll("input").forEach(input => {
        const type = input.getAttribute("type");
        if (inputIcons[type]) {
            // Create wrapper
            const wrapper = document.createElement("div");
            wrapper.className = "agusmadev-typehint-input-wrapper";

            // Create icon
            const icon = document.createElement("span");
            icon.className = "agusmadev-typehint-input-icon";
            icon.textContent = inputIcons[type];

            // Wrap input
            input.parentNode.insertBefore(wrapper, input);
            wrapper.appendChild(input);
            wrapper.appendChild(icon);
        }
    });
});