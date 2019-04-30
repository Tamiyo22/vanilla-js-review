alert('connected!');
// apis you can use https://www.programmableweb.com/category/all/apis


var li = document.querySelectorAll('li');
// we select the li
//add event listeners to all of the li's
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener('mouseover', function() {
    this.classList.add('selected');
  });
  li[i].addEventListener('mouseout', function() {
    this.classList.remove('selected');
  });

  li[i].addEventListener('click', function() {
    this.classList.toggle('done');
  });
}

