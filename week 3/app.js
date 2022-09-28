window.addEventListener('load', function () {
    console.log('page is loaded');

    let button = document.getElementById('coffee-button');
    button.addEventListener('click', function() {
        let inputText = document.getElementById("coffee-input").value;

        fetch('coffee.json')
        .then(response => response.json())
        .then(data => {
            console.log(data.country[0].name);

            let results = [];
            for (let i = 0 ; i < data.country.length ; i++){
            if (data.country[i].name == inputText) {
                results.push(data.country[i]);
                console.log(results[0].name);
            }
            }
            

            let nameElement = document.getElementById('c-name');
            nameElement.innerHTML = results[0].name;

            let portElement = document.getElementById('c-port');
            portElement.innerHTML = "Import/Export: " + results[0].port;

            let numberElement = document.getElementById('c-number');
            numberElement.innerHTML = results[0].number + " Million 60 Kilogram Bags/year";

            let typeElement = document.getElementById('c-type');
            typeElement.innerHTML = "Type of coffee bean: " + results[0].type;
        
        
            
        })

        .catch(err => {
            console.log("error is: " + err);
            let nameElement = document.getElementById('c-name');
            nameElement.innerHTML = "Could not find the country! try again.";

            let portElement = document.getElementById('c-port');
            portElement.innerHTML = "";

            let numberElement = document.getElementById('c-number');
            numberElement.innerHTML = "";

            let typeElement = document.getElementById('c-type');
            typeElement.innerHTML = "";
        })

    })

})
