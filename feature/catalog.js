import { createPlaylist } from "./createPlaylist.js";
import { renderplaylist } from "./playlistRender.js";

export function renderHome(main, playlists, currentSort) {
    main.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent= "Create Playlist";

    const createButton = document.createElement("button");
    createButton.textContent = "+";

    createButton.addEventListener("click", () => {createPlaylist(main, playlists, currentSort)});

    main.append(title, createButton);

    const playlistContainer = document.createElement("div");
    playlistContainer.classList.add("playlist.container");

    playlists.forEach((playlists, index) => {
        const playlistButton = document.createElement("button");

        playlistButton.textContent = `P${index + 1}`;

        playlistButton.addEventListener("click", () => {
            renderplaylist()
        });
        playlistContainer.appendChild(playlistButton);
    }) ;
    main.appendChild(playlistContainer);
};