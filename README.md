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
Open index.html in a browser. No build step, no server.

## Stage 2: data logic
Plain JavaScript, no DOM. garderoba.js holds the array and the functions that read and change it. Results are printed in the browser console (F12).

## AI usage
Tool | Used for
---|---
Gemini | Guidance and code structuring for stages 1 and 2

Details per stage: see the `ai-log/` folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [ ] Stage 3: React project initialization
- [ ] Stage 4: components built from data
- [ ] Stage 5: interactive features, API, database

## Tabel de verificare (Stage 1)

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/index.html) | open the page |
| S1-R5 | finished card looks different | [style.css](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/style.css) (.done) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/style.css) (@media) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/style.css) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [commit history](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/commits/main) | commit history |

## Tabel de verificare (Stage 2)

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S2-R1 | JS file linked, logs on page load | [index.html](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/index.html) | open page, F12 |
| S2-R2 | 3+ items with id, name, state, tag | [garderoba.js](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/garderoba.js) | read |
| S2-R3 | list, count, search, add, toggle, delete | [garderoba.js](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/garderoba.js) | console output |
| S2-R4 | add rejects empty name and invalid tag | [garderoba.js](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/garderoba.js) | last 2 console lines |
| S2-R5 | original array unchanged after add | [garderoba.js](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/garderoba.js) | console line |
| S2-R6 | README Stage 2 section + AI log | [README.md / ai-log](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md) | read |
| S2-R7 | commit "Stage 2" pushed | [commit history](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/commits/main) | commit history |