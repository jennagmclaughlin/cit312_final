const getStates = () => {
    axios
    .get("https://adv-web-us-state-final-500.uc.r.appspot.com/api/v1/states")
    .then((response) => {
        const states = response.data[0].states;
        console.log(`GET States`, states);

        for (state in states) {
            this.stateDiv = document.createElement("div");
            stateDiv.classList.add("state", "col", "col-sm-12", "col-md-2", "col-lg-3");
            document.body.querySelector(".stateRow").appendChild(stateDiv);

            // state image
            this.stateImage = states[state].image;
            this.stateImageImg = document.createElement("img");
            this.stateImageImg.src = stateImage;
            this.stateDiv.appendChild(stateImageImg);

            // state name
            this.stateName = states[state].name;
            this.stateNameH = document.createElement("h2");
            this.stateNameH.classList.add("stateName");
            this.stateNameH.innerHTML = stateName;
            this.stateDiv.appendChild(stateNameH);

            // state nickname
            this.stateNickname = states[state].nickname;
            this.stateNicknameH = document.createElement("h4");
            this.stateNicknameH.classList.add("stateNickname");
            this.stateNicknameH.innerHTML = '"' + stateNickname + '"';
            this.stateDiv.appendChild(stateNicknameH);

            // capitol
            this.stateCapitol = states[state].capital;
            this.stateCapitolDiv = document.createElement("div");
            this.stateCapitolDiv.classList.add("stateCapitol");
            this.stateCapitolDiv.innerHTML = "<b>Capitol:</b> " + stateCapitol;
            this.stateDiv.appendChild(stateCapitolDiv);

            // population 
            this.statePopulation = states[state].population;
            this.statePopulationDiv = document.createElement("div");
            this.statePopulationDiv.classList.add("statePopulation");
            this.statePopulationDiv.innerHTML = "<b>Population:</b> " + statePopulation;
            this.stateDiv.appendChild(statePopulationDiv);

            // landmass
            this.stateLand = states[state].landmass;
            this.stateLandDiv = document.createElement("div");
            this.stateLandDiv.classList.add("stateLand");
            this.stateLandDiv.innerHTML = "<b>Landmass:</b> " + stateLand;
            this.stateDiv.appendChild(stateLandDiv);

            // statehood
            this.statehood = states[state].date_of_statehood;
            this.statehoodDiv = document.createElement("div");
            this.statehoodDiv.classList.add("statehood");
            this.statehoodDiv.innerHTML = "<b>Date of Statehood:</b> " + statehood;
            this.stateDiv.appendChild(statehoodDiv);

            // major industries
            this.stateIndustry = states[state].majorindustry;
            this.stateIndustryDiv = document.createElement("div");
            this.stateIndustryDiv.classList.add("stateIndustry");
            this.stateIndustryDiv.innerHTML = "<b>Major Industries:</b> " + stateIndustry;
            this.stateDiv.appendChild(stateIndustryDiv);

            // tourist attractions
            this.stateTourist = states[state].touristattractions;
            this.stateTouristDiv = document.createElement("div");
            this.stateTouristDiv.classList.add("stateTourist");
            this.stateTouristDiv.innerHTML = "<b>Tourist Attractions:</b> " + stateTourist;
            this.stateDiv.appendChild(stateTouristDiv);
        }
    })
    .catch((error) => console.error(error));
};

getStates();