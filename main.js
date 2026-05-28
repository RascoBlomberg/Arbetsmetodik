const apiURL = "http://localhost:3000/playlists";

const loadPlaylists = async () => {

    const response = await fetch(apiURL);

    const playlists = await response.json();

    showPlaylist(playlists);

};

const showPlaylist = (playlists) => {
    const container = document.querySelector("#playlist-container");
    container.innerHTML="";
    playlists.forEach((playlist) => {
        container.innerHTML += `
        <div class="card">

            <img src="${playlist.imageURL}">

            <h2>${playlist.artist}</h2>

            <p><strong>Genre</strong> ${playlist.genre}</p>

            <h2> Låtar: </h3>

            <ul> ${playlist.songs.map(song => `<li> ${song}</li>`).join("")} </ul>

        </div>`;
    });
};

const addPlaylist = async (event) => {
    event.preventDefault();

    const artist = document.querySelector("#artist").value;

    const genre = document.querySelector("#genre").value;

    const imageURL = document.querySelector("#imageURL").value;

    const songs = document.querySelector("#songs").value.split(",");

    const newPlaylist = {artist, genre, imageURL, songs};

    await fetch (apiURL, {method: "POST", 
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPlaylist)
    });

    loadPlaylists();
    document.querySelector("#playlist-form").reset();
};

document.querySelector("#playlist-form").addEventListener("submit", addPlaylist);
loadPlaylists();