const pies = [{
  name: "Buttermilk Pie",
  crustType: "Graham cracker crust",
  filling: "buttermilk",
  slices: 20,
  numberOfEggs: 3
  vegan: false,
  bakeTemp: 400

}]

const app = document.querySelector("#app")

let domString = ""

for (pie of pies) {
  domString += `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title"> ${pie.name}</h5>
  <p class="card-text"> ${pie.numberOfEggs}</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
 }

  app.innerHTML = domString
