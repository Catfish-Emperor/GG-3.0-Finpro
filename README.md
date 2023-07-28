# GG-3.0-Finpro

Final project for completition of Generasi GIGIH 3.0 program

There are three database models :
* Videos
* Products
* Comments

#videos
* video object
```
{
  "_id": {"$oid": "xxxxxx"},
  "videoId": "01",
  "imageThumbnailUrl": "https://youtube.com/thumbnail-Img-1.jpg"
}
```
**GET /video**
----
  Returns all video in the database.
* **URL Params**  
  None
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  videos: [
           {<video_object>},
           {<video_object>},
           {<video_object>}
         ]
}
```

#products
* product object
```
{
  "_id": {"$oid": "xxxxx"},
  "productLink": "https://tokopedia.com/product-1",
  "title": "Product 1",
  "price": "Rp. 10.000",
  "videoId": "01"
}
```
**GET /product/:id**
----
  Returns all products in the database that are related to the videoId, got the input from :id param.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  products: [
           {<product_object>},
           {<product_object>},
           {<product_object>}
         ]
}
```

#comments
* comment object
```
{
  "_id": {"$oid": "xxxxxxx"},
  "userName": "User 1",
  "comment": "Comment from User 1 about video 01",
  "timeStamp": {"$date": "xxxxxx"},
  "videoId": "01"
}
```
**GET /comment/:id**
----
  Returns all comments in the database that are related to the videoId, got the input from :id param.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 200  
  **Content:**  
```
{
  comments: [
           {<comment_object>},
           {<comment_object>},
           {<comment_object>}
         ]
}
```
**POST /comment/:id**
----
  Returns all comments in the database that are related to the videoId, got the input from :id param.
* **URL Params**  
  *Required:* `id=[integer]`
* **Data Params**  
  None
* **Success Response:**  
* **Code:** 201  
  **example post req body type raw json:**  
```
{
    "userName": "Hadi",
    "comment": "This product is good",
    "videoId": "01"
}
```
