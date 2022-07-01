let properties = JSON.parse(localStorage.getItem('properties'))?
JSON.parse(localStorage.getItem('properties')):
 localStorage.setItem('properties',JSON.stringify(
    [
        {
            id: 1,
            image: '../images/Apartment1.jpg',
            description: 'Apartment',
            bedrooms: 1,
            location: 'Chicago',
            price:'$1000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 2,
            image: '../images/Apartment2.jpg',
            description: 'Apartment',
            bedrooms: 1,
            location: 'New York',
            price:'$2000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 3,
            image: '../images/Apartment3.jpg',
            description: 'Single Family Home',
            bedrooms: 3,
            location: 'Chicago',
            price:'$5000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 4,
            image: '../images/Apartment4.jpg',
            description: 'Apartment',
            bedrooms: 1,
            location: 'New York',
            price:'$3000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 5,
            image: '../images/Apartment5.jpg',
            description: 'Single Family Home',
            bedrooms: 2,
            location: 'Los Angeles',
            price:'$2000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 6,
            image: '../images/Apartment6.jpg',
            description: 'Single Family Home',
            bedrooms: 3,
            location: 'Los Angeles',
            price:'$4000' ,
            type: 'Single Family Home',
            toilet: 2
        },
        {
            id: 7,
            image: '../images/Apartment7.jpeg',
            description: 'Apartment',
            bedrooms: 1,
            location: 'New York',
            price:'$2000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 8,
            image: '../images/Apartment8.jpg',
            description: 'Apartment',
            bedrooms: 1,
            location: 'Chicago',
            price:'$3000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 9,
            image: '../images/Apartment9.jpg',
            description: 'Single Family Home',
            bedrooms: 2,
            location: 'Miami',
            price:'$4000' ,
            type: 'Single Family Home',
            toilet: 2
        },
        {
            id: 10,
            image: '../images/Apartment10.jpg',
            description: 'Single Family Home',
            bedrooms: 3,
            location: 'Miami',
            price:'$5000' ,
            type: 'Single Family Home',
            toilet: 2
        }
    ]
));

    function readData() {
    let container = document.querySelector('#row1');
    container.innerHTML = "";
    properties.forEach( (item, index)=> {
        container.innerHTML += `
            <div class="card" style="width: 250px;">
                <img src='${item.image}' alt="Apartment" width="200px" height="200px" onclick='myfunction(this).style.display='none'>
                <div class="card-body">
                  <h6>Description</h6>
                  <p>${item.description}</p>
                  <p>${item.location}<span><i class="fa-solid fa-location-dot"></i></span></p>
                    <span>${item.price}</span>
                    <span>${item.bedrooms}</span><i class="fa-solid fa-bed"></i>
                    <span>${item.toilet}</span><i class="fa-solid fa-toilet"></i>
                </div>
            </div>
        `
    });
}

readData();

 
