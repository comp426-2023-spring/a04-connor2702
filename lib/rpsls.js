export function rps(shot) {
    const options = ['rock','paper','scissors'];
    const opshot = options[Math.floor(Math.random() * options.length)];

    const rock_results = {'rock': 'tie', 'paper': 'lose', 'scissors': 'win'};
    const paper_results = {'rock': 'win', 'paper': 'tie', 'scissors': 'lose'};
    const scissors_results = {'rock': 'lose', 'paper': 'win', 'scissors': 'tie'};

    if (shot == undefined) {
        return {'player': opshot};
    }

    shot = shot.toLowerCase();

    if (shot != 'rock' && shot != 'paper' && shot != 'scissors') {
        console.log('Out of range.');
        throw new RangeError('Out of range.');
    }

    const winlosetie = '';

    if (shot == 'rock') {
        winlosetie = rock_results[opshot];
    }
    if (shot == 'paper') {
        winlosetie = paper_results[opshot];
    }
    if (shot == 'scissors') {
        winlosetie = scissors_results[opshot];
    }

    return {'player': shot, 'opponent': opshot, 'result': winlosetie};

}


export function rpsls(shot) {
    const options = ['rock','paper','scissors','lizard','spock'];
    const opshot = options[Math.floor(Math.random() * options.length)];

    const rock_results = {'rock': 'tie', 'paper':'lose', 'scissors': 'win', 'lizard': 'win', 'spock': 'lose'};
    const paper_results = {'rock': 'win', 'paper': 'tie', 'scissors': 'lose', 'lizard': 'lose', 'spock': 'win'};
    const scissors_results = {'rock': 'lose', 'paper': 'win', 'scissors': 'tie', 'lizard': 'win', 'spock': 'lose'};
    const lizard_results = {'rock': 'lose', 'paper': 'win', 'scissors': 'lose', 'lizard': 'tie', 'spock': 'win'};
    const spock_results = {'rock': 'win', 'paper': 'lose', 'scissors': 'win', 'lizard': 'lose', 'spock': 'tie'};

    if (shot == undefined) {
        return {'player': opshot};
    }

    shot = shot.toLowerCase();
    
    if (shot != 'rock' && shot != 'paper' && shot != 'scissors' && shot != 'lizard' && shot != 'spock') {
        console.log('Out of range.');
        throw new RangeError('Out of range.');
    }

    const winlosetie = '';

    if (shot == 'rock') {
        winlosetie = rock_results[opshot];
    }
    if (shot == 'paper') {
        winlosetie = paper_results[opshot];
    }
    if (shot == 'scissors') {
        winlosetie = scissors_results[opshot];
    }
    if (shot == 'lizard') {
        winlosetie = lizard_results[opshot];
    }
    if (shot == 'spock') {
        winlosetie = spock_results[opshot];
    }

    return {'player': shot, 'opponent': opshot, 'result': winlosetie};
}