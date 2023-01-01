import axios from "axios";
import { response } from "express";

const Card = (makale) => {
  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
  const cardMain = document.createElement("div");
  cardMain.classList.add("card");
  const headline = document.createElement("div");
  headline.classList.add("headline");
  headline.textContent = makale.anabaslik;
  const author = document.createElement("div");
  author.classList.add("author");
  const imgCont = document.createElement("div");
  imgCont.classList.add("img-container");
  const imgg = document.createElement("img");
  imgg.src = makale.yazarFoto;
  const yazarAdd = document.createElement("span");
  yazarAdd.textContent = `${makale.yazarAdi} tarafında`;
  imgCont.appendChild(imgg);
  author.appendChild(imgCont);
  author.appendChild(yazarAdd);
  cardMain.appendChild(headline);
  cardMain.appendChild(author);
  return cardMain;
};

const cardEkleyici = (secici) => {
  const cardS = document.querySelector(secici);
  axios.get(`http://localhost:5001/api/makaleler`).then((response) => {
    for (let key in response.data.makaleler) {
      for (let i = 0; i < response.data.makaleler[key].length; i++) {
        cardS.appendChild(Card(response.data.makaleler[key][i]));
      }
    }
  });
  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
};

export { Card, cardEkleyici };
