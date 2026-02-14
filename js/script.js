window.onload = function () {
  let name = prompt("Masukkan nama kamu:");
  if (name && name.trim() !== "") {
    document.getElementById("greeting").innerText = "Hi " + name + ",";
  } else {
    document.getElementById("greeting").innerText = "Hi,";
  }
};

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("messageText").value;

  const now = new Date();
  const dateTime = now.toLocaleString("en-GB", { timeZoneName: "short" });

  if (name === "" || email === "" || phone === "" || message === "") {
    alert("All fields must be filled!");
    return;
  }

  document.getElementById("output").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
    <p><strong>Submission Time:</strong> ${dateTime}</p>
  `;
});
