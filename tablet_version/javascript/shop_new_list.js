
  function addRow(tableID) {

    var table = document.getElementById(tableID);

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);

    var colCount = table.rows[0].cells.length;

    for(var i=0; i<colCount; i++) {

      var newcell	= row.insertCell(i);

      newcell.innerHTML = table.tBodies[0].rows[0].cells[i].innerHTML;
      //alert(newcell.childNodes);
      switch(newcell.childNodes[0].type) {
        case "text":
            newcell.childNodes[0].value = " ";
            break;
        case "checkbox":
						newcell.childNodes[0].checked = false;
						break;
        case "select-one":
            newcell.childNodes[0].selectedIndex = 0;
            break;
      }
    }
  }

  function deleteRow(tableID) {
			try {
			var table = document.getElementById(tableID);
			var rowCount = table.rows.length;

			for(var i=0; i<rowCount; i++) {
				var row = table.rows[i];
				var chkbox = row.cells[0].childNodes[0];
				if(null != chkbox && true == chkbox.checked) {
					if(rowCount <= 2) {
						alert("Cannot delete all the rows.");
						break;
					}
					table.deleteRow(i);
					rowCount--;
					i--;
				}


			}
			}catch(e) {
				alert(e);
			}
		}

  function save(){
    alert("Your list has been saved! (Not really in the protype)");
  }

  function no_lists(){
    alert("You have no lists for this store!");
  }

  function not_my_store(){
    alert("This store is not listed as one of your stores. Add this store before creating a list!");
  }

  function website(link){
    alert("Would open link: " + link)
  }
