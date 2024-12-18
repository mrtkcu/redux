1. component leri oluşturduk. ./components
   Header.jsx
   List.jsx
   Card.jsx

2. store klasörünü oluştur
   store
   ./store/store.js
   ./store/actions/cardActions.js
   ./store/actions/listActions.js
   ./store/reducers/listReducer.js
   ./store/reducers/cardReducer.js

3. npm install redux react-redux

4. listReducer ve cardReducer ı başlangıç haline getir.
   initialState tanımla boş array,
   export ile reducerı tanımla, parametre => state, action
   switch ile action lara göre işlem yap _default: return state_

5. index.js oluştur, burada reducerları combine et.

6. Provider ile main.jsx de app i sarmala böylece store a appden ulaşabilirim. props olarak store = {myStore}

7. listActions u yaz,
   const SET_LIST, constant
   func setList action creator

   cardActions u yaz,
   const ADD_ITEM constant
   funct addItem action creator

7.1
listReducer ı yaz
SET_LIST case ine göre ne olacağını yaz
action.payload ı ...state e ekle

cardReducer ı yaz
ADD_ITEM case ine göre item(?undefined) ı ekle
{...state, card: [item, ...state.card]}

8. used cars datası bul, csv file to json, src e data.js diye ekle export et json arrayini

9. app.jsx de sayfa mount olduğunda useEffect içerisinde dispatch ile setItems action unu çalıştır, data daki arabaları parametre olarak alsın

10.
