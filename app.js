const buttonAdd = document.getElementById('add')
const buttonEnd = document.getElementById('end')
const buttonDeleteAll = document.getElementById('delete-all')
const buttonDeleteEnd = document.getElementById('delete-end')

buttonAdd.addEventListener('click', () => {
	const text = document.getElementById('input').value
	 
	if (text !== '') {
		createElement(text)
	}
})

function createElement(value) {
	const list = document.getElementById('list')

	list.insertAdjacentHTML('afterbegin',
	`<li class="item"><span id="delete-item" style="cursor: pointer;">&#10006</span><input type="checkbox" class="checkbox" onclick="getCheckedCheckBoxes()" > ${value}</li>`
	)
}

buttonEnd.addEventListener('click', () => {
	const checkboxes = document.getElementsByClassName('checkbox')
	for (var index = 0; index < checkboxes.length; index++) {
		if (checkboxes[index].checked === false) {
			checkboxes[index].checked = !0
			getCheckedCheckBoxes()
		}
	}
})

function getCheckedCheckBoxes() {
  const checkboxes = document.getElementsByClassName('checkbox'); 
  for (var index = 0; index < checkboxes.length; index++) {
	if (checkboxes[index].checked) {
		checkboxes[index].parentElement.style = "opacity: 0.1"
    } else {
		checkboxes[index].parentElement.style = "opacity: 1"
	}
  }
}

buttonDeleteAll.addEventListener('click', () => {
	document.getElementById('list').innerHTML = ''
	i=-1
})

buttonDeleteEnd.addEventListener('click', () => {
	const checkboxes = document.getElementsByClassName('checkbox')
	const liAll = document.getElementsByClassName('item')

	for (var index = 0; index < checkboxes.length; index++) {
		if (checkboxes[index].checked) {
			checkboxes[index].remove()
			liAll[index].remove()
			index = 0
		}
	}
})

// function clickForDelete() {
// 	const liAll = document.getElementsByClassName('item')
// 	const checkboxes = document.getElementsByClassName('checkbox')
	
// 	console.log(liAll[index], index);

// 	liAll[index].remove()
// }

