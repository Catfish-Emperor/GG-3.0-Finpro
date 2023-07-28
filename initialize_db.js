const { MongoClient } = require("mongodb");

const database = "tokpedPlayClone";
const client = new MongoClient("mongodb://0.0.0.0:27017");

const videos = [
    {
        videoId: "01",
        imageThumbnailUrl: "https://youtube.com/thumbnail-Img-1.jpg"
    },
    {
        videoId: "02",
        imageThumbnailUrl: "https://youtube.com/thumbnail-Img-2.jpg"
    },
    {
        videoId: "03",
        imageThumbnailUrl: "https://youtube.com/thumbnail-Img-3.jpg"
    },
    {
        videoId: "04",
        imageThumbnailUrl: "https://youtube.com/thumbnail-Img-4.jpg"
    },
    {
        videoId: "05",
        imageThumbnailUrl: "https://youtube.com/thumbnail-Img-5.jpg"
    }
];

const products = [
    {
        productLink: "https://tokopedia.com/product-1",
        title: "Product 1",
        price: "Rp. 10.000",
        videoId: "01"
    },
    {
        productLink: "https://tokopedia.com/product-2",
        title: "Product 2",
        price: "Rp. 10.000",
        videoId: "01"
    },
    {
        productLink: "https://tokopedia.com/product-3",
        title: "Product 3",
        price: "Rp. 10.000",
        videoId: "01"
    },
    {
        productLink: "https://tokopedia.com/product-4",
        title: "Product 4",
        price: "Rp. 10.000",
        videoId: "02"
    },
    {
        productLink: "https://tokopedia.com/product-5",
        title: "Product 5",
        price: "Rp. 10.000",
        videoId: "02"
    },
    {
        productLink: "https://tokopedia.com/product-6",
        title: "Product 6",
        price: "Rp. 10.000",
        videoId: "02"
    },
    {
        productLink: "https://tokopedia.com/product-7",
        title: "Product 7",
        price: "Rp. 10.000",
        videoId: "03"
    },
    {
        productLink: "https://tokopedia.com/product-8",
        title: "Product 8",
        price: "Rp. 10.000",
        videoId: "03"
    },
    {
        productLink: "https://tokopedia.com/product-9",
        title: "Product 9",
        price: "Rp. 10.000",
        videoId: "03"
    },
    {
        productLink: "https://tokopedia.com/product-10",
        title: "Product 10",
        price: "Rp. 10.000",
        videoId: "04"
    },
    {
        productLink: "https://tokopedia.com/product-11",
        title: "Product 11",
        price: "Rp. 10.000",
        videoId: "04"
    },
    {
        productLink: "https://tokopedia.com/product-12",
        title: "Product 12",
        price: "Rp. 10.000",
        videoId: "04"
    },
    {
        productLink: "https://tokopedia.com/product-13",
        title: "Product 13",
        price: "Rp. 10.000",
        videoId: "05"
    },
    {
        productLink: "https://tokopedia.com/product-14",
        title: "Product 14",
        price: "Rp. 10.000",
        videoId: "05"
    },
    {
        productLink: "https://tokopedia.com/product-15",
        title: "Product 15",
        price: "Rp. 10.000",
        videoId: "05"
    }
];

const comments = [
    {
        userName: "User 1",
        comment: "Comment from User 1 about video 01",
        timeStamp: new Date(),
        videoId: "01"
    },
    {
        userName: "User 2",
        comment: "Comment from User 2 about video 02",
        timeStamp: new Date(),
        videoId: "02"
    },
    {
        userName: "User 3",
        comment: "Comment from User 3 about video 03",
        timeStamp: new Date(),
        videoId: "03"
    },
    {
        userName: "User 4",
        comment: "Comment from User 4 about video 04",
        timeStamp: new Date(),
        videoId: "04"
    },
    {
        userName: "User 5",
        comment: "Comment from User 5 about video 05",
        timeStamp: new Date(),
        videoId: "05"
    }
];


async function initializeDatabase() {
    try {
        await client.connect();
        const db = client.db(database);
        // await db.dropDatabase();

        await db.collection("videos").insertMany(videos);
        await db.collection("products").insertMany(products);
        await db.collection("comments").insertMany(comments);

        console.log("Database for the simple Tokopedia Play Clone app has been initialized");
    } catch (err) {
        console.error("Initialize database error", err);
    } finally {
        client.close();
    }
}

initializeDatabase();
