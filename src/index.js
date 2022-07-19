const createElements = function () {
    const content = document.getElementById('content');
    // list of elements to add to content
    const elemArr = ['heading', ]
// helper functions
    
    const addToContent = function (element) {
        content.appendChild(element);
    };

// add elements to heading
    const heading = document.createElement('div');
    heading.classList.add('heading')

    // create and add headTitle 
    const headTitle = document.createElement('h1');
    headTitle.textContent = "だるま食事処";
    heading.appendChild(headTitle);

    // create and add headImg
    const headImg = document.createElement('img');
    headImg.src = "imgs/daruma_illust_2730.png";
    heading.appendChild(headImg);

// add elements to main    
    const main = document.createElement('div');    
    main.classList.add('main');

    //create and add desc
    const desc = document.createElement('p');
    desc.textContent = "だるまさんとおいしいラーメンを楽しんで！\
    　だるまは有機の材料しか使っていませんよ！"

    
};

createElements();