document.addEventListener('DOMContentLoaded', () => {
    // Sélectionne les éléments nécessaires
    const readPdfBtn = document.querySelector('.js-read-pdf');
    const pdfViewerSection = document.getElementById('pdf-viewer-section');
    const pdfViewerArea = document.getElementById('pdf-viewer-area');
    const closePdfBtn = document.getElementById('close-pdf-btn');
    const introSection = document.getElementById('intro-section');
    const featuresSection = document.getElementById('features-section');

    // Vérifie que tous les éléments nécessaires existent
    if (readPdfBtn && pdfViewerSection && pdfViewerArea && closePdfBtn && introSection && featuresSection) {

        // Cache initialement la section du lecteur PDF et le bouton Fermer via JS
        // Ceci est important pour assurer que l'état initial est correct même si le CSS tarde à charger
        pdfViewerSection.classList.add('hidden');
        closePdfBtn.classList.add('hidden'); // Utilise la même classe 'hidden' que les sections

        // Écoute le clic sur le bouton "Lire le PDF"
        readPdfBtn.addEventListener('click', (event) => {
            event.preventDefault(); // Empêche l'action par défaut du lien

            const pdfUrl = readPdfBtn.getAttribute('href'); // Récupère l'URL du PDF

            // S'assure que l'iframe n'est pas ajoutée plusieurs fois
            // (Supprime toute iframe existante si l'utilisateur clique plusieurs fois)
            while (pdfViewerArea.firstChild) {
                pdfViewerArea.removeChild(pdfViewerArea.firstChild);
            }

            // Crée un nouvel élément iframe
            const pdfIframe = document.createElement('iframe');
            pdfIframe.src = pdfUrl;
            pdfIframe.title = "Lecture du document PDF";
            pdfIframe.setAttribute('loading', 'lazy'); // Chargement paresseux

            // Insère l'iframe dans la zone d'affichage
            pdfViewerArea.appendChild(pdfIframe);

            // Cache les sections d'introduction et de fonctionnalités AVEC transition
            introSection.classList.add('hidden');
            featuresSection.classList.add('hidden');

            // Affiche la section du lecteur PDF et le bouton Fermer AVEC transition
            pdfViewerSection.classList.remove('hidden');
            closePdfBtn.classList.remove('hidden');

            // Défile vers la section du lecteur PDF après un court délai
            // pour laisser le temps aux transitions de commencer
             setTimeout(() => {
                 pdfViewerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
        });

        // Écoute le clic sur le bouton "Fermer la lecture"
         closePdfBtn.addEventListener('click', () => {
             // Cache la section du lecteur PDF et le bouton Fermer AVEC transition
            pdfViewerSection.classList.add('hidden');
            closePdfBtn.classList.add('hidden');

             // Ré-affiche les sections d'introduction et de fonctionnalités AVEC transition
            introSection.classList.remove('hidden');
            featuresSection.classList.remove('hidden');

             // Supprime l'iframe du PDF pour "nettoyer" le DOM et libérer des ressources
             const pdfIframe = pdfViewerArea.querySelector('iframe');
             if (pdfIframe) {
                 pdfViewerArea.removeChild(pdfIframe);
             }

             // Défile vers la section d'introduction après un court délai
             setTimeout(() => {
                 introSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
             }, 100);
         });

    } else {
        console.error("Erreur: Un ou plusieurs éléments HTML nécessaires au script sont manquants.");
        console.log("Éléments vérifiés (true si trouvé):", {
            readBtn: !!readPdfBtn,
            viewerSection: !!pdfViewerSection,
            viewerArea: !!pdfViewerArea,
            closeBtn: !!closePdfBtn,
            intro: !!introSection,
            features: !!featuresSection
        });
         // Si le script ne peut pas s'exécuter correctement, le bouton "Lire le PDF" agira comme un lien normal
    }
});