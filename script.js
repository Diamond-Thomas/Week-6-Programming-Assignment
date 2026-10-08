fetch("https://freedictionaryapi.com/api/v1/entries/en/hello")
.then((response) => {

    if(response.ok){
        return response.json();
    }else{
        throw new Error("Network response was not ok.");
    }

})
.then((data) => {
   
    console.log(data);
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });



