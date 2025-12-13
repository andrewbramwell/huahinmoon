module.exports = {
    "name": "Hua Hin Moon Thai Massage",
    "email": "huahinmoonthaimassage@gmail.com",
    "phoneForTel": "+441915102067",
    "phoneFormatted": "0191 510 2067",
    "mobileForTel": "+447796273858",
    "mobileFormatted": "07796 273858",
    "openingHours": "Mon-Sat: 11am-8pm, Sun: 11am-6pm",
    "onlineBooking": "https://huahinmoonthaimassage.setmore.com/",
    "address": {
        "lineOne": "16A Borough Rd",
        "lineTwo": "Sunniside",
        "city": "Sunderland",
        "state": "",
        "zip": "SR1 1EQ",
        "country": "United Kingdom",
        "mapLink": "https://maps.app.goo.gl/Z9rGongCpY2aM5yq7"
    },
    "socials": {
        "facebook": "https://www.facebook.com/huahinmoon/?locale=en_GB",
        "googleReview": "https://g.page/r/Ce8-snjkpTxkEBM/review",
    },
    //! Make sure you include the file protocol (e.g. https://) and that NO TRAILING SLASH is included
    "domain": "https://huahinmoonmassage.co.uk",
    "schema": {
        "business": {
            "@context": "https://schema.org",
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://huahinmoonmassage.co.uk/#business",
            "name": "Hua Hin Moon Thai Massage",
            "image": "https://huahinmoonmassage.co.uk/assets/svgs/logo.svg",
            "url": "https://huahinmoonmassage.co.uk",
            "telephone": "+441915102067",
            "email": "huahinmoonthaimassage@gmail.com",
            "priceRange": "££",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "16A Borough Rd, Sunniside",
                "addressLocality": "Sunderland",
                "postalCode": "SR1 1EQ",
                "addressCountry": "GB"
            },
            "geo": {
                "@type": "GeoCoordinates",
                "url": "https://maps.app.goo.gl/Z9rGongCpY2aM5yq7"
            },
            "openingHoursSpecification": [
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    "opens": "11:00",
                    "closes": "20:00"
                },
                {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": "Sunday",
                    "opens": "11:00",
                    "closes": "18:00"
                }
            ],
            "sameAs": [
                "https://g.page/r/Ce8-snjkpTxkEBM/review"
            ]
        },
        "website": {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://huahinmoonmassage.co.uk/#website",
            "url": "https://huahinmoonmassage.co.uk",
            "name": "Hua Hin Moon Thai Massage",
            "publisher": {
                "@id": "https://huahinmoonmassage.co.uk/#business"
            }
        }
    }
};


