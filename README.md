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

## Stage 3: Vite and React project
The app now lives in frontend/, built with Vite. The data from stage 2 moved into the main component; the list is still printed raw.

## AI usage
Tool | Used for
---|---
Gemini | Guidance and code structuring for stages 1, 2, and 3

Details per stage: see the `ai-log/` folder.

## Status
- [x] Stage 1: static mockup
- [x] Stage 2: data logic in JavaScript
- [x] Stage 3: Vite and React project
- [ ] Stage 4: components built from data
- [ ] Stage 5: interactive features, API, database

## Tabel de verificare (Stage 3)

| ID | Requirement | Where (permalink) | How to check |
| --- | --- | --- | --- |
| S3-R1 | npm run dev starts without errors | [frontend/package.json](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/package.json) | npm install, npm run dev |
| S3-R2 | app name and counter computed from data | [frontend/src/App.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx)| edit data, save|
| S3-R3 | data from README, not from the example | [frontend/src/App.jsx](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.jsx)| compare with README|
| S3-R4 | stage 1 styles reused | [frontend/src/App.css](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/src/App.css) | look at the page |
| S3-R5 | node_modules ignored, build passes | [frontend/.gitignore](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/frontend/.gitignore)| npm run build |
| S3-R6 | README Stage 3 section + AI log | [README.md / ai-log](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/blob/main/README.md)| read |
| S3-R7 | commit "Stage 3" pushed | [commit history](https://github.com/stefiavramescu/Tehnologii-Web-Garderoba/commits/main) | commit history |