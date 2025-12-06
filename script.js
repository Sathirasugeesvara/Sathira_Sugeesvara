  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = form.name.value;

    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = "🌞 Good Morning";
    } else if (hour <= 18) {
      greeting = "🌤️ Good Afternoon";
    } else if (hour <= 21) {
      greeting = "🌇 Good Evening";
    } else {
      greeting = "🌙 Good Night";
    }

    alert(`${greeting}, ${name}! Your message has been sent.`);

    form.reset();
  });