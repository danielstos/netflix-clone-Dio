
var modal = document.querySelector('.bg');
modal.addEventListener('click', function(e) {
  if (e.target == this) hideModal();
});

    function showModal() {
        document.querySelector('.modal').style.display = 'block';
        document.querySelector('.bg').style.display = 'block';
    }


    function hideModal() {
        document.querySelector('.modal').style.display = 'none';
        document.querySelector('.bg').style.display = 'none';
    }
