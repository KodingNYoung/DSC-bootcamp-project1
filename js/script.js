const animations = document.querySelectorAll('.animated');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    console.log(entry.target.dataset.animationType)
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `${entry.target.dataset.animationType} 3s forwards ease-in-out`;
    }else {
      entry.target.style.animation = 'none'
    }
  })
})

animations.forEach(animation => observer.observe(animation));