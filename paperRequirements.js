const firstPaperCopy = 10;
const secondPaperCopy = 20;
const thirdPaperCopy = 30;

function paperRequirements(firstPaper, secondPaper, thirdPaper){
    const firstPaperNeed = 100;
    const secondPaperNeed = 200;
    const thirdPaperNeed = 300;

    const needPaperForFirst = firstPaper*firstPaperNeed;
    const needPaperForSec = secondPaper*secondPaperNeed;
    const needPaperForThird = thirdPaper*thirdPaperNeed;
    const totalPaperNeed = needPaperForFirst + needPaperForSec + needPaperForThird;
    return totalPaperNeed;
}

const totalPaper = paperRequirements(firstPaperCopy, secondPaperCopy, thirdPaperCopy)

console.log('Paper need for 3 books is', totalPaper)