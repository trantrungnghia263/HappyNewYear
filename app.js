document.addEventListener("DOMContentLoaded", () => {
  //firework
  const fireworkcontainer = document.querySelector(".firework-container");
  function createFirework() {
    const firework = document.createElement("div");
    firework.className = "firework";
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    firework.style.left = `${posX}px`;
    firework.style.top = `${posY}px`;
    fireworkcontainer.appendChild(firework);
  }
  function launchFirework() {
    setInterval(createFirework, 100);
  }
  launchFirework();

  //date
  const dayElement = document.querySelector(".message__day");
  const hoursElement = document.querySelector(".message__hours");
  const minutesElement = document.querySelector(".message__minutes");
  const secondElement = document.querySelector(".message__second");

  function countDownDate() {
    const newYear2024 = new Date("2025-01-29");

    const countDown = setInterval(function () {
      const currentDate = new Date();
      const temp = newYear2024 - currentDate;

      if (temp <= 0) {
        clearInterval(countDown);
        alert("Happy New Year 2024");
      } else {
        const days = Math.floor(temp / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (temp % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((temp % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((temp % (1000 * 60)) / 1000);

        dayElement.innerHTML = days;
        hoursElement.innerHTML = hours;
        minutesElement.innerHTML = minutes;
        secondElement.innerHTML = seconds;
      }
    }, 1000);
  }
  countDownDate();
});
