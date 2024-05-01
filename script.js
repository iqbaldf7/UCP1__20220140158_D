// JavaScript untuk menampilkan waktu dan salam
function updateTime() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = '';

  if (hour < 12) {
    greeting = 'HALLO IQBAL GANTENG!';
  } else if (hour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  const formattedDate = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  const formattedTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  document.getElementById('greeting').innerText = greeting;
  document.getElementById('datetime').innerText = `${formattedDate} ${formattedTime}`;
}

updateTime();
setInterval(updateTime, 1000); // Update waktu setiap detik
