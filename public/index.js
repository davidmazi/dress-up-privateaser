/* global PRIVATEASER*/
'use strict';

console.log("debut");
var numberOfPersonsSelect = document.getElementById("numberOfPersons");
for (var i = 1; i <= 100; i++) {
    var ithElement = document.createElement("option");
    ithElement.text = i;
    numberOfPersonsSelect.add(ithElement);
}

(() => {
    const render = (actors) => {
        const fragment = document.createDocumentFragment();
        const div = document.createElement('div');
        const template = actors.map(actor => {
            return `
        <div class="actor">
          <span>${actor.who}</span>
          <span>${actor.type}</span>
          <span>${actor.amount}</span>
        </div>
      `;
        }).join('');

        div.innerHTML = template;
        fragment.appendChild(div);
        document.getElementById("actors").innerHTML = '';
        document.getElementById("actors").appendChild(fragment);
    };

    const button = document.getElementById("compute");

    button.addEventListener('click', function onClick() {
        event.preventDefault();

        const bar = PRIVATEASER.getBar();
        const time = document.querySelector('#duration').value;
        const persons = document.querySelector('#numberOfPersons').value;
        const option = document.querySelector('#deductible').checked;
        const actors = PRIVATEASER.payActors(bar, time, persons, option);

        render(actors);
        return;
    });

    var barelement = document.getElementById("bardiv")
    var bookerelement = document.getElementById("bookerdiv")

    const radiobar = document.getElementById("radiobar");

    radiobar.addEventListener('click', function onClick() {
        barelement.style.display = "block";
        bookerelement.style.display = "none";
    });

    const radiobooker = document.getElementById("radiobooker");

    radiobooker.addEventListener('click', function onClick() {
        barelement.style.display = "none";
        bookerelement.style.display = "block";
    });

})();

console.log("fin");
