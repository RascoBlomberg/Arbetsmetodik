import { renderHome } from "./catalog.js";

export function renderplaylist(main, playlists, currentSort) {
    main.innerHTML = "";

    const sortButton = document.createElement("button");
    sortButton.textContent = `Sort by ${currentSort}`;

    sortButton.addEventListener("click", () => {

        if(currentSort === "artist"){
            currentSort = "song";
        }
        if(currentSort === "song"){
            currentSort = "genre";
        }
        else{
            currentSort = "artist";
        }
        renderplaylist(main, playlists, currentSort)
    });
    main.appendChild(sortButton);
    playlists.sort((a, b) => {
        return a[currentSort].localeCompare(b[currentSort]);
    });
    playlists.forEach(item => {
        const row = document.createElement("div");
        row.classList.add("row");
        row.innerHTML = `<p>${item.artist}</p>
        <p>${item.song}</p>
        <p>${item.genre}</p>`;
        main.appendChild(row);
    });

    const buttonBack = document.createElement("button");
    buttonBack.textContent = "Back";
    buttonBack.addEventListener("click", () => {renderHome(main, playlists, currentSort)});
    main.appendChild(buttonBack);
}