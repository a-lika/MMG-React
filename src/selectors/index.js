export function backCardState(state) {
    state.backCard = state.backCard ? state.backCard : 'back2';
    return state.backCard
};

export function levelState(state) {
    state.level = state.level ? state.level : 'level2';
    return state.level
};

export function findUsers() {
    const promise = fetch("http://mmg-score.herokuapp.com", {
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': 'cors_url',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(console.error
    ).then(data => {
        return data.result
            .sort((a, b) => a.score - b.score)
            .filter((el) => el.score > 0)
            .filter((el, i) => i < 10)

    })
    return promise
};
