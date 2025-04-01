---
outline: deep
---

# Pico 4 Ultra: Melkein, mutta ei kuiteskaan

<!-- Banner image here-->

Olen omistanut Pico 4 Ultra -laitteen nyt yli 4 kuukautta, ja näiden kuukausien aikana olen käyttänyt laitetta tuntikausia lähes joka päivä sisällä, ulkona tai autossa. Olen koetellut tätä laitetta sen ylärajoilla.

Tämä artikkeli on enemmänkin yleiskatsaus ja arvostelu laitteesta, mihin se pystyy ja mistä pidän siinä sekä asioista, joita voisi vielä parantaa. Se on hämmästyttävä laite, jolla on joitakin vähemmän hämmästyttäviä omituisuuksia.

> [!NOTE]
> Tämä arvostelu on kirjoitettu PicoOS 5.13.3 -ohjelmistopäivityksestä lähtien, laite saa säännöllisiä päivityksiä, jotkin mainituista ongelmista/rajoituksista saattavat olla tulevaisuudessa mitätöitävissä.

## Specit

Aloitetaan teknisistä tiedoista, en kyllästytä sinua teknisillä yksityiskohdilla, mutta kirjoitan kuitenkin nopeasti sellaisista aiheista kuin optiikka, kuvanlaatu, prosessori ja niin edelleen.

### Optiikka

Pico 4 Ultrassa on Pancake-linssit, jotka ovat tunnettuja niiden parantuneesta kuvan kirkkaudesta verrattuna Fresnel-linsseihin, mutta niillä on kuitenkin tehokkuuden haittapuoli, jopa Pico 4 Ultra LCD-paneeleineen pystyy parhaimmillaan vain 25 prosentin valotehokkuuteen, mikä tekee optiikasta hyvin hämärän verrattuna vaihtoehtoihin.

