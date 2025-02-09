
export default {
    mounted(el) {
      el.classList.add('fade-start')
      const options = {
        root: null,
        threshold: 0.1, 
      }
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('fade-end')
            observer.unobserve(el)
          }
        })
      }, options)
  
      observer.observe(el)
    },
  }
  