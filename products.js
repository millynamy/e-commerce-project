
// search query params
const urlParams = new URLSearchParams(location.search);
for (const [key, value] of urlParams) {
    console.log(`${key}:${value}`);
    if(key === 'email'){
        let el = document.getElementById("user-email");
        el.innerHTML = value;
    }
}