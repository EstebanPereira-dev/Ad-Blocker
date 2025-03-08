(function() {
    console.log("🚀 Ad Blocker activé !");

    const adSelectors = [
        // Bloque les pubs Google Ads
        "iframe[src*='ads']", "iframe[src*='doubleclick.net']", "ins.adsbygoogle",
        "[aria-label='Annonces']", "[aria-label='Publicité']", "[data-google-query-id]",

        // Bloque les pubs YouTube spécifiques
        ".ytp-ad-module", ".video-ads", ".ytp-ad-overlay-container", 
        ".ytp-ad-player-overlay", ".ytp-ad-text", ".ytp-ad-skip-button", 
        "ytd-ad-slot-renderer", "ytd-promoted-sparkles-web-renderer", 
        "ytd-companion-slot-renderer", "ytd-in-feed-ad-layout-renderer",

        // Autres pubs classiques
        "div[class*='ad-container']", "div[class*='ad-slot']", 
        "div[class*='floating-ad']", "div[class*='bottom-ads']", 
        "div[class*='top-ads']", "div[class*='fixed-ad']", 
        "div[class*='ad-wrapper']", "div[class*='google_ads']", 
        "section[class*='ads']", "a[href*='doubleclick.net']"
    ];

    function removeAds() {
        adSelectors.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                let parent = el.parentElement;
                el.remove();

                // Supprime les conteneurs vides après suppression
                if (parent && parent.innerHTML.trim() === "") {
                    parent.remove();
                }
            });
        });

        console.log("✅ Pubs supprimées !");
    }

    // Supprime les pubs dès le chargement
    removeAds();

    // 🔄 Surveille la page et supprime les pubs qui apparaissent après coup
    const observer = new MutationObserver(() => {
        removeAds();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    console.log("🔄 Mode Lecture activé en continu pour bloquer les nouvelles pubs.");
})();
