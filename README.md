# desafio-marvel

### Como usar
Em um terminal, rode o comando `sudo npm start --clear-cache`

Em outro terminal, `sudo npx react-native run-android`

### Para gerar o build release, siga os passos abaixo
`sudo npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/`

`sudo rm -rf android/app/src/main/res/drawable-*`

`sudo rm -rf android/app/src/main/res/raw`

`sudo npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/`

`cd android`

`sudo ./gradlew clean`

`sudo ./gradlew assembleRelease`

### Galeria

![alt text](https://github.com/Alexandre-Diniz/desafio-marvel/blob/main/src/assets/images/screenshots/WhatsApp%20Image%202021-02-03%20at%2007.01.47%20(1).jpeg)

![alt text](https://github.com/Alexandre-Diniz/desafio-marvel/blob/main/src/assets/images/screenshots/WhatsApp%20Image%202021-02-03%20at%2007.01.47%20(2).jpeg)

![alt text](https://github.com/Alexandre-Diniz/desafio-marvel/blob/main/src/assets/images/screenshots/WhatsApp%20Image%202021-02-03%20at%2007.01.47%20(3).jpeg)

![alt text](https://github.com/Alexandre-Diniz/desafio-marvel/blob/main/src/assets/images/screenshots/WhatsApp%20Image%202021-02-03%20at%2007.01.47.jpeg)

![alt text](https://github.com/Alexandre-Diniz/desafio-marvel/blob/main/src/assets/images/screenshots/WhatsApp%20Image%202021-02-03%20at%2007.01.48%20(1).jpeg)

![alt text](https://github.com/Alexandre-Diniz/desafio-marvel/blob/main/src/assets/images/screenshots/WhatsApp%20Image%202021-02-03%20at%2007.01.48.jpeg)
