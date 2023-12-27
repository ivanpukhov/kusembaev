const jsonLdData = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    "name": "Kuzembaev Consalting",
    "url": "https://kuzembaev.com",
    "description": "Веб-сайт предоставляет экспертные консультации в различных областях, включая бизнес, финансы, технологии и образование.",
    "publisher": {
        "@type": "Organization",
        "name": "Название вашей компании",
        "logo": {
            "@type": "ImageObject",
            "url": "https://вашсайт.kz/logo.svg"
        }
    },
    "mainEntity": {
        "@type": "ProfessionalService",
        "name": "Экспертные Консультации",
        "areasServed": "Бизнес и Менеджмент, Финансы и Инвестиции, Технологии и Образование",
        "serviceType": "Консультационные услуги"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Каталог услуг",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Бизнес-консультации"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Финансовые консультации"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Технологические консультации"
                }
            }
        ]
    },
    "founder": {
        "@type": "Person",
        "name": "Максат Кузембаев",
        "description": "Основатель с более чем 14-летним опытом в B2B сегменте. Специализация в Fintech и Ecommerce."
    },
    "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "telephone": "+7-123-456-7890",
        "email": "info@вашсайт.com"
    }
}


export default jsonLdData
