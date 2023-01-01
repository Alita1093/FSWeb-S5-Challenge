const Header = (baslik, tarih, yazi) => {
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  //
  const headerr = document.createElement("div");
  headerr.classList.add("header");

  const tarihh = document.createElement("span");
  tarihh.classList.add("date");
  tarihh.textContent = tarih;

  const baslikk = document.createElement("h1");
  baslikk.textContent = baslik;

  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = yazi;

  headerr.appendChild(tarihh);
  headerr.appendChild(baslikk);
  headerr.appendChild(temp);
  return headerr;
};

const headerEkleyici = (secici) => {
  document
    .querySelector(secici)
    .appendChild(Header("Yazılım", "30 aralık 2022", "noContext"));
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //
  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper"))
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
};

export { Header, headerEkleyici };
