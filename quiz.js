document.querySelector("#first_state").addEventListener("click", (e) => {
    let selectedState = document.querySelector("input[type=radio]:checked");
    if (selectedState.id === "delaware")
      document.querySelector("#correct_first_state").innerHTML =
        "Good job! Delaware was the first state.";
    else {
      let stateName =
        selectedState.id[0].toUpperCase() + selectedState.id.substring(1);
      document.querySelector("#correct_first_state").innerHTML = `No, ${stateName} was not the first state. Delaware was!`;
    }
  });

  // number of states
  document.querySelector("#number_states").addEventListener("click", (e) => {
    let selectedState = document.querySelector(".number-states input[type=radio]:checked");
    if (selectedState.id === "fifty")
      document.querySelector("#correct_number_states").innerHTML =
        "Good job! There are currently 50 states.";
    else {
      document.querySelector("#correct_number_states").innerHTML = "No, there are currently 50 states.";
    }
  });

  // capitol of california
  document.querySelector("#capitol_states").addEventListener("click", (e) => {
    let selectedState = document.querySelector(".capitol-states input[type=radio]:checked");
    if (selectedState.id === "sacramento") {
        document.querySelector("#correct_capitol_states").innerHTML = "Good job! Sacramento is the capitol of California."
    }
    else {
      document.querySelector("#correct_capitol_states").innerHTML = "No, Sacramento is the capitol of California.";
    }
  });

  // most amount of people
  document.querySelector("#people_states").addEventListener("click", (e) => {
    let selectedState = document.querySelector(".people-states input[type=radio]:checked");
    if (selectedState.id === "california") {
        document.querySelector("#correct_people_states").innerHTML = "Good job! California has the most amount of people."
    }
    else {
      document.querySelector("#correct_people_states").innerHTML = "No, California has the most amount of people.";
    }
  });

  // least amount of people
  document.querySelector("#least_states").addEventListener("click", (e) => {
    let selectedState = document.querySelector(".least-states input[type=radio]:checked");
    if (selectedState.id === "wyoming") {
        document.querySelector("#correct_least_states").innerHTML = "Good job! Wyoming has the least amount of people."
    }
    else {
      document.querySelector("#correct_least_states").innerHTML = "No, Wyoming has the least amount of people.";
    }
  });

  // baton rogue
  document.querySelector("#baton_states").addEventListener("click", (e) => {
    let selectedState = document.querySelector(".baton-states input[type=radio]:checked");
    if (selectedState.id === "louisiana") {
        document.querySelector("#correct_baton_states").innerHTML = "Good job! Baton Rogue is the capitol of Louisiana."
    }
    else {
      document.querySelector("#correct_baton_states").innerHTML = "No, Baton Rogue is the capitol of Louisiana.";
    }
  });

  // kansas city
  document.querySelector("#kansas_states").addEventListener("click", (e) => {
    let selectedState = document.querySelector(".kansas-states input[type=radio]:checked");
    if (selectedState.id === "missouri") {
        document.querySelector("#correct_kansas_states").innerHTML = "Good job! Kansas City is the capitol of Missouri."
    }
    else {
      document.querySelector("#correct_kansas_states").innerHTML = "No, Kansas City is the capitol of Missouri.";
    }
  });

    // lone star
    document.querySelector("#lone_states").addEventListener("click", (e) => {
        let selectedState = document.querySelector(".lone-states input[type=radio]:checked");
        if (selectedState.id === "texas") {
            document.querySelector("#correct_lone_states").innerHTML = "Good job! Texas is known as the 'lone star' state."
        }
        else {
          document.querySelector("#correct_lone_states").innerHTML = "No, Texas is the lone star state.";
        }
      });

    // rushmore
    document.querySelector("#rushmore_states").addEventListener("click", (e) => {
        let selectedState = document.querySelector(".rushmore-states input[type=radio]:checked");
        if (selectedState.id === "southDakota") {
            document.querySelector("#correct_rushmore_states").innerHTML = "Good job! Mt. Rushmore is located in South Dakota."
        }
        else {
          document.querySelector("#correct_rushmore_states").innerHTML = "No, Mt. Rushmore is located in South Dakota.";
        }
      });

    // grand canyon
    document.querySelector("#grand_states").addEventListener("click", (e) => {
        let selectedState = document.querySelector(".grand-states input[type=radio]:checked");
        if (selectedState.id === "arizona") {
            document.querySelector("#correct_grand_states").innerHTML = "Good job! The Grand Canyon is located in Arizona."
        }
        else {
          document.querySelector("#correct_grand_states").innerHTML = "No, the Grand Canyon is located in Arizona.";
        }
      });
  
  