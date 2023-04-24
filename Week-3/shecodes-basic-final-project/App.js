document.querySelector('.btn').addEventListener('click', function () {
    let name = prompt('What is your name?');
	if (name.length) {
		alert('Thanks, ' + name + ' , we will be in touch. Meanwhile, have a lot of Dark Chocolate!')
	} else {
		alert('No name, no Dark Chocolate for you!')
			}
		});