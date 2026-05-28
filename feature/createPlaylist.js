import { renderHome } from "./catalog.js";
import { music } from "../data/music.js";

export function createPlaylist(main, playlists, currentSort) {
    const newPlaylist = [...music];

    playlists.push(newPlaylist);

    renderHome(main, playlists, currentSort);
}