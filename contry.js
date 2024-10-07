let apiURL="https://restcountries.com/v3.1/all";//url
let arr=[];
 fetch(apiURL).then(response=>
    {
        return response.json();}
).then(data=>{
   console.log(data);
   const result=data;
   console.log(result);

   result.forEach(element => {
        arr.push({name:element.name.common,img:element.flags.png})
   });
   
    arr.forEach(e=>{
        console.log(e);
    })

    addHtmlCode();
})

function addHtmlCode() {
    const container = document.getElementById('CountriesContainer');
    
    container.innerHTML = '';
  
    arr.forEach(e => {
      const CountryDiv = document.createElement('div');
      CountryDiv.classList.add('country');
  
      CountryDiv.innerHTML = `
        <h3 class="cName">Country Name: ${e.name}</h3>
        <img src="${e.img}" alt="" width="300px" height="100px">
      `;
      container.appendChild(CountryDiv);
    });
  }

