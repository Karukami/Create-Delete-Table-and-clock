function MainFunction() {
	console.log("MainFunction is running!");
	ShowDateTime();
	var clock = setInterval(ShowDateTime, 1000);
}

/*--------------------*/
/* SHOW DATE AND TIME */
/*--------------------*/
	//Prints the current date
	//Ex. Today is Wednesday, August 14, 2019
	function ShowDateTime() {
		var date = new Date();
		var time = Date().slice(15, 24);
		var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var months = ["January", "February", "March", "April", 
					  "May", "June", "July", "August", "September",
					  "October", "November", "December"];
		document.getElementById("DateTimeParagraph").innerHTML = "Today is " + days[date.getDay()] + ", " + months[date.getMonth()]
																 + " " + date.getDate() + ", " + date.getFullYear() + "</br>" +
																 "Current time is: " + time;
	}

/*--------------*/
/* TABLE CREATE */
/*--------------*/
	//Adds a new row to the table with your data and gives it an ID
	function tableCreate() {
		var rowID = 0;
		var table = document.getElementById("myTable");
		var numberOfRows = table.rows.length;
		var row = table.insertRow();
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);

		for (var i = 1; i <= numberOfRows; i++) {
			console.log("Now checking row #" + i);
			console.log(table.rows[i].cells[0].innerHTML);
			if (table.rows[i].cells[0].innerHTML >= rowID) {
				rowID = Number(table.rows[i].cells[0].innerHTML) + 1;
			}
		}

		cell1.innerHTML = rowID;
		cell2.innerHTML = document.getElementById("inputNombre").value;
		cell3.setAttribute("onclick","tableDelete("+rowID+")");
		cell3.setAttribute("style","cursor: pointer");
		cell3.innerHTML = "X";
		Swal.fire(
	      'Added!',
	      'Your table has been updated.',
	      'success'
	    )
	}

/*--------------*/
/* TABLE DELETE */
/*--------------*/
	//Deletes a row from the table
	function tableDelete(id) {
		var table = document.getElementById("myTable");
		var row = table.rows.length + 1;
		console.log("The id provided is: " + id);
		console.log("The number of rows is: " + row);
		
		for (var i = 1; i <= row; i++) {
			console.log("Now checking row #" + i);
			console.log(table.rows[i].cells[0].innerHTML);
			if (table.rows[i].cells[0].innerHTML == id) {
				document.getElementById("myTable").deleteRow(i);
				break;
			}
		}
	}