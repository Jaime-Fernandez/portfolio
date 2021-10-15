function showMenu() {
  document.getElementById('hamburger').classList.toggle('isActive')
  document.getElementById('navMenu').classList.toggle('isVisible');
}

function closeModal(){
  document.getElementById('modal').classList.remove('showModal');
}
