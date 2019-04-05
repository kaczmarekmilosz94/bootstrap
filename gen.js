var texts = document.getElementsByClassName("text");

var l1 = [
  "Koleżanki i koledzy",
  "Z drugiej strony",
  "Podobnie",
  "Nie zapominajmy jednak, że",
  "W ten oto sposób",
  "Praktyka dnia codziennego dowodzi, że",
  "Wagi i znaczenia tych problemów nie trzeba szerzej uzasadniać, ponieważ",
  "Różnorakie i bogate doświadczenia",
  "Troska organizacji, a szczególnie",
  "Wyższe założenia ideowe, a także"
];
var l2 = [
  "realizacja nakreślonych zadan programowych",
  "zakres i miejsce szkolenia kadr",
  "staly wzrost ilosci i zakres naszej aktywnosci",
  "aktualna struktura organizacji",
  "nowy model dzialalnosci organizacyjnej",
  "dalszy rozwoj roznych form dzialalnosci",
  "stale zabezpieczenie informacyjno programowe naszej dzialalnosci",
  "wzmacnianie i rozwijanie struktur",
  "konsultacja z szerokim aktywem",
  "rozpoczecie powszechnej akcji ksztaltowania postaw"
];
var l3 = [
  "zmusza nas do przeanalizowania",
  "spelnia istotna role w ksztaltowaniu",
  "wymaga sprecyzowania i okreslenia",
  "pomaga w przygotowaniu i realizacji",
  "zabezpiecza udzial szerokiej grupie w ksztaltowaniu",
  "spelnia wazne zadania w wypracowaniu",
  "umozliwia w wiekszym stopniu tworzenie",
  "powoduje docenianie wagi",
  "przedstawia intersujaca probe sprawdzenia",
  "pociaga za soba proces wdrazania i unowoczesniania"
];
var l4 = [
  "istniejacych warunkow administracyjno-finansowych.",
  "dalszych kierunkow rozwoju.",
  "systemu powszechnego uczestnictwa.",
  "nowych propozycji.",
  "postaw uczestnikow wobec zadan stawianych przez organizacje.",
  "kierunkow postepowego wychowania.",
  "systemu szkolenia kadry odpowiadającego potrzebom.",
  "odpowiednich waruknkow aktywizacji.",
  "modelu rozwoju.",
  "form oddzialywania."
];

var temp;

setTexts();

function setTexts() {
  for (var i = 0; i < texts.length; i++) {
    texts[i].innerHTML = randomizer() + randomizer() + randomizer();
  }
}

function randomizer() {
  temp =
    l1[Math.floor(Math.random() * 10)] +
    " " +
    l2[Math.floor(Math.random() * 10)] +
    " " +
    l3[Math.floor(Math.random() * 10)] +
    " " +
    l4[Math.floor(Math.random() * 10)] +
    " ";

  return temp;
}
