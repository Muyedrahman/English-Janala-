const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
      .then((res) => res.json())
      .then((json) => displayLesson(json.data));
}

const displayLesson = (lessons) => {
    // 1. get the container & empty
    const levelContainer = document.getElementById("level-container");

    // 2. get into every lessons
    for (let lesson of lessons){
      // 3. create Element
      // 4. append into container
    }
  


    
};
loadLessons()