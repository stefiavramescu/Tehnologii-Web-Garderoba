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

## AI usage
Tool | Used for
---|---
<e.g. ChatGPT> | Guidance and code structuring for stage 1

Details per stage: see the `ai-log/` folder.

## Status
- [x] Stage 1: static mockup
- [ ] Stage 2: data logic in JavaScript
- [ ] Stage 3: React project initialization
- [ ] Stage 4: components built from data
- [ ] Stage 5: interactive features, API, database

## Tabel de verificare (Stage 1)

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S1-R1 | README: description, fields, sample data, how to run | [README.md](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md) | read |
| S1-R2 | AI usage section | [README.md#L...](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md#L...) | read |
| S1-R3 | AI log for stage 1 | [ai-log/etapa-01.md](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/ai-log/etapa-01.md) | read |
| S1-R4 | header, form (text + select), 3 cards with own data | [index.html#L...](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/index.html#L...) | open the page |
| S1-R5 | finished card looks different | [style.css#L...](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/style.css#L...) (.done) | look at the card |
| S1-R6 | 2 columns on desktop, 1 under 700px | [style.css#L...](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/style.css#L...) (@media) | resize < 700px |
| S1-R7 | visible focus, readable dark theme | [style.css#L...](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/style.css#L...) | Tab; dark mode |
| S1-R8 | commit "Stage 1" pushed | [link to commit](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/commit/<hash>) | commit history |