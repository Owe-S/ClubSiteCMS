# Velkommen til ClubSiteCMS API-dokumentasjon

**ClubSiteCMS** er en API- og CMS-modul designet for enkel administrasjon av innhold for klubbnettsteder. Dette API-et danner ryggraden for å håndtere nyheter, arrangementer, bildegallerier, brukerinformasjon og generelle nettstedsinnstillinger.

Denne dokumentasjonen gir en detaljert oversikt over alle tilgjengelige API-endepunkter, deres funksjonalitet, forventede parametere og responsformater.

## Hvordan bruke denne dokumentasjonen

Naviger gjennom "Modules"-menyen til høyre (eller der temaet plasserer den) for å utforske de forskjellige delene av API-et:

*   **main**: Oversikt over hovedapplikasjonen (`index.js`).
*   **routes/event**: Endepunkter for håndtering av arrangementer.
*   **routes/gallery**: Endepunkter for bildegalleriet.
*   **routes/news**: Endepunkter for nyhetsartikler.
*   **routes/siteSettings**: Endepunkter for generelle nettstedsinnstillinger.
*   **routes/user**: Endepunkter for brukerhåndtering, inkludert innlogging.

Hver modulbeskrivelse inneholder detaljer om de spesifikke HTTP-metodene (GET, POST, etc.) som støttes, samt informasjon om parametere og responser.

## Prosjektstatus og Oppnådde Mål

Vi har nylig fullført en betydelig refaktorering og strukturering av dette API-et. Hovedmålene som er oppnådd inkluderer:

*   **Modularisert Kodebase:** All API-logikk er flyttet fra en enkelt fil (`index.js`) til dedikerte, ressursspesifikke moduler under `routes/`-mappen. Dette forbedrer lesbarhet, vedlikeholdbarhet og skalerbarhet.
*   **Bruk av `express.Router`:** Hver modul benytter `express.Router` for en ren og organisert rutehåndtering.
*   **Omfattende JSDoc Dokumentasjon:** Samtlige moduler, funksjoner og endepunkter er grundig dokumentert med JSDoc-kommentarer.
*   **Automatisk Generert API-Dokumentasjon:** En GitHub Actions-workflow er satt opp for å automatisk bygge og publisere denne API-dokumentasjonen via GitHub Pages ved hver endring i `main`-branchen. Den dokumentasjonen du leser nå, er et resultat av denne prosessen.
*   **Fullstendig Refaktorering:** Alle opprinnelige endepunkter (`/api/news`, `/api/site/settings`, `/api/user`, `/api/user/login`, `/api/gallery`, `/api/event`) er nå refaktorert og inkludert i den nye, modulære strukturen.

## Prosjektfremdrift og Veikart (@Api to ClubSiteCMS)

Utviklingen av ClubSiteCMS API-et styres og spores gjennom vårt dedikerte GitHub Project: **@Api to ClubSiteCMS**. For den mest oppdaterte og detaljerte oversikten over nåværende oppgaver, fremdrift, og langsiktige planer, vennligst besøk prosjekttavlen:

