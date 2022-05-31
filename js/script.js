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
                        msg: "placeholder text Bobette_01",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text Bobette_02",
                        owner : "me"
                    },
                    {
                        msg: "placeholder text Bobette_03",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text Bobette_04",
                        owner : "me"
                    }
                 ]
            },
            {
                name: "Andrew McNamara",
                img: "contact_02.jpg",
                lastOn: "12:15",
                msgHistory: [
                    {
                        msg: "placeholder text McNamara_01",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text McNamara_02",
                        owner : "me"
                    },
                    {
                        msg: "placeholder tex tMcNamara_03",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text McNamara_04",
                        owner : "me"
                    }
                 ]
            },
            {
                name: "Sarah Garfield",
                img: "contact_03.jpg",
                lastOn: "11:10",
                msgHistory: [
                    {
                        msg: "placeholder text Garfield_01",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text Garfield_02",
                        owner : "me"
                    },
                    {
                        msg: "placeholder text Garfield_03",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text Garfield_04",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text Garfield_05",
                        owner : "me"
                    },
                ]
            },
            {
                name: "Jim Nakamura",
                img: "contact_04.jpg",
                lastOn: "7:30",
                msgHistory: [
                    {
                        msg: "placeholder text Nakamura_01",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text Nakamura_02",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text Nakamura_03",
                        owner : "me"
                    },
                    {
                        msg: "placeholder text Nakamura_04",
                        owner : "me"
                    },
                    {
                        msg: "placeholder text Nakamura_05",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text Nakamura_06",
                        owner : "me"
                    },
                ]
            },  
        ],

    },
    methods : {
        onClick(activeContact){
            this.activeContact = activeContact;
            // document.querySelector(".content").innerHTML =  "{{contacts[activeContact].name}}";
        },
        printMsg(){

        }

    },


});
