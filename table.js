    var table = document.getElementById("myTable");

    function tableData()
    {
		   var fname = document.getElementById("fname").value;
        var lname = document.getElementById("lname").value;
	    var row = table.insertRow(1);
	    var cell1 = row.insertCell(0);
	    var cell2 = row.insertCell(1);
	    
	    cell1.innerHTML = fname;
	    cell2.innerHTML = lname;
	    
	}