"use strict";

/* ========================================
   GAMEGUIDE - ORTAK MENÜ
======================================== */

const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");
const currentPage = document.body.dataset.page || "home";

/* ÜST MENÜ */

if (header) {
    header.className = "site-header";

    header.innerHTML = `
        <div class="container navbar">

            <a class="logo" href="index.html" aria-label="GameGuide ana sayfa">
                <div class="logo-mark">G</div>
                <div>Game<span>Guide</span></div>
            </a>

            <button
                class="menu-toggle"
                id="menuToggle"
                aria-label="Menüyü aç veya kapat"
                aria-expanded="false"
                type="button">
                ☰
            </button>

            <nav class="nav-links" id="navLinks" aria-label="Ana menü">
                <a data-page-link="home" href="index.html">Ana Sayfa</a>
                <a data-page-link="wiki" href="wiki.html">Wiki</a>
                <a data-page-link="guides" href="rehberler.html">Rehberler</a>
                <a data-page-link="tips" href="onemli-oneriler.html">Önemli Öneriler</a>
                <a data-page-link="updates" href="guncellemeler.html">Güncellemeler</a>
                <a data-page-link="faq" href="faq.html">SSS</a>
            </nav>

            <div class="nav-actions">
                <a class="btn" href="wiki.html">Wiki'yi Keşfet</a>
                <a class="btn btn-primary" href="rehberler.html">Rehberler</a>
            </div>

        </div>
    `;

    /* Aktif sayfayı işaretle */

    const activeLink = header.querySelector(
        `[data-page-link="${currentPage}"]`
    );

    if (activeLink) {
        activeLink.classList.add("active");
        activeLink.setAttribute("aria-current", "page");
    }

    /* Mobil menü */

    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navLinks");

    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("open");

            toggle.textContent = isOpen ? "✕" : "☰";
            toggle.setAttribute("aria-expanded", String(isOpen));
        });

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("open");

                toggle.textContent = "☰";
                toggle.setAttribute("aria-expanded", "false");
            });
        });
    }
}


/* ========================================
   ORTAK FOOTER
======================================== */

if (footer) {
    footer.className = "site-footer";

    footer.innerHTML = `
        <div class="container footer-inner">

            <div>
                <a class="logo" href="index.html">
                    <div class="logo-mark">G</div>
                    <div>Game<span>Guide</span></div>
                </a>

                <p class="footer-description">
                    Minecraft dünyasını keşfet. Öğren. Geliş.
                </p>

                <p class="footer-description">
                    © ${new Date().getFullYear()} GameGuide.
                    Bağımsız topluluk projesi.
                </p>
            </div>

            <nav class="footer-links" aria-label="Alt menü">
                <a href="index.html">Ana Sayfa</a>
                <a href="wiki.html">Wiki</a>
                <a href="rehberler.html">Rehberler</a>
                <a href="onemli-oneriler.html">Önemli Öneriler</a>
                <a href="guncellemeler.html">Güncellemeler</a>
                <a href="faq.html">SSS</a>
            </nav>

        </div>
    `;
}


/* ========================================
   TÜRKÇE KARAKTERLİ ARAMA YARDIMCISI
======================================== */

function normalizeText(value) {
    return String(value || "")
        .toLocaleLowerCase("tr-TR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}


/* ========================================
   ANA SAYFA ARAMASI
======================================== */

const siteSearch = document.getElementById("siteSearch");
const homeSearch = document.getElementById("homeSearch");

if (siteSearch && homeSearch) {
    siteSearch.addEventListener("submit", event => {
        event.preventDefault();

        const query = homeSearch.value.trim();

        if (!query) {
            homeSearch.focus();
            return;
        }

        window.location.href =
            "wiki.html?q=" + encodeURIComponent(query);
    });
}


/* ========================================
   WIKI ARAMASI VE KATEGORİ FİLTRELEME
======================================== */

const wikiSearch = document.getElementById("wikiSearch");

const wikiCards = [
    ...document.querySelectorAll("#wikiList .wiki-card")
];

const wikiEmpty = document.getElementById("wikiEmpty");

const wikiSearchButton = document.getElementById("wikiSearchButton");
const showAllWiki = document.getElementById("showAllWiki");

let selectedCategory = "";

function filterWiki() {
    if (!wikiSearch) {
        return;
    }

    const query = normalizeText(wikiSearch.value.trim());
    let visibleCount = 0;

    wikiCards.forEach(card => {
        const searchableText = normalizeText(
            card.innerText + " " + (card.dataset.search || "")
        );

        const matchesSearch = searchableText.includes(query);

        const matchesCategory =
            !selectedCategory ||
            card.dataset.category === selectedCategory;

        const isVisible = matchesSearch && matchesCategory;

        card.hidden = !isVisible;

        if (isVisible) {
            visibleCount++;
        }
    });

    if (wikiEmpty) {
        wikiEmpty.hidden = visibleCount !== 0;
    }
}


/* URL üzerinden gelen arama ve kategori */

if (wikiSearch) {
    const params = new URLSearchParams(window.location.search);

    const initialQuery = params.get("q") || "";
    const initialCategory = params.get("category") || "";

    wikiSearch.value = initialQuery;
    selectedCategory = initialCategory;

    filterWiki();

    wikiSearch.addEventListener("input", () => {
        filterWiki();
    });
}


/* Ara butonu */

if (wikiSearchButton) {
    wikiSearchButton.addEventListener("click", () => {
        filterWiki();

        const wikiSection = document.getElementById("wikiList");

        if (wikiSection) {
            wikiSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
}


/* Tüm içerikleri göster */

if (showAllWiki) {
    showAllWiki.addEventListener("click", () => {
        selectedCategory = "";

        if (wikiSearch) {
            wikiSearch.value = "";
        }

        filterWiki();
    });
}


/* Wiki kategori butonları */

const categoryButtons = document.querySelectorAll(".category-filter");

categoryButtons.forEach(button => {
    button.addEventListener("click", () => {
        selectedCategory = button.dataset.category || "";

        if (wikiSearch) {
            wikiSearch.value = "";
        }

        filterWiki();

        const wikiSection = document.getElementById("wikiList");

        if (wikiSection) {
            wikiSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* ========================================
   SSS ARAMASI
======================================== */

const faqSearch = document.getElementById("faqSearch");

const faqItems = [
    ...document.querySelectorAll("#faqList details")
];

if (faqSearch) {
    faqSearch.addEventListener("input", () => {
        const query = normalizeText(faqSearch.value.trim());

        faqItems.forEach(item => {
            const text = normalizeText(item.innerText);

            item.hidden = !text.includes(query);
        });
    });
}


/* ========================================
   SAYFA KONSOL KONTROLÜ
======================================== */

console.info("GameGuide JavaScript başarıyla yüklendi.");
