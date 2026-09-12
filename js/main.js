// ============================================
// ДАННЫЕ О ПОЕЗДАХ — ЗАМЕНИ НА СВОИ!
// ============================================

const trainsData = [
    {
        id: 1,
        name: "Электропоезд ЭД4М (РЖД)",
        category: "electric",
        description: "Пригородный электропоезд ЭД4М в окраске РЖД. Пассажирская модель для маршрутов постоянного тока.",
        image: "images/trains/ed4m_rzd.jpg",
        versions: [
            { mcVersion: "1.12.2", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1CrxANX4VQJ5dwu7K2x8sOl0_7SwfT8KK/view?usp=drive_link" },
            { mcVersion: "1.14.4", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1dw2XeQzpXOBNpNByXYkEv24gjXJ6oinz/view?usp=drive_link" },
            { mcVersion: "1.15.2", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1OF2XLlp3Gjg5-sFi-Le7-BqPlUtLTJ0U/view?usp=drive_link" },
            { mcVersion: "1.16.5", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1S3uPYUOHJ5_k5GEmWhg2RdNapb18k8OV/view?usp=drive_link" },
            { mcVersion: "1.17.1", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1l8p6jg-hxW-buF5KRQTFhxotJmhTpik9/view?usp=drive_link" },
            { mcVersion: "1.18.2", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1e_VLMsUVDf_bWs3cJgqkZkyol53BmmuU/view?usp=drive_link" },
            { mcVersion: "1.19.4", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1rM678gi2MYypRv2nexAS9WFLbKdyqm9h/view?usp=drive_link" },
            { mcVersion: "1.20.1", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1_CVBAOA1zZT-z6i-b6x1BZg0l6HCVQEu/view?usp=drive_link" },
            { mcVersion: "1.21.1", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1s6FdgM1k6V9BMvpoX-63AFWi7sd_ECsg/view?usp=drive_link" },
            { mcVersion: "1.21.4", size: "265 MB  Google Drive", url: "https://drive.google.com/file/d/1s3VOKBo_dtCVANfRoxbav1Z7Et9EBANg/view?usp=drive_link" }
        ]
    },
    {
        id: 2,
        name: "Электровоз ЭП1М",
        category: "electric",
        description: "Пассажирский электровоз ЭП1М. Используется для вождения пассажирских составов на переменном токе.",
        image: "images/trains/ep1m.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 3,
        name: "Электровоз ЧС6",
        category: "electric",
        description: "Скоростной пассажирский электровоз ЧС6. Версия v0.1 by Ghost.",
        image: "images/trains/chs6.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 4,
        name: "Тепловоз 2М62",
        category: "diesel",
        description: "Двухсекционный грузовой тепловоз 2М62. Модель by Timoha.",
        image: "images/trains/2m62.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 5,
        name: "Электровоз ЭП2К",
        category: "electric",
        description: "Пассажирский электровоз ЭП2К постоянного тока. Один из основных пассажирских электровозов РЖД.",
        image: "images/trains/ep2k.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 6,
        name: "Электропоезд ЭР2",
        category: "electric",
        description: "Электропоезд ЭР2. Классический советский пригородный электропоезд.",
        image: "images/trains/er2_1122.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 7,
        name: "Дизельпоезд ДТ1 «Торжокский»",
        category: "diesel",
        description: "Дизельпоезд ДТ1 «Торжокский» в ремейк-версии. Подходит для пригородных неэлектрифицированных линий.",
        image: "images/trains/dt1_torzhok.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 8,
        name: "Электровоз ВЛ10у",
        category: "electric",
        description: "Грузовой электровоз ВЛ10у. Модель от 254KRAN.",
        image: "images/trains/vl10u.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 9,
        name: "Электровоз ВЛ10у-574",
        category: "electric",
        description: "Электровоз ВЛ10у-574. Модель от 254KRAN с индивидуальными особенностями.",
        image: "images/trains/vl10u_574.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 10,
        name: "Тепловоз ТЭП70 (Коломентепловоз)",
        category: "diesel",
        description: "Пассажирский тепловоз ТЭП70 от ПАО «Коломентепловоз».",
        image: "images/trains/tep70.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 11,
        name: "Электровоз ЧС7",
        category: "electric",
        description: "Пассажирский электровоз ЧС7. Модель MTS.",
        image: "images/trains/chs7.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 12,
        name: "Электровоз ВЛ60К (НЭВЗ)",
        category: "electric",
        description: "Электровоз ВЛ60К от НЭВЗ. Грузопассажирский электровоз переменного тока.",
        image: "images/trains/vl60k.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 13,
        name: "Маневровый тепловоз ЧМЭ3 (Škoda)",
        category: "diesel",
        description: "Маневровый тепловоз ЧМЭ3 от UkraineRailways.",
        image: "images/trains/chme3_skoda.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 14,
        name: "Тепловоз ЧМЭ3 (старая версия)",
        category: "diesel",
        description: "Старая версия маневрового тепловоза ЧМЭ3.",
        image: "images/trains/chme3_old.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 15,
        name: "Тепловоз 2ТЭ25КМ",
        category: "diesel",
        description: "Грузовой тепловоз 2ТЭ25КМ. Модель Dark_Angel.",
        image: "images/trains/2te25km.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 16,
        name: "Автомотриса РА2-090",
        category: "diesel",
        description: "Автомотриса РА2-090 для пригородных и малодеятельных участков.",
        image: "images/trains/ra2_090.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 17,
        name: "МВП-ИР (межрегиональный пассажирский вагон)",
        category: "passenger",
        description: "Межрегиональный пассажирский вагон МВП-ИР. Модель by FrozeRain.",
        image: "images/wagons/mvp_ir.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 18,
        name: "Полувагон 12-119",
        category: "freight",
        description: "Грузовой полувагон 12-119. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/half_wagon_12_119.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 19,
        name: "Крытый вагон 11-270",
        category: "freight",
        description: "Крытый грузовой вагон 11-270. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/boxcar_11_270.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 20,
        name: "Цистерна 68 т 15-1566",
        category: "freight",
        description: "Грузовая цистерна 68 т модели 15-1566. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/tank_15_1566.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 21,
        name: "Хоппер 19-7053-02",
        category: "freight",
        description: "Грузовой хоппер 19-7053-02. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/hopper_19_7053.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 22,
        name: "Платформа 13-401",
        category: "freight",
        description: "Грузовая платформа 13-401. Модель «Vg» в окраске UkraineRailways.",
        image: "images/wagons/platform_13_401.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 23,
        name: "Пассажирский вагон ТВЗ 61-4465",
        category: "passenger",
        description: "Пассажирский двухэтажный вагон ТВЗ 61-4465.",
        image: "images/wagons/tvz_61_4465.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 24,
        name: "Вагон-ресторан «Невский экспресс»",
        category: "passenger",
        description: "Вагон-ресторан состава «Невский экспресс». Модель RTS.",
        image: "images/wagons/nevsky_restaurant.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 25,
        name: "Вагон 2 класса «Невский экспресс»",
        category: "passenger",
        description: "Пассажирский вагон 2 класса состава «Невский экспресс». Модель RTS.",
        image: "images/wagons/nevsky_2class.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 26,
        name: "Вагон РЦЦ",
        category: "passenger",
        description: "Пассажирский вагон РЦЦ. Модель RTS.",
        image: "images/wagons/rcc_wagon.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 27,
        name: "Пассажирские вагоны «Хрущёвка»",
        category: "passenger",
        description: "Пак пассажирских вагонов «Хрущёвка». Модель RTS.",
        image: "images/wagons/khrushchevka.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    },
    {
        id: 28,
        name: "Пассажирские вагоны «Аммендорф» (старые)",
        category: "passenger",
        description: "Старые пассажирские вагоны «Аммендорф» в классическом исполнении. Поддерживаются все указанные версии Minecraft.",
        image: "images/wagons/ammendorf_old.jpg",
        versions: [
            { mcVersion: "1.12.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.14.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.15.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.16.5", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.17.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.18.2", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.19.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.20.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.1", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" },
            { mcVersion: "1.21.4", url: "https://drive.google.com/file/d/ТВОЙ_ID/view?usp=sharing" }
        ]
    }
];

// ============================================
// ИНИЦИАЛИЗАЦИЯ
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    initBurger();
    initFilters();
    renderTrains('all');
    initModal();
    initScrollAnimations();
    initCounters();
});

// ============================================
// ШАПКА И СКРОЛЛ
// ============================================

function initHeader() {
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ============================================
// БУРГЕР-МЕНЮ
// ============================================

function initBurger() {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// ФИЛЬТРЫ
// ============================================

function initFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            renderTrains(filter);
        });
    });
}

// ============================================
// ОТРИСОВКА ПОЕЗДОВ
// ============================================

function renderTrains(filter) {
    const grid = document.getElementById('trainsGrid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' 
        ? trainsData 
        : trainsData.filter(train => train.category === filter);
    
    filtered.forEach((train, index) => {
        const card = createTrainCard(train, index);
        grid.appendChild(card);
    });
}

function createTrainCard(train, index) {
    const card = document.createElement('div');
    card.className = 'train-card';
    card.style.animationDelay = `${index * 0.1}s`;
    
    const categoryNames = {
        steam: 'Паровоз',
        diesel: 'Тепловоз',
        electric: 'Электровоз',
        passenger: 'Пассажирский'
    };
    
    card.innerHTML = `
        <img src="${train.image}" alt="${train.name}" class="train-image" onerror="this.src='https://via.placeholder.com/400x220/1a1a2e/667eea?text=${encodeURIComponent(train.name)}'">
        <div class="train-info">
            <span class="train-category category-${train.category}">${categoryNames[train.category]}</span>
            <h3 class="train-name">${train.name}</h3>
            <p class="train-description">${train.description}</p>
            <div class="train-versions">
                ${train.versions.map(v => `<span class="version-tag">${v.mcVersion}</span>`).join('')}
            </div>
            <div class="train-actions">
                <button class="btn-download" onclick="openVersionModal(${train.id})">
                    Скачать
                </button>
                <button class="btn-info" onclick="showInfo(${train.id})">
                    Инфо
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// ============================================
// МОДАЛЬНОЕ ОКНО ВЕРСИЙ
// ============================================

function initModal() {
    const modal = document.getElementById('versionModal');
    const closeBtn = modal.querySelector('.modal-close');
    const backdrop = modal.querySelector('.modal-backdrop');
    
    closeBtn.addEventListener('click', closeVersionModal);
    backdrop.addEventListener('click', closeVersionModal);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVersionModal();
    });
}

function openVersionModal(trainId) {
    const modal = document.getElementById('versionModal');
    const train = trainsData.find(t => t.id === trainId);
    
    if (!train) return;
    
    document.getElementById('modalTrainName').textContent = train.name;
    
    const versionsList = document.getElementById('versionsList');
    versionsList.innerHTML = '';
    
    train.versions.forEach(version => {
        const item = document.createElement('div');
        item.className = 'version-item';
        item.innerHTML = `
            <div class="version-info">
                <span class="version-number">MC ${version.mcVersion}</span>
                <span class="version-size">${version.size}</span>
            </div>
            <a href="${version.url}" target="_blank" class="btn-download-small">
                Скачать
            </a>
        `;
        versionsList.appendChild(item);
    });
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeVersionModal() {
    const modal = document.getElementById('versionModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// ============================================
// ИНФОРМАЦИЯ О ПОЕЗДЕ
// ============================================

function showInfo(trainId) {
    const train = trainsData.find(t => t.id === trainId);
    if (!train) return;
    
    alert(`${train.name}\n\n${train.description}\n\nДоступные версии: ${train.versions.map(v => v.mcVersion).join(', ')}`);
}

// ============================================
// АНИМАЦИИ ПРИ СКРОЛЛЕ
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(40px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// ============================================
// СЧЁТЧИКИ
// ============================================

function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                observer.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// ============================================
// ПЛАВНЫЙ СКРОЛЛ
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
