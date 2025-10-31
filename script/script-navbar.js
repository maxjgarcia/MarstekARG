document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link')

    const sectionMap = {
        home: document.querySelector('#hero-section'),
        nosotros: document.querySelector('#nosotros-section'),
        power: document.querySelector('#power-station-section'),
        contacto: document.querySelector('#contact-form'),
    }

    const activateLink = (href) => {
        navLinks.forEach((link) => {
            link.classList.remove('text-[#009DFD]')

            link.classList.add('text-white')

            if (link.getAttribute('href') === href) {
                link.classList.add('text-[#009DFD]')

                link.classList.remove('text-white')
            }
        })
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    switch (entry.target.id) {
                        case 'hero-section':
                            activateLink('#hero-section')
                            break
                        case 'nosotros-section':
                            activateLink('#nosotros-section')
                            break
                        case 'power-station-section':
                            activateLink('#power-station-section')
                            break
                        case 'contact-form':
                            activateLink('#contact-form')
                            break
                        default:
                            activateLink('#')
                            break
                    }
                }
            })
        },

        { threshold: 0.5 }
    )

    Object.values(sectionMap).forEach((section) => {
        if (section) observer.observe(section)
    })
})