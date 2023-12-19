const imagesList = [
    newImage('http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg', 'Svezia', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg', 'Perù', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c', 'Chile', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg', 'Argentina', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
    newImage('https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop', 'Colombia', 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'),
];


for(let i = 0; i < imagesList.length; i++){

let card = document.createElement('div');

card.classList.add('card','Myhidden')

if(i == 0){
    card.classList.add('Myactive');
    card.classList.remove('Myhidden');

}

card.innerHTML = `
    ${imagesList[i]['url']}
        
    <div class="text-style">
        <h3>${imagesList[i]['title']}</h3>
        <p>${imagesList[i]['description']}</p>
    </div>
    `;

document.getElementById('main-card-container').append(card);

};

let cardList = document.querySelectorAll('.card');




let counter = 0;

document.getElementById('next-button').addEventListener('click', function(){
    
    document.querySelector('.card.Myactive').classList.add('Myhidden');
    document.querySelector('.card.Myactive').classList.remove('Myactive');

    if(counter < imagesList.length - 1){

        counter ++;

    }else{
        counter = 0;
    }

    cardList[counter].classList.remove('Myhidden');
    cardList[counter].classList.add('Myactive'); 
})


document.getElementById('prev-button').addEventListener('click', function(){
    
    document.querySelector('.card.Myactive').classList.add('Myhidden');
    document.querySelector('.card.Myactive').classList.remove('Myactive');

    if((counter !== imagesList.length) && (counter !== 0)){

        counter -= 1 ;

    }else{
        counter += imagesList.length - 1 ;
    }

    cardList[counter].classList.remove('Myhidden');
    cardList[counter].classList.add('Myactive'); 
})


//------ FUNCTIONS ---------------------------------------------

function newImage(urlI, title, description){

    imagesElement = {
        url: 
        `
        <img src="${urlI}" class="img-fix">
        `,

        title,

        description
    };

    return imagesElement;

}

