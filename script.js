// Show Sections
function showSection(sectionId) {
    function hideSection(sec) {
        sec.classList.add('hidden');
    }
    document.querySelectorAll('.section').forEach(hideSection);
    document.getElementById(sectionId).classList.remove('hidden');
}

// Search Filter
function filterItems() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll("#task-list li");
    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

// Weather App
async function fetchWeather() {
    let city = document.getElementById("city").value;
    let apiKey = "YOUR_API_KEY";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    document.getElementById("weather-result").innerText = `Temp: ${data.main.temp}°C`;
}

// Form Validation
function main(event) {
    event.preventDefault();
    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userError = document.querySelector(".userError");
    let passError = document.querySelector(".passError");
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    
    userError.innerText = emailPattern.test(email) ? "" : "Invalid email format";
    passError.innerText = passwordPattern.test(password) ? "" : "Password must be 6+ chars, include letters & numbers";
}

// To-Do List
function addTask() {
    let taskInput = document.getElementById("task");
    let taskList = document.getElementById("task-list");
    let li = document.createElement("li");
    li.innerHTML = `${taskInput.value} <button onclick="removeTask(this)">X</button>`;
    li.addEventListener("click", () => li.classList.toggle("completed"));
    taskList.appendChild(li);
    taskInput.value = "";
}

function removeTask(element) {
    element.parentElement.remove();
}
