# Bijdragen aan CodeBlog.nl

Bedankt dat je wilt bijdragen! We hebben het proces zo eenvoudig mogelijk gemaakt voor iedereen met programmeerervaring, ook als je nog nooit met Nuxt hebt gewerkt.

## Hoe voeg ik een artikel toe?

Artikelen staan in de map `content/blog/`. Volg deze stappen om een nieuw artikel toe te voegen:

1. **Maak een nieuw Markdown-bestand**: Maak een bestand aan in `content/blog/` met de naam `jouw-artikel-titel.md`.
2. **Voeg Frontmatter toe**: Elk artikel begint met een blok tekst tussen `---`. Dit bevat de metadata:

    ```markdown
    ---
    title: 'De Titel van je Artikel'
    description: 'Een korte samenvatting van je artikel.'
    date: '30/04/26'
    author: 'Jouw Volledige Naam'
    tags: ['Tag1', 'Tag2']
    ---
    
    Hier begint de inhoud van je artikel in Markdown...
    Je kan hier alle markdown dingen (koppen, codeblokken, links, etc.) gebruiken.
    ```

3. **Koppel een auteur**: Gebruik de exact dezelfde naam als in je auteursbestand (`content/authors/JouwNaam.json`) bij de `author` property in de frontmatter.

## Hoe voeg ik een auteur toe?

Als dit je eerste artikel is, voeg jezelf dan toe als auteur:

1. **Maak een nieuw JSON-bestand**: Maak een bestand aan in `content/authors/` met de naam `VoornaamAchternaam.json` (bijv. `LouellaCreemers.json`).
2. **Voeg je gegevens toe**: Gebruik de volgende structuur:

    ```json
    {
      "name": "Jouw Volledige Naam",
      "image": "/images/authors/jouw-foto.jpg",
      "description": "Een korte biografie over jezelf.",
      "link": "https://jouw-website.nl"
    }
    ```

3. **Voeg een foto toe**: Plaats je profielfoto in de map `public/images/authors/`. Zorg dat de naam in de JSON-file (`image`) exact overeenkomt met het bestandspad.

## Afbeeldingen gebruiken

- **Profielfoto's**: Plaats deze in `public/images/authors/`.
- **Blog afbeeldingen**: Afbeeldingen die je in je artikel wilt gebruiken, plaats je in `public/images/blog/`.

## Mappenstructuur Overzicht

- `content/blog/`: Hier staan alle artikelen (.md).
- `content/authors/`: Hier staan de auteursprofielen als individuele JSON-bestanden.
- `public/images/authors/`: Hier staan de profielfoto's van auteurs.
- `public/images/blog/`: Hier staan afbeeldingen voor in de blogartikelen.

## Lokaal testen (Optioneel)

Als je de website lokaal wilt draaien om je wijzigingen te zien:

### Met docker

Als je Docker hebt geïnstalleerd, kun je de development omgeving draaien zonder lokaal Node.js te installeren:

1. **Bouw de image**:

    ```bash
    docker build -t codeblog-dev -f Dockerfile.dev .
    ```

2. **Start de container**:

    ```bash
    docker run -it --rm -p 3000:3000 -v ${PWD}:/app codeblog-dev
    ```

    *Op Windows (PowerShell) gebruik je `${PWD}`, op Linux/Mac gebruik je `$(pwd)`.*

De website is daarna bereikbaar op `http://localhost:3000`. Wijzigingen die je lokaal maakt, worden direct doorgevoerd in de container dankzij het 'volume' (`-v`).

### Handmatig

1. Installeer afhankelijkheden: `npm install`
2. Start de development server: `npm run dev`
3. Ga naar `http://localhost:3000`

Dat is alles! Maak een Pull Request aan en we kijken er zo snel mogelijk naar.
