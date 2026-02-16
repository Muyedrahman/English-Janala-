const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
      .then((res) => res.json())
      .then((json) => displayLesson(json.data));
}

const loadLevLevelWord = (id) =>{
 const url = `https://openapi.programming-hero.com/api/level/${id}`;
//  console.log(url);
 fetch(url)
   .then((res) => res.json())
   .then((data) => displayLevelWord(data.data));
}
const displayLevelWord = (words) =>{
  // console.log(words);
  const wordContainer = document.getElementById("word-container");
  wordContainer.innerHTML = "";

//   {
//     "id": 80,
//     "level": 1,
//     "word": "Run",
//     "meaning": "দৌড়ানো",
//     "pronunciation": "রান"
// }
  words.forEach((word) =>{
    console.log(word);
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-5">
        <h2 
        class="font-bold text-2xl">${word.word}</h2>
        <p class="font-semibold">meaning / pronunciation</p>
        <div class="text-2xl font-medium font-bangla">${word.meaning} /${word.pronunciation}</div>
        <div class="flex justify-between items-center">
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>
         
        </div>
      </div>
    `;
    wordContainer.append(card);
  })
}

const displayLesson = (lessons) => {
    // 1. get the container & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2. get into every lessons
    for (let lesson of lessons){
      // 3. create Element
      console.log(lesson)
      const btnDiv = document.createElement('div')
      btnDiv.innerHTML = `
       <button onclick="loadLevLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary"> <i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
      `;
      // 4. append into container
      levelContainer.append(btnDiv);
    }
  


    
};
loadLessons()