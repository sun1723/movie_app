**Description:**

|Backend API|<http://www.omdbapi.com/>|
| :-: | :-: |
|Example Asset|<https://drive.google.com/file/d/1nwuuZyp2pJN94p1FV6a6r3_UMJaDxeEt/view>|
|Framework|create-react-app|
|Environment|` `Node 12.13.0|
|UI library|material UI - icons,Popover,Menu|

# Movie app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). 
All tickets details through this project are included in development note 

## clone project

    git clone https://github.com/sun1723/movie_app.git

## go to prject folder

    cd movie_app

## install packages

    npm install

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


# Functional Features:

1. Search movie list by search key

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 001](https://user-images.githubusercontent.com/36902339/156872494-6d06ee3c-0cc6-4920-afc2-fba1d1de2aa0.png)

2. Type filter- (movie / series / episode) -[default:no selection on type]

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 002](https://user-images.githubusercontent.com/36902339/156872517-d115b3fd-e606-4843-b27f-2c990b67f746.png)

3. Two-way year filter (Valid year: 1900-2050)

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 003](https://user-images.githubusercontent.com/36902339/156872526-bb62cb03-ea31-4aad-bd91-cd76449a2825.png)
![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 004](https://user-images.githubusercontent.com/36902339/156872536-46d8a63e-8e24-45c7-a20c-3b242b9a2c4b.png)

(note\*: year range filter can be apply but return data from api is not working as expected)

5. Choose Season

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 005](https://user-images.githubusercontent.com/36902339/156872553-92806e90-0d84-4b4f-88ce-da50809c7a3d.png)

6. View movie detail content

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 006](https://user-images.githubusercontent.com/36902339/156872564-e83f2bd2-b481-4ab8-9e01-524b4e3d6624.png)

7. score list 

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 007](https://user-images.githubusercontent.com/36902339/156873313-82da2af2-8188-4302-8636-c48a21f0d645.png)


8. Save into list

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 008](https://user-images.githubusercontent.com/36902339/156872640-49f56c90-9b52-4f64-82b9-9c16248ad897.png)
![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 009](https://user-images.githubusercontent.com/36902339/156872645-ed1fd860-55c9-4e66-8941-324a66087cc3.png)

9. Visual  saved list 

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 010](https://user-images.githubusercontent.com/36902339/156872752-bc68113b-d79f-4fdc-98c5-7d2301cc2156.png)
![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 011](https://user-images.githubusercontent.com/36902339/156872753-48f43354-9265-49fe-8d52-5bc87038e98c.png)
![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 012](https://user-images.githubusercontent.com/36902339/156872755-a8bb0f2f-d91a-41ee-a161-dcddeb94f09e.png)

10.switch page for search

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 013](https://user-images.githubusercontent.com/36902339/156872761-a73087e3-7a90-4c98-b7ef-dee4f1e569d6.png)

11.remove saved movie from saved list

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 008](https://user-images.githubusercontent.com/36902339/156872790-83c9fcac-7743-4820-bf9a-5aaeb2d357cc.png)
![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 014](https://user-images.githubusercontent.com/36902339/156872803-9a9bed7a-143b-4722-b7df-18a015a196a1.png)

# Folder Tree:

public

┣ Image\_not\_available.png (in used when poster is not available(N/A or url is no longer valid))

┣ index.html

┣ manifest.json

┗ robots.txt

src

┣ api

┃ ┗ MovieApi.js — API call using AXIOS 

┣ components

┃ ┣ ContentDetail.js

┃ ┣ FilterItem.js

┃ ┣ InputPagination.js

┃ ┣ Main.js

┃ ┣ SelectYear.js

┃ ┣ MovieCard.js

┃ ┣ MovieContent.js

┃ ┣ MovieList.js

┃ ┣ MovieModal.js

┃ ┣ MovieMore.js

┃ ┣ Moviesview.js

┃ ┣ MovieTag.js

┃ ┣ Nav.js

┃ ┣ ScoreBox.js

┃ ┣ ScoreList.js

┃ ┣ SearchBox.js

┃ ┣ Settings.js

┃ ┣ StarRating.js

┃ ┣ Tab.js

┃ ┣ Tooltip.js

┃ ┣ TypeFIlter.js

┃ ┗ TypeFilterList.js

┣ utils

┃ ┣ app\_constant.js —(constant –(EG)yearlist, types)

┃ ┣ content\_detail.scss

┃ ┣ drop\_down.scss

┃ ┣ filter\_item.scss

┃ ┣ input\_pagination.scss

┃ ┣ keys.js –(API key)

┃ ┣ main.scss

┃ ┣ menu\_list.scss

┃ ┣ modal.scss

┃ ┣ movie\_card.scss

┃ ┣ movie\_content.scss

┃ ┣ movie\_list.scss

┃ ┣ movie\_more.scss

┃ ┣ movie\_tag.scss

┃ ┣ movie\_view.scss

┃ ┣ nav.scss

┃ ┣ score\_box.scss

┃ ┣ score\_list.scss

┃ ┣ search\_box.scss

┃ ┣ settings.scss

┃ ┣ star\_rating.scss

┃ ┣ tab.scss

┃ ┣ tooltip.scss

┃ ┣ typeFilter\_list.scss

┃ ┗ type\_filter.scss

┣ App.js

┣ App.scss

┣ App.test.js

┣ index.css

┣ index.js

┣ reportWebVitals.js

┗ setupTests.js

# Component Inheritance

![Aspose Words f2edb192-edc1-4fe6-a15d-3a3d01653fea 015](https://user-images.githubusercontent.com/36902339/156872809-bfc7f04a-6f48-4413-b494-361f0bd9edc7.png)

# Development Note-note for all tickets created throughout this project:

<https://docs.google.com/document/d/19bl_QACpZIQFTLgaQCQMlbL3ein1I7kB4hUFJ1plnjI/edit?usp=sharing>

# Future improvement:

1. Enable user for account management
2. improve movie details layout 
3. add more functionality when backend api updated
4. More details display in mobile view
5. More test case for functional testing
6. sort function
