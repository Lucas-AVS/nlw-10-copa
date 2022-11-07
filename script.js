let newCard = (CalendarDay, weekDay , matches) => `
<div class="card">
    <h2>${CalendarDay}<span>${weekDay}</span></h2>
    <ul>${matches}</ul>
</div>`

let getMatches = (team1, hour, team2) =>`           
    <li>
        <img src="./assets/icon-${team1}.svg" alt="Bandeira do ${team1}">
        <strong>${hour}</strong>
        <img src="./assets/icon-${team2}.svg" alt="Bandeira do ${team2}">
    </li>
`;

document.querySelector('#cards').innerHTML = 
    newCard('20/11', 'domingo', 
        getMatches('catar', '13:00', 'ecuador')) +
    newCard('21/11', 'segunda', 
        getMatches('england', '10:00', 'iran') + 
        getMatches('senegal', '13:00', 'netherlands') + 
        getMatches('usa', '16:00', 'wales')) +
    newCard('22/11', 'terça', 
        getMatches('argentina', '07:00', 'saudiarabia') +
        getMatches('denmark', '10:00', 'tunisia') +
        getMatches('mexico', '13:00', 'poland') +
        getMatches('france', '16:00', 'australia')) +
    newCard('23/11', 'quarta', 
        getMatches('morocco', '07:00', 'croatia') +
        getMatches('germany', '10:00', 'japan') +
        getMatches('spain', '13:00', 'costarica') +
        getMatches('belgium', '16:00', 'canada'));
