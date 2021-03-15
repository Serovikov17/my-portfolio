document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    closeElem = document.querySelector('.menu__close');

    hamburger.addEventListener('click', () => {
    menu.classList.add('active');
    });

    closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    });

    const counters = document.querySelectorAll('.skills__ratings-counter'),
          lines = document.querySelectorAll('.skills__ratings-line span');

    counters.forEach( (item, i) => {
        lines[i].style.width = item.innerHTML;
    });

    const contactsName = document.querySelector('input[name="name"]'),
    contactsEmail = document.querySelector('input[name="email"]'),
    contactsPolicy = document.querySelector('#policyCheck'),
    contactsBtn = document.querySelector('.contacts__btn');

    function validateForm() {
        let cNV = contactsName.value,
            cEV = contactsEmail.value,
            cPC = contactsPolicy.checked,
            reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        //validate imput Name, Email, Policy.
        if (cNV == "" || cNV.length < 2 || /[^а-яА-Яa-zA-Z0-9\-]/.test(cNV)) {
            contactsName.classList.add('invalid');
            alert("Введите своё имя, имя не должно быть короче 2 символов");
            event.preventDefault();
            
        } else {
            contactsName.classList.remove('invalid');
            contactsName.classList.add('valid');
        };

        if (cEV == "" || reg.test(cEV) == false) {
            contactsEmail.classList.add('invalid');
            alert("Введите свой email");
            event.preventDefault();
           
        } else {
            contactsEmail.classList.remove('invalid');
            contactsEmail.classList.add('valid');
        };

        if (cPC == false) {
            alert("Чтобы продолжить установить флажок согласия с политикой конфиденциальности");
            event.preventDefault();
        };
        
        return true;
    };
    
    contactsBtn.addEventListener('click', () => {
        validateForm();
    });
    
    
});

/* $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
}); */