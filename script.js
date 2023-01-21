let therock = "https://people.com/thmb/mYK-lIK22BHl71BJVb_9Lz9xRVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(309x0:311x2)/rock-insta-778d9e7296924ee1829c8293b7e942f6.jpg";

const images = document.getElementsByTagName("img")
for(let i = 0; i < images.length; i++){
    images[i].src = therock;
}