let ALL_Videos = [
    {
        id: 123,
        title: "MR.beast fu*ked",

    },
    {
        id: 456,
        title: "MR.beast fu*ked 2",
        
    }, 
    {
        id: 789,
        title: "MR.beast fu*ked 3",
        
    },
]


ALL_Videos = ALL_Videos.filter((singleVideo)=>{
    return singleVideo.id !== 456
})

console.log(ALL_Videos);
