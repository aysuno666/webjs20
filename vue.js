var app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        list: [
        {predmet: 'Веб-дизайн', prepodavatel: 'Шомас Елена Александровна'},
        { predmet: 'Физ-ра', prepodavatel:'Иванова Регина Геннадьевна' },
        { predmet: 'Иностранный язык', prepodavatel:'Абрамова Светлана Геннадьевна' },
        { predmet: 'Математические методы', prepodavatel:'Лобачёва Милана Евгеньевна' },
        { predmet: 'Охрана труда и техника безопасности', prepodavatel:'Черненкова Наталья Владимировна' },
        ],
        colorTxt: '',
        isVisible: true,
    },
    methods:{
        hover(){
                this.message = 'HOVER ON!!!'
        },
        hoverOff(){
                this.message = 'hello'
        },
    }
    });
