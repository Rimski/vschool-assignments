processForm() {
    alert(
            "First name: " + document.travelFourm.firstname.value + "\n" +
            "last name: " + document.travelFourm.lastname.value + "\n" +
            "Age: " + document.travelFourm.age.value + "\n" +
            "Gender: " + document.travelfourm.gender.value + "\n" +
            "Diatary Restriction: " + buildDiet(document.travelFourm.diet.value) 
    
    );
}
        function buildDiet(dietArray){
        var dietString = "";
        for (var i = 0; i < dietArray.length; i++){
            if (dietArray[i].checked) {
                dietString += dietArray[i.value + " "]
            }
            if (!dietString) {
                dietString = "No Restrictions"
            }
        }
        return dietString
    }