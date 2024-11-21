
      //Square function
      function squares(start, end) {
        document.querySelector(".js-output").innerHTML = "";
        const squareArray = [];
        for (let i = start; i <= end; i++) {
          let result = `<p class="output__para"> ${i} <sup>2</sup> = ${
            i * i
          }</p> `;
          //saving para in array.
          squareArray.push(result);
        }
        //clearing output before using
        //reading each value of array
        squareArray.forEach(function (value) {
          //appending each para with another
          document.querySelector(".js-output").innerHTML += value;
        });
      }
      //Cube function
      function cubes(start, end) {
        //clearing output before generating
        document.querySelector(".js-output").innerHTML = "";
        //array for storing paragraphs
        const cubeArray = [];
        for (let i = start; i <= end; i++) {
          //Cube calculation
          let result = `<p class="output__para"> ${i} <sup>3</sup> = ${
            i * i * i
          }</p>`;
          //saving paragraph into array
          cubeArray.push(result);
        }
        //Reading each paragraph
        cubeArray.forEach(function (value) {
          document.querySelector(".js-output").innerHTML += value;
        });
      }

      //Generate custom table

      function custom() {
        let selectValue = document.querySelector(".js-select").value;
        let startNum = Number(document.querySelector(".js-input-start").value);
        let endNum = Number(document.querySelector(".js-input-end").value);
        document.querySelector(".js-output").innerHTML = `<p>Loading...</p>`;
        setTimeout(() => {
          if (selectValue === "square") {
            squares(startNum, endNum);
          } else {
            cubes(startNum, endNum);
          }
          window.location.href = "#output";
        }, 3000);
      }