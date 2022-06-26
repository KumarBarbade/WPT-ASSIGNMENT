
console.log(NaN==NaN)
console.log(NaN===NaN)
console.log(NaN!=NaN)
console.log(NaN!==NaN)

    
        let x = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  
        const msg = document.getElementById("wh");
  
        function printOddElemens() {
          let content = "";
          x.forEach((value, ind) => {
            if (ind % 2 !== 0) {
              content += value + " ";
            }
          });
          return content;
        }
  
        
        const t1 = document.querySelector("#t1");
        t1.addEventListener("blur", () => {
          
          let numberGiven = document.getElementById("t1").value;
          numberGiven = parseInt(numberGiven);
          let found = x.includes(numberGiven);
          console.log(found);
          
          if (found) {
            document.querySelector("#add").disabled = true;
            document.querySelector("#edit").disabled = false;
            document.querySelector("#delete").disabled = false;
            document.querySelector("#viewall").disabled = true;
            document.querySelector("#viewOddPositions").disabled = true;
            msg.innerText = " Number is already present";
          } else {
            document.querySelector("#add").disabled = false;
            document.querySelector("#edit").disabled = true;
            document.querySelector("#delete").disabled = true;
            msg.innerText =
              "Number is not present, you can add this number by using add";
          }
        });
        
                const add = document.querySelector("#add");
        add.addEventListener("click", () => {
          let numberGiven = document.getElementById("t1").value;
          numberGiven = parseInt(numberGiven);
          if (!isNaN(numberGiven)){
            x.push(numberGiven);
            console.log(numberGiven + " added to array");
            document.querySelector("#edit").disabled = true;
            document.querySelector("#delete").disabled = true;
            document.querySelector("#add").disabled = true;
            document.querySelector("#viewall").disabled = false;
            document.querySelector("#viewOddPositions").disabled = false;
            console.log(x);
            msg.innerText = "Number is added to array";
          } else {
            msg.innerText = "You can not add anything other than number";
          }
        });
          
  
        const edit = document.querySelector("#edit");
        edit.addEventListener("click", () => {
          let oldNumber = document.querySelector("#t1").value;
          oldNumber = parseInt(oldNumber);
          let index = x.indexOf(oldNumber);
          let newNumber = prompt("Enter New Number");
          newNumber = parseInt(newNumber);
          let found = x.includes(newNumber);
          if (!found) {
            x[index] = newNumber;
            console.log(newNumber + " added to array at index " + index);
            console.log(x);
            document.getElementById("t1").value = "";
            document.querySelector("#edit").disabled = true;
            document.querySelector("#delete").disabled = true;
            document.querySelector("#viewall").disabled = false;
            document.querySelector("#viewOddPositions").disabled = false;
            document.getElementById("wh").innerText =
              newNumber + " added to array at index " + index;
          }
        });
          
        const delet = document.querySelector("#delete");
        delet.addEventListener("click", () => {
          let numberToDelete = document.getElementById("t1").value;
          numberToDelete = parseInt(numberToDelete);
          let found = x.includes(numberToDelete);
          if (found) {
            let index = x.indexOf(numberToDelete);
            delete x[index];
            console.log(numberToDelete + " is deleted");
            console.log(x);
            document.getElementById("wh").innerText =
              numberToDelete +
              " deleted from the array from index " +
              index +
              " and elemt at index " +
              index +
              " is " +
              x[index];
            document.querySelector("#edit").disabled = true;
            document.querySelector("#delete").disabled = true;
            document.querySelector("#viewall").disabled = false;
            document.querySelector("#viewOddPositions").disabled = false;
          } else {
            msg.innerText = "Number not found in the array";
            document.querySelector("#add").disabled = false;
          }
        });
        
        const viewall = document.querySelector("#viewall");
        viewall.addEventListener("click", () => {
          var dis = x.toString();
          document.getElementById("y").innerText = dis;
        });
  
       
        const viewOddPositions = document.querySelector("#viewOddPositions");
        viewOddPositions.addEventListener("click", oddFunc);
  
        function oddFunc(value, index) {
          let output = printOddElemens();
          document.getElementById("y").innerText = output;
          console.log(index + " odd called");
        }

