document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const sectionIds = ['nosotros-section', 'power-station-section', 'contact-form'];

    const activateLink = (href) => {
        navLinks.forEach((link) => {

            link.classList.remove('text-[#009DFD]', 'font-bold');

            link.classList.add('text-white', 'hover:text-[#00ebe3]');

            if (link.getAttribute('href') === href) {

                link.classList.add('text-[#009DFD]', 'font-bold');
                link.classList.remove('text-white', 'hover:text-[#00ebe3]');
            }
        });

    };

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const targetId = entry.target.id;
                activateLink(`#${targetId}`);
            }
        });
    }, observerOptions);

    sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.observe(section);
    });

});