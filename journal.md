### How are you passing data from one then() call to another?

Javascript passed data from one then to another using promise changing and when one "then" is resolved its data is passed on to the next then.

### Explain what a “Promise” actually represents in this code. What happens if the API is down or the URL is wrong? How does .catch() help us handle that?

A promise in this code is a placeholder for code either for a rejection or a completion. if the URL is wrong in the code the code will still run but you will get a 400 or 500 number error instead of a completion. If the API is down then the promise is imediately rejected. catch can help "catch" any errors like when the URL bypasses automatic promise rejection.
