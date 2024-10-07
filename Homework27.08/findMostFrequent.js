let itemArr = [1, 2, 3, 2, 2, 2, 2, 1];

function mostFrequentItem(arr = []){
    let frequencyMap = {
    };
    for(let i = 0; i < arr.length; i++){
        if( !frequencyMap[`${arr[i]}`]){
            frequencyMap[`${arr[i]}`] = 1;
        } else {
            frequencyMap[`${arr[i]}`] += 1;
        }
    }
    let frequency = Object.values(frequencyMap);
    let mostFrequentItem = Math.max(...frequency);

    let mostFrequentItemValue = Object.keys(frequencyMap).find(key => frequencyMap[key] === mostFrequentItem);

        console.log(mostFrequentItemValue);
        return mostFrequentItemValue;

}

mostFrequentItem(itemArr)