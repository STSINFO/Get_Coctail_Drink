// on click
document.querySelector("button").addEventListener("click", getDrink);

function getDrink() {
  // get input from the user
  const drink = document.querySelector("input").value;

  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      document.querySelector("p").innerText = data.drinks[0].strInstructions;
      document.querySelector("img").src = data.drinks[0].strDrinkThumb;
    })
    .catch((err) => console.log(err));
}
