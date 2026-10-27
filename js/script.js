"use strict";

/* ORTAK MENÜ */

const header = document.getElementById("site-header");
const footer = document.getElementById("site-footer");
const currentPage = document.body.dataset.page || "home";

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
                type="button">☰</button>

            <nav class="nav-links" id="navLinks" aria-label="Ana menü">
                <a data-page-link="home" href="index.html">Ana Sayfa</a>
                <a data-page-link="wiki" href="wiki.html">Wiki</a>
                <a data-page-link="guides" href="rehberler.html">Rehberler</a>
                <a data-page-link="updates" href="guncellemeler.html">Güncellemeler</a>
                <a data-page-link="faq" href="faq.html">SSS</a>
            </nav>

            <div class="nav-actions">
                <a class="btn" href="wiki.html">Wiki'yi Keşfet</a>
                <a class="btn btn-primary" href="rehberler.html">Rehberler</a>
            </div>
        </div>
    `;

    const activeLink = header.querySelector(
        `[data-page-link="${currentPage}"]`
    );

    if (activeLink) {
        activeLink.classList.add("active");
        activeLink.setAttribute("aria-current", "page");
    }

    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navLinks");

    toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("open");

        toggle.textContent = open ? "✕" : "☰";
        toggle.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            toggle.textContent = "☰";
            toggle.setAttribute("aria-expanded", "false");
        });
    });
}

/* ORTAK FOOTER */

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
                <a href="guncellemeler.html">Güncellemeler</a>
                <a href="faq.html">SSS</a>
            </nav>
        </div>
    `;
}

/* TÜRKÇE KARAKTERLERE DUYARLI ARAMA YARDIMCISI */

function normalizeText(value) {
    return String(value || "")
        .toLocaleLowerCase("tr-TR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

/* ANA SAYFA ARAMASI */

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

        window.location.href = "wiki.html?q=" + encodeURIComponent(query);
    });
}

/* WIKI ARAMASI */

const wikiSearch = document.getElementById("wikiSearch");
const wikiCards = [...document.querySelectorAll("#wikiList .wiki-card")];
const wikiEmpty = document.getElementById("wikiEmpty");

function filterWiki() {
    if (!wikiSearch) return;

    const query = normalizeText(wikiSearch.value);
    let visible = 0;

    wikiCards.forEach(card => {
        const searchable = normalizeText(
            card.innerText + " " + (card.dataset.search || "")
        );

        const matches = searchable.includes(query);

        card.hidden = !matches;

        if (matches) visible++;
    });

    if (wikiEmpty) {
        wikiEmpty.hidden = visible !== 0;
    }
}

if (wikiSearch) {
    wikiSearch.addEventListener("input", filterWiki);

    const params = new URLSearchParams(window.location.search);

    const initialQuery = params.get("q");
    const category = params.get("category");

    if (initialQuery) {
        wikiSearch.value = initialQuery;
        filterWiki();
    } else if (category) {
        wikiCards.forEach(card => {
            card.hidden = card.dataset.category !== category;
        });
    }
}

const wikiSearchButton = document.getElementById("wikiSearchButton");

if (wikiSearchButton) {
    wikiSearchButton.addEventListener("click", filterWiki);
}

const showAllWiki = document.getElementById("showAllWiki");

if (showAllWiki) {
    showAllWiki.addEventListener("click", () => {
        if (wikiSearch) wikiSearch.value = "";

        wikiCards.forEach(card => {
            card.hidden = false;
        });

        if (wikiEmpty) wikiEmpty.hidden = true;
    });
}

/* SSS ARAMASI */

const faqSearch = document.getElementById("faqSearch");
const faqItems = [...document.querySelectorAll("#faqList details")];

if (faqSearch) {
    faqSearch.addEventListener("input", () => {
        const query = normalizeText(faqSearch.value);

        faqItems.forEach(item => {
            item.hidden = !normalizeText(item.innerText).includes(query);
        });
    });
}
