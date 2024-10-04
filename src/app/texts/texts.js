const title = "Studio Net Art";
const slogan = "El diseño que transforma el futuro";
const email = "contacto@studionetart.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los servicios de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3502042085";
const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "*Studio Net Art* es una empresa especializada en diseño y animación digital. Con un enfoque en la creación visual, transformamos ideas en experiencias dinámicas.",
        description2: "Nuestro equipo de profesionales está comprometido en crear soluciones visuales que no solo destaquen, sino que también marquen la diferencia en la cultura y el futuro.",
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: "Studio Net Art",
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=100086912767708&mibextid=LQQJ4d",
        instagram: "https://www.instagram.com/studionetart?igsh=YzZzdzNyd292cDR4&utm_source=qr",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
