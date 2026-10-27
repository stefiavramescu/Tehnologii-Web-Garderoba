# WardrobeManager

A web application for organizing and managing clothes from the wardrobe by seasons and categories.

## Data model

| Field | Type | Notes |
| ----------- | ------------ | ------------------------------------ |
| denumire | text | required, max 100 chars |
| stare | boolean | toggled from the list, default false (ex: washed / to wash) |
| sezon | fixed values | Vara, Iarna, Toate sezoanele |
| categorie | relation | Camasa, Pantaloni, Geaca |
| user | relation | the owner of the item (from week 11) |

Sample data used across all stages:
1. Camasa alba, active (to wash), Vara
2. Geaca de iarna, done (washed), Iarna
3. Pantaloni sport, active (to wash), Toate sezoanele

## How to run
cd frontend
npm install
npm run dev
Then open the address printed in the terminal (http://localhost:5173).

## Stage 2: data logic
Plain JavaScript, no DOM. garderoba.js holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## Stage 4: components
The list is rendered from the data, through two components:
ItemList receives the whole array and renders one card per item
ItemCard receives a single item through props and displays it

## Stage 5: local state and events
The list lives in React state. Checking and deleting work from the page, and the counters in the header follow automatically. A button in the header switches between light and dark mode.

## AI usage
Tool | Used for
---|---
Gemini | Guidance and code structuring for stages 1, 2, 3, and 4

Details per stage: see the `ai-log/` folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [x] Stage 4: components rendered from data
- [x] Stage 5: local state and events

## Tabel de verificare (Stage 1)

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/mockup/index.html) | open the page |
| S1-R5 | finished card looks different | [style.css](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/mockup/style.css) (.done) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/mockup/style.css) (@media) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/mockup/style.css) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [commit history](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/commits/main) | commit history |

## Tabel de verificare (Stage 2)

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/mockup/index.html) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [garderoba.js](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/mockup/garderoba.js) | read |
| S2-R3 | list, count, search, add, toggle, delete | [garderoba.js](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/mockup/garderoba.js) | console output |
| S2-R4 | add rejects empty name and invalid tag | [garderoba.js](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/mockup/garderoba.js) | last 2 console lines |
| S2-R5 | original array unchanged after add | [garderoba.js](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/mockup/garderoba.js) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md / ai-log](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md) | read |
| S2-R7 | commit "Stage 2" pushed | [commit history](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/commits/main) | commit history |

## Tabel de verificare (Stage 3)

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx) | edit data, save |
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx) | compare with README |
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/.gitignore) | npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md / ai-log](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md) | read |
| S3-R7 | commit "Stage 3" pushed | [commit history](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/commits/main) | commit history |

## Tabel de verificare (Stage 4)

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S4-R1 | 2+ components in src/components/ | [frontend/src/components/](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/components) | open folder |
| S4-R2 | card receives data through props | [ItemCard.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/components/ItemCard.jsx) | read |
| S4-R3 | map + key={id}, no console warnings | [ItemList.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/components/ItemList.jsx) | F12, Console |
| S4-R4 | message for empty list | [ItemList.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/components/ItemList.jsx) | set array to [] |
| S4-R5 | state changes the card look | [ItemCard.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/components/ItemCard.jsx) | toggle a done flag |
| S4-R6 | README Stage 4 section + AI log | [README.md / ai-log](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md) | read |
| S4-R7 | commit "Stage 4" pushed | [commit history](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/commits/main) | commit history |

## Tabel de verificare (Stage 5)

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S5-R1 | list kept in useState, in App | [App.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx) | read |
| S5-R2 | toggling changes state and card look | [App.jsx / ItemCard.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx) | click a checkbox |
| S5-R3 | delete removes the item | [App.jsx / ItemCard.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx) | click Delete|
| S5-R4 | header counter derived, not in state | [App.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx)| toggle, watch header |
| S5-R5 | immutable updates (no push, splice, assignment) | [App.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx) | read|
| S5-R6 | light/dark toggle: state + data-theme on html | [App.jsx / App.css](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx) | click the button |
| S5-R7 | no console warnings; README + AI log | [README.md / ai-log](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md)| F12, Console |
| S5-R8 | commit "Stage 5" pushed | [commit history](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/commits/main) | commit history|