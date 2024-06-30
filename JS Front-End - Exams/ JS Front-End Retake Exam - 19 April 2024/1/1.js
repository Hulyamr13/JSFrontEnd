function spellbookUnraveling(input) {
    let spell = input.shift();

    input.forEach(command => {
        let [action, arg1, arg2] = command.split("!");

        switch (action) {
            case "RemoveEven":
                spell = [...spell].filter((_, i) => i % 2 === 0).join('');
                console.log(spell);
                break;
            case "TakePart":
                spell = spell.slice(Number(arg1), Number(arg2));
                console.log(spell);
                break;
            case "Reverse":
                if (spell.includes(arg1)) {
                    spell = spell.replace(arg1, '') + [...arg1].reverse().join('');
                    console.log(spell);
                } else {
                    console.log('Error');
                }
                break;
        }
    });

    console.log(`The concealed spell is: ${spell}`);
}


const input1 = [
    "asAsl2adkda2mdaczsa",
    "RemoveEven",
    "TakePart!1!9",
    "Reverse!maz",
    "End"
];

const input2 = [
    "hZwemtroiui5tfone1haGnanbvcaploL2u2a2n2i2m",
    "TakePart!31!42",
    "RemoveEven",
    "Reverse!anim",
    "Reverse!sad",
    "End"
];

spellbookUnraveling(input1);
spellbookUnraveling(input2);
