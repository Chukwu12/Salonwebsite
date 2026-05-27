if (window.Glide && document.querySelector('.glide-hair')) {
    const hairGlide = new Glide('.glide-hair', {
        type: 'carousel',
        focusAt: 'center',
        perView: 3,
        gap: 16,
        peek: {
            before: 24,
            after: 24,
        },
        autoplay: 3500,
        hoverpause: true,
        animationDuration: 700,
        breakpoints: {
            1100: {
                perView: 2,
                peek: {
                    before: 18,
                    after: 18,
                },
            },
            768: {
                perView: 1,
                gap: 12,
                peek: {
                    before: 0,
                    after: 0,
                },
            },
        },
    });

    hairGlide.mount();
}

const revealElements = document.querySelectorAll('.reveal-on-scroll');

if ('IntersectionObserver' in window && revealElements.length > 0) {
    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.18,
            rootMargin: '0px 0px -30px 0px',
        }
    );

    revealElements.forEach((element) => observer.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add('is-visible'));
}

const mobileBookButton = document.querySelector('.mobile-book-now');
const pageFooter = document.getElementById('footer');

if (mobileBookButton && pageFooter && 'IntersectionObserver' in window) {
    const footerObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                mobileBookButton.classList.toggle('is-hidden', entry.isIntersecting);
            });
        },
        {
            threshold: 0.08,
        }
    );

    footerObserver.observe(pageFooter);
}

// var docWidth = document.documentElement.offsetWidth;

// [].forEach.call(
//   document.querySelectorAll('*'),
//   function(el) {
//     if (el.offsetWidth > docWidth) {
//       console.log(el);
//     }
//   }
// );
