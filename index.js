const ratingForm = document.getElementById('ratingForm')

ratingForm.addEventListener('submit', function(ev){
    ev.preventDefault()

    const submitCard = document.getElementById('submitCard')
    const thanksCard = document.getElementById('thanksCard')
    const ratingResult = document.querySelector('input[name="rating"]:checked').value
    const span = document.querySelector('#selectResult > span')

    submitCard.style.display = 'none'
    thanksCard.style.display = 'flex'
    span.textContent = ratingResult


    console.log(ratingResult)
})

