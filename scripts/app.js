
document.querySelector('p').addEventListener('click', function()  {
    var name = prompt('Enter a new name');
    document.querySelector('p').textContent = 'Player 1: ' + name;
    
    });

