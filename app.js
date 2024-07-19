document.getElementById('guestbook').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const mobile = document.getElementById('mobile').value;
    const roomnumber = document.getElementById('roomnumber').value;

    const entry = document.createElement('div');
    entry.classList.add('entry');
    entry.innerHTML = `<h3>${name}</h3>
                       <p>Address: ${address}
                       </p><p>Mobile: ${mobile}</p>
                       <p>Room Number: ${roomnumber}</p>`;

    document.getElementById('entries').appendChild(entry);

    document.getElementById('guestbook').reset();
});
