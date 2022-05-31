// Script for Exercise
console.log("helloworld");

const usersData = [];


const myApp = new Vue({
    el: "#root",
    data : {
        user : {
            name : "Andrew BillyBob",
            img : "userAvatar.jpg"
        },
        contacts : [
            {
                user: "Jane Bobette",
                userImg: "avatar-01.jpg",
                userLastOn: "15:30",
                userHistory: [
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
                ],
            },
            {
                user: "Andrew McNamara",
                userImg: "avatar-02.jpg",
                userLastOn: "12:15",
                userHistory: [
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
                ],
            },
            {
                user: "Sarah Garfield",
                userImg: "avatar-03.jpg",
                userLastOn: "31/05/2022 11:10",
                userHistory: [
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
                ],
            },
            {
                user: "Jim Nakamura",
                userImg: "avatar-03.jpg",
                userLastOn: "31/05/2022 7:30",
                userHistory: [
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
                ],
            },  
        ],

    },
    methods : {

    },


})
