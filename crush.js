document.getElementById('loveForm').addEventListener('submit',function(e) {
    e.preventDefault();

    const yourName =document.getElementById('yourName').value.trim();
    const crushName =document.getElementById('crushName').value.trim();
    const result=document.getElementById('result');

    if(!yourName||!crushName) {
        alret( "Please enter both names.");
        return;
    }
    const loveScore = Math.floor(Math.random() * 100) 

    let message='';
    if (loveScore >= 90) {
        message = `match madein heaven!`;
    } else if (loveScore >= 75) {
        message = `There is something working, please keep on trying !`;
    } else {
        message = `you got saved,enjoy your life.`;
    }
     
    result.classList.remove('d-none');
    result.innerHTML = `${yourName} and ${crushName}=${loveScore}-${message}`;

});