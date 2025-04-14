
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('rsvp-form').style.display = 'none';
  document.getElementById('confirmation').classList.remove('hidden');
});

// Dynamisch QR-Code erzeugen
const qrTargetURL = window.location.href + '#anmeldung';

QRCode.toCanvas(document.getElementById('qrcode'), qrTargetURL, function (error) {
  if (error) console.error(error);
});
