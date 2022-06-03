// let imagesToLoad = document.querySelectorAll('img[data-src]');

// const imgOptions = {
//     threshold: '',
//     rootMargin: "0px 0px 50px 50px"
// }

// const loadImages = (image) => {
//     image.setAttribute('src', image.getAttribute('data-src'));
//     image.onload = () => {
//         image.removeAttribute('data-src');
//     };
// };

// imagesToLoad.forEach((img) => {
//     loadImages(img);
// });

// if('IntersectionObserver' in window) {
//     const observer = new IntersectionObserver((items, observer) => {
//       items.forEach((item) => {
//         if(item.isIntersecting) {
//           loadImages(item.target);
//           observer.unobserve(item.target);
//         }
//       });
//     });
//     imagesToLoad.forEach((img) => {
//       observer.observe(img);
//     });
//   } else {
//     imagesToLoad.forEach((img) => {
//       loadImages(img);
//     });
//   }
//       let imagesToLoad = document.querySelectorAll('img[data-src]');
//     const loadImages = (image) => {
//       image.setAttribute('src', image.getAttribute('data-src'));
//       image.onload = () => {
//         image.removeAttribute('data-src');
//       };
//     };
//     // Options passed to the Intersection Observer
//     const imgOptions = {
//       threshold: 1,
//       /* Using -10px for demo purposes, normally use something like 300px so 
//          the images load well before the user scrolls to them */
//       rootMargin: "0px 0px 500px 0px"
//     }
//     if ('IntersectionObserver' in window) {
//       const observer = new IntersectionObserver((items, observer) => {
//         items.forEach((item) => {
//           if (item.isIntersecting) {
//             loadImages(item.target);
//             observer.unobserve(item.target);
//           }
//         });
//       }, imgOptions);
//       imagesToLoad.forEach((img) => {
//         observer.observe(img);
//       });
//     } else {
//       imagesToLoad.forEach((img) => {
//         loadImages(img);
//       });
//     }





    let imagesToLoad = document.querySelectorAll('img[data-src]');
    const loadImages = (image) => {
      image.setAttribute('src', image.getAttribute('data-src'));
      image.onload = () => {
        image.removeAttribute('data-src');
      };
    };
    // Options passed to the Intersection Observer
    const imgOptions = {
      threshold: 1,
      /* Using -10px for demo purposes, normally use something like 300px so 
         the images load well before the user scrolls to them */
      rootMargin: "0px 0px 500px 0px"
    }
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
          if (item.isIntersecting) {
            loadImages(item.target);
            observer.unobserve(item.target);
          }
        });
      }, imgOptions);
      imagesToLoad.forEach((img) => {
        observer.observe(img);
      });
    } else {
      imagesToLoad.forEach((img) => {
        loadImages(img);
      });
    }