Pico 4 Ultran käyttämässä optiikassa on hyvä binokulaarinen päällekkäisyys, jonka olen mitannut johdonmukaisesti yli 90 %:ksi käyttämällä [wimfov](https://boll.itch.io/wimfov) ja jonka näkökenttä on noin 102 sekä vaaka- että pystysuunnassa, mikä on vaikuttavaa.

<!-- wimfov measurement image here -->

Pico 4 Ultran kirkkautta on parannettu edeltäjäänsä Pico 4:ään verrattuna, jonka kirkkaus on parantunut jopa 25 prosenttiin, mikä tekee Ultrasta mukavan kirkkaan, mutta se on silti puutteellinen verrattuna muihin kokeilemiini laitteisiin.

Vaikka Pico 4 Ultralla on kohtuullisen suuri sweetspot, jossa en löydä vikaa, sillä ei ole parasta E2EC:tä (Edge to Edge Clarity) Näen jonkin verran epätarkkuutta viimeisessä 5%:ssa ulommasta näkyvästä FoV:stä näkökentässäni, jota en pidä yhtä ärsyttävänä.

Haluaisin myös mainita, että minulla on 56 mm IPD, joka jää alle Picon 58 mm: n vähimmäisalueen, jotkut käyttäjät voivat käyttää pienempää IPD: tä kuin heidän fyysinen IPD, joka mahdollistaa täydellisen 100-prosenttisen binokulaarisen päällekkäisyyden saavuttamisen.

### Näytöt

Pico 4 Ultra käyttää paria SHARPin 2,56 tuuman 2160x2160 RGB Stripe Oxide TFT-LCD-paneelia, jossa on WLED-taustavalo ja jonka teho on 520 nit. Paneeli kattaa seuraavat väriskaalat: 100 % sRGB, 87 % DCI-P3 ja 62 % Rec.2020.

> [!NOTE]
> Tekniset tiedot on hankittu julkisesti saatavilla olevista tiedoista, jotka perustuvat laitteesta poimittuihin osanumeroihin, nämä tiedot voivat olla epätarkkoja ja toimivat yleisenä tietopohjana.

Kun laitetta kuitenkin käytetään, näistä tiedoista tulee täysin hyödyttömiä, sillä ne eivät kerro koko tarinaa. Optiikka ja näytöt vaikuttavat toisiinsa siten, että molemmat vaikuttavat toistensa suorituskykyyn.

Värit eivät ole enää niin huuhtoutuneita kuin Pico 4:ssä, vaan uuden värikalibrointiprosessin ansiosta ne ovat elinvoimaisia ja tarjoavat loistavan katselukokemuksen sekä pimeissä että kirkkaissa kohtauksissa.

Näytöt ovat korkearesoluutioisia 2160x2160, mikä eliminoi SDE:n (Screen-Door-Effect), enkä pysty havaitsemaan näytössä Mura-ilmiötä, mutta Picon optiikan ominaisuuksien vuoksi se aiheuttaa pikselien väliin jäävien mustien pisteiden havaitsemisen, jos kiinnität siihen huomiota.

<!-- Picture of Black dot pattern -->

### Prosessointikyky

Pico 4 Ultra käyttää Snapdragon XR2 Gen 2:ta, jossa on asianmukainen lämpöratkaisu, jonka avulla voit viedä XR2 Gen 2:n äärirajoille ja saavuttaa erittäin vaikuttavan suorituskyvyn.

laitteessa on 12 gigatavua RAM-muistia, mikä tarkoittaa, että kehittäjillä on enemmän resursseja kokemustensa rakentamiseen, mikä voi esimerkiksi mahdollistaa entistä uskollisemmat tekstuurit.

laitteessa on 256 Gt sisäänrakennettua UFS 3.2 -tallennustilaa, joka riittää Super Mario 64:n 32,768 kertaa mahtumiseen laitteeseen.

### Paino

#### Headset

Pico 4 Ultra painaa noin 580 grammaa, joka jakautuu tasaisesti etu- ja takapuolelle, prosessointi, optiikka, näytöt ja vastaavat ovat etupuolella, kun taas laitteen akku on takana.

#### Ohjaimet

Kumpikin ohjain painaa noin 166 grammaa.

## Seuranta

Pico 4 Ultra -laitteen seuranta on hyväksyttävä, ja suorituskyky on joskus pettymys, mutta meidän on tarkasteltava kokonaisuutta, jotta voimme tehdä johtopäätöksen.

### Headset

se ei oikein toimi hämärässä, mikä on todella ongelma tietyissä olosuhteissa, se voi myös toimia huonosti puhtaissa ympäristöissä, koska seuranta-algoritmi hyötyy kohinasta (ainutlaatuiset kuviot, arvaamattomuus, jne.).

Seurannassa on paljon jitteriä, mikä tekee siitä yhteensopimattoman OpenVR-SpaceCalibratorin kanssa, vakaus voi vaihdella useiden tekijöiden mukaan, henkilökohtaisen kokemukseni mukaan, kun käytät Index-ohjaimien kanssa, sijainti muuttuu jatkuvasti, sinun on käytettävä Continious Tracking -seurantaa, mutta jopa Pico-seurannassa on offset, joka voi ärsyttää joitakin ihmisiä.

### Ohjaimet

Ohjaimet pystyvät seuraamaan, vaikka Headset Tracking olisi pois päältä ilman ongelmia, mutta jos se on käytössä, algoritmi yhdistää Hand Trackingin ja Controller Trackingin toisiinsa parantaakseen seurannan tarkkuutta.

Seuranta on täysin kunnossa, mutta seurantatarkkuus voi kärsiä, jos ohjain on osittain peitetty tai menee liian paljon selän taakse, sillä Pico 4 Ultra -ohjaimissa ei ole enää seurantarenkaita, jotka paransivat seurantakykyä näissä ääritapauksissa.

On olemassa bugi, jossa joskus kun ohjain ei liiku tiettyyn aikaan, se kiinnittyy käteesi, koska se käyttää tätä tietoa apuna seurantatiedoissa, kun ohjain ei välttämättä pysty seuraamaan itseään tarkasti.

### Käsiseuranta

Pico 4 Ultran kädenseurantaominaisuudet ovat käyttökelpoisia perustason vuorovaikutukseen.

Seuranta FoV ei ole loistava, se on alkuperäisen Leapmotion Controller 1:n tasolla, joka oli noin 120 astetta, ja algoritmissa on myös paljon latenssia, joka ei tee siitä erityisen miellyttävää vuorovaikutteisempiin kokemuksiin.

Se pystyy seuraamaan sormiasi melko luotettavasti, jos et tee harvinaisempia eleitä, kuten sormien risteyttämistä, nivelten vetämistä taaksepäin tai sormien osittaista lähentämistä.

## Ohjaimet

Pico 4 Ultra -ohjaimet eroavat Pico 4 -ohjaimista, puuttuva seurantarengas on ilmeisin osa.

<div align="center">
  <img src="https://raw.githubusercontent.com/Nyabsi/blog/refs/heads/main/images/p4u_review/pico_controllers.jpg"/>
</div>

### Näppäinasettelu

Molemmissa ohjaimissa on järjestelmäpainike, jolla voit avata järjestelmätelakan tai siirtää pelin uudelleen pelin aikana.

Vasemmalla ohjaimella on valikkopainike, jota kehittäjät voivat käyttää mihin tahansa, Streamingissa tätä painiketta käytetään SteamVR-yleisilmeen sitomiseen, löydät myös XY-painikkeet yleisiä syötteitä varten liipaisimella, sivuliipaisimella ja peukalokepillä, kaikissa näissä painikkeissa on kapasitiivinen anturi, paitsi sivuliipaisimessa.

Oikealla ohjaimella on kuvakaappaus- tai tallennuspainike, jonka avulla voit milloin tahansa ottaa kuvakaappauksen tai aloittaa näytön tallentamisen, olen itse pitänyt tätä todella hyödyllisenä. Ja sitten meillä on muut painikkeet aivan kuten vasemmassa ohjaimessa.

### Akunkesto

Ohjaimet toimivat kahdella AA-paristolla, jotka kestävät yli kaksi kuukautta ilman latausta tai paristojen vaihtoa.

### Ergonomia

Ohjaimet on muotoiltu niin, että niistä saa mukavan otteen, ja ne tuntuvat hyvältä kädessäsi, eivätkä ne ole liian suuria tai pieniä, mutta tämä voi olla varoittavaa, sillä ihmisillä on erikokoiset kädet.

## Headset

### Ergonomia

Pico 4 Ultra on suhteellisen mukava ulos laatikosta, yksi parhaista kokeilemistani tasapainoisen suunnittelun ansiosta, mutta varastossa oleva etulevy ja takapehmuste eivät mielestäni ole mukavia pitkäaikaiseen käyttöön, tämä riippuu kasvojen muodosta ja muista tekijöistä.

Pystyin käyttämään laitetta muutaman tunnin ajan, kunnes otsani alkoi tuntea liikaa painetta kasvolevyjen yhteensopimattoman muodon vuoksi, mikä pakotti minut lopettamaan istuntoni helpotuksen saamiseksi.

Laatikossa on myös silmälasitila, jonka ansiosta silmälasien käyttäjät voivat käyttää laitetta mukavammin.

<div align="center">
  <img src="https://raw.githubusercontent.com/Nyabsi/blog/refs/heads/main/images/p4u_review/pico4ultra.jpg"/>
  <p>Minun muokattu Pico 4 Ultra laajennettua mukavuutta varten</p>
</div>

<br/>

### Akunkesto

Laite tukee jopa 55 W:n superlatausta, jonka avulla voit ladata laitteen 0 % -> 100 % tunnissa.

Laitteen akun kesto riippuu eri kokoonpanoista, se kestää noin 100 %, kun laitetta käytetään jatkuvalla läpiviennillä, yleensä voit odottaa akun kestävän noin 3 tuntia, kun et käytä läpivientiä.

### Ääni

Ääni on subjektiivista, joten voin antaa tässä vain oman vaikutelmani ja kuvata, miltä se kuulostaa minusta, et ehkä lopulta pidä niiden tuottamasta äänestä, joten voit suhtautua tähän osioon varauksella.

#### Kuulokkeet

Pico 4 Ultra sisältää kaksi stereokaiutinta, jotka rehellisesti sanottuna kuulostavat minusta aivan hyvältä, ne sisältävät oikean määrän bassoa, oikean määrän laulua ja oikean määrän diskanttia, ja niitä on miellyttävä kuunnella.

Kaiuttimet antavat hyvän 3D-äänituntuman, joka kuulostaa todella hyvältä, kun sisällössä käytetään binauraalista ääntä.

#### Mikrophooni

Pico 4 Ultra -laitteessa on mikrofoniryhmä, joka on sijoitettu suoraan suusi päälle, jotta äänesi kuulostaa selkeältä.

<!-- a microphone test here -->

### Läpinäky

Pico 4 Ultran läpivienti on paljon parempi kuin mikään muu kokeilemani laite, pois lukien Apple Vision Pro, se on tarpeeksi selkeä, jotta sitä voi käyttää jokapäiväisiin tehtäviin, kuten näytön tai puhelimen katsomiseen ja sen käyttämiseen ruoanlaiton aikana tai kävellessäsi ulkona, jopa television katsominen ei ollut ongelma kirjoissani, vaikka en suosittele sinua tekemään sitä, mitä minä teen.

Laite toimii kuitenkin parhaiten olosuhteissa, joissa on paljon valoa, kuten olohuoneessa, jossa ikkunoista tulee paljon valoa, toimistoympäristössä, jossa on hyvin valaistu ympäristö, tai ulkokäytössä. Tilanteissa, joissa valoa ei ole riittävästi, läpivienti muuttuu huomattavasti rakeisemmaksi, mutta se on silti täysin käyttökelpoinen.

Läpivalaisussa on myös jonkin verran vääristymiä, jotka voi huomata tilanteissa, joissa on outo geometria, esimerkiksi kun liikut huoneiden välillä, se voi vääristyä, kun kävelet ovenkarmin läpi, ja se voi myös vääristyä, kun katsot hyvin symmetristä geometriaa, mutta nämä vääristymät ovat hyvin vähäisiä, eikä niitä huomaa, ellet etsi niitä.

Läpivienti ei edelleenkään käsittele tiettyjä ääritapauksia kontrastin suhteen, esimerkiksi kun istut huoneessa ja siellä on ikkuna, koska laite korjaavat läpiviennin nykyisen ympäristön valon mukaan, ikkuna näyttää hyvin epäselvältä, kunnes menet lähemmäs sitä, jolloin late pystyy säätämään valaistusolosuhteita.

Olen huomannut, että ulkokäytössä läpivientitarkkuus ei ole hyvä, kun etsit kaukana olevia asioita, kuten puita tai rakennuksia, jolloin yksityiskohdat alkavat puuttua ja kuva näyttää lopulta hieman pehmeältä. Tämä ei kuitenkaan ole ongelma sisätiloissa, joissa katsot kaikkea kohtuullisen kaukaa.

### Suorityskyky

Pico 4 Ultra -näytön suorituskyky on loistava, voin pelata vaativia pelejä myös frametime ja framerate ovat tasaisia, laite ei ole liian äänekäs tai kuuma hyvin harkitun lämpösuunnittelun ansiosta.

Se tarjoaa myös suorituskykyisen kokemuksen Android-sovelluksille, joiden avulla voit ajaa useita vaativia sovelluksia, asetuksissa on mahdollisuus asettaa ympäristön visuaalinen selkeys tai 2D-sovellusten suorituskyvyn lisääminen etusijalle.

<div align="center">
  <img src="https://raw.githubusercontent.com/Nyabsi/blog/refs/heads/main/images/p4u_review/pico_performance_tuner.jpg"/>
</div>

<br/>

Voit myös säätää VR-sovellusten suorituskykyä Kehittäjäasetusten kautta, joissa voit säätää ruudunpäivitysnopeutta, resoluutiota, CPU/GPU-tasoa ja ffr-tasoa, jolloin käyttäjä voi päättää, haluaako hän suuremman kuvanlaadun selkeyden tai ehkä jopa enemmän akkukestoa vähentämällä sitä.

### Ohjelmisto

#### OOBE (Out-of-box experience)

Pico 4 Ultra ei pakota tiliä tai pilvipalveluja laitteen toimintaan, mutta kun käynnistät laitteen ensimmäisen kerran, se kysyy sinulta muutamia asioita: Kieli, IPD ja suostumuksesi analytiikan keräämiseen, jonka voi tietysti kieltäytyä.

Kun alkuasetukset on tehty, voit valinnaisesti kirjautua sisään tai luoda tilin käyttääksesi lisätoimintoja, kuten Pico Storea.

Ilman tiliä osa käyttöjärjestelmäkokemuksesta voi kuitenkin olla rajoitettu tai olla toimimaton, mutta voit halutessasi käyttää laitetta PCVR:ssä PICO Connectin kautta ilman tiliä ilman ongelmia.

#### Kehittäjä tila

Kehittäjätila voidaan ottaa käyttöön Asetukset -> Tietoja -> Ohjelmistoversio ja napsauttamalla sitä muutaman kertaan.

Kehittäjätilan avulla saat käyttöösi lisäominaisuuksia, kun laite on kytketty tietokoneeseen USB-vianmäärityksen avulla.

Voit myös käyttää Kehittäjätilaa suorituskyvyn profilointiin ja suorituskyvyn säätämiseen.

<div align="center">
  <video loop autoplay muted>
    <source src="https://github.com/Nyabsi/blog/raw/refs/heads/main/videos/p4u_review/pico_developer_mode.mp4" type="video/mp4">
  </video>
</div>

<br/>

#### Virtuaali ympäristöt

Pico 4 Ultra sisältää neljä korkealaatuista virtuaalista ympäristöä, joissa on ääni, sekä vanhoja ympäristöjä vanhemmista laitteista.

<div align="center">
  <video loop autoplay muted>
    <source src="https://github.com/Nyabsi/blog/raw/refs/heads/main/videos/p4u_review/pico_environments.mp4" type="video/mp4">
  </video>
</div>

<br/>

Yhteisön ansiosta voit kuitenkin nyt ladata laajan valikoiman mukautettuja ympäristöjä [PicoThemeManager](https://github.com/Nyabsi/PicoThemeManager) -ohjelman avulla.

#### Android sovellus tuki

Pico 4 Ultrassa on ensimmäisen osapuolen tuki Android-sovelluksille, joten voit ladata Aurora Storen ja asentaa esimerkiksi Discordin, Twitchin tai Netflixin suoraan laitteeseen Google Playsta, mikä tekee laitteesta erinomaisen sisällönkulutukseen.

Sovellusten orientaatiota ei kuitenkaan ole toistaiseksi mahdollista muuttaa, joten jos sinulla on sovellus, joka ei kunnioita tablettitilaa, se voi olla väärässä asetellussa mikä voi näyttää höpsöltä.

<div align="center">
  <video loop autoplay muted>
    <source src="https://github.com/Nyabsi/blog/raw/refs/heads/main/videos/p4u_review/pico_android_apps.mp4" type="video/mp4">
  </video>
</div>

<br/>

Pico 4 Ultra tarjoaa myös L1-widevine-sertifikaatin Netflixin kaltaisille sovelluksille, jotka vaativat sitä drm-suojatun sisällön toistamiseen.

#### Ohjelma hallinta

Pico 4 Ultra tarjoaa joustavan ikkunanhallintajärjestelmän nimeltä ”PanoScreen”, jonka avulla voit näyttää jopa 20 sovellusta joko kupolissa tai vapaassa asennossa, joiden kokoa voidaan vapaasti muuttaa.

<div align="center">
  <video loop autoplay muted>
    <source src="https://github.com/Nyabsi/blog/raw/refs/heads/main/videos/p4u_review/pico_window_management.mp4" type="video/mp4">
  </video>
</div>

<br/>

Jotkin sovellukset voivat näkyä myös sovellusten telakalla, jos se on erikseen määritetty.

Vapaan sijainnin ikkunan nykyisessä toteutuksessa on parantamisen varaa, koska niitä ei voi kiertää vapaasti, ja jos ikkuna on liian lähellä, vapaan sijainnin ikkunan nykyinen vähimmäisikkunakoko tuntuu hieman liian suurelta.

#### Näytönkappaus

Pico 4 Ultralla voit tallentaa materiaalia kolmessa eri muodossa: Raw, Monoscopic, Spatial.

Tuetut resoluutiot ovat 1920x1080 tai 720x1280 kuvasuhteella 1:1 tai 16:9.

Screen Capture kaappaa kaiken näytöllä näkyvän, mukaan lukien passthrough.

Pico 4 Ultran ainutlaatuisena ominaisuutena on sen kyky ottaa spatiaalisia kuvia ja videoita Screen Capturen avulla.

<div align="center">
  <img src="https://raw.githubusercontent.com/Nyabsi/blog/refs/heads/main/images/p4u_review/screen_capture_settings.jpg"/>
</div>

<br/>

PICO on tehnyt tästä ominaisuudesta erittäin helppokäyttöisen, ja käytän sitä varmasti usein.

#### PCVR suoratoisto

Voit pelata kaikkia suosikki PCVR-pelejäsi PICO Connectin kautta, joka tarjoaa laajan valikoiman ominaisuuksia/

PICO Connects tukee jopa 1000 Mbps H.264 / 150 Mbps HEVC langallisella yhteydellä ja 300 Mbps H.264 / 150 Mbps langattomalla yhteydellä.

PICO Connectin käyttäminen langallisen yhteyden kanssa 1000 Mbps H.264:n nopeudella on paras PCVR-visuaalinen selkeys, jonka laitteesta voi saada, mutta jos käytät mieluummin langatonta yhteyttä, 300 Mbps H.264 on myös erinomainen vaihtoehto.

PICO Connectissa on paljon latenssia, mikä tekee siitä minulle henkilökohtaisesti sietämättömän nopeammille peleille, kuten Beat Saberille Steamissa, mutta jotkut ihmiset ovat vähemmän alttiita sille.

#### Työpöytä monikäyttö

PICO Connect tukee suoratoistoa jopa kolmesta näytöstä, ja jos sinulla on vain yksi, kaksi tai ei yhtään näyttöä, ei hätää, PICO Connect tarjoaa sinulle jopa kolme virtuaalista näyttöä, jotka voit luoda. Kun käytät PICO Connectia työpöydän kanssa, laiteessa on valinnaisesti näytön näppäimistö, jota voi käyttää vuorovaikutuksessa työpöydän kanssa.

<div align="center">
  <video loop autoplay muted>
    <source src="https://github.com/Nyabsi/blog/raw/refs/heads/main/videos/p4u_review/pico_virtual_monitors.mp4" type="video/mp4">
  </video>
</div>

Työpöydän suoratoiston bittinopeus vaihtelee, mikä tarkoittaa, että laatu ei välttämättä ole optimaalinen pelaamiseen.

<br/>

#### Immersiivinen sisältö

Pico 4 Ultrassa on sisäänrakennettu ”Valokuvat”-sovellus, joka tukee spatiaalisia videoita ja valokuvia.

Voit tallentaa avaruudellista sisältöä joko sisäänrakennetun ”Kamera”-sovelluksen tai ”Screen Capture”-sovelluksen kautta.

Voit myös tuoda yhteensopivaa mediaa raahaamalla sisältöä laitteen DCIM-kansioon tai käyttämällä puhelimen PICO-sovellusta sisällön tuomiseen.

Laite voi muuntaa 2D-valokuvia Spatial-valokuviksi paikallisesti laitteessa, videoita varten voit käyttää puhelimen PICO-sovellusta videoiden muuntamiseen Spatial-videoiksi.

Pico on yhteensopiva iPhone 16:lla tai Apple Vision Pro -laitteella otettujen kuvien kanssa.

#### High Power USB OTG

Pico 4 Ultra tukee High Power USB OTG:tä, jonka avulla voit käyttää vaativampia oheislaitteita, kuten ulkoista SSD-levyä.

<div align="center">
  <img src="https://raw.githubusercontent.com/Nyabsi/blog/refs/heads/main/images/p4u_review/highpower_otg.jpg"/>
</div>

</br>

## Pico Motion Trackers

Pico Motion Trackerit ovat kohtuuhintaisia kokovartaloseurantaratkaisuja, jotka käyttävät kalibrointiin ja ajelehtimisen korjaamiseen IR-Constellationin ja IMU:n yhdistelmää, jossa on koneoppimisen malli asennon ennustamiseen, ja ne voivat seurata 24 ihmiskehon niveltä.

<div align="center">
  <img src="https://raw.githubusercontent.com/Nyabsi/blog/refs/heads/main/images/p4u_review/pico_motion_trackers.jpg"/>
</div>

</br>

Tällä hetkellä Pico 4 Ultra tukee enintään kolmea liikkeenseurantalaitetta, jotka voit liittää toisiinsa Tracker-sovelluksen kautta noudattamalla näytön ohjeita.

Kun seurantalaitteet on pariliitetty, voit aloittaa kalibrointiprosessin, jonka pitäisi kestää enintään 5 sekuntia tai vähemmän, minkä jälkeen voit hypätä suosikkipeliin ja aloittaa seurantalaitteiden käytön.

PICO on onnistunut tekemään seurantalaitteiden käytöstä erittäin helppoa, se ei vaadi laajoja asetuksia tai kalibrointia, mikä saa minut suosimaan niitä jopa Vive-seurantalaitteitteni sijaan.

### Akunkesto

Seurantalaitteet kestävät yli 20 tuntia jatkuvassa käytössä ja kestävät viikkoja, jos niitä käytetään keskimäärin tunti päivässä.

### Ergonomia

Seurantalaite painaa 27 grammaa ja hihna 12 grammaa, joten seurantalaite painaa yhteensä 39 grammaa.

Ne ovat kevyitä ja erittäin mukavia käyttää tuntikausia.

### Seuranta

Pico Motion Trackerien tarkkuus voi vaihdella, ne eivät ole missään nimessä yhtä hyviä kuin Vive Tracker, mutta ne tarjoavat seurannan, joka toimii hyvin ihmisen liikkeiden, kuten kävelyn, hyppäämisen, potkimisen, välittämiseen.
Koska tarkkuus on puutteellinen, minusta tuntuu, että ne eivät tarjoa tarpeeksi läsnäoloa tietyissä sovelluksissa, kuten sosiaalisessa VR:ssä, koska seuranta ei vastaa fyysistä liikettäsi, yksi hyvin erityinen esimerkki on se, että ne eivät pysty seuraamaan lantion yläpuolella.

Ja jos haluat käyttää tuotetta nimeltä ”Motion Tracker” laiskotteluun, se on täysin mahdollista! Voit käyttää Pico Motion Trackereita makaamiseen tai istumiseen ongelmitta pidemmän aikaa.

Tosin niiden automaattinen yaw-drift-korjaus perustuu liikkeisiin, joten jos vain istut tai makaat, saatat huomata pientä ajelehtimista yaw-akselilla, joka korjaantuu, kun alat liikkua.

## Johtopäätös

En ole laitteiston arvioija, toimittaja tai vaikuttaja eikä minulle makseta tämän arvostelun kirjoittamisesta, joten en suosittele tuotetta tai kehota sinua ostamaan sitä affliate-linkkini kautta.

Tämä arvostelu tehtiin puhtaasti laitteen ja sen käyttämän ohjelmiston arvostuksesta, sillä se tulkitaan yleisesti väärin paskan journalismin ja vaikuttajien takia, jotka eivät pysty tekemään työtään kunnolla, häpeä heille.
Uskon kuitenkin, että laite ei sovi kaikille ja haluan tehdä asian selväksi, sillä olen huomannut, että useimmat ihmiset ostavat näitä laitteita pelien takia, Pico 4 Ultra on loistava pelilaite suorituskykynsä ansiosta, mutta ongelmana on sisällön puute, joten jos haluat pelata uusimpia kuumia pelejä, kuten Batmania tai Resident Evil 4 VR:ää, et valitettavasti löydä niitä Picolta, koska ne ovat Meta-yksinoikeudella.

Mutta kun pelit tukevat Picoa, kuten VRChat tai Blade & Sorcery, natiivin integraation ansiosta nämä pelit toimivat paremmin kuin Quest 3:lla korkeammalla resoluutiolla ja pienemmällä tuulettimen äänellä, ja jos nimike tukee sitä, saat myös Full Body Tracking -ominaisuuden, jonka avulla voit potkia vihollisia tai maata sohvalla katsoessasi elokuvaa.

Pelaaminen syrjään, Mielestäni suurin väärinkäsitys Pico 4 Ultra on, että se ei ole vain *pelilaite* se loistaa tuottavuudessa ansiosta se on vaikuttava moniajo-ominaisuuksia ja sen myös todella suuri viihde kiitos widevine L1 todistus palvelut kuten Netflix, Hulu ja Amazon Prime toimii valmiiksi, mikä tarkoittaa, että voit nauttia kaikki sarjat ja elokuvat laitteessa helposti.

Väittäisin, että Pico 4 Ultra on tinkerers unelma, kun se tulee Android-pohjainen Standalone-laite, Pico OS on erittäin avoin ja hyvin optimoitu järjestelmä, joka todella tekee sinusta arvostaa käyttämällä järjestelmää, voit kertoa kehittäjät, jotka työskentelevät järjestelmän, todella käyttää omaa tuotettaan sen sijaan, että vain kaivaa nenänsä.
Minun on kuitenkin sanottava, että en suosittele tätä laitetta MixedVR-asetelmiin, kuten Lighthouse-laitteiden ja Pico-laitteen sekoittamiseen, se on kauhea kokemus ja kyllä sinulla ei ole hyvää kokemusta. Mutta jos käytät PCVR streamingia ilman mitään outoja asetelmia, se on hyvin tavallinen langaton kokemus ilman paljon valituksia.

Olen myös vaikuttunut laitteen spatiaalisista ominaisuuksista; läpivienti, spatiaalisten videoiden ja valokuvien katselu sekä spatiaalisen sisällön tallentaminen. Se tarjoaa niin erilaisen kokemuksen median katselusta, että kun sen kerran kokee, on vaikea palata vanhaan tylsään 2D:hen, mutta valitettavasti sisältöä ei ole paljon tarjolla.

Tämä on melko paljon minun johtopäätökseni laitteesta, voit vapaasti olla eri mieltä, samaa mieltä tai ehkä ei ole mielipidettä. Jaan tämän vain siksi, että pidän ostamastani laitteesta, en voi sanoa samaa jokaisesta omistamastani laitteesta ja koska mielestäni laite on heikentynyt huonon esittelyn takia julkisesti.
