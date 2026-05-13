function addExercise() {
    let div = document.getElementById("exercises");
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Exercise " + (div.children.length + 1);
    div.appendChild(input)

}

function saveWorkout() {
    document.getElementById("saved").innerHTML = "Template saved."
    let title = document.getElementById("workoutTemplate").value;
    let inputs = document.getElementById("exercises").children;
    let exercises = [];
    for (let input of inputs) {
        exercises.push(input.value);
    }
    localStorage.setItem(title, JSON.stringify(exercises));
    //document.getElementById("templatet").innerHTML = localStorage.getItem(title);
    let workouts = JSON.parse(localStorage.getItem("workouts") || "[]");
    workouts.push({ title: title, exercises: exercises, sets: title });
    localStorage.setItem("workouts", JSON.stringify(workouts));

}

const done = document.getElementById("done")








window.onload = function() {
    if (document.getElementById("templatet")) {
        //document.getElementById("templatet").innerHTML = localStorage.getItem("workouts");
        let workouts = JSON.parse(localStorage.getItem("workouts") || "[]");
        document.getElementById("treenit").innerHTML = localStorage.getItem("doneWorkouts");
        let doneWorkouts = JSON.parse(localStorage.getItem("doneWorkouts") || "[]");
        for (let workout of workouts) {
            const nappi = document.createElement("button")
            nappi.innerHTML = workout.title
            document.getElementById("templatet").appendChild(nappi)
            let divset = document.getElementById("setit");
            //let divrep = document.getElementById("repit")
            nappi.onclick = function() {
                console.log("clicked");
                let date = document.getElementById("workoutDate").value;
                document.getElementById("joo").innerHTML = date;
                for (let exercise of workout.exercises) {
                        let divex = document.createElement("div");
                        divset.appendChild(divex);
                        let set = document.createElement("input");
                        let weight = document.createElement("input");
                        set.type = "number";
                        set.placeholder = "Set 1, Reps, "+exercise;
                        weight.type = "number";
                        weight.placeholder = "Set 1, Weight, " + exercise;
                        divex.appendChild(set)
                        divex.appendChild(weight)
                        let kosketin = document.createElement("button");
                        kosketin.innerHTML = "Add Set"
                        divex.appendChild(kosketin)
                        let exercises1 = [];
                        kosketin.onclick = function() {
                            let allEx = divex.querySelectorAll("input");
                            let lastSet = allEx[allEx.length - 2];
                            let lastWeight = allEx[allEx.length-1];
                            exercises1.push({reps: lastSet.value, weight: lastWeight.value})
                            console.log(lastSet.value)
                            console.log(lastWeight.value)
                            localStorage.setItem("exercises1", JSON.stringify(exercises1))
                            let set1 = document.createElement("input");
                            set1.type = "number";
                            divex.appendChild(set1)
                            let weight1 = document.createElement("input");
                            weight1.type = "number";
                            divex.appendChild(weight1)
                            set1.placeholder = "Set " + ((divex.children.length-1)/2) + ", Reps, " + exercise;
                            weight1.placeholder = "Set " + ((divex.children.length-1)/2) + ", Weight, " + exercise;
                            
                        }
                        
                        done.onclick = function() {
                            //let workoutDiv = document.createElement("div")
                            //workoutDiv.innerHTML = "Title: " + workout.title + ""
                            //let lastSet = allEx[allEx.length - 2];
                            //let lastWeight = allEx[allEx.length-1];
                            //console.log(lastSet.value)
                            //console.log(lastWeight.value)
                            let allEx = divex.querySelectorAll("input");
                            let lastSet1 = allEx[allEx.length - 2];
                            let lastWeight1 = allEx[allEx.length-1];
                            //exercises1.push({reps: lastSet1.value, weight: lastWeight1.value})
                            document.getElementById("doneTeksti").innerHTML = "Workout Saved."
                           
                            if (document.getElementById("treenit")) {
                                doneWorkouts.push({title: workout.title, exercises: workout.exercises, something: exercises1, date: date});
                                localStorage.setItem("doneWorkouts", JSON.stringify(doneWorkouts))
                            }
                        }
                                
                }
            }
        }
    }
}