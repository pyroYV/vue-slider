const slides = [
    {
        image: 'img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    },
    {
        image: 'img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum.',
    },
    {
        image: 'img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    },
    {
        image: 'img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
    },
    {
        image: 'img/05.jpg',
        title: 'Paradise',
        text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
    }
];

console.log(slides);

const app = new Vue ({

    el: '#app',
    data:{
        carouselIndex: 0,
        imageSrc:slides.map(slides => slides.image),
        slides,
        

    },
    methods: {
        // una funzione che cambi il valore src 
        nextImage(){
            // this.carouselIndex++
            this.carouselIndex=(this.carouselIndex+1)%slides.length
            
        },
        prevImage(){
            console.log((this.carouselIndex-1)%slides.length)
            this.carouselIndex=(this.carouselIndex-1)%slides.length
            if(this.carouselIndex<0){
                this.carouselIndex += slides.length
            }
            
        }
    },
}) 

