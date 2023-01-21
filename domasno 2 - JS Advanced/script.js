let StarWarsButton = document.getElementById("btn");

StarWarsButton.addEventListener("click", function () {
  let characterName = document.createElement("h1");
  let container = document.getElementById("result2");

  container.appendChild(characterName);

  fetch("https://swapi.dev/api/people/1")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log("Data:", data);
      characterName.innerText = data.name;

      let myTable = document.getElementById("result");
      let table = document.createElement("table");

      let tableBody = document.createElement("tbody");

      table.appendChild(tableBody);

      let tr1 = document.createElement("tr");

      let td1 = document.createElement("td");
      let td1Text = document.createTextNode("Height");
      td1.appendChild(td1Text);
      tr1.appendChild(td1);

      let td2 = document.createElement("td");
      let td2Text = document.createTextNode("Birth Year");
      td2.appendChild(td2Text);
      tr1.appendChild(td2);

      let td3 = document.createElement("td");
      let td3Text = document.createTextNode("Eye Color");
      td3.appendChild(td3Text);
      tr1.appendChild(td3);

      let td4 = document.createElement("td");
      let td4Text = document.createTextNode("Hair Color");
      td4.appendChild(td4Text);
      tr1.appendChild(td4);

      tableBody.appendChild(tr1);

      let tr2 = document.createElement("tr");

      let height = document.createElement("td");
      let heightText = document.createTextNode(data.height);
      height.appendChild(heightText);
      tr2.appendChild(height);

      let birthYear = document.createElement("td");
      let birthYearText = document.createTextNode(data.birth_year);
      birthYear.appendChild(birthYearText);
      tr2.appendChild(birthYear);

      let eyeColor = document.createElement("td");
      let eyeColorText = document.createTextNode(data.eye_color);
      eyeColor.appendChild(eyeColorText);
      tr2.appendChild(eyeColor);

      let hairColor = document.createElement("td");
      let hairColorText = document.createTextNode(data.hair_color);
      hairColor.appendChild(hairColorText);
      tr2.appendChild(hairColor);

      tableBody.appendChild(tr2);
      myTable.appendChild(table);
    })
    .catch(function (err) {
      console.log("Error:", err);
    });
});
