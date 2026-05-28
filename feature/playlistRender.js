export function renderplaylist() {
    main.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Playlist";
    main.append(title);
}