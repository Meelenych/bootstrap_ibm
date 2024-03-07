// JavaScript to show alert messages on button click

document.getElementById('successBtn').addEventListener('click', function () {
	document.getElementById('successAlert').style.display = 'block';
});

document.getElementById('warningBtn').addEventListener('click', function () {
	document.getElementById('warningAlert').style.display = 'block';
});

document.getElementById('dangerBtn').addEventListener('click', function () {
	document.getElementById('dangerAlert').style.display = 'block';
});
