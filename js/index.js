function randomCandy() {
    const imageArray = ['images/reese.jpg', 
                        'images/skittles.jpg',
                        'images/snickers.jpg',
                        'images/twix.jpg']
    
    
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    document.getElementById('candy-image').src = imageArray[randomIndex];

    console.log('random candy function')
}


