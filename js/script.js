// Script for Exercise
console.log("helloworld");
// const temporaryData = [
//         {
//             "msg": "placeholder text1",
//             "owner" : "contact"
//         },
//         {
//             "msg": "placeholder text2",
//             owner : "me"
//         },
//         {
//             msg: "placeholder text3",
//             owner : "contact"
//         },
//         {
//             msg: "placeholder text4",
//             owner : "me"
//         }
//     ];

const boolzApp = new Vue({
    el : "#root",
    data : {
        user : {
            name : "Andrew BillyBob",
            img : "userAvatar.jpg"
        },
        contacts : [
            {
                name: "Jane Bobette",
                img: "contact_01.jpg",
                lastOn: "15:30", 
            },
            {
                name: "Andrew McNamara",
                img: "contact_02.jpg",
                lastOn: "12:15",
            },
            {
                name: "Sarah Garfield",
                img: "contact_03.jpg",
                lastOn: "11:10",
            },
            {
                name: "Jim Nakamura",
                img: "contact_04.jpg",
                lastOn: "7:30",
            },  
        ],

    },
    methods : {

    },


});
