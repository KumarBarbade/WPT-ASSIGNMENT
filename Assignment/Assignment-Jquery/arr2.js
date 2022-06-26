


    $( () => {
        let addorUpdateorDeletedone = false;
      
        let x = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
        
      
        function getArrayContentsFromOdd() {
          let contents = "";
          for (let i = 0; i < x.length; i++) {
            if (i % 2 != 0) contents += " " + x[i];
          }
          return contents;
        }
      
        function getArrayContents() {
          let contents = "";
          for (let i = 0; i < x.length; i++) {
            contents += " " + x[i];
          }
          return contents;
        }
      
        function updateArray(numberGiven, replacemenetNumber) {
          let updated = false;
          if (!checkNumberinArray(replacemenetNumber)) {
            for (let i = 0; i < x.length; i++) {
              if (x[i] == numberGiven) {
                x[i] = replacemenetNumber;
                updated = true;
                break;
              }
            }
          }
      
          return updated;
        }
      
        function addtoArray(numbergiven) {
          let added = true;
          x.push(numbergiven);
          return added;
        }
      
        function removeFromArray(numberGiven) {
          let removed = false;
          let index = -1;
          for (let i = 0; i < x.length; i++) {
            if (x[i] == numberGiven) {
              index = i;
              break;
            }
          }
          if (index >= 0) {
            x.splice(index, 1); 
            
            removed = true;
          }
          return removed;
        }
      
        function checkNumberinArray(numbertoCheck) {
          let found = false;
         
          for (let i = 0; i < x.length; i++) {
            if (x[i] == numbertoCheck) {
              found = true;
              break;
            }
          }
          return found;
        }
        
     
        $("#t1").blur(() => {
          let numberGiven = $("#t1").val();
          let found = checkNumberinArray(numberGiven);
          if (!found){
            $("#add").prop("disabled",false);
            $("#edit").prop("disabled",true);
            $("#delete").prop("disabled",true);
            $("#viewall").prop("disabled",true);
            $("#viewoddposition").prop("disabled",true);
      
            $("#wh").text("number is new to be added")
          } else {
            $("#wh").text( "number aleady present");
            $("#add").prop("disabled", true);
            $("#edit").prop("disabled",false);
            $("#delete").prop("disabled",false);
            $("#viewall").prop("disabled",true);
            $("#viewoddposition").prop("disabled",true);
          }
      
          if (addorUpdateorDeletedone) {
            $("#viewall").prop("disabled",false);
            $("#viewoddposition").prop("disabled",false);
          }
        });
      
        $("#add").click( () => {
          addorUpdateorDeletedone = true;
      
          let numberGiven = $("#t1").val();
          let output = addtoArray(numberGiven); 
      
          if (output) $("#wh").text("number added");
          else $("#wh").text("number not added");
      
          $("#add").prop("disabled",true);
          $("#edit").prop("disabled",true);
          $("#delete").prop("disabled",true);
          $("#viewall").prop("disabled",true);
          $("#viewoddposition").prop("disabled",true);;
      
          if (addorUpdateorDeletedone) {
            $("#viewall").prop("disabled",false);
            $("#viewoddposition").prop("disabled",false);
          }
        }); 
      
        $("#delete").click(() => {
          console.log("delte function getting called");
          addorUpdateorDeletedone = true;
      
          let numberGiven = document.querySelector("#t1").value;
          let output = removeFromArray(numberGiven);
          if (output) $("#wh").text("number removed");
          else $("#wh").text("number not found");
      
          $("#add").prop("disabled",true);
          $("#edit").prop("disabled",true);
          $("#delete").prop("disabled",true);
          $("#viewall").prop("disabled",true);
          $("#viewoddposition").prop("disabled",true);
      
          if (addorUpdateorDeletedone) {
            $("#viewall").prop("disabled",false);
            $("#viewoddposition").prop("disabled",false);
          }
        }); 
      
        $("#edit").click(() => {
          console.log("modify is it working");
          addorUpdateorDeletedone = true;
          let numberGiven =$("#t1").val();
          let replacemenetNumber = window.prompt("enter new number"); 
          let output = updateArray(numberGiven, replacemenetNumber);
          if (output) $("#wh").text("number modified");
          else $("#wh").text("number not modified");
      
          $("#add").prop("disabled" , true);
          $("#edit").prop("disabled" , true);
          $("#delete").prop("disabled" , true);
          document.querySelector("#viewall").prop("disabled" , true);
          $("#viewoddposition").prop("disabled" , true);
      
          if (addorUpdateorDeletedone) {
            $("#viewall").prop("disabled",false);
            $("#viewoddposition").prop("disabled",false);
          }
        }); 
      
        $("#viewall").click(() => {
          console.log("view all event handling");
          let output = getArrayContents();
      
          $("#scontents").text(output);
        });
      
        $("#viewoddposition").click(() => {
          console.log("view odd position event handling");
          let output = getArrayContentsFromOdd();
      
          $("#scontents").text(output);
        });
      });