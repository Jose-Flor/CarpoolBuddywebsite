const driverListContainer = document.getElementById('driverList');

function createDriverGrid(drivers, numCopies) {
    driverListContainer.innerHTML = '';

    for (let i = 0; i < numCopies; i++) {
        drivers.forEach(driver => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('gridItem');

            const innerContainer = document.createElement('div');
            innerContainer.classList.add('innerContainer');

            const nameText = document.createElement('div');
            nameText.classList.add('Namesid');
            nameText.innerText = `${driver.firstName} ${driver.lastName}`;

            const scheduleText = document.createElement('div');
            scheduleText.classList.add('details');
            scheduleText.innerText = `Days: ${driver.days.join(', ')}`;

            const zipCodeText = document.createElement('div');
            zipCodeText.classList.add('details');
            zipCodeText.innerText = `Zip Code: ${driver.zipCode}`;

            const image = document.createElement('img');
            image.src = driver.imageUri;
            image.classList.add('image');
            image.style.width = '125px'; // Set the width of the image
            image.style.height = '100px'; // Set the height of the image


            innerContainer.appendChild(nameText);
            innerContainer.appendChild(scheduleText);
            innerContainer.appendChild(zipCodeText);
            innerContainer.appendChild(image);

            gridItem.appendChild(innerContainer);
            driverListContainer.appendChild(gridItem);
        });
    }
}

const drivers = [
    {
        firstName: 'John',
        lastName: 'Doe',
        days: ['Monday', 'Wednesday', 'Friday'],
        zipCode: '12345',
        imageUri: 'Images/Driver3.jpeg'
    },
    {
        firstName: 'Alice',
        lastName: 'Smith',
        days: ['Tuesday', 'Thursday'],
        zipCode: '54321',
        imageUri: 'Images/emily_anderson_image.jpg'
    },
    {
        firstName: 'Jose',
        lastName: 'Flores',
        days: ['Monday', 'Wednesday', 'Friday'],
        zipCode: '67890',
        imageUri: 'Images/Driver4.jpeg'
    },
    {
        firstName: 'Abigail',
        lastName: 'Macias',
        days: ['Monday', 'Tuesday', 'Wednesday'],
        zipCode: '98765',
        imageUri: 'Images/samantha_miller_image.jpg'
    },
    {
        firstName: 'David',
        lastName: 'Garcia',
        days: ['Wednesday', 'Thursday', 'Friday'],
        zipCode: '54321',
        imageUri: 'Images/222.jpeg'
    },
    {
        firstName: 'Ali',
        lastName: 'Wilson',
        days: ['Tuesday', 'Thursday'],
        zipCode: '12345',
        imageUri: 'Images/Driver.jpeg'
    },
    {
        firstName: 'Ali',
        lastName: 'Martinez',
        days: ['Monday', 'Tuesday', 'Wednesday'],
        zipCode: '67890',
        imageUri: 'Images/Driver.jpeg'
    },
    {
        firstName: 'Ella',
        lastName: 'Taylor',
        days: ['Thursday', 'Friday'],
        zipCode: '98765',
        imageUri: 'Images/Driver8.jpg'
    },
    {
        firstName: 'Nikki',
        lastName: 'Anderson',
        days: ['Monday', 'Tuesday', 'Friday'],
        zipCode: '54321',
        imageUri: 'Images/Driver9.jpg'
    }
];


const numCopies = 1; // Number of copies of the grid items
createDriverGrid(drivers, numCopies);
