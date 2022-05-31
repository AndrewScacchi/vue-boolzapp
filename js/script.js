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
                        msg: "placeholder text from Bobette_01",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text to Bobette_02",
                        owner : "me"
                    },
                    {
                        msg: "placeholder text from Bobette_03",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text to Bobette_04",
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
                        msg: "placeholder text from McNamara_01",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text to McNamara_02",
                        owner : "me"
                    },
                    {
                        msg: "placeholder tex from tMcNamara_03",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text to McNamara_04",
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
                        msg: "placeholder text from Garfield_01",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text to Garfield_02",
                        owner : "me"
                    },
                    {
                        msg: "placeholder text from Garfield_03",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text from Garfield_04",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text to Garfield_05",
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
                        msg: "placeholder text from Nakamura_01",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text from Nakamura_02",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text to Nakamura_03",
                        owner : "me"
                    },
                    {
                        msg: "placeholder text to Nakamura_04",
                        owner : "me"
                    },
                    {
                        msg: "placeholder text from Nakamura_05",
                        owner : "contact"
                    },
                    {
                        msg: "placeholder text to Nakamura_06",
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
