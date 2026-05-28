Hej i denna kodbas så skulle jag skappa en lätt applikation som hanterar en musiklista, listan innehåller artist, låt och genre.

Den körs via json server då data basen är en JSON fil, pga detta behöver du göra följande för att köra applikationen.

```bash
npm i
npm install json-server
npx json-server data/db.json

```

Efter detta så öppnar du ```index.html``` fill antingen via LiveServer eller igenom att höger klicka på ```html``` filen och välja ``` Open in Integrated Terminal```

dokumentation

https://www.npmjs.com/package/json-server
https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer