
  function showTab(tabName) {
    // Hide all tab contents
    document.getElementById('skills').classList.add('hidden');
    document.getElementById('education').classList.add('hidden');

    // Show selected tab
    document.getElementById(tabName).classList.remove('hidden');
  }
const sidemenu = document.getElementById('sidemenu');
function openmenu(){
    sidemenu.style.right = '0';
}
 function closemenu(){
    sidemenu.style.right = '-200px';
 }
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwOdFbWmRSUCBJcZS7zQbSovcdsRpZa3gD1stCGKfrj9nYjIBngw-35vMOsoxDTMgsU/exec'
  const form = document.forms['submit-to-google-sheet']
  const message = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        message.innerHTML = 'message sent successfully'
        setTimeout(function(){
            message.innerHTML = ''
        }, 1000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })