const createMenuPage = function () {
    const menu = document.createElement('div');
    const ramenMaker = function (ramen) {
        const ramenDiv = document.createElement('div');
        ramenDiv.textContent = ramen;
        menu.appendChild(ramenDiv);
    };
    const ramenList = ['豚骨','こってり', '激辛', '油そば'];
    for (let i = 0; i < ramenList.length; i += 1) {
        ramenMaker(ramenList[i]);
    };
    return [menu];
};

export { createMenuPage };