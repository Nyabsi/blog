---
outline: deep
---

# Ai, teemoja vai?

Ostin hiljattain viime vuoden joulukuussa uuden vekottimen, Pico 4 Ultra -virtuaalitodellisuuslasit, jotka julkaistiin elokuussa 2024. Pidän laitteesta monilta osin, mutta kykyä luoda tai käyttää mukautettuja teemoja ei ollut, ajattelin, että se olisi hauska haaste.

Tämä mielessä, päätin ottaa haasteen vastaan, joten vietin jonkin aikaa selvittääkseni, miten se tehdään, ja dokumentoida ja toteuttaa työkalut muille ihmisille. Tässä artikkelissa kerrotaan, miten selvitin, miten se tehdään, ja esitetään lähestymistapani analyysiin.

<div align="center">
  <video loop autoplay muted>
    <source src="https://github.com/Nyabsi/blog/raw/refs/heads/main/videos/virtual_environment.mp4" type="video/mp4">
  </video>
  <p>Fig 1: Video showcasing the Pico Environment Selection</p>
</div>

### Ensimmäinen askele

Koska tiesin, että Pico 4 Ultra käyttää muokattua Androidia, pystyin helposti aloittamaan järjestelmän tutkimisen adb:n kautta.

> [!NOTE]
> adb eli Android Debug Bridge on työkalu, jolla voi kommunikoida Android-laitteiden kanssa kehitystarkoituksiin.

<br/>

#### Kehitystila

Ensin minun piti ottaa kehittäjätila käyttöön, mutta se oli yllättävän helppoa, minun piti vain tehdä;

Mene kohtaan Asetukset -> Tietoja -> Ohjelmistoversio (klikkaa 7 kertaa).

ja uusi välilehti nimeltä ”Developer” ilmestyi, jonka avulla voit ottaa käyttöön ”USB Debug” joka mahdollistaa ADB-vianmäärityksen.

<div align="center">
  <img src="https://raw.githubusercontent.com/Nyabsi/blog/refs/heads/main/images/pico_developer.jpg"/>
  <p>Fig 2: Kehittäjätila</p>
</div>

<br/>

#### Asennettujen pakettien tutkiminen

Seuraava asia, jonka tein, oli listata kaikki asennetut järjestelmäpaketit `adb shell pm list packages` -komennolla ja tarkastaa tulosteet:

```
// ...
package:com.pvr.ZeroIsland.scene
package:com.pvr.EnchantedLibrary.scene <--
package:com.pvr.MountainVilla.scene
package:com.pvr.MoonshadowDunes.scene
package:com.pvr.ZeroIslandNight.scene
package:com.pvr.WoodenHouse.scene
package:com.pvr.SeaviewVilla.scene
// ...
```

Tarkasteltuani tulostetta jonkin aikaa muutama pakettia erottuivat joukosta, niillä oli etuliite `com.pvr` ja loppuliite `scene`, nimi myös vastasi niitä, jotka olin ladannut ympäristövalitsimesta, joten minulla oli kohtuullinen epäilys siitä, että nämä paketit ovat niitä, joita olen etsimässä.

Siirsin yhden paketeista tietokoneelleni jatkoanalyysiä varten ratkaisemalla ensin paketin koko polun `adb shell pm path` -komennolla ja kopioimalla sitten apk-tiedoston `adb pull` -komennolla tietokoneelleni.

<br/>

### Paketin tarkempi analyysi

