// JavaScript Document

/*
	Student Name: Jayden McGrath
	File Name: script.js
	Date:03/17/2022
*/

// Hamburger menu function
function hamburger() {
	var menu = document.getElementById("menu-links");
	var logo = document.getElementById("ffc-logo");
	if (menu.style.display === "block" && logo.style.display === "none") {
			// Run this code
		menu.style.display = "none";
		logo.style.display = "block";
		} else{
			// Run this code if one or both are FALSE
			menu.style.display = "block";
			logo.style.display = "none";
		}
}


