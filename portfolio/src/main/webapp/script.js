// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomDialogues() {
  const dialogues =
      ['How you doin?😏', 'Joey doesnt share food!🍕', 'I know!!!!😤', 'We were on a breeaaak😱'];

  // Pick a random greeting.
  const dialogue = dialogues[Math.floor(Math.random() * dialogues.length)];

  // Add it to the page.
  const dialogueContainer = document.getElementById('dialogue-container');
  dialogueContainer.innerText = dialogue;
}
async function getRandomGreetingUsingAsyncAwait() {
  const response = await fetch('/data');
  const greeting = await response.text();
  document.getElementById('greeting-container').innerText = greeting;
}

function getServergreetings() {
  fetch('/data').then(response => response.json()).then((greeting) => {
    // stats is an object, not a string, so we have to
    // reference its fields to create HTML content

    const statsListElement = document.getElementById('greetings-container');
    statsListElement.innerHTML = '';
    for(var i=0;i<greeting.length;i++)
    {
        statsListElement.appendChild(
            createListElement('Greetings: ' + greeting + '\n'));
    }
  });
  return statsListElement.innerText;
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

