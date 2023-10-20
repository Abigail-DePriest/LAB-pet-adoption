const pies = [{
  name: "Buttermilk Pie",
  crustType: "Graham cracker crust",
  filling: "buttermilk",
  slices: 20,
  numberOfEggs: 3
  vegan: false,
  bakeTemp: 400

}]

const renderToDom = (array) => {
  let domString = ""
    array.forEach( (object) => ) {

      domString+= `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title"> ${object.name}</h5>
        <p class="card-text"> ${object.numberOfEggs}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
      </div>`



    }

const app= document.querySelector("#app")
app.innerHTML = domString



}

renderToDom(pies)
    
const catButton = document.querySelector(#cats)
const filer = () => {
    let newPieArray = []

    for (pie of pies) {
      if (pie.vegan === true) {
        newPieArray.push(pie)
      }
    }

    renderToDom(veganPieArray)
}
catButton.addEventListener(eventType, function)


//let domString = ""

//for (pie of pies) {
 //domString += `<div class="card" style="width: 18rem;">
//<img src="..." class="card-img-top" alt="...">
//<div class="card-body">
 //<h5 class="card-title"> ${pie.name}</h5>
  //<p class="card-text"> ${pie.numberOfEggs}</p>
// <a href="#" class="btn btn-primary">Go somewhere</a>
//</div>
//</div>`
 //}

 // app.innerHTML = domString
