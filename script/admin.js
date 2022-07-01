let properties = JSON.parse(localStorage.getItem('properties'));

function showTable(){
    let admin = document.getElementById('admin');
    admin.innerHTML = ''
    properties.forEach((property,index) => {
        admin.innerHTML += `
            <tr>
                <td>${property.id}</td>
                <td>${property.description}</td>
                <td><img src="${property.image}" width='200px' height='100px'></td>
                <td>${property.location}</td>
                <td>${property.type}</td>
                <td>${property.bedrooms}</td>
                <td>${property.toilet}</td>
                <td>${property.price}</td>
                <td>
                    <a class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal${index}">
                    <i class="fa-solid fa-pen-to-square" onclick=diplaymodal()></i>
                    </a>
                    
                </td>
                <td><i class="fa-solid fa-trash-can" onclick="remove(${index})"></i></td>
            </tr>

                <!-- Modal -->
                <div class="modal fade" id="exampleModal${index}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit the Property</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                    <h6>Type of Property</h6>
                    <input value="${property.type}" id="pType${index}">
                    <h6>Type of Location</h6>
                    <input value="${property.location}" id="pLocation${index}">
                    <h6>Amount of Beds</h6>
                    <input value="${property.bedrooms}" id="pBedrooms${index}">
                    <h6>Amount of Toilets</h6>
                    <input value="${property.toilet}" id="pToilet${index}">
                    <h6>Property Price</h6>
                    <input value="${property.price}" id="pPrice${index}">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" data-bs-dismiss="modal" class="btn btn-primary" onclick="edit(${index})">Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
        `
    })
}
showTable();



function edit(id) {
    // UPDATE
    console.log("Im being clicked");
    // variables for edited values
    let pType = document.getElementById(`pType${id}`).value;
    let pLocation = document.getElementById(`pLocation${id}`).value;
    let pBedrooms = document.getElementById(`pBedrooms${id}`).value;
    let pToilet = document.getElementById(`pToilet${id}`).value;
    let pPrice = document.getElementById(`pPrice${id}`).value;
    // passing edited values into array
      properties[id].type = pType
      properties[id].location = pLocation
      properties[id].bedrooms = parseInt(pBedrooms)
      properties[id].toilet = parseInt(pToilet)
      properties[id].price = (pPrice)
    //   Save it to localStorage
      localStorage.setItem('property', JSON.stringify(properties));
    // Calling Function
    showTable();
};

function remove(id) {
    if (id > -1) {
        properties.splice(id, 1);
        // Apply the change
        localStorage.setItem('properties', JSON.stringify(properties));
    }
    for (i = 0; i < properties.length; i++) {
        properties[i].id = i + 1;
    }
    showTable   ();
};