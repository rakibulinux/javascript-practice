const bestFriends = ['Rakib', 'Alim', 'Samiul', 'Shojib', 'Rajib', 'Roich'];

function bestFriend(bestFriends){
    let nameLen = bestFriends[0].length;
    let bigName = bestFriends[0];
    for(let i = 0; i < bestFriends.length; i++){
        let index = bestFriends[i].length;
        // const element = bestFriends[index]
        // console.log(index, element[i])
        if(index >= nameLen){
            bigName = bestFriends[i];
            nameLen = index;
        }
    }return bigName;
}

const bigFriend = bestFriend(bestFriends);
console.log('Big name on this array is', bigFriend);