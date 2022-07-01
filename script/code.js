let properties = 
[
        {
            id: 1,
            name: 'Apartment 1',
            image: '../images/Apartment1.jpg',
            description: 'Apartment',
            bedrooms: 1,
            location: '',
            price:'$1000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 2,
            name: '',
            image: '../images/Apartment2.jpg',
            description: 'Apartment',
            bedrooms: 1,
            location: '',
            price:'$2000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 3,
            name: '',
            image: '../images/Apartment3.jpg',
            description: 'Single Family Home',
            bedrooms: 3,
            location: '',
            price:'$5000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 4,
            name: '',
            image: '../images/Apartment4.jpg',
            description: 'Apartment',
            bedrooms: 1,
            location: '',
            price:'$3000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 5,
            name: '',
            image: '../images/Apartment5.jpg',
            description: 'Single Family Home',
            bedrooms: 2,
            location: '',
            price:'$2000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 6,
            name: '',
            image: '../images/Apartment6.jpg',
            description: 'Single Family Home',
            bedrooms: 3,
            location: '',
            price:'$4000' ,
            type: 'Single Family Home',
            toilet: 2
        },
        {
            id: 7,
            name: '',
            image: '../images/Apartment7.jpeg',
            description: 'Apartment',
            bedrooms: 1,
            location: '',
            price:'$2000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 8,
            name: '',
            image: '../images/Apartment8.jpg',
            description: 'Apartment',
            bedrooms: 1,
            location: '',
            price:'$3000' ,
            type: 'Apartment',
            toilet: 1
        },
        {
            id: 9,
            name: '',
            image: '../images/Apartment9.jpg',
            description: 'Single Family Home',
            bedrooms: 2,
            location: '',
            price:'$4000' ,
            type: 'Single Family Home',
            toilet: 2
        },
        {
            id: 10,
            name: '',
            image: '../images/Apartment10.jpg',
            description: 'Single Family Home',
            bedrooms: 3,
            location: '',
            price:'$5000' ,
            type: 'Single Family Home',
            toilet: 2
        }
    ];


function readData() {
    let container = document.querySelector('#row1');
    container.innerHTML = "";
    properties.forEach( (item, index)=> {
        container.innerHTML += `
            <div class="card" style="width: 250px;">
                <img src='${item.image}' class="card-img-top" alt="Apartment" width="200px" height="200px" onclick='myfunction(this).style.display='none'>
                <div class="card-body">
                  <h6>Description</h6>
                    <span></span>
                    <p class='lead'>${item.description}</p>
                    <span>${item.price}</span>
                    <span>${item.bedrooms}</span><i class="fa-solid fa-bed"></i>
                    <span>${item.toilet}</span><i class="fa-solid fa-toilet"></i>
                </div>
            </div>
            <div id="myModal" class="modal">
                    <span class="close">&times;</span>
                    <img class="modal-content" id="img01">
                    <div id="caption"></div>
            </div>
        `;
    });
}

// 
readData();

function myfunction(element){
    document.getElementsById('img01').scr = element.scr;
    document.getElementById('myModal').style.display = 'block';
}