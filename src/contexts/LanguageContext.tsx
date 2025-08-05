'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.language': 'EN',
    
    // Hero Section
    'hero.title': 'Daret - Où la Tradition Marocaine Rencontre l\'Épargne Intelligente',
    'hero.subtitle': 'Né de générations de confiance, Daret apporte la tontine marocaine à l\'ère numérique. Économisez de l\'argent ensemble, un tour à la fois — pas de banques, pas d\'intérêts, juste des gens qui s\'entraident.',
    
    // Benefits Section
    'benefits.title': 'Économiser ensemble, en toute simplicité.',
    'benefits.subtitle': 'Nous avons créé Daret pour apporter clarté, confiance et simplicité à une tradition qui soutient les communautés marocaines depuis des générations.',
    
    // Benefit Items
    'benefit1.title': 'Enraciné dans la culture. Réinventé pour aujourd\'hui.',
    'benefit1.description': 'Depuis des décennies, les familles, voisins et amis marocains utilisent "Daret" comme moyen de s\'entraider.',
    'benefit1.bullet1.title': 'Alimenté par la communauté, sans dette',
    'benefit1.bullet1.description': 'Oubliez les taux d\'intérêt et les scores de crédit. Daret est alimenté par les gens, pas par les banques.',
    'benefit1.bullet2.title': 'Rappels intelligents et alertes',
    'benefit1.bullet2.description': 'Plus besoin de courir après les gens. Tout le monde reste sur la bonne voie avec des mises à jour automatisées.',
    'benefit1.bullet3.title': 'Flexible pour toutes les tailles de groupe',
    'benefit1.bullet3.description': 'Commencez un Daret avec 3 personnes ou 30. L\'application s\'adapte au rythme de votre groupe.',
    
    'benefit2.title': 'C\'est simple, transparent et conçu pour vous.',
    'benefit2.description': 'Daret n\'est pas seulement une application — c\'est un mouvement.',
    'benefit2.bullet1.title': 'Pas besoin de compte bancaire',
    'benefit2.bullet1.description': 'Daret apporte l\'inclusion financière à tous.',
    'benefit2.bullet2.title': 'Planifiez grand, économisez petit',
    'benefit2.bullet2.description': 'Avec Daret, de petites contributions se transforment en grandes opportunités.',
    'benefit2.bullet3.title': '100% mobile, toujours connecté',
    'benefit2.bullet3.description': 'Créez et gérez vos cercles de n\'importe où.',
    
    'benefit3.title': 'Tous les cercles Daret, une seule application.',
    'benefit3.description': 'Gérez tous vos cercles Daret dans une seule application sécurisée.',
    'benefit3.bullet1.title': 'Cercles privés',
    'benefit3.bullet1.description': 'Vos groupes Daret sont chiffrés de bout en bout.',
    'benefit3.bullet2.title': 'Authentification OTP',
    'benefit3.bullet2.description': 'Connexion sécurisée avec empreinte digitale ou reconnaissance faciale.',
    'benefit3.bullet3.title': 'Conforme RGPD',
    'benefit3.bullet3.description': 'Nous surveillons votre compte 24/7 pour prévenir la fraude.',
    
    // CTA Section
    'cta.title': 'Rejoignez plus de 1000 utilisateurs',
    'cta.subtitle': 'Votre voyage vers la liberté financière commence ici. Téléchargez Daret aujourd\'hui !',
    
    // App Store Buttons
    'appstore.download': 'DISPONIBLE SUR',
    'appstore.appstore': 'APP STORE',
    'playstore.getiton': 'DISPONIBLE SUR',
    'playstore.googleplay': 'GOOGLE PLAY',
    
    // FAQ
    'faq.title': 'Questions fréquemment posées',
    'faq.subtitle': 'Trouvez des réponses aux questions les plus courantes sur Daret.',
    
    // Footer
    'footer.description': 'Daret est plus qu\'une app. C\'est l\'avenir de l\'épargne collective.',
    'footer.quicklinks': 'Liens rapides',
    'footer.company': 'Entreprise',
    'footer.about': 'À propos',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.contact': 'Nous contacter',
    'footer.email': 'Email',
    'footer.phone': 'Téléphone',
    'footer.copyright': 'Copyright 2025 Daret. Tous droits réservés.',

    // Privacy Policy
    'privacyPolicy.title': 'Politique de confidentialité',
    'privacyPolicy.company': 'Entreprise',
    'privacyPolicy.effectiveDate': 'Date d\'entrée en vigueur : 24 juillet 2025',
    'privacy.dataController.title': '1. Responsable du traitement des données',
    'privacy.dataController.content': 'Le responsable du traitement des données personnelles est ATLAS GLOBAL TECHNOLOGIES LTD.',
    'privacy.dataCollected.title': '2. Données collectées',
    'privacy.dataCollected.content': 'Nous collectons les informations nécessaires au fonctionnement de l\'application.',
    'privacy.purpose.title': '3. Objectif du traitement',
    'privacy.purpose.content': 'Les données sont utilisées uniquement pour fournir et améliorer l\'application Daret.',

    // Terms of Use
    'termsOfUse.title': 'Conditions d\'utilisation',
    'termsOfUse.effectiveDate': 'Date d\'entrée en vigueur : 24 juillet 2025',
    'terms.serviceDescription.title': '2. Description du service',
    'terms.serviceDescription.content': 'Daret est une plateforme pour organiser les groupes d\'épargne traditionnels marocains.',
    'terms.acceptableUse.title': '5. Utilisation acceptable',
    'terms.acceptableUse.content': 'Les utilisateurs acceptent d\'utiliser l\'Application uniquement à des fins légales.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.language': 'FR',
    
    // Hero Section
    'hero.title': 'Daret - Where Moroccan Tradition Meets Smart Saving',
    'hero.subtitle': 'Born from generations of trust, Daret brings the Moroccan tontine to the digital age.',
    
    // Benefits Section
    'benefits.title': 'Saving together, made simple.',
    'benefits.subtitle': 'We created Daret to bring clarity, trust, and simplicity to a tradition that has supported Moroccan communities.',
    
    // Benefit Items
    'benefit1.title': 'Rooted in Culture. Reimagined for Today.',
    'benefit1.description': 'For decades, Moroccan families have used "Daret" as a way to support each other.',
    'benefit1.bullet1.title': 'Community-Powered, No Debt',
    'benefit1.bullet1.description': 'Forget interest rates and credit scores. Daret is powered by people, not banks.',
    'benefit1.bullet2.title': 'Smart Reminders & Alerts',
    'benefit1.bullet2.description': 'No more chasing people. Everyone stays on track with automated updates.',
    'benefit1.bullet3.title': 'Flexible for All Group Sizes',
    'benefit1.bullet3.description': 'Start a Daret with 3 people or 30. The app adapts to your group.',
    
    'benefit2.title': 'It\'s Simple, Transparent, and Built for You.',
    'benefit2.description': 'Daret isn\'t just an app — it\'s a movement.',
    'benefit2.bullet1.title': 'No Need for a Bank Account',
    'benefit2.bullet1.description': 'Daret brings financial inclusion to everyone.',
    'benefit2.bullet2.title': 'Plan Big, Save Small',
    'benefit2.bullet2.description': 'Small consistent contributions turn into big opportunities.',
    'benefit2.bullet3.title': '100% Mobile, Always Connected',
    'benefit2.bullet3.description': 'Create and manage your circles from anywhere.',
    
    'benefit3.title': 'All Daret Circles, One App.',
    'benefit3.description': 'Manage all your Daret circles in one secure app.',
    'benefit3.bullet1.title': 'Private Circles',
    'benefit3.bullet1.description': 'Your Daret groups are encrypted end-to-end.',
    'benefit3.bullet2.title': 'OTP Authentication',
    'benefit3.bullet2.description': 'Log in safely using fingerprint or facial recognition.',
    'benefit3.bullet3.title': 'GDPR Compliant',
    'benefit3.bullet3.description': 'We monitor your account 24/7 to prevent fraud.',
    
    // CTA Section
    'cta.title': 'Join Over 1 Thousand Users',
    'cta.subtitle': 'Your journey to financial freedom starts here. Download Daret today!',
    
    // App Store Buttons
    'appstore.download': 'AVAILABLE ON',
    'appstore.appstore': 'APP STORE',
    'playstore.getiton': 'AVAILABLE ON',
    'playstore.googleplay': 'GOOGLE PLAY',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Find answers to common questions about Daret.',
    
    // Footer
    'footer.description': 'Daret is more than an app. It\'s the future of collective saving.',
    'footer.quicklinks': 'Quick Links',
    'footer.company': 'Company',
    'footer.about': 'About',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.contact': 'Contact Us',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.copyright': 'Copyright 2025 Daret. All rights reserved.',

    // Privacy Policy
    'privacyPolicy.title': 'Privacy Policy',
    'privacyPolicy.company': 'Company',
    'privacyPolicy.effectiveDate': 'Effective Date: July 24, 2025',
    'privacy.dataController.title': '1. Data Controller',
    'privacy.dataController.content': 'The data controller for personal data is ATLAS GLOBAL TECHNOLOGIES LTD.',
    'privacy.dataCollected.title': '2. Data Collected',
    'privacy.dataCollected.content': 'We collect information necessary for the operation of the application.',
    'privacy.purpose.title': '3. Purpose of Processing',
    'privacy.purpose.content': 'Data is used solely to provide and improve the Daret application.',

    // Terms of Use
    'termsOfUse.title': 'Terms of Use',
    'termsOfUse.effectiveDate': 'Effective Date: July 24, 2025',
    'terms.serviceDescription.title': '2. Service Description',
    'terms.serviceDescription.content': 'Daret is a platform for organizing traditional Moroccan savings groups.',
    'terms.acceptableUse.title': '5. Acceptable Use',
    'terms.acceptableUse.content': 'Users agree to use the Application only for legal purposes.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
