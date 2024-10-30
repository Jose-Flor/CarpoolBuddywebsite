document.addEventListener('DOMContentLoaded', () => {
  const text = document.getElementById('text');
  const leaf = document.getElementById('leaf');
  const hill1 = document.getElementById('hill1');
  const hill4 = document.getElementById('hill4');
  const hill5 = document.getElementById('hill5');

  window.addEventListener('scroll', () => {
    const value = window.scrollY;

    text.style.marginTop = `${value * 2.5}px`;
    leaf.style.top = `${value * -1.5}px`;
    leaf.style.left = `${value * 1.5}px`;
    hill5.style.left = `${value * 1.5}px`;
    hill4.style.left = `${value * -1.5}px`;
    hill1.style.top = `${value}px`;
  });
});


    //driver list
const driverListContainer = document.getElementById('driverList');

function createDriverGrid(drivers) {
  
  driverListContainer.innerHTML = '';

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
    scheduleText.innerText = `Schedule: ${driver.Schedule ? new Date(driver.Schedule).toLocaleString() : 'Not scheduled'}`;

    const licenseText = document.createElement('div');
    licenseText.classList.add('details');
    licenseText.innerText = `License: ${driver.licensePlate}`;

    const image = document.createElement('img');
    image.src = driver.imageUri;
    image.classList.add('image');

    innerContainer.appendChild(nameText);
    innerContainer.appendChild(scheduleText);
    innerContainer.appendChild(licenseText);
    innerContainer.appendChild(image);

    gridItem.appendChild(innerContainer);
    driverListContainer.appendChild(gridItem);
  });
}


createDriverGrid(drivers);
