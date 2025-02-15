onload = () =>{
    document.body.classList.remove("container");
};

document.querySelector('.eye-magic').addEventListener('click', () => {
    const sparks = document.createElement('div');
    sparks.className = 'magic-spark';
    document.body.appendChild(sparks);
    setTimeout(() => sparks.remove(), 1000);
  });