Ensimmäiseksi purin apk-tiedoston [apktool](https://apktool.org/) avulla selvittääkseni kansiorakenteen.

> [!NOTE]
> Apktool on apk (Android Package) -tiedostojen käänteistekniikkaan tarkoitettu työkalu, jonka avulla voit purkaa ja kääntää apk(t) uudelleen.

```
assets
  -> scene
      -> {Nimi}
          -> Scene_{Nimi}_1_1.unity3d
  -> thumbs
      -> {Nimi}
          -> Scene_{Nimi}_1_1.png
res
  -> values
      -> integers.xml
      -> strings.xml
```

Paketti ei sisältänyt mitään koodia, mikä tarkoittaa, että se on resurssipaketti, jonka jokin muu järjestelmä lukee. Rakennetta tarkastellessani silmääni osui `.unity3d`-tiedosto, koska tämä on [Unity Engine](https://unity.com/):lle tunnettu tiedostomuoto, jonka vuoksi katsoin loput tiedostorakenteesta läpi.

#### integers.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <integer name="sceneType">1</integer>
</resources>
```

Se sisältää `sceneType`, joka näyttää siltä, että sitä käytetään ympäristön tyypin määrittämiseen.

#### strings.xml

```xml
<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name="SceneName_EnchantedLibrary">Enchanted Library</string>
    <string name="linkedPackageName">com.pvr.EnchantedLibrary</string>
    <string name="linkedUnlockKey" />
    <string name="linkedVersionIdentification" />
    <string name="sceneTag">EnchantedLibrary</string>
</resources>
```

Se sisältää muutamia merkkijonomääritelmiä, joita ilmeisesti käytetään tunnistamiseen, mikä tulee tärkeäksi myöhemmin.

<br/>

#### se Unity3D-tiedosto

Käytin [AssetRipperiä](https://github.com/AssetRipper/AssetRipper) purkaamaan nipun Unity-projektiin, ja se pystyi myös määrittämään Unityn kohdeversion nipun metatiedoista.

> [!NOTE]
> AssetRipper on työkalu serialisoitujen Unity-paketti:en purkamiseen ja niiden viemiseen projekteiksi.

Se ehdotti, että `.unity3d`-tiedosto luotiin Unity 2021.3.5f1:llä, joten asensin sen Android-tuella.

Kun avasin projektin, näin lukemattomia virheitä, joten asensin [Pico Unity Integration SDK](https://developer.picoxr.com/resources/) projektiin ja virheet olivat poissa.

Tietäen, että tarvitsin `Unity 2021.3.5f1` ja `Pico Unity Integration SDK`, minulla oli kaikki tiedot oman paketin luomiseen.

<br/>

### Epäonnistunut yritys

Ensimmäinen asia, jonka tein sen jälkeen, kun olin selvittänyt formaatin, oli yrittää asentaa uudelleen nimetty paketti, mutta se ei näkynyt virtuaaliympäristö-välilehdellä.

Aloin miettiä, ehkä järjestelmä ei pidä tuntemattomista allekirjoituksista tai ehkä siinä on jotain muuta.

Joten aloin tutkia järjestelmää selvittääkseni, miten teemat ladataan.

<br/>

#### Scenemanagerin ymmärtäminen

Epäonnistuneen yrityksen jälkeen minulle jäi yksi kysymys:

”Miten sanon järjestelmälle, että se vaihtaa ympäristön haluamaani ympäristöön?”

Tätä ajatellen aloin tutkia asennettujen pakettien luetteloa, kunnes törmäsin `com.pvr.scenemanageriin`.

Niinpä siirsin sen tietokoneelleni ja purin apk:n [jadx](https://github.com/skylot/jadx):ssa, jotta APK:sta tulisi luettavaa Java-koodia.

> [!NOTE]
> JADX on Dex -> Java käänto-apuri työkalu mikä mahdollistaa pakettien analysoinnin.

Huomasin, että paketti sisälsi saman kansiorakenteen kuin teemapaketit, nämä olivat laitteeseen esiasennettuja oletusteemoja, mutta se sisälsi myös koodia.

Niinpä aloin etsiä merkkijonoja, jotka löysimme aiemmin ympäristöpaketista, kunnes törmäsin funktioon nimeltä `setCurrentSceneWithPkg`:

```java
public void setCurrentSceneWithPkg(String sceneTag, String scenePath, String scenePackage, boolean save) {
    if (save) {
        saveScene(sceneTag, scenePath, scenePackage);
        Settings.Global.putString(
            this.mResolver, 
            Constant.KEY_SCENE_CHANGE_TYPE /* scene_change_type */, 
            System.currentTimeMillis() + "1"
        );
    }
}
```

joka johtaa funktioon `saveScene`:

```java
private synchronized void saveScene(String sceneTag, String scenePath, String scenePackage) {
    // ...
    Settings.Global.putString(
        this.mResolver, 
        Constant.KEY_SCENEMARK_FORSHORTCUT /* SceneManager.CurrentScene */,
        sceneTag
    );

    // ...
    Settings.Global.putString(
        contentResolver, 
        Constant.KEY_CURRENT_SCENE /* current_scene */,
        scenePath
    );

    Settings.Global.putString(
        this.mResolver, 
        Constant.KEY_SCENE_CURPACKGE /* SceneManager.CurPackage */,
        scenePackage
    );

    /* ... */
}
```

Näytti siltä, että tiedot nykyisestä teemasta oli tallennettu [Global System Settings](https://developer.android.com/reference/android/provider/Settings.Global), mikä tarkoitti, että voisimme muuttaa näitä arvoja.

<br/>

### Mukautetun paketin luominen ja sen lataaminen

Kun olin aseistettu kaiken tämän tiedon kanssa, loin tyhjän Unity-Scene:n Unity 2021.3.5f1:llä (w/ Pico Unity Integration SDK) ja loin paketin skriptin avulla, jonka otin [Unity Documentation](https://docs.unity3d.com/6000.0/Documentation/Manual/AssetBundles-Workflow.html) ja jota muokkasin hieman rakentaakseni sen Androidille Windowsin sijasta.

```cs
using UnityEditor;
using System.IO;

public class CreateAssetBundles
{
    private string assetBundleDirectory = "Assets/AssetBundles";

    [MenuItem("Assets/Build AssetBundles")]
    static void BuildAllAssetBundles()
    {
        
        if(!Directory.Exists(assetBundleDirectory))
            Directory.CreateDirectory(assetBundleDirectory);

        BuildPipeline.BuildAssetBundles(
            assetBundleDirectory,
            BuildAssetBundleOptions.None,
            BuildTarget.Android
        );
    }
}
```

nyt kun minulla oli nippu, minun piti luoda ympäristöpaketti, joten otin apk:n, jonka olin siirtänyt laitteesta, ja nimesin `strings.xml`:n arvot ja packageId:n joksikin muuksi, ja sitten vaihdoin unityn nipun omaan, ja asensin paketin laitteeseeni.

vaihtaakseni varsinaisesti teemaa minun piti ajaa seuraavat komennot:

```
adb shell settings put global SceneManager.CurPackage com.pvr.[Nimi].scene
adb shell settings put global SceneManager.CurrentScene [Nimi]
adb shell settings put global current_scene /assets/scene/[Nimi]/Scene_[Nimi]_1_1.unity3d
```

<div align="center">
  <video loop autoplay muted>
    <source src="https://github.com/Nyabsi/blog/raw/refs/heads/main/videos/custom_theme.mp4" type="video/mp4">
  </video>
  <p>Fig 3: Unity Default scene -teema ladattuna Picoon</p>
</div>

Ja rummut soikoon, *Dudududud psst*, ja se toimi! Meillä on mukautettu unity-paketti ladattuna laitteeseen!

<br/>

### Entä Virtuaaliympäristö-välilehti?

Pico pitää luetteloa palvelimella olevasta virallisten teemoista, josta käyttöjärjestelmä sitten pyytää luetteloa, ja tämä täyttää Virtual Environment -välilehden. Tämä tarkoittaa sitä, että vain Picon hyväksymät teemat näkyvät Virtual Environment -välilehdellä.

Pico käyttää DoH:ta (DNS over HTTPS), mikä tekee DNS-uudelleenohjauksesta vaikeaa, ja lisäksi se vaatii järjestelmätason root CA:n ohituksen, mikä ei ole mahdollista Android 14:ssä, jolla Pico OS toimii.

Sen sijaan päätin kopioida virallisen ohjelmiston toiminnallisuuden tekemällä: [PicoThemeManager](https://github.com/Nyabsi/PicoThemeManager).

<div align="center">
  <video loop autoplay muted>
    <source src="https://github.com/Nyabsi/blog/raw/refs/heads/main/videos/pico_theme_manager.mp4" type="video/mp4">
  </video>
  <p>Fig 4: PicoThemeManager</p>
</div>

<br/>

### Loppu

Onnistuin tavoitteessani tehdä mahdolliseksi mukautettujen ympäristöjen luomisen Pico OS:lle, ja näin tein sen. 

Toivottavasti nautit prosessista yhtä paljon kuin minä. Minulla ei ole muuta sanottavaa, toivon teille mukavaa iltaa tai aamua tai yötä.

#### Käytetyttyökalut

- [AssetRipper](https://github.com/AssetRipper/AssetRipper)
- [Apktool](https://apktool.org/)
- [jadx](https://github.com/skylot/jadx)
