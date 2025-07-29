function highlight() {
    //Write your code here
	const boldwords = document.querySelectorAll('strong');
	boldwords.forEach(element => {
		element.style.color = 'rgb(0, 128, 0)';
	});
}

function return_normal() {
    //Write your code here
	const boldWords = document.querySelectorAll('strong');
	boldWords.forEach(element => {
		element.style.color = 'rgb(0, 0, 0)';
	});  
}
