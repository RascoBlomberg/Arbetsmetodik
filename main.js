import { renderHome } from "./feature/catalog.js"

const main = document.getElementById("main");


let playlists = [];
let currentSort = "artist";

renderHome(main, playlists, currentSort);