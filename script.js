let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let contactInfo = document.querySelector('.contact-info');

        document.querySelector('#menu-btn').onclick = () => {
            navbar.classList.toggle('active');

        };

        document.querySelector('#search-btn').onclick = () => {
            navbar.classList.toggle('active');

        };

        document.querySelector('#info-btn').onclick = () => {
            contactInfo.classList.add('active');

        };

        document.querySelector('#close-contact-info').onclick = () => {
            contactInfo.classList.remove('active');
        }

        document.querySelector('#info-btn').onclick = () => {
            contactInfo.classList.remove('active');
        }

        document.querySelector('#close-contact-info').onclick = () => {
            contactInfo.classList.remove('active');
        }


        window.onscroll = () => {
             navbar.classList.remove('active');
            searchForm.classList.remove('active')
        }

        

        
          

        