const salon = {
    name: 'Fashion Pets',
    phone: '123-456-7890',
    address: {
        street: 'W 5th Ave',
        number: '25-A',
    },
    workingHours: {
        open: '8:00 am',
        close: '5:00 pm'
    },
    pets: []
    // numberOfPets: function () {
    //     document.getElementById('info').innerHTML += `<h2>Number of pets in the salon: ${salon.pets.length}</h2>`;
    // },
    // printAllPets: function () {
    //     for (let i = 0; i < salon.pets.length; i++) {
    //         const element = salon.pets[i];
    //         document.getElementById('info').innerHTML += `<h2>${element.name}</h2>`;
    //     }
    // }
};

let {
    address: {
        street,
        number
    },
    workingHours: {
        open,
        close
    },
    name,
    phone,
    pets
} = salon;

// document.getElementById('info').innerHTML = `<h2>${name} (${phone}), ${street} ${number} <br> Open from ${open} to ${close}</h2>`;

var petId = 0;

function Pet(name, age, service, ownerName, contactPhone) {
    // creating pet id
    this.id = 'pet' + petId;
    petId++;

    this.hunger = 10;
    this.happiness = 5;
    this.name = name;
    this.age = age;
    this.ownerName = ownerName;
    this.contactPhone = contactPhone;
    this.service = service;
    this.feed = function () {
        this.hunger -= 10;
        this.happiness += 10;
    };
    this.status = function () {
        console.log(this.name + ' hunger level: ' + this.hunger + ' and happiness level is: ' + this.happiness);
    };
    this.ownerContact = function () {
        console.log('Owner Name: ' + this.ownerName + '\n' + 'Phone: ' + this.contactPhone);
    }
}

function registerPet() {
    var txtname = document.getElementById('petName');
    var txtage = document.getElementById('petAge');
    var txtservices = document.getElementById('services');
    var txtownerName = document.getElementById('ownerName');
    var txtowerPhone = document.getElementById('ownerPhone');
    var age = parseInt(txtage.value);

    var thePet = new Pet(txtname.value, age, txtservices.value, txtownerName.value, txtowerPhone.value);

    salon.pets.push(thePet);
    alert(`You have ${salon.pets.length} pets currently registered.`);

    display(salon.pets);

    eraseForm();
}

function display(aPet) {
    var list = document.getElementById('petList');
    // var listItems = document.createElement('li');

    // listItems.innerText = `${aPet.id} --- ${aPet.name} --- ${aPet.service}`;
    // listItems.classList.add('petList');
    // list.appendChild(listItems);

    var petListItems = aPet.map(pet => {
        return `<tr><th scope="row">${pet.id}</th><td>${pet.name}</td><td>${pet.service}</td></tr>`;
    });

    var petTable = `<table class="table table-hover table-dark"><thead><tr><th scope="col">ID #</th><th scope="col">Pet Name</th><th scope="col">Pet Service</th></tr></thead><tbody>${petListItems}</tbody></table>`;

    list.innerHTML = petTable;
}

function eraseForm() {
    document.getElementById('petName').value = '';
    document.getElementById('petAge').value = '';
    document.getElementById('services').value = '';
    document.getElementById('ownerName').value = '';
    document.getElementById('ownerPhone').value = '';
}

const zoey = new Pet('Zoey', 2, 'Shower', 'Travis', '123-456-7890');
const janis = new Pet('Janis', 2, 'Hair Cut', 'Sabrina', '321-474-4534');
const ozzy = new Pet('Ozzy', 6, 'Shower', 'Yair', '232-567-2121');

pets.push(zoey, janis, ozzy);

zoey.feed();
zoey.feed();
zoey.status();
zoey.ownerContact();

console.table(pets);

// salon.numberOfPets();

// salon.printAllPets();