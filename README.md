# 24hBS-FE
Test for coding Front End

## The code
Technology used: ReactJS

The app builds on the ./24hbs/public/index.html file.

Main module: Axios, to have clean methods to fetch data from the API

The test files, built automatically with the default release of React could be used to develop tests. But we DO NOT use them for now.


## The data
The data consist in a JSON file "jokes.json" retrieved from the https://api.chucknorris.io/ API

The data given from the API has the following structure
{

"id" : STRING, ID unique for each JOKE

"icon_url" : STRING, URL of a valid web compatible image

"url" : STRING, URL of the JOKE, if not provided the default value is [BASE_DOMAIN]/view/joke/[ID]

"value" : STRING, the text of the JOKE

"created_at": DATETIME, the creation date time

"updated_at": DATETIME, the last updated date time

"categories": STRING[], the list of categories for the JOKE

}

## run build

To just run the static page, open the ./24hbs/buil/index.html file

### Comments
To explain the developing choices please refere to the comments in the code.

# The End
Thanks