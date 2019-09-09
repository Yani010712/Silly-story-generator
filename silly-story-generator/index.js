window.addEventListener('load',function(){


const customName = document.getElementById('custom-name');
const randomstory = document.querySelector('.randomstory');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

const storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
const insertX =['Willy the Goblin','Big Daddy','Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

const result = () => {
 let newStory = storyText;
  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(/:insertx:/g, xItem).replace(/:inserty:/g, yItem).replace(/:insertz:/g, zItem);

  if(customName.value !== '') {
    let name = customName.value;
    name = name.charAt(0).toUpperCase() + name.slice(1);
    console.log(name);
    newStory = newStory.replace(/Bob/g, name);
  }
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300 * 0.071429) + ' stone';
    newStory = newStory.replace('300 pounds', weight);

    const temperature =  Math.round((94 - 32) * .5556) + ' centigrade' ;
    newStory = newStory.replace('94 farenheit', temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

randomstory.addEventListener('click', result);

});
