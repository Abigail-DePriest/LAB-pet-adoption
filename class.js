const pies = [{
  id: 1
  name: "Buttermilk Pie",
  crustType: "Graham cracker crust",
  filling: "buttermilk",
  slices: 20,
  bakeTemp: 350
  vegan: false,
  bakeTemp: 400

}]

const app= document.querySelector("#app")
const deletePie = (event) => {
  console.log(event)

  if(event.target.id.includes("delete")) {
    //do our delete logic
    //target is a property
    //id is a property nested into target, id = "delete"--"3"
    // determine which object I'm deleting by the id
    const [, id]= event.target.id.split("--")
    // Identify where in the array that object is
    const index = pies.findIndex(obj => obj.id === Number (id))
    // remove the object from the array
    pies.splice(index, 1)
    // re-render with the array
    renderToDom(pies)
  }
 
}

app.addEventListener("click", deletePie)

const renderToDom = (array) => {
  let domString = ""
    array.forEach( (object) => ) {

      domString+= `<div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
       <h5 class="card-title"> ${object.name}</h5>
        <p class="card-text"> ${object.bakeTemp}</p>
       <a href="#" class="btn btn-primary">Go somewhere</a>
       <button class="btn btn-danger" id="delete--${object.id}">Delete</button>
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

 

 veganButton.addEventListener("click", filter)

 const form = document.querySelector("form")
const createPie = (event)  => {
  e.preventDefault()

  console.log(event)

  const newPieObj = {
    id: pies.length + 1,
    name: document.querySelector("#pieName").value
    filling: document.querySelector("#pieFIlling").value
    vegan: document.querySelector("#isVegan").isChecked
    bakeTemp: document.querySelector("#pieTemp"),
  }

  pies.push(newPieObj)
  renderToDom(pies)
  form.reset()

}
 form.addEventListener("submit", )
