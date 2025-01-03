const body = document.querySelector("body"),
    sidebar = body.querySelector(".sidebar"),
    toggle = body.querySelector(".toggle"),
    modeSwitch = body.querySelector(".form-switch"),
    modeText = body.querySelector(".mode-text");

    toggle.addEventListener("click", () =>{
        sidebar.classList.toggle("close");
    })

    modeSwitch.addEventListener("change", () =>{
        body.classList.toggle("dark");
    })

    modeSwitch.addEventListener("change", () =>{
        body.classList.toggle("darkModeToggle");

        if(body.classList.contains("dark")){
            modeText.innerText = "Light Mode"
        }else{
            modeText.innerText = "Dark Mode"
        }
    })
    
 