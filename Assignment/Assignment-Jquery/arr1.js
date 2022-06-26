

    
    $(()=>{

        let x = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    
        const msg = $("#wh");
  
        function printOddElemens() {
          let content = "";
          x.forEach((value, ind) => {
            if (ind % 2 !== 0) {
              content += value + " ";
            }
          });
          return content;
        }
  
        
          const t1 = $("#t1");
            t1.blur(() => {
          
          let numberGiven = t1.val();
          numberGiven = parseInt(numberGiven);
          let found = x.includes(numberGiven);
          console.log(found);
          
          if (found) {
            $("#add").prop("disabled",true);
            $("#edit").prop("disabled",false);
            $("#delete").prop("disabled",false);
            $("#viewall").prop("disabled",true);
            $("#viewOddPositions").prop("disabled",true);
            msg.text(" Number is already present");
          } else {
            $("#add").prop("disabled",false);
            $("#edit").prop("disabled",true);
            $("#delete").prop("disabled",true);
            msg.text("Number is not present, you can add this number by using add");
          }
        });
       
          $("#add").click(() => {
          let numberGiven = $("#t1").val();
          numberGiven = parseInt(numberGiven);
          if (!isNaN(numberGiven)){
            x.push(numberGiven);
            console.log(numberGiven +" added to array");
            $("#edit").prop("disabled",true);
            $("#delete").prop("disabled",true);
            $("#add").prop("disabled",true);
            $("#viewall").prop("disabled",false);
            $("#viewOddPositions").prop("disabled",false);
            console.log(x);
            msg.text( "Number is added to array");
          } else {
            msg.text("You can not add anything other than number");
          }
        });
           
          $("#edit").click(() => {
          let oldNumber = $("#t1").val();
          oldNumber = parseInt(oldNumber);
          let index = x.indexOf(oldNumber);
          let newNumber = prompt("Enter New Number");
          newNumber = parseInt(newNumber);
          let found = x.includes(newNumber);
          if (!found) {
            x[index] = newNumber;
            console.log(newNumber + " added to array at index " + index);
            console.log(x);
            $("#t1").val("");
            $("#edit").prop("disabled",true);
            $("#delete").prop("disabled",true);
            $("#viewall").prop("disabled",false);
            $("#viewOddPositions").prop("disabled",false);
            $("#wh").text(newNumber + " added to array at index " + index);
          }
        });

        const delet = $("#delete");
        delet.click(() => {
          let numberToDelete = $("#t1").val();
          numberToDelete = parseInt(numberToDelete);
          let found = x.includes(numberToDelete);
          if (found) {
            let index = x.indexOf(numberToDelete);
            delete x[index];
            console.log(numberToDelete + " is deleted");
            console.log(x);
            $("#wh").text(numberToDelete +
              " deleted from the array from index " +
              index +
              " and elemt at index " +
              index +
              " is " +
              x[index]);
            $("#edit").prop("disabled",true);
            $("#delete").prop("disabled",true);
            $("#viewall").prop("disabled",false);
            $("#viewOddPositions").prop("disabled",false);
          } else {
            msg.text( "Number not found in the array");
            $("#add").prop(disabled , false);
          }
        });
        
        const viewall =$("#viewall");
        viewall.click(() => {
          let display = x.toString();
          $("#y").text(display);
        });
        
        const viewOddPositions =$("#viewOddPositions");
        viewOddPositions.click(oddFunc);
        function oddFunc(value, index) {
          let output = printOddElemens();
          $("#y").text(output);
          console.log(index + " odd called");
        }
      })
  