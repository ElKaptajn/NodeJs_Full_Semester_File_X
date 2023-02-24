fetch("http://localhost:8080/api/tanks")
    .then(response => response.json())
    .then(result => {
        const tankWrapperDiv = document.getElementById("tank-wrapper");

        //Avoid XSS by not letting a user input HTML with innerHTML
        result.data.forEach(tank => {

            const tankDiv = document.createElement("div");

            const tankName = document.createElement("h2");
            tankName.innerText += tank.name || "";
            const tankId = document.createElement("p");
            tankId.innerText += tank.id || "";

            tankDiv.appendChild(tankName);
            tankDiv.appendChild(tankId);

            tankWrapperDiv.appendChild(tankDiv);
    });
});


 