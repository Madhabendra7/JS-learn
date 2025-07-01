
const coding = ["js", "ruby", "python", "java", "cpp"]

/*function in for each

    coding.forEach(  function (item){
    console.log(item);
})

// arrow in for each

coding.forEach( (item) =>{
    console.log(item);
    
})

    function printme(item){
    console.log(item);
    }
    coding.forEach(printme)

    coding.forEach( (item, index, arr) =>{
    console.log(item, index , arr);
    })*/

    const mycoding = [
        {
            languageName: " javascript",
            languageFileName: " js"
        },
        {
             languageName: " java",
            languageFileName: " java"
        },
        {
             languageName: " python",
            languageFileName: " python"
        }
    ]
    mycoding.forEach( (item) => {
        console.log(item.languageFileName)
    })