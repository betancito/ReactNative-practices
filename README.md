# What is React Native?
React Native is a development platform inclusing components and an extended library and tools that will allow you to execute your applications.

it's worth to develop mobile applications but it is also worth to be used to develop web applications. allowing you to develop both mobile and desktop apps on the go. it's slogan is "Learn once, write anywhere". It is an open source tool developed and released by Facebook on 2015. 

Since React native uses React components and javascript or typescript when developing it might be misunderstood that is just loading a website when it comes to the phone application. when it is really loading and packaging those components locally and loading them using the phone power to make it work. making a great difference when it comes to the efficiency of the app.

Also. stepping a little bit out of the app side Microsoft also has it's own libraries to develop applications for Windows and MacOs using React Native.

Although the performance is not the better it can be enough for a lot of people and depending on the type of application that will be developed.

Another davantage of this tool is that the updates of the application can be made over the air. that means it will not have to pass trough the AppStore or the PlayStore for the application updates to be released to the users

## Your first project

To start a project with a default templateyou can use the command below. Then you give the name to your app and that's it.

```bash
npx create-expo-app@latest
```

But if you're just starting with it I'd rether recommend to use a blank template using the command below:

```bash
npx create-expo-app@latest APP_NAME --template blank
```
this will be building a blank project that wont contain dependencies or anything. after it is created I'd recommend installing the follwing dependencies using the command below:
```bash
npx expo install react-dom react-native-web @expo/metro-runtime
```
with this 3 dependencies you'll be able to see it on the web also but develop for both mobile apps and web applications.