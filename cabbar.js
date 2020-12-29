    
    function verify() {

    let permanent, brand, colour, model, message;
    permanent = document.getElementById('permanent').value;
    brand = document.getElementById('brand').value;
    colour = document.getElementById('colour').value;
    model = document.getElementById('model').value;

    if (permanent == "yes") {
        message = "Yes, we can fix your car."
    } else if (permanent == "no") {
        message = "No, unfortunately we cannot fix your car."
        if (brand == "Alfa Romeo") {
            if (colour == "red") {
                if (model >= 2000 && model <= 2020) {
                    message = "Yes, we can fix your car."
                } else {
                    message = "No, unfortunately we cannot fix your car."
                }
                } else if (colour == "black") {
                if (model == 2020) {
                    message = "Yes, we can fix your car."
                } else {
                    message = "No, unfortunately we cannot fix your car."
                }
                } else {
                    massage = "No, unfortunately we cannot fix your car."
                }

        } else if (brand == "audi") {
            if ((model >= 2005 && model <= 2010) || (model >= 2014 && model <= 2020)) {
                message = "Yes, we can fix your car."
            } else {
                message = "No, unfortunately we cannot fix your car."
            }

        } else if (brand == "vw") {
            if (colour == "black") {
                if (model >= 2001 && model <= 2018) {
                    message = "Yes, we can fix your car."
                } else {
                    message = "No, unfortunately we cannot fix your car."
                }
            } else {
                message = "No, unfortunately we cannot fix your car."
            }
        }
    } else {
        message = "Please make sure you complete the relevant sections. We cannot provide repair services for a car that meets your criteria."
    }
    document.getElementById('result').innerHTML = message
}