➡️ **[Besøk @Api to ClubSiteCMS prosjekttavlen her](https://github.com/users/Owe-S/projects/1)** ⬅️

Nedenfor følger en overordnet status og et veikart som skisserer de viktigste utviklingsfasene:

### Nåværende Fokus
*   *(Her kan du manuelt legge inn en kort setning om hva som er hovedfokuset i utviklingen akkurat nå. Eksempel: "Initielt oppsett av databaselag og CRUD-operasjoner for nyhetsmodulen.")*

### Overordnet Veikart
Dette veikartet er basert på de tidligere identifiserte "Trinn for å utvikle videre" og representerer hovedmålene for prosjektet:

1.  **Fase 1: Kjernefunksjonalitet & CRUD**
    *   Fullføre alle grunnleggende Create, Read, Update, Delete (CRUD) operasjoner for samtlige API-ressurser (nyheter, arrangementer, galleri, brukere, innstillinger).
2.  **Fase 2: Datapersistens**
    *   Migrere fra in-memory datalagring til en robust databaseløsning (f.eks. MongoDB, PostgreSQL).
3.  **Fase 3: Sikkerhet og Validering**
    *   Implementere sikker autentisering (JWT) og autorisasjonsmekanismer.
    *   Innføre grundig input-validering og forbedret feilhåndtering.
4.  **Fase 4: Testing og Kvalitetssikring**
    *   Utvikle en omfattende testsuite med enhets- og integrasjonstester.
5.  **Fase 5: Forberedelse for Frontend**
    *   Sikre at API-et er klart og optimalisert for integrasjon med en frontend-applikasjon.
    *   Vurdere og implementere ytterligere funksjoner som paginering, filtrering, og sortering der det er relevant.

*(Denne oversikten vil bli oppdatert periodisk for å reflektere prosjektets fremgang. Den detaljerte dag-til-dag oppgavestyringen og spesifikke tidslinjer finnes på GitHub Project-tavlen.)*

## Trinn for å utvikle videre

Med det nåværende solide fundamentet på plass, er her noen foreslåtte neste steg for videre utvikling av ClubSiteCMS:

1.  **Utvide Funksjonalitet (CRUD):**
    *   Implementere fullstendige CRUD-operasjoner (Create, Read, Update, Delete) for alle ressurser. For eksempel, legge til `GET /api/news/:id`, `PUT /api/news/:id`, `DELETE /api/news/:id`, og tilsvarende for `event`, `gallery`, og `user`.
2.  **Datapersistens:**
    *   Erstatte den nåværende "in-memory" datalagringen med en robust databaseløsning (f.eks. MongoDB med Mongoose, PostgreSQL med Sequelize/Prisma, eller Firebase Firestore).
3.  **Forbedret Feilhåndtering:**
    *   Implementere en mer sentralisert og detaljert feilhåndteringsmekanisme. Definere egne feilklasser og standardiserte feilresponser.
4.  **Input-validering:**
    *   Introdusere server-side validering for all inputdata (request body, query parametere, path parametere) ved hjelp av biblioteker som `Joi`, `express-validator`, eller `Zod`.
5.  **Autentisering og Autorisasjon:**
    *   Utvikle et sikkert autentiseringssystem (f.eks. basert på JWT - JSON Web Tokens) for `/api/user/login`.
    *   Implementere autorisasjonsmekanismer for å beskytte visse endepunkter basert på brukerroller (f.eks. administrator vs. vanlig bruker).
6.  **Testing:**
    *   Skrive enhetstester for forretningslogikk og hjelpefunksjoner.
    *   Skrive integrasjonstester for API-endepunktene for å sikre at de fungerer som forventet. Verktøy som Jest, Mocha, Chai, og Supertest kan benyttes.
7.  **Frontend-integrasjon:**
    *   Starte utviklingen av en frontend-applikasjon (f.eks. med React, Vue, Angular, eller Svelte) som konsumerer dette API-et for å bygge det faktiske klubbnettstedet.
8.  **Konfigurasjon og Miljøvariabler:**
    *   Bruke miljøvariabler (f.eks. via `.env`-filer og `dotenv`-pakken) for konfigurerbare verdier som database-tilkoblingsstrenger, JWT-hemmeligheter, og serverport.
9.  **Logging:**
    *   Implementere et logging-system (f.eks. med `Winston` eller `Morgan`) for å spore forespørsler, feil og viktig systeminformasjon.
10. **Sikkerhetsforbedringer:**
    *   Vurdere vanlige sikkerhetstrusler (XSS, CSRF, SQL Injection hvis relevant) og implementere mottiltak. Bruke verktøy som `helmet` for å sette sikre HTTP-headers.

Dette gir en god vei fremover for å bygge et fullverdig og robust CMS for klubbnettsteder. Lykke til med videre utvikling!
