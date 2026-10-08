fetch("https://freedictionaryapi.com/api/v1/entries/en/hello")
.then((response) => {

    if(response.ok){
        return response.json();
    }else{
        throw new Error("Network response was not ok.");
    }

})

.then((data) => {

    if (data.entries.length === 0) {
      console.log("Word not found");
    } else {
      console.log(data.word);
      console.log(data.entries[0].senses[0].definition);
    }

    console.log(data);
  })

.catch((error) => {
  console.error("Error: Could not connect to the dictionary service");
});



