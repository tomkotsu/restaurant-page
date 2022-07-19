const createFrontPage = function () {
    // add elements to heading
        const heading = document.createElement('div');
        heading.classList.add('heading')
    
        // create and add headTitle 
        const headTitle = document.createElement('h1');
        headTitle.textContent = "だるま食事処";
        heading.appendChild(headTitle);
    
        // create and add headImg
        const headImg = document.createElement('img');
        headImg.src = "../src/imgs/daruma_illust_2730.png";
        heading.appendChild(headImg);
    
    // add elements to main    
        const main = document.createElement('div');    
        main.classList.add('main');
    
        //create and add desc
        const desc = document.createElement('p');
        desc.textContent = "だるまさんとおいしいラーメンを楽しんで！\
        だるまは有機の材料しか使っていませんよ！"
        main.appendChild(desc);
    
        return [heading, main];
    
    };
    export { createFrontPage };