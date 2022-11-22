import './App.css';
import CustomTable from "./Table";
import MyAppBar from "./Bar";
import {useState} from "react";
import ColorsTimeline from "./Timeline";

function App() {
    const [events, setEvents] = useState([
        { id: 1, begin: new Date(1914, 7, 28) ,end: new Date(1918, 11, 11), name: 'I wojna światowa', type: "Wojna", color: "#780000",
            summary: "Wojna światowa, trwająca od 28 lipca 1914 do 11 listopada 1918 pomiędzy ententą (Trójporozumieniem), tj. Wielką Brytanią, Francją, Rosją, Serbią, Japonią, Włochami (od 1915) i Stanami Zjednoczonymi (od 1917) a państwami centralnymi (Trójprzymierzem), tj. Austro-Węgrami i Niemcami, wspieranymi przez Imperium Osmańskie oraz Bułgarię.",
            url: "https://upload.wikimedia.org/wikipedia/commons/2/20/WWImontage.jpg",
            description: "Był to największy konflikt zbrojny w Europie od czasu wojen napoleońskich. Wojna zakończyła się klęską państw centralnych, likwidacją mocarstw Świętego Przymierza oraz powstaniem w Europie Środkowej i Południowej licznych państw narodowych. Była też jedną z głównych przyczyn rewolucji lutowej (1917) i rewolucji październikowej (1918) w Rosji. W jej wyniku zginęło ponad 14 milionów ludzi. Mimo ogromu strat i wstrząsu wywołanego nimi, wojna ta nie rozwiązała większości konfliktów, co 21 lat później doprowadziło do wybuchu II wojny światowej. I wojna światowa była zderzeniem XX-wiecznej techniki z XIX-wieczną strategią i taktyką. Wybuch I wojny światowej wyznaczył symboliczny koniec wieku XIX oraz koniec hegemonii europejskiej na świecie. Od jej zakończenia coraz większą rolę w stosunkach międzynarodowych zaczęły odgrywać Stany Zjednoczone i utworzony w 1922 Związek Radziecki."
        },
        { id: 2, begin: new Date(1939, 9, 1) ,end: new Date(1945, 9, 2), name: 'II wojna światowa', type: "Wojna", color: "#780000",
            summary: "Największa wojna światowa w historii, trwająca od 1 września 1939 roku do 2 września 1945 roku (w Europie do 8/9 maja 1945 roku). Obszar działań wojennych objął prawie całą Europę, wschodnią i południowo-wschodnią Azję, północną Afrykę, część Bliskiego Wschodu, wyspy Oceanii i wszystkie oceany. Niektóre epizody wojny rozgrywały się nawet w Arktyce i Ameryce Północnej. Poza większością państw europejskich i ich koloniami, brały w niej udział państwa Ameryki Północnej i Południowej oraz Azji. Głównymi stronami konfliktu były państwa Osi i państwa koalicji antyhitlerowskiej (alianci). W wojnie uczestniczyło 1,7 mld ludzi, w tym 110 mln ludzi z bronią. Według różnych szacunków zginęło w niej od 50 do 78 milionów ludzi.",
            url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Infobox_collage_for_WWII.PNG",
            description: "Za datę rozpoczęcia wojny przyjmuje się 1 września 1939 roku – agresję Niemiec na Polskę. 3 września 1939 roku, po zignorowaniu przez III Rzeszę ultimatum w sprawie bezzwłocznego wycofania wojsk z Polski, Wielka Brytania i Francja wypowiedziały wojnę III Rzeszy (w piśmiennictwie zachodnim podaje się czasami tę datę jako początek wojny światowej). W historiografii ZSRR i współczesnej rosyjskiej używane jest pojęcie tzw. wielkiej wojny ojczyźnianej – od 22 czerwca 1941 roku ataku III Rzeszy na ZSRR do 9 maja 1945 roku – powtórzonej kapitulacji III Rzeszy w Berlinie, według czasu moskiewskiego. Historiografia radziecka i współczesna rosyjska odrzuca bowiem udział ZSRR w wojnie po stronie III Rzeszy w latach 1939–1941 – od paktu Ribbentrop-Mołotow z 23 sierpnia 1939 roku i niemiecko-sowieckiego traktatu o granicach i przyjaźni z 28 września 1939 roku (agresja ZSRR na Polskę, wojna zimowa przeciw Finlandii, okupacja krajów bałtyckich i zajęcie Besarabii i północnej Bukowiny) do ataku III Rzeszy na ZSRR. Stany Zjednoczone przystąpiły do wojny przeciwko państwom Osi 7 grudnia 1941 roku w konsekwencji japońskiego ataku na bazę amerykańskiej marynarki wojennej w Pearl Harbor, wypowiedzenia wojny USA przez Japonię, a następnie 11 grudnia 1941 roku przez III Rzeszę.\n" +
                "\n" +
                "II wojnę światową zakończyły: podpisanie 7 maja 1945 roku w Reims aktu bezwarunkowej kapitulacji III Rzeszy, z wejściem w życie 8 maja 1945 roku, które zakończyło działania wojenne w Europie i akt bezwarunkowej kapitulacji Japonii podpisany 2 września 1945 roku na pokładzie pancernika USS „Missouri” w Zatoce Tokijskiej, który definitywnie zakończył działania wojenne II wojny światowej, choć poszczególne jednostki, zwłaszcza japońskie, kontynuowały opór na nieznaczną skalę.",
        },
        { id: 3, begin: new Date(1945, 10, 24), end: new Date(1945, 10, 24), name: 'Utworzenie ONZ', type: "Dyplomacja", color: "#001585",
            summary: "Uniwersalna (z wyjątkiem narodów niereprezentowanych) organizacja międzynarodowa, z siedzibą w Nowym Jorku, powstała 24 października 1945 roku w wyniku wejścia w życie podpisanej 26 czerwca 1945 w San Francisco Karty Narodów Zjednoczonych. ONZ jest następczynią Ligi Narodów[3].",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_the_United_Nations.svg/2880px-Flag_of_the_United_Nations.svg.png",
            description: "ONZ stawia sobie za cel zapewnienie pokoju i bezpieczeństwa międzynarodowego, rozwój współpracy między narodami oraz popieranie przestrzegania praw człowieka."
        },
        { id: 4, begin: new Date(1950, 6, 25), end: new Date(1953, 7, 27), name: 'Wojna w Korei', type: "Wojna", color: "#780000",
            summary: "Wojna tocząca się w latach 1950–1953 na terytorium Półwyspu Koreańskiego między komunistycznymi siłami KRLD (północnokoreańskimi) i wspierającymi je wojskami ChRL, a siłami ONZ (głównie amerykańskimi) wspierającymi wojska Republiki Korei (południowokoreańskie).",
            url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Korean_War_Montage_2.png",
            description: "Korea w czasach nowożytnych była królestwem podporządkowanym Cesarstwu Chińskiemu. Pod koniec XIX w. w związku z restauracją Meiji w Japonii, skrajnym osłabieniem Cesarstwa Chińskiego po wojnach opiumowych i powstaniu bokserów stała się terenem rywalizacji carskiej Rosji i zmodernizowanej Japonii. W roku 1897, na żądanie Japonii, Korea ogłosiła się cesarstwem, co było deklaracją suwerenności wobec Chin. Kwestia wpływów rosyjskich w Korei (koncesje dla rosyjskich przedsiębiorców na rzece Yalu) była głównym powodem wybuchu w 1904 roku wojny Rosji z Japonią, która zakończyła się klęską Rosji i traktatem z Portsmouth (1905). W konsekwencji cała Korea była okupowana przez Japończyków, a w roku 1910 została anektowana przez Japonię. W Cesarstwie Rosyjskim porażka stała się jedną z przyczyn wybuchu w 1905 roku rewolucji.\n" +
                "\n" +
                "W roku 1943 na konferencji kairskiej Winston Churchill, Franklin Delano Roosevelt i Czang Kaj-szek ustalili, że po zakończeniu II wojny światowej Korea będzie niepodległym państwem. Na konferencji jałtańskiej Józef Stalin zadeklarował przystąpienie ZSRR do wojny Stanów Zjednoczonych i Wielkiej Brytanii z Japonią w ciągu trzech miesięcy od zakończenia wojny z Niemcami. W konsekwencji Armia Czerwona łamiąc pakt o nieagresji między Japonią a ZSRR (z kwietnia 1941 roku), uderzyła na japońską Armię Kwantuńską w Mandżukuo 8 sierpnia 1945 roku – dwa dni po wybuchu bomby atomowej nad Hiroszimą, zajmując w wyniku operacji kwantuńskiej całą Mandżurię i północną część Korei (24 sierpnia 1945 roku dotarła do 38 równoleżnika)."
        },
    ]);

    const [types, setTypes] = useState([
        { id: 1, name: 'Wojna', color: '#780000'},
        { id: 2, name: 'Dyplomacja', color: '#001585'},
    ]);
    const [displayTimeline, setDisplayTimeline] = useState(false)

    return (
    <div className="App">
        <MyAppBar events={events} types={types} setTypes={setTypes} setEvents={setEvents} setDisplayTimeline={setDisplayTimeline}/>
        {displayTimeline ?
            (<ColorsTimeline events={events}/>) :
            (<CustomTable events={events} setEvents={setEvents} />)
        }
    </div>
    );
}

export default App;
