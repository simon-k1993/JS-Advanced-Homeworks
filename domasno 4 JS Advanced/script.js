let clickMe = document.getElementById("btn");

clickMe.addEventListener("click", function () {
  clickMe.style.display = "none";
  fetch("https://swapi.dev/api/planets/?page=1")
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log("Data:", data);

      let table = "";
      data.results.map((values) => {
        table += `<tr>
            <td>${values.name}</td>
            <td>${values.population}</td>
            <td>${values.climate}</td>
            <td>${values.gravity}</td>
        </tr>`;
      });

      document.getElementById("tb").innerHTML = table;
    })
    .catch(function (err) {
      console.log("Error:", err);
    });

  let nextButton = document.createElement("button");

  let buttonContainer = document.getElementById("nextBtn");
  buttonContainer.appendChild(nextButton);
  nextButton.innerText = "Next 10 Planets";

  let a = 0;

  nextButton.addEventListener("click", () => {
    if (a === 0) {
      fetch("https://swapi.dev/api/planets/?page=2")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log("Data:", data);

          let table = "";
          data.results.map((values) => {
            table += `<tr>
                <td>${values.name}</td>
                <td>${values.population}</td>
                <td>${values.climate}</td>
                <td>${values.gravity}</td>
            </tr>`;
          });
          document.getElementById("tb").innerHTML = table;
        })
        .catch(function (err) {
          console.log("Error:", err);
        });

      nextButton.innerText = "Previous 10 Planets";

      a = 1;
    } else if (a === 1) {
      fetch("https://swapi.dev/api/planets/?page=1")
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          console.log("Data:", data);

          let table = "";
          data.results.map((values) => {
            table += `<tr>
                <td>${values.name}</td>
                <td>${values.population}</td>
                <td>${values.climate}</td>
                <td>${values.gravity}</td>
            </tr>`;
          });
          document.getElementById("tb").innerHTML = table;
        })
        .catch(function (err) {
          console.log("Error:", err);
        });

      nextButton.innerText = "Next 10 Planets";

      a = 0;
    }
  });
});
