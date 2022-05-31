// Script for Exercise
console.log("helloworld");
const temporaryData = [
        {
            msg: "placeholder text1",
             owner : "contact"
        },
         {
            msg: "placeholder text2",
            owner : "me"
         },
         {
            msg: "placeholder text3",
            owner : "contact"
         },
         {
            msg: "placeholder text4",
            owner : "me"
         }
     ];

const boolzApp = new Vue({
    el : "#root",
    data : {
        activeContact: 0,
        user : {
            name : "Andrew BillyBob",
            img : "userAvatar.jpg"
        },
        contacts : [
            {
                name: "Jane Bobette",
                img: "contact_01.jpg",
                lastOn: "15:30", 
                msgHistory: [
                    {
                        msg: "placeholder text1",
                        owner : "contact"
                    },
                     {
                        msg: "placeholder text2",
                        owner : "me"
                     },
                     {
                        msg: "placeholder text3",
                        owner : "contact"
                     },
                     {
                        msg: "placeholder text4",
                        owner : "me"
                     }
                 ]
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
        onClick(activeContact){
            this.activeContact = activeContact;
            // document.querySelector(".content").innerHTML =  "{{contacts[activeContact].name}}";
    
        }

    },


});
