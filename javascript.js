
document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const firstName = document.querySelector('input[placeholder="First Name"]');
    const lastName = document.querySelector('input[placeholder="Last Name"]');
    const email = document.querySelector('input[placeholder="Email Address"]');
    const phone = document.querySelector('input[placeholder="Phone Number"]');
    const message = document.querySelector('textarea');

    if (!firstName.value.trim() || !lastName.value.trim() || !email.value.trim() || !phone.value.trim() || !message.value.trim()) {
        alert('Veuillez remplir tous les champs !');
        return;
    }
    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!emailPattern.test(email.value)) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
    }
    const phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone.value)) {
        alert('Veuillez entrer un numéro de téléphone valide (10 chiffres).');
        return;
    }
    alert(`Merci, ${firstName.value} ! Votre message a été envoyé avec succès.`);
    document.querySelector('form').reset();
});
