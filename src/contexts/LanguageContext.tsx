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
    'benefits.subtitle': 'Nous avons créé Daret pour apporter clarté, confiance et simplicité à une tradition qui soutient les communautés marocaines depuis des générations. Gérer une tontine ne devrait pas être stressant, confus ou exclusif. Avec Daret, nous voulions préserver l\'esprit de solidarité tout en offrant un outil moderne et sécurisé qui aide les gens à s\'organiser, suivre et grandir ensemble.',
    
    // Benefit Items
    'benefit1.title': 'Enraciné dans la culture. Réinventé pour aujourd\'hui.',
    'benefit1.description': 'Depuis des décennies, les familles, voisins et amis marocains utilisent "Daret" comme moyen de s\'entraider — mettant de l\'argent en commun à chaque cycle pour aider quelqu\'un à atteindre un objectif : un mariage, une voiture, une petite entreprise, ou juste un filet de sécurité.',
    'benefit1.bullet1.title': 'Alimenté par la communauté, sans dette',
    'benefit1.bullet1.description': 'Oubliez les taux d\'intérêt et les scores de crédit. Daret est alimenté par les gens, pas par les banques.',
    'benefit1.bullet2.title': 'Rappels intelligents et alertes',
    'benefit1.bullet2.description': 'Plus besoin de courir après les gens. Tout le monde reste sur la bonne voie avec des mises à jour automatisées.',
    'benefit1.bullet3.title': 'Flexible pour toutes les tailles de groupe',
    'benefit1.bullet3.description': 'Commencez un Daret avec 3 personnes ou 30. L\'application s\'adapte au rythme, à la fréquence et à l\'ordre de paiement de votre groupe.',
    
    'benefit2.title': 'C\'est simple, transparent et conçu pour vous.',
    'benefit2.description': 'Daret n\'est pas seulement une application — c\'est un mouvement. Une façon plus intelligente de gérer l\'argent collectivement, inspirée par la tradition et alimentée par la technologie.',
    'benefit2.bullet1.title': 'Pas besoin de compte bancaire',
    'benefit2.bullet1.description': 'Daret apporte l\'inclusion financière à tous.',
    'benefit2.bullet2.title': 'Planifiez grand, économisez petit',
    'benefit2.bullet2.description': 'Vous ne pouvez pas économiser seul ? Avec Daret, de petites contributions constantes de chaque membre se transforment en grandes opportunités pour tous.',
    'benefit2.bullet3.title': '100% mobile, toujours connecté',
    'benefit2.bullet3.description': 'Créez et gérez vos cercles de n\'importe où. Tout ce dont vous avez besoin, c\'est votre téléphone.',
    
    'benefit3.title': 'Tous les cercles Daret, une seule application.',
    'benefit3.description': 'Gérez tous vos cercles Daret dans une seule application sécurisée. Suivez, rejoignez et gérez facilement toutes vos tontines depuis un seul endroit — avec une confidentialité totale, des rappels intelligents et une sécurité de premier plan.',
    'benefit3.bullet1.title': 'Cercles privés',
    'benefit3.bullet1.description': 'Vos groupes Daret sont chiffrés de bout en bout. Seuls les membres peuvent voir ou gérer l\'activité.',
    'benefit3.bullet2.title': 'Authentification OTP',
    'benefit3.bullet2.description': 'Connectez-vous en toute sécurité en utilisant l\'empreinte digitale, la reconnaissance faciale ou les codes à usage unique (OTP).',
    'benefit3.bullet3.title': 'Conforme RGPD',
    'benefit3.bullet3.description': 'Nous surveillons votre compte 24h/24 et 7j/7 pour prévenir la fraude et garder vos données en sécurité.',
    
    // CTA Section
    'cta.title': 'Rejoignez Plus de 1000 Utilisateurs Pour Transformer Vos Finances',
    'cta.subtitle': 'Votre voyage vers la liberté financière commence ici. Téléchargez Daret aujourd\'hui et faites le premier pas vers un avenir financier plus brillant !',
    
    // App Store Buttons
    'appstore.download': 'Disponible sur',
    'appstore.appstore': 'App Store',
    'playstore.getiton': 'DISPONIBLE SUR',
    'playstore.googleplay': 'Google Play',
    
    // Testimonials
    'testimonials.title': 'Ce que disent nos premiers utilisateurs',
    'testimonials.subtitle': 'Écoutez ceux qui ont essayé Daret. De vraies histoires de vraies personnes',
    'testimonials.trusted': 'Fait confiance par plus de 1000+ clients dans le monde',
    
    // FAQ
    'faq.title': 'FAQ',
    'faq.subtitle': 'Questions fréquemment posées',
    'faq.askus': 'Demandez-nous tout !',
    'faq.question1': 'Daret est-il sécurisé ?',
    'faq.answer1': 'Oui. Vos données sont chiffrées et protégées. Nous ne stockons aucun actif financier et ne réalisons pas de transactions, garantissant une expérience sûre.',
    'faq.question2': 'Puis-je utiliser Daret sur plusieurs appareils ?',
    'faq.answer2': 'Oui. Vous pouvez accéder à votre compte Daret en toute sécurité depuis n\'importe quel appareil en utilisant vos identifiants.',
    'faq.question3': 'Puis-je connecter mon compte bancaire à Daret ?',
    'faq.answer3': 'Non. Daret ne se connecte pas à votre compte bancaire. Toutes les contributions et les paiements sont gérés directement entre les membres.',
    'faq.question4': 'Ai-je besoin d\'expertise financière pour utiliser l\'application ?',
    'faq.answer4': 'Pas du tout. Daret est conçu pour être simple et intuitif pour tous, sans aucune formation financière requise.',
    'faq.question5': 'Que faire si j\'ai besoin d\'aide pour utiliser l\'application ?',
    'faq.answer5': 'Vous pouvez contacter notre équipe de support directement depuis l\'application. Nous sommes là pour vous guider à chaque étape.',
    
    // Testimonials content
    'testimonial1.message': 'J\'ai toujours été intéressée à rejoindre une daret, mais je m\'inquiétais de ne pas suivre le rythme ou d\'oublier mon tour. Avec Daret, je reçois des rappels clairs, je peux voir les progrès du groupe, et je n\'ai pas besoin de demander des mises à jour. Cela rend toute l\'expérience plus facile et plus transparente.',
    'testimonial2.message': 'Je fais partie de trois darets différentes — une avec la famille, une avec des amis, et une au travail. Les gérer toutes était chaotique. Daret m\'aide à rester organisé, me rappelle quand c\'est mon tour, et qui je dois payer.',
    'testimonial3.message': 'Avant Daret, suivre qui avait payé et quand était épuisant. J\'avais l\'habitude de tout écrire dans un carnet, et si je le perdais, tout le groupe était confus. Avec Daret, je peux voir toutes les contributions en un seul endroit, envoyer des rappels, et éviter les malentendus. Cela m\'a donné la tranquillité d\'esprit.',
    
    // Footer
    'footer.description': 'Daret est plus qu\'une app. C\'est l\'avenir de l\'épargne collective, bâti sur la confiance et la communauté.',
    'footer.quicklinks': 'Liens rapides',
    'footer.company': 'Entreprise',
    'footer.about': 'À propos',
    'footer.legal': 'Mentions légales',
    'footer.privacy': 'Politique de confidentialité',
    'footer.contact': 'Nous contacter',
    'footer.email': 'Email',
    'footer.phone': 'Téléphone',
    'footer.copyright': 'Copyright 2025 Daret. Tous droits réservés.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.language': 'FR',
    
    // Hero Section
    'hero.title': 'Daret - Where Moroccan Tradition Meets Smart Saving',
    'hero.subtitle': 'Born from generations of trust, Daret brings the Moroccan tontine to the digital age. Save money together, one round at a time — no banks, no interest, just people helping people.',
    
    // Benefits Section
    'benefits.title': 'Saving together, made simple.',
    'benefits.subtitle': 'We created Daret to bring clarity, trust, and simplicity to a tradition that has supported Moroccan communities for generations. Managing a tontine shouldn\'t be stressful, confusing, or exclusive. With Daret, we wanted to preserve the spirit of solidarity while offering a modern, secure tool that helps people organize, track, and grow together.',
    
    // Benefit Items
    'benefit1.title': 'Rooted in Culture. Reimagined for Today.',
    'benefit1.description': 'For decades, Moroccan families, neighbors, and friends have used "Daret" as a way to support each other — pooling money each cycle to help someone achieve a goal: a wedding, a car, a small business, or just a safety net.',
    'benefit1.bullet1.title': 'Community-Powered, No Debt',
    'benefit1.bullet1.description': 'Forget interest rates and credit scores. Daret is powered by people, not banks.',
    'benefit1.bullet2.title': 'Smart Reminders & Alerts',
    'benefit1.bullet2.description': 'No more chasing people. Everyone stays on track with automated updates.',
    'benefit1.bullet3.title': 'Flexible for All Group Sizes',
    'benefit1.bullet3.description': 'Start a Daret with 3 people or 30. The app adapts to your group\'s rhythm, frequency, and payout order.',
    
    'benefit2.title': 'It\'s Simple, Transparent, and Built for You.',
    'benefit2.description': 'Daret isn\'t just an app — it\'s a movement. A smarter way to manage money collectively, inspired by tradition and powered by technology.',
    'benefit2.bullet1.title': 'No Need for a Bank Account',
    'benefit2.bullet1.description': 'Daret brings financial inclusion to everyone.',
    'benefit2.bullet2.title': 'Plan Big, Save Small',
    'benefit2.bullet2.description': 'Can\'t save alone? With Daret, small consistent contributions from each member turn into big opportunities for everyone.',
    'benefit2.bullet3.title': '100% Mobile, Always Connected',
    'benefit2.bullet3.description': 'Create and manage your circles from anywhere. All you need is your phone.',
    
    'benefit3.title': 'All Daret Circles, One App.',
    'benefit3.description': 'Manage all your Daret circles in one secure app. Easily track, join, and manage all your tontines from one place — with total privacy, smart reminders, and top-tier security.',
    'benefit3.bullet1.title': 'Private Circles',
    'benefit3.bullet1.description': 'Your Daret groups are encrypted end-to-end. Only members can view or manage activity.',
    'benefit3.bullet2.title': 'OTP Authentication',
    'benefit3.bullet2.description': 'Log in safely using fingerprint, facial recognition, or one-time passcodes (OTP).',
    'benefit3.bullet3.title': 'RGPD Compliant',
    'benefit3.bullet3.description': 'We monitor your account 24/7 to prevent fraud and keep your data safe.',
    
    // CTA Section
    'cta.title': 'Join Over 1 Thousand Users To Transform Your Finances',
    'cta.subtitle': 'Your journey to financial freedom starts here. Download Daret today and take the first step towards a brighter financial future !',
    
    // App Store Buttons
    'appstore.download': 'AVAILABLE ON',
    'appstore.appstore': 'APP STORE',
    'playstore.getiton': 'AVAILABLE ON',
    'playstore.googleplay': 'GOOGLE PLAY',
    
    // Testimonials
    'testimonials.title': 'What Our Early Users Say',
    'testimonials.subtitle': 'Hear from those who have tried Daret. Real Stories from Real People',
    'testimonials.trusted': 'Trusted by 1000+ customers worldwide',
    
    // FAQ
    'faq.title': 'FAQ\'S',
    'faq.subtitle': 'Frequently Asked Questions',
    'faq.askus': 'Ask us anything!',
    'faq.question1': 'Is Daret secure?',
    'faq.answer1': 'Yes. Your data is encrypted and protected. We don\'t store any financial assets or conduct transactions, ensuring a safe experience.',
    'faq.question2': 'Can I use Daret on multiple devices?',
    'faq.answer2': 'Yes. You can access your Daret account securely from any device using your credentials.',
    'faq.question3': 'Can I connect my bank account to Daret?',
    'faq.answer3': 'No. Daret does not connect to your bank account. All contributions and payouts are managed directly between members.',
    'faq.question4': 'Do I need any financial expertise to use the app?',
    'faq.answer4': 'Not at all. Daret is designed to be simple and intuitive for everyone, with no financial background required.',
    'faq.question5': 'What if I need help using the app?',
    'faq.answer5': 'You can contact our support team directly from the app. We\'re here to guide you at every step.',
    
    // Testimonials content
    'testimonial1.message': 'I\'ve always been interested in joining a daret, but I worried about not keeping up or forgetting my turn. With Daret, I get clear reminders, I can see the group\'s progress, and I don\'t need to ask around for updates. It makes the whole experience easier and more transparent.',
    'testimonial2.message': 'I\'m part of three different darets — one with family, one with friends, and one at work. Managing all of them was messy. Daret helps me stay organized, reminds me when it\'s my turn, and who I should pay.',
    'testimonial3.message': 'Before Daret, keeping track of who paid and when was exhausting. I used to write everything in a notebook, and if I lost it, the whole group was confused. With Daret, I can see all the contributions in one place, send reminders, and avoid misunderstandings. It gave me peace of mind.',
    
    // Footer
    'footer.description': 'Daret is more than an app. It\'s the future of collective saving, built on trust and community.',
    'footer.quicklinks': 'Quick Links',
    'footer.company': 'Company',
    'footer.about': 'About Us',
    'footer.legal': 'Legal Notice',
    'footer.privacy': 'Privacy Policy',
    'footer.contact': 'Contact Us',
    'footer.email': 'Email',
    'footer.phone': 'Phone',
    'footer.copyright': 'Copyright © 2025 Daret. All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('daret-language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
    setIsLoaded(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('daret-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};