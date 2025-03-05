const coupons = [
  {
    status: "show",
    title: {
      en: "Summer Gift Voucher",
      de: "sommer geschenkgutschein",
      hy: "ամառային նվեր - վաուչեր",
      af: "somer geskenkbewys",
      cs: "letní dárkový poukaz",
      bn: "গ্রীষ্মের উপহার ভাউচার",
      az: "yay hədiyyə vauçeri",
      ln: "sanza ya Zomi na Mibale",
    },
    couponCode: "SUMMER26",
    endTime: "2026-10-18T20:38:00.000Z",
    minimumAmount: 500,
    productType: "Grocery",
    logo: "https://i.ibb.co/23kQcB9/ins3.jpg",
    discountType: {
      type: "percentage",
      value: 10,
    },
  },
  {
    status: "show",
    title: {
      en: "Winter Gift Voucher",
      de: "wintergeschenkgutschein",
      az: "qış hədiyyə vauçeri",
      ln: "zima Mpho Mpho Mpho",
      ar: "قسيمة هدايا الشتاء",
      pt: "voucher de presente de inverno",
    },
    couponCode: "WINTER25",
    endTime: "2025-05-31T20:19:00.000Z",
    minimumAmount: 1500,
    productType: "Grocery",
    logo: "https://i.ibb.co/wBBYm7j/ins4.jpg",
    discountType: {
      type: "fixed",
      value: 100,
    },
  },
  {
    status: "show",
    title: {
      en: "Summer Gift Voucher",
      de: "sommer geschenkgutschein",
    },
    couponCode: "SUMMER24",
    endTime: "2024-12-20T00:56:00.000Z",
    minimumAmount: 1000,
    productType: "Cloths",
    logo: "https://i.ibb.co/4thS4Z1/ins2.jpg",
    discountType: {
      type: "percentage",
      value: 10,
    },
  },
  {
    status: "show",
    title: {
      en: "August Gift Voucher",
      de: "august geschenkgutschein",
      hy: "օգոստոսյան նվեր վաուչեր",
      af: "augustus geskenkbewys",
      cs: "augustový dárkový poukaz",
      az: "avqust hədiyyə vauçeri",
      ln: "sánzá ya zómi na mɔ̌kɔ́",
      ar: "قسيمة هدايا أغسطس",
      pt: "voucher presente agosto",
    },
    couponCode: "AUGUST24",
    endTime: "2024-10-31T08:30:00.000Z",
    minimumAmount: 2000,
    productType: "Grocery",
    logo: "https://i.ibb.co/PDLPDHc/ins1.jpg",
    discountType: {
      type: "percentage",
      value: 50,
    },
  },
];
module.exports = coupons;
