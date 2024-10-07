
let apiURL="https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json";//url
let arr=[];
 fetch(apiURL).then(response=>
    {
        return response.json();}
).then(data=>{
   console.log(data);
   const result=data.Results;
   console.log(result);

   result.forEach(element => {
        arr.push({name:element.MakeName,type:element.VehicleTypeName})
   });
   
    arr.forEach(e=>{
        console.log(e);
    })

    addHtmlCode();
})

function addHtmlCode() {
    const container = document.getElementById('CarsContainer');
    
    container.innerHTML = '';
  
    arr.forEach(e => {
      const CarDiv = document.createElement('div');
      CarDiv.classList.add('Car');
  
      CarDiv.innerHTML = `
        <h3>CAr Name: ${e.name}</h3>
        <p>Car Type: ${e.type}</p>
      `;
      container.appendChild(CarDiv);
    });
  }

