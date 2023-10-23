const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://static.wikia.nocookie.net/a4b09200-0f00-4a9e-b14e-837194bbc8b7/scale-to-width/755",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiE1nLIr_CnzQKhTcteLj1Rxv0nw6ABrGa0w&usqp=CAU"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://i.chzbgr.com/full/9423395072/hFA0FD9ED/cat"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://advancedpetvet.com/wp-content/uploads/2020/12/Cat3.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://preview.redd.it/all-cats-normally-this-goofy-v0-qfpvsx7qm1fb1.jpg?auto=webp&s=9e19ed370a1c9f769de8b0dfea35480f2979a6a7"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i.pinimg.com/736x/1b/fc/e9/1bfce97a85aecdd0c0a0cd48348c15ef.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://images.squarespace-cdn.com/content/v1/580c1c8e29687f5fbc4ec161/1694201639399-2RW281YJGJCGFAF2LCN5/IMG_8043.jpg?format=750w"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "http://dailynewsdig.com/wp-content/uploads/2014/03/Creative-And-Funny-Dog-Stock-Photography-Pictures-2.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://img.freepik.com/free-photo/beautiful-cat-portrait-close-up_23-2149152051.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://img.freepik.com/free-photo/cute-kitten-staring-out-window-playful-curiosity-generative-ai_188544-12520.jpg?size=626&ext=jpg&ga=GA1.1.1256453183.1697914567&semt=ais"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://img.freepik.com/premium-photo/close-up-birman-licking_191971-4576.jpg?size=626&ext=jpg&ga=GA1.1.1256453183.1697914567&semt=ais"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://media1.popsugar-assets.com/files/thumbor/yDmG0ifN-I44d2uG4EIDwWg2yfE/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2018/08/21/616/n/24155406/a4387395142b050c_charles-deluvio-550068-unsplash/i/Cute-Photos-Dogs.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://img.freepik.com/premium-photo/portrait-scottish-fold-cat_43525-712.jpg?size=626&ext=jpg&ga=GA1.1.1256453183.1697914567&semt=ais"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSQ7pn9526Ikm6dnVbTrLFRZ78TS84xOhyKQ&usqp=CAU"
    }
  ];


 
  const appDiv= document.querySelector("#app")
 
 


//////////////////////


 const renderToDom = (pets) => {
  let domString = "";

 for( let i = 0; i < pets.length; i++) {
    domString +=  ` <div class="card border-success mb-3" style="max-width: 18rem;">
    <div class="card-header bg-transparent border-success">${pets[i].name}</div>
    <div class="card-body text-success">
      <img src="${pets[i].imageUrl}" alt="...">
      <h5 class="card-title">${pets[i].color}</h5>
      <p class="card-text">${pets[i].specialSkill}</p>
      <button type="delete" id="delete" class="btn btn-outline-submit">delete</button>
   </div>
    <div class="card-footer bg-transparent border-success">${pets[i].type}</div>
   </div>
   `
  }

  appDiv.innerHTML = domString





}

renderToDom(pets)
    
const catButton = document.querySelector("#cats");
const dogButton = document.querySelector("#dogs");
const dinoButton = document.querySelector("#dinos");
const showAllButton = document.querySelector("#showAll");

const filter = (pets, type) => {
    let newPetArray = []

    for (pet of pets) {
      if (pet.type === type ) {
        
        newPetArray.push(pet)
      }

      
    }

    renderToDom(newPetArray)
}

// create an event listener for when the cat button is clicked

catButton.addEventListener("click", () => {
     filter (pets, "cat");
    renderToDom(newPetArray);
})

dogButton.addEventListener("click", () => {
  filter (pets, "dog");
 renderToDom(newPetArray);
})

dinoButton.addEventListener("click", () => {
  filter (pets, "dino");
 renderToDom(newPetArray);
})

showAllButton.addEventListener("click", () => {
 
 renderToDom(pets);
})

///////create  submit button//////



const form = document.querySelector("form");


const createPet = (event) => {
  event.preventDefault();

  const newPetObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#imageUrl").value

  }
console.log(newPetObj.name)
  pets.push(newPetObj);
  renderToDom(pets);
  form.reset();
}

form.addEventListener("submit", createPet);
// Create a form that allows a user to add pets with a submit button
//When the submit button is pressed, the pet is added to the array and the DOM rerenders adding the new pet on the DOM.

const app = document.querySelector ("#app");

app.addEventListener ("click", (event) => {
    if (event.target.id.includes("delete")) {
      const [, id] = event.target.id.split("--");
      const index = pets.findIndex(event => event.id === Number(id));

      pets.splice(index, 1);

      renderToDom(pets);
    }

} );

const startApp = () => {
  renderToDom(pets);

}

startApp();

 
   
