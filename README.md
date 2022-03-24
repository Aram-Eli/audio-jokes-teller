# audio-jokes-teller
Click [**RoboFriend tells Jokes Live**](https://aram-eli.github.io/audio-jokes-teller/)

building an API based voice audio project both voice and Jokes API

## OverView Joke functionality
### JokeApi review

Looking the JS file we can see that our `_getJokes()_ function` to using the `_fetch(apiUrl)_`
method to passing the api url to `JokeAPI server` its giving us a `_response.json = data_`
and then there we getting a setup part delivery to part Jokes and just Joke for one part Joke
and in inner functionality am creating my own Joke veriable that's been poplulated by using the 
`if statment`

and in turn eventually we the Jokes from the API.

### VoiceRSS review


In my test function I called the speack function and passed in the pramarerters of my V
[_Voice RSS_](https://www.voicerss.org/sdk/javascript.aspx), The key and most importantly the text
which at the begging by default `"Hello World".`

then passed the [_VoiceRSS SDK_](https://www.voicerss.org/sdk/javascript.aspx), and this connecting
to their server and then our are getting a response from them in form of `audio data`,
and did motified the _SDK_ to pass the `_audioElement.src = audio data_` and I trigerd the
`audioElement.Play()` method then our are able to hear